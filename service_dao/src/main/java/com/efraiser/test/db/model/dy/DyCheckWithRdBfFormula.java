package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("dy.dy_check_with_rd_bf_formula")
public class DyCheckWithRdBfFormula extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column("TABCODE")
	private String tabcode;
	@Column("CHECK_FORMULA")
	private String checkFormula;
	@Column("VALID_FLAG")
	private String validFlag;
	@Column("C_USER")
	private String cUser;
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
	public String getValidFlag() {
		return validFlag;
	}
	public void setValidFlag(String validFlag) {
		this.validFlag = validFlag;
	}
	public String getcUser() {
		return cUser;
	}
	public void setcUser(String cUser) {
		this.cUser = cUser;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	public String getFormulaType() {
		return formulaType;
	}
	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}
	public String getFormulaExplain() {
		return formulaExplain;
	}
	public void setFormulaExplain(String formulaExplain) {
		this.formulaExplain = formulaExplain;
	}
	public String getDeviationValue() {
		return deviationValue;
	}
	public void setDeviationValue(String deviationValue) {
		this.deviationValue = deviationValue;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Column("UPDATE_DATE")
	private String updateDate;
	@Column("FORMULA_TYPE")
	private String formulaType;
	@Column("FORMULA_EXPLAIN")
	private String formulaExplain;
	@Column("DEVIATION_VALUE")
	private String deviationValue;
}
