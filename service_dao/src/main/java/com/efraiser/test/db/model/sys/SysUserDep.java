package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


/**
 * @author 罗菁
 *	用户管辖机构
 */
@Table("SYS_USER_DEP")
public class SysUserDep {
	@Column("USER_ID")
	private String userId;
	@Column("DEP_ID")
	private String depId;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDepId() {
		return depId;
	}
	public void setDepId(String depId) {
		this.depId = depId;
	}

	
}
