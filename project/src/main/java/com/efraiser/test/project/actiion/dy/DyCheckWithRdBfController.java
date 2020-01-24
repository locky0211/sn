package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfFormula;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfResults;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.db.service.dy.dycheckwithRrdbfresultsrecord.DyCheckWithRdBfResultsRecordService;
import com.efraiser.test.db.service.dy.dycheckwithrdbfformula.DyCheckWithRdBfFormulaService;
import com.efraiser.test.db.service.dy.dycheckwithrdbfformula.impl.DyCheckWithRdBfFormulaServiceImpl;
import com.efraiser.test.db.service.dy.dycheckwithrdbfresults.DyCheckWithRdBfResultsService;
import com.efraiser.test.db.service.dy.dyreportdata.DyReportDataService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.rd.rdchecklog.RdCheckLogService;
import com.efraiser.test.db.service.rd.rdreportdata.RdReportDataService;
import com.efraiser.test.db.service.rd.rdreportinfo.RdReportInfoService;
import com.efraiser.test.db.service.rd.rdtableinfos.RdTableInfosService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;

import org.nutz.dao.Cnd;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.*;

@Controller
@RequestMapping("dy/RdBf")
public class DyCheckWithRdBfController extends BaseController {
    private org.slf4j.Logger logger = LoggerFactory.getLogger(DyCheckWithRdBfController.class);

    @Autowired
    private DyReportDataService dyReportDataService;
    @Autowired
    private RdReportDataService rdReportDataService;

    @Autowired
    private DyCheckLogService dyCheckLogService;

    @Autowired
    private SysBmglService sysBmglService;
    @Autowired
    private SysGgzdService sysGgzdService;
    @Autowired
    private RdCheckLogService rdCheckLogService;
    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private RdTableInfosService rdTableInfosService;

    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private RdReportInfoService rdReportInfoService;

    @Autowired
    private DyCheckWithRdBfFormulaService dyCheckWithRdBfFormulaService;
    @Autowired
    private DyCheckFormulaService dyCheckFormulaService;
    @Autowired
    private DyCheckWithRdBfResultsService dyCheckWithRdBfResultsService;
    @Autowired
    private DyCheckWithRdBfResultsRecordService dyCheckWithRdBfResultsRecordService;

    @Autowired
    private LocalConfig localConfig;


    @RequestMapping("/getDyReportCheckResults")
    @ResponseBody
    public Object getDyReportCheckResults(HttpServletRequest req, String brNoDy, String brNoRd, String brNoBf, String reportDate, String tabType) {
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckWithRdBfResults> list = dyCheckWithRdBfResultsService.getDyCheckWithRdBfResults(brNoDy, brNoRd, brNoBf, reportDate, tabType, sysUser.getUserId());
        return list;
    }

