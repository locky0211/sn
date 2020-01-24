package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.*;
import com.efraiser.test.db.model.dy.DyCheckDck;
import com.efraiser.test.db.model.dy.DyFormulaDck;
import com.efraiser.test.db.model.dy.DyReportConfig;
import com.efraiser.test.db.service.dy.dyFormuladck.DyFormulaDckService;
import com.efraiser.test.db.service.dy.dyFormuladck.impl.DyFormulaDckServiceImpl;
import com.efraiser.test.db.service.dy.dycheckdck.DyCheckDckService;
import com.efraiser.test.db.service.dy.dycheckdck.impl.DyCheckDckServiceImpl;
import com.efraiser.test.db.service.dy.dyreportconfig.DyReportConfigService;
import com.efraiser.test.db.service.dy.dyreportconfig.impl.DyReportConfigServiceImpl;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


/**
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.rd.action]
 * @ClassName: [RdCheckDckAction] 类描述：1104与客户风险校验类
 */
@Controller
@RequestMapping("dy/check/dck")
public class DyCheckDckController extends BaseController {

	private Logger logger = LoggerFactory.getLogger(DyCheckDckController.class);

	@Autowired
	private DyCheckDckService dyCheckDckService;
	@Autowired
	private DyFormulaDckService dyFormulaDckService;
	@Autowired
	private DyReportConfigService dyReportConfigService;

	@Autowired
	private DyTableUtil dyTableUtil;

	@RequestMapping("/toUploadAutoJsFile")
	@ResponseBody
	public Object addOrUpdateCheckDck(@RequestBody DyCheckDck dyCheckDck) {

		DyCheckDckServiceImpl dyCheckDckServiceImpl =(DyCheckDckServiceImpl)dyCheckDckService;

		try {
			if (StrUtil.isNull(dyCheckDck.getId())) {
				dyCheckDckServiceImpl.dao().insert(dyCheckDck);
			} else {
				dyCheckDckServiceImpl.dao().update(dyCheckDck);
			}
			return true;
		} catch (Exception e) {
			logger.error("addOrUpdateCheckDck() error! dyCheckDck:["+ JSONObject.toJSONString(dyCheckDck)+"]",e);
			return false;
		}

	}

	@RequestMapping("/deleteCheckDck")
	@ResponseBody
	public Object deleteCheckDck(String id) {
		DyCheckDckServiceImpl dyCheckDckServiceImpl =(DyCheckDckServiceImpl)dyCheckDckService;

		try {
			dyCheckDckServiceImpl.dao().delete(DyCheckDck.class, id);
			return true;
		} catch (Exception e) {
			logger.error("deleteCheckDck() error! id:["+ id+"]",e);
			return false;
		}
	}

	@RequestMapping("/getFormulaById")
	public Object getFormulaById(String id, String page) {

		page = page.replace(".jsp", "");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);

