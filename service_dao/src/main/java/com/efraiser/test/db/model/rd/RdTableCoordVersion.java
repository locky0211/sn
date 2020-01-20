package com.efraiser.test.db.model.rd;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("SAM.RD_TABLE_COORD_VERSION")
public class RdTableCoordVersion extends BaseModelId {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column("TABCODE")
	private String tabCode;//报表编号
	@Column("OLD_VERSION_NO")
	private String oldVersionNo;//老版本编号信息
	@Column("OLD_LOCATE")
	private String oldLocate;//老版本定位信息
	@Column("NEW_VERSION_NO")
	private String newVersionNo;//新版本编号信息
	@Column("NEW_LOCATE")
	private String newLocate;//新版本定位信息
	@Column("FIELD_NAME")
	private String fieldName;//指标信息
	@Column("VALID_FLAG")
	private String validFlag;//启用标识
	public String getTabCode() {
		return tabCode;
	}
	public void setTabCode(String tabCode) {
		this.tabCode = tabCode;
	}
	public String getOldVersionNo() {
		return oldVersionNo;
	}
	public void setOldVersionNo(String oldVersionNo) {
		this.oldVersionNo = oldVersionNo;
	}
	public String getOldLocate() {
		return oldLocate;
	}
	public void setOldLocate(String oldLocate) {
		this.oldLocate = oldLocate;
	}
	public String getNewVersionNo() {
		return newVersionNo;
	}
	public void setNewVersionNo(String newVersionNo) {
		this.newVersionNo = newVersionNo;
	}
	public String getNewLocate() {
		return newLocate;
	}
	public void setNewLocate(String newLocate) {
		this.newLocate = newLocate;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	
	public String getValidFlag() {
		return validFlag;
	}
	public void setValidFlag(String validFlag) {
		this.validFlag = validFlag;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
}
