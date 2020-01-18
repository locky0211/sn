package com.efraiser.test.project.actiion;

import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("rd/check/log")
public class RdCheckLogController {

	@Inject
	private RdCheckLogDao rdCheckLogDao;

	@Ok("json")
	@At
	public Object getRdReportCheckLog(@Param("reportDate") String reportDate, @Param("tabType") String tabType) {
		return rdCheckLogDao.getRdCheckLogHelperList(reportDate, tabType);
	}

	@Ok("json")
	@At
	public Object getRdReportCheckLogRecord(@Param("areaCode") String areaCode, @Param("reportDate") String reportDate, @Param("tabType") String tabType, @Param("sortField") String sortField,
                                            @Param("sortOrder") String sortOrder) {
		return rdCheckLogDao.getRdCheckLogHelperListRecord(areaCode, reportDate, tabType, sortField, sortOrder);
	}

	@Ok("json")
	@At
	public Object getRdReportCheckLogForUser(@Param("reportDate") String reportDate, @Param("sortField") String sortField, @Param("sortOrder") String sortOrder, HttpSession session) {
		SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
		if (StrUtil.isNull(reportDate)) {
			reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
		}
		return rdCheckLogDao.getRdReportCheckLogForUser(reportDate, user.getUserId(), sortField, sortOrder);
		}
	@Ok("json")
	@At
	public Object getRdReportCheckLogForUserCs(@Param("reportDate") String reportDate, @Param("sortField") String sortField, @Param("sortOrder") String sortOrder, HttpSession session) {
		SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
		if (StrUtil.isNull(reportDate)) {
			reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
		}
		List<String> roles=(List)session.getAttribute("sessionUserRoleId");
		if(roles.contains("admin")||roles.contains("rdShow")) {
			return rdCheckLogDao.getRdReportCheckLogForUser(reportDate, user.getUserId(), sortField, sortOrder);
		}else{
		return null;
		}
		}

	@Ok("json")
	@At
	public Object getNoCheckReportList(@Param("reportDate") String reportDate, HttpSession session) {
		SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
		if (StrUtil.isNull(reportDate)) {
			reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
		}
		return rdCheckLogDao.getNoCheckReportList(reportDate, user.getUserId());
	}

	@Ok("json")
	@At
	public Object getRdReportChekNum(@Param("reportDate") String reportDate, HttpSession session) {
		SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
		if (StrUtil.isNull(reportDate)) {
			reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
		}
		return rdCheckLogDao.getRdReportChekNum(reportDate, user.getUserId());
	}

	@Ok("json")
	@At
	public Object getRdNoCheckList(@Param("areaCode") String areaCode, @Param("reportDate") String reportDate, @Param("tabType") String tabType) {
		return rdCheckLogDao.getNoCheckBmList(areaCode, reportDate, tabType);
	}

	@Ok("json")
	@At
	public Object getCheckNoPassNumCheckResults(@Param("areaCode") String areaCode, @Param("reportDate") String reportDate, @Param("tabType") String tabType, @Param("checkRisk") String checkRisk) {
		return rdCheckLogDao.getCheckNoPassNumCheckResults(areaCode, reportDate, tabType, checkRisk);
	}

}
