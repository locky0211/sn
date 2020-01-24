package com.efraiser.test.db.service.dy.dyindicatorsbasicinfo;

import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyIndicatorsBasicInfoService extends BaseService {


    DyIndicatorsBasicInfo updateIndicatorsBasicInfoValidFlag(String id, String validFlag);

    List<String> getPctCellLists() throws Exception;


    boolean checkIsOnly(String id, String idcolumn, String key, String keycolumn);

    List<DyIndicatorsBasicInfo> getDyIndBasicInfoLists(String brNo, String indType, String userId);

    void deleteIndInfo(String id) throws Exception;
}
