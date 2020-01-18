package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

/**
 * 机构管理-部门管理
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
@Table("SYS_BMGL")
public class SysBmgl {
	@Name
	@Column("BM_Code")
	private String bmCode;
	@Column("BM_NAME")
	private String bmName;
	@Column("P_ID")
	private String pId;// 上级部门id
	@Column("sort_num")
	private String sortNum;
	@Column("BM_CATEGORY")
	private String bmCategory;
	@Column("BM_TYPE")
	private String bmType;
	@Column("BM_AREA")
	private String bmArea;
	@Column("count_flag")
	private String countFlag;
	@Column("BM_TYPE_NAME")
	@Readonly
	private String bmTypeName;

	public String getCountFlag() {
		return countFlag;
	}

	public void setCountFlag(String countFlag) {
		this.countFlag = countFlag;
	}

	public String getBmArea() {
		return bmArea;
	}

	public void setBmArea(String bmArea) {
		this.bmArea = bmArea;
	}

	public String getBmCategory() {
		return bmCategory;
	}

	public void setBmCategory(String bmCategory) {
		this.bmCategory = bmCategory;
	}

	public String getBmTypeName() {
		return bmTypeName;
	}

	public void setBmTypeName(String bmTypeName) {
		this.bmTypeName = bmTypeName;
	}

	public String getBmType() {
		return bmType;
	}

	public void setBmType(String bmType) {
		this.bmType = bmType;
	}

	public String getBmCode() {
		return bmCode;
	}

	public void setBmCode(String bmCode) {
		this.bmCode = bmCode;
	}

	public String getBmName() {
		return bmName;
	}

	public void setBmName(String bmName) {
		this.bmName = bmName;
	}

	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

	public String getSortNum() {
		return sortNum;
	}

	public void setSortNum(String sortNum) {
		this.sortNum = sortNum;
	}

}
