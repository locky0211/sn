package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

@Table("CACHE_INFO")
public class CacheInfo {

	@Name
	@Column("BEAN_NAME")
	private String beanName;
	@Column("CACHE_DES")
	private String cacheDes;
	@Column("SORT_NUM")
	private Integer sortNum;
	@Column("ERROR_MSG")
	private String errorMsg;

	private String flag;

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String getCacheDes() {
		return cacheDes;
	}

	public void setCacheDes(String cacheDes) {
		this.cacheDes = cacheDes;
	}

	public String getBeanName() {
		return beanName;
	}

	public void setBeanName(String beanName) {
		this.beanName = beanName;
	}

	public Integer getSortNum() {
		return sortNum;
	}

	public void setSortNum(Integer sortNum) {
		this.sortNum = sortNum;
	}

}
