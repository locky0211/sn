package com.efraiser.test.db.service.rd.rdtableorgans;

import com.efraiser.test.db.model.rd.RdTableOrgans;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdTableOrgansService<T> extends BaseService {

    void insertRdTableOrgas(String tableId, String rdTableOrgans) throws Exception;

    List<RdTableOrgans> getAll();

    void delAll();

    void add(RdTableOrgans item);
}
