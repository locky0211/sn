package com.efraiser.test.scheduler.util;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.db.model.rd.*;
import com.efraiser.test.db.service.rd.rdreportdata.impl.RdReportDataServiceImpl;
import com.efraiser.test.db.service.rd.rdreportmiddata.RdReportMidDataService;
import com.efraiser.test.db.service.rd.rdreportmidinfo.RdReportMidInfoService;
import com.efraiser.test.db.service.rd.rdreportmidpcthelper.RdReportMidPctHelperService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import org.nutz.dao.entity.Record;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class RdReportMidDataUtil {
    private static Logger logger = LoggerFactory.getLogger(RdReportMidDataUtil.class);
    private static int countNum = 0;

    /**
     * 功能描述：根据传入的数字集合转换成字母集合(数字必须排好序) 例如：传入3，4，5 ---》A,B,C 传入 3，5，6 ---》A,C,D
     *
     * @param numList
     * @return
     * @author
     * @date 2017年9月21日
     * @modify log:
     */
    private static List<String> changeNum(List<String> numList, List<String> maxNumList) {
        int firstMaxNum = Integer.valueOf(maxNumList.get(0));
        Map<String, String> numMap = new HashMap<String, String>();
        int count = firstMaxNum - 1;
        for (int i = 0; i < maxNumList.size(); i++) {
            int nowMaxNum = Integer.valueOf(maxNumList.get(i));
            int wordNum = nowMaxNum - count;
            String wordStr = "";
            if (wordNum < 27 && wordNum > 0) {
                char word = (char) (wordNum + 64);
                wordStr = String.valueOf(word);
            } else if (wordNum >= 27) {
                wordNum = wordNum - 26;
                char word = (char) (wordNum + 64);
                wordStr = "A" + String.valueOf(word);
            } else {
                return null;
            }
            numMap.put(maxNumList.get(i), wordStr);
        }
        List<String> wordList = new ArrayList<>();
        for (String num : numList) {
            wordList.add(numMap.get(num));
        }
        return wordList;
    }

    /**
     * 功能描述：List去除重复
     *
     * @param list
     * @return
     * @author
     * @date 2017年9月23日
     * @modify log:
     */
    private static List<String> removeTheSame(List<String> list) {
        Set<String> set = new HashSet<>();
        List<String> newList = new ArrayList<>();
        for (String str : list) {
            if (set.add(str)) {
                newList.add(str);
            }
        }
        return newList;
    }

    /**
     * 功能描述：将数据库数据List放入map(key为 reportId-rowId-colId)
     *
     * @param reportId
     * @return
     * @author
     * @date 2017年9月23日
     * @modify log:
     */
    private static Map<String, String> getDataValueFromDB(String reportId, List<RdReportMidData> rdReportMidDataList) {
        Map<String, String> dataMap = new HashMap<String, String>();
        for (RdReportMidData rdReportMidData : rdReportMidDataList) {
            String row = rdReportMidData.getRowId();
            String col = rdReportMidData.getColId();
            String key = reportId + "-" + row + "-" + col;
            dataMap.put(key, rdReportMidData.getValue2());
        }
        return dataMap;
    }

    /**
     * 功能描述：将一个报表的行信息放入map(key为 reportId)
     *
     * @param reportId
     * @param rdReportMidDataList
     * @return
     * @author
     * @date 2017年9月23日
     * @modify log:
     */
    private static Map<String, List<String>> getRowMap(String reportId, List<RdReportMidData> rdReportMidDataList) {
        Map<String, List<String>> dataMap = new HashMap<String, List<String>>();
        List<String> rowList = new ArrayList<>();
        for (RdReportMidData rdReportMidData : rdReportMidDataList) {
            String row = rdReportMidData.getRowId();
            rowList.add(row);
        }
        rowList = removeTheSame(rowList);
        dataMap.put(reportId, rowList);
        return dataMap;
    }

    /**
     * 功能描述：根据reportId获取所有行的列map(key为 reportId-rowId)
     *
     * @param reportId
     * @param rowList
     * @param rdReportMidDataList
     * @return
     * @author
     * @date 2017年9月25日
     * @modify log:
     */
    private static Map<String, List<String>> getAllColMap(String reportId, List<String> rowList,
                                                          List<RdReportMidData> rdReportMidDataList) {
        Map<String, List<String>> dataMap = new HashMap<String, List<String>>();
        for (String rowId : rowList) {
            List<String> colList = new ArrayList<>();
            for (RdReportMidData rdReportMidData : rdReportMidDataList) {
                if (rowId.equals(rdReportMidData.getRowId())) {
                    String col = rdReportMidData.getColId();
                    colList.add(col);
                }
            }
            String key = reportId + "-" + rowId;
            colList = removeTheSame(colList);
            dataMap.put(key, colList);
        }
        return dataMap;
    }

    /**
     * 功能描述：从报表模版中获取列数放入list
     *
     * @param firstCol  开始列
     * @param countCols 列数
     * @return
     * @author
     * @date 2017年9月28日
     * @modify log:
     */
    private static List<String> getMaxCols(String firstCol, String countCols) {
        int firstColNum = Integer.valueOf(firstCol);
        int colNums = Integer.valueOf(countCols);
        List<String> maxCols = new ArrayList<>();
        for (int i = firstColNum; i <= colNums; i++) {
            String col = String.valueOf(i);
            maxCols.add(col);
        }
        return maxCols;
    }

    /**
     * 功能描述：数据转化
     *
     * @param rowInfoList
     * @param rowList
     * @param reportInfo
     * @param colMaps
     * @param maxCols
     * @param fieldRowList 百分比单元格行
     * @param fieldMap     百分比单元格列的map,主键是行
     * @param strColList   字符列
     * @param dataMap
     * @param mergeMap     合并单元格map
     * @return
     * @author
     * @date 2017年9月27日
     * @modify log:
     */
    private static List<Record> doMakeData(int count, String[] rowInfoList, List<String> rowList,
                                           RdReportMidInfo reportInfo, Map<String, List<String>> colMaps, List<String> maxCols,
                                           List<Integer> fieldRowList, Map<String, List<String>> fieldMap, List<String> strColList,
                                           Map<String, String> dataMap, Map<String, List<String>> mergeMap) {
        List<Record> records = new ArrayList<>();
        String tableName = "RD_REPORT_DATA_" + reportInfo.getReportDate().substring(0, 4);
        // 数据开始行
        int dataRowNum = Integer.parseInt(rowInfoList[2]);
        // 最后一行
        int lastRowNum = Integer.parseInt(rowInfoList[1]);

        // ------修改S4700起始行与模版不匹配问题 Start------
        if (count == 0) {
            List<Integer> sjRowList = new ArrayList<>();
            int dateRow = Integer.parseInt(rowInfoList[2]);
            for (int s = 0; s < rowList.size(); s++) {
                // 上海数据行
                int sjRow = Integer.parseInt(rowList.get(s));
                if (sjRow < dateRow) {
                    sjRowList.add(sjRow);
                } else {
                    break;
                }
            }
            if (sjRowList.size() > 0) {
                for (Integer sjRow : sjRowList) {
                    Record record = new Record();
                    record.set(".table", tableName);
                    record.set("REPORT_ID", reportInfo.getReportId());
                    record.set("REPORT_ROW_NUM", sjRow);
                    List<String> colWordList = changeNum(maxCols, maxCols);
                    for (String colWord : colWordList) {
                        record.set("VALUE_" + colWord, null);
                    }
                    records.add(record);
                    rowList.remove(String.valueOf(sjRow));
                }
            }
        }
        // ------修改S4700起始行与模版不匹配问题 End------

        for (int i = dataRowNum; i <= lastRowNum; i++) {
            Record record = new Record();
            record.set(".table", tableName);
            record.set("REPORT_ID", reportInfo.getReportId());
            int rowNum = 0;
            if (count < rowList.size()) {
                // 如果count在rowList范围内
                rowNum = Integer.parseInt(rowList.get(count));
            } else {
                // 如果count超出了范围，那么使得当前当前行与rowNum不相等
                rowNum = i - 1;
            }
            if (rowNum != i) {
                // 这行数据为空
                record.set("REPORT_ROW_NUM", i);
                // 如有有一行为空，那么这行的列数和最大列相同
                List<String> colWordList = changeNum(maxCols, maxCols);
                for (String colWord : colWordList) {
                    record.set("VALUE_" + colWord, null);
                }
            } else {
                String mergKey = reportInfo.getTableId() + "-" + String.valueOf(rowNum);
                List<String> mergVauleList = mergeMap.get(mergKey);
                if (mergVauleList != null) {
                    Map<String, String> mergeTemp = new HashMap<String, String>();
                    int flagCount = 0;
                    for (int m = 0; m < mergVauleList.size(); m++) {
                        /**
                         * 例如：4-3，7-3，10-4，14-1 变成 4-4，7-5，10-6，14-7 第一次 右边是4 第二次 右边是7-(0+2) 第三次
                         * 右边是10-(0+2+2) 第四次 右边是14-(0+2+2+3)
                         */
                        String leftCol = "";
                        String rightCol = "";
                        if (m == 0) {
                            leftCol = mergVauleList.get(0).split("-")[0];
                            rightCol = leftCol;
                            flagCount = flagCount + Integer.valueOf(mergVauleList.get(0).split("-")[1]) - 1;
                        } else {
                            leftCol = mergVauleList.get(m).split("-")[0];
                            rightCol = String.valueOf(Integer.valueOf(leftCol) - flagCount);
                            flagCount = flagCount + Integer.valueOf(mergVauleList.get(m).split("-")[1]) - 1;
                        }
                        mergeTemp.put(leftCol, rightCol);
                    }
                    // 判断是否是百分比单元格行
                    if (fieldRowList.contains(rowNum)) {
                        record.set("REPORT_ROW_NUM", rowNum);
                        String colKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum);
                        List<String> fieldColList = fieldMap.get(String.valueOf(rowNum));
                        List<String> colList = colMaps.get(colKey);
                        // 如果数据列数大于模版，按模版来处理
                        if (colList.size() > maxCols.size()) {
                            // 数据列
                            int smalNum = Integer.valueOf(colList.get(0));
                            int bigNum = Integer.valueOf(colList.get(colList.size() - 1));
                            // 最大列
                            int firstMaxNum = Integer.valueOf(maxCols.get(0));
                            int lastMaxNum = Integer.valueOf(maxCols.get(maxCols.size() - 1));
                            if (smalNum < firstMaxNum) {
                                colList.remove(0);
                            }
                            if (bigNum > lastMaxNum) {
                                colList.remove(colList.size() - 1);
                            }
                        }
                        // 根据合并单元格将列转化
                        List<String> newColList = new ArrayList<>();
                        for (String col : colList) {
                            newColList.add(mergeTemp.get(col));
                        }
                        List<String> colWordList = changeNum(newColList, maxCols);
                        List<String> colMaxWordList = changeNum(maxCols, maxCols);
                        int flag = 0;
                        for (int j = 0; j < colMaxWordList.size(); j++) {
                            String colMaxWord = colMaxWordList.get(j);
                            String colNum = "";
                            String colWord = "";
                            if (flag < colList.size()) {
                                colNum = colList.get(flag);
                                colWord = colWordList.get(flag);
                            } else {
                                colWord = colMaxWordList.get(j - 1);
                            }
                            if (colMaxWord.equals(colWord)) {
                                String dataKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum) + "-" + colNum;
                                if (strColList.contains(colNum)) {// 字符列
                                    String dataValue = dataMap.get(dataKey);
                                    record.set("NAME_" + colMaxWord, dataValue);
                                } else {
                                    // 百分比单元格
                                    if (fieldColList.contains(colMaxWord)) {
                                        Double dataValue = Double.valueOf(
                                                (dataMap.get(dataKey)).replace(",", "").replace("无", "0")) * 100;
                                        record.set("VALUE_" + colMaxWord, dataValue);
                                    } else {
                                        Double dataValue = Double
                                                .valueOf((dataMap.get(dataKey)).replace(",", "").replace("无", "0"));
                                        record.set("VALUE_" + colMaxWord, dataValue);
                                    }
                                }
                                flag++;
                            } else {
                                record.set("VALUE_" + colMaxWord, null);
                            }
                        }
                    } else {
                        record.set("REPORT_ROW_NUM", rowNum);
                        String colKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum);
                        List<String> colList = colMaps.get(colKey);
                        // 如果数据列数大于模版，按模版来处理
                        if (colList.size() > maxCols.size()) {
                            // 数据列
                            int smalNum = Integer.valueOf(colList.get(0));
                            int bigNum = Integer.valueOf(colList.get(colList.size() - 1));
                            // 最大列
                            int firstMaxNum = Integer.valueOf(maxCols.get(0));
                            int lastMaxNum = Integer.valueOf(maxCols.get(maxCols.size() - 1));
                            if (smalNum < firstMaxNum) {
                                colList.remove(0);
                            }
                            if (bigNum > lastMaxNum) {
                                colList.remove(colList.size() - 1);
                            }
                        }
                        // 根据合并单元格将列转化
                        List<String> newColList = new ArrayList<>();
                        for (String col : colList) {
                            newColList.add(mergeTemp.get(col));
                        }
                        List<String> colMaxWordList = changeNum(maxCols, maxCols);
                        List<String> colWordList = changeNum(newColList, maxCols);
                        int flag = 0;
                        for (int j = 0; j < colMaxWordList.size(); j++) {
                            String colMaxWord = colMaxWordList.get(j);
                            String colNum = "";
                            String colWord = "";
                            if (flag < colList.size()) {
                                colNum = colList.get(flag);
                                colWord = colWordList.get(flag);
                            } else {
                                colWord = colMaxWordList.get(j - 1);
                            }
                            if (colMaxWord.equals(colWord)) {
                                String dataKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum) + "-" + colNum;
                                if (strColList.contains(colNum)) {// 字符列
                                    String dataValue = dataMap.get(dataKey);
                                    record.set("NAME_" + colMaxWord, dataValue);
                                } else {
                                    Double dataValue = Double
                                            .valueOf((dataMap.get(dataKey)).replace(",", "").replace("无", "0"));
                                    record.set("VALUE_" + colMaxWord, dataValue);
                                }
                                flag++;
                            } else {
                                record.set("VALUE_" + colMaxWord, null);
                            }
                        }
                    }
                } else {
                    if (fieldRowList.contains(rowNum)) {
                        List<String> fieldColList = fieldMap.get(String.valueOf(rowNum));
                        record.set("REPORT_ROW_NUM", rowNum);
                        String colKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum);
                        List<String> colList = colMaps.get(colKey);
                        // 如果数据列数大于模版，按模版来处理
                        if (colList.size() > maxCols.size()) {
                            // 数据列
                            int smalNum = Integer.valueOf(colList.get(0));
                            int bigNum = Integer.valueOf(colList.get(colList.size() - 1));
                            // 最大列
                            int firstMaxNum = Integer.valueOf(maxCols.get(0));
                            int lastMaxNum = Integer.valueOf(maxCols.get(maxCols.size() - 1));
                            if (smalNum < firstMaxNum) {
                                colList.remove(0);
                            }
                            if (bigNum > lastMaxNum) {
                                colList.remove(colList.size() - 1);
                            }
                        }
                        List<String> colWordList = changeNum(colList, maxCols);
                        List<String> colMaxWordList = changeNum(maxCols, maxCols);
                        int flag = 0;
                        for (int j = 0; j < colMaxWordList.size(); j++) {
                            String colMaxWord = colMaxWordList.get(j);
                            String colNum = "";
                            String colWord = "";
                            if (flag < colList.size()) {
                                colNum = colList.get(flag);
                                colWord = colWordList.get(flag);
                            } else {
                                colWord = colMaxWordList.get(j - 1);
                            }
                            if (colMaxWord.equals(colWord)) {
                                String dataKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum) + "-" + colNum;
                                if (strColList.contains(colNum)) {// 字符列
                                    String dataValue = dataMap.get(dataKey);
                                    record.set("NAME_" + colMaxWord, dataValue);
                                } else {
                                    // 百分比单元格
                                    if (fieldColList.contains(colMaxWord)) {
                                        Double dataValue = Double.valueOf(
                                                (dataMap.get(dataKey)).replace(",", "").replace("无", "0")) * 100;
                                        record.set("VALUE_" + colMaxWord, dataValue);
                                    } else {
                                        Double dataValue = Double
                                                .valueOf((dataMap.get(dataKey)).replace(",", "").replace("无", "0"));
                                        record.set("VALUE_" + colMaxWord, dataValue);
                                    }
                                }
                                flag++;
                            } else {
                                record.set("VALUE_" + colMaxWord, null);
                            }
                        }
                    } else {
                        record.set("REPORT_ROW_NUM", rowNum);
                        String colKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum);
                        List<String> colList = colMaps.get(colKey);
                        // 如果数据列数大于模版，按模版来处理
                        if (colList.size() > maxCols.size()) {
                            // 数据列
                            int smalNum = Integer.valueOf(colList.get(0));
                            int bigNum = Integer.valueOf(colList.get(colList.size() - 1));
                            // 最大列
                            int firstMaxNum = Integer.valueOf(maxCols.get(0));
                            int lastMaxNum = Integer.valueOf(maxCols.get(maxCols.size() - 1));
                            if (smalNum < firstMaxNum) {
                                colList.remove(0);
                            }
                            if (bigNum > lastMaxNum) {
                                colList.remove(colList.size() - 1);
                            }
                        }
                        List<String> colMaxWordList = changeNum(maxCols, maxCols);
                        List<String> colWordList = changeNum(colList, maxCols);
                        int flag = 0;
                        for (int j = 0; j < colMaxWordList.size(); j++) {
                            String colMaxWord = colMaxWordList.get(j);
                            String colNum = "";
                            String colWord = "";
                            if (flag < colList.size()) {
                                colNum = colList.get(flag);
                                colWord = colWordList.get(flag);
                            } else {
                                colWord = colMaxWordList.get(j - 1);
                            }
                            if (colMaxWord.equals(colWord)) {
                                String dataKey = reportInfo.getReportId() + "-" + String.valueOf(rowNum) + "-" + colNum;
                                if (strColList.contains(colNum)) {// 字符列
                                    String dataValue = dataMap.get(dataKey);
                                    record.set("NAME_" + colMaxWord, dataValue);
                                } else {
                                    Double dataValue = Double
                                            .valueOf((dataMap.get(dataKey)).replace(",", "").replace("无", "0"));
                                    record.set("VALUE_" + colMaxWord, dataValue);
                                }
                                flag++;
                            } else {
                                record.set("VALUE_" + colMaxWord, null);
                            }
                        }
                    }
                }
                count++;
            }
            records.add(record);
        }
        countNum = count;
        return records;
    }

    /**
     * 功能描述：对合并单元格进行处理
     *
     * @return
     * @throws Exception
     * @author
     * @date 2017年10月11日
     * @modify log:
     */
    private static Map<String, List<String>> getMergeCells() throws Exception {

        RdTableModelService rdTableModelService = (RdTableModelService) SpringContextUtil.getBean("rdTableModelServiceImpl");
        List<RdTableModel> tabModelList = rdTableModelService.getModelInReportInfo();
        Map<String, List<String>> mergeMap = new HashMap<String, List<String>>();
        for (RdTableModel rdTableModel : tabModelList) {
            boolean flag = false;
            List<String> rdFieldList = new ArrayList<>();
            // 遍历对象，去除#P后，长度超过4的为合并单元格，将该对象的属性值放入list
            for (Field field : rdTableModel.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                String fieldValue = field.get(rdTableModel).toString();
                if (fieldValue.equals("END")) {
                    break;
                }
                fieldValue = fieldValue.replace("#P", "");
                String[] fieldStr = fieldValue.split("#");
                if (fieldStr.length > 4) {
                    flag = true;
                }
                if (fieldValue.contains("#")) {
                    rdFieldList.add(fieldValue);
                }
            }
            // flag为true说明是合并单元格
            if (flag) {
                int count = 1;
                Field tableIdField = rdTableModel.getClass().getDeclaredField("tableId");
                tableIdField.setAccessible(true);
                Field rowNumField = rdTableModel.getClass().getDeclaredField("fileRownum");
                rowNumField.setAccessible(true);
                String tableId = tableIdField.get(rdTableModel).toString();
                String rowNum = rowNumField.get(rdTableModel).toString();
                String key = tableId + "-" + rowNum;
                List<String> mergeColList = new ArrayList<>();
                for (String rdField : rdFieldList) {
                    String[] fieldStr = rdField.split("#");
                    // 是否是填写列
                    if (!rdField.contains("LD") && !rdField.contains("LS")) {
                        Integer colcount = Integer.valueOf(fieldStr[fieldStr.length - 1]);
                        count = count + colcount;
                    } else {
                        if (fieldStr.length > 4) {
                            String mergCol = String.valueOf(count) + "-" + fieldStr[fieldStr.length - 1];
                            mergeColList.add(mergCol);
                            Integer colcount = Integer.valueOf(fieldStr[fieldStr.length - 1]);
                            count = count + colcount;
                        } else {
                            String mergCol = String.valueOf(count) + "-1";
                            mergeColList.add(mergCol);
                            count = count + 1;
                        }
                    }
                }
                mergeMap.put(key, mergeColList);
            }
        }
        return mergeMap;
    }

    /**
     * 功能描述：将省局的数据转换
     *
     * @return
     * @author
     * @date 2017年9月21日
     * @modify log:
     */
    public static void makeReportDataMove() throws Exception {
        RdReportMidInfoService rdTableModelService = (RdReportMidInfoService) SpringContextUtil.getBean("rdReportMidInfoServiceImpl");
        List<RdReportMidInfo> reportInfoList = rdTableModelService.getReportMidInfoList();

        SysGgzdService sysGgzdService = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");

        // 合并单元格map
        int maxThreadNum = Integer.parseInt(sysGgzdService.getGgzdByZdValue("MAX", "1104_MAX_THREAD_NUM").getZdName());

        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(maxThreadNum);
        final Map<String, List<String>> mergeMap = getMergeCells();

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");
        RdReportMidDataService rdReportMidDataDao = (RdReportMidDataService) SpringContextUtil.getBean("rdReportMidDataServiceImpl");
        RdReportMidPctHelperService rdReportMidPctHelperDao = (RdReportMidPctHelperService) SpringContextUtil.getBean("rdReportMidPctHelperServiceImpl");

        RdReportDataServiceImpl rdReportDataDao = (RdReportDataServiceImpl) SpringContextUtil.getBean("rdReportDataServiceImpl");

        for (final RdReportMidInfo reportInfo : reportInfoList) {
            fixedThreadPool.execute(new Runnable() {
                public void run() {
                    List<Record> records = new ArrayList<>();
                    String reportId = reportInfo.getReportId();
                    String reportDate = reportInfo.getReportDate().replace("-", "");
                    RdTableInfo rdTableInfo = rdTableInfoDao.getTableInfoByTabIdAndVersionAndDate(
                            reportInfo.getTableId(), reportInfo.getVersionId(), reportDate);
                    if (rdTableInfo != null) {
                        // 一张报表数据
                        List<RdReportMidData> rdReportMidDataList = rdReportMidDataDao.getRdReportMidDataList(reportId);
                        if (rdReportMidDataList.size() != 0) {
                            // value的dataMap
                            Map<String, String> dataMap = getDataValueFromDB(reportId, rdReportMidDataList);
                            // 一张报表的行信息
                            Map<String, List<String>> rowMap = getRowMap(reportId, rdReportMidDataList);
                            List<String> rowList = rowMap.get(reportId);
                            // 一张报表的列信息
                            Map<String, List<String>> colMaps = getAllColMap(reportId, rowList, rdReportMidDataList);
                            // 百分比单元格信息
                            List<Integer> fieldRowList = new ArrayList<>();
                            List<String> fieldColList = new ArrayList<>();
                            Map<String, List<String>> fieldMap = new HashMap<>();
                            List<RdReportMidPctHelper> reportMidPctList = rdReportMidPctHelperDao
                                    .getPctHelperByReportId(reportId);
                            if (reportMidPctList.size() > 0) {
                                // 处理百分比单元格
                                for (int f = 0; f < reportMidPctList.size(); f++) {
                                    String[] field = reportMidPctList.get(f).getFieldLocation().split("_");
                                    String rowKey = field[1];
                                    if (f == 0) {
                                        fieldRowList.add(Integer.parseInt(field[1]));
                                        fieldColList.add(field[2]);
                                    } else {
                                        fieldColList = fieldMap.get(rowKey);
                                        if (fieldColList != null) {// 说明是相同行
                                            fieldColList.add(field[2]);
                                        } else {
                                            fieldColList = new ArrayList<>();
                                            fieldRowList.add(Integer.parseInt(field[1]));
                                            fieldColList.add(field[2]);
                                        }
                                    }
                                    fieldMap.put(rowKey, fieldColList);
                                }
                            }
                            // 插入空白行
                            List<String> maxCols1 = new ArrayList<>();
                            for (int j = 0; j <= 51; j++) {
                                maxCols1.add(String.valueOf(j));
                            }
                            String tableName = "RD_REPORT_DATA_" + reportInfo.getReportDate().substring(0, 4);
                            Record record1 = new Record();
                            record1.set(".table", tableName);
                            record1.set("REPORT_ID", reportInfo.getReportId());
                            record1.set("REPORT_ROW_NUM", 10000);
                            List<String> colWordList1 = changeNum(maxCols1, maxCols1);
                            List<String> colWordList2 = changeNum(maxCols1, maxCols1);
                            for (String colWord : colWordList1) {
                                record1.set("VALUE_" + colWord, null);
                            }
                            for (String colWord : colWordList2) {
                                record1.set("NAME_" + colWord, null);
                            }
                            records.add(record1);
                            // 模版行信息
                            String reportRowInfo = rdTableInfo.getRowInfo();
                            if (reportRowInfo.contains("@")) {
                                String[] rowInfosList = reportRowInfo.split("@");
                                String reportColInfo = rdTableInfo.getColInfo();
                                String[] colInfosList = reportColInfo.split("@");
                                countNum = 0;
                                for (int m = 0; m < rowInfosList.length; m++) {
                                    // 行信息
                                    String[] rowInfoList = rowInfosList[m].split("#");
                                    // 列信息
                                    String[] colInfoList = colInfosList[m].split("#");
                                    // 开始列
                                    String firstCol = colInfoList[1];
                                    // 列数
                                    String countCols = colInfoList[0];
                                    List<String> maxCols = getMaxCols(firstCol, countCols);
                                    String[] strCols = colInfoList[2].split(",");
                                    // 字符串列
                                    List<String> strColList = new ArrayList<>();
                                    for (int c = 0; c < strCols.length; c++) {
                                        strColList.add(strCols[c]);
                                    }
                                    records.addAll(doMakeData(countNum, rowInfoList, rowList, reportInfo, colMaps,
                                            maxCols, fieldRowList, fieldMap, strColList, dataMap, mergeMap));
                                }
                            } else {
                                // 行信息
                                String[] rowInfoList = reportRowInfo.split("#");
                                // 列信息
                                String colInfo = rdTableInfo.getColInfo();
                                String[] colInfoList = colInfo.split("#");
                                // 开始列
                                String firstCol = colInfoList[1];
                                // 列数
                                String countCols = colInfoList[0];
                                List<String> maxCols = getMaxCols(firstCol, countCols);
                                // 字符串列
                                String[] strCols = colInfoList[2].split(",");
                                List<String> strColList = new ArrayList<>();
                                for (int c = 0; c < strCols.length; c++) {
                                    strColList.add(strCols[c]);
                                }
                                countNum = 0;
                                records.addAll(doMakeData(countNum, rowInfoList, rowList, reportInfo, colMaps, maxCols,
                                        fieldRowList, fieldMap, strColList, dataMap, mergeMap));
                            }
                            rdReportDataDao.dao().fastInsert(records);
                            logger.info("机构：" + reportInfo.getBrNo() + "的" + rdTableInfo.getTabCode() + "导入！！");
                            // if (records.size() > 1000) {
                            // rdReportDataDao.dao().fastInsert(records);
                            // records.clear();
                            // }
                        }
                    }
                }
            });
            // if (records.size() != 0) {
            // rdReportDataDao.dao().fastInsert(records);
            // }
        }
        fixedThreadPool.shutdown();
        while (true) {
            if (fixedThreadPool.isTerminated()) {
                break;
            }
            Thread.sleep(200);
        }
        //rdReportDataDao.deleteByRowNum(reportInfoList.get(0).getReportDate().replace("-", ""), 10000);
    }


}