    /**
     * 功能描述：大集中与1104校验
     *
     * @param brNoDy
     * @param reportDate
     * @param tabType
     * @return
     * @author
     */
    @RequestMapping("/toReportCheck")
    @ResponseBody
    public RequestResult toReportCheck( String brNoDy, String brNoRd, String brNoBf, String reportDate,  String tabType,  int nodeLe, HttpServletRequest req) {
        brNoDy = delParentNodeDy(brNoDy);
        brNoRd = delParentNodeRd(brNoRd);
//		brNoBf=delParentNodeRd(brNoBf);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        StringBuffer dm = new StringBuffer();
        try {
            if (nodeLe > 1) {
                String[] brNos = brNoDy.split(",");
                for (String bn : brNos) {
                    if (!sysBmglService.checkIsParant(bn)) {
                        dm.append(doReportCheck_dy_rd(bn, bn, reportDate, sysUser.getUserId(), sysUser.getUserName(), tabType).getData());
                        dm.append("<br>");
                    }
                }
                return requestResult(true, dm.toString());
            } else {
                return doReportCheck_dy_rd(brNoDy, brNoRd, reportDate, sysUser.getUserId(), sysUser.getUserName(), tabType);
            }


//			if (dyCheckWithRdBfResultsService.singleInt("select count(*) from BF.BF_REPORT_INFO WHERE REPORT_DATE='" + reportDate + "' AND BR_NO='" + brNoBf + "'") == 0) {
//
//				return super.requestResult(false, SysBmglCache.getBmName(brNoBf) + "机构  " + reportDate.substring(0, 6) + "月大集中报表还没有导入，请先导入报表！");
//
//			} else if (dyCheckWithRdBfResultsService.singleInt("SELECT count(*) FROM RD_REPORT_INFO WHERE REPORT_DATE ='" + reportDate + "' AND BR_NO = '" + brNoRd + "'") == 0) {
//
//				return super.requestResult(false, SysBmglCache.getBmName(brNoRd) + "机构  " + reportDate.substring(0, 6) + "月1104报表还没有导入，请先导入报表！");
//
//			} else {
//				return doReportCheck(brNoDy,brNoRd,brNoBf,reportDate,sysUser.getUserId(),sysUser.getUserName(),tabType);
//				return doReportCheck_dy_rd(brNoDy,brNoRd,reportDate,sysUser.getUserId(),sysUser.getUserName(),tabType);
//			}
        } catch (Exception e) {
            logger.error("toReportCheck() error! brNoDy:["+brNoDy+"]," +
                    " brNoBf:["+brNoBf+"],"+
                    " reportDate:["+reportDate+"],"+
                            " tabType:["+tabType+"],"+ " nodeLe:["+nodeLe+"],",e);
            return requestResult(false, e.getMessage());
        }
    }

