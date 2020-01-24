package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * @ProjectName:  [com.efraiser.check] 
 * @Package:      [com.efraiser.sam.model] 
 * @ClassName:    [RdCheckDck]   
 * 类描述：
 * @author 
 * @date 2016年1月27日
 * @modify log:
 */
@Table("DY.DY_CHECK_DCK")
public class DyCheckDck extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String formulaId;
	@Column
	private String dckExplain;
	@Column
	private String samExplain;
	@Column
	private String samTableName;
	@Column
	private double dckValue;
	@Column
	private double samValue;
	@Column
	private String checkDate;
	public String getFormulaId() {
		return formulaId;
	}
	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}
	public String getDckExplain() {
		return dckExplain;
	}
	public void setDckExplain(String dckExplain) {
		this.dckExplain = dckExplain;
	}
	public String getSamExplain() {
		return samExplain;
	}
	public void setSamExplain(String samExplain) {
		this.samExplain = samExplain;
	}
	public String getSamTableName() {
		return samTableName;
	}
	public void setSamTableName(String samTableName) {
		this.samTableName = samTableName;
	}
	public double getDckValue() {
		return dckValue;
	}
	public void setDckValue(double dckValue) {
		this.dckValue = dckValue;
	}
	public double getSamValue() {
		return samValue;
	}
	public void setSamValue(double samValue) {
		this.samValue = samValue;
	}
	public String getCheckDate() {
		return checkDate;
	}
	public void setCheckDate(String checkDate) {
		this.checkDate = checkDate;
	}


}
