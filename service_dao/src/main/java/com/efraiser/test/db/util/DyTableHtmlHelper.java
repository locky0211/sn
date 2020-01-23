package com.efraiser.test.db.util;


import com.efraiser.test.common.constant.DyTableConstants;

public class DyTableHtmlHelper {
	private String local;
	private String tdText;
	private String preStr;
	private boolean isNumber;

	public DyTableHtmlHelper() {
	}

	public DyTableHtmlHelper(String tdText) {
		this.tdText = tdText;
	}

	public DyTableHtmlHelper(String local, String tdText) {
		this.local = local;
		this.tdText = tdText;
	}

	public DyTableHtmlHelper(String local, String tdText, String preStr, String tdValue) {
		this.local = local;
		this.tdText = tdText;
		this.preStr = preStr;
		if (DyTableConstants.DATA_CELL.equals(tdValue)) {
			isNumber = true;
		}
	}

	public boolean isNumber() {
		return isNumber;
	}

	public void setNumber(boolean isNumber) {
		this.isNumber = isNumber;
	}

	public String getPreStr() {
		return preStr;
	}

	public void setPreStr(String preStr) {
		this.preStr = preStr;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public String getTdText() {
		return tdText;
	}

	public void setTdText(String tdText) {
		this.tdText = tdText;
	}
}
