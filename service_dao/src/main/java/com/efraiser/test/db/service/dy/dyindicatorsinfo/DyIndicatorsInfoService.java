package com.efraiser.test.db.service.dy.dyindicatorsinfo;

import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyIndicatorsInfoService extends BaseService {

    DyIndicatorsInfo getDyIndicatorsInfo(String indName, String versionNo);

    void addOrUpdateIndicatorsInfo(DyIndicatorsBasicInfo indicatorsBasicInfo, DyIndicatorsInfo indicatorsInfo, String model) throws Exception ;

    boolean isExistsIndicatorsVserionNo(String bId, String versionDate);

    List<DyIndicatorsInfo> getDicatorsList(String sysdate);

    List<DyIndicatorsBasicInfo> getIndListsForBrNo(String brNo);

    DyIndicatorsInfo getDyIndicatorsInfoByBid(String bId, String dataDate);
}
