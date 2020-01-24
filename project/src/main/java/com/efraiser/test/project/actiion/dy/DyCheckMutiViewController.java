package com.efraiser.test.project.actiion.dy;


import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dycheckmutiview.DyCheckMutiViewService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("dy/mutiView")
public class DyCheckMutiViewController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyCheckMutiViewController.class);

    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyCheckMutiViewService dyCheckMutiViewService;

    /**
     * 功能描述：去除父节点
     *
     * @param brNos
     * @return
     * @author
     * @date 2017年7月12日
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
     * 功能描述：根据条件查询
     *
     * @param req
     * @param brNo
     * @param reportDate
     * @param tabType
     * @return
     * @author
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckMutiResults")
    @ResponseBody
    public Object getDyReportCheckMutiResults(HttpServletRequest req, String brNo, String reportDate, String tabType) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckMutiResults> list = null;
        try {
            list = dyCheckMutiViewService.getDyReportCheckMutiResults(brNo, reportDate, tabType, sysUser.getUserId());
            return list;
        } catch (Exception e) {
            logger.error("getDyReportCheckMutiResults() error! brNo:[" + brNo + "],reportDate:[" + reportDate + "],tabType:[" + tabType + "]", e);
        }
        return null;
    }

    /**
     * 功能描述：双击一条记录跳转
     *
     * @param id
     * @param page
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    @RequestMapping("/toDyCheckMutiResultsView")
    public ModelAndView toDyCheckMutiResultsView(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckMutiResults checkMutiResult = dyCheckMutiViewService.fetchDyCheckMutiResultForView(id);
        if (checkMutiResult != null) {
            modelAndView.addObject("obj", checkMutiResult);
        }
        return modelAndView;
    }

    /**
     * 功能描述：展示PISA报文时根据传入的quotacode获得tablecode
     *
     * @param quotaCode
     * @param req
     * @return
     * @author
     * @date 2017年7月15日
     * @modify log:
     */
    @RequestMapping("/getTableCode")
    @ResponseBody
    public RequestResult getTableCode(String quotaCode, HttpServletRequest req) {
        try {
            String tableCode = dyCheckMutiViewService.fetchPisaTableCode(quotaCode);
            return requestResult(true, tableCode);
        } catch (Exception e) {
            logger.error("getTableCode() error! quotaCode:[" + quotaCode + "]", e);
        }
        return requestResult(false, null);
    }

}
