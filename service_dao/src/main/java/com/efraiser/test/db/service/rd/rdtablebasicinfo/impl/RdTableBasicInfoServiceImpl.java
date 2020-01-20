package com.efraiser.test.db.service.rd.rdtablebasicinfo.impl;

import com.efraiser.test.db.model.rd.RdTableBasicInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdtablebasicinfo.RdTableBasicInfoService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RdTableBasicInfoServiceImpl extends BaseServiceImpl<RdTableBasicInfo> implements RdTableBasicInfoService<RdTableBasicInfo> {


    @Override
    public void updateMaxVserionNo(String tableId) {
        String sqlStr = "UPDATE RD_TABLE_BASIC_INFO rdi SET VERSION_NO=(SELECT max(to_number(version_no)) FROM RD_TABLE_INFO ri WHERE ri.TABLE_ID=@tableId AND ri.TABCODE=rdi.TABCODE) ";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tableId", tableId);
        super.dao().execute(sql);
    }

    @Override
    public void deleteTableBaseicInfo(String tabCode) {
        this.clear(Cnd.where("tabCode", "=", tabCode));
    }

    @Override
    public RdTableBasicInfo updateTableInfoStatus(String tabCode, String status) {
        RdTableBasicInfo rtb = this.fetch(tabCode);
        rtb.setStatus(status);
        super.dao().updateIgnoreNull(rtb);
        return rtb;
    }

    @Override
    public List<RdTableBasicInfo> getAll()
    {
        String sqlStr = "SELECT * FROM RD_TABLE_BASIC_INFO";
        List<RdTableBasicInfo> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM RD_TABLE_BASIC_INFO";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(RdTableBasicInfo item) {
        dao().insert(item);
    }
}
