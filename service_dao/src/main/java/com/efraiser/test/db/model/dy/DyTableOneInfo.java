package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_TABLE_ONEINFO")
public class DyTableOneInfo extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
	@Column("TABLE_ID")
	private String tableId;
	
	@Column("REPORT_ID")
	private String reportId;
	
	@Column("REPORT_DATE")
	private String reportDate;
	
	@Column("BR_NO")
	private String brNo;
	
	@Column("TABLE_DATE")
	private String tableDate;
	
	@Column("REPORT_UNIT")
	private String reportUnit;
	
	@Column("REPORT_PEOPLE")
	private String reportPeo;
	
	@Column("REPORT_PHONE")
	private String reportPhone;
	
	@Column("REVIEWER")
	private String reviewer;

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getReportId() {
		return reportId;
	}

	public void setReportId(String reportId) {
		this.reportId = reportId;
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

	public String getTableDate() {
		return tableDate;
	}

	public void setTableDate(String tableDate) {
		this.tableDate = tableDate;
	}

	public String getReportUnit() {
		return reportUnit;
	}

	public void setReportUnit(String reportUnit) {
		this.reportUnit = reportUnit;
	}

	public String getReportPeo() {
		return reportPeo;
	}

	public void setReportPeo(String reportPeo) {
		this.reportPeo = reportPeo;
	}

	public String getReportPhone() {
		return reportPhone;
	}

	public void setReportPhone(String reportPhone) {
		this.reportPhone = reportPhone;
	}

	public String getReviewer() {
		return reviewer;
	}

	public void setReviewer(String reviewer) {
		this.reviewer = reviewer;
	}

	
}
