package com.efraiser.test.db.util;


import com.efraiser.test.common.constant.RdTableConstants;
import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.rd.RdTableModel;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.nutz.lang.Mirror;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Component
public class RdTableUtil {

    private static final DataFormatter FORMATTER = new DataFormatter();
    public static DecimalFormat dfPre = new DecimalFormat("0.0000");
    public static DecimalFormat dfNum = new DecimalFormat("0.00");
    public static DecimalFormat dfBf = new DecimalFormat("0.000000");
    public static DecimalFormat dfBfNum = new DecimalFormat("###");

    @Autowired
    private RdTableInfoService rdTableInfoService;

    @Autowired
    private RdTableModelService rdTableModelService;

    /**
     * 判断是否为百分比单元格,用于导入数据时的判断
     *
     * @param cell
     * @return
     */
    public static boolean checkCellIsPercentCellForImport(Cell cell) {
        // String formv = FORMATTER.formatCellValue(cell);
        String forms = cell.getCellStyle().getDataFormatString();
        // return (formv.contains("%") || forms.contains("%"));
        return (forms.contains("%"));
    }

    /**
     * 判断是否为百分比单元格
     *
     * @param cell
     * @return
     */
    public static boolean checkCellIsPercentCell(Cell cell) {
        String form = cell.getCellStyle().getDataFormatString();
        return form.contains("%");
    }

    public static boolean checkCellIsFormulaCell(HSSFCell cell) {
        int color = cell.getCellStyle().getFillForegroundColor();
        if (color == 16 || color == 44 || cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
            return true;
        }
        return false;
    }

    /**
     * 判断是否为整形单元格
     *
     * @param cell
     * @return
     */
    public static boolean checkCellIsIntCell(Cell cell) {
        String form = cell.getCellStyle().getDataFormatString();
        return form.equals("0");
    }

    /**
     * 跨版本单元格转换
     *
     * @param map 转换列表
     *            originalVersion 源版本号
     *            targetVersion   目标报表号
     *            coordinate      坐标
     * @return 10_A
     */
    public static String convertCoordinate(Map<String, String> map, String originalVersion, String targetVersion, String coordinate) {
        String ordStr = map.get(originalVersion + "_" + coordinate);
        if (StrUtil.isNotNull(ordStr)) {
            if (ordStr.split("_")[0].equals(targetVersion)) {
                return ordStr.split("_")[1] + "_" + ordStr.split("_")[2];
            } else {
                convertCoordinate(map, ordStr.split("_")[0], targetVersion, ordStr.split("_")[1] + "_" + ordStr.split("_")[2]);
            }
        }
        return null;
    }

    /**
     * 校验单元格是否为不需填写单元格
     *
     * @param cell
     * @return
     */
    public static boolean checkCellIsNoDateCell(Cell cell) {
        // 如果背景色为灰色不填跳出取数
        int color = cell.getCellStyle().getFillForegroundColor();
        // int cc = cell.getCellStyle().getFillBackgroundColor();
        if (color == 22 || color == 17 || color == 55) {
            return true;
        }
        return false;
    }

    /**
     * 校验单元格是否为不需填写单元格
     *
     * @param cell
     * @return
     */
    public static boolean checkCellIsNoDateCellForBF(Cell cell) {
        // 如果背景色为灰色不填跳出取数
        int color = cell.getCellStyle().getFillForegroundColor();
        System.out.println("color:" + color);
        if (color == 23 || color == 55 || color == 22) {
            return true;
        }
        return false;
    }

    public static boolean checkCellIsNumCols(Cell cell, List<String> nameCols) {
        String index = String.valueOf(cell.getColumnIndex() + 1);
        if (nameCols.contains(index)) {
            return true;
        }
        return false;

    }

    public static boolean checkCellIsIntCols(HSSFCell cell, List<String> intCols) {
        String index = String.valueOf(cell.getColumnIndex() + 1);
        if (intCols.contains(index)) {
            return true;
        }
        return false;
    }

    public static String getFieldName(String prefix, int seq) {
        char c = 'A';
        if (seq < 26) {
            return prefix + (char) (c + seq);
        }
        return prefix + String.valueOf((char) (c + (seq / 26 - 1))) + String.valueOf((char) (c + seq - 26 * (seq / 26)));
    }

    public static int getSeq(String ch) {
        for (int i = 0; i < 52; ++i) {
            if (ch.equals(getFieldName("", i))) {
                return i + 1;
            }
        }

        return 1;
    }

    public static String[] getTableSubNameLists(String subNameStr) {
        if (StrUtil.isNotNull(subNameStr)) {
            return subNameStr.split(";");
        }
        return null;
    }

