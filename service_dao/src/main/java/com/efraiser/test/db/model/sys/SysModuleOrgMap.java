package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


/**
 * 
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.sys.model] 
 * @ClassName:    [SysModuleOrgMap]   
 * 类描述：模块机构映射配置
 */
@SuppressWarnings("serial")
@Table("SYS_MODULE_ORG_MAP")
public class SysModuleOrgMap extends BaseModelId {
	
	@Column("OLDMODULE")
	private String oldModule;
	@Column("OLDORG")
	private String oldOrg;
	@Column("NEWMODULE")
	private String newModule;
	@Column("NEWORG")
	private String newOrg;
	
	public String getOldModule() {
		return oldModule;
	}
	public void setOldModule(String oldModule) {
		this.oldModule = oldModule;
	}
	public String getOldOrg() {
		return oldOrg;
	}
	public void setOldOrg(String oldOrg) {
		this.oldOrg = oldOrg;
	}
	public String getNewModule() {
		return newModule;
	}
	public void setNewModule(String newModule) {
		this.newModule = newModule;
	}
	public String getNewOrg() {
		return newOrg;
	}
	public void setNewOrg(String newOrg) {
		this.newOrg = newOrg;
	}
}
