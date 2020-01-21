package com.efraiser.test.db.service.sys.sysbmgl.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class SysBmglServiceImpl extends BaseServiceImpl<SysBmgl> implements SysBmglService {


    @Override
    public void deleteBmgl(String bmCode) throws Exception {
        String sqlStr = "WITH report(bm_code, p_Id) AS  (  SELECT bm_code, p_Id  FROM  SYS_BMGL WHERE bm_code = @bmCode  UNION ALL SELECT b.bm_code, b.p_Id FROM report a, SYS_BMGL b WHERE b.p_Id = a.bm_code ) select bm_code from report";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("bmCode", bmCode);
        List<String> bmCodeList = super.getListStringBySqlStr(sql);
        super.clear(Cnd.wrap(" bm_code in(" + StrUtil.convertJoin(bmCodeList, null) + ")"));
    }

    @Override
    public boolean checkIsParant(String bmCode) {
        try {
            int count = super.count(Cnd.where("P_ID", "=", bmCode));
            if (count > 0) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;

    }

    @Override
    public List<SysBmgl> getSysBmListForPid(String bmCode) {
        if (StrUtil.isNotNull(bmCode)) {
            String sqlStr = "WITH report(bm_code, p_Id) AS  (  SELECT bm_code, p_Id  FROM  SYS_BMGL WHERE bm_code = @bmCode  UNION ALL SELECT b.bm_code, b.p_Id FROM report a, SYS_BMGL b WHERE b.p_Id = a.bm_code ) select bm_code from report";
            Sql sql = Sqls.create(sqlStr);
            sql.params().set("bmCode", bmCode);
            List<String> bmCodeList = super.getListStringBySqlStr(sql);
            return super.query(Cnd.wrap(" bm_code not in(" + StrUtil.convertJoin(bmCodeList, null) + ")"), null);
        } else {
            return super.query(null, null);
        }
    }


    @Override
    public boolean checkbmCode(String bmCode) {
        return super.count(Cnd.where("bmCode", "=", bmCode)) > 0 ? false : true;
    }

    @Override
    public boolean checkBmName(String bmName) {
        return super.count(Cnd.where("bmName", "=", bmName)) > 0 ? false : true;
    }

    @Override
    public List<SysBmgl> getSysBmList(String bmCode, String bmName, String bmType, String userId) {
        StringBuffer s = new StringBuffer();
        if (StrUtil.isNotNull(bmCode)) {
            s.append(" and BM_CODE like '" + bmCode + "%'");
        }
        if (StrUtil.isNotNull(bmName)) {
            s.append(" and BM_NAME like '%" + bmName + "%'");
        }
        if (StrUtil.isNotNull(bmType)) {
            s.append(" and BM_TYPE ='" + bmType + "' ");

        }
        String sqlStr = "";
        if ("admin".equals(userId)) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM FROM SAM.SYS_BMGL bm where 1=1  "
                    + s.toString() + "   ORDER BY SORT_NUM";
        } else {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM FROM SAM.SYS_BMGL bm where  EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID='"
                    + userId + "' AND ud.dep_id=bm.BM_CODE) " + s.toString() + "   ORDER BY SORT_NUM";
        }
        return super.getListBySql(sqlStr, null, null);
    }

    @Override
    public List<SysBmgl> getSysBmListByUserId(String userId, String pid, String bmCategory) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) ORDER BY sort_num";
        if (pid != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND (P_ID='"
                    + pid + "' OR BM_CODE='BF_HZ') ORDER BY sort_num";
        }
        if (bmCategory != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND bm.BM_CATEGORY='" + bmCategory + "' ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public Boolean addVisualJG(String brNo, String brnoName) {
        brNo = brNo.replace(",", "/");
        String sqlStr = "INSERT INTO SYS_BMGL VALUES(@brNo,@brnoName,'BF_HZ','法人','R',NULL,'','1')";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("brNo", brNo);
        sql.params().set("brnoName", brnoName);
        try {
            this.dao().execute(sql);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }

    }

    @Override
    public String findBmNameByBmCode(String bmCode) {
        String sqlStr = "SELECT BM_NAME FROM SYS_BMGL WHERE BM_CODE='" + bmCode + "'";
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

    @Override
    public String findPidByBmcode(String bmCode) {
        String sqlStr = "SELECT P_ID FROM SYS_BMGL WHERE BM_CODE=@bmCode";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("bmCode", bmCode);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

    @Override
    public List<SysBmgl> getSysBmListByUserIdDJZ(String userId, String pid) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND bm.BM_CATEGORY='BF' ORDER BY sort_num";
        if (pid != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND P_ID='"
                    + pid + "'  AND AND bm.BM_CATEGORY='BF' ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public List<SysBmgl> getSysBmListByUserIdForRd(String userId, String pid) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND (bm.BM_CATEGORY='法人' or bm.BM_CATEGORY='分支' or bm.BM_CATEGORY is null or bm.BM_CATEGORY = '' OR bm.BM_CATEGORY = '0' ) ORDER BY sort_num";
        if (pid != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND P_ID='"
                    + pid + "' AND (bm.BM_CATEGORY='法人' or bm.BM_CATEGORY='分支' or bm.BM_CATEGORY is null or bm.BM_CATEGORY = '' OR bm.BM_CATEGORY = '0' ) ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public List<String> getDJZJG() {
        String sqlStr = "SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DJZHZCZB'";
        Sql sql = Sqls.create(sqlStr);
        List<String> list;
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new ArrayList<>();
                while (rs.next()) {
                    String zdName = rs.getString(1);
                    for (String str : zdName.split(",")) {
                        list.add(str);
                    }
                }
                return list;
            }
        });
        this.dao().execute(sql);
        list = sql.getList(String.class);
        return list;
    }

    @Override
    public Object getSysBmListByBmCategory(String userId, String bmCategory) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) ORDER BY sort_num";
        if (bmCategory != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND bm.BM_CATEGORY IN ("
                    + bmCategory + ") ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public List<SysBmgl> getSysBmListByUserIdAndTabcode(String userId,
                                                        List<RdTableInfo> rdTableInfo) {
        String bmType = "";
        String bmCategory = rdTableInfo.get(0).getTabBrType();
        for (int i = 0; i < rdTableInfo.size(); i++) {
            bmType += "," + rdTableInfo.get(i).getReportOrganTypes();
        }
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID='" + userId + "' AND ud.dep_id=bm.BM_CODE AND(BM_TYPE IS NULL OR BM_TYPE='' OR (BM_TYPE IN (" + StrUtil.convertQuoMarksSQL(bmType.substring(1)) + ") AND BM_CATEGORY='" + bmCategory + "'))) ORDER BY sort_num ";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public List<SysBmgl> getSysBmListByUserIdAndTabcode(String userId,
                                                        RdTableInfo rdTableInfo) {
        String bmType = rdTableInfo.getReportOrganTypes();
        String bmCategory = rdTableInfo.getTabBrType();
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID='" + userId + "' AND ud.dep_id=bm.BM_CODE AND(BM_TYPE IS NULL OR BM_TYPE='' OR (BM_TYPE IN (" + StrUtil.convertQuoMarksSQL(bmType) + ") AND BM_CATEGORY='" + bmCategory + "'))) ORDER BY sort_num ";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public Object getSysBmListByBmCategoryIgnoreUserId(String bmCategory) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.dep_id=bm.BM_CODE) ORDER BY sort_num";
        if (bmCategory != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.dep_id=bm.BM_CODE) AND BM_CATEGORY IN ("
                    + bmCategory + ") ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

    @Override
    public Object getSysBmListByBmCode(String userId, String bmCode) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId and dep_id like '" + bmCode + "%')AND BM_CODE like '" + bmCode + "%' ORDER BY sort_num";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    public Integer isExistBmCategory(String bmCategory) {
        String sqlStr = "SELECT count(*) FROM SYS_BMGL WHERE BM_CATEGORY=" + bmCategory + "";
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getInt();
    }

    @Override
    public Object getSysBmListByIsExistBmCategory(String userId, String bmCategory) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) ORDER BY sort_num";
        Integer number = isExistBmCategory(bmCategory);
        if (number != 0) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND bm.BM_CATEGORY IN ("
                    + bmCategory + ") ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    /**
     * 功能描述：上海机构查询，通过 BM_AREA='SHS' 进行查询
     *
     * @param userId
     * @param pid
     * @return
     * @author
     * @date 2017年12月25日
     * @modify log:
     */
    @Override
    public List<SysBmgl> getSysBmListByUserId_SH(String userId, String pid) {
        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND bm.BM_AREA='SHS' ORDER BY sort_num";
        if (pid != null) {
            sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL bm WHERE EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.dep_id=bm.BM_CODE) AND P_ID='"
                    + pid + "'  AND bm.BM_AREA='SHS' ORDER BY sort_num";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public List<String> getDepByUserIdAndBmCategory(String userId, String BmCategory) {
        String sqlStr = "SELECT  BM_CODE FROM SYS_BMGL  WHERE  BM_CODE IN(SELECT DEP_ID FROM SYS_USER_DEP WHERE USER_ID = '" + userId + "') AND BM_CATEGORY = '" + BmCategory + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

//
//    public Object getSysBmListByIsExistBmCategoryBySls(String userId,String bmCategory) {
//
//        List<SysBmgl> bmgls=new ArrayList<SysBmgl>();
//        List<InsideOrganInfo> infos=insideOrganInfoDao.dao().query(InsideOrganInfo.class, null);
//        for(InsideOrganInfo info:infos){
//            SysBmgl sysBmgls=new SysBmgl();
//            sysBmgls.setBmCode(info.getOrganCode());
//            sysBmgls.setBmName(info.getOrganName());
//            /*sysBmgls.setpId("FJG");*/
//            sysBmgls.setSortNum("0");
//            bmgls.add(sysBmgls);
//        }
//        return bmgls;
//    }


    @Override
    public List<SysBmgl> getXNJGByPid(String pId) {
        String sqlStr = "SELECT * FROM SYS_BMGL WHERE P_ID='" + pId + "'";

        return getListBySql(Sqls.create(sqlStr));
    }

    @Override
    public void deleteBrno(String[] bmCode) {
        String sqlStr = "DELETE FROM SYS_BMGL WHERE BM_CODE in(@bmCode)";
        Sql sql = Sqls.create(sqlStr);
        sql.setParam("bmCode", bmCode);
        dao().execute(sql);
    }

    @Override
    public List<SysBmgl> getSysBmListForBm() {
        return query(Cnd.where("BM_CODE", "LIKE", "BM%"), null);
    }

    @Override
    public List getBFHZJG() {

        String sqlStr = "SELECT BM_CODE,BM_NAME,P_ID,BM_TYPE,GET_GGZD_NAME(BM_TYPE,'SYS_BM_TYPE') as BM_TYPE_NAME,SORT_NUM  FROM SYS_BMGL WHERE BM_TYPE='X' ORDER BY sort_num";
        Sql sql = Sqls.create(sqlStr);

        return getListBySql(sql);
    }
}
