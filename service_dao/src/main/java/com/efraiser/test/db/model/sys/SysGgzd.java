package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("SYS_GGZD")
public class SysGgzd extends BaseModelId {
	@Column("ZD_VALUE")
	private String zdValue;
	@Column("ZD_NAME")
	private String zdName;
	@Column("PID")
	private String pId;
	@Column("G_ID")
	private String gId;
	@Column("SORT_NUM")
	private String sortNum;

	// 页面辅助字段
	@Column
	@Readonly
	private String isLeaf;
	@Column
	@Readonly
	private String expanded;

	public String isExpanded() {
		return expanded;
	}

	public void setExpanded(String expanded) {
		this.expanded = expanded;
	}

	public String isLeaf() {
		return isLeaf;
	}

	public void setLeaf(String isLeaf) {
		this.isLeaf = isLeaf;
	}

	public String getZdValue() {
		return zdValue;
	}

	public void setZdValue(String zdValue) {
		this.zdValue = zdValue;
	}

	public String getZdName() {
		return zdName;
	}

	public void setZdName(String zdName) {
		this.zdName = zdName;
	}

	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

	public String getgId() {
		return gId;
	}

	public void setgId(String gId) {
		this.gId = gId;
	}

	public String getSortNum() {
		return sortNum;
	}

	public void setSortNum(String sortNum) {
		this.sortNum = sortNum;
	}

}
