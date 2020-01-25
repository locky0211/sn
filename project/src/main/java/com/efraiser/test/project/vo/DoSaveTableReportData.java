package com.efraiser.test.project.vo;

import com.efraiser.test.db.model.dy.DyReportData;

import java.io.Serializable;
import java.util.List;

public class DoSaveTableReportData implements Serializable {

    private String reportId;
    private String tableId;

    private List<DyReportData> rds;

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getTableId() {
        return tableId;
    }

    public void setTableId(String tableId) {
        this.tableId = tableId;
    }

    public List<DyReportData> getRds() {
        return rds;
    }

    public void setRds(List<DyReportData> rds) {
        this.rds = rds;
    }
}
