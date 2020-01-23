package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

/**
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.ews.model]
 * @ClassName: [CheckFormulaExpend] 类描述：校验公式扩展表
 * @author
 * @date 2017年7月3日
 * @modify log:
 */
@Table("formula_all_expend")
public class CheckFormulaExpend extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String brno;
	@Column
	private String repCode;
	@Column
	private String formulaExpend;
	@Column
	private String version;
	@Column
	private String expendState;
	@Column
	private String updateTime;
	@Column
	@Readonly
	private String brName;

	public String getBrno() {
		return brno;
	}

	public void setBrno(String brno) {
		this.brno = brno;
	}

	public String getRepCode() {
		return repCode;
	}

	public void setRepCode(String repCode) {
		this.repCode = repCode;
	}

	public String getFormulaExpend() {
		return formulaExpend;
	}

	public void setFormulaExpend(String formulaExpend) {
		this.formulaExpend = formulaExpend;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getExpendState() {
		return expendState;
	}

	public void setExpendState(String expendState) {
		this.expendState = expendState;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

	public String getBrName() {
		return brName;
	}

	public void setBrName(String brName) {
		this.brName = brName;
	}

}
