package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_REPORT_RECORD")
public class DyReportRecord {
	@Column("USER_ID")
	private String userId;
	@Column("BR_NO")
	private String brNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("TAB_Type")
	private String tabType;
	@Column("TABNAME")
	private String tabName;
	@Column("UPDATE_DATE")
	private String updateDate;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getBrNo() {
		return brNo;
	}
	public void setBrNo(String brNo) {
		this.brNo = brNo;
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
	public String getTabName() {
		return tabName;
	}
	public void setTabName(String tabName) {
		this.tabName = tabName;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	@Override
	public String toString() {
		return "DyReportRecord [userId=" + userId + ", brNo=" + brNo
				+ ", reportDate=" + reportDate + ", tabType=" + tabType
				+ ", tabName=" + tabName + ", updateDate=" + updateDate + "]";
	}
	
}
