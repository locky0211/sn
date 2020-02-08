package com.efraiser.test.db.service.rd.rdreportmidinfo;

import com.efraiser.test.db.model.rd.RdReportMidInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdReportMidInfoService extends BaseService {

    /**
     * 功能描述：获取所有reportMidInfo对象
     *
     * @return
     * @author
     * @date 2017年9月23日
     * @modify log:
     */
    List<RdReportMidInfo> getReportMidInfoList();
}
