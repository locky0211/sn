package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("CHECK_LOG_INFO")
public class CheckLog extends BaseModelId {
	/**
	 *
	 * @author
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column("CHECK_TYPE")
	private String checkType;
	@Column("LOGINFO")
	private String logInfo;
	@Column("BRNO")
	private String brNo;
	@Column
	private String tableRange;
	@Column
	private String sjrq;

	public String getCheckType() {
		return checkType;
	}

	public void setCheckType(String checkType) {
		this.checkType = checkType;
	}

	public String getLogInfo() {
		return logInfo;
	}

	public void setLogInfo(String logInfo) {
		this.logInfo = logInfo;
	}

	public String getBrNo() {
		return brNo;
	}

	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}

	public String getTableRange() {
		return tableRange;
	}

	public void setTableRange(String tableRange) {
		this.tableRange = tableRange;
	}

	public String getSjrq() {
		return sjrq;
	}

	public void setSjrq(String sjrq) {
		this.sjrq = sjrq;
	}

}
