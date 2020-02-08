package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;

/**
 * @author
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.rd.model]
 * @ClassName: [RdReportMidPctHelper]
 * 类描述：上海省局百分比单元格处理帮助类
 * @date 2017年9月25日
 * @modify log:
 */
public class RdReportMidPctHelper {
    @Column("TABLE_ID")
    private String tableId;
    @Column("REPORT_ID")
    private String reportId;
    @Column("TABCODE")
    private String tabCode;
    @Column("FIELD_LOCATION")
    private String fieldLocation;

    public String getTableId() {
        return tableId;
    }

    public void setTableId(String tableId) {
        this.tableId = tableId;
    }

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getTabCode() {
        return tabCode;
    }

    public void setTabCode(String tabCode) {
        this.tabCode = tabCode;
    }

    public String getFieldLocation() {
        return fieldLocation;
    }

    public void setFieldLocation(String fieldLocation) {
        this.fieldLocation = fieldLocation;
    }
}
