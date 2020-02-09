package com.efraiser.test.db.model.ts;

import com.efraiser.test.db.model.comom.BaseModelId;
import com.efraiser.test.db.task.AbstractTaskBase;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


/**
 * 任务周期管理
 * 
 */
@SuppressWarnings("serial")
@Table("TS_TASK_CIRCLE")
public class TsTaskCycle extends BaseModelId  implements AbstractTaskBase {

	@Column("RUN_EXPR")
	private String runExpr;
	@Column("CYCLE_NAME")
	private String cycleName;

	public String getRunExpr() {
		return runExpr;
	}

	public void setRunExpr(String runExpr) {
		this.runExpr = runExpr;
	}

	public String getCycleName() {
		return cycleName;
	}

	public void setCycleName(String cycleName) {
		this.cycleName = cycleName;
	}

	@Override
	public String taskId() {
		return getId();
	}

	@Override
	public String cronExpression() {
		return runExpr;
	}

	@Override
	public String cycleName() {
		return cycleName;
	}
}
