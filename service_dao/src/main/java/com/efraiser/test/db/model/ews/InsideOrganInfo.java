package com.efraiser.test.db.model.ews;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("EAST_INSIDE_ORGAN_INFO")
public class InsideOrganInfo {
	
	@Column("ORGAN_CODE")
	@Name
	private String organCode;
	@Column("ORGAN_NAME")
	private String organName;
	
	public String getOrganName() {
		return organName;
	}
	public void setOrganName(String organName) {
		this.organName = organName;
	}
	public String getOrganCode() {
		return organCode;
	}
	public void setOrganCode(String organCode) {
		this.organCode = organCode;
	}
	
}
