package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("DY.DY_CHECK_WITH_RD_BF_RESULTS_RECORD")
public class DyCheckWithRdBfResultsRecord extends BaseModelId {
	@Column("ORGAN_NO_DY")
	private String organNoDy;
	@Column("ORGAN_NO_RD")
	private String organNoRd;
	@Column("ORGAN_NO_BF")
	private String organNoBf;
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
	@Column("IS_REPAY")
	private String isRepay;
	@Column("CONTENT")
	private String content;
	@Column("TYPE")
	private String type;
	@Column("FORMULA_MARK")
	private String formulaMark;
	public String getOrganNoDy() {
		return organNoDy;
	}
	public void setOrganNoDy(String organNoDy) {
		this.organNoDy = organNoDy;
	}
	public String getOrganNoRd() {
		return organNoRd;
	}
	public void setOrganNoRd(String organNoRd) {
		this.organNoRd = organNoRd;
	}
	public String getOrganNoBf() {
		return organNoBf;
	}
	public void setOrganNoBf(String organNoBf) {
		this.organNoBf = organNoBf;
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
	public String getcUser() {
		return cUser;
	}
	public void setcUser(String cUser) {
		this.cUser = cUser;
	}
	public String getIsRepay() {
		return isRepay;
	}
	public void setIsRepay(String isRepay) {
		this.isRepay = isRepay;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getFormulaMark() {
		return formulaMark;
	}
	public void setFormulaMark(String formulaMark) {
		this.formulaMark = formulaMark;
	}
	public String getOrganName() {
		return organName;
	}
	public void setOrganName(String organName) {
		this.organName = organName;
	}
	@Column("ORGAN_NAME")
	@Readonly
	private String organName;



}
