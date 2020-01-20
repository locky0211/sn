package com.efraiser.test.db.service.rd.rdtablemodelpct;

import com.efraiser.test.db.model.rd.RdTableModelPCT;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdTableModelPCTService<T> extends BaseService {


    List<String> getRdTableModelPctList(String tableId);


    List<String> getRdTableModelPctList(String tabCode, String versionNo);


    List<RdTableModelPCT> getAll();

    void delAll();

    void add(RdTableModelPCT item);
}
