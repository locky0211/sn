package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * @author 罗菁 用户角色
 */
@Table("SYS_USER_ROLE")
public class SysUserRole {
	@Column("USER_ID")
	private String userId;
	@Column("ROLE_ID")
	private String roleId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

}
