package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 机构管理-公告管理
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
@SuppressWarnings("serial")
@Table("SYS_USER_HELP")
public class SysUserHelp extends BaseModelId {
	@Column("TITLE")
	private String title;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getSchemaType() {
		return schemaType;
	}
	public void setSchemaType(String schemaType) {
		this.schemaType = schemaType;
	}
	@Column("CONTENT")
	private String content;
	@Column("SCHEMATYPE")
	private String schemaType;


}
