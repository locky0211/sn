package com.efraiser.test.db.service.rd.rdreportmiddata;

import com.efraiser.test.db.model.rd.RdReportMidData;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdReportMidDataService extends BaseService {

    /**
     * 功能描述：根据reportId查询一张表的数据先根据行排序再根据列排序
     *
     * @param reportId
     * @return
     * @author
     * @date 2017年9月23日
     * @modify log:
     */
    List<RdReportMidData> getRdReportMidDataList(String reportId);
}
