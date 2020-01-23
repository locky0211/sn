package com.efraiser.test.db.service.dy.dytableorgans;

import com.efraiser.test.db.model.dy.DyTableOrgans;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyTableOrgansService extends BaseService {


    void  insertDyTableOrgas(String tableId, String rdTableOrgans) throws Exception;

    List<DyTableOrgans> getAll();

    void delAll();

    void add(DyTableOrgans item);
}
