package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("SYS_RZGL")
public class SysRzgl extends BaseModelId {
	@Column("RZ_NR")
	private String rzNr;
	@Column("RZ_DATE")
	private String rzDate;
	@Column("RZ_YH")
	private String rzYh;
	
	public String getRzNr() {
		return rzNr;
	}
	public void setRzNr(String rzNr) {
		this.rzNr = rzNr;
	}
	public String getRzDate() {
		return rzDate;
	}
	public void setRzDate(String rzDate) {
		this.rzDate = rzDate;
	}
	public String getRzYh() {
		return rzYh;
	}
	public void setRzYh(String rzYh) {
		this.rzYh = rzYh;
	}
	
	
	
	
	
}
