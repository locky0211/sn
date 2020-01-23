package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@Table("check_all")
public class CheckAll extends BaseModelId {
	/**
	 *整体检验结果类
	 *@author wushuo
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String formulaId;
	@Column
	private String formulaType;
	@Column
	private String tableName;
	@Column
	private String fieldCode;
	@Column
	private String fieldName;
	@Column
	private String checkDesc;
	@Column
	private String checkDate;
	@Column
	private int number;
	@Column
	private int dataNumber;
	@Readonly
	@Column
	private String tableNumber;
	
	public String getFormulaType() {
		return formulaType;
	}
	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public String getCheckDate() {
		return checkDate;
	}
	public void setCheckDate(String checkDate) {
		this.checkDate = checkDate;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getFieldCode() {
		return fieldCode;
	}
	public void setFieldCode(String fieldCode) {
		this.fieldCode = fieldCode;
	}
	public String getCheckDesc() {
		return checkDesc;
	}
	public void setCheckDesc(String checkDesc) {
		this.checkDesc = checkDesc;
	}
	public String getFormulaId() {
		return formulaId;
	}
	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}
	public int getDataNumber() {
		return dataNumber;
	}
	public void setDataNumber(int dataNumber) {
		this.dataNumber = dataNumber;
	}
	public String getTableNumber() {
		return tableNumber;
	}
	public void setTableNumber(String tableNumber) {
		this.tableNumber = tableNumber;
	}
	
	
}
