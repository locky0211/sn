package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 自动计算校验公式
 *
 */
@Table("RD_AUTO_FORMULA")
public class RdAutoFormula {

	@Column("TABLE_ID")
	private String tableId;
	@Column("AUTO_FORMULA")
	private String autoFormula;

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getAutoFormula() {
		return autoFormula;
	}

	public void setAutoFormula(String autoFormula) {
		this.autoFormula = autoFormula;
	}

}
