package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONArray;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsData;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dyindicatordata.DyIndicatorDataService;
import com.efraiser.test.db.service.dy.dyindicatordata.impl.DyIndicatorDataServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl.DyIndicatorsBasicInfoServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.project.actiion.BaseController;
import com.efraiser.test.project.vo.*;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.CellStyle;
import org.nutz.dao.Cnd;
import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.util.*;

@Controller
@RequestMapping("dy/ind/data/report")
public class DyIndicatorsDataReportController extends BaseController {

	private Logger logger = LoggerFactory.getLogger(DyIndicatorsDataReportController.class);

	@Autowired
	private DyIndicatorDataService dyIndicatorDataService;
	@Autowired
	private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;
	@Autowired
	private SysBmglService sysBmglService;
	@Autowired
	private LocalConfig localConfig;

	private static DecimalFormat dfFormat = new DecimalFormat("###,##0.00");

	/**
	 * 单家机构多指标,图标展示
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNo
	 * @param inds
	 * @param indType
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/initIndDataReport1")
	@ResponseBody
	public RequestResult initIndDataReport1(String brNo, String inds, String indType, String sDate, String eDate) {
		// if (!checkDate(sDate, eDate)) {
		// return requestResult(false, "日期跨度不得超过12个月");
		// }
		List<String> indList = convertIndList(inds);
		// if (indList.size() > 5) {
		// return requestResult(false, "指标数不得超过5个");
		// }
		// SysBmgl bmgl = sysBmglService.fetch(brNo);
		List<String> dateList = this.convertData(sDate, eDate, indType);
		List<Series> series = this.getSeriesList1(brNo, indList, sDate, eDate, dateList);

		DyIndDataReportHelper rh = new DyIndDataReportHelper();
		rh.setTitle(SysBmglCache.getBmName(brNo));
		rh.setSubTitle(sDate + "-" + eDate);
		rh.setCategories(dateList);
		rh.setSeries(series);

		return requestResult(true, rh);
	}

	/**
	 * 单家机构多指标,指标分析Excel模式展示
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNo
	 * @param inds
	 * @param indType
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/initIndDataExcel1")
	@ResponseBody
	public Object initIndDataExcel1(String brNo, String inds, String indType, String sDate, String eDate, String sortField, String sortOrder) {
		try {
			List<String> indList = convertIndList(inds);
			// 查询SQL语句
			StringBuilder sqlStr = new StringBuilder();
			sqlStr.append("SELECT IND_NAME AS value,");
			// 动态表头信息
			List<DataGridColumn> dgcList = new ArrayList<DataGridColumn>();
			// 新增第一列信息
			DataGridColumn dcFirst = new DataGridColumn();
			dcFirst.setAllowSort(true);
			dcFirst.setField("value");
			dcFirst.setHeader("指标名称");
			dcFirst.setHeaderAlign("center");
			dcFirst.setAlign("center");
			dcFirst.setWidth("200");
			dgcList.add(dcFirst);

			int cDay = DateUtil.mothBetween(DateUtil.parse(sDate, "yyyyMM"), DateUtil.parse(eDate, "yyyyMM"));// 获取日期之间的天数,进行循环操作
			String dateStr = sDate;
			int index = 1;
			for (int i = 1; i <= cDay; i++) {
				if (!checkIndDate(indType, DateUtil.parse(dateStr, "yyyyMM"))) {
					dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
					continue;
				}
				// 列
				DataGridColumn dc = new DataGridColumn();
				dc.setAllowSort(true);
				dc.setField("value" + index);
				dc.setHeader(dateStr);
				dc.setHeaderAlign("center");
				dc.setAlign("center");
				dc.setWidth("100");
				dgcList.add(dc);
				// SQL
				sqlStr.append("DECODE(rb.IS_PERCENT,'y',TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '" + dateStr + "' THEN IND_VALUE END),'999999999.00')||'%'),TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '"
						+ dateStr + "' THEN IND_VALUE END),'999999999.00'))) AS value" + index + ",");
				index++;
				dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
			}
			sqlStr.deleteCharAt(sqlStr.length() - 1);
			sqlStr.append(" FROM DY.DY_INDICATORS_DATA ri,DY.DY_INDICATORS_BASIC_INFO rb  WHERE ri.BR_NO='"+brNo+"' AND ri.IND_ID=rb.ID AND  ri.IND_ID IN (" + StrUtil.convertJoin(indList, null)
					+ ") GROUP BY RI.IND_ID,RB.IND_NAME,rb.IS_PERCENT");

			if (StrUtil.isNotNull(sortField)) {
				sqlStr.append(" ORDER BY " + sortField + " " + sortOrder);
			}
			DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

			List<DyIndDataExcelHelper> dyeHelpers = dyIndicatorDataServiceImpl.getListObjectBySql(sqlStr.toString(), DyIndDataExcelHelper.class);
			DataGridHelper dh = new DataGridHelper();
			dh.setDataGridColumns(dgcList);
			dh.setRdExcelHelpers(dyeHelpers);
			return requestResult(true, dh);
		} catch (Exception e) {
			logger.error("initIndDataExcel1() error! brNo:[" + brNo + "]," +
					"inds:["+inds+"]," +
					"indType:["+indType+"]," +
					"sDate:["+sDate+"]," +
					"eDate:["+eDate+"]," +
					"sortField:["+sortField+"]," +
					"sortOrder:["+sortOrder+"]," +
					"", e);
			return requestResult(false, "");
		}
	}

	/**
	 * 单家机构多指标,指标导出Excel
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNo
	 * @param inds
	 * @param indType
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/doExportIndDataExcel1")
	@ResponseBody
	public Object doExportIndDataExcel1(String brNo, String inds, String indType, String sDate, String eDate) {
		try {
			List<String> indList = convertIndList(inds);
			// 查询SQL语句
			StringBuilder sqlStr = new StringBuilder();
			sqlStr.append("SELECT IND_NAME AS value,");

			int cDay = DateUtil.mothBetween(DateUtil.parse(sDate, "yyyyMM"), DateUtil.parse(eDate, "yyyyMM"));// 获取日期之间的天数,进行循环操作
			List<String> dss = new ArrayList<String>();
			String dateStr = sDate;
			int index = 1;
			for (int i = 1; i <= cDay; i++) {
				if (!checkIndDate(indType, DateUtil.parse(dateStr, "yyyyMM"))) {
					dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
					continue;
				}
				dss.add(dateStr);
				// SQL
				sqlStr.append("DECODE(rb.IS_PERCENT,'y',TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '" + dateStr + "' THEN IND_VALUE END),'9999999.00')||'%'),TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '"
						+ dateStr + "' THEN IND_VALUE END),'9999999.00'))) AS value" + index + ",");
				index++;
				dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
			}
			sqlStr.deleteCharAt(sqlStr.length() - 1);
			sqlStr.append(" FROM DY.DY_INDICATORS_DATA ri,DY.DY_INDICATORS_BASIC_INFO rb  WHERE ri.IND_ID=rb.ID AND  ri.IND_ID IN (" + StrUtil.convertJoin(indList, null)
					+ ") GROUP BY RI.IND_ID,RB.IND_NAME,rb.IS_PERCENT");

			DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

			List<DyIndDataExcelHelper> dyeHelpers = dyIndicatorDataServiceImpl.getListObjectBySql(sqlStr.toString(), DyIndDataExcelHelper.class);

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet();
			HSSFCell cell = null;
			HSSFRow row = null;

			CellStyle cs = wb.createCellStyle();
			cs.setAlignment(HSSFCellStyle.ALIGN_CENTER);
			cs.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
			CellStyle csR = wb.createCellStyle();
			csR.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			csR.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);

			CellStyle csTh = ExcelUtil.createBorderCellStyle(wb, HSSFColor.GREY_25_PERCENT.index, HSSFCellStyle.ALIGN_CENTER, HSSFCellStyle.VERTICAL_CENTER);
			CellStyle csTd = ExcelUtil.createBorderCellStyle(wb, HSSFCellStyle.ALIGN_CENTER, HSSFCellStyle.VERTICAL_CENTER);
			row = sheet.createRow(0);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, cs);
			cell.setCellValue(SysBmglCache.getBmName(brNo) + "(" + SysGgzdCache.getSysGgzdName("RD_IND_CYCLE", indType) + "指标)");

			row = sheet.createRow(1);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csR);
			cell.setCellValue("单位：万元;%");
			// 合并
			ExcelUtil.mergeCell(sheet, 0, 0, 0, dss.size());
			ExcelUtil.mergeCell(sheet, 1, 1, 0, dss.size());

			row = sheet.createRow(2);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csTh);
			cell.setCellValue("指标名称");

			// 头部信息
			for (int i = 0; i < dss.size(); i++) {
				cell = ExcelUtil.createCell(row, 1 + i, HSSFCell.CELL_TYPE_STRING, csTh);
				cell.setCellValue(dss.get(i));
			}
			// 获取反射
			Mirror<DyIndDataExcelHelper> reMirror = Mirror.me(DyIndDataExcelHelper.class);

			int startRow = 3;
			for (DyIndDataExcelHelper re : dyeHelpers) {
				row = sheet.createRow(startRow);
				cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csTd);
				cell.setCellValue(re.getValue());

				// 列信息
				for (int i = 1; i <= dss.size(); i++) {
					cell = ExcelUtil.createCell(row, i, HSSFCell.CELL_TYPE_STRING, csTd);
					String value = StrUtil.sNull(reMirror.getValue(re, "value" + i));
					if (StrUtil.isNotNull(value) && StrUtil.isNumeric(value)) {
						value = dfFormat.format(Double.valueOf(value));
					}
					cell.setCellValue(value);
				}
				startRow++;
			}

			File fs = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + "dy" + File.separator + "inds" + File.separator + R.UU16()+".xls");
			FileOutputStream out = new FileOutputStream(fs);
			wb.write(out);
			out.close();
			return requestResult(true, fs.getCanonicalPath());
		} catch (Exception e) {
			logger.error("initIndDataExcel1() error! brNo:[" + brNo + "]," +
					"inds:["+inds+"]," +
					"indType:["+indType+"]," +
					"sDate:["+sDate+"]," +
					"eDate:["+eDate+"]," +
					"", e);
			return requestResult(false, "");
		}

	}

	/**
	 * 多家机构,单指标图标展示
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNos
	 * @param indId
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/initIndDataReport2")
	@ResponseBody
	public RequestResult initIndDataReport2(String brNos, String indId, String sDate, String eDate) {
		// if (!checkDate(sDate, eDate)) {
		// return requestResult(false, "日期间隔不得超过12个月");
		// }
		List<String> brList = this.convertBrList(brNos);
		// if (brList.size() > 5) {
		// return requestResult(false, "机构数不得超过5个");
		// }

		DyIndicatorsBasicInfoServiceImpl  dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;
		DyIndicatorsBasicInfo bi = dyIndicatorsBasicInfoServiceImpl.fetch(indId);
		List<String> dateList = this.convertData(sDate, eDate, bi.getIndType());
		List<Series> series = this.getSeriesList2(indId, brList, sDate, eDate, dateList, bi);

		DyIndDataReportHelper rh = new DyIndDataReportHelper();
		rh.setTitle(bi.getIndName());
		rh.setSubTitle(sDate + "-" + eDate);
		rh.setCategories(dateList);
		rh.setSeries(series);
		return requestResult(true, rh);
	}

	/**
	 * 多家机构单指标,指标分析Excel模式展示
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNos
	 * @param indId
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/initIndDataExcel2")
	@ResponseBody
	public RequestResult initIndDataExcel2(String brNos, String indId, String sDate, String eDate, String sortField, String sortOrder) {
		DyIndicatorsBasicInfoServiceImpl  dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;
		DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

		try {
			List<String> brList = this.convertBrList(brNos);
			// 查询SQL语句
			StringBuilder sqlStr = new StringBuilder();
			sqlStr.append("SELECT GET_BM_NAME(BR_NO) AS value,");
			// 动态表头信息
			List<DataGridColumn> dgcList = new ArrayList<DataGridColumn>();
			// 新增第一列信息
			DataGridColumn dcFirst = new DataGridColumn();
			dcFirst.setAllowSort(true);
			dcFirst.setField("value");
			dcFirst.setHeader("机构名称");
			dcFirst.setHeaderAlign("center");
			dcFirst.setAlign("center");
			dcFirst.setWidth("200");
			dgcList.add(dcFirst);
			String indType = dyIndicatorsBasicInfoServiceImpl.fetch(indId).getIndType();
			int cDay = DateUtil.mothBetween(DateUtil.parse(sDate, "yyyyMM"), DateUtil.parse(eDate, "yyyyMM"));// 获取日期之间的天数,进行循环操作
			String dateStr = sDate;
			int index = 1;
			for (int i = 1; i <= cDay; i++) {
				if (!checkIndDate(indType, DateUtil.parse(dateStr, "yyyyMM"))) {
					dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
					continue;
				}
				// 列
				DataGridColumn dc = new DataGridColumn();
				dc.setAllowSort(true);
				dc.setField("value" + index);
				dc.setHeader(dateStr);
				dc.setHeaderAlign("center");
				dc.setAlign("center");
				dc.setWidth("100");
				dgcList.add(dc);
				// SQL
				sqlStr.append("DECODE(rb.IS_PERCENT,'y',TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '" + dateStr + "' THEN IND_VALUE END),'9999999.00')||'%'),TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '"
						+ dateStr + "' THEN IND_VALUE END),'9999999.00'))) AS value" + index + ",");
				index++;
				dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
			}
			sqlStr.deleteCharAt(sqlStr.length() - 1);
			sqlStr.append(" FROM DY.DY_INDICATORS_DATA ri,DY.DY_INDICATORS_BASIC_INFO rb  WHERE ri.IND_ID=rb.ID AND ri.IND_ID = '" + indId + "' AND ri.BR_NO in(" + StrUtil.convertJoin(brList, null)
					+ ") GROUP BY BR_NO,IS_PERCENT");

			if (StrUtil.isNotNull(sortField)) {
				sqlStr.append(" ORDER BY " + sortField + " " + sortOrder);
			}
			List<DyIndDataExcelHelper> dyeHelpers = dyIndicatorDataServiceImpl.getListObjectBySql(sqlStr.toString(), DyIndDataExcelHelper.class);
			DataGridHelper dh = new DataGridHelper();
			dh.setDataGridColumns(dgcList);
			dh.setRdExcelHelpers(dyeHelpers);
			return requestResult(true, dh);
		} catch (Exception e) {
			logger.error("initIndDataExcel2() error! brNo:[" + brNos + "]," +
					"indId:["+indId+"]," +
					"eDate:["+eDate+"]," +
					"", e);
			return requestResult(false, "");
		}
	}

	/**
	 * 多家机构单指标,指标导出Excel
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param brNos
	 * @param indId
	 * @param sDate
	 * @param eDate
	 * @return
	 */
	@RequestMapping("/doExportIndDataExcel2")
	@ResponseBody
	public RequestResult doExportIndDataExcel2(String brNos, String indId, String sDate, String eDate) {
		DyIndicatorsBasicInfoServiceImpl  dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;
		DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

		try {
			List<String> brList = this.convertBrList(brNos);
			// 查询SQL语句
			StringBuilder sqlStr = new StringBuilder();
			sqlStr.append("SELECT GET_BM_NAME(BR_NO) AS value,");

			int cDay = DateUtil.mothBetween(DateUtil.parse(sDate, "yyyyMM"), DateUtil.parse(eDate, "yyyyMM"));// 获取日期之间的天数,进行循环操作
			List<String> dss = new ArrayList<String>();
			String dateStr = sDate;
			DyIndicatorsBasicInfo ri = dyIndicatorsBasicInfoServiceImpl.fetch(indId);
			String indType = ri.getIndType();
			int index = 1;
			for (int i = 1; i <= cDay; i++) {
				if (!checkIndDate(indType, DateUtil.parse(dateStr, "yyyyMM"))) {
					dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
					continue;
				}
				dss.add(dateStr);
				// SQL
				sqlStr.append("DECODE(rb.IS_PERCENT,'y',TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '" + dateStr + "' THEN IND_VALUE END),'9999999.00')||'%'),TRIM(to_char(MAX(CASE WHEN REPORT_DATE = '"
						+ dateStr + "' THEN IND_VALUE END),'9999999.00'))) AS value" + index + ",");
				index++;
				dateStr = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dateStr, "yyyyMM"), 1), "yyyyMM");
			}
			sqlStr.deleteCharAt(sqlStr.length() - 1);
			sqlStr.append(" FROM DY.DY_INDICATORS_DATA ri,DY.DY_INDICATORS_BASIC_INFO rb  WHERE ri.IND_ID=rb.ID AND ri.IND_ID = '" + indId + "' AND ri.BR_NO in(" + StrUtil.convertJoin(brList, null)
					+ ") GROUP BY BR_NO,IS_PERCENT");

			List<DyIndDataExcelHelper> dyeHelpers = dyIndicatorDataServiceImpl.getListObjectBySql(sqlStr.toString(), DyIndDataExcelHelper.class);

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet();
			HSSFCell cell = null;
			HSSFRow row = null;

			CellStyle cs = wb.createCellStyle();
			cs.setAlignment(HSSFCellStyle.ALIGN_CENTER);
			cs.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
			CellStyle csR = wb.createCellStyle();
			csR.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			csR.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
			CellStyle csTh = ExcelUtil.createBorderCellStyle(wb, HSSFColor.GREY_25_PERCENT.index, HSSFCellStyle.ALIGN_CENTER, HSSFCellStyle.VERTICAL_CENTER);
			CellStyle csTd = ExcelUtil.createBorderCellStyle(wb, HSSFCellStyle.ALIGN_CENTER, HSSFCellStyle.VERTICAL_CENTER);
			row = sheet.createRow(0);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, cs);
			cell.setCellValue(ri.getIndName());

			row = sheet.createRow(1);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csR);
			cell.setCellValue("单位：万元;%");
			// 合并
			ExcelUtil.mergeCell(sheet, 0, 0, 0, dss.size());
			ExcelUtil.mergeCell(sheet, 1, 1, 0, dss.size());

			row = sheet.createRow(2);
			cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csTh);
			cell.setCellValue("机构名称");

			// 头部信息
			for (int i = 0; i < dss.size(); i++) {
				cell = ExcelUtil.createCell(row, 1 + i, HSSFCell.CELL_TYPE_STRING, csTh);
				cell.setCellValue(dss.get(i));
			}
			// 获取反射
			Mirror<DyIndDataExcelHelper> reMirror = Mirror.me(DyIndDataExcelHelper.class);

			int startRow = 3;
			for (DyIndDataExcelHelper re : dyeHelpers) {
				row = sheet.createRow(startRow);
				cell = ExcelUtil.createCell(row, 0, HSSFCell.CELL_TYPE_STRING, csTd);
				cell.setCellValue(re.getValue());

				// 列信息
				for (int i = 1; i <= dss.size(); i++) {
					cell = ExcelUtil.createCell(row, i, HSSFCell.CELL_TYPE_STRING, csTd);
					String value = StrUtil.sNull(reMirror.getValue(re, "value" + i));
					if (StrUtil.isNotNull(value) && StrUtil.isNumeric(value)) {
						value = dfFormat.format(Double.valueOf(value));
					}
					cell.setCellValue(value);
				}
				startRow++;
			}

			File fs = FileUtil.createFile(localConfig.getProperties().getTempStringPath() +  File.separator + "dy" + File.separator + "inds" + File.separator +  R.UU16()+".xls");

			FileOutputStream out = new FileOutputStream(fs);
			wb.write(out);
			out.close();
			return requestResult(true, fs.getCanonicalPath());
		} catch (Exception e) {
			logger.error("doExportIndDataExcel2() error! brNo:[" + brNos + "]," +
					"indId:["+indId+"]," +
					"eDate:["+eDate+"]," +
					"", e);
			return requestResult(false, "");
		}

	}

	private List<String> convertIndList(String inds) {
		return StrUtil.convertToList(inds, ",");
		// List<String> indsList = StrUtil.convertToList(inds, ",");
		// List<String> bList = new ArrayList<String>();
		// for (String indId : indsList) {
		// RdIndicatorsBasicInfo rd = rdIndicatorsBasicInfoDao.fetch(indId);
		// if ("y".equals(rd.getIsParent())) {
		// continue;
		// }
		// bList.add(indId);
		// }
		// return bList;
	}

	private List<String> convertBrList(String brNos) {
		return StrUtil.convertToList(brNos, ",");
		// List<String> brList = StrUtil.convertToList(brNos, ",");
		// List<String> bList = new ArrayList<String>();
		// for (String brNo : brList) {
		// SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
		// if (StrUtil.isNull(bmgl.getBmType())) {
		// continue;
		// }
		// bList.add(brNo);
		// }
		// return bList;
	}

	// private boolean checkDate(String sDate, String eDate) {
	// if (DateUtil.mothBetween(DateUtil.parse(sDate, "yyyyMM"),
	// DateUtil.parse(eDate, "yyyyMM")) > 13) {
	// return false;
	// }
	// return true;
	// }

	/**
	 * 过滤报表频度和数据日期
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param indType
	 * @param indDate
	 * @return
	 */
	private boolean checkIndDate(String indType, Date indDate) {
		int i = DateUtil.getMonth(indDate);
		if (indType.equals("1")) {
			return true;
		} else if (indType.equals("2")) {
			if (i == 3 || i == 6 || i == 9 || i == 12) {
				return true;
			}
		} else if (indType.equals("3")) {
			if (i == 6 || i == 12) {
				return true;
			}
		} else if (indType.equals("4")) {
			if (i == 12) {
				return true;
			}
		}
		return false;
	}

	private List<Series> getSeriesList1(String brNo, List<String> indList, String sDate, String eDate, List<String> dateList) {

		DyIndicatorsBasicInfoServiceImpl  dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;
		DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

		List<Series> series = new ArrayList<Series>();
		for (String indId : indList) {
			DyIndicatorsBasicInfo bi = dyIndicatorsBasicInfoServiceImpl.fetch(indId);
			if ("y".equals(bi.getIsParent())) {
				continue;
			}
			List<DyIndicatorsData> indDatas = dyIndicatorDataServiceImpl.query(
					Cnd.where("brNo", "=", brNo).and("indId", "=", indId).and("reportDate", ">=", sDate).and("reportDate", "<=", eDate).asc("reportDate"), null);
			List<SeriesData> r = this.packData(indDatas, dateList, bi);
			Series s = new Series();
			s.setData(r);
			s.setName(bi.getIndName());
			if ("y".equals(bi.getIsPercent())) {
				s.setyAxis(1);
			} else {
				s.setyAxis(0);
			}
			series.add(s);
		}
		return series;

	}

	private List<Series> getSeriesList2(String indId, List<String> brList, String sDate, String eDate, List<String> dateList, DyIndicatorsBasicInfo bi) {
		DyIndicatorDataServiceImpl dyIndicatorDataServiceImpl = (DyIndicatorDataServiceImpl)dyIndicatorDataService;

		List<Series> series = new ArrayList<Series>();
		for (String brNo : brList) {
			// SysBmgl bmgl = sysBmglService.fetch(brNo);
			List<DyIndicatorsData> indDatas = dyIndicatorDataServiceImpl.query(
					Cnd.where("brNo", "=", brNo).and("indId", "=", indId).and("reportDate", ">=", sDate).and("reportDate", "<=", eDate).asc("reportDate"), null);
			List<SeriesData> r = this.packData(indDatas, dateList, bi);
			Series s = new Series();
			s.setData(r);
			s.setName(SysBmglCache.getBmName(brNo));
			if ("y".equals(bi.getIsPercent())) {
				s.setyAxis(1);
			} else {
				s.setyAxis(0);
			}
			series.add(s);
		}
		return series;
	}

	private List<SeriesData> packData(List<DyIndicatorsData> indDatas, List<String> dateList, DyIndicatorsBasicInfo bi) {
		Map<String, Double> m = new HashMap<String, Double>();
		List<SeriesData> r = new ArrayList<SeriesData>();
		for (DyIndicatorsData dy : indDatas) {
			m.put(DateUtil.format(DateUtil.parse(dy.getReportDate(), "yyyyMM"), "yy/MM"), dy.getIndValue());
		}

		for (String d : dateList) {
			SeriesData sd = new SeriesData();
			sd.setIsPercent(bi.getIsPercent());
			if (m.containsKey(d)) {
				Double value = m.get(d);
				if (null == value || "9999999.99".equals(value)) {
					sd.setY(0.00);
				} else {
					sd.setY(value);
				}
			} else {
				sd.setY(0.00);
			}
			r.add(sd);
		}

		return r;
	}

	private List<String> convertData(String sDate, String eDate, String indType) {
		List<String> r = new ArrayList<String>();
		while (Double.valueOf(sDate) <= Double.valueOf(eDate)) {
			if (checkIndType(sDate, indType)) {
				r.add(DateUtil.format(DateUtil.parse(sDate, "yyyyMM"), "yy/MM"));
			}
			sDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(sDate, "yyyyMM"), 1), "yyyyMM");
		}
		return r;
	}

	private boolean checkIndType(String dataDate, String indType) {
		String rd = dataDate.substring(4, 6);
		if ((rd.equals("03") || rd.equals("06") || rd.equals("09") || rd.equals("12")) && indType.equals("2")) {
			return true;
		}

		if ((rd.equals("06") || rd.equals("12")) && indType.equals("3")) {
			return true;
		}

		if (rd.equals("12") && indType.equals("4")) {
			return true;
		}
		if (indType.equals("1")) {
			return true;
		}
		return false;

	}

}
