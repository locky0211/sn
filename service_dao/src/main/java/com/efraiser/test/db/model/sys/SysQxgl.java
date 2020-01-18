package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

/**
 * 权限管理
 * 
 *
 */
@Table("SYS_QXGL")
public class SysQxgl {
	@Name
	@Column("QX_ID")
	private String qxId;
	@Column("QX_NAME")
	private String qxName;
	@Column("P_ID")
	private String pId;
	@Column("FLAG")
	private String flag;
	@Column("sort_num")
	private String sortNum;
	@Column("URL")
	private String url;
	@Column("ICON_CLS")
	private String iconCls;

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getSortNum() {
		return sortNum;
	}

	public void setSortNum(String sortNum) {
		this.sortNum = sortNum;
	}

	public String getQxId() {
		return qxId;
	}

	public void setQxId(String qxId) {
		this.qxId = qxId;
	}

	public String getQxName() {
		return qxName;
	}

	public void setQxName(String qxName) {
		this.qxName = qxName;
	}

	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
