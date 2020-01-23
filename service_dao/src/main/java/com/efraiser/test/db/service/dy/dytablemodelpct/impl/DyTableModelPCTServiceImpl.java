package com.efraiser.test.db.service.dy.dytablemodelpct.impl;

import com.efraiser.test.db.model.dy.DyTableModelPCT;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyTableModelPCTServiceImpl extends BaseServiceImpl<DyTableModelPCT> implements DyTableModelPCTService {

    @Override
    public List<String> getDyTableModelPctList(String tableId) {
        Sql sql = Sqls.create("SELECT  FIELD_LOCATION FROM DY.DY_TABLE_MODEL_PCT WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getDyTableModelPctList(String tabCode, String versionNo) {
        Sql sql = Sqls
                .create("SELECT  FIELD_LOCATION FROM DY.DY_TABLE_MODEL_PCT p WHERE EXISTS (SELECT * FROM DY.DY_TABLE_INFO t WHERE  t.TABLE_ID=p.TABLE_ID AND t.TABCODE=@tabCode AND t.VERSION_NO=@versionNo)");
        sql.params().set("tabCode", tabCode);
        sql.params().set("versionNo", versionNo);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<DyTableModelPCT> getAll() {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_MODEL_PCT";
        List<DyTableModelPCT> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr = "DELETE FROM DY.DY_TABLE_MODEL_PCT";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyTableModelPCT item) {
        dao().insert(item);
    }

}
