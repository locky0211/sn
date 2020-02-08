package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("SAM.SYS_SCHEDULE")
public class SysSchedule extends BaseModelId {
	
	@Column("TASK_TYPE")
	private String taskType; 
	@Column("TASK_TIME")
	private String taskTime; 
	@Column("STATUS")
	private String status;
	@Column("REMARK")
	private String remark;
	@Column("REPORTDATE")
	private String reportDate;
	@Column("REPORTTYPE")
	private String reportType;
	@Column("DATA_BATCH")
	private String dataBatch;//报表批次（南京新增20190108）
	public String getTaskType() {
		return taskType;
	}
	public void setTaskType(String taskType) {
		this.taskType = taskType;
	}
	public String getTaskTime() {
		return taskTime;
	}
	public void setTaskTime(String taskTime) {
		this.taskTime = taskTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getReportDate() {
		return reportDate;
	}
	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}
	public String getReportType() {
		return reportType;
	}
	public void setReportType(String reportType) {
		this.reportType = reportType;
	}
	public String getDataBatch() {
		return dataBatch;
	}
	public void setDataBatch(String dataBatch) {
		this.dataBatch = dataBatch;
	}
	
}
