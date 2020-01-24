package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_formula_east")
public class DyFormulaEast extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
	@Column("east_tablename")
	private String eastTableName;
	@Column("east_content")
	private String eastContent;
	@Column("east_explain")
	private String eastExplain;
	@Column("sam_tablename")
	private String samTableName;
	@Column("sam_content")
	private String samContent;
	@Column("sam_explain")
	private String samExplain;
	@Column("formula_op")
	private String formulaOp;
	@Column("formula_desc")
	private String formulaDesc;
	@Column("formula_type")
	private String formulaType;
	@Column("formulastate")
	private String formulaState;
	@Column
	private String updateTime;
	public String getEastTableName() {
		return eastTableName;
	}
	public void setEastTableName(String eastTableName) {
		this.eastTableName = eastTableName;
	}
	public String getEastContent() {
		return eastContent;
	}
	public void setEastContent(String eastContent) {
		this.eastContent = eastContent;
	}
	public String getEastExplain() {
		return eastExplain;
	}
	public void setEastExplain(String eastExplain) {
		this.eastExplain = eastExplain;
	}
	public String getSamTableName() {
		return samTableName;
	}
	public void setSamTableName(String samTableName) {
		this.samTableName = samTableName;
	}
	public String getSamContent() {
		return samContent;
	}
	public void setSamContent(String samContent) {
		this.samContent = samContent;
	}
	public String getSamExplain() {
		return samExplain;
	}
	public void setSamExplain(String samExplain) {
		this.samExplain = samExplain;
	}
	public String getFormulaOp() {
		return formulaOp;
	}
	public void setFormulaOp(String formulaOp) {
		this.formulaOp = formulaOp;
	}
	public String getFormulaDesc() {
		return formulaDesc;
	}
	public void setFormulaDesc(String formulaDesc) {
		this.formulaDesc = formulaDesc;
	}
	public String getFormulaType() {
		return formulaType;
	}
	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
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
		
}
