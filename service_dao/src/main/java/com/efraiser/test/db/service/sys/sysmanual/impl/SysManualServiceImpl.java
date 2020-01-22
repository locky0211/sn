package com.efraiser.test.db.service.sys.sysmanual.impl;

import com.efraiser.test.db.model.sys.SysManual;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysmanual.SysManualService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysManualServiceImpl extends BaseServiceImpl<SysManual> implements SysManualService {


   @Override
    public void deleteSysManual(String manualId) {
        this.delete(manualId);
    }

    @Override
    public boolean checkManual(String manualId, String column) {
        return super.count(Cnd.where(column, "=", manualId.trim())) > 0;
    }

    @Override
    public SysManual updateManualStatus(String manualId, String status) {
        Sql sql1 = Sqls.create("SELECT * FROM SAM.SYS_MANUAL WHERE M_ID=@manualId");
        sql1.params().set("manualId", manualId);
        SysManual manual = super.getObjectBySql(sql1, null, null);
        manual.setStatus(status);
        dao().updateIgnoreNull(manual);
        return manual;
    }

    @Override
    public SysManual getManualById(String manualId) {
        String sqlStr = "SELECT * FROM SAM.SYS_MANUAL WHERE M_ID=@manualId";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("manualId", manualId);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public List<SysManual> getManualListByStatus() {
        String sqlStr = "SELECT * FROM SAM.SYS_MANUAL WHERE M_STATUS='1'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

    @Override
    public SysManual getManualUrl (String manualId) {
        String sqlStr = "SELECT * FROM SAM.SYS_MANUAL WHERE M_ID='"+ manualId +"' AND M_STATUS='1'";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public List<SysManual> getSysManualList() {
        String sqlStr = "SELECT * FROM SAM.SYS_MANUAL WHERE PID IS NOT NULL AND PID <> ''";
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }
}
