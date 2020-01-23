package com.efraiser.test.db.service.dy.dytableorgans.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyTableOrgans;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dytableorgans.DyTableOrgansService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DyTableOrgansServiceImpl extends BaseServiceImpl<DyTableOrgans> implements DyTableOrgansService {


    @Override
    public void insertDyTableOrgas(String tableId, String rdTableOrgans) throws Exception {
        List<DyTableOrgans> tos = new ArrayList<DyTableOrgans>();
        List<String> to = StrUtil.convertToList(rdTableOrgans, ",");
        for (String t : to) {
            DyTableOrgans ro = new DyTableOrgans();
            ro.setTableId(tableId);
            ro.setOrganType(t);
            tos.add(ro);
        }
        this.dao().fastInsert(tos);
    }

    @Override
    public List<DyTableOrgans> getAll()
    {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_ORGANS";
        List<DyTableOrgans> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM DY.DY_TABLE_ORGANS";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyTableOrgans item) {
        dao().insert(item);
    }
}
