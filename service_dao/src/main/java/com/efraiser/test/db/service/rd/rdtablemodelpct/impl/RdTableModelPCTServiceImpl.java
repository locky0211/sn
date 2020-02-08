package com.efraiser.test.db.service.rd.rdtablemodelpct.impl;

import com.efraiser.test.db.model.rd.RdTableModelPCT;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RdTableModelPCTServiceImpl extends BaseServiceImpl<RdTableModelPCT> implements RdTableModelPCTService {


    @Override
    public List<String> getRdTableModelPctList(String tableId) {
        Sql sql = Sqls.create("SELECT  FIELD_LOCATION FROM RD_TABLE_MODEL_PCT WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getRdTableModelPctList(String tabCode, String versionNo) {
        Sql sql = Sqls
                .create("SELECT  FIELD_LOCATION FROM RD_TABLE_MODEL_PCT p WHERE EXISTS (SELECT * FROM RD_TABLE_INFO t WHERE  t.TABLE_ID=p.TABLE_ID AND t.TABCODE=@tabCode AND t.VERSION_NO=@versionNo)");
        sql.params().set("tabCode", tabCode);
        sql.params().set("versionNo", versionNo);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<RdTableModelPCT> getAll()
    {
        String sqlStr = "SELECT * FROM RD_TABLE_MODEL_PCT";
        List<RdTableModelPCT> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM RD_TABLE_MODEL_PCT";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(RdTableModelPCT item) {
        dao().insert(item);
    }
}
