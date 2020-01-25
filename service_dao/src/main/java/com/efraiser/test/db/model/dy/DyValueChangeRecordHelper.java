package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;

public class DyValueChangeRecordHelper {
	@Column("REPORT_ID")
	private String reportId;
	@Column("ORGAN_NO")
	private String organNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("TABCODE")
	private String tabCode;
	@Column("USER_NAME")
	private String userName;
	@Column("CHANGE_LOCATE")
	private String changeLocate;
	@Column("ORIGINAL_VALUE")
	private double originalValue;
	@Column("PRESENT_VALUE")
	private double presentValue;
	@Column("UPDATE_DATE")
	private String updateDate;
	@Column("BR_NO")
	private String brNo;
	public String getReportId() {
		return reportId;
	}
	public void setReportId(String reportId) {
		this.reportId = reportId;
	}
	public String getChangeLocate() {
		return changeLocate;
	}
	public void setChangeLocate(String changeLocate) {
		this.changeLocate = changeLocate;
	}
	public double getOriginalValue() {
		return originalValue;
	}
	public void setOriginalValue(double originalValue) {
		this.originalValue = originalValue;
	}
	public double getPresentValue() {
		return presentValue;
	}
	public void setPresentValue(double presentValue) {
		this.presentValue = presentValue;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	public String getReportDate() {
		return reportDate;
	}
	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getTabCode() {
		return tabCode;
	}
	public void setTabCode(String tabCode) {
		this.tabCode = tabCode;
	}
	public String getBrNo() {
		return brNo;
	}
	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}
	public String getOrganNo() {
		return organNo;
	}
	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}
}
