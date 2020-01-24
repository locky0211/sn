package com.efraiser.test.project.vo;

import java.util.List;

public class DataGridHelper {
	private List<DataGridColumn> dataGridColumns;
	private List<DyIndDataExcelHelper> rdExcelHelpers;

	public List<DataGridColumn> getDataGridColumns() {
		return dataGridColumns;
	}

	public void setDataGridColumns(List<DataGridColumn> dataGridColumns) {
		this.dataGridColumns = dataGridColumns;
	}

	public List<DyIndDataExcelHelper> getRdExcelHelpers() {
		return rdExcelHelpers;
	}

	public void setRdExcelHelpers(List<DyIndDataExcelHelper> rdExcelHelpers) {
		this.rdExcelHelpers = rdExcelHelpers;
	}

}