    public static String getTableSubName(String[] subNameLists, int index) {
        if (subNameLists == null || subNameLists.length == 0) {
            return "";
        } else if (subNameLists.length > index) {
            return subNameLists[index];
        } else {
            return "";
        }

    }

    public static String getLastReportDate(String reportDate, String checkType) {
        int addMonth = 0;
        if ("50".equals(checkType)) {// 月
            addMonth = -1;
        } else if ("40".equals(checkType)) {// 季
            addMonth = -3;
        } else if ("80".equals(checkType)) {// 半年
            addMonth = -6;
        } else if ("00".equals(checkType)) {// 年
            addMonth = -12;
        }
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        return DateUtil.format(DateUtil.addMonth(raw, addMonth), "yyyyMM");
    }

    /**
     * 根据报表类型与数据日期,判断是否合理
     *
     * @param reportDate
     * @param tabType
     * @return
     * @author efraiser.xiaxiaofeng
     */
    public static boolean checkTableType(Date reportDate, String tabType) {
        if ("50".equals(tabType)) {// 月
            return true;
        }
        int month = DateUtil.getMonth(reportDate);
        if ("40".equals(tabType) && (month == 3 || month == 6 || month == 9 || month == 12)) {// 季
            return true;
        } else if ("80".equals(tabType) && (month == 6 || month == 12)) {// 半年
            return true;
        } else if ("00".equals(tabType) && month == 12) {// 年
            return true;
        }
        return false;
    }

    /**
     * 根据报表类型与数据日期,判断是否合理
     *
     * @param reportDate
     * @param tabType
     * @return
     * @author efraiser.xiaxiaofeng
     */
    public static String getRdTabType(Date reportDate) {
        String tabTypes = "";
        int month = DateUtil.getMonth(reportDate);
        if (month == 12) {// 年
            tabTypes = "'50','40','80','00'";
        } else if (month == 6 || month == 12) {// 半年
            tabTypes = "'50','40','80'";
        } else if (month == 3 || month == 6 || month == 9 || month == 12) {// 季
            tabTypes = "'50','40'";
        } else {
            tabTypes = "'50'";
        }

        return tabTypes;
    }

    /**
     * 获取年初日期,即日期上年年末
     *
     * @param reportDate
     * @return
     */
    public static String getReportDateEndOfYear(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int addMonth = DateUtil.getMonth(raw) * -1;
        return DateUtil.format(DateUtil.addMonth(raw, addMonth), "yyyyMM");
    }

    /**
     * 获取去年同期日期
     *
     * @param reportDate
     * @return
     */
    public static String getLastYearReportDate(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        return DateUtil.format(DateUtil.addYear(raw, -1), "yyyyMM");
    }

    public static String getReportColumnName(String columnName) {
        if (StrUtil.isNotNull(columnName) && columnName.startsWith("VALUE_")) {
            return columnName.replace("VALUE_", "");
        } else if (StrUtil.isNotNull(columnName) && columnName.startsWith("NAME_")) {
            return columnName.replace("NAME_", "");
        }
        return null;
    }

    /**
     * 根据excel行号和报表行信息，获取该行是报表第几部分
     *
     * @param fileRowNum
     * @param rowInfo
     * @return
     */
    public static int getPartNum(int fileRowNum, String[] rowInfo) {
        for (int i = 0; i < rowInfo.length; i++) {
            String[] seRow = rowInfo[i].split("#");
            if ((fileRowNum >= Integer.parseInt(seRow[2])) && (fileRowNum <= Integer.parseInt(seRow[1]))) {
                return i;
            }
        }
        return 0;
    }

    // 1104相关方法
    public static String mergeStr(String mergeRow, String mergeCol) {
        String mergeStr = "";

        if (StrUtil.isNotNull(mergeRow) && (!"1".equals(mergeRow))) {
            mergeStr = mergeStr + " rowspan=\"" + mergeRow + "\"";
        }

        if (StrUtil.isNotNull(mergeCol) && (!"1".equals(mergeCol))) {
            mergeStr = mergeStr + " colspan=\"" + mergeCol + "\"";
        }

        return mergeStr;
    }

    public static String getClassStr(String value) {
        if (StrUtil.isNotNull(value)) {
            return "class=\"" + value + "\"";
        }
        return "";
    }

    public static String outBlankName(String name) {
        String newName = "";
        if (name != null) {
            for (int i = 0; i < name.length(); ++i) {
                if (name.charAt(i) == ' ')
                    newName = newName + "&nbsp;";
                else {
                    newName = newName + name.charAt(i);
                }
            }
        }

        return newName;
    }

