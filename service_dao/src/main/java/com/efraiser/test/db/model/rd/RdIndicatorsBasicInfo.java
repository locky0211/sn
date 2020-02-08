package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


@SuppressWarnings("serial")
@Table("RD_INDICATORS_BASIC_INFO")
public class RdIndicatorsBasicInfo extends BaseModelId {
	@Column("IND_NAME")
	private String indName;
	@Column("IND_TYPE")
	private String indType;
	@Column("SORT_NUM")
	private int sortNum;
	@Column("VALID_FLAG")
	private String validFlag;
	@Column("IS_PERCENT")
	private String isPercent;
	@Column("IS_PARENT")
	private String isParent;
	@Column("P_ID")
	private String pId;
	@Column("ICON_CLS")
	private String iconCls;
	@Column("IND_BR_TYPE")
	private String indBrType;
	@Column("IND_ORGANS")
	private String indOrgans;
	@Column("C_USER")
	private String cUser;
	@Column("AREA")
	private String area;
	public String getcUser() {
		return cUser;
	}

	public void setcUser(String cUser) {
		this.cUser = cUser;
	}

	public String getIndBrType() {
		return indBrType;
	}

	public void setIndBrType(String indBrType) {
		this.indBrType = indBrType;
	}

	public String getIndOrgans() {
		return indOrgans;
	}

	public void setIndOrgans(String indOrgans) {
		this.indOrgans = indOrgans;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getIndType() {
		return indType;
	}

	public void setIndType(String indType) {
		this.indType = indType;
	}

	public String getIndName() {
		return indName;
	}

	public void setIndName(String indName) {
		this.indName = indName;
	}

	public int getSortNum() {
		return sortNum;
	}

	public void setSortNum(int sortNum) {
		this.sortNum = sortNum;
	}

	public String getValidFlag() {
		return validFlag;
	}

	public void setValidFlag(String validFlag) {
		this.validFlag = validFlag;
	}

	public String getIsPercent() {
		return isPercent;
	}

	public void setIsPercent(String isPercent) {
		this.isPercent = isPercent;
	}

	public String getIsParent() {
		return isParent;
	}

	public void setIsParent(String isParent) {
		this.isParent = isParent;
	}

	public String getpId() {
		return pId;
	}
	

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

}
