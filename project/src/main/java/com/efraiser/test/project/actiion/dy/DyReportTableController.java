package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.db.model.dy.DyReportInfo;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportinfo.impl.DyReportInfoServiceImpl;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;

//@Controller
//@RequestMapping("dy/report/table")
public class DyReportTableController   extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(DyReportSummaryController.class);

	@Autowired
	private DyReportInfoService dyReportInfoService;

	@Autowired
	private LocalConfig localConfig;

	@RequestMapping("/showExcelView")
	public ModelAndView showExcelView(String reportId) {

		ModelAndView modelAndView = new ModelAndView();
//		modelAndView.setViewName("dy/jsp/dy_show_excel_view.");
//
//		DyReportInfoServiceImpl dyReportInfoService1 =(DyReportInfoServiceImpl)dyReportInfoService;
//
//		DyReportInfo ri = dyReportInfoService1.fetch(reportId);
//		DyTableInfo tableInfo = DyTableModelCache.getTableInfo(ri.getTableId());
//		String filePath = localConfig.getProperties().getDyTableExcelPath() + File.separator + ri.getBrNo() + File.separator + ri.getReportDate() + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName()
//				+ ".xls";
//
//		modelAndView.addObject("Ojb",filePath);
		return modelAndView;
	}
}
