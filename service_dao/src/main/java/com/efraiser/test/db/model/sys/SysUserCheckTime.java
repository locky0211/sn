package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("SYS_USER_CHECK_TIME")
public class SysUserCheckTime {
	@Name
	@Column("USER_ID")
	private String userId;
	@Column("USER_NAME")
	private String userName;
	@Column("BEFORE_CHECK_TIME")
	private String beforeCheckTime;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getBeforeCheckTime() {
		return beforeCheckTime;
	}
	public void setBeforeCheckTime(String beforeCheckTime) {
		this.beforeCheckTime = beforeCheckTime;
	}
	
	
}
