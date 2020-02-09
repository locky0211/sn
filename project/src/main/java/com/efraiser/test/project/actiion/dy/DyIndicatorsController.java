package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsOrgans;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl.DyIndicatorsBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatorsinfo.DyIndicatorsInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsinfo.impl.DyIndicatorsInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.dao.Cnd;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("dy/indicators")
public class DyIndicatorsController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyIndicatorsController.class);

    @Autowired
    private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;

    @Autowired
    private DyIndicatorsInfoService dyIndicatorsInfoService;

    @Autowired
    private DyTableInfoService dyTableInfoService;

    @Autowired
    private DyReportInfoService dyReportInfoService;

    @RequestMapping("/doSaveIndSort")
    @ResponseBody
    public RequestResult doSaveIndSort(@RequestBody List<DyIndicatorsBasicInfo> inds) {

        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        try {
            eyIndicatorsBasicInfoServiceImpl.dao().updateIgnoreNull(inds.toArray());
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doSaveIndSort() error! inds:[" + JSONArray.toJSONString(inds) + "]", e);
            return requestResult(false, "");
        }
    }

    @RequestMapping("/checkIndName")
    @ResponseBody
    public Object checkIndName(String indName) {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        return eyIndicatorsBasicInfoServiceImpl.count(Cnd.where("indName", "=", indName)) > 0;
    }

    @RequestMapping("/getIndicatorsBasicInfoList")
    @ResponseBody
    public Object getIndicatorsBasicInfoList(HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);

        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        String sqlStr = "SELECT * FROM(SELECT * FROM DY.DY_INDICATORS_BASIC_INFO WHERE IS_PARENT='y'	UNION ALL 	SELECT * FROM RD_INDICATORS_BASIC_INFO WHERE C_USER in('admin','"
                + user.getUserId() + "') AND IS_PARENT='n'	) ORDER BY SORT_NUM";
        return eyIndicatorsBasicInfoServiceImpl.getListBySql(sqlStr, null, null);
    }

    @RequestMapping("/getIndicatorsTypeList")
    @ResponseBody
    public Object getIndicatorsTypeList() {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        return eyIndicatorsBasicInfoServiceImpl.query(Cnd.where("isParent", "=", "y").asc("sortNum"), null);
    }

    /**
     * 更新监管指标启用状态
     *
     * @param id
     * @param validFlag
     * @return
     */
    @RequestMapping("/updateIndicatorsBasicInfoValidFlag")
    @ResponseBody
    public RequestResult updateIndicatorsBasicInfoValidFlag(String id, String validFlag) {
        try {
            if ("y".equals(validFlag)) {
                validFlag = "n";
            } else {
                validFlag = "y";
            }
            DyIndicatorsBasicInfo dyIndicatorsBasicInfo = dyIndicatorsBasicInfoService.updateIndicatorsBasicInfoValidFlag(id, validFlag);
            return requestResult(true, dyIndicatorsBasicInfo);
        } catch (Exception e) {
            logger.error("updateIndicatorsBasicInfoValidFlag() error! id:[" + id + "],validFlag:[" + validFlag + "]", e);
            return requestResult(false, null);
        }
    }

    @RequestMapping("/addOrUpdateIndicatorsBasicInfo")
    @ResponseBody
    public RequestResult addOrUpdateIndicatorsBasicInfo(@RequestBody DyIndicatorsBasicInfo indicatorsBasicInfo, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        try {
            if (StrUtil.isNull(indicatorsBasicInfo.getId())) {
                indicatorsBasicInfo.setValidFlag("y");
                indicatorsBasicInfo.setcUser(user.getUserId());
                eyIndicatorsBasicInfoServiceImpl.dao().insert(indicatorsBasicInfo);
            } else {
                eyIndicatorsBasicInfoServiceImpl.dao().update(indicatorsBasicInfo);
            }
            if (indicatorsBasicInfo.getIsParent().equals("n")) {
                List<String> organs = StrUtil.convertToList(indicatorsBasicInfo.getIndOrgans(), ",");
                List<DyIndicatorsOrgans> iOrgans = new ArrayList<DyIndicatorsOrgans>();
                for (String or : organs) {
                    DyIndicatorsOrgans io = new DyIndicatorsOrgans();
                    io.setIndId(indicatorsBasicInfo.getId());
                    io.setOrganType(or);
                    iOrgans.add(io);
                }
                eyIndicatorsBasicInfoServiceImpl.dao().clear(DyIndicatorsOrgans.class, Cnd.where("IND_ID", "=", indicatorsBasicInfo.getId()));
                eyIndicatorsBasicInfoServiceImpl.dao().fastInsert(iOrgans);
            }
            return requestResult(true, indicatorsBasicInfo);
        } catch (Exception e) {
            logger.error("addOrUpdateIndicatorsBasicInfo() error! indicatorsBasicInfo:[" + JSONObject.toJSONString(indicatorsBasicInfo) + "]", e);
            return requestResult(false, "保存指标信息出错!");
        }
    }

    @RequestMapping("/toEditIndicatorsBasicInfo")
    public ModelAndView toEditIndicatorsBasicInfo(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        DyIndicatorsBasicInfo dyIndicatorsBasicInfo = eyIndicatorsBasicInfoServiceImpl.fetch(id);
        if (dyIndicatorsBasicInfo != null) {
            modelAndView.addObject("obj", dyIndicatorsBasicInfo);
        }
        return modelAndView;
    }

    @RequestMapping("/fetchindicatorsInfo")
    @ResponseBody
    public Object fetchindicatorsInfo(String id) {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        return eyIndicatorsBasicInfoServiceImpl.fetch(id);
    }

    @RequestMapping("/deleteIndicatorsBasicInfo")
    @ResponseBody
    public RequestResult deleteIndicatorsBasicInfo(String id) {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        try {
            DyIndicatorsBasicInfo rbi = eyIndicatorsBasicInfoServiceImpl.fetch(id);
            if ("y".equals(rbi.getIsParent())) {
                if (eyIndicatorsBasicInfoServiceImpl.count(Cnd.where("pId", "=", id)) > 0) {
                    return requestResult(false, "该类型下存在监管指标,无法进行删除!");
                }
            } else {
                if (eyIndicatorsBasicInfoServiceImpl.count(Cnd.where("bId", "=", id)) > 0) {
                    return requestResult(false, "监管指标存在版本信息,无法进行删除!");
                }
            }
            dyIndicatorsBasicInfoService.deleteIndInfo(id);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("deleteIndicatorsBasicInfo() error! id:[" + id + "]", e);
            return requestResult(false, "处理异常!!");
        }

    }

    // 指标信息管理
    @RequestMapping("/checkIndDate")
    @ResponseBody
    public Object checkIndDate(String indDate, String bId) {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        return eyIndicatorsBasicInfoServiceImpl.count(Cnd.where("indDate", "=", indDate).and("bId", "=", bId)) > 0;
    }

    @RequestMapping("/getIndicatorsInfoList")
    @ResponseBody
    public Object getIndicatorsInfoList(String bId) {
        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        return eyIndicatorsBasicInfoServiceImpl.query(Cnd.where("bId", "=", bId).desc("IND_DATE"), null);
    }

    @RequestMapping("/addOrUpdateIndicatorsInfo")
    @ResponseBody
    public Object addOrUpdateIndicatorsInfo(@RequestBody DyIndicatorsInfo indicatorsInfo) {

        DyIndicatorsBasicInfoServiceImpl eyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        try {
            if (StrUtil.isNull(indicatorsInfo.getId())) {
                eyIndicatorsBasicInfoServiceImpl.dao().insert(indicatorsInfo);
            } else {
                eyIndicatorsBasicInfoServiceImpl.dao().update(indicatorsInfo);
            }
            return true;
        } catch (Exception e) {
            logger.error("addOrUpdateIndicatorsInfo() error! indicatorsBasicInfo:[" + JSONObject.toJSONString(indicatorsInfo) + "]", e);
            return false;
        }
    }

    @RequestMapping("/toEditIndicatorsInfo")
    public ModelAndView toEditIndicatorsInfo(String id, String bId, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);
        modelAndView.addObject("bId",bId);

        DyIndicatorsInfoServiceImpl dyIndicatorsInfoServiceImpl = (DyIndicatorsInfoServiceImpl)dyIndicatorsInfoService;

        DyIndicatorsInfo ri = dyIndicatorsInfoServiceImpl.fetch(id);
        ri.setStartDate(DateUtil.format(DateUtil.parse(ri.getStartDate(), "yyyyMM"), "yyyy-MM"));
        ri.setEndDate(DateUtil.format(DateUtil.parse(ri.getEndDate(), "yyyyMM"), "yyyy-MM"));

        modelAndView.addObject("obj",ri);
        return modelAndView;

    }

    @RequestMapping("/deleteIndicatorsInfo")
    @ResponseBody
    public Object deleteIndicatorsInfo(String id) {

        DyIndicatorsInfoServiceImpl dyIndicatorsInfoServiceImpl =(DyIndicatorsInfoServiceImpl)dyIndicatorsInfoService;

        try {
            dyIndicatorsInfoServiceImpl.delete(id);
            return true;
        } catch (Exception e) {
            logger.error("deleteIndicatorsInfo() error! id:[" + id + "]", e);
            return false;
        }
    }

    // @Ok("json")
    // @At
    // public Object generateIndicatorsData(String brNo, String reportDate) {
    // try {
    // // 需要生成数据的指标集合
    // List<RdIndicatorsInfo> indicatorsList = new
    // ArrayList<RdIndicatorsInfo>();
    // // 本期
    // Set<String> tabCodes = new HashSet<String>();
    // // 上期
    // Set<String> lastTabCodes = new HashSet<String>();
    // // 年初
    // Set<String> ncTabCodes = new HashSet<String>();
    // // 去年同期
    // Set<String> qntqTabCodes = new HashSet<String>();
    // int maxMonDays = DateUtil.getMonthMaxDays(DateUtil.parse(reportDate +
    // "01", DateUtil.FORMAT_DATE_SHORT));
    // String sysdate = reportDate + maxMonDays;
    // String tabType = RdCheckUtil.getTabTypeBySysMon(reportDate.substring(4,
    // 6));
    //
    // // 获取本期所有表编号集合
    // //
    // //（临时问题待确定：是否存在需要上期、年底和去年同期的报表不在这些编号里？举例：S63表在2012年报表代码设定为S6300,2013年将该表升级为S63第一部分，报表代码设定为S6301。这样是否会有指标公式里存在取S6301去年同期值）
    // List<String> rTabCodesAll = rdTableInfoService.getTabCodeList(brNo,
    // reportDate, tabType, true, true);
    // if (rTabCodesAll.size() == 0) {
    // // 没有找到机构需要上报的报表编号集合
    // }
    // // 获取百分比指标名称集合
    // List<String> pctCellLists = rdIndicatorsBasicInfoDao.getPctCellLists();
    // String indNameFlag = null;
    // try {
    // this.initIndicatorsTabList(rTabCodesAll, sysdate, indicatorsList,
    // tabCodes, lastTabCodes, ncTabCodes, qntqTabCodes, indNameFlag);
    // } catch (Exception e) {
    // if (StrUtil.isNotNull(indNameFlag)) {
    // // 解析指标indNameFlag时发生错误
    // } else {
    // // 初始化时发生异常
    // }
    // }
    //
    // if (indicatorsList == null || indicatorsList.size() == 0) {
    // // 没有需要生成数据的指标return
    // }
    // List<RdIndicatorsData> indicatorsDataList = new
    // ArrayList<RdIndicatorsData>();
    // for (String br : brNo.split(",")) {
    // Map<String, String> dataMap = new HashMap<String, String>();
    // if (tabCodes.size() > 0) {
    // rdReportInfoDao.initRdReportData(tabCodes, br, reportDate, tabType, "0",
    // dataMap);
    // }
    // if (lastTabCodes.size() > 0) {
    // rdReportInfoDao.initRdReportData(lastTabCodes, br, reportDate, tabType,
    // "1", dataMap);
    // }
    // if (ncTabCodes.size() > 0) {
    // rdReportInfoDao.initRdReportData(ncTabCodes, br, reportDate, tabType,
    // "2", dataMap);
    // }
    // if (qntqTabCodes.size() > 0) {
    // rdReportInfoDao.initRdReportData(qntqTabCodes, br, reportDate, tabType,
    // "3", dataMap);
    // }
    // indicatorsDataList = this.getIndicatorsDataList(indicatorsList, br,
    // sysdate, dataMap, pctCellLists);
    // // 插入指标数据
    // // 测试
    // for (int i = 0; i < indicatorsDataList.size(); i++) {
    // System.out.println(indicatorsDataList.get(i).getIndId() + "=" +
    // indicatorsDataList.get(i).getIndValue());
    // }
    // }
    // } catch (Exception e) {
    // e.printStackTrace();
    // }
    // return null;
    // }

    /**
     * 初始化指标集合里所需要查询数据的报表集合
     *
     * @param rTabCodesAll
     *            本期所有表编号集合
     * @param sysdate
     *            系统日期
     * @param indicatorsList
     *            指标集合
     * @param tabCodes
     *            本期报表
     * @param lastTabCodes
     *            需要上期数据的报表
     * @param ncTabCodes
     *            需要年初数据的报表
     * @param qntqTabCodes
     *            需要去年同期数据的保镖
     * @param indNameFlag
     *            最后解析的指标名称
     */
    // public void initIndicatorsTabList(List<String> rTabCodesAll, String
    // sysdate, List<RdIndicatorsInfo> indicatorsList, Set<String> tabCodes,
    // Set<String> lastTabCodes, Set<String> ncTabCodes, Set<String>
    // qntqTabCodes, String indNameFlag) {
    // List<RdIndicatorsInfo> indinfoallList =
    // rdIndicatorsInfoDao.getDicatorsList(sysdate);
    // for (RdIndicatorsInfo rii : indinfoallList) {
    // indNameFlag = rii.getIndName();
    // String tabCodeStr = rii.getTabCode();
    // List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
    // boolean iscontains = true;
    // for (int i = 0; i < codes.size(); i++) {
    // String cs = codes.get(i);
    // if (!rTabCodesAll.contains(cs)) {
    // iscontains = false;
    // break;
    // }
    // }
    // if (iscontains) {
    // indicatorsList.add(rii);
    // tabCodes.addAll(codes);
    // if (rii.getIndFormula().equals("$")) {
    // lastTabCodes.addAll(codes);
    // }
    // if (rii.getIndFormula().equals("@")) {
    // ncTabCodes.addAll(codes);
    // }
    // if (rii.getIndFormula().equals("~")) {
    // qntqTabCodes.addAll(codes);
    // }
    // }
    // }
    // }

    /**
     * 根据指标公式和报表数据获取指标数据
     *
     * @param indicatorsList
     *            指标集合
     * @param brno
     *            机构号
     * @param sysdate
     *            系统日期
     * @param dataMap
     *            报表数据
     * @param pctCellLists
     *            百分比指标集合
     * @return 指标数据集合
     */
    // public List<RdIndicatorsData>
    // getIndicatorsDataList(List<RdIndicatorsInfo> indicatorsList, String brno,
    // String sysdate,
    // Map<String, String> dataMap, List<String> pctCellLists) {
    // DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度
    // DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
    // List<RdIndicatorsData> indicatorsDataList = new
    // ArrayList<RdIndicatorsData>();
    // RdIndicatorsData rid = null;
    // for (RdIndicatorsInfo rii : indicatorsList) {
    // String indFormula = rii.getIndFormula();
    // String indName = rii.getIndName();
    // // 处理公式中的折年系数
    // if (indFormula.contains("12/N")) {
    // indFormula = indFormula.replace("12/N", "12/" +
    // Integer.parseInt(sysdate.substring(4, 6)));
    // }
    // String valIndFormula = RdCheckUtil.returnValRelation(indFormula, dataMap,
    // null);
    // String indMsg = null;
    // if (valIndFormula.contains("#")) {
    // valIndFormula = valIndFormula.split("#")[0];
    // indMsg = valIndFormula.split("#")[1];
    // }
    // double indValue = 0.0;
    // if (pctCellLists != null && "y".equals(pctCellLists.contains(indName))) {
    // indValue =
    // Double.parseDouble(df4.format(Double.parseDouble(CalStr.calculate(CalStr.strCast(valIndFormula)))
    // * 100));
    // } else {
    // indValue =
    // Double.parseDouble(df2.format(Double.parseDouble(CalStr.calculate(CalStr.strCast(valIndFormula)))));
    // }
    // dataMap.put(indName, indValue + "");
    // rid = new RdIndicatorsData();
    // rid.setBrNo(brno);
    // rid.setReportDate(sysdate);
    // rid.setIndId(rii.getId());
    // rid.setIndValue(indValue);
    // rid.setIndMsg(indMsg);
    // indicatorsDataList.add(rid);
    // }
    // return indicatorsDataList;
    // }
}
