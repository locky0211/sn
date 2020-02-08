package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@Table("RD_INDICATORS_DATA")
public class RdIndicatorsData {
	@Column("BR_NO")
	private String brNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("IND_ID")
	private String indId;
	@Column("IND_Name")
	@Readonly
	private String indName;
	@Column("p_Id")
	@Readonly
	private String pId;
	@Column("IND_VALUE")
	private Double indValue;
	@Column("SQ_CON")
	private Double sqCon;
	@Column("SJ_CON")
	private Double sjCon;
	@Column("NC_CON")
	private Double ncCon;
	@Column("QNTQ_CON")
	private Double qntqCon;
	@Column("IS_PERCENT")
	@Readonly
	private String isPercent;
	@Column("ICON_CLS")
	@Readonly
	private String iconCls;

	public Double getSjCon() {
		return sjCon;
	}

	public void setSjCon(Double sjCon) {
		this.sjCon = sjCon;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getIndName() {
		return indName;
	}

	public void setIndName(String indName) {
		this.indName = indName;
	}

	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
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

	public String getIndId() {
		return indId;
	}

	public void setIndId(String indId) {
		this.indId = indId;
	}

	public Double getIndValue() {
		return indValue;
	}

	public void setIndValue(Double indValue) {
		this.indValue = indValue;
	}

	public Double getSqCon() {
		return sqCon;
	}

	public void setSqCon(Double sqCon) {
		this.sqCon = sqCon;
	}

	public Double getNcCon() {
		return ncCon;
	}

	public void setNcCon(Double ncCon) {
		this.ncCon = ncCon;
	}

	public Double getQntqCon() {
		return qntqCon;
	}

	public void setQntqCon(Double qntqCon) {
		this.qntqCon = qntqCon;
	}

	public String getIsPercent() {
		return isPercent;
	}

	public void setIsPercent(String isPercent) {
		this.isPercent = isPercent;
	}

}
