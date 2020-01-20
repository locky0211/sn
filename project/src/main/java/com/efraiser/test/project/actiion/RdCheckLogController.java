package com.efraiser.test.project.actiion;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.rd.rdchecklog.RdCheckLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/rd/check/log")
public class RdCheckLogController extends BaseController {

    @Autowired
    private RdCheckLogService checkLogService;

    @RequestMapping("/getRdReportCheckLog")
    @ResponseBody
    public Object getRdReportCheckLog(String reportDate, String tabType) {
        return checkLogService.getRdCheckLogHelperList(reportDate, tabType);
    }

    @RequestMapping("/getRdReportCheckLogRecord")
    @ResponseBody
    public Object getRdReportCheckLogRecord(String areaCode, String reportDate, String tabType, String sortField, String sortOrder) {
        return checkLogService.getRdCheckLogHelperListRecord(areaCode, reportDate, tabType, sortField, sortOrder);
    }

    @RequestMapping("/getRdReportCheckLogForUser")
    @ResponseBody
    public Object getRdReportCheckLogForUser(String reportDate, String sortField, String sortOrder, HttpServletRequest req) {
        SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return checkLogService.getRdReportCheckLogForUser(reportDate, user.getUserId(), sortField, sortOrder);
    }

    @RequestMapping("/getRdReportCheckLogForUserCs")
    @ResponseBody
    public Object getRdReportCheckLogForUserCs(String reportDate, String sortField, String sortOrder, HttpServletRequest req) {
        SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        List<String> roles = (List) req.getSession().getAttribute("sessionUserRoleId");
        if (roles.contains("admin") || roles.contains("rdShow")) {
            return checkLogService.getRdReportCheckLogForUser(reportDate, user.getUserId(), sortField, sortOrder);
        } else {
            return null;
        }
    }

    @RequestMapping("/getNoCheckReportList")
    @ResponseBody
    public Object getNoCheckReportList(String reportDate, HttpServletRequest req) {
        SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return checkLogService.getNoCheckReportList(reportDate, user.getUserId());
    }

    @RequestMapping("/getRdReportChekNum")
    @ResponseBody
    public Object getRdReportChekNum(String reportDate, HttpServletRequest req) {
        SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        return checkLogService.getRdReportChekNum(reportDate, user.getUserId());
    }

    @RequestMapping("/getRdNoCheckList")
    @ResponseBody
    public Object getRdNoCheckList(String areaCode, String reportDate, String tabType) {
        return checkLogService.getNoCheckBmList(areaCode, reportDate, tabType);
    }

    @RequestMapping("/getCheckNoPassNumCheckResults")
    @ResponseBody
    public Object getCheckNoPassNumCheckResults(String areaCode, String reportDate, String tabType, String checkRisk) {
        return checkLogService.getCheckNoPassNumCheckResults(areaCode, reportDate, tabType, checkRisk);
    }

}
