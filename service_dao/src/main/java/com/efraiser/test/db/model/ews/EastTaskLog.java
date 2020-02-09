package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("sam.east_task_log")
public class EastTaskLog extends BaseModelId {
/*
 * east自动导入日志类
 */
	private static final long serialVersionUID = 1L;
	@Column("TABLENAME")
	private String tableName;
	@Column("IMPORTLOG")
	private String importLog;
	@Column("IMPORTTIME")
	private String importTime;
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public String getImportLog() {
		return importLog;
	}
	public void setImportLog(String importLog) {
		this.importLog = importLog;
	}
	public String getImportTime() {
		return importTime;
	}
	public void setImportTime(String importTime) {
		this.importTime = importTime;
	}
	
	
}
