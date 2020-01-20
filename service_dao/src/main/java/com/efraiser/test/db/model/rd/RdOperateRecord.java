package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("SAM.RD_OPERATE_RECORD")
public class RdOperateRecord extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String bmCode;
	@Column
	private String reportDate;
	@Column
	private String reportCode;
	@Column
	private String statusType;//I1代表已导入，C0代表校验通过，C1代表校验未通过，A1代表待审核，A2代表审核未通过，A3代表审核通过
	@Column
	private String opDate;
	@Column
	private String opUser;
	public String getBmCode() {
		return bmCode;
	}
	public void setBmCode(String bmCode) {
		this.bmCode = bmCode;
	}
	public String getReportDate() {
		return reportDate;
	}
	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}
	public String getReportCode() {
		return reportCode;
	}
	public void setReportCode(String reportCode) {
		this.reportCode = reportCode;
	}
	public String getStatusType() {
		return statusType;
	}
	public void setStatusType(String statusType) {
		this.statusType = statusType;
	}
	public String getOpDate() {
		return opDate;
	}
	public void setOpDate(String opDate) {
		this.opDate = opDate;
	}
	public String getOpUser() {
		return opUser;
	}
	public void setOpUser(String opUser) {
		this.opUser = opUser;
	}
	

}
