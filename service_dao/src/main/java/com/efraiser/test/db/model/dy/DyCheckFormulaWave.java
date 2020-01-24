package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_CHECK_FORMULA_WAVE")
public class DyCheckFormulaWave extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
	@Column
	private String tabcode;
	@Column("PARENT")
	private String parent;
	@Column("CHECK_FORMULA")
	private String checkFormula;
	@Column("DVALUE_FORMULA")
	private String dValueFormula;
	@Column("THIS_VERSION")
	private String thisVersion;
	@Column("LAST_VERSION")
	private String lastVersion;
	@Column("VALID_FLAG")
	private String validFlag;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("C_USER")
	private String cUser;
	@Column("CHECK_FORMULA_MARK")
	private String checkFormulaMark;
	@Column("UPDATE_DATE")
	private String updateDate;
	@Column("CHECK_PROJECT")
	private String checkProject;
	@Column("VALUE_AREA")
	private String valueArea;
	@Column("REPORT_RATE")
	private String reportRate;
	@Column("LEFT_VALUE")
	private int leftValue;
	@Column("RIGHT_VALUE")
	private int rightValue;
	@Column("ELEMENT")
	private String element;
	@Column("LAST_ELEMENT")
	private String lastElement;
	@Column("CHECK_AREA")
	private String checkArea;
	@Column("CHECK_BRNO")
	private String checkBrno;
	@Column("TYPE")
	private String type;

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


	public String getValidFlag() {
		return validFlag;
	}

	public void setValidFlag(String validFlag) {
		this.validFlag = validFlag;
	}

	public String getCheckProject() {
		return checkProject;
	}

	public void setCheckProject(String checkProject) {
		this.checkProject = checkProject;
	}

	public String getValueArea() {
		return valueArea;
	}

	public void setValueArea(String valueArea) {
		this.valueArea = valueArea;
	}

	public String getReportRate() {
		return reportRate;
	}

	public void setReportRate(String reportRate) {
		this.reportRate = reportRate;
	}

	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public int getLeftValue() {
		return leftValue;
	}

	public void setLeftValue(int leftValue) {
		this.leftValue = leftValue;
	}

	public int getRightValue() {
		return rightValue;
	}

	public void setRightValue(int rightValue) {
		this.rightValue = rightValue;
	}

	public String getElement() {
		return element;
	}

	public void setElement(String element) {
		this.element = element;
	}

	public String getLastElement() {
		return lastElement;
	}

	public void setLastElement(String lastElement) {
		this.lastElement = lastElement;
	}

	public String getCheckArea() {
		return checkArea;
	}

	public void setCheckArea(String checkArea) {
		this.checkArea = checkArea;
	}
	
/*	public String toString(){
		return "INSERT INTO RD_CHECK_FORMULA (ID,TABCODE,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,CHECK_PROJECT,VALUE_AREA,REPORT_RATE,FORMULA_MODEL,PARENT,LEFTVALUE,RIGHTVALUE,ELEMENT,LASTELEMENT,CHECK_AREA)VALUES("+convert(this.getId())+","+convert(tabcode)+","+convert(checkFormula)+","+convert(startDate)+","+convert(endDate)+","+convert(validFlag)+","+convert(checkRisk)+","+convert(deviationValue)+","+convert(cUser)+","+convert(checkFormulaMark)+","+convert(autoComputeFlag)+","+convert(updateDate)+","+convert(checkProject)+","+convert(valueArea)+","+convert(reportRate)+","+convert(formulaModel)+","+convert(parent)+","+convert(leftValue)+","+convert(rightValue)+","+convert(element)+","+convert(lastElement)+","+convert(checkArea)+");";
	}*/
	
/*	public String convert(Object param){
		if(param==null){
			return null;
		}
		param = param.toString().replaceAll("\r|\n", "");
		return "'" + param + "'";
	}
*/
	public String getCheckBrno() {
		return checkBrno;
	}

	public void setCheckBrno(String checkBrno) {
		this.checkBrno = checkBrno;
	}

	public String getdValueFormula() {
		return dValueFormula;
	}

	public void setdValueFormula(String dValueFormula) {
		this.dValueFormula = dValueFormula;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getThisVersion() {
		return thisVersion;
	}

	public void setThisVersion(String thisVersion) {
		this.thisVersion = thisVersion;
	}

	public String getLastVersion() {
		return lastVersion;
	}

	public void setLastVersion(String lastVersion) {
		this.lastVersion = lastVersion;
	} 
}

	
	
