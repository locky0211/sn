package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


@Table("check_br_temp")
public class CheckBrTemp extends BaseModelId {

	/**
	 * 校验结果临时类
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
	private String sjRQ;
	@Column
	private String formulaType;
	@Column
	private String version;
	@Column("SORT_NUM")
	private int sortNum;
	@Column
	private String tableRange;
	@Column
	private String status;

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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
