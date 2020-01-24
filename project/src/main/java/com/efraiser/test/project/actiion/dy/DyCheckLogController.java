package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.project.actiion.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;

@Controller
@RequestMapping("dy/check/log")
public class DyCheckLogController extends BaseController {

    @Autowired
    private DyCheckLogService dyCheckLogService;


    @RequestMapping("/getDyReportCheckLog")
    @ResponseBody
    public Object getDyReportCheckLog(String reportDate, String tabType) {
        return dyCheckLogService.getDyCheckLogHelperList(reportDate, tabType);
    }

    @RequestMapping("/getDyReportCheckLogRecord")
    @ResponseBody
    public Object getDyReportCheckLogRecord(String areaCode, String reportDate, String tabType, String sortField,
                                            String sortOrder) {
        return dyCheckLogService.getDyCheckLogHelperListRecord(areaCode, reportDate, tabType, sortField, sortOrder);
    }

    @RequestMapping("/getDyReportCheckLogForUser")
    @ResponseBody
    public Object getDyReportCheckLogForUser(String reportDate, String sortField, String sortOrder, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return dyCheckLogService.getDyReportCheckLogForUser(reportDate, user.getUserId(), sortField, sortOrder);
    }

    @RequestMapping("/getNoCheckReportList")
    @ResponseBody
    public Object getNoCheckReportList(String reportDate, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return dyCheckLogService.getNoCheckReportList(reportDate, user.getUserId());
    }

    @RequestMapping("/getDyReportChekNum")
    @ResponseBody
    public Object getDyReportChekNum(String reportDate, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return dyCheckLogService.getDyReportChekNum(reportDate, user.getUserId());
    }

    @RequestMapping("/getDyNoCheckList")
    @ResponseBody
    public Object getDyNoCheckList(String areaCode, String reportDate, String tabType) {
        return dyCheckLogService.getNoCheckBmList(areaCode, reportDate, tabType);
    }

    @RequestMapping("/getCheckNoPassNumCheckResults")
    @ResponseBody
    public Object getCheckNoPassNumCheckResults(String areaCode, String reportDate, String tabType, String checkRisk) {
        return dyCheckLogService.getCheckNoPassNumCheckResults(areaCode, reportDate, tabType, checkRisk);
    }

}
