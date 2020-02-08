package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


@Table("SAM.DM_DATA_TASK_LIST")
public class DmDataTaskList extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column("TASK_AUTO")
	private String taskAuto;
	@Column("TASK_NAME")
	private String taskName;
	@Column("TASK_TYPE")
	private String taskType;
	@Column("TASK_CONTENT")
	private String taskContent;
	@Column("TASK_INDEX")
	private int taskIndex;
	@Column("TASK_FLAG")
	private String taskFlag;
	@Column("TASK_LOAD_TABLE_NAME")
	private String taskTableName;
	@Column("DATA_SOURCE")
	private String dataSource;
	
	
	public String getDataSource() {
		return dataSource;
	}
	public void setDataSource(String dataSource) {
		this.dataSource = dataSource;
	}
	public String getTaskTableName() {
		return taskTableName;
	}
	public void setTaskTableName(String taskTableName) {
		this.taskTableName = taskTableName;
	}
	public String getTaskAuto() {
		return taskAuto;
	}
	public void setTaskAuto(String taskAuto) {
		this.taskAuto = taskAuto;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskType() {
		return taskType;
	}
	public void setTaskType(String taskType) {
		this.taskType = taskType;
	}
	public String getTaskContent() {
		return taskContent;
	}
	public void setTaskContent(String taskContent) {
		this.taskContent = taskContent;
	}
	public int getTaskIndex() {
		return taskIndex;
	}
	public void setTaskIndex(int taskIndex) {
		this.taskIndex = taskIndex;
	}
	public String getTaskFlag() {
		return taskFlag;
	}
	public void setTaskFlag(String taskFlag) {
		this.taskFlag = taskFlag;
	}
	
	
}
