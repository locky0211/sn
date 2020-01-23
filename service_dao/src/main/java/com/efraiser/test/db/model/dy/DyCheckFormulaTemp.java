package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_CHECK_FORMULA_TEMP")
public class DyCheckFormulaTemp {
	@Column
	private String id;
	@Column
	private String tabcode;
	@Column("CHECK_FORMULA")
	private String checkFormula;
	@Column("START_DATE")
	private String startDate;
	@Column("END_DATE")
	private String endDate;
	@Column("VALID_FLAG")
	private String validFlag;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("DEVIATION_VALUE")
	private String deviationValue;
	@Column("C_USER")
	private String cUser;
	@Column("CHECK_FORMULA_MARK")
	private String checkFormulaMark;
	@Column("AUTO_COMPUTE_FLAG")
	private String autoComputeFlag;
	@Column("UPDATE_DATE")
	private String updateDate;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getCheckFormulaMark() {
		return checkFormulaMark;
	}

	public void setCheckFormulaMark(String checkFormulaMark) {
		this.checkFormulaMark = checkFormulaMark;
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

	public void setcUser(String cUser) {
		this.cUser = cUser;
	}

	public String getTabcode() {
		return tabcode;
	}

	public void setTabcode(String tabcode) {
		this.tabcode = tabcode;
	}

	public String getCheckFormula() {
		return checkFormula;
	}

	public void setCheckFormula(String checkFormula) {
		this.checkFormula = checkFormula;
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

	public String getValidFlag() {
		return validFlag;
	}

	public void setValidFlag(String validFlag) {
		this.validFlag = validFlag;
	}

	public String getDeviationValue() {
		return deviationValue;
	}

	public void setDeviationValue(String deviationValue) {
		this.deviationValue = deviationValue;
	}

	public String getAutoComputeFlag() {
		return autoComputeFlag;
	}

	public void setAutoComputeFlag(String autoComputeFlag) {
		this.autoComputeFlag = autoComputeFlag;
	}

}