    /**
     * 功能描述：自定义与1104校验
     *
     * @param brNoDy     自定义机构
     * @param brNoRd     1104机构
     * @param reportDate
     * @param userId
     * @param userName
     * @param tabType
     * @return
     * @author
     * @date 2017年7月25日
     * @modify log:
     */
    private RequestResult doReportCheck_dy_rd(String brNoDy, String brNoRd, String reportDate, String userId, String userName, String tabType) {
        String dyBmName = null;
        String rdBmName = null;

        SysBmgl sysBmgl = SysBmglCache.getBmglInfo(brNoDy);
        String area = sysBmgl.getBmArea();//校验公式适用区域
        String brnoType = sysBmgl.getBmType();//机构所属类型
        //获取自定义机构下的所有表编号集合
        List<String> dyTabCodesAll = new ArrayList<>();
        //获取1104机构下的所有表编号集合
        List<String> rdTabCodesAll = new ArrayList<>();
        List<String> dyTabCodes = new ArrayList<>();
        List<String> rdTabCodes = new ArrayList<>();
        try {
            dyBmName = "自定义机构 : [ " + SysBmglCache.getBmName(brNoDy) + " ]";
            rdBmName = "1104机构 : [ " + SysBmglCache.getBmName(brNoRd) + " ]";
            //获取自定义机构下需要校验的季报(半年报或年报或月报)
            dyTabCodes = dyTableInfoService.getTabCodeList(brNoDy, reportDate, tabType, false, false);
            //获取1104机构下需要校验的季报(半年报或年报或月报)
            rdTabCodes = rdTableInfosService.getTabCodeList(brNoRd, reportDate, tabType, false, false);

            Date raw = DateUtil.parse(reportDate, "yyyyMM");
            int month = DateUtil.getMonth(raw);
            if (month == 3 || month == 9) {//月报、季报
                dyTabCodesAll = dyTableInfoService.getTabCodeList(brNoDy, reportDate, "40", true, false);
                rdTabCodesAll = rdTableInfosService.getTabCodeList(brNoRd, reportDate, "40", true, false);
            } else if (month == 6) {//月报、季报、半年报
                dyTabCodesAll = dyTableInfoService.getTabCodeList(brNoDy, reportDate, "80", true, false);
                rdTabCodesAll = rdTableInfosService.getTabCodeList(brNoRd, reportDate, "80", true, false);
            } else if (month == 12) {//月报、季报、半年报、年报
                dyTabCodesAll = dyTableInfoService.getTabCodeList(brNoDy, reportDate, "00", true, false);
                rdTabCodesAll = rdTableInfosService.getTabCodeList(brNoRd, reportDate, "00", true, false);
            } else {
                dyTabCodesAll = dyTableInfoService.getTabCodeList(brNoDy, reportDate, tabType, true, false);
                rdTabCodesAll = rdTableInfosService.getTabCodeList(brNoRd, reportDate, tabType, true, false);
            }

            if (dyTabCodes.size() == 0 || dyTabCodesAll.size() == 0) {
                return requestResult(false, dyBmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            if (rdTabCodes.size() == 0 || rdTabCodesAll.size() == 0) {
                return requestResult(false, rdBmName + "     :     没有找到机构需要上报的报表编号集合!");
            }

            int dyCount = dyReportInfoService.getReportInfoCount(brNoDy, reportDate, tabType, dyTabCodes);
            int rdCount = rdReportInfoService.getReportInfoCount(brNoRd, reportDate, tabType, rdTabCodes);

            if (dyCount <= 0) {
                return requestResult(false, dyBmName + "     :     本期数据未导入!!");
            } else if (rdCount <= 0) {
                return requestResult(false, rdBmName + "     :     本期数据未导入!!");
            } else {
                // DY本期
                Set<String> dyNowTabCodes = new HashSet<String>();
                // DY上期
                Set<String> dyLastTabCodes = new HashSet<String>();
                // DY年初
                Set<String> dyNcTabCodes = new HashSet<String>();
                // DY去年同期
                Set<String> dyQntqTabCodes = new HashSet<String>();
                // RD本期
                Set<String> rdNowTabCodes = new HashSet<String>();
                // RD上期
                Set<String> rdLastTabCodes = new HashSet<String>();
                // RD年初
                Set<String> rdNcTabCodes = new HashSet<String>();
                // RD去年同期
                Set<String> rdQntqTabCodes = new HashSet<String>();
                // 需要校验的公式集合
                List<DyCheckWithRdBfFormula> checkFormulas = new ArrayList<DyCheckWithRdBfFormula>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulas(dyTabCodes, rdTabCodes, dyTabCodesAll, rdTabCodesAll,
                            reportDate, dyNowTabCodes, dyLastTabCodes, dyNcTabCodes, dyQntqTabCodes,
                            rdNowTabCodes, rdLastTabCodes, rdNcTabCodes, rdQntqTabCodes,
                            checkFormulas, currentFormualsFlag, userId, area, brnoType, tabType);
                } catch (Exception e) {
                    if (StrUtil.isNotNull(currentFormualsFlag)) {
                        return requestResult(false, "解析校验公式时,发生错误.公式如下:[" + currentFormualsFlag + "]");
                    } else {
                        return requestResult(false, "处理校验公式时,发生异常.");
                    }
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();
                if (checkFormulas.size() > 0) {
                    Map<String, String> dataMap = new HashMap<String, String>();
                    // DY本期
                    if (dyNowTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData_dy_rd(dyNowTabCodes, brNoDy, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载DY本期数据失败!", e);
                            return requestResult(false, dyBmName + "     :     加载本期数据失败!!");
                        }
                    }
                    // DY上期
                    if (dyLastTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData_dy_rd(dyLastTabCodes, brNoDy, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载DY上期数据失败!", e);
                            return requestResult(false, dyBmName + "     :     加载上期数据失败!!");
                        }
                    }
                    //DY年初
                    if (dyNcTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData_dy_rd(dyNcTabCodes, brNoDy, reportDate, tabType, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载DY年初数据失败!", e);
                            return requestResult(false, dyBmName + "     :     加载年初数据失败!!");
                        }
                    }
                    //DY去年同期
                    if (dyQntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData_dy_rd(dyQntqTabCodes, brNoDy, reportDate, tabType, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载DY去年同期数据失败!", e);
                            return requestResult(false, dyBmName + "     :     加载去年同期数据失败!!");
                        }
                    }

                    //RD本期
                    if (rdNowTabCodes.size() > 0) {
                        try {
                            rdReportInfoService.initRdReportData_dy_rd(rdNowTabCodes, brNoRd, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载RD本期数据失败!", e);
                            return requestResult(false, rdBmName + "     :     加载本期数据失败!!");
                        }
                    }
                    //RD上期
                    if (rdLastTabCodes.size() > 0) {
                        try {
                            rdReportInfoService.initRdReportData_dy_rd(rdLastTabCodes, brNoRd, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载RD上期数据失败!", e);
                            return requestResult(false, rdBmName + "     :     加载上期数据失败!!");
                        }
                    }
                    //RD年初
                    if (rdNcTabCodes.size() > 0) {
                        try {
                            rdReportInfoService.initRdReportData_dy_rd(rdNcTabCodes, brNoRd, reportDate, tabType, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载RD年初数据失败!", e);
                            return requestResult(false, rdBmName + "     :     加载年初数据失败!!");
                        }
                    }
                    //RD去年同期
                    if (rdQntqTabCodes.size() > 0) {
                        try {
                            rdReportInfoService.initRdReportData_dy_rd(rdQntqTabCodes, brNoRd, reportDate, tabType, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("doReportCheck_dy_rd(),initRdReportData_dy_rd() error! brNoDy:["+brNoDy+"]," +
                                    " brNoRd:["+brNoRd+"],"+
                                    " reportDate:["+reportDate+"],"+
                                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                            logger.error("加载RD去年同期数据失败!", e);
                            return requestResult(false, rdBmName + "     :     加载去年同期数据失败!!");
                        }
                    }

                    List<DyCheckWithRdBfResults> checkResults = null;
                    try {
                        checkResults = this.getCheckResult(brNoDy, brNoRd, "", reportDate, checkFormulas, dataMap, userId);
                    } catch (Exception e) {
                        logger.error("doReportCheck_dy_rd(),getCheckResult() error! brNoDy:["+brNoDy+"]," +
                                " brNoRd:["+brNoRd+"],"+
                                " reportDate:["+reportDate+"],"+
                                " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                        return requestResult(false, "进行公式校验时,发生异常!!");
                    }

                    try {
                        dyCheckWithRdBfResultsService.insertResults(brNoDy, brNoRd, "", reportDate, tabType, checkResults);
                    } catch (Exception e) {
                        logger.error("doReportCheck_dy_rd(),insertResults() error! brNoDy:["+brNoDy+"]," +
                                " brNoRd:["+brNoRd+"],"+
                                " reportDate:["+reportDate+"],"+
                                " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
                        return requestResult(false, "插入校验结果时,出现异常!!");
                    }
                    return requestResult(true, "校验完成.");

                } else {
                    return requestResult(false, "没有需要校验的校验公式!!");
                }
            }
        } catch (Exception e) {
            logger.error("doReportCheck_dy_rd() error! brNoDy:["+brNoDy+"]," +
                    " brNoRd:["+brNoRd+"],"+
                    " reportDate:["+reportDate+"],"+
                    " tabType:["+tabType+"],"+ " userId:["+userId+"],",e);
            return requestResult(false, "操作异常!!");
        }
    }

    /**
     * 功能描述：初始化装载公式
     *
     * @param dyTabCodes          需要校验的自定义报表
     * @param rdTabCodes          需要校验的1104报表
     * @param dyTabCodesAll       自定义所有报表
     * @param rdTabCodesAll       1104所有报表
     * @param reportDate
     * @param checkFormulas
     * @param currentFormualsFlag
     * @param cUser
     * @param area
     * @param brnoType
     * @throws Exception
     * @author
     * @date 2017年7月25日
     * @modify log:
     */
    private void initCheckFormulas(List<String> dyTabCodes, List<String> rdTabCodes,
                                   List<String> dyTabCodesAll, List<String> rdTabCodesAll, String reportDate,
                                   Set<String> dyNowTabCodes, Set<String> dyLastTabCodes, Set<String> dyNcTabCodes, Set<String> dyQntqTabCodes,
                                   Set<String> rdNowTabCodes, Set<String> rdLastTabCodes, Set<String> rdNcTabCodes, Set<String> rdQntqTabCodes,
                                   List<DyCheckWithRdBfFormula> checkFormulas, String currentFormualsFlag, String cUser, String area, String brnoType, String tabType) throws Exception {
        // 获取自定义机构下需要校验报表的对应所有公式集合
        List<DyCheckWithRdBfFormula> dfList = dyCheckWithRdBfFormulaService.getFormulaListByTabCodes(dyTabCodes, rdTabCodes, reportDate, tabType);
        //所有报表list
        List<String> allTabCodesAll = new ArrayList<>();
        allTabCodesAll.addAll(dyTabCodesAll);
        allTabCodesAll.addAll(rdTabCodesAll);
        // 筛选公式
        for (DyCheckWithRdBfFormula dFormula : dfList) {
            if (dFormula.getFormulaType().equals("40") || dFormula.getFormulaType().equals("50") || dFormula.getFormulaType().equals("80") || dFormula.getFormulaType().equals("00")) {
                currentFormualsFlag = FormulaEncrypt.getFormulaDecrypt(dFormula.getCheckFormula());
                String tabCodeStr = dFormula.getTabcode();
                boolean in = true;
                int count = 0;
                List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
                for (int i = 0; i < codes.size(); i++) {
                    String cs = codes.get(i);
                    if (!allTabCodesAll.contains(cs)) {
                        in = false;
                        break;
                    }
                    if (dyTabCodes.contains(cs)) {
                        count++;
                    }
                }

                // 如果公式报表存在于所有对应报表集合中,并且至少有一个是需要校验的报表,则认定为需要校验的公式
                if (in && count > 0) {
                    checkFormulas.add(dFormula);
                    for (String code : codes) {
                        if (dyTabCodesAll.contains(code)) {
                            dyNowTabCodes.add(code);
                            if (currentFormualsFlag.contains("$")) {
                                dyLastTabCodes.add(code);
                            }
                            if (currentFormualsFlag.contains("@")) {
                                dyNcTabCodes.add(code);
                            }
                            if (currentFormualsFlag.contains("~")) {
                                dyQntqTabCodes.add(code);
                            }
                        } else if (rdTabCodesAll.contains(code)) {
                            rdNowTabCodes.add(code);
                            if (currentFormualsFlag.contains("$")) {
                                rdLastTabCodes.add(code);
                            }
                            if (currentFormualsFlag.contains("@")) {
                                rdNcTabCodes.add(code);
                            }
                            if (currentFormualsFlag.contains("~")) {
                                rdQntqTabCodes.add(code);
                            }
                        }
                    }
                }
            }
        }
    }


    /**
     * 功能描述：具体校验过程
     *
     * @param reportDate
     * @param userId
     * @param userName
     * @return
     * @author
     * @date 2016年11月25日
     * @modify log:
     */
    private RequestResult doReportCheck(String dyBmcode, String rdBmcode,
                                       String bfBmcode, String reportDate, String userId, String userName,
                                       String tabType) {

        DyCheckWithRdBfFormulaServiceImpl  eyCheckWithRdBfFormulaServiceImpl = (DyCheckWithRdBfFormulaServiceImpl)dyCheckWithRdBfFormulaService;
        List<DyCheckWithRdBfFormula> formulas = eyCheckWithRdBfFormulaServiceImpl
                .query(Cnd.where("TYPE", "=", tabType), null);
        System.out.println("formulas" + formulas);
        if (formulas.size() > 0) {
            List<String> iTabCodesDy = dyTableInfoService.getTabCodeList(dyBmcode,
                    reportDate, tabType, false, false);
            List<String> iTabCodesRd = null;
            List<String> iTabCodesBf = null;
            List<String> iTabCodesAll = new ArrayList<String>();
            List<String> tabCodes = new ArrayList<String>();
            iTabCodesAll.addAll(iTabCodesDy);
            if (!rdBmcode.equals("")) {
                iTabCodesRd = rdTableInfosService.getTabCodeList(rdBmcode,
                        reportDate, tabType, false, false);
                iTabCodesAll.addAll(iTabCodesRd);
            }

            if (!bfBmcode.equals("")) {
                iTabCodesBf = dyTableInfoService.getTabCodeListBf(bfBmcode,
                        reportDate, tabType, false, false);
                iTabCodesAll.addAll(iTabCodesBf);

            }

            try {
                this.initTabcodes(formulas, tabCodes, iTabCodesAll);
            } catch (Exception e) {
                logger.error("doReportCheck() error! dyBmcode:["+dyBmcode+"]," +
                        " rdBmcode:["+rdBmcode+"],"+
                        " bfBmcode:["+bfBmcode+"],"+
                        " reportDate:["+reportDate+"],"+
                        " tabType:["+tabType+"],"+ " userName:["+userName+"],",e);
                return requestResult(false, "获取公式校验时,发生异常!!");
            }

//            SysBmglServiceImpl sysBmglServiceImpl =(SysBmglServiceImpl)sysBmglService;
//            List<SysBmgl> sb = sysBmglServiceImpl.dao().query(SysBmgl.class, null);
//			for(SysBmgl s:sb){
//				System.out.println("s.getBmCode="+s.getBmCode());
//				//s.getBmCode();
//				for(DyCheckFormula dcf:formulas){
//					if(dcf.getCheckFormula().indexOf(s.getBmCode())!=-1){
//						
//					}
//				}
//			}
            Map<String, String> dataMap = new HashMap<String, String>();
            dyReportInfoService.initRdReportDataForRdAndBf(iTabCodesDy, dyBmcode,
                    reportDate, dataMap);
            if (!rdBmcode.equals("")) {
                rdReportInfoService.initRdReportDataForRdAndBf(iTabCodesRd, rdBmcode,
                        reportDate, dataMap);
            }

            System.err.println("datamap" + dataMap);
            List<DyCheckWithRdBfResults> checkResults = null;
            try {
                checkResults = this.getCheckResult(dyBmcode, rdBmcode,
                        bfBmcode, reportDate, formulas, dataMap, userId);
            } catch (Exception e) {
                logger.error("doReportCheck() error! dyBmcode:["+dyBmcode+"]," +
                        " rdBmcode:["+rdBmcode+"],"+
                        " bfBmcode:["+bfBmcode+"],"+
                        " reportDate:["+reportDate+"],"+
                        " tabType:["+tabType+"],"+ " userName:["+userName+"],",e);
                return requestResult(false, "进行公式校验时,发生异常!!");
            }
            try {
                dyCheckWithRdBfResultsService.insertResults(dyBmcode, rdBmcode, bfBmcode, reportDate, tabType, checkResults);
            } catch (Exception e) {
                logger.error("doReportCheck() error! dyBmcode:["+dyBmcode+"]," +
                        " rdBmcode:["+rdBmcode+"],"+
                        " bfBmcode:["+bfBmcode+"],"+
                        " reportDate:["+reportDate+"],"+
                        " tabType:["+tabType+"],"+ " userName:["+userName+"],",e);
                return requestResult(false, "插入校验结果时,出现异常!!");
            }
            return requestResult(true, "校验完成!!");
        } else {
            return requestResult(false, "没有获取到要校验的公式!!");
        }
    }

    /**
     * 功能描述：计算结果
     *
     * @param rdBmcode
     * @param bfBmcode
     * @param reportDate
     * @param relationList
     * @param dataMap
     * @return
     * @author
     * @date 2016年11月28日
     * @modify log:
     */
    private List<DyCheckWithRdBfResults> getCheckResult(String dyBmcode, String rdBmcode, String bfBmcode, String reportDate,
                                                       List<DyCheckWithRdBfFormula> relationList, Map<String, String> dataMap, String userId) {

        List<DyCheckWithRdBfResults> checkResults = new ArrayList<DyCheckWithRdBfResults>();
        for (DyCheckWithRdBfFormula checkFormula : relationList) {

            String relation = FormulaEncrypt.getFormulaDecrypt(checkFormula.getCheckFormula());
            //String relation = checkFormula.getCheckFormula();

            StringBuffer results = new StringBuffer();
            try {

                if (dataMap != null) {
                    relation = CommUtil.trimStr(relation);
                    // 指标替换为值
                    String valRelation = DyCheckUtil.returnValRelation(relation, dataMap, null);
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

                    if (relation.toUpperCase().startsWith("IF(")
                            || (relation.toUpperCase().contains("IF(") && !"SUM".equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 3, relation.toUpperCase().indexOf("IF("))) && !"COUNT"
                            .equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 5, relation.toUpperCase().indexOf("IF("))))) {// 复杂公式（含if...else...）
                        DyCheckUtil.getComplexRelationResult(relation, results, valRelation, checkFormula.getDeviationValue(), null);
                    } else {// 普通公式校验
                        DyCheckUtil.getRelationResult(relation, results, valRelation, checkFormula.getDeviationValue(), null);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());

            }

            if (results.length() > 0) {
                DyCheckWithRdBfResults res = new DyCheckWithRdBfResults();
                res.setFormula(relation);
                res.setFormulaMark(checkFormula.getFormulaExplain());
                res.setOrganNoDy(dyBmcode);
                res.setOrganNoRd(rdBmcode);
                res.setOrganNoBf(bfBmcode);
                res.setReportDate(reportDate);
                res.setcUser(userId);
                res.setTabType(checkFormula.getFormulaType());
                res.setContent(results.toString());
                res.setReportNoStr(checkFormula.getTabcode());
                checkResults.add(res);
            }

        }
        return checkResults;
    }

    /**
     * 功能描述：获取tabcodes
     *
     * @param formula
     * @param tabCodes
     * @author
     * @date 2016年11月28日
     * @modify log:
     */
    private void initTabcodes(List<DyCheckWithRdBfFormula> formula,
                             List<String> tabCodes, List<String> tabCodesAll) {
        if (tabCodesAll.size() > 0) {
            for (int i = 0; i < formula.size(); i++) {
                String tabCodeStr = formula.get(i).getTabcode();
                List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
                if (!tabCodesAll.containsAll(codes)) {
                    formula.remove(i);
                    i--;
                }
            }
        }
//		if(tabCodesBf.size()>0){
//		for(int i = 0 ;  i < formula.size() ;i++){
//			String tabCodeStr = formula.get(i).getTabcode();
//			List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
//			if(!tabCodesBf.containsAll(codes)){
//				formula.remove(i);
//				i--;
//			}
//		}
//		}
        for (int i = 0; i < formula.size(); i++) {
            String tabCodeStr = formula.get(i).getTabcode();
            List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
            tabCodes.addAll(codes);
        }

    }


    @RequestMapping("/toDyCheckWithRdBfResultsView")
    public ModelAndView toDyCheckWithRdBfResultsView(String id,  String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckWithRdBfResults checkResults = dyCheckWithRdBfResultsService.fetchDyCheckResultsForView(id);
        if(checkResults != null){
            modelAndView.addObject("obj",checkResults);
            logger.debug("checkResults.getOrganNoBf()" + checkResults.getReportNoStr());
        }
        return modelAndView;
    }

    /**
     * 功能描述：
     *
     * @param brNoDy
     * @param brNoRd
     * @param brNoBf
     * @param reportDate
     * @param tabType
     * @param req
     * @return
     * @author
     * @date 2017年4月5日
     * @modify log:
     */
    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel(String brNoDy, String brNoRd, String brNoBf,String reportDate, String tabType, HttpServletRequest req) {
        brNoDy = delParentNodeDy(brNoDy);
        if (!brNoRd.equals("")) {
            brNoRd = delParentNodeRd(brNoRd);
        }
//		if(!brNoBf.equals("")){
//			brNoBf=delParentNodeBf(brNoBf);
//		}
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckWithRdBfResults> results;
        results = dyCheckWithRdBfResultsService.getDyCheckWithRdBfResultsRecord(brNoDy, brNoRd, brNoBf, reportDate, tabType, sysUser.getUserId());// 历史记录导出
        for (DyCheckWithRdBfResults bf : results) {
            String remark = dyCheckWithRdBfResultsRecordService.findRemarksById(bf.getOrganNoDy(), bf.getOrganNoRd(), bf.getOrganNoBf(), bf.getReportDate(), bf.getFormula());
            bf.setFormulaMark(remark);
        }
        if (results.size() > 0) {
            String tabTypeName = "";
            if (StrUtil.isNotNull(tabType)) {
                tabTypeName = dyCheckWithRdBfResultsService.getZdNameByZdValue(tabType);
            } else {
                tabTypeName = "全部";
            }
            try {
                // excel模板路径
                File fi = new File(SystemConstants.SYSTEM_PATH + File.separator + "dy" + File.separator + "template" + File.separator + "自定义校验结果情况表.xls");
                POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
                // 读取excel模板
                HSSFWorkbook wb = new HSSFWorkbook(fs);
                HSSFSheet sheet = wb.getSheetAt(0);
                HSSFCell cell = null;
                HSSFRow row = null;
                CellStyle csTdC = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_CENTER);
                CellStyle csTdL = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_LEFT);
                row = sheet.getRow(2);
                cell = row.getCell(1);
                cell.setCellValue(reportDate);
                row = sheet.getRow(3);
                cell = row.getCell(1);
                //cell.setCellValue(tabTypeName);

                for (int i = 0; i < results.size(); i++) {
                    DyCheckWithRdBfResults rs = results.get(i);
                    row = sheet.createRow(i + 7);
                    cell = row.createCell(0);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getOrganNameDy());

                    cell = row.createCell(1);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getOrganNameRd());

                    cell = row.createCell(2);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getOrganNameBf());

                    cell = row.createCell(3);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(tabTypeName);


                    cell = row.createCell(4);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getFormula());

                    cell = row.createCell(5);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getContent());

                    cell = row.createCell(6);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getFormulaMark());

                }


                File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + sysBmglService.findBmNameByBmCode(brNoDy) + "_" + reportDate + "_" + dyCheckWithRdBfResultsService.getZdNameByZdValue(tabType) + "_跨系统校验结果.xls");
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.close();
                return tf.getCanonicalPath();
            } catch (Exception e) {
                logger.error("doExportExcel() error! brNoDy:["+brNoDy+"]," +
                        " brNoRd:["+brNoRd+"],"+
                        " brNoBf:["+brNoBf+"],"+
                        " reportDate:["+reportDate+"],"+
                        " tabType:["+tabType+"]",e);
            }
        }
        return null;
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
    private String delParentNodeDy(String brNos) {
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

    private String delParentNodeRd(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = rdReportInfoService.CheckParent(brnos[i]);
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
//	private String delParentNodeBf(String brNos){
//		String brNo="";
//		String brnos[]=brNos.split(",");
//		for(int i=0;i<brnos.length;i++){
//			int num=bfReportInfoDao.CheckParent(brnos[i]);
//			if(num==0){
//				if(i==brnos.length-1){
//					brNo+=""+brnos[i]+"";
//				}else{
//					brNo+=""+brnos[i]+",";
//				}
//			}
//			
//		}
//		
//		return brNo;
//		
//	}
}
