package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_TABLE_BASIC_INFO")
public class DyTableBasicInfo {
	@Name
	private String tabCode;
	@Column
	private String tabName;
	@Column
	private String status;

	public String getTabCode() {
		return tabCode;
	}

	public void setTabCode(String tabCode) {
		this.tabCode = tabCode;
	}

	public String getTabName() {
		return tabName;
	}

	public void setTabName(String tabName) {
		this.tabName = tabName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
