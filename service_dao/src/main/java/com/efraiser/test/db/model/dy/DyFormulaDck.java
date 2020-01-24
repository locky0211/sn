package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * @ProjectName:  [com.efraiser.check] 
 * @Package:      [com.efraiser.sam.model] 
 * @ClassName:    [RdFormula]   
 * 类描述：1104校验公式类
 * @author wushuo
 * @date 2016年1月25日
 * @modify log:
 */
@Table("DY.DY_formula_dck")
public class DyFormulaDck extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
	@Column("dck_tablename")
	private String dckTableName;
	@Column("dck_content")
	private String dckContent;
	@Column("dck_explain")
	private String dckExplain;
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
	
	public String getDckTableName() {
		return dckTableName;
	}
	public void setDckTableName(String dckTableName) {
		this.dckTableName = dckTableName;
	}
	public String getDckContent() {
		return dckContent;
	}
	public void setDckContent(String dckContent) {
		this.dckContent = dckContent;
	}
	public String getDckExplain() {
		return dckExplain;
	}
	public void setDckExplain(String dckExplain) {
		this.dckExplain = dckExplain;
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
	public String getFormulaDesc() {
		return formulaDesc;
	}
	public void setFormulaDesc(String formulaDesc) {
		this.formulaDesc = formulaDesc;
	}
	
	public String getFormulaOp() {
		return formulaOp;
	}
	public void setFormulaOp(String formulaOp) {
		this.formulaOp = formulaOp;
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
