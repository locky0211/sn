package com.efraiser.test.db.service.rd.rdreportmidpcthelper;

import com.efraiser.test.db.model.rd.RdReportMidPctHelper;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdReportMidPctHelperService extends BaseService {

    /**
     * 查询报表百分比单元格情况
     * 功能描述：
     *
     * @return
     * @author
     * @date 2017年9月25日
     * @modify log:
     */
    List<RdReportMidPctHelper> getPctHelper();


    /**
     * 功能描述：根据reportId查询百分比单元格
     *
     * @param reportId
     * @return
     * @author
     * @date 2017年10月13日
     * @modify log:
     */
    List<RdReportMidPctHelper> getPctHelperByReportId(String reportId);
}
