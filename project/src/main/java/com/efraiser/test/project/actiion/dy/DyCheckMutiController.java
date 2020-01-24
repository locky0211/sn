package com.efraiser.test.project.actiion.dy;

import ch.qos.logback.classic.Logger;
import com.alibaba.fastjson.JSONArray;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.model.sys.SysUserDepartment;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dycheckformula.impl.DyCheckFormulaServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.db.service.dy.dycheckmutiresults.DyCheckMutiResultsService;
import com.efraiser.test.db.service.dy.dycheckresults.DyCheckResultsService;
import com.efraiser.test.db.service.dy.dycheckresultshelper.DyCheckResultsHelperService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportsummary.DyReportSummaryService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.service.sys.sysuserdepartment.SysUserDepartmentService;
import com.efraiser.test.db.service.sys.sysuserdepartment.impl.SysUserDepartmentServiceImpl;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Controller
@RequestMapping("dy/muti")
public class DyCheckMutiController extends BaseController {

    private Logger logger = (Logger) LoggerFactory.getLogger(DyCheckMutiController.class);

    @Autowired
    private DyCheckFormulaService dyCheckFormulaService;
    @Autowired
    private DyCheckFormulaRecordService dyCheckFormulaRecordService;
    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;
    @Autowired
    private DyCheckResultsService dyCheckResultsService;
    @Autowired
    private DyReportSummaryService dyReportSummaryService;
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private SysUserDepService sysUserDepService;
    @Autowired
    private SysBmglService sysBmglService;
    @Autowired
    private DyCheckLogService dyCheckLogService;
    @Autowired
    private DyCheckResultsHelperService dyCheckResultsHelperService;
    @Autowired
    private DyCheckMutiResultsService dyCheckMutiResultsService;
    @Autowired
    private SysUserDepartmentService sysUserDepartmentService;

    @Autowired
    private DyCheckUtil dyCheckUtil;
    @Autowired
    private DyTableUtil dyTableUtil;

    public static String[] departments = new String[100];


