package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


@Table("RD_REMARKS")
public class RdRemarks extends BaseModelId {
private static final long serialVersionUID = 1L;
  @Column("ORGAN_NO")
  private String organNo;
  @Column("ORGAN_NAME")
  @Readonly
  private String organName;
  @Column("C_USER")
  private String cUser;
  @Column("REPORT_NO_STR")
  private String reportNoStr;
  @Column("FORMULA")
  private String formula;
  @Column("CHECK_RISK")
  private String checkRisk;
  @Column("FORMULA_MARK")
  private String formulaMark;
  @Column("CANCEL_FLAG")
  private String cancelFlag;
  public String getCancelFlag() {
	return cancelFlag;
}
public void setCancelFlag(String cancelFlag) {
	this.cancelFlag = cancelFlag;
}
public String getFormulaMark() {
	return formulaMark;
}
public void setFormulaMark(String formulaMark) {
	this.formulaMark = formulaMark;
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
  public String getOrganName() {
		return organName;
	}
	public void setOrganName(String organName) {
		this.organName = organName;
	}
public void setcUser(String cUser) {
	this.cUser = cUser;
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
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
@Column("REPORT_DATE")
  private String reportDate;
  @Column("TAB_TYPE")
  private String tabType;
  @Column("TYPE")
  private String type;
  public String getReviewAdvice() {
	return reviewAdvice;
}
public void setReviewAdvice(String reviewAdvice) {
	this.reviewAdvice = reviewAdvice;
}
@Column("REPORT_USER")
  private String reportUser;
  @Column("CONTENT")
  private String content;
  @Column("REMARKS")
  private String remarks;
  @Column("REPORT_REVIEWER")
  private String reportReviewer;
  /* 0代表提交备注 
   * 1代表备注审核不通过 
   * 2代表备注审核通过*/
  @Column("FLAG")
  private String flag;
  @Column("REVIEW_ADVICE")
  private String reviewAdvice;
public String getReportReviewer() {
	return reportReviewer;
}
public void setReportReviewer(String reportReviewer) {
	this.reportReviewer = reportReviewer;
}

public String getFlag() {
	return flag;
}
public void setFlag(String flag) {
	this.flag = flag;
}
public String getOrganNo() {
	return organNo;
}
public void setOrganNo(String organNo) {
	this.organNo = organNo;
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
public String getReportUser() {
	return reportUser;
}
public void setReportUser(String reportUser) {
	this.reportUser = reportUser;
}
public String getContent() {
	return content;
}
public void setContent(String content) {
	this.content = content;
}
public String getRemarks() {
	return remarks;
}
public void setRemarks(String remarks) {
	this.remarks = remarks;
}
}
