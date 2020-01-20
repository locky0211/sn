package com.efraiser.test.db.service.rd.rdtableorgans.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdTableOrgans;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdtableorgans.RdTableOrgansService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RdTableOrgansServiceImpl extends BaseServiceImpl<RdTableOrgans> implements RdTableOrgansService<RdTableOrgans> {


    @Override
    public void insertRdTableOrgas(String tableId, String rdTableOrgans) throws Exception {
        List<RdTableOrgans> tos = new ArrayList<RdTableOrgans>();
        List<String> to = StrUtil.convertToList(rdTableOrgans, ",");
        for (String t : to) {
            RdTableOrgans ro = new RdTableOrgans();
            ro.setTableId(tableId);
            ro.setOrganType(t);
            tos.add(ro);
        }
        this.dao().fastInsert(tos);
    }

    @Override
    public List<RdTableOrgans> getAll()
    {
        String sqlStr = "SELECT * FROM RD_TABLE_ORGANS";
        List<RdTableOrgans> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM RD_TABLE_ORGANS";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(RdTableOrgans item) {
        dao().insert(item);
    }
}
