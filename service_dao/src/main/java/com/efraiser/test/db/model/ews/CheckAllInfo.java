package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


@Table("check_all_info")
public class CheckAllInfo extends BaseModelId {

	/**
	 * 整体检验信息类
	 * 
	 * @author wangfei
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	@Readonly
	private String brName;
	@Column
	private String brNO;
	@Column
	private String sjRQ;
	@Column
	private String formulaType;
	@Column
	private String checkStartTime;
	@Column
	private String checkEndTime;
	@Column
	private String formulaId;
	@Column
	private int completedFormulaNumber;
	@Column
	private int formulaTotalCount;
	@Column
	private String status;
	@Column
	private String tableRange;
	@Column
	private String version;

	public String getBrNO() {
		return brNO;
	}

	public void setBrNO(String brNO) {
		this.brNO = brNO;
	}

	public String getSjRQ() {
		return sjRQ;
	}

	public void setSjRQ(String sjRQ) {
		this.sjRQ = sjRQ;
	}

	public String getFormulaType() {
		return formulaType;
	}

	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}

	public String getCheckStartTime() {
		return checkStartTime;
	}

	public void setCheckStartTime(String checkStartTime) {
		this.checkStartTime = checkStartTime;
	}

	public int getCompletedFormulaNumber() {
		return completedFormulaNumber;
	}

	public void setCompletedFormulaNumber(int completedFormulaNumber) {
		this.completedFormulaNumber = completedFormulaNumber;
	}

	public int getFormulaTotalCount() {
		return formulaTotalCount;
	}

	public void setFormulaTotalCount(int formulaTotalCount) {
		this.formulaTotalCount = formulaTotalCount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCheckEndTime() {
		return checkEndTime;
	}

	public void setCheckEndTime(String checkEndTime) {
		this.checkEndTime = checkEndTime;
	}

	public String getFormulaId() {
		return formulaId;
	}

	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}

	public String getBrName() {
		return brName;
	}

	public void setBrName(String brName) {
		this.brName = brName;
	}

	public String getTableRange() {
		return tableRange;
	}

	public void setTableRange(String tableRange) {
		this.tableRange = tableRange;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}
}
