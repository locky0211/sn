package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.db.service.dy.dyreportrecord.DyReportRecordService;
import com.efraiser.test.project.actiion.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("dy/report/record")
public class DyReportRecordController extends BaseController {


	@Autowired
	private DyReportRecordService dyReportRecordService;

	@RequestMapping("/getDyReportRecordList")
	@ResponseBody
	public Object getDyReportRecordList(int pageIndex, int pageSize, String userId, String reportDate, String tabType) {
		return dyReportRecordService.getDyReportRecordList(pageIndex, pageSize, userId, reportDate,tabType);

	}

	

}
