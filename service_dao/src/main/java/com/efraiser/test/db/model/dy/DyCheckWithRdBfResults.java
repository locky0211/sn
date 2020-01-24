package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("DY.DY_CHECK_WITH_RD_BF_RESULTS")
public class DyCheckWithRdBfResults extends BaseModelId {
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

	
	public String getReportNoStr() {
		return reportNoStr;
	}
	public void setReportNoStr(String reportNoStr) {
		this.reportNoStr = reportNoStr;
	}
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
	@Column("ORGAN_NAME_DY")
	@Readonly
	private String organNameDy;
	@Column("ORGAN_NAME_RD")
	@Readonly
	private String organNameRd;
	@Column("ORGAN_NAME_BF")
	@Readonly
	private String organNameBf;
	public String getOrganNameDy() {
		return organNameDy;
	}
	public void setOrganNameDy(String organNameDy) {
		this.organNameDy = organNameDy;
	}
	public String getOrganNameRd() {
		return organNameRd;
	}
	public void setOrganNameRd(String organNameRd) {
		this.organNameRd = organNameRd;
	}
	public String getOrganNameBf() {
		return organNameBf;
	}
	public void setOrganNameBf(String organNameBf) {
		this.organNameBf = organNameBf;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Column("FORMULA_MARK")
	private String formulaMark;
	@Column("ORGAN_NAME")
	@Readonly
	private String organName;
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
	

	
}