		DyCheckDckServiceImpl dyCheckDckServiceImpl =(DyCheckDckServiceImpl)dyCheckDckService;
		DyCheckDck dyCheckDck =  dyCheckDckServiceImpl.dao().fetch(DyCheckDck.class, id);
		if(dyCheckDck != null){
			modelAndView.addObject("Obj",dyCheckDck);
		}
		return modelAndView;
	}

	/**
	 * 功能描述：
	 * 
	 * @author wushuo
	 * @date 2016年1月27日
	 * @param reportCode
	 * @param checkDate
	 * @param pageIndex
	 * @param pageSize
	 * @return
	 * @modify log:
	 */
	@RequestMapping("/getCheckDckList")
	@ResponseBody
	public GridQueryPageResult getCheckDckList(String brNo, String reportDate, String reportCode, String checkDate, int pageIndex, int pageSize) {
		if(StrUtil.isNotNull(brNo)){
			GridQueryPageResult gqpr = dyCheckDckService.getCheckDckList(brNo, reportDate.replace("-", ""), reportCode, checkDate, pageIndex, pageSize);
			return gqpr;
		}else{
			return null;
		}
	}

	/**
	 * 功能描述：执行1104和客户风险数据校验
	 * 
	 * @author wushuo
	 * @date 2016年1月26日
	 * @return boolean
	 * @modify log:
	 */
	@RequestMapping("/startCheck")
	@ResponseBody
	public RequestResult startCheck(String brNo, String reportDate) {
		DyReportConfigServiceImpl dyReportConfigServiceImpl =(DyReportConfigServiceImpl)dyReportConfigService;
		DyCheckDckServiceImpl dyCheckDckServiceImpl =(DyCheckDckServiceImpl)dyCheckDckService;

		DyReportConfig dyReportConfig = dyReportConfigServiceImpl.dao().fetch(DyReportConfig.class);
		reportDate = reportDate.replace("-", "");
		if (brNo.contains(",")) {
			brNo = dyTableUtil.delParentNode(brNo);
			String[] brNos = brNo.split(",");

			for (String bn : brNos) {
				try {
					if (dyCheckDckServiceImpl.singleInt("select count(*) from DCK.CK_DYFRJBQK WHERE SJRQ='" + reportDate + "' AND brNo='" + bn + "'") == 0) {

						return super.requestResult(false, brNo + "机构  " + reportDate.substring(0, 6) + "月客户风险报表还没有导入，请先导入报表！");

					} else if (dyCheckDckServiceImpl.singleInt("SELECT count(*) FROM DY.DY_REPORT_INFO WHERE REPORT_DATE ='" + reportDate.substring(0, 6) + "' AND BR_NO = '" + bn + "'") == 0) {

						return super.requestResult(false, brNo + "机构  " + reportDate.substring(0, 6) + "月1104报表还没有导入，请先导入报表！");

					} else {
						toStartCheck(bn, reportDate, dyReportConfig.getDspBalance());
					}
				} catch (Exception e) {
					return super.requestResult(false, e.getMessage());
				}
			}
		} else {
			try {
				if (dyCheckDckServiceImpl.singleInt("select count(*) from DCK.CK_DYFRJBQK WHERE SJRQ='" + reportDate + "' AND brNo='" + brNo + "'") == 0) {

					return super.requestResult(false, brNo + "机构  " + reportDate.substring(0, 6) + "月客户风险报表还没有导入，请先导入报表！");

				} else if (dyCheckDckServiceImpl.singleInt("SELECT count(*) FROM DY.DY_REPORT_INFO WHERE REPORT_DATE ='" + reportDate.substring(0, 6) + "' AND BR_NO = '" + brNo + "'") == 0) {

					return super.requestResult(false, brNo + "机构  " + reportDate.substring(0, 6) + "月1104报表还没有导入，请先导入报表！");

				} else {
					toStartCheck(brNo, reportDate, dyReportConfig.getDspBalance());
				}
			} catch (Exception e) {
				return super.requestResult(false, e.getMessage());
			}
		}
		return requestResult(true, "操作成功！");
	}

	private void toStartCheck(String brNo, String reportDate, double dspBalance) {
		double firstValue = 0;
		double secondValue = 0;
		String[] reOp = new String[20];
		int typeFlag = 1;
		if (reportDate.substring(4, 6).equals("03") || reportDate.substring(4, 6).equals("06") || reportDate.substring(4, 6).equals("09") || reportDate.substring(4, 6).equals("12")) {
			typeFlag++;
		}
		if (reportDate.substring(4, 6).equals("12") || reportDate.substring(4, 6).equals("06")) {
			typeFlag++;
		}
		if (reportDate.substring(4, 6).equals("12")) {
			typeFlag++;
		}
		DyCheckDckServiceImpl dyCheckDckServiceImpl =(DyCheckDckServiceImpl)dyCheckDckService;
		DyFormulaDckServiceImpl dyFormulaDckServiceImpl =(DyFormulaDckServiceImpl)dyFormulaDckService;

		List<DyFormulaDck> formulaList = dyFormulaDckServiceImpl.dao().query(DyFormulaDck.class, Cnd.where("formulaType", "<=", typeFlag).and("formulaState","=","1"));
		for (DyFormulaDck dyFormula : formulaList) {
			dyFormula.setDckContent(FormulaEncrypt.getFormulaDecrypt(dyFormula.getDckContent()));
			firstValue = dyCheckDckServiceImpl.singleDouble(dyFormula.getDckContent().replace("$brNo$", brNo).replace("$reportDate$", reportDate));
			String[] reportStr = dyFormula.getSamContent().split("-|\\+|\\*|/");
			String[] opStr = dyFormula.getSamContent().split("[A-Za-z0-9|_]");
			int opNum = 0;
			for (int j = 0; j < opStr.length; j++) {
				if (opStr[j].equals("+") || opStr[j].equals("-") || opStr[j].equals("*") || opStr[j].equals("/")) {
					reOp[opNum] = opStr[j];
					opNum++;
				}
			}
			String sqlStr = "SELECT value_" + reportStr[0].split("_")[2];
			for (int i = 1; i <= opNum; i++) {
				sqlStr += " " + reOp[i - 1] + "(SELECT value_" + reportStr[i].split("_")[2] + " FROM DY.DY_TABLE_INFO A INNER JOIN DY.DY_REPORT_INFO B ON A.TABLE_ID=B.TABLE_ID AND B.REPORT_DATE='"
						+ reportDate.substring(0, 6) + "' AND B.BR_NO ='" + brNo + "' INNER JOIN DY.DY_REPORT_DATA_" + reportDate.substring(0, 4) + " C ON C.REPORT_ID=B.REPORT_ID WHERE A.TABCODE='"
						+ reportStr[i].split("_")[0] + "' AND C.REPORT_ROW_NUM=" + reportStr[i].split("_")[1] + ")";
			}
			sqlStr += " FROM DY.DY_TABLE_INFO A INNER JOIN DY.DY_REPORT_INFO B ON A.TABLE_ID=B.TABLE_ID AND B.REPORT_DATE='" + reportDate.substring(0, 6) + "' AND B.BR_NO ='" + brNo
					+ "' INNER JOIN DY.DY_REPORT_DATA_" + reportDate.substring(0, 4) + " C ON C.REPORT_ID=B.REPORT_ID WHERE A.TABCODE='" + reportStr[0].split("_")[0] + "' AND C.REPORT_ROW_NUM="
					+ reportStr[0].split("_")[1] + "";
			System.out.print("sqlStr: " + sqlStr);
			try {
				secondValue = dyCheckDckServiceImpl.singleDouble(sqlStr);
				Sql deleteStr = Sqls.create("DELETE FROM dy.dy_check_dck WHERE FORMULAID='" + dyFormula.getId() + "' AND reportDate='" + reportDate + "' AND brNo='" + brNo + "'");
				dyCheckDckServiceImpl.dao().execute(deleteStr);
				if (dyFormula.getFormulaOp().equals("=")) {
					if (Math.abs(firstValue - secondValue) > dspBalance) {
						Sql sql = Sqls.create("insert into dy.dy_check_dck values(uuid(),'" + dyFormula.getId() + "','" + dyFormula.getDckExplain() + "','" + dyFormula.getSamTableName() + "','"
								+ dyFormula.getSamExplain() + "'," + firstValue + "," + secondValue + ",'" + brNo + "','" + reportDate + "','" + DateUtil.getNow(DateUtil.FORMAT_DATE) + "')");
						dyCheckDckServiceImpl.dao().execute(sql);
					}
				} else if (dyFormula.getFormulaOp().equals("<=")) {
					if (firstValue > secondValue) {
						Sql sql = Sqls.create("insert into dy.dy_check_dck values(uuid(),'" + dyFormula.getId() + "','" + dyFormula.getDckExplain() + "','" + dyFormula.getSamTableName() + "','"
								+ dyFormula.getSamExplain() + "'," + firstValue + "," + secondValue + ",'" + brNo + "','" + reportDate + "','" + DateUtil.getNow(DateUtil.FORMAT_DATE) + "')");
						dyCheckDckServiceImpl.dao().execute(sql);
					}
				}
			} catch (Exception e) {
			}
		}
	}

}
