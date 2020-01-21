package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("S_GEN_KEY")
public class SysGenKey {
	@Column("KEY_ID")
	private String keyId;

	public String getKeyId() {
		return keyId;
	}

	public void setKeyId(String keyId) {
		this.keyId = keyId;
	}
}
