package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_VALUE_CHANGE_RECORD")
public class DyValueChangeRecord extends BaseModelId {
	private static final long serialVersionUID = 1L;
	@Column("USER_ID")
	private String userId;
	@Column("REPORT_ID")
	private String reportId;
	@Column("CHANGE_LOCATE")
	private String changeLocate;
	@Column("ORIGINAL_VALUE")
	private double originalValue;
	@Column("PRESENT_VALUE")
	private double presentValue;
	@Column("UPDATE_DATE")
	private String updateDate;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getReportId() {
		return reportId;
	}
	public void setReportId(String reportId) {
		this.reportId = reportId;
	}
	public String getChangeLocate() {
		return changeLocate;
	}
	public void setChangeLocate(String changeLocate) {
		this.changeLocate = changeLocate;
	}
	public double getOriginalValue() {
		return originalValue;
	}
	public void setOriginalValue(double originalValue) {
		this.originalValue = originalValue;
	}
	public double getPresentValue() {
		return presentValue;
	}
	public void setPresentValue(double presentValue) {
		this.presentValue = presentValue;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
}
