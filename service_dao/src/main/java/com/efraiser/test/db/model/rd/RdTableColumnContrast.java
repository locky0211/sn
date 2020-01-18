package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;

/**
 * 行列对照
 * 
 * @author efraiser.xiaxiaofeng
 * 
 */
@Table("RD_TABLE_COLUMN_CONTRAST")
public class RdTableColumnContrast {
	public RdTableColumnContrast() {
	}

	public RdTableColumnContrast(String tId, int p, int c, int f) {
		this.tableId = tId;
		this.partNum = p;
		this.colNum = c;
		this.fileIndex = f;
	}

	@Column("TABLE_ID")
	private String tableId;
	@Column("PART_NUM")
	private Integer partNum;
	@Column("COL_NUM")
	private Integer colNum;
	@Column("FILE_INDEX")
	private Integer fileIndex;

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public Integer getPartNum() {
		return partNum;
	}

	public void setPartNum(Integer partNum) {
		this.partNum = partNum;
	}

	public Integer getColNum() {
		return colNum;
	}

	public void setColNum(Integer colNum) {
		this.colNum = colNum;
	}

	public Integer getFileIndex() {
		return fileIndex;
	}

	public void setFileIndex(Integer fileIndex) {
		this.fileIndex = fileIndex;
	}

}
