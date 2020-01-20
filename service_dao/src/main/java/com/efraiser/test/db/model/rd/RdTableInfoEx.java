package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("RdTableInfoEx")
public class RdTableInfoEx {

	@Name
	@Column("TABLE_ID")
	private String tableId;
	@Column
	private String tabName;
	@Column
	private String tabCode;
	@Column("TAB_Type")
	private String tabType;
	@Column("START_DATE")
	private String startDate;
	@Column("END_DATE")
	private String endDate;
	@Column("VERSION_NO")
	private String versionNo;
	@Column("EXCEL_FILE")
	private String excelFile;
	@Column("COL_INFO")
	private String colInfo;
	@Column("ROW_INFO")
	private String rowInfo;
	@Column("VERSION_NO_INFO")
	private String versionNoInfo;
	@Column("REPORT_ORGAN_TYPES")
	private String reportOrganTypes;
	@Column
	private String keys;
	@Column("SUB_TABNAME")
	private String subTabname;
	@Column("TAB_BR_TYPE")
	private String tabBrType;

	// @Column("TAB_BATCH")
	// private String tabBatch;
	// @Column("DATA_UNIT_CODE")
	// private String dataUnitCode;
	// @Column("SYS_FLAG")
	// private String sysFlag;
	// @Column
	// private String reporter;
	// @Column
	// private String checker;
	// @Column
	// private String charger;
	// @Column("RS_SCOPE")
	// private String rsScope;
	// @Column("CUR_CODE")
	// private String curCode;
	// @Column("DATA_ATTRIBUTE_CODE")
	// private String dataAttributeCode;
	// @Column("R_DATE")
	// private String rDate;
	// @Column("R_REPORTER")
	// private String rReporter;
	// @Column("R_CHECKER")
	// private String rChecker;
	// @Column("R_CHARGER")
	// private String rCharger;

	public String getTabBrType() {
		return tabBrType;
	}

	public void setTabBrType(String tabBrType) {
		this.tabBrType = tabBrType;
	}

	public String getVersionNoInfo() {
		return versionNoInfo;
	}

	public void setVersionNoInfo(String versionNoInfo) {
		this.versionNoInfo = versionNoInfo;
	}

	public String getTableId() {
		return tableId;
	}

	public String getSubTabname() {
		return subTabname;
	}

	public void setSubTabname(String subTabname) {
		this.subTabname = subTabname;
	}

	public String getKeys() {
		return keys;
	}

	public void setKeys(String keys) {
		this.keys = keys;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getTabCode() {
		return tabCode;
	}

	public void setTabCode(String tabCode) {
		this.tabCode = tabCode;
	}

	public String getTabName() {
		return tabName;
	}

	public void setTabName(String tabName) {
		this.tabName = tabName;
	}

	public String getTabType() {
		return tabType;
	}

	public void setTabType(String tabType) {
		this.tabType = tabType;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getVersionNo() {
		return versionNo;
	}

	public void setVersionNo(String versionNo) {
		this.versionNo = versionNo;
	}

	public String getExcelFile() {
		return excelFile;
	}

	public void setExcelFile(String excelFile) {
		this.excelFile = excelFile;
	}

	public String getColInfo() {
		return colInfo;
	}

	public void setColInfo(String colInfo) {
		this.colInfo = colInfo;
	}

	public String getRowInfo() {
		return rowInfo;
	}

	public void setRowInfo(String rowInfo) {
		this.rowInfo = rowInfo;
	}

	public String getReportOrganTypes() {
		return reportOrganTypes;
	}

	public void setReportOrganTypes(String reportOrganTypes) {
		this.reportOrganTypes = reportOrganTypes;
	}

	@Column("formulaWaveNum")
	private String formulaWaveNum;
	
	public String getFormulaWaveNum() {
		return formulaWaveNum;
	}

	public void setFormulaWaveNum(String formulaWaveNum) {
		this.formulaWaveNum = formulaWaveNum;
	}

}
