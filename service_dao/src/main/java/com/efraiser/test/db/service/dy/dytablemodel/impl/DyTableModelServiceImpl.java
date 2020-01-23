package com.efraiser.test.db.service.dy.dytablemodel.impl;

import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.util.ExcelUtil;
import com.efraiser.test.common.util.FileUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyTableColumnContrast;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.dy.DyTableModel;
import com.efraiser.test.db.model.dy.DyTableModelPCT;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.util.DyTableUtil;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class DyTableModelServiceImpl  extends BaseServiceImpl<DyTableModel> implements DyTableModelService {

    private  Logger log = LoggerFactory.getLogger(DyTableModelServiceImpl.class);
    private Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);

    @Override
    public List<DyTableModel> resolveTableExcelTemplate(String tableId, DyTableInfo tableInfo, String excelFilePath, List<DyTableModelPCT> tableModelPCTs, List<String> formulaList,
                                                        List<DyTableColumnContrast> rccList, List<Map<String, String>> colMapList) {
        try {
            log.debug("进入解析报表模板excel方法!excelFilePath:" + excelFilePath + " colInfo:" + tableInfo.getColInfo() + " rowInfo:" + tableInfo.getRowInfo());

            File excelFile = new File(excelFilePath);
            // 装载excel
            HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(excelFile));
            // 在Excel文档中，第一张工作表的缺省索引是0，
            HSSFSheet sheet = workbook.getSheetAt(0);
            List<DyTableModel> rdModels = new ArrayList<DyTableModel>();

            String[] rowS = tableInfo.getRowInfo().split("@");
            String[] colS = tableInfo.getColInfo().split("@");
            for (int y = 0; y < rowS.length; y++) {
                String[] rowInfos = rowS[y].split("#");
                String[] colInfos = colS[y].split("#");
                // 加载设置的字符列和字符列
                List<String> nameCols = null;
                if (colInfos.length > 2) {
                    nameCols = StrUtil.convertToList(colInfos[2], ",");
                }
                boolean columnContrastflag = true;// 行列对照关系状态
                boolean isIn = false;// 是否执行了行列对照关系处理
                Map<String, String> colMap = new HashMap<String, String>();
                // 循环excel行
                for (int i = Integer.valueOf(rowInfos[0]); i <= Integer.valueOf(rowInfos[1]); i++) {
                    // 获取行,索引起始0
                    HSSFRow row = sheet.getRow(i - 1);
                    DyTableModel rdModel = new DyTableModel();
                    rdModel.setFileRownum(i);// 行号
                    rdModel.setTableId(tableId);// tableId
                    int fileIndex = 1;
                    int imergeCol = 0;
                    int excelcolnum = 0;
                    int tabcolnum = 0;

                    // 循环excel列;从第一列知道配置列
                    // fileIndex用于对应数据库字段用
                    for (int j = 0; j < Integer.valueOf(colInfos[0]); j++, fileIndex++) {
                        // 获取列,索引起始为0
                        if (row.getCell(0) == null) {
                            log.error("解析模板文件异常:文件第一列不能为空");
                            return null;
                        } else {
                            HSSFCell cell = row.getCell(j);
                            // 字段值
                            String fileValue = ExcelUtil.getHssCellData(cell);
                            if (StrUtil.isNotNull(fileValue) && DyTableConstants.END_CELL.equals(fileValue)) {
                                rdmMirror.setValue(rdModel, "field_" + fileIndex, fileValue);
                                continue;
                            }
                            fileValue = StrUtil.rightTrimStr(fileValue);
                            // 获取跨行跨列如果是第一个
                            String mergeCellStr = ExcelUtil.isMergeCells(sheet, cell);
                            if ((j + 1) < Integer.valueOf(colInfos[1]) || i < Integer.valueOf(rowInfos[2])) {// 如果是标题列不是数据列非ABCDEFGH
                                if (StrUtil.isNotNull(mergeCellStr)) {// 合并单元格
                                    if (mergeCellStr.contains("#")) {
                                        int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                        fileValue += mergeCellStr.substring(mergeCellStr.indexOf("#"));
                                        // 跳过合并列
                                        j += mergeCol - 1;
                                    } else {
                                        // 跳过非第一位的合并单元格
                                        fileIndex--;
                                        continue;
                                    }
                                } else {// 不合并
                                    fileValue += "#1#1";
                                }
                            } else {// 如果是数据列
                                excelcolnum = cell.getColumnIndex();
                                tabcolnum = cell.getColumnIndex() - (Integer.valueOf(colInfos[1]) - 1) - imergeCol;
                                String cla = "";
                                if (StrUtil.isNotNull(fileValue)) {
                                    if (fileValue.contains(".TD_C")) {
                                        cla = ".TD_C";
                                        fileValue = fileValue.replace(".TD_C", "");
                                    } else if (fileValue.contains(".TD_L")) {
                                        cla = ".TD_L";
                                        fileValue = fileValue.replace(".TD_L", "");
                                    }
                                }

                                if (StrUtil.isNotNull(fileValue) && (DyTableConstants.STRING_CELL.equals(fileValue) || DyTableConstants.DATA_CELL.equals(fileValue))) {
                                    if (DyTableUtil.checkCellIsFormulaCell(cell)) {// 含公式cell
                                        fileValue += "#0";
                                        // 提取公式
                                        formulaList.add(DyTableUtil.getFieldName("", excelcolnum) + i + "=" + cell.getCellFormula());
                                    } else if (DyTableUtil.checkCellIsNoDateCell(cell)) {// 如果是不用填写单元格
                                        fileValue += "#2";
                                    } else {
                                        fileValue += "#1";
                                    }
                                } else if (StrUtil.isNotNull(fileValue) && (!DyTableUtil.checkCellIsFormulaCell(cell))) {// 如果是公式列,并且模板单元格有数据,则为参数单元格
                                    if (fileValue.endsWith("%")) {// 如果读取excel内容带%直接提取
                                        fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + fileValue.replace("%", "");
                                    } else if (DyTableUtil.checkCellIsPercentCell(cell)) {// 如果读取百分比内容成小数
                                        fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + DyTableUtil.dfPre.format(Double.valueOf(fileValue) * 100);
                                    } else {
                                        if (StrUtil.isNumeric(fileValue)) {
                                            fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + fileValue;
                                        } else if(StrUtil.isContainLine(fileValue)){                                     //此处有改动
                                            fileValue = DyTableConstants.DATA_CELL + "#2";
                                        }
                                        else {
                                            fileValue = DyTableConstants.PARAM_STR_CELL + "#" + fileValue;
                                        }
                                    }

                                } else {
                                    if (nameCols != null && DyTableUtil.checkCellIsNumCols(cell, nameCols)) {// 如果是字符列
                                        fileValue = DyTableConstants.STRING_CELL;

                                    } else {// 数字列
                                        fileValue = DyTableConstants.DATA_CELL;
                                    }

                                    if (DyTableUtil.checkCellIsFormulaCell(cell)) {// 含公式cell
                                        fileValue += "#0";
                                        // 提取公式
                                        formulaList.add(DyTableUtil.getFieldName("", excelcolnum) + i + "=" + cell.getCellFormula());
                                    } else if (DyTableUtil.checkCellIsNoDateCell(cell)) {// 如果是不用填写单元格
                                        fileValue += "#2";
                                    } else {
                                        fileValue += "#1";
                                    }
                                }
                                // 增加对应报表坐标
                                fileValue += "#" + tabcolnum;
                                // 判断是否为百分比单元格
                                if (DyTableUtil.checkCellIsPercentCell(cell)) {
                                    fileValue += "#P";
                                    // G0100_1_A
                                    tableModelPCTs.add(new DyTableModelPCT(tableId, tableInfo.getTabCode() + "_" + i + "_" + DyTableUtil.getFieldName("", tabcolnum)));
                                }
                                if (StrUtil.isNotNull(cla)) {
                                    fileValue += cla;
                                }

                                if (StrUtil.isNotNull(mergeCellStr)) {// 合并单元格
                                    if (mergeCellStr.contains("#")) {
                                        int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                        fileValue += mergeCellStr.substring(mergeCellStr.indexOf("#"));
                                        // 跳过合并列
                                        j += mergeCol - 1;
                                        imergeCol += mergeCol - 1;
                                    } else {
                                        // 跳过非第一位的合并单元格
                                        fileIndex--;
                                        continue;
                                    }
                                }

                                // 报表中各部分的标题列以及数据列与系统中报表列对应关系
                                if (columnContrastflag) {
                                    rccList.add(new DyTableColumnContrast(tableId, y + 1, excelcolnum + 1, tabcolnum));
                                    isIn = true;
                                    colMap.put(DyTableUtil.getFieldName("", excelcolnum), DyTableUtil.getFieldName("", tabcolnum));
                                }

                            }
                            rdmMirror.setValue(rdModel, "field_" + fileIndex, fileValue);
                        }
                    }

                    if (isIn) {
                        columnContrastflag = false;
                    }
                    // 添加END结束符
                    rdmMirror.setValue(rdModel, "field_" + fileIndex, DyTableConstants.END_CELL);
                    rdModels.add(rdModel);
                }
                colMapList.add(colMap);
            }
            return rdModels;

        } catch (FileNotFoundException e) {
            log.error("解析模板文件异常:未发现模板文件:{}", excelFilePath);
            e.printStackTrace();
        } catch (IOException e) {
            log.error("读取文件异常:{}", excelFilePath);
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<DyTableModel> resolveTableExcelTemplateXlsx(String tableId, DyTableInfo tableInfo, String excelFilePath, List<DyTableModelPCT> tableModelPCTs, List<String> formulaList,
                                                            List<DyTableColumnContrast> rccList, List<Map<String, String>> colMapList) {
        try {
            log.debug("进入解析报表模板excel方法!excelFilePath:" + excelFilePath + " colInfo:" + tableInfo.getColInfo() + " rowInfo:" + tableInfo.getRowInfo());

            File excelFile = new File(excelFilePath);
            // 装载excel
            XSSFWorkbook workbook = new XSSFWorkbook(new FileInputStream(excelFile));
            // 在Excel文档中，第一张工作表的缺省索引是0，
            XSSFSheet sheet = workbook.getSheetAt(0);
            List<DyTableModel> rdModels = new ArrayList<DyTableModel>();

            String[] rowS = tableInfo.getRowInfo().split("@");
            String[] colS = tableInfo.getColInfo().split("@");
            for (int y = 0; y < rowS.length; y++) {
                String[] rowInfos = rowS[y].split("#");
                String[] colInfos = colS[y].split("#");
                // 加载设置的字符列和字符列
                List<String> nameCols = null;
                if (colInfos.length > 2) {
                    nameCols = StrUtil.convertToList(colInfos[2], ",");
                }
                boolean columnContrastflag = true;// 行列对照关系状态
                boolean isIn = false;// 是否执行了行列对照关系处理
                Map<String, String> colMap = new HashMap<String, String>();
                // 循环excel行
                for (int i = Integer.valueOf(rowInfos[0]); i <= Integer.valueOf(rowInfos[1]); i++) {
                    // 获取行,索引起始0
                    XSSFRow row = sheet.getRow(i - 1);
                    DyTableModel rdModel = new DyTableModel();
                    rdModel.setFileRownum(i);// 行号
                    rdModel.setTableId(tableId);// tableId
                    int fileIndex = 1;
                    int imergeCol = 0;
                    int excelcolnum = 0;
                    int tabcolnum = 0;

                    // 循环excel列;从第一列知道配置列
                    // fileIndex用于对应数据库字段用
                    for (int j = 0; j < Integer.valueOf(colInfos[0]); j++, fileIndex++) {
                        // 获取列,索引起始为0
                        XSSFCell cell = row.getCell(j);
                        // 字段值
                        String fileValue = (String) ExcelUtil.getXssCellData(cell);
                        if (StrUtil.isNotNull(fileValue) && DyTableConstants.END_CELL.equals(fileValue)) {
                            rdmMirror.setValue(rdModel, "field_" + fileIndex, fileValue);
                            continue;
                        }
                        fileValue = StrUtil.rightTrimStr(fileValue);
                        // 获取跨行跨列如果是第一个
                        String mergeCellStr = ExcelUtil.isMergeCellsXlsx(sheet, cell);
                        if ((j + 1) < Integer.valueOf(colInfos[1]) || i < Integer.valueOf(rowInfos[2])) {// 如果是标题列不是数据列非ABCDEFGH
                            if (StrUtil.isNotNull(mergeCellStr)) {// 合并单元格
                                if (mergeCellStr.contains("#")) {
                                    int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                    fileValue += mergeCellStr.substring(mergeCellStr.indexOf("#"));
                                    // 跳过合并列
                                    j += mergeCol - 1;
                                } else {
                                    // 跳过非第一位的合并单元格
                                    fileIndex--;
                                    continue;
                                }
                            } else {// 不合并
                                fileValue += "#1#1";
                            }
                        } else {// 如果是数据列
                            excelcolnum = cell.getColumnIndex();
                            tabcolnum = cell.getColumnIndex() - (Integer.valueOf(colInfos[1]) - 1) - imergeCol;
                            String cla = "";
                            if (StrUtil.isNotNull(fileValue)) {
                                if (fileValue.contains(".TD_C")) {
                                    cla = ".TD_C";
                                    fileValue = fileValue.replace(".TD_C", "");
                                } else if (fileValue.contains(".TD_L")) {
                                    cla = ".TD_L";
                                    fileValue = fileValue.replace(".TD_L", "");
                                }
                            }

                            if (StrUtil.isNotNull(fileValue) && (DyTableConstants.STRING_CELL.equals(fileValue) || DyTableConstants.DATA_CELL.equals(fileValue))) {
                                if (DyTableUtil.checkCellIsFormulaCellXlsx(cell)) {// 含公式cell
                                    fileValue += "#0";
                                    // 提取公式
                                    formulaList.add(DyTableUtil.getFieldName("", excelcolnum) + i + "=" + cell.getCellFormula());
                                } else if (DyTableUtil.checkCellIsNoDateCell(cell)) {// 如果是不用填写单元格
                                    fileValue += "#2";
                                } else {
                                    fileValue += "#1";
                                }
                            } else if (StrUtil.isNotNull(fileValue) && (!DyTableUtil.checkCellIsFormulaCellXlsx(cell))) {// 如果是公式列,并且模板单元格有数据,则为参数单元格
                                if (fileValue.endsWith("%")) {// 如果读取excel内容带%直接提取
                                    fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + fileValue.replace("%", "");
                                } else if (DyTableUtil.checkCellIsPercentCell(cell)) {// 如果读取百分比内容成小数
                                    fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + DyTableUtil.dfPre.format(Double.valueOf(fileValue) * 100);
                                } else {
                                    if (StrUtil.isNumeric(fileValue)) {
                                        fileValue = DyTableConstants.PARAM_NUM_CELL + "#" + fileValue;
                                    } else if(StrUtil.isContainLine(fileValue)){                                     //此处有改动
                                        fileValue = DyTableConstants.DATA_CELL + "#2";
                                    }
                                    else {
                                        fileValue = DyTableConstants.PARAM_STR_CELL + "#" + fileValue;
                                    }
                                }

                            } else {
                                if (nameCols != null && DyTableUtil.checkCellIsNumCols(cell, nameCols)) {// 如果是字符列
                                    fileValue = DyTableConstants.STRING_CELL;

                                } else {// 数字列
                                    fileValue = DyTableConstants.DATA_CELL;
                                }

                                if (DyTableUtil.checkCellIsFormulaCellXlsx(cell)) {// 含公式cell
                                    fileValue += "#0";
                                    // 提取公式
                                    formulaList.add(DyTableUtil.getFieldName("", excelcolnum) + i + "=" + cell.getCellFormula());
                                } else if (DyTableUtil.checkCellIsNoDateCell(cell)) {// 如果是不用填写单元格
                                    fileValue += "#2";
                                } else {
                                    fileValue += "#1";
                                }
                            }
                            // 增加对应报表坐标
                            fileValue += "#" + tabcolnum;
                            // 判断是否为百分比单元格
                            if (DyTableUtil.checkCellIsPercentCell(cell)) {
                                fileValue += "#P";
                                // G0100_1_A
                                tableModelPCTs.add(new DyTableModelPCT(tableId, tableInfo.getTabCode() + "_" + i + "_" + DyTableUtil.getFieldName("", tabcolnum)));
                            }
                            if (StrUtil.isNotNull(cla)) {
                                fileValue += cla;
                            }

                            if (StrUtil.isNotNull(mergeCellStr)) {// 合并单元格
                                if (mergeCellStr.contains("#")) {
                                    int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                    fileValue += mergeCellStr.substring(mergeCellStr.indexOf("#"));
                                    // 跳过合并列
                                    j += mergeCol - 1;
                                    imergeCol += mergeCol - 1;
                                } else {
                                    // 跳过非第一位的合并单元格
                                    fileIndex--;
                                    continue;
                                }
                            }

                            // 报表中各部分的标题列以及数据列与系统中报表列对应关系
                            if (columnContrastflag) {
                                rccList.add(new DyTableColumnContrast(tableId, y + 1, excelcolnum + 1, tabcolnum));
                                isIn = true;
                                colMap.put(DyTableUtil.getFieldName("", excelcolnum), DyTableUtil.getFieldName("", tabcolnum));
                            }

                        }
                        rdmMirror.setValue(rdModel, "field_" + fileIndex, fileValue);
                    }

                    if (isIn) {
                        columnContrastflag = false;
                    }
                    // 添加END结束符
                    rdmMirror.setValue(rdModel, "field_" + fileIndex, DyTableConstants.END_CELL);
                    rdModels.add(rdModel);
                }
                colMapList.add(colMap);
            }
            return rdModels;

        } catch (FileNotFoundException e) {
            log.error("解析模板文件异常:未发现模板文件:{}", excelFilePath);
            e.printStackTrace();
        } catch (IOException e) {
            log.error("读取文件异常:{}", excelFilePath);
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public void saveExcelFile(String excelFilePath, String reportExcelTempletPath, DyTableInfo tableInfo) {
        File tempExcelFile = new File(excelFilePath);
        File excelFile2 = FileUtil.createFile(reportExcelTempletPath + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "."+excelFilePath.split("\\.")[1]);
        FileUtil.copy(tempExcelFile, excelFile2);
        FileUtil.deleteFile(tempExcelFile);

    }

    @Override
    public List<DyTableModel> getTableModelList(String tableId) {
        return this.query(Cnd.where("tableId", "=", tableId).asc("FILE_ROWNUM"), null);
    }

    @Override
    public DyTableModel getTableModelByRownum(String tableId,String rownum) {
        String sqlStr="SELECT * FROM DY.DY_TABLE_MODEL WHERE TABLE_ID='" + tableId + "' AND FILE_ROWNUM='" + rownum + "'";
        Sql sql = Sqls.create(sqlStr);
        return this.getObjectBySql(sql, null, null);
    }

//	public String getExcelFileVersionNo(String versionNoInfo, File excelFile) {
//		try {
//			// 装载excel
//			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(excelFile));
//			HSSFSheet sheet = workbook.getSheetAt(0);
//			String[] strs = versionNoInfo.split("#");
//			String versionNo = null;
//			if (strs.length > 1) {
//				HSSFCell cell = sheet.getRow(Integer.valueOf(strs[0]) - 1).getCell(Integer.valueOf(strs[1]) - 1);
//				versionNo = ExcelUtil.getHssCellData(cell);
//				if (StrUtil.isNotNull(versionNo) && versionNo.contains("版本号:")) {
//					versionNo = versionNo.replace("版本号:", "");
//				} else {
//					versionNo = null;
//				}
//			} else {
//				int versionNoColNum = Integer.valueOf(strs[0]);
//				for (int i = 0; i < sheet.getLastRowNum(); i++) {
//					HSSFCell cell = sheet.getRow(i).getCell(versionNoColNum);
//					versionNo = ExcelUtil.getHssCellData(cell);
//					if (StrUtil.isNotNull(versionNo) && versionNo.contains("版本号:")) {
//						versionNo = versionNo.replace("版本号:", "");
//						break;
//					}
//				}
//			}
//			return versionNo;
//		} catch (Exception e) {
//			e.printStackTrace();
//			log.error("解析模板文件版本号异常{}", excelFile.getAbsolutePath());
//		}
//
//		return null;
//	}

    @Override
    public List<DyTableModel> getModel(String tableId) {
        String sqlStr="SELECT * FROM DY.DY_TABLE_MODEL WHERE TABLE_ID='" + tableId + "'";
        Sql sql = Sqls.create(sqlStr);
        return this.getListBySql(sql);
    }

    @Override
    public List<DyTableModel> getAll()
    {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_MODEL";
        List<DyTableModel> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM DY.DY_TABLE_MODEL";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyTableModel item) {
        dao().insert(item);
    }
}
