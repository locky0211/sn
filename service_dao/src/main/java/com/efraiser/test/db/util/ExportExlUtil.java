package com.efraiser.test.db.util;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.ExcelUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.InsideOrganInfo;
import com.efraiser.test.db.model.ews.ScoreZfphSumSls;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.nutz.dao.Dao;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.annotation.Comment;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExportExlUtil {

    private Logger log = LoggerFactory.getLogger(ExportExlUtil.class);

    @Autowired
    private LocalConfig localConfig;

    @Autowired
    public Dao dao;


    public String doWbExcel(String fileName, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws Exception {
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + fileName));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        final CellStyle csTd = ExcelUtil.createBorderCellStyleTxt(wb);
        final HSSFSheet sheet = wb.getSheetAt(0);
        return drowExcel(fileName, wb, csTd, sheet, dataNum, dataCol, bulidSql, brno, reportDate);
    }


    public String doWbExcelForOrgan(String fileName, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws Exception {
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + fileName));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        final CellStyle csTd = ExcelUtil.createBorderCellStyleTxt(wb);
        final HSSFSheet sheet = wb.getSheetAt(0);
		/*sheet.setDefaultRowHeight((short) (2 * 256)); //设置默认行高，表示2个字符的高度
		sheet.setDefaultColumnWidth(17);*/
        return drowExcelForOrgan(fileName, wb, csTd, sheet, dataNum, dataCol, bulidSql, brno, reportDate);
    }

    public String doWbExcelSls(String fileName, final int dataNum, final int dataCol, List<ScoreZfphSumSls> scoreZfphSumSls, String brno, String reportDate, String fBrno) throws Exception {
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + fileName));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        final CellStyle csTd = ExcelUtil.createBorderCellStyleTxt(wb);
        final HSSFSheet sheet = wb.getSheetAt(0);
        if (StrUtil.isNotNull(fBrno)) {
            fileName = fBrno + fileName;
        }
        return drowExcelSls(fileName, wb, csTd, sheet, dataNum, dataCol, scoreZfphSumSls, brno, reportDate);
    }


    public String doWbExcelSlsForOrgan(String fileName, final int dataNum, final int dataCol, List<ScoreZfphSumSls> scoreZfphSumSls, String brno, String reportDate, String fBrno) throws Exception {
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + fileName));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        final CellStyle csTd = ExcelUtil.createBorderCellStyleTxt(wb);
        final HSSFSheet sheet = wb.getSheetAt(0);
        if (StrUtil.isNotNull(fBrno)) {
            fileName = fBrno + fileName;
        }
        return doWbExcelSlsForOrgan(fileName, wb, csTd, sheet, dataNum, dataCol, scoreZfphSumSls, brno, reportDate);
    }

    public String doWbExcelrd(String fileName, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws Exception {
        POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + fileName));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        final CellStyle csTd = ExcelUtil.createBorderCellStyleTxt(wb);
        final HSSFSheet sheet = wb.getSheetAt(0);
        return drowExcelrd(fileName, wb, csTd, sheet, dataNum, dataCol, bulidSql, brno, reportDate);
    }

    public String doWbExcel(String fileName, HSSFWorkbook wb, HSSFSheet sheet, final int dataNum, final int dataCol, String bulidSql) throws IOException {
        final CellStyle csTd = ExcelUtil.createBorderCellStyle(wb);
        return drowExcel(fileName, wb, csTd, sheet, dataNum, dataCol, bulidSql, null, null);
    }


    private String drowExcel(String fileName, HSSFWorkbook wb, final CellStyle csTd, final HSSFSheet sheet, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws IOException {
        Sql sql = Sqls.create(bulidSql);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                ResultSetMetaData rSmd = rs.getMetaData();
                int colCount = rSmd.getColumnCount();// 获取列数
                int rowNumber = dataNum;
                int colNumber = dataCol;
                HSSFRow row = null;
                HSSFCell cell = null;
                while (rs.next()) {
                    if (rowNumber <= 10000) {
                        if (rowNumber != 0) {
                            row = sheet.createRow(rowNumber);
                            for (int k = colNumber; k < colCount; k++) {
                                cell = row.createCell(k);
                                //cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                                cell.setCellValue(rs.getString(k + 1));
                                cell.setCellStyle(csTd);
                            }
                        }
                        rowNumber++;
                    } else {
                        return null;
                    }
                }
                return null;
            }
        });
        dao.execute(sql);
        String dir = localConfig.getProperties().getTempStringPath() + DateUtil.getNow("yyyyMMdd");
        File f = new File(dir);
        if (!f.exists()) {
            f.mkdirs();
        }
        String path = dir + "/";
        if (brno != null) {
            path = path + "" + brno + "" + reportDate;
        }
        path = path + fileName;
        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
        return path;
    }


    private String drowExcelForOrgan(String fileName, HSSFWorkbook wb, final CellStyle csTd, final HSSFSheet sheet, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws IOException {
        Sql organSql = Sqls.create("SELECT * from SAM.EAST_INSIDE_ORGAN_INFO");
        organSql.setCallback(Sqls.callback.entities());
        organSql.setEntity(dao.getEntity(InsideOrganInfo.class));
        dao.execute(organSql);

        final List<InsideOrganInfo> infos = organSql.getList(InsideOrganInfo.class);
        Sql sql = Sqls.create(bulidSql);
        sql.setCallback(new SqlCallback() {
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                ResultSetMetaData rSmd = rs.getMetaData();
                int colCount = rSmd.getColumnCount();// 获取列数
                int rowNumber = dataNum;
                int colNumber = dataCol;
                HSSFRow row = null;
                HSSFCell cell = null;
                while (rs.next()) {
                    if (rowNumber != 0) {
                        row = sheet.createRow(rowNumber);
                        for (int k = colNumber; k < colCount; k++) {
                            cell = row.createCell(k);
                            //cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                            int j = k + 1;
                            if (j == colCount) {
                                String nbjgh = rs.getString(k + 1);
                                for (InsideOrganInfo info : infos) {
                                    if (info.getOrganCode().equals(nbjgh)) {
                                        nbjgh = info.getOrganName();
                                    }
                                }
                                cell.setCellValue(nbjgh);
                                cell.setCellStyle(csTd);
                                //sheet.autoSizeColumn((short)k);
                            } else {
                                cell.setCellValue(rs.getString(k + 1));
                                cell.setCellStyle(csTd);
                            }
                        }
                    }
                    rowNumber++;
                }
                return null;
            }
        });
        dao.execute(sql);
        String dir = localConfig.getProperties().getTempStringPath() + File.separator + "多法人问题明细" + DateUtil.getNow("yyyyMMdd");
        File f = new File(dir);
        if (!f.exists()) {
            f.mkdirs();
        }
        String path = dir + "/";
        if (brno != null) {
            path = path + "" + brno + "" + reportDate;
        }
        path = path + fileName;
        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
        return path;
    }

    public <SysBmgl> String drowExcelSls(String fileName, HSSFWorkbook wb, final CellStyle csTd, final HSSFSheet sheet, final int dataNum, final int dataCol, List<ScoreZfphSumSls> scoreZfphSumSls, String brno, String reportDate) throws IOException, NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        //log.debug("进入drowExcelSls方法");
        List<ScoreZfphSumSls> notHaveSJBH = new ArrayList<ScoreZfphSumSls>();
        java.lang.reflect.Field[] field = ScoreZfphSumSls.class.getDeclaredFields();
        for (ScoreZfphSumSls sumSls : scoreZfphSumSls) {
            if (StrUtil.isNull(sumSls.getSjbh()) && StrUtil.isNull(sumSls.getNbjgh())) {
                notHaveSJBH.add(sumSls);
            }
        }
        int rowNumber = dataNum;
        int colNumber = dataCol;
        int colcell = 1;
        HSSFRow row = null;
        HSSFCell cell = null;
        for (int x = 0; x < notHaveSJBH.size(); x++) {
            if (rowNumber >= 10000) {
                break;
            }
            row = sheet.createRow(rowNumber);
            for (int j = 1; j < field.length; j++) {
                String name = field[j].getName();
                if (name.equals("zbye") || name.equals("parent")) {
                    colcell++;
                    continue;
                }
                cell = row.createCell(j - colcell);
                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                name = name.substring(0, 1).toUpperCase() + name.substring(1); //将属性的首字符大写，方便构造get，set方法
                String type = field[j].getGenericType().toString(); // 获取属性的类型
                //log.debug("type="+type);
                if (type.equals("class java.lang.String")) {// 如果type是类类型，则前面包含"class "，后面跟类名
                    java.lang.reflect.Method m = notHaveSJBH.get(x).getClass().getMethod("get" + name);
                    String value = (String) m.invoke(notHaveSJBH.get(x));// 调用getter方法获取属性值
                    if (value != null) {
                        if (value.contains("有限公司")) {
                            cell.setCellValue("");
                        } else
                            cell.setCellValue(value);
                    }
                } else if (type.equals("double")) {
                    java.lang.reflect.Method m = notHaveSJBH.get(x).getClass().getMethod("get" + name);
                    Double value = (Double) m.invoke(notHaveSJBH.get(x));
                    if (value != null) {
                        cell.setCellValue(value);
                    }
                }
                cell.setCellStyle(csTd);
            }

            rowNumber++;
            for (int i = 0; i < scoreZfphSumSls.size(); i++) {

                colcell = 1;
                if (notHaveSJBH.get(x).getZbbh().equals(scoreZfphSumSls.get(i).getSjbh())) {
                    if (rowNumber >= 10000) {
                        break;
                    }
                    row = sheet.createRow(rowNumber);
                    for (int j = 1; j < field.length; j++) {
                        String name = field[j].getName();
                        if (name.equals("zbye") || name.equals("parent")) {
                            colcell++;
                            continue;
                        }
                        cell = row.createCell(j - colcell);
                        cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                        name = name.substring(0, 1).toUpperCase() + name.substring(1); //将属性的首字符大写，方便构造get，set方法
                        String type = field[j].getGenericType().toString(); // 获取属性的类型
                        if (type.equals("class java.lang.String")) {// 如果type是类类型，则前面包含"class "，后面跟类名
                            java.lang.reflect.Method m = scoreZfphSumSls.get(i).getClass().getMethod("get" + name);
                            String value = (String) m.invoke(scoreZfphSumSls.get(i));// 调用getter方法获取属性值
                            if (value != null) {

                                cell.setCellValue(value);
                            }
                        } else if (type.equals("double")) {
                            java.lang.reflect.Method m = scoreZfphSumSls.get(i).getClass().getMethod("get" + name);
                            Double value = (Double) m.invoke(scoreZfphSumSls.get(i));
                            if (value != null) {
                                cell.setCellValue(value);
                            }
                        }
                        cell.setCellStyle(csTd);
                    }
                    rowNumber++;
                }
            }

        }
        String dir = localConfig.getProperties().getTempStringPath() + File.separator + DateUtil.getNow("yyyyMMdd");
        log.debug("dir:=" + dir);
        File f = new File(dir);
        log.debug("文件:=" + f.getName());
        if (!f.exists()) {
            f.mkdirs();
        }
        String path = dir + File.separator;
        log.debug("path:=" + path);
        if (brno != null) {
            path = path + "" + brno + "" + reportDate;
        }
        path = path + fileName;
        log.debug("path+fileName:=" + path);
        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
        return path;
    }


    public <SysBmgl> String doWbExcelSlsForOrgan(String fileName,
                                                 HSSFWorkbook wb, final CellStyle csTd, final HSSFSheet sheet,
                                                 final int dataNum, final int dataCol,
                                                 List<ScoreZfphSumSls> scoreZfphSumSls, String brno,
                                                 String reportDate) throws IOException, NoSuchMethodException,
            SecurityException, IllegalAccessException,
            IllegalArgumentException, InvocationTargetException {
        // log.debug("进入drowExcelSls方法");
        List<ScoreZfphSumSls> notHaveSJBH = new ArrayList<ScoreZfphSumSls>();
        java.lang.reflect.Field[] field = ScoreZfphSumSls.class
                .getDeclaredFields();
        for (ScoreZfphSumSls sumSls : scoreZfphSumSls) {
            if (StrUtil.isNull(sumSls.getSjbh())
                    && StrUtil.isNull(sumSls.getNbjgh())) {
                notHaveSJBH.add(sumSls);
            }
        }
        int rowNumber = dataNum;
        int colNumber = dataCol;
        int colcell = 1;
        HSSFRow row = null;
        HSSFCell cell = null;
        for (int x = 0; x < notHaveSJBH.size(); x++) {
            if (rowNumber >= 10000) {
                break;
            }
            row = sheet.createRow(rowNumber);
            for (int j = 1; j < field.length; j++) {
                String name = field[j].getName();
                if (name.equals("zbye") || name.equals("parent")) {
                    colcell++;
                    continue;
                }
                cell = row.createCell(j - colcell);
                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                name = name.substring(0, 1).toUpperCase() + name.substring(1); // 将属性的首字符大写，方便构造get，set方法
                String type = field[j].getGenericType().toString(); // 获取属性的类型
                // log.debug("type="+type);
                if (type.equals("class java.lang.String")) {// 如果type是类类型，则前面包含"class "，后面跟类名
                    java.lang.reflect.Method m = notHaveSJBH.get(x).getClass()
                            .getMethod("get" + name);
                    String value = (String) m.invoke(notHaveSJBH.get(x));// 调用getter方法获取属性值
                    if (value != null) {
                        if (value.contains("有限公司")) {
                            cell.setCellValue("");
                        } else
                            cell.setCellValue(value);
                    }
                } else if (type.equals("double")) {
                    java.lang.reflect.Method m = notHaveSJBH.get(x).getClass()
                            .getMethod("get" + name);
                    Double value = (Double) m.invoke(notHaveSJBH.get(x));
                    if (value != null) {
                        cell.setCellValue(value);
                    }
                }
                cell.setCellStyle(csTd);
            }

            rowNumber++;
            for (int i = 0; i < scoreZfphSumSls.size(); i++) {

                colcell = 1;
                if (notHaveSJBH.get(x).getZbbh()
                        .equals(scoreZfphSumSls.get(i).getSjbh())) {
                    if (rowNumber >= 10000) {
                        break;
                    }
                    row = sheet.createRow(rowNumber);
                    for (int j = 1; j < field.length; j++) {
                        String name = field[j].getName();
                        if (name.equals("zbye") || name.equals("parent")) {
                            colcell++;
                            continue;
                        }
                        cell = row.createCell(j - colcell);
                        cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                        name = name.substring(0, 1).toUpperCase()
                                + name.substring(1); // 将属性的首字符大写，方便构造get，set方法
                        String type = field[j].getGenericType().toString(); // 获取属性的类型
                        if (type.equals("class java.lang.String")) {// 如果type是类类型，则前面包含"class "，后面跟类名
                            java.lang.reflect.Method m = scoreZfphSumSls.get(i)
                                    .getClass().getMethod("get" + name);
                            String value = (String) m.invoke(scoreZfphSumSls
                                    .get(i));// 调用getter方法获取属性值
                            if (value != null) {

                                cell.setCellValue(value);
                            }
                        } else if (type.equals("double")) {
                            java.lang.reflect.Method m = scoreZfphSumSls.get(i)
                                    .getClass().getMethod("get" + name);
                            Double value = (Double) m.invoke(scoreZfphSumSls
                                    .get(i));
                            if (value != null) {
                                cell.setCellValue(value);
                            }
                        }
                        cell.setCellStyle(csTd);
                    }
                    rowNumber++;
                }
            }

        }
        String dir = localConfig.getProperties().getTempStringPath() + File.separator + DateUtil.getNow("yyyyMMdd");
        log.debug("dir:=" + dir);
        File f = new File(dir);
        log.debug("文件:=" + f.getName());
        if (!f.exists()) {
            f.mkdirs();
        }
        String path = dir + File.separator;
        log.debug("path:=" + path);
        if (brno != null) {
            path = path + "" + brno + "" + reportDate;
        }
        path = path + fileName;
        log.debug("path+fileName:=" + path);
        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
        return path;
    }

    private String drowExcelrd(String fileName, HSSFWorkbook wb, final CellStyle csTd, final HSSFSheet sheet, final int dataNum, final int dataCol, String bulidSql, String brno, String reportDate) throws IOException {
        Sql sql = Sqls.create(bulidSql);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                ResultSetMetaData rSmd = rs.getMetaData();
                int colCount = rSmd.getColumnCount();// 获取列数
                int rowNumber = dataNum;
                int colNumber = dataCol;
                HSSFRow row = null;
                HSSFCell cell = null;
                while (rs.next()) {
                    if (rowNumber != 0) {
                        row = sheet.createRow(rowNumber);
                        for (int k = colNumber; k < colCount; k++) {
                            cell = row.createCell(k);
                            //cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                            if (k == 2) {
                                cell.setCellValue(FormulaEncrypt.getFormulaDecrypt(rs.getString(k + 1)));
                            } else {
                                cell.setCellValue(rs.getString(k + 1));
                            }
                            cell.setCellStyle(csTd);
                        }
                    }
                    rowNumber++;
                }
                return null;
            }
        });
        dao.execute(sql);
        String dir = localConfig.getProperties().getTempStringPath() + DateUtil.getNow("yyyyMMdd");
        File f = new File(dir);
        if (!f.exists()) {
            f.mkdirs();
        }
        String path = dir + "/";
        if (brno != null) {
            path = path + "" + brno + "" + reportDate;
        }
        path = path + fileName;
        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
        return path;
    }

}
