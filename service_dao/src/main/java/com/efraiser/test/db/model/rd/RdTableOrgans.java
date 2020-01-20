package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("RD_TABLE_ORGANS")
public class RdTableOrgans {
	@Column("TABLE_ID")
	private String tableId;
	@Column("ORGAN_TYPE")
	private String organType;

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getOrganType() {
		return organType;
	}

	public void setOrganType(String organType) {
		this.organType = organType;
	}

}
