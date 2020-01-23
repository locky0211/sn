package com.efraiser.test.db.model.ews;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;


/**
 * 
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.dck.model] 
 * @ClassName:    [DckScoreZfph]   
 * 类描述：
 * @author 
 * @date 2017年2月22日
 * @modify log:
 */

@Table("sam.score_zfph_sql")
public class ScoreZfphSql {
	@Name
	@Column
	private String zbbh;
	@Column
	private String zbmc;
	@Column("STA_SQL")
	private String staSql;
	@Column("SQL_EXPLAIN")
	private String sqlExplain;
	@Column("SQL_STATE")
	private String sqlState;

	public String getZbmc() {
		return zbmc;
	}
	public void setZbmc(String zbmc) {
		this.zbmc = zbmc;
	}
	public String getStaSql() {
		return staSql;
	}
	public void setStaSql(String staSql) {
		this.staSql = staSql;
	}
	public String getSqlExplain() {
		return sqlExplain;
	}
	public void setSqlExplain(String sqlExplain) {
		this.sqlExplain = sqlExplain;
	}
	public String getSqlState() {
		return sqlState;
	}
	public void setSqlState(String sqlState) {
		this.sqlState = sqlState;
	}
	
	public String getZbbh() {
		return zbbh;
	}
	public void setZbbh(String zbbh) {
		this.zbbh = zbbh;
	}
	
}
