package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;

public class RdCheckResultsWaveHelper {
	@Column("ID")
	private String id;
	@Column("ORGAN_NAME")
	private String organName;
	@Column("ORGAN_NO")
	private String organNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("REPORT_RATE")
	private String reportRate;
	@Column("TAB_TYPE")
	private String tabType;
	@Column("CHECK_PROJECT")
	private String checkProject;
	@Column("REPORT_NO_STR")
	private String reportNoStr;
	@Column("FORMULA")
	private String formula;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("C_USER")
	private String cUser;
	@Column("VALUE")
	private String value;
	@Column("VALUES")
	private String values;
	@Column("D_VALUE")
	private String dValue;
	@Column("VALUE_AREA")
	private String valueArea;
	@Column("CONTENT")
	private String content;
	@Column("FORMULA_ID")
	private String formulaId;
	@Readonly
	@Column
	private String ydDesc;
	@Readonly
	@Column("DESC_STATE")
	private String descState;
	@Readonly
	@Column("DESCID")
	private String descId;
	@Column("ELEMENT")
	private String element;
	@Column("BZINFO")
	private String bzInfo;
	@Column("PROBLEMID")
	private String problemId;
	public String getElement() {
		return element;
	}
	public void setElement(String element) {
		this.element = element;
	}
	public String getFormulaId() {
		return formulaId;
	}

	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}

	@Readonly
	private String bzInformation;

	public String getBzInformation() {
		return bzInformation;
	}

	public void setBzInformation(String bzInformation) {
		this.bzInformation = bzInformation;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	
	public String getValues() {
		return values;
	}
	public void setValues(String values) {
		this.values = values;
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

	public String getReportRate() {
		return reportRate;
	}

	public void setReportRate(String reportRate) {
		this.reportRate = reportRate;
	}

	public String getReportNoStr() {
		return reportNoStr;
	}

	public void setReportNoStr(String reportNoStr) {
		this.reportNoStr = reportNoStr;
	}

	public String getFormula() {
		return formula;
	}

	public void setFormula(String formula) {
		this.formula = formula;
	}

	public String getCheckRisk() {
		return checkRisk;
	}

	public void setCheckRisk(String checkRisk) {
		this.checkRisk = checkRisk;
	}

	public String getcUser() {
		return cUser;
	}

	public void setcUser(String cUser) {
		this.cUser = cUser;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getdValue() {
		return dValue;
	}

	public void setdValue(String dValue) {
		this.dValue = dValue;
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

	public String getOrganName() {
		return organName;
	}

	public void setOrganName(String organName) {
		this.organName = organName;
	}

	public String getTabType() {
		return tabType;
	}

	public void setTabType(String tabType) {
		this.tabType = tabType;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getYdDesc() {
		return ydDesc;
	}

	public void setYdDesc(String ydDesc) {
		this.ydDesc = ydDesc;
	}

	public String getDescState() {
		return descState;
	}

	public void setDescState(String descState) {
		this.descState = descState;
	}

	public String getDescId() {
		return descId;
	}

	public void setDescId(String descId) {
		this.descId = descId;
	}
	public String getBzInfo() {
		return bzInfo;
	}
	public void setBzInfo(String bzInfo) {
		this.bzInfo = bzInfo;
	}


}
