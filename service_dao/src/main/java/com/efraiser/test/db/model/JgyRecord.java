package com.efraiser.test.db.model;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.PK;
import org.nutz.dao.entity.annotation.Table;

@Table("JGY_RECORD")
@PK({"userId","loginMonths"})
public class JgyRecord {
	public JgyRecord() {
		super();
	}
	public JgyRecord(String userId, String loginMonths, String loginCount, String successImport, String validateCount) {
		super();
		this.userId = userId;
		this.loginMonths = loginMonths;
		this.loginCount = loginCount;
		this.successImport = successImport;
		this.validateCount = validateCount;
	}
	public JgyRecord(String userId, String loginMonths, String loginCount) {
		super();
		this.userId = userId;
		this.loginMonths=loginMonths;
		this.loginCount = loginCount;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getloginMonths() {
		return loginMonths;
	}
	public void setloginMonths(String loginMonths) {
		this.loginMonths = loginMonths;
	}
	public String getLoginCount() {
		return loginCount;
	}
	public void setLoginCount(String loginCount) {
		this.loginCount = loginCount;
	}
	public String getSuccessImport() {
		return successImport;
	}
	public void setSuccessImport(String successImport) {
		this.successImport = successImport;
	}
	public String getValidateCount() {
		return validateCount;
	}
	public void setValidateCount(String validateCount) {
		this.validateCount = validateCount;
	}
	
	@Column("USER_ID")
    private String userId;
	@Column("LOGIN_MONTHS")
    private String loginMonths;
	@Column("LOGIN_COUNT")
    private String loginCount;
	@Column("SUCCESS_IMPORT")
    private String successImport;
	@Column("VALIDATE_COUNT")
    private String validateCount;
    
}
