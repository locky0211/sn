package com.efraiser.test.db.service.sys.sysorgsummer.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysOrgSummer;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SysOrgSummerServiceImpl extends BaseServiceImpl<SysOrgSummer> implements SysOrgSummerService {

    @Override
    public GridQueryPageResult getOrgSummerList(String sumCode, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from SAM.SYS_ORG_SUMMER where id is not null ";
        if (StrUtil.isNotNull(sumCode)) {
            cri.where().and("sumCode", "=", sumCode);
            sqlStr += "and SUM_CODE = '" + sumCode + "' ";
        }
        cri.getOrderBy().asc("SUM_CODE");
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(SysOrgSummer.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public void deleteSysOrgSummer(String id) {
        this.delete(id);
    }

    @Override
    public List<SysOrgSummer> findAllSumOrg() {
        String sqlStr = "SELECT DISTINCT GET_BM_NAME(SUM_CODE) AS SUM_NAME,SUM_CODE FROM SYS_ORG_SUMMER";
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

    @Override
    public SysOrgSummer getSysOrgSummerById(String id) {
        String sqlStr = "SELECT ID,SUM_CODE,SUB_CODE FROM SAM.SYS_ORG_SUMMER WHERE ID=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public int isSysOrgSummerExist(String sumCode, String subCode) {
        String sqlStr = "SELECT count(*) FROM SAM.SYS_ORG_SUMMER WHERE SUM_CODE='" + sumCode + "' AND SUB_CODE='" + subCode + "'";
        return super.singleInt(sqlStr);
    }

    @Override
    public void insert(String sumCode, String subCode) {
        SysOrgSummer sysOrgSummer = new SysOrgSummer();
        sysOrgSummer.setSumCode(sumCode);
        sysOrgSummer.setSubCode(subCode);
        dao().insert(sysOrgSummer);
    }

    @Override
    public int CheckParent(String brNo) {
        String sql = "SELECT COUNT(*) FROM SAM.SYS_BMGL WHERE P_ID='" + brNo + "'";
        return singleInt(sql);
    }


    @Override
    public String getbrNos(final String brNo) {
        String sqlStr = "SELECT SUB_CODE FROM SYS_ORG_SUMMER WHERE SUM_CODE = '" + brNo + "'";
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql)
                    throws SQLException {
                String s = new String();

                while (rs.next()) {
                    s = s + rs.getString(1) + ",";
                }
                if (s.equals("")) {
                    return brNo;
                } else {
                    s.substring(0, s.length() - 2);
                    return s;
                }
            }
        });
        this.dao().execute(sql);

        String[] brNos = sql.getString().split(",");
        List<String> list = new ArrayList<String>();
        list = Arrays.asList(brNos);
        String brnos = new String();
        for (String brno : list) {
            if (existZ(brno) == 0) {
                brnos = brnos + brno + ",";
            } else {
                brnos = brnos + getbrNos(brno) + ",";
            }
        }
        return brnos.substring(0, brnos.length());
    }

    @Override
    public List<String> getHzbrNos() {

        String sqlstr = "SELECT SUM_CODE FROM SAM.SYS_ORG_SUMMER GROUP BY SUM_CODE";
        Sql sql = Sqls.create(sqlstr);
        return super.getListStringBySqlStr(sql);
    }


    private int existZ(String brNo) {
        String sqlStr = "SELECT COUNT(*) FROM SYS_ORG_SUMMER WHERE SUM_CODE = '" + brNo + "'";
        return singleInt(sqlStr);
    }

    @Override
    public List<String> getHzjg(String gid) {
        String sqlStr = "SELECT ZD_NAME FROM SAM.SYS_GGZD WHERE G_ID='" + gid + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

}
