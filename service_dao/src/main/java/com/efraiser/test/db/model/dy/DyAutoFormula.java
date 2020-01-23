package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 自动计算校验公式
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
@Table("DY.DY_AUTO_FORMULA")
public class DyAutoFormula {

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