    public static String getTdIdStr(String tabCode, int fileRowNum, int fileIndex) {
        return "id=\"" + tabCode + "_" + fileRowNum + "_" + getFieldName("", fileIndex) + "_TD\"";
    }

    public static String getInputIdStr(String tabCode, int fileRowNum, int fileIndex) {
        return "id=\"" + tabCode + "_" + fileRowNum + "_" + getFieldName("", fileIndex) + "\"";
    }

    public static String getTdIdStrForFs(String tarCode, String curCode, String dataType, String place) {
        return "id=\"" + tarCode + place + curCode + place + dataType + "\"";
    }

    public static String getValuePlace(int fileRowNum, int fileIndex) {
        return "#" + fileRowNum + "_" + fileIndex + "#";
    }

    public static String getValuePlaceForFs(String tarCode, String curCode, String dataType, String place) {
        return "#" + tarCode + place + curCode + place + dataType + "#";
    }

    public static String getValuePlaceBj(int fileRowNum, int fileIndex) {
        return "$" + fileRowNum + "_" + fileIndex + "$";
    }

    public static String getValuePlaceBjForFs(String tarCode, String curCode, String dataType, String place) {
        return "$" + tarCode + place + curCode + place + dataType + "$";
    }

    public static String getRdVal(String value) {
        if (StrUtil.isNotNull(value)) {
            value = value.replace(" ", "&nbsp;");
            if (value.endsWith(".0")) {
                value = value.replace(".0", "");
            }
            if (value.endsWith(".00")) {
                value = value.replace(".00", "");
            }
            return value;
        }
        return "";
    }

    // 上月
    public static String getReportDateLastMonth(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int Month = DateUtil.getMonth(raw);
        if (Month != 1) {
            return DateUtil.format(DateUtil.addMonth(raw, -1), "yyyyMM");
        } else {
            Date raw2 = DateUtil.addYear(raw, -1);
            return DateUtil.format(DateUtil.addMonth(raw2, 11), "yyyyMM");
        }

    }

    // 上个季度
    public static String getReportDateLastQuarter(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int Month = DateUtil.getMonth(raw);
        if (Month == 6 || Month == 9 || Month == 12) {
            return DateUtil.format(DateUtil.addMonth(raw, -3), "yyyyMM");
        } else if (Month == 3) {
            Date raw2 = DateUtil.addYear(raw, -1);
            return DateUtil.format(DateUtil.addMonth(raw2, 9), "yyyyMM");
        } else {
            return null;
        }
    }

    public static String getReportDateLastHalfYear(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int Month = DateUtil.getMonth(raw);
        if (Month == 12) {
            return DateUtil.format(DateUtil.addMonth(raw, -6), "yyyyMM");
        } else if (Month == 6) {
            Date raw2 = DateUtil.addYear(raw, -1);
            return DateUtil.format(DateUtil.addMonth(raw2, 6), "yyyyMM");
        } else {
            return null;
        }
    }

    public static String getReportDateLastYear(String reportDate) {
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int Month = DateUtil.getMonth(raw);
        if (Month == 12) {
            return DateUtil.format(DateUtil.addYear(raw, -1), "yyyyMM");
        } else {
            return null;
        }
    }

    public  String delParentNode(String brNos) {
        RdReportInfoDao rdReportInfoDao = Mvcs.ctx().getDefaultIoc().get(RdReportInfoDao.class, "rdReportInfoDao");
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = rdReportInfoDao.CheckParent(brnos[i]);
            if (num == 0) {
                if (i == brnos.length - 1) {
                    brNo += "" + brnos[i] + "";
                } else {
                    brNo += "" + brnos[i] + ",";
                }
            }

        }

