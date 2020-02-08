package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DW.RD_REPORT_MID_DATA")
public class RdReportMidData {
	@Column("REPORT_ID")
	private String reportId;
	@Column("REPORTDATE")
	private String reportDate;
	@Column("ROWID")
	private String rowId;
	@Column("COLID")
	private String colId;
	@Column("VALUE1")
	private Double value1;
	@Column("VALUE2")
	private String value2;
	
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
	public String getRowId() {
		return rowId;
	}
	public void setRowId(String rowId) {
		this.rowId = rowId;
	}
	public String getColId() {
		return colId;
	}
	public void setColId(String colId) {
		this.colId = colId;
	}
	public Double getValue1() {
		return value1;
	}
	public void setValue1(Double value1) {
		this.value1 = value1;
	}
	public String getValue2() {
		return value2;
	}
	public void setValue2(String value2) {
		this.value2 = value2;
	}
}
