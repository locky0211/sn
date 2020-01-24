package com.efraiser.test.project.vo;

import java.util.List;

public class Series {
	private String name;
	private List<SeriesData> data;
	private Integer yAxis;

	public Integer getyAxis() {
		return yAxis;
	}

	public void setyAxis(Integer yAxis) {
		this.yAxis = yAxis;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<SeriesData> getData() {
		return data;
	}

	public void setData(List<SeriesData> data) {
		this.data = data;
	}

}
