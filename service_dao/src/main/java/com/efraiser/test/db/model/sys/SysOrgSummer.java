package com.efraiser.test.db.model.sys;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


/**
 * 
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.sys.model] 
 * @ClassName:    [SysOrgSummer]   
 * 类描述：汇总机构配置
 * @author 
 * @date 2017年9月11日
 * @modify log:
 */
@SuppressWarnings("serial")
@Table("SAM.SYS_ORG_SUMMER")
public class SysOrgSummer extends BaseModelId {
	
	@Column("SUM_CODE")
	private String sumCode; //汇总机构
	@Column("SUB_CODE")
	private String subCode; //子机构
	@Column("SUM_NAME")
	@Readonly
	private String sumName;
	
	public String getSumCode() {
		return sumCode;
	}
	public void setSumCode(String sumCode) {
		this.sumCode = sumCode;
	}
	public String getSubCode() {
		return subCode;
	}
	public void setSubCode(String subCode) {
		this.subCode = subCode;
	}
	public String getSumName() {
		return sumName;
	}
	public void setSumName(String sumName) {
		this.sumName = sumName;
	}
	
}
