package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("SYS_USER_DEPARTMENT")
public class SysUserDepartment  extends BaseModelId {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column("USER_ID")
	private String userId;
	@Column("USER_NAME")
	private String userName;
	@Column("USER_DEPARTMENT")
	private String userDepartment;
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
	public String getUserDepartment() {
		return userDepartment;
	}
	@Override
	public String toString() {
		return "SysUserDepartment [userId=" + userId + ", userName=" + userName
				+ ", userDepartment=" + userDepartment + "]";
	}
	public void setUserDepartment(String userDepartment) {
		this.userDepartment = userDepartment;
	}
	
}
