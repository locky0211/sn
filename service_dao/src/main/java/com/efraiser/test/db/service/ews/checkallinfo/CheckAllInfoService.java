package com.efraiser.test.db.service.ews.checkallinfo;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.CheckAllInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckAllInfoService extends BaseService {


    GridQueryPageResult getResultList(String brNo, String reportDate, int pageIndex, int pageSize);

    /**
     * 功能描述：获取状态为0或1的checkallinfo
     *
     * @return
     * @author
     * @date 2017年6月3日
     * @modify log:
     */
    List<CheckAllInfo> getCheckAllInfoList();

    GridQueryPageResult getCheckAllInfo(int pageIndex, int pageSize);

    GridQueryPageResult getCheckAllInfo(String brNo, String reportDate, String repCode, String version,
                                        int pageIndex, int pageSize);


    GridQueryPageResult getCheckAllInfo2(int pageIndex, int pageSize);

    List<CheckAllInfo> getCheckAllInfoByBrNo(String[] brNos);

    void addCheckAllInfo(String brNo, String reportDate, String formulaType, String formulaId, String version,
                         String repCode);

    CheckAllInfo updateCheckAllInfo(CheckAllInfo checkAllInfo, boolean flag);


    List<CheckAllInfo> getCheckAllInfoByBrNo(String brNo, String reportDate, String version, String repCode);
}
