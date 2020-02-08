package com.efraiser.test.db.service.rd.rdindicatorsinfo;

import com.efraiser.test.db.model.rd.RdIndicatorsBasicInfo;
import com.efraiser.test.db.model.rd.RdIndicatorsInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdIndicatorsInfoService extends BaseService {


    RdIndicatorsInfo getRdIndicatorsInfo(String indName, String versionNo);

    void addOrUpdateIndicatorsInfo(RdIndicatorsBasicInfo indicatorsBasicInfo, RdIndicatorsInfo indicatorsInfo, String model) throws Exception;

    boolean isExistsIndicatorsVserionNo(String bId, String versionDate);

    List<RdIndicatorsInfo> getDicatorsList(String sysdate);

    List<RdIndicatorsBasicInfo> getIndListsForBrNo(String brNo);

    RdIndicatorsInfo getRdIndicatorsInfoByBid(String bId, String dataDate);
}
