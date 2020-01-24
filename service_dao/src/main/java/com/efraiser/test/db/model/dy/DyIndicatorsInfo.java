package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.One;
import org.nutz.dao.entity.annotation.Table;

@SuppressWarnings("serial")
@Table("DY.DY_INDICATORS_INFO")
public class DyIndicatorsInfo extends BaseModelId {
	@Column("TABCODE")
	private String tabCode;
	@Column("IND_FORMULA")
	private String indFormula;
	@Column("IND_DATE")
	private String indDate;
	@Column("B_ID")
	private String bId;
	@Column("START_DATE")
	private String startDate;
	@Column("END_DATE")
	private String endDate;
	@One(target = DyIndicatorsBasicInfo.class, field = "bId")
	private DyIndicatorsBasicInfo indBasicInfo;

	public DyIndicatorsBasicInfo getIndBasicInfo() {
		return indBasicInfo;
	}

	public void setIndBasicInfo(DyIndicatorsBasicInfo indBasicInfo) {
		this.indBasicInfo = indBasicInfo;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getTabCode() {
		return tabCode;
	}

	public void setTabCode(String tabCode) {
		this.tabCode = tabCode;
	}

	public String getIndFormula() {
		return indFormula;
	}

	public void setIndFormula(String indFormula) {
		this.indFormula = indFormula;
	}

	public String getIndDate() {
		return indDate;
	}

	public void setIndDate(String indDate) {
		this.indDate = indDate;
	}

	public String getbId() {
		return bId;
	}

	public void setbId(String bId) {
		this.bId = bId;
	}

}