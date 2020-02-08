package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


@Table("SAM.DM_DATA_TASK_LOG_INFO")
public class DmDataTaskLogInfo extends BaseModelId {
	@Column("DATA_DATE")
	private String dataDate;
	@Column("DATA_TYPE")
	private String dataType;
	@Column("HANDLE_DATE")
	private String handleDate;
	@Column("TASK_STATE")
	private String taskState;
	@Column("LOG_INFO")
	private String logInfo;
	@Column("LOAD_NUM")
	private int loadNum;
	@Column("EXTRACT_NUM")
	private int extractNum;
	@Column("DATA_BATCH")
	private String dataBatch;//报表批次（南京新增20190108）
	public String getDataDate() {
		return dataDate;
	}
	public void setDataDate(String dataDate) {
		this.dataDate = dataDate;
	}
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	public String getHandleDate() {
		return handleDate;
	}
	public void setHandleDate(String handleDate) {
		this.handleDate = handleDate;
	}
	public String getTaskState() {
		return taskState;
	}
	public void setTaskState(String taskState) {
		this.taskState = taskState;
	}
	public String getLogInfo() {
		return logInfo;
	}
	public void setLogInfo(String logInfo) {
		this.logInfo = logInfo;
	}
	public int getLoadNum() {
		return loadNum;
	}
	public void setLoadNum(int loadNum) {
		this.loadNum = loadNum;
	}
	public int getExtractNum() {
		return extractNum;
	}
	public void setExtractNum(int extractNum) {
		this.extractNum = extractNum;
	}
	public String getDataBatch() {
		return dataBatch;
	}
	public void setDataBatch(String dataBatch) {
		this.dataBatch = dataBatch;
	}
	
	
	

}
