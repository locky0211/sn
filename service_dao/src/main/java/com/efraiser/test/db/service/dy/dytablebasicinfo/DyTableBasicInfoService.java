package com.efraiser.test.db.service.dy.dytablebasicinfo;

import com.efraiser.test.db.model.dy.DyTableBasicInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyTableBasicInfoService extends BaseService {

    void updateMaxVserionNo(String tableId);

    void deleteTableBaseicInfo(String tabCode);

    DyTableBasicInfo updateTableInfoStatus(String tabCode, String status);

    List<DyTableBasicInfo> getAll();

    void delAll();

    void add(DyTableBasicInfo item);

    List<DyTableBasicInfo> getTableBasicInfoList(String tabCode);


    DyTableBasicInfo getbyTabCode(String tabCode);
}
