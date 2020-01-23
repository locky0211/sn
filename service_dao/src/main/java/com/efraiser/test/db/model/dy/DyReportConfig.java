package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_REPORT_CONFIG")
public class DyReportConfig {
	@Column
	private int maxErrorNum;
	@Column
	private double dspBalance;
	@Column
	private double eastBalance;
	@Column
	private int exeNum;
	@Column("BF_TABLE_MATCH")
	private String bfTableMatch;
	@Column("PI_REPORT_KEY")
	private String piReportKey;
	
	

	public String getPiReportKey() {
		return piReportKey;
	}
	public void setPiReportKey(String piReportKey) {
		this.piReportKey = piReportKey;
	}
	public int getExeNum() {
		return exeNum;
	}
	public void setExeNum(int exeNum) {
		this.exeNum = exeNum;
	}
	public int getMaxErrorNum() {
		return maxErrorNum;
	}
	public void setMaxErrorNum(int maxErrorNum) {
		this.maxErrorNum = maxErrorNum;
	}
	public double getDspBalance() {
		return dspBalance;
	}
	public void setDspBalance(double dspBalance) {
		this.dspBalance = dspBalance;
	}
	public double getEastBalance() {
		return eastBalance;
	}
	public void setEastBalance(double eastBalance) {
		this.eastBalance = eastBalance;
	}
	public String getBfTableMatch() {
		return bfTableMatch;
	}
	public void setBfTableMatch(String bfTableMatch) {
		this.bfTableMatch = bfTableMatch;
	}



}
