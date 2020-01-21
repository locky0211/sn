package com.efraiser.test.db.model.dy;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.dy_sh.model] 
 * @ClassName:    [DyUserReport]   
 * 类描述：用户管辖报表配置
 * @author 
 * @date 2017年12月29日
 * @modify log:
 */
@Table("DY_SH.DY_USER_REPORT")
public class DyUserReport {
	
	@Column("USER_ID")
	private String userId;
	
	@Column("TABLE_ID")
	private String tableId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}
	
}
