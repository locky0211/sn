package com.efraiser.test.db.service.dy.dyindicatordata;

import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsData;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyIndicatorDataService extends BaseService {

    /**
     * 初始化计算某机构指标信息
     *
     * @param brNo
     * @param sDate
     * @return
     */
    String initIndDate(String brNo, DyIndicatorsBasicInfo bInfo, String sDate);

    void insertIndDatas(List<DyIndicatorsData> indDatas) throws Exception;

    List<DyIndicatorsData> getDyIndDatas(String brNo, String dataDate, String indType, String userId);

    List<DyIndicatorsData> getDyIndDatasForTree(List<String> pIds);

    List<SysBmgl> getBrNoListsByInd(DyIndicatorsBasicInfo bi, String userId);

    void initIndDate(String brNo, String sDate);
}
