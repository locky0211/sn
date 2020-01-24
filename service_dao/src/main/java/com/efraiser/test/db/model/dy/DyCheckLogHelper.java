package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;

public class DyCheckLogHelper {
	@Column
	private String areaCode;
	@Column
	private String areaCodeName;
	@Column
	private String reportDate;
	@Column
	private String tabType;
	@Column
	private String checkNum;
	@Column
	private String doCheckNum;
	@Column
	private String noCheckNum;
	@Column
	private String checkNoPassNum1;
	@Column
	private String checkNoPassNum2;

	public String getCheckNum() {
		return checkNum;
	}

	public void setCheckNum(String checkNum) {
		this.checkNum = checkNum;
	}

	public String getDoCheckNum() {
		return doCheckNum;
	}

	public void setDoCheckNum(String doCheckNum) {
		this.doCheckNum = doCheckNum;
	}

	public String getAreaCode() {
		return areaCode;
	}

	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}

	public String getAreaCodeName() {
		return areaCodeName;
	}

	public void setAreaCodeName(String areaCodeName) {
		this.areaCodeName = areaCodeName;
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

	public String getNoCheckNum() {
		return noCheckNum;
	}

	public void setNoCheckNum(String noCheckNum) {
		this.noCheckNum = noCheckNum;
	}

	public String getCheckNoPassNum1() {
		return checkNoPassNum1;
	}

	public void setCheckNoPassNum1(String checkNoPassNum1) {
		this.checkNoPassNum1 = checkNoPassNum1;
	}

	public String getCheckNoPassNum2() {
		return checkNoPassNum2;
	}

	public void setCheckNoPassNum2(String checkNoPassNum2) {
		this.checkNoPassNum2 = checkNoPassNum2;
	}

}
