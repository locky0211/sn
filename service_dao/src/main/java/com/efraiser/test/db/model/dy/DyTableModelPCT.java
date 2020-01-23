package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_TABLE_MODEL_PCT")
public class DyTableModelPCT {
	@Column("TABLE_ID")
	private String tableId;
	@Column("FIELD_LOCATION")
	private String fieldLocation;

	public DyTableModelPCT() {
	}

	public DyTableModelPCT(String tableId, String fieldLocation) {
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
