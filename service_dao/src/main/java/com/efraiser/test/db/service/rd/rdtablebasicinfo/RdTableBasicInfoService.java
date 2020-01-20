package com.efraiser.test.db.service.rd.rdtablebasicinfo;

import com.efraiser.test.db.model.rd.RdTableBasicInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdTableBasicInfoService<T> extends BaseService {

    void updateMaxVserionNo(String tableId);


    void deleteTableBaseicInfo(String tabCode);

    RdTableBasicInfo updateTableInfoStatus(String tabCode, String status);

    List<RdTableBasicInfo> getAll();

    void delAll();

    void add(com.efraiser.test.db.model.rd.RdTableBasicInfo item);
}