        return brNo;

    }

    public static String getBfReportColumnName(String str, String n) {
        if (!"C".equals(n)) {
            int m = n.toCharArray()[0] - 'C' + 1;
            return str + m;
        }
        return "";
    }

    public static String getLastBfReportDate(String reportDate, String checkType) {
        int addMonth = 0;
        if ("M1".equals(checkType) || "M2".equals(checkType)) {// 月
            addMonth = -1;
        } else if ("S1".equals(checkType) || "S2".equals(checkType)) {// 季
            addMonth = -3;
        } else if ("Y".equals(checkType)) {// 年
            addMonth = -12;
        }
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        return DateUtil.format(DateUtil.addMonth(raw, addMonth), "yyyyMM");
    }

    public static int getPartNumForYidong(int fileRowNum, String[] rowS) {
        for (int i = 0; i <= rowS.length; i++) {
            String[] seRow = rowS[i].split("#");
            if ((fileRowNum >= Integer.parseInt(seRow[2])) && (fileRowNum <= Integer.parseInt(seRow[1]))) {
                return i + 1;
            }
        }
        return 0;
    }

    public static String getBfReportColumnNameForYd(String str, String n) {
        int m = n.toCharArray()[0] - 'C' + 1;
        return str + m;
    }

    public static String getLastReportDateForWave(String reportDate, String tabType) {
        int addMonth = 0;
        if ("M1".equals(tabType) || "M2".equals(tabType)) {// 月
            addMonth = -1;
        } else if ("S1".equals(tabType) || "S2".equals(tabType)) {// 季
            addMonth = -3;
        } else if ("Y".equals(tabType)) {// 年
            addMonth = -12;
        }
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        return DateUtil.format(DateUtil.addMonth(raw, addMonth), "yyyyMM");
    }

    public static String getLastPiReportDate(String reportDate, String checkType) {
        int addMonth = 0;
        if ("M".equals(checkType)) {// 月
            addMonth = -1;
        } else if ("S".equals(checkType)) {// 季
            addMonth = -3;
        } else if ("Y".equals(checkType)) {// 年
            addMonth = -12;
        }
        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        return DateUtil.format(DateUtil.addMonth(raw, addMonth), "yyyyMM");
    }

    /**
     * 根据tablecode，行列以及版本号，获取checkproject信息
     */
    public  String getCheckProject(String tabCode, String thisVersion) {
        String checkProjectName = "";
        String checkProject = "";
        String tablecode = tabCode.split("_")[0];
        String rownum = tabCode.split("_")[1];
        String colnum = tabCode.split("_")[2];
        RdTableInfo tableInfo = rdTableInfoService.getInfoByTabcode(tablecode, thisVersion);// 报表信息
        String[] rowS = tableInfo.getRowInfo().split(RdTableConstants.STR_RC_SPLIT);// 获取报表行信息部分
        String[] colS = tableInfo.getColInfo().split(RdTableConstants.STR_RC_SPLIT);// 获取列信息部分

        RdTableModel tableModels = rdTableModelService.getTableModelByRownum(tableInfo.getTableId(), rownum);// 获取到模板的行
        Mirror<RdTableModel> rdmMirror = Mirror.me(RdTableModel.class);// 获取模板镜像

        for (int y = 0; y < rowS.length; y++) {
            String[] rowInfos = rowS[y].split(RdTableConstants.STR_SPLIT);
            if (Integer.valueOf(rownum) <= Integer.valueOf(rowInfos[1]) && Integer.valueOf(rownum) >= Integer.valueOf(rowInfos[2])) {
                String[] colInfos = colS[y].split(RdTableConstants.STR_SPLIT);
                if (colInfos.length > 2) {
                    String checkName = "";
                    String[] col = colInfos[2].split(",");
                    for (int i = 0; i < col.length; i++) {
                        checkName = rdmMirror.getValue(tableModels, "field_" + col[col.length - 1 - i]).toString();
                        if (checkName.startsWith("LD") || checkName.startsWith("LS") || checkName.startsWith("LPN") || checkName.startsWith("LPS")) {
                        } else {
                            break;
                        }
                    }
                    String[] name = checkName.split("#");
                    checkProject = "[" + rownum + "." + colnum + "]" + name[0];
                    checkProjectName = CommUtil.trimStr(checkProject);
                }
                break;
            }
        }
        return checkProjectName;

        /*
         * int bf = 0;//记录第几部分 for (int y = 0; y < rowS.length; y++)
         * {//定位到是模板的第几部分 例：G0100_6_A及中文解释 String[] rowInfos =
         * rowS[y].split(RdTableConstants.STR_SPLIT); for (int z = 0; z <
         * rowInfos.length; z++){ if
         * (Integer.parseInt(rowInfos[0])<=Integer.parseInt
         * (rownum)&&Integer.parseInt(rowInfos[1])>=Integer.parseInt(rownum)){
         * bf=z; break; } } }
         *
         * String colInfos = colS[bf];//取到对应部分的列信息部分
         *
         * String col=colInfos.split(RdTableConstants.STR_SPLIT)[1];//取到数据列开始列
         *
         * String checkName=""; if(rdmMirror.getValue(tableModels, "field_" +
         * (Integer.parseInt(col)-1))!=null){
         * checkName=rdmMirror.getValue(tableModels, "field_" +
         * (Integer.parseInt(col)-1)).toString();
         *
         * String[] name=checkName.split("#");
         * if(checkName.contains("LPN")||checkName.contains("LPS")){
         * checkProjectName=name[1]; }else{ checkProjectName=name[0]; }
         * checkProject="["+rownum+"."+colnum+"]"+checkProjectName; } return
         * checkProject;
         */
    }
}
