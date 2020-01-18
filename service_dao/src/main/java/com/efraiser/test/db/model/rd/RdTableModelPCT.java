package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("RD_TABLE_MODEL_PCT")
public class RdTableModelPCT {
	@Column("TABLE_ID")
	private String tableId;
	@Column("FIELD_LOCATION")
	private String fieldLocation;

	public RdTableModelPCT() {
	}

	public RdTableModelPCT(String tableId, String fieldLocation) {
		this.tableId = tableId;
		this.fieldLocation = fieldLocation;
	}

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getFieldLocation() {
		return fieldLocation;
	}

	public void setFieldLocation(String fieldLocation) {
		this.fieldLocation = fieldLocation;
	}

}
