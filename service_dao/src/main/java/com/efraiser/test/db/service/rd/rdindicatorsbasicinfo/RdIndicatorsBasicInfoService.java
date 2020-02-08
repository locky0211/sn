package com.efraiser.test.db.service.rd.rdindicatorsbasicinfo;

import com.efraiser.test.db.model.rd.RdIndicatorsBasicInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdIndicatorsBasicInfoService extends BaseService {

    RdIndicatorsBasicInfo updateIndicatorsBasicInfoValidFlag(String id, String validFlag);

    List<String> getPctCellLists() throws Exception;

    boolean checkIsOnly(String id, String idcolumn, String key, String keycolumn);

    List<RdIndicatorsBasicInfo> getRdIndBasicInfoLists(String brNo, String indType, String userId);

    void deleteIndInfo(String id) throws Exception;

    List<RdIndicatorsBasicInfo> getRdIndBasicInfoByAreaLists(String brNo, String area, String userId);
}
