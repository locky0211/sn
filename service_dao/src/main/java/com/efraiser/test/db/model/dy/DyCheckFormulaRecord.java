package com.efraiser.test.db.model.dy;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

@Table("DY.DY_CHECK_FORMULA_RECORD")
public class DyCheckFormulaRecord extends BaseModelId {
	
	private static final long serialVersionUID = 1L;
	@Column
	private String tabcode;
	@Column("START_DATE")
	private String startDate;
	@Column("END_DATE")
	private String endDate;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("UPDATE_DATE")
	private String updateDate;
	@Column("CHECK_PROJECT")
	private String checkProject;
	@Column("REPORT_RATE")
	private String reportRate;
	@Column("LEFTVALUE")
	private int leftValue;
	@Column("RIGHTVALUE")
	private int rightValue;
	@Column("ELEMENT")
	private String element;
	@Column("LASTELEMENT")
	private String lastElement;
	@Column("CHECK_AREA")
	private String checkArea;
	@Column("CHECK_BRNO")
	private String checkBrno;
	@Column("FORMULA_ID")
	private String formulaId;
	@Column("ISREPLAY")
	private String isReplay;
	@Column("OPERATE")
	private String operate;

	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getCheckRisk() {
		return checkRisk;
	}

	public void setCheckRisk(String checkRisk) {
		this.checkRisk = checkRisk;
	}

	public String getTabcode() {
		return tabcode;
	}

	public void setTabcode(String tabcode) {
		this.tabcode = tabcode;
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

	public String getCheckProject() {
		return checkProject;
	}

	public void setCheckProject(String checkProject) {
		this.checkProject = checkProject;
	}

	public String getReportRate() {
		return reportRate;
	}

	public void setReportRate(String reportRate) {
		this.reportRate = reportRate;
	}

	public int getLeftValue() {
		return leftValue;
	}

	public void setLeftValue(int leftValue) {
		this.leftValue = leftValue;
	}

	public int getRightValue() {
		return rightValue;
	}

	public void setRightValue(int rightValue) {
		this.rightValue = rightValue;
	}

	public String getElement() {
		return element;
	}

	public void setElement(String element) {
		this.element = element;
	}

	public String getLastElement() {
		return lastElement;
	}

	public void setLastElement(String lastElement) {
		this.lastElement = lastElement;
	}

	public String getCheckArea() {
		return checkArea;
	}

	public void setCheckArea(String checkArea) {
		this.checkArea = checkArea;
	}
	

	public String getCheckBrno() {
		return checkBrno;
	}

	public void setCheckBrno(String checkBrno) {
		this.checkBrno = checkBrno;
	}

	public String getIsReplay() {
		return isReplay;
	}

	public void setIsReplay(String isReplay) {
		this.isReplay = isReplay;
	}

	public String getOperate() {
		return operate;
	}

	public void setOperate(String operate) {
		this.operate = operate;
	}

	public String getFormulaId() {
		return formulaId;
	}

	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}

}

	
	
