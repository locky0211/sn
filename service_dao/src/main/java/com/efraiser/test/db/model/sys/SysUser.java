package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("SYS_USER")
public class SysUser {
	@Name
	@Column("USER_ID")
	private String userId;
	@Column("USER_NAME")
	private String userName;
	@Column("USER_PASS")
	private String userPass;
	@Column("USER_TELEPHONE")
	private String userTelephone;
	@Column("USER_EMAIL")
	private String userEmail;
	@Column("USER_GENGER")
	private String userGenger;
	@Column("STATUS")
	private String status;
	@Column("USER_ORGAN")
	private String userOrgan;
	@Column("LOGIN_COUNT")
	private int loginCount;
	@Column("LAST_LOGIN_DATE")
	private String lastLoginDate;
	@Column("LAST_LOGIN_IP")
	private String lastLoginIP;
	@Column("D_DATE")
	private String dDate;
	@Column("d_dip")
	private String dDip;

	public int getLoginCount() {
		return loginCount;
	}

	public void setLoginCount(int loginCount) {
		this.loginCount = loginCount;
	}

	public String getLastLoginIP() {
		return lastLoginIP;
	}

	public void setLastLoginIP(String lastLoginIP) {
		this.lastLoginIP = lastLoginIP;
	}

	public String getdDip() {
		return dDip;
	}

	public void setdDip(String dDip) {
		this.dDip = dDip;
	}

	public String getdDate() {
		return dDate;
	}

	public void setdDate(String dDate) {
		this.dDate = dDate;
	}

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

	public String getUserPass() {
		return userPass;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	public String getUserTelephone() {
		return userTelephone;
	}

	public void setUserTelephone(String userTelephone) {
		this.userTelephone = userTelephone;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserGenger() {
		return userGenger;
	}

	public void setUserGenger(String userGenger) {
		this.userGenger = userGenger;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUserOrgan() {
		return userOrgan;
	}

	public void setUserOrgan(String userOrgan) {
		this.userOrgan = userOrgan;
	}

	public String getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(String lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}
}
