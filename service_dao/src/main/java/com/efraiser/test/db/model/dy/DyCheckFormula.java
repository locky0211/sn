package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_CHECK_FORMULA")
public class DyCheckFormula extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
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
	@Column("TYPE")
	private String type;
	@Column("CHECK_AREA")
	private String checkArea;

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
	
	public String getCheckFormulaEx() {
		return checkFormula;
	}

	public String getCheckFormula() {
		return checkFormula;
	}
	
	public void setCheckFormulaEx(String checkFormula) {
		this.checkFormula = checkFormula;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String toString(){
		return "INSERT INTO SAM.RD_CHECK_FORMULA (ID,TABCODE,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA)VALUES("+convert(this.getId())+","+convert(tabcode)+","+convert(checkFormula)+","+convert(startDate)+","+convert(endDate)+","+convert(validFlag)+","+convert(checkRisk)+","+convert(deviationValue)+","+convert(cUser)+","+convert(checkFormulaMark)+","+convert(autoComputeFlag)+","+convert(updateDate)+","+convert(type)+","+convert(checkArea)+");";
	}
	
	public String convert(Object param){
		if(param==null){
			return null;
		}
		param = param.toString().replaceAll("\r|\n", "");
		return "'" + param + "'";
	}

	public String getCheckArea() {
		return checkArea;
	}

	public void setCheckArea(String checkArea) {
		this.checkArea = checkArea;
	}

}

	
	
