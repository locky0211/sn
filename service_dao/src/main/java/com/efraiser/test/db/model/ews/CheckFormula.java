package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("formula_all")
public class CheckFormula extends BaseModelId {
	/**
	 *校验公式类
	 *@author wushuo
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String repCode;
	@Column
	private String fieldName;
	@Column
	private String fieldCode;
	@Column
	private String formula;
	@Column
	private String formulaType;
	@Column
	private String formulaDesc;
	@Column
	private String formulaState;
	@Column
	private String updateTime;
	@Column
	private String version;
	public String getRepCode() {
		return repCode;
	}
	public void setRepCode(String repCode) {
		this.repCode = repCode;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public String getFieldCode() {
		return fieldCode;
	}
	public void setFieldCode(String fieldCode) {
		this.fieldCode = fieldCode;
	}
	public String getFormula() {
		return formula;
	}
	public void setFormula(String formula) {
		this.formula = formula;
	}
	public String getFormulaType() {
		return formulaType;
	}
	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}
	public String getFormulaDesc() {
		return formulaDesc;
	}
	public void setFormulaDesc(String formulaDesc) {
		this.formulaDesc = formulaDesc;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	public String getFormulaState() {
		return formulaState;
	}
	public void setFormulaState(String formulaState) {
		this.formulaState = formulaState;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
}
