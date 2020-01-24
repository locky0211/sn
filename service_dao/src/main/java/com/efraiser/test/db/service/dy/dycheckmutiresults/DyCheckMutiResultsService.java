package com.efraiser.test.db.service.dy.dycheckmutiresults;

import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckMutiResultsService extends BaseService {


    /**
     * 功能描述：获取需要校验的所有tablecodes
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param DEPARTMENT
     * @return
     * @author
     * @date 2017年7月13日
     * @modify log:
     */
    List<String> getTabCodeList(String brNo, String reportDate, String tabType, String DEPARTMENT);

    void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckMutiResults> checkResults) throws Exception;
}
