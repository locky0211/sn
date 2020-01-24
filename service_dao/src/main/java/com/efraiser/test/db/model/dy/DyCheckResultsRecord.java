package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("DY.DY_CHECK_RESULTS_RECORD")
public class DyCheckResultsRecord extends BaseModelId {
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
	@Readonly
	private String organName;

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
		return formula;
	}

	public void setFormula(String formula) {
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

}
