package com.efraiser.test.db.model.comom;

import org.nutz.dao.entity.annotation.EL;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Prev;
import org.nutz.lang.random.R;

import java.io.Serializable;

/**
 * UUID主键超类
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
public abstract class BaseModelId implements Serializable {
	private static final long serialVersionUID = 1L;
	@Name
	@Prev(els = { @EL("$me.uuid()") })
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String uuid() {
		return R.UU16();
	}

}
