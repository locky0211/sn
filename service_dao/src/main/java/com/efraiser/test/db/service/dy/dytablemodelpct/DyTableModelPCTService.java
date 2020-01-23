package com.efraiser.test.db.service.dy.dytablemodelpct;

import com.efraiser.test.db.model.dy.DyTableModelPCT;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyTableModelPCTService extends BaseService {

    List<String> getDyTableModelPctList(String tableId);

    List<String> getDyTableModelPctList(String tabCode, String versionNo);

    List<DyTableModelPCT> getAll();

    void delAll();

    void add(DyTableModelPCT item);
}
