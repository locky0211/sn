package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("DW.RD_REPORT_MID_INFO")
public class RdReportMidInfo {
	@Name
	@Column("REPORT_ID")
	private String reportId;
	@Column("TABLE_ID")
	private String tableId;
	@Column("CHILDREPID")
	private String childRepId;
	@Column("VERSIONID")
	private String versionId;
	@Column("REPORTDATE")
	private String reportDate;
	@Column("BR_NO")
	private String brNo;
	@Column("UPDATE_TIME")
	private String updateTime;
	
	public String getReportId() {
		return reportId;
	}
	public void setReportId(String reportId) {
		this.reportId = reportId;
	}
	public String getTableId() {
		return tableId;
	}
	public void setTableId(String tableId) {
		this.tableId = tableId;
	}
	public String getChildRepId() {
		return childRepId;
	}
	public void setChildRepId(String childRepId) {
		this.childRepId = childRepId;
	}
	public String getVersionId() {
		return versionId;
	}
	public void setVersionId(String versionId) {
		this.versionId = versionId;
	}
	public String getReportDate() {
		return reportDate;
	}
	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}
	public String getBrNo() {
		return brNo;
	}
	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

}