    @RequestMapping("/toReportCheck")
    @ResponseBody
    public Object toReportCheck(String brNo, String reportDate, String tabType, int nodeLe, HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            String[] brNos = brNo.split(",");
            StringBuffer dm = new StringBuffer();
            for (String bn : brNos) {
                if (!sysBmglService.checkIsParant(bn)) {
                    dm.append(doReportCheck(brNo, reportDate, tabType, sysUser.getUserId()).getData());
                    dm.append("<br>");
                }
            }
            return requestResult(true, dm.toString());
        } else {
            return doReportCheck(brNo, reportDate, tabType, sysUser.getUserId());
        }
    }

    /**
     * 功能描述：报表校验
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    private RequestResult doReportCheck(String brNo, String reportDate, String tabType, String userId) {
        String bmName = null;
        //List<String> departments = sysUserDepartmentService.getUserRolesById(userId);//根据用户ID找到所属部门的list
        SysUserDepartmentServiceImpl sysUserDepartmentServiceImpl = (SysUserDepartmentServiceImpl) sysUserDepartmentService;
        List<SysUserDepartment> sudt = sysUserDepartmentServiceImpl.dao().query(SysUserDepartment.class, Cnd.where("userId", "=", userId));
        String department = sudt.get(0).getUserDepartment();
        StringBuffer sb = new StringBuffer();
        String DEPARTMENT = new String();
        departments = department.split(",");
        sb.append("(");
        for (int i = 0; i < departments.length; i++) {
            sb.append("'" + departments[i] + "',");
        }
        DEPARTMENT = sb.substring(0, sb.length() - 1);
        DEPARTMENT = DEPARTMENT + ")"; //处理部门机构的格式
        try {
            bmName = "机构 : [ " + SysBmglCache.getBmName(brNo) + " ]";
            // 获取需要校验的所有表编号集合
            List<String> rTabCodes = dyCheckMutiResultsService.getTabCodeList(brNo, reportDate, tabType, DEPARTMENT);

            if (rTabCodes.size() == 0) {
                return requestResult(false, bmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            int count = dyReportInfoService.getReportInfoCount(brNo, reportDate, tabType, rTabCodes);
            if (count > 0) {
                dyCheckLogService.saveDyCheckLog(brNo, reportDate, tabType, userId);

                List<DyCheckFormula> checkFormulas = new ArrayList<DyCheckFormula>();
                try {
                    checkFormulas = dyCheckFormulaService.getCheckFormulaListByTabCodesWj(rTabCodes, reportDate, userId);
                } catch (Exception e) {
                    return requestResult(false, bmName + "     :     处理校验公式时,发生异常.");
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();

                if (checkFormulas.size() > 0) {
                    List<DyCheckMutiResults> checkResults = null;
                    try {
                        checkResults = this.getCheckResult(brNo, reportDate, tabType, checkFormulas, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }

                    try {

                        dyCheckMutiResultsService.insertCheckResults(brNo, reportDate, tabType, userId, checkResults);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     插入校验结果时,出现异常!!");
                    }
                    return requestResult(true, bmName + "     :     校验完成");
                } else {
                    return requestResult(false, bmName + "     :     没有需要校验的校验公式!!");
                }
            } else {
                return requestResult(false, bmName + "     :     本期数据未导入!!");
            }
        } catch (Exception e) {

            logger.error("doReportCheck() error! brNo:[" + brNo + "]," +
                    " reportDate:[" + reportDate + "]," +
                    " tabType:[" + tabType + "]," +
                    ",userId:[" + userId + "]", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }


    /**
     * 根据校验公式校验数据，返回校验结果
     *
     * @param relationList 校验公式
     * @param pCellList    百分比单元格
     * @return
     */
    @SuppressWarnings("unused")
    private List<DyCheckMutiResults> getCheckResult(String brNo, String reportDate, String tabType, List<DyCheckFormula> relationList, List<String> pCellList) {
        List<DyCheckMutiResults> checkResults = new ArrayList<DyCheckMutiResults>();
        Map<String, String> map = new HashMap<String, String>();
        map = dyCheckUtil.getOrgMap(brNo);
        for (DyCheckFormula dyCheckFormula : relationList) {
            String relation = dyCheckFormula.getCheckFormula();

            StringBuffer results = new StringBuffer();
            try {

                Map<String, String> dataMap = null;
                //relation = CommUtil.trimStr(relation);

                List<String> list = extractMessageByRegular(relation);
                //List<String> list = getData(relation);
                for (int i = 0; i < list.size(); i++) {
                    String oldvalue = "[" + list.get(i) + "]";
                    RequestResult valueStr = dyCheckUtil.getNumByFormula(brNo, reportDate, list.get(i), tabType, map);
                    if (valueStr.isSuccess()) {
                        relation = relation.replace(oldvalue, valueStr.getData().toString());
                    } else {
                        results.append("公式中指标 " + list.get(i) + " 未取到值！");
                    }
                }
                String valRelation = relation;//将值替换到每个指标

                // 处理特殊函数
                if (valRelation.contains("COUNTIF(")) {
                    valRelation = DyCheckUtil.countIf(valRelation);
                }
                if (valRelation.contains("SUMIF")) {
                    valRelation = DyCheckUtil.sumIf(valRelation);
                }
                if (valRelation.contains("OR")) {
                    valRelation = DyCheckUtil.andOr(valRelation, "OR");
                }
	
					/*if (valRelation.contains("AND")) {
						valRelation = RdCheckUtil.andOr(valRelation, "AND");
					}*/

                if (relation.toUpperCase().startsWith("IF(")
                        || (relation.toUpperCase().contains("IF(") && !"SUM".equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 3, relation.toUpperCase().indexOf("IF("))) && !"COUNT"
                        .equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 5, relation.toUpperCase().indexOf("IF("))))) {// 复杂公式（含if...else...）
                    DyCheckUtil.getComplexRelationResult(relation, results, valRelation, dyCheckFormula.getDeviationValue(), pCellList);
                } else {// 普通公式校验

                    if (valRelation.contains("AND")) {

                        String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                        String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                        DyCheckUtil.getRelationResultFun(valRelation1, results, valRelation1, dyCheckFormula.getDeviationValue(), pCellList, 0);
                        DyCheckUtil.getRelationResultFun(valRelation2, results, valRelation2, dyCheckFormula.getDeviationValue(), pCellList, 1);

                    } else {

                        DyCheckUtil.getRelationResult(relation, results, valRelation, dyCheckFormula.getDeviationValue(), pCellList);

                    }

                }

            } catch (Exception e) {
                logger.error("getCheckResult() error! brNo:[" + brNo + "]," +
                        " reportDate:[" + reportDate + "]," +
                        " tabType:[" + tabType + "]," +
                        " relationList:[" + JSONArray.toJSONString(relationList) + "]," +
                        ",pCellList:[" + JSONArray.toJSONString(pCellList) + "]", e);
                //results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());

            }

            if (results.length() > 0) {
                DyCheckMutiResults res = new DyCheckMutiResults();
                res.setFormula(dyCheckFormula.getCheckFormula());
                res.setOrganNo(brNo);
                res.setReportDate(reportDate);
                res.setTabType(tabType);
                res.setContent(results.toString());
                res.setcUser(dyCheckFormula.getcUser());
                res.setReportNoStr(dyCheckFormula.getTabcode());
                checkResults.add(res);
            }

        }
        return checkResults;
    }


    private List<String> getData(String relation) {
        ArrayList<String> list = new ArrayList<String>();
        int m = 0, n = 0;
        int count = 0;
        for (int i = 0; i < relation.length(); i++) {
            if (relation.charAt(i) == '[') {
                if (count == 0) {
                    m = i;
                }
                count++;
            }
            if (relation.charAt(i) == ']') {
                count--;
                if (count == 0) {
                    n = i;
                    System.out.println("*****************************" + relation.substring(m + 1, n) + "*****************************");
                    list.add(relation.substring(m + 1, n));
                }
            }
        }
        for (String a : list) {
            System.out.println("=========" + a + "==========");
        }
        return list;
    }

    /**
     * 使用正则表达式提取中括号中的内容
     *
     * @return
     */
    public  List<String> extractMessageByRegular(String relation) {

        List<String> list = new ArrayList<String>();
        Pattern p = Pattern.compile("(\\[[^\\]]*\\])");
        Matcher m = p.matcher(relation);
        while (m.find()) {
            list.add(m.group().substring(1, m.group().length() - 1));
        }
        return list;
    }


    /**
     * 功能描述：去除父节点
     *
     * @param brNos
     * @return
     * @author
     * @date 2016年1月31日
     * @modify log:
     */
    private String delParentNode(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = dyReportInfoService.CheckParent(brnos[i]);
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


    /**
     * 功能描述：查询校验结果，区分表内表外及普通异动
     *
     * @param brNo
     * @param pageIndex
     * @param pageSize
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @return
     * @author
     * @date 2016年3月4日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResultListArea")
    @ResponseBody
    public Object getDyReportCheckResultListArea( String brNo, int pageIndex, int pageSize,  String reportDate, String tabType,
                                                  String checkRisk, String sortField, String sortOrder, String formulaType, String checkArea, HttpServletRequest req) {
        brNo = delParentNode(brNo);
        //SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        Pager pager = null;
        if (pageSize > 0) {
            DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl)dyCheckFormulaService;

            pager = dyCheckFormulaServiceImpl.dao().createPager(pageIndex + 1, pageSize);
        }
        GridQueryPageResult gqpr = new GridQueryPageResult();

        //获取报表校验结果，分表内外
        gqpr.setTotal(dyCheckResultsService.getDyReportCheckResultCountArea(brNo, reportDate, tabType, checkRisk, formulaType, checkArea));
        gqpr.setData(dyCheckResultsService.getDyReportCheckResultListArea(brNo, reportDate, tabType, checkRisk, sortField, sortOrder, pager, formulaType, checkArea));
        return gqpr;

    }

    @RequestMapping("/getDyCheckFormulaRecord")
    @ResponseBody
    public Object getDyCheckFormulaRecord(HttpServletRequest req) {
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<String> sysUserDep = sysUserDepService.getDepByUserId(sysUser.getUserId());
        String brNos = dyTableUtil.delParentNode(StrUtil.convertJoinString(sysUserDep, ","));
        return dyCheckFormulaRecordService.getRecordByBrno(brNos);

    }

}
