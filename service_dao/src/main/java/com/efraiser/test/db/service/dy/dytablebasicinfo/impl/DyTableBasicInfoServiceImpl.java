package com.efraiser.test.db.service.dy.dytablebasicinfo.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyTableBasicInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dytablebasicinfo.DyTableBasicInfoService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyTableBasicInfoServiceImpl extends BaseServiceImpl<DyTableBasicInfo> implements DyTableBasicInfoService {


    @Override
    public void updateMaxVserionNo(String tableId) {
        String sqlStr = "UPDATE DY.DY_TABLE_BASIC_INFO rdi SET VERSION_NO=(SELECT max(to_number(version_no)) FROM DY.DY_TABLE_INFO ri WHERE ri.TABLE_ID=@tableId AND ri.TABCODE=rdi.TABCODE) ";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tableId", tableId);
        super.dao().execute(sql);
    }

    @Override
    public void deleteTableBaseicInfo(String tabCode) {
        this.clear(Cnd.where("tabCode", "=", tabCode));
    }

    @Override
    public DyTableBasicInfo updateTableInfoStatus(String tabCode, String status) {
        DyTableBasicInfo rtb = this.fetch(tabCode);
        rtb.setStatus(status);
        super.dao().updateIgnoreNull(rtb);
        return rtb;
    }

    @Override
    public List<DyTableBasicInfo> getAll() {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_BASIC_INFO";
        List<DyTableBasicInfo> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr = "DELETE FROM DY.DY_TABLE_BASIC_INFO";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyTableBasicInfo item) {
        dao().insert(item);
    }

    @Override
    public List<DyTableBasicInfo> getTableBasicInfoList(String tabCode) {
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(tabCode)) {
            cri.where().and("tabcode", "like", tabCode + "%");
        }
        cri.getOrderBy().asc("tabcode");

        return query(cri, null);
    }

    @Override
    public DyTableBasicInfo getbyTabCode(String tabCode) {
        return fetch(Cnd.where("TABCODE", "=", tabCode));
    }
}
