package com.efraiser.test.db.service.cache.impl;

import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.dy.DyTableModel;
import com.efraiser.test.db.service.cache.CacheInterface;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.util.DyTableHtmlHelper;
import com.efraiser.test.db.util.DyTableUtil;
import net.sf.ehcache.Element;
import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DyTableModelHtmlCache implements CacheInterface {
    private static final Logger log = LoggerFactory.getLogger(DyTableModelHtmlCache.class);

    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyTableModelService dyTableModelService;

    /*
     * 用于初始化查询报表html元素
     */
    @Override
    public List<Element> init() {

        DyTableInfoServiceImpl dyTableInfoServiceImpl = (DyTableInfoServiceImpl) dyTableInfoService;
        List<DyTableInfo> rInfos = dyTableInfoServiceImpl.query(null, null);
        List<Element> elements = new ArrayList<Element>();
        for (DyTableInfo tableInfo : rInfos) {
            try {
                List<DyTableHtmlHelper> rhs = doBulidTableModelHtml(tableInfo);
                String key = DyTableConstants.DY_TABLE_MODEL_HTML_KEY + tableInfo.getTableId();
                elements.add(new Element(key, rhs));
            } catch (Exception e) {
                e.printStackTrace();
                log.error("初始化报表[{}]html元素时发生异常!", tableInfo.getTabCode() + ":" + tableInfo.getVersionNo());
            }
        }
        return elements;
    }

    @SuppressWarnings("unchecked")
    public static List<DyTableHtmlHelper> getListHtmlHelper(String tableId) {
        return (List<DyTableHtmlHelper>) CommonCache.getInstance().get(DyTableConstants.DY_TABLE_MODEL_HTML_KEY + tableId);
    }

    /**
     * 根据配置信息,创建页面HTML元素(1104)
     *
     * @param tableInfo
     * @return
     * @throws Exception
     * @author efraiser.xiaxiaofeng
     */
    public List<DyTableHtmlHelper> doBulidTableModelHtml(DyTableInfo tableInfo) throws Exception {
        List<DyTableHtmlHelper> rhs = new ArrayList<DyTableHtmlHelper>();
        String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
        String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
        String[] subNames = DyTableUtil.getTableSubNameLists(tableInfo.getSubTabname());
        String tabCode = tableInfo.getTabCode();
        List<DyTableModel> tableModels = dyTableModelService.getTableModelList(tableInfo.getTableId());
        Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);
        int tmDataIndex = 0;
        for (int y = 0; y < rowS.length; y++) {
            // 第几部分
            rhs.add(new DyTableHtmlHelper("<div class=\"subNameDiv\">" + DyTableUtil.getTableSubName(subNames, y) + "</div><table id=\"tbmain" + y + "\" class=\"rd-table rd-table-" + tableInfo.getTabCode() + "-"
                    + tableInfo.getVersionNo() + "-" + y + "\" cellspacing=\"0\" cellpadding=\"4\" border=\"0\"><thead>"));
            String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
            String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);

            int fileIndex = 0;
            boolean isHeadRows = false;
            //boolean headF = true;// 头部thead标签状态控制
            for (int i = Integer.valueOf(rowInfos[0]); i <= Integer.valueOf(rowInfos[1]); i++, tmDataIndex++) {
                DyTableModel tm = tableModels.get(tmDataIndex);
                fileIndex = 0;
                int fileRowNum = tm.getFileRownum();
                if (i < Integer.valueOf(rowInfos[2])) {
                    rhs.add(new DyTableHtmlHelper("<tr><td class=\"rd-row-num\"><nobr>" + fileRowNum + "</nobr></td>"));
                    isHeadRows = true;

                } else {
//					if (headF) {
//						rhs.add(new DyTableHtmlHelper("</thead><tbody>"));
//						headF = false;
//					}
                    rhs.add(new DyTableHtmlHelper("<tr><td class=\"rd-row-num\"><input type=\"hidden\" name=\"rds[" + i + "].reportRowNum\" value=\"" + fileRowNum + "\"><nobr>" + fileRowNum
                            + "</nobr></td>"));
                    isHeadRows = false;
                }
                for (int j = 1; j <= Integer.valueOf(colInfos[0]); j++) {
                    String mergeRow = "";
                    String mergeCol = "";
                    String tdValue = "";
                    String tdType = "";
                    String preStr = "";
                    String fileStr = rdmMirror.getValue(tm, "field_" + j).toString();

                    if (DyTableConstants.END_CELL.equals(fileStr)) {
                        break;
                    }
                    if (fileStr.contains("#P")) {
                        fileStr = fileStr.replace("#P", "");
                        preStr = "%";
                    }

                    String cla = "";
                    if (fileStr.contains(".TD_C")) {
                        cla = "TD_C";
                        fileStr = fileStr.replace(".TD_C", "");
                    } else if (fileStr.contains(".TD_L")) {
                        cla = "TD_L";
                        fileStr = fileStr.replace(".TD_L", "");
                    }

                    String[] colParams = fileStr.split("#");
                    if (colParams.length > 0) {
                        tdValue = (colParams[0] == null) ? "" : colParams[0];
                    }

                    if (isHeadRows) {
                        if (colParams.length > 1) {
                            mergeRow = (colParams[1] == null) ? "" : colParams[1];
                        }
                        if (colParams.length > 2) {
                            mergeCol = (colParams[2] == null) ? "" : colParams[2];
                        }

                        rhs.add(new DyTableHtmlHelper("<th class=\"" + cla + "\"" + DyTableUtil.mergeStr(mergeRow, mergeCol) + "><nobr>" + DyTableUtil.getRdVal(tdValue) + "</nobr></th>"));
                    } else if (!checkIsDateCol(tdValue)) {// 非数据列
                        if (colParams.length > 1) {
                            mergeRow = (colParams[1] == null) ? "" : colParams[1];
                        }
                        if (colParams.length > 2) {
                            mergeCol = (colParams[2] == null) ? "" : colParams[2];
                        }

                        rhs.add(new DyTableHtmlHelper("<td class=\"" + cla + "\"" + DyTableUtil.mergeStr(mergeRow, mergeCol) + "><nobr>" + DyTableUtil.getRdVal(tdValue) + "</nobr></td>"));

                    } else {
                        int cIndex = 3;
                        // if (RdTableConstants.PARAM_NUM_CELL.equals(tdValue)
                        // || RdTableConstants.PARAM_STR_CELL.equals(tdValue)) {
                        // cIndex++;
                        // }
                        if (colParams.length > cIndex) {
                            mergeRow = (colParams[cIndex] == null) ? "" : colParams[cIndex];
                        }
                        if (colParams.length > (cIndex + 1)) {
                            mergeCol = (colParams[(cIndex + 1)] == null) ? "" : colParams[(cIndex + 1)];
                        }

                        if (StrUtil.isNull(tdValue)) {
                            preStr = "";
                        }
                        if (DyTableConstants.PARAM_NUM_CELL.equals(tdValue) || DyTableConstants.PARAM_STR_CELL.equals(tdValue)) {
                            tdValue = colParams[1];
                            rhs.add(new DyTableHtmlHelper("<td " + DyTableUtil.getTdIdStr(tabCode, fileRowNum, fileIndex) + " class=\"td-param-cell " + cla + "\" "
                                    + DyTableUtil.mergeStr(mergeRow, mergeCol) + "><input " + DyTableUtil.getInputIdStr(tabCode, fileRowNum, fileIndex) + "   type=\"hidden\"  preStr=\"" + preStr
                                    + "\"  name=\"rds[" + i + "]." + DyTableUtil.getFieldName("value", fileIndex) + "\" value=\"" + DyTableUtil.getRdVal(tdValue) + "\"><nobr class=\"valNoBr\">"
                                    + DyTableUtil.getRdVal(tdValue) + preStr + "</nobr></td>"));
                        } else if (DyTableConstants.STRING_CELL.equals(tdValue)) {
                            tdType = (colParams[1] == null) ? "2" : colParams[1];
                            if ("2".equals(tdType)) {
                                preStr = "";
                            }
                            rhs.add(new DyTableHtmlHelper(fileRowNum + "_" + DyTableUtil.getFieldName("", fileIndex), "<td " + DyTableUtil.getTdIdStr(tabCode, fileRowNum, fileIndex)
                                    + " class=\"td-data_" + tdType + " " + cla + "\"" + DyTableUtil.mergeStr(mergeRow, mergeCol) + "><input "
                                    + DyTableUtil.getInputIdStr(tabCode, fileRowNum, fileIndex) + "  preStr=\"" + preStr + "\" style=\"display: none\" type=\"text\"  dType=\"" + tdValue
                                    + "\" class=\"input_out\" name=\"rds[" + i + "]." + DyTableUtil.getFieldName("name", fileIndex) + "\"  value=\"", preStr, tdValue));
                        } else if (DyTableConstants.DATA_CELL.equals(tdValue)) {
                            tdType = (colParams[1] == null) ? "2" : colParams[1];
                            if ("2".equals(tdType)) {
                                preStr = "";
                            }
                            rhs.add(new DyTableHtmlHelper(fileRowNum + "_" + DyTableUtil.getFieldName("", fileIndex), "<td " + DyTableUtil.getTdIdStr(tabCode, fileRowNum, fileIndex)
                                    + " class=\"td-data_" + tdType + " " + cla + "\"" + DyTableUtil.mergeStr(mergeRow, mergeCol) + "><input "
                                    + DyTableUtil.getInputIdStr(tabCode, fileRowNum, fileIndex) + "  preStr=\"" + preStr + "\" style=\"display: none\" type=\"text\"  dType=\"" + tdValue
                                    + "\" class=\"input_out\" name=\"rds[" + i + "]." + DyTableUtil.getFieldName("value", fileIndex) + "\"  value=\"", preStr, tdValue));
                        } else {
                            rhs.add(new DyTableHtmlHelper("<td>&nbsp;</td>"));
                        }

                        fileIndex++;
                    }

                }
                rhs.add(new DyTableHtmlHelper("</tr>"));
            }

            rhs.add(new DyTableHtmlHelper("</tbody></table>"));
        }

        return rhs;

    }

    private boolean checkIsDateCol(String tdValue) {
        if (tdValue.equals(DyTableConstants.DATA_CELL) || tdValue.equals(DyTableConstants.STRING_CELL) || tdValue.equals(DyTableConstants.PARAM_NUM_CELL)
                || tdValue.equals(DyTableConstants.PARAM_STR_CELL) || tdValue.equals(DyTableConstants.INT_CELL)) {
            return true;
        }
        return false;
    }


}
