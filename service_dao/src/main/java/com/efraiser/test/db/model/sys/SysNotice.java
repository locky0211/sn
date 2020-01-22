package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 机构管理-公告管理
 * 
 *
 */
@SuppressWarnings("serial")
@Table("SYS_NOTICE")
public class SysNotice extends BaseModelId {
	@Column
	private String title;
	@Column
	private String content;
	@Column("release_date")
	private String releaseDate;
	@Column("release_user")
	private String releaseUser;
	@Column("sql")
	private String sql;
	@Column("sql_ef")
	private String sql_ef;
	
	public String getSql() {
		return sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
	}

	public String getSql_ef() {
		return sql_ef;
	}

	public void setSql_ef(String sql_ef) {
		this.sql_ef = sql_ef;
	}

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

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getReleaseUser() {
		return releaseUser;
	}

	public void setReleaseUser(String releaseUser) {
		this.releaseUser = releaseUser;
	}

}
