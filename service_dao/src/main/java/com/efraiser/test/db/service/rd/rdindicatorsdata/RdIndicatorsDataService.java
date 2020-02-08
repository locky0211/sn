package com.efraiser.test.db.service.rd.rdindicatorsdata;

import com.efraiser.test.db.model.rd.RdIndicatorsBasicInfo;
import com.efraiser.test.db.model.rd.RdIndicatorsData;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdIndicatorsDataService extends BaseService {

    /**
     * 初始化计算某机构指标信息
     *
     * @param brNo
     * @param sDate
     * @return
     */
    String initIndDate(String brNo, RdIndicatorsBasicInfo bInfo, String sDate);

    void insertIndDatas(List<RdIndicatorsData> indDatas) throws Exception;

    List<RdIndicatorsData> getRdIndDatas(String brNo, String dataDate, String indType, String userId);

    List<RdIndicatorsData> getRdIndDatasForTree(List<String> pIds);

    List<SysBmgl> getBrNoListsByInd(RdIndicatorsBasicInfo bi, String userId);

    void initIndDate(String brNo, String sDate);
}
