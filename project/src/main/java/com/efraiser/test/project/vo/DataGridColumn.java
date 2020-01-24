package com.efraiser.test.project.vo;

/**
 * MiniUI的datagrid列对象辅助类<br>
 * 根据需要添加字段信息
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
public class DataGridColumn {
	private String field;
	private String width;
	private String align;
	private String headerAlign;
	private boolean allowSort;
	private String sortField;
	private String header;
	private String numberFormat;

	public String getNumberFormat() {
		return numberFormat;
	}

	public void setNumberFormat(String numberFormat) {
		this.numberFormat = numberFormat;
	}

	public String getAlign() {
		return align;
	}

	public void setAlign(String align) {
		this.align = align;
	}

	public String getSortField() {
		return sortField;
	}

	public void setSortField(String sortField) {
		this.sortField = sortField;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getHeaderAlign() {
		return headerAlign;
	}

	public void setHeaderAlign(String headerAlign) {
		this.headerAlign = headerAlign;
	}

	public boolean isAllowSort() {
		return allowSort;
	}

	public void setAllowSort(boolean allowSort) {
		this.allowSort = allowSort;
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

}
