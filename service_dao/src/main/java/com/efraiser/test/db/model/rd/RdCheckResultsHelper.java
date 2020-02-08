package com.efraiser.test.db.model.rd;

import com.efraiser.test.common.util.AES;
import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.mvc.Mvcs;


public class RdCheckResultsHelper extends BaseModelId {
	private static final long serialVersionUID = 1L;
	@Column
	private String id;
	@Column("ORGAN_NO")
	private String organNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("TAB_TYPE")
	private String tabType;
	@Column("report_no_str")
	private String reportNoStr;
	@Column("FORMULA")
	private String formula;
	@Column("C_USER")
	private String cUser;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("CONTENT")
	private String content;
	@Column("FORMULA_MARK")
	private String formulaMark;
	@Column("ORGAN_NAME")
	private String organName;
	@Column("CHECK_PROJECT")
	private String checkProject;
	@Column("VALUE_AREA")
	private String valueArea;
	@Column("REPORT_RATE")
	private String reportRate;
	@Column("FORMULA_MODEL")
	private String formulaModel;
	@Column("DVALUE")
	private String dValue;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getOrganName() {
		return organName;
	}

	public void setOrganName(String organName) {
		this.organName = organName;
	}

	public String getReportNoStr() {
		return reportNoStr;
	}

	public void setReportNoStr(String reportNoStr) {
		this.reportNoStr = reportNoStr;
	}

	public String getcUser() {
		return cUser;
	}

	public void setcUser(String cUser) {
		this.cUser = cUser;
	}

	public String getCheckRisk() {
		return checkRisk;
	}

	public void setCheckRisk(String checkRisk) {
		this.checkRisk = checkRisk;
	}

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getReportDate() {
		return reportDate;
	}

	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}

	public String getTabType() {
		return tabType;
	}

	public void setTabType(String tabType) {
		this.tabType = tabType;
	}

	public String getFormula() {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
			String ef = Mvcs.getIoc().get(String.class, "EF");
			if("true".equals(ef))
			{
				byte[] byBuffer = AES.decode(arr[1]);
				byte[] decryptResult = AES.decrypt(byBuffer);
				return new String(decryptResult);
			}
		}
		return formula;
	}

	public void setFormula(String formula) {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
			
		}
		else
		{
			String ef = Mvcs.getIoc().get(String.class, "EF");
			if("true".equals(ef))
			{
				byte[] encryptResult = AES.encrypt(formula);
				String strEncryptResult = AES.encodeToString(encryptResult);
				this.formula = "em_"+strEncryptResult;
				return;
			}
		}
		this.formula = formula;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getFormulaMark() {
		return formulaMark;
	}

	public void setFormulaMark(String formulaMark) {
		this.formulaMark = formulaMark;
	}

	public String getCheckProject() {
		return checkProject;
	}

	public void setCheckProject(String checkProject) {
		this.checkProject = checkProject;
	}

	public String getValueArea() {
		return valueArea;
	}

	public void setValueArea(String valueArea) {
		this.valueArea = valueArea;
	}

	public String getReportRate() {
		return reportRate;
	}

	public void setReportRate(String reportRate) {
		this.reportRate = reportRate;
	}

	public String getFormulaModel() {
		return formulaModel;
	}
	public void setFormulaModel(String formulaModel) {
		this.formulaModel = formulaModel;
	}

	public String getdValue() {
		return dValue;
	}

	public void setdValue(String dValue) {
		this.dValue = dValue;
	}
}
