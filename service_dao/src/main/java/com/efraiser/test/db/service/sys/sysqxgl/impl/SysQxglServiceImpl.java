package com.efraiser.test.db.service.sys.sysqxgl.impl;


import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysQxgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysqxgl.SysQxglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysQxglServiceImpl extends BaseServiceImpl<SysQxgl> implements SysQxglService {


    @Override
    public boolean checkQxGl(String qxId, String column) {
        return super.count(Cnd.where(column, "=", qxId.trim())) > 0;
    }

    @Override
    public void deleteQxgl(String qxId) throws Exception {
        String sqlStr = "WITH report(qx_id, p_id) AS (SELECT qx_id, p_id FROM SYS_QXGL WHERE qx_id = @qxId UNION ALL SELECT b.qx_id, b.p_id FROM report a, SYS_QXGL b WHERE b.p_id = a.qx_id) select qx_id from report";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("qxId", qxId);
        List<String> qxIdList = super.getListStringBySqlStr(sql);
        super.clear(Cnd.wrap(" qx_id in(" + StrUtil.convertJoin(qxIdList, null) + ")"));
    }


    @Override
    public List<SysQxgl> getSysQxListForPid(String qxId) {
        if (StrUtil.isNotNull(qxId)) {
            String sqlStr = "WITH report(qx_id, p_id) AS (SELECT qx_id, p_id FROM SYS_QXGL WHERE qx_id = @qxId UNION ALL SELECT b.qx_id, b.p_id FROM report a, SYS_QXGL b WHERE b.p_id = a.qx_id) select qx_id from report";
            Sql sql = Sqls.create(sqlStr);
            sql.params().set("qxId", qxId);
            List<String> qxIdList = super.getListStringBySqlStr(sql);
            return super.query(Cnd.wrap(" qx_id not in (" + StrUtil.convertJoin(qxIdList, null) + ")"), null);
        } else {
            return super.query(null, null);
        }

    }

    @Override
    public List<SysQxgl> getQxByUserId(String userId) {

        String sqlStr = "SELECT * FROM SYS_QXGL AS q WHERE q.FLAG = '1' AND EXISTS (SELECT * FROM SYS_JSGL_QXGL AS jq WHERE EXISTS (SELECT ROLE_ID FROM SYS_USER_ROLE AS ur WHERE ur.USER_ID =@userId AND ur.ROLE_ID = jq.j_id) AND jq.q_id = q.QX_ID) ORDER BY SORT_NUM";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }
}
