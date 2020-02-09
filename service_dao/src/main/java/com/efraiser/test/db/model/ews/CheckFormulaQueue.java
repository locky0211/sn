package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


@Table("check_formula_queue")
public class CheckFormulaQueue extends BaseModelId {

	/**
	 * 检验规则队列
	 * 
	 * @author wangfei
	 */
	private static final long serialVersionUID = 1L;
	@Column
	@Readonly
	private String brName;
	@Column
	private String brNO;
	@Column
	private String sjrq;
	@Column
	private String formulaType;
	@Column
	private String version;
	@Column
	private int sortNum;
	@Column
	private String tableRange;
	@Column
	private String status;
	@Column
	private String formulaId;

	public String getBrName() {
		return brName;
	}

	public void setBrName(String brName) {
		this.brName = brName;
	}

	public String getBrNO() {
		return brNO;
	}

	public void setBrNO(String brNO) {
		this.brNO = brNO;
	}

	public String getSjrq() {
		return sjrq;
	}

	public void setSjrq(String sjrq) {
		this.sjrq = sjrq;
	}

	public String getFormulaType() {
		return formulaType;
	}

	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public int getSortNum() {
		return sortNum;
	}

	public void setSortNum(int sortNum) {
		this.sortNum = sortNum;
	}

	public String getTableRange() {
		return tableRange;
	}

	public void setTableRange(String tableRange) {
		this.tableRange = tableRange;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFormulaId() {
		return formulaId;
	}

	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}

}
