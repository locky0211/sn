package com.efraiser.test.common.util;


import java.util.List;

public class GridQueryPageResult {
	private int total;
	private List<?> data;
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public List<?> getData() {
		return data;
	}
	public void setData(List<?> data) {
		this.data = data;
	}
}
