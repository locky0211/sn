package com.efraiser.test.db.model.ts;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.One;
import org.nutz.dao.entity.annotation.Table;


/**
 * 调度任务列表
 * 
 *
 */
@SuppressWarnings("serial")
@Table("TS_TASK_LIST")
public class TsTaskList extends BaseModelId {
	@Column("CYCLE_ID")
	private String cycleId;
	@Column("TASK_NAME")
	private String taskName;
	@Column("TASK_TYPE")
	private String taskType;
	@Column("TASK_CONTENT")
	private String taskContent;
	@Column("TASK_INDEX")
	private Integer taskIndex;
	@Column
	private String flag;

	@One(target = TsTaskCycle.class, field = "cycleId")
	public TsTaskCycle taskCycle;

	public TsTaskCycle getTaskCycle() {
		return taskCycle;
	}

	public void setTaskCycle(TsTaskCycle taskCycle) {
		this.taskCycle = taskCycle;
	}

	public String getCycleId() {
		return cycleId;
	}

	public void setCycleId(String cycleId) {
		this.cycleId = cycleId;
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

	public Integer getTaskIndex() {
		return taskIndex;
	}

	public void setTaskIndex(Integer taskIndex) {
		this.taskIndex = taskIndex;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

}
