package com.efraiser.test.db.service.util;

import com.alibaba.druid.pool.DruidDataSource;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.ZipFileUtil;
import com.efraiser.test.db.service.sys.systablequery.SysTableQueryService;
import com.efraiser.test.db.service.sys.systablequery.impl.SysTableQueryServiceImpl;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipOutputStream;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExportExcelService {

    private Logger logger = LoggerFactory.getLogger(ExportExcelService.class);

    @Autowired
    private SysTableQueryService sysTableQueryService;

    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private DruidDataSource druidDataSource;


    public String exportExcelForSql(String sqls, String userId) throws Exception {

        int index = 1;
        String tempPath = localConfig.getProperties().getTempStringPath();

        String now = DateUtil.getNow("yyyyMMddHHmmss");
        String Filepath = tempPath + userId;
        File file = new File(Filepath);
        if (!file.exists()) {
            file.mkdirs();
        }

        String fileListPath = Filepath + "/fileList";
        String zipPath = Filepath + "/zip";
        file = new File(fileListPath);
        if (!file.exists()) {
            file.mkdirs();
        } else {
            File[] listFiles = file.listFiles();
            for (int i = 0; i < listFiles.length; i++) {
                if (!listFiles[i].isDirectory()) {
                    listFiles[i].delete();
                }
            }
        }
        file = new File(zipPath);
        if (!file.exists()) {
            file.mkdirs();
        } else {
            File[] listFiles = file.listFiles();
            for (int i = 0; i < listFiles.length; i++) {
                if (!listFiles[i].isDirectory()) {
                    listFiles[i].delete();
                }
            }
        }
        String outputPath = fileListPath + "/" + now + "_" + index + ".xls";
        HSSFWorkbook wb = new HSSFWorkbook(); // 产生工作簿对象
        FileOutputStream os;
        os = new FileOutputStream(outputPath);
        wb.write(os);
        os.close();
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(outputPath));
        String[] sqlList = sqls.split(";");
        for (String list : sqlList) {
            if ("s".equalsIgnoreCase(list.substring(0, 1))) {
                sqls = list;
            } else {
                Sql sql = Sqls.create(list);

                SysTableQueryServiceImpl sysTableQueryServiceImpl = (SysTableQueryServiceImpl) sysTableQueryService;
                sysTableQueryServiceImpl.dao().execute(sql);
            }
        }
        HSSFWorkbook workbook = new HSSFWorkbook(fs); // 产生工作簿对象
        CellStyle csTd = createBorderCellStyle(workbook);


        Connection conn = null;
        Statement stmt = null;
        ResultSet result = null;
        List<String> fileSources = new ArrayList<>();
        try {
            conn =druidDataSource.getConnection();
            stmt = conn.createStatement();
            result = stmt.executeQuery(sqls);

            HSSFSheet sheet = null;
            HSSFRow row = null;
            HSSFCell cell = null;
            int rowNum = 50000;
            int q = 0;
            boolean b = false;
            ResultSetMetaData rSmd = result.getMetaData();
            int colCount = rSmd.getColumnCount();// 获取列数
            List<String> colums = new ArrayList<>();
            for (int s = 1; s <= colCount; s++) {
                colums.add(rSmd.getColumnName(s));
            }
            while (result.next()) {
                if (rowNum == 50000) {
                    if (b == true) {
                        os = new FileOutputStream(outputPath);
                        workbook.write(os);
                        os.close();
                        if (q == 1) {
                            fileSources.add(outputPath);
                            index++;
                            q = 0;
                            outputPath = fileListPath + "/" + now + "_" + index + ".xls";
                        }
                        os = new FileOutputStream(outputPath);
                        wb.write(os);
                        os.close();
                        fs = new POIFSFileSystem(new FileInputStream(outputPath));
                        workbook = new HSSFWorkbook(fs); // 产生工作簿对象
                        csTd = createBorderCellStyle(workbook);
                    }
                    rowNum = 1;
                    sheet = workbook.createSheet("sheet" + q);
                    row = sheet.createRow(rowNum - 1);
                    for (int z = 0; z < colums.size(); z++) {
                        cell = row.createCell(z);
                        cell.setCellValue(colums.get(z));
                        cell.setCellStyle(csTd);
                    }
                    q++;
                    b = true;
                }
                row = sheet.createRow(rowNum);
                for (int i = 0; i < colCount; i++) {
                    cell = row.createCell(i);
                    cell.setCellValue(result.getString(i + 1));
                    cell.setCellStyle(csTd);
                }
                rowNum++;
            }
            FileOutputStream fileOut = new FileOutputStream(outputPath);
            workbook.write(fileOut);
            fileOut.close();
            ZipFileUtil.zip(fileListPath, zipPath + "/" + now + ".zip");
            // zip(file,Filepath+".zip");
            return zipPath + "/" + now + ".zip";
        } catch (Exception e) {
            logger.error("exportExcelForSql() error! sqls:[" + sqls + "],  userId:[" + userId + "]", e);
        } finally {
            try {
                if (result != null) {
                    result.close();
                }
            } catch (Exception e) {
                logger.error("", e);
            }

            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (Exception e) {
                logger.error("", e);
            }

            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
                logger.error("", e);
            }
        }
        return null;
    }

    /**
     * 创建代边框的CellStyle
     *
     * @param wb
     * @param wb 单元格对齐方式
     * @return
     */
    private  CellStyle createBorderCellStyle(HSSFWorkbook wb) {
        CellStyle cs = wb.createCellStyle();
        cs.setBorderLeft(CellStyle.BORDER_THIN);
        cs.setBorderRight(CellStyle.BORDER_THIN);
        cs.setBorderTop(CellStyle.BORDER_THIN);
        cs.setBorderBottom(CellStyle.BORDER_THIN);
        return cs;
    }

    private void zip(File inputFile, String zipFileName) {
        try {
            // 创建文件输出对象out,提示:注意中文支持
            FileOutputStream out = new FileOutputStream(new String(zipFileName.getBytes("UTF-8")));
            // 將文件輸出ZIP输出流接起来
            ZipOutputStream zOut = new ZipOutputStream(out);

            zip(zOut, inputFile, "");
            ZipFileUtil.zip(inputFile.getPath(), zipFileName);
            zOut.close();

        } catch (Exception e) {
            logger.error("zip() error! zipFileName:[" + zipFileName + "]", e);
        }

    }

    private void zip(ZipOutputStream zOut, File file, String base) {
        try {

            // 如果文件句柄是目录
            // if (file.isDirectory()) {
            // 获取目录下的文件
            File[] listFiles = file.listFiles();
            // 建立ZIP条目
            zOut.putNextEntry(new ZipEntry(base + "/"));

            base = (base.length() == 0 ? "" : base + "/");
            for (int i = 0; i < listFiles.length; i++) {
                zOut.putNextEntry(new ZipEntry(listFiles[i].getName()));
                writeFile(zOut, listFiles[i]);
            }
        } catch (Exception e) {
            logger.error("zip() error!", e);
        }

    }

    private void writeFile(ZipOutputStream zOut, File file) throws IOException {
        FileInputStream in = new FileInputStream(file);
        int len;
        try {
            while ((len = in.read()) != -1) {
                zOut.write(len);
            }
        } catch (Exception e) {
            logger.error("writeFile() error! file:[" + file.getPath() + "]", e);
        } finally {
            in.close();
        }

    }

}
