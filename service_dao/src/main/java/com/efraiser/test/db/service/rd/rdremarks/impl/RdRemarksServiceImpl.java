package com.efraiser.test.db.service.rd.rdremarks.impl;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdRemarks;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdremarks.RdRemarksService;
import com.efraiser.test.db.service.rd.rdreportinfo.RdReportInfoService;
import com.efraiser.test.db.service.rd.rdreportinfo.impl.RdReportInfoServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class RdRemarksServiceImpl extends BaseServiceImpl<RdRemarks> implements RdRemarksService {

    private Logger logger = LoggerFactory.getLogger(RdRemarksServiceImpl.class);

    @Autowired
    private RdReportInfoService rdReportInfoService;

    @Override
    public Boolean saveOrUpdateRdRemarks(List<RdRemarks> list) {
        try {
            this.dao().update(list);
            return true;
        } catch (Exception e) {
            logger.error("saveOrUpdateRdRemarks() error!", e);
            return false;
        }
    }

    @Override
    public String findRemarksById(String organNo, String reportDate, String reportNoStr, String formula) {
        String sqlStr = "SELECT REMARKS FROM RD_REMARKS WHERE ORGAN_NO=@organNo AND REPORT_DATE=@reportDate AND REPORT_NO_STR=@reportNoStr AND FORMULA=@formula  AND ( CANCEL_FLAG<>'1' OR CANCEL_FLAG IS NULL)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("organNo", getBmValueByName(organNo));
        sql.params().set("reportDate", reportDate);
        sql.params().set("reportNoStr", reportNoStr);
        sql.params().set("formula", formula);
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
    public String findFlagById(String organNo, String reportDate, String reportNoStr, String formula) {
        String sqlStr = "SELECT FLAG FROM RD_REMARKS WHERE ORGAN_NO=@organNo AND REPORT_DATE=@reportDate AND REPORT_NO_STR=@reportNoStr AND FORMULA=@formula AND ( CANCEL_FLAG<>'1' OR CANCEL_FLAG IS NULL)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("organNo", getBmValueByName(organNo));
        sql.params().set("reportDate", reportDate);
        sql.params().set("reportNoStr", reportNoStr);
        sql.params().set("formula", formula);
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
    public int getRdReportRemarksResultCountArea(String brNo, String reportDate, String tabType, String checkType, String userid, String flag, HttpServletRequest req) {
        if (brNo == null) {
            SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            String brons = findOrganNoByUserId(user.getUserId());
            brNo = delParentNode(brons);
        }
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        if (StrUtil.isNotNull(reportDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", "=", reportDate);
        }
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }

        if (StrUtil.isNotNull(checkType)) {
            criteria.where().and("TYPE", "=", checkType);
        }
        if (findRoleByuserId(userid).contains("rdReporter")) {
            criteria.where().and("REPORT_USER", "=", userid);
            /*criteria.where().and("FLAG", "<>", "2");*/
        }
        if (StrUtil.isNotNull(flag)) {
            criteria.where().and("FLAG", "=", flag);
        }
		/*if("6".equals(findRoleByuserId(userid))){
			criteria.where().and("FLAG", "=", "0");
		}*/
        criteria.where().and("(CANCEL_FLAG<>'1' OR CANCEL_FLAG IS NULL) AND 1", "=", "1");
        return super.count(criteria);
    }

    @Override
    public List<RdRemarks> getRdReportRemarksResultListArea(String brNo, String reportDate, String tabType, String sortField, String sortOrder, Pager pager, String formulaType, String userid, String flag, HttpServletRequest req) {
        if (brNo == null) {
            SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            String brons = findOrganNoByUserId(user.getUserId());
            brNo = delParentNode(brons);

        }
        Sql sql = Sqls
                .create("SELECT  ID,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,REPORT_USER,REPORT_REVIEWER,REMARKS,REVIEW_ADVICE,FLAG,C_USER,CHECK_RISK,FORMULA_MARK,CANCEL_FLAG FROM RD_REMARKS  $condition");
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        if (StrUtil.isNotNull(reportDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", "=", reportDate);
        }
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(formulaType)) {
            criteria.where().and("TYPE", "=", formulaType);
        }
        if (findRoleByuserId(userid).contains("rdReporter")) {
            criteria.where().and("REPORT_USER", "=", userid);
            /*criteria.where().and("FLAG", "<>", "2");*/
        }
        if (StrUtil.isNotNull(flag)) {
            criteria.where().and("FLAG", "=", flag);
        }
		/*if("6".equals(findRoleByuserId(userid))){
			criteria.where().and("FLAG", "=", "0");
		}*/
        criteria.getOrderBy().desc("ORGAN_NO");
        criteria.getOrderBy().desc("REPORT_DATE");
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }
        criteria.where().and("(CANCEL_FLAG<>'1' OR CANCEL_FLAG IS NULL) AND 1", "=", "1");

        List<RdRemarks> list = this.query(criteria, null);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getFormula().contains("em_")) {
                list.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getFormula()));
            }
        }
        return list;
    }

    private List<String> findRoleByuserId(String id) {
        String sqlStr = "SELECT ROLE_ID FROM SYS_USER_ROLE WHERE USER_ID=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new ArrayList<String>();
                while (rs.next()) {
                    list.add(rs.getString(1));
                }
                return list;
            }
        });
        this.dao().execute(sql);
        return sql.getList(String.class);
    }

    @Override
    public Boolean UpdateRdRemarks(List<RdRemarks> list) {
        try {
            this.dao().update(list);
            return true;
        } catch (Exception e) {
           logger.error("UpdateRdRemarks() error!",e);
            return false;
        }

    }

    @Override
    public void delRemarks(String organNo, String reportDate, String tabType) {
        String sqlStr = "DELETE FROM RD_REMARKS WHERE ORGAN_NO=@organNo AND REPORT_DATE=@reportDate AND TAB_TYPE=@tabType";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("organNo", organNo);
        sql.params().set("reportDate", reportDate);
        sql.params().set("tabType", tabType);
        this.dao().execute(sql);
    }

    private String findOrganNoByUserId(String userId) {
        String sqlStr = "SELECT DEP_ID FROM SYS_USER_DEP WHERE USER_ID=@userId";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                String str = "";
                while (rs.next()) {
                    str += "," + rs.getString(1);
                }
                return str.substring(1);
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

    private String delParentNode(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        List<String> list = getPidList();
        for (int i = 0; i < brnos.length; i++) {
            if (!list.contains(brnos[i])) {
                if (i == brnos.length - 1) {
                    brNo += "" + brnos[i] + "";
                } else {
                    brNo += "" + brnos[i] + ",";
                }
            }

        }

        return brNo;
    }

    @Override
    public RdRemarks fetchRdRemarksResultsForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,C_USER,CHECK_RISK,FORMULA_MARK,REMARKS,REVIEW_ADVICE FROM RD_REMARKS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    private String getBmValueByName(String name) {
        String sqlStr = "SELECT BM_CODE  FROM SYS_BMGL WHERE BM_NAME=@name";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("name", name);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        RdReportInfoServiceImpl rdReportInfoServiceImpl = (RdReportInfoServiceImpl)rdReportInfoService;
        rdReportInfoServiceImpl.dao().execute(sql);
        return sql.getString();
    }

    private List<String> getPidList() {
        String sqlStr = "SELECT DISTINCT P_ID FROM SYS_BMGL";
        Sql sql = Sqls.create(sqlStr);
        List<String> list = getListStringBySqlStr(sql);
        return list;
    }

    @Override
    public int getRdRemarksResultCountHistory(String brNo, String startDate, String tabType, String endDate, String userid, String flag, HttpServletRequest req) {

        Criteria criteria = Cnd.cri();
        if (StrUtil.isNotNull(brNo)) {
            criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        }
        if (StrUtil.isNotNull(startDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", ">=", startDate);
        }
        if (StrUtil.isNotNull(endDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", "<=", endDate);
        }
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (findRoleByuserId(userid).contains("5")) {
            criteria.where().and("REPORT_USER", "=", userid);
            /*criteria.where().and("FLAG", "<>", "2");*/
        }
        if (StrUtil.isNotNull(flag)) {
            criteria.where().and("FLAG", "=", flag);
        }
		/*if("6".equals(findRoleByuserId(userid))){
			criteria.where().and("FLAG", "=", "0");
		}*/
        return super.count(criteria);
    }

    @Override
    public List<RdRemarks> getRdRemarksResultListHistory(String brNo, String startDate, String tabType, String sortField, String sortOrder, Pager pager, String endDate, String userid, String flag, HttpServletRequest req) {
        Sql sql = Sqls
                .create("SELECT  ID,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,REPORT_USER,REPORT_REVIEWER,REMARKS,REVIEW_ADVICE,FLAG,C_USER,CANCEL_FLAG FROM RD_REMARKS  $condition");
        Criteria criteria = Cnd.cri();
        if (StrUtil.isNotNull(brNo)) {
            criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        }
        if (StrUtil.isNotNull(startDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", ">=", startDate);
        }
        if (StrUtil.isNotNull(endDate)) { //判断查询条件报表日期是否为空
            criteria.where().and("REPORT_DATE", "<=", endDate);
        }
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }

        if (findRoleByuserId(userid).contains("5")) {
            criteria.where().and("REPORT_USER", "=", userid);
            /*criteria.where().and("FLAG", "<>", "2");*/
        }
        if (StrUtil.isNotNull(flag)) {
            criteria.where().and("FLAG", "=", flag);
        }
		/*if("6".equals(findRoleByuserId(userid))){
			criteria.where().and("FLAG", "=", "0");
		}*/
        criteria.getOrderBy().desc("ORGAN_NO");
        criteria.getOrderBy().desc("REPORT_DATE");
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }

        return this.getListBySql(sql, criteria, pager);
    }
}
