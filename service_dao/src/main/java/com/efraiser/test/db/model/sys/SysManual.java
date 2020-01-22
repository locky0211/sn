package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("SYS_MANUAL")
public class SysManual {
	@Name
	@Column("M_ID")
	private String manualId;
	@Column("M_NAME")
	private String manualName;
	@Column("PID")
	private String pId;
	@Column("URL")
	private String manualUrl;
	@Column("M_STATUS")
	private String status;
	
	public String getManualId() {
		return manualId;
	}
	public void setManualId(String manualId) {
		this.manualId = manualId;
	}
	public String getManualName() {
		return manualName;
	}
	public void setManualName(String manualName) {
		this.manualName = manualName;
	}
	public String getManualUrl() {
		return manualUrl;
	}
	public void setManualUrl(String manualUrl) {
		this.manualUrl = manualUrl;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getpId() {
		return pId;
	}
	public void setpId(String pId) {
		this.pId = pId;
	}
	
}
