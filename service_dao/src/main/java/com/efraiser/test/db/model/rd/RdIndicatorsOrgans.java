package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("RD_INDICATORS_ORGANS")
public class RdIndicatorsOrgans {
	@Column("IND_ID")
	private String indId;
	@Column("ORGAN_TYPE")
	private String organType;

	public String getIndId() {
		return indId;
	}

	public void setIndId(String indId) {
		this.indId = indId;
	}

	public String getOrganType() {
		return organType;
	}

	public void setOrganType(String organType) {
		this.organType = organType;
	}

}
