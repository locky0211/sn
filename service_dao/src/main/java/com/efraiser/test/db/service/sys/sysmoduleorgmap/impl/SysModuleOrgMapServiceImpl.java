package com.efraiser.test.db.service.sys.sysmoduleorgmap.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysModuleOrgMap;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysmoduleorgmap.SysModuleOrgMapService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

@Service
public class SysModuleOrgMapServiceImpl extends BaseServiceImpl<SysModuleOrgMap> implements SysModuleOrgMapService {

   @Override
    public GridQueryPageResult getModuleOrgMapList(int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from SAM.SYS_MODULE_ORG_MAP where id is not null ";

        cri.getOrderBy().asc("OLDMODULE");
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(SysModuleOrgMap.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public void deleteSysModuleOrgMap(String id) {
        this.delete(id);
    }

    @Override
    public void insert(String oldModule, String oldOrg, String newModule, String newOrg) {
        SysModuleOrgMap sysModuleOrgMap = new SysModuleOrgMap();
        sysModuleOrgMap.setOldModule(oldModule);
        sysModuleOrgMap.setOldOrg(oldOrg);
        sysModuleOrgMap.setNewModule(newModule);
        sysModuleOrgMap.setNewOrg(newOrg);
        dao().insert(sysModuleOrgMap);
    }

    @Override
    public SysModuleOrgMap getSysModuleOrgListById(String id) {
        String sqlStr = "SELECT ID,OLDMODULE,OLDORG,NEWMODULE,NEWORG FROM SAM.SYS_MODULE_ORG_MAP WHERE ID=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void updateSysModuleOrgMap(SysModuleOrgMap sysModuleOrgMap) {
        dao().updateIgnoreNull(sysModuleOrgMap);
    }

    @Override
    public void addOneSysModuleOrgMap(SysModuleOrgMap sysModuleOrgMap) {
        dao().insert(sysModuleOrgMap);
    }

    @Override
    public SysModuleOrgMap getNewOrg(String oldModule, String oldOrg, String newModule) {
        String sqlStr = "SELECT * FROM SAM.SYS_MODULE_ORG_MAP WHERE OLDMODULE=@oldModule AND OLDORG=@oldOrg AND NEWMODULE=@newModule";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("oldModule", oldModule);
        sql.params().set("oldOrg", oldOrg);
        sql.params().set("newModule", newModule);
        return getObjectBySql(sql, null, null);
    }
}
