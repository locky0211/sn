package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import com.efraiser.test.db.task.AbstractTaskBase;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


@Table("sam.east_task")
public class EastTask extends BaseModelId implements AbstractTaskBase {

	/**
	 * east自动导入类
	 */
	private static final long serialVersionUID = 1L;
	@Column("SYSTYPE")
	private String sysType;
	@Column("FILEPATH")
	private String filePath;
	@Column("STARTCRICLE")
	private String startCricle;
	@Column("CRICLEEXPLAIN")
	private String cricleExplain;
	@Column("FLAG")
	private String flag;
	public String getSysType() {
		return sysType;
	}
	public void setSysType(String sysType) {
		this.sysType = sysType;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getStartCricle() {
		return startCricle;
	}
	public void setStartCricle(String startCricle) {
		this.startCricle = startCricle;
	}
	public String getCricleExplain() {
		return cricleExplain;
	}
	public void setCricleExplain(String cricleExplain) {
		this.cricleExplain = cricleExplain;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}


	@Override
	public String taskId() {
		return getId();
	}

	@Override
	public String cronExpression() {
		return startCricle;
	}

	@Override
	public String cycleName() {
		return cricleExplain;
	}
}
