package com.efraiser.test.db.service.dy.dycheckresultshelper.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckresultshelper.DyCheckResultsHelperService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyCheckResultsHelperServiceImpl  extends BaseServiceImpl<DyCheckResultsHelper> implements DyCheckResultsHelperService {

    @Override
    public List<DyCheckResultsHelper> getDyReportCheckResultListAreaYidong(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String checkType, String checkArea, String cUser) {
        Sql sql = Sqls
                .create("SELECT  a.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(a.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,a.C_USER,b.CHECK_PROJECT,b.VALUE_AREA,b.REPORT_RATE,b.FORMULA_MODEL FROM DY.DY_CHECK_RESULTS a LEFT JOIN DY.DY_CHECK_FORMULA b ON a.FORMULA=b.CHECK_FORMULA AND a.C_USER=b.C_USER  $condition");
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if (StrUtil.isNotNull(cUser)) {
            criteria.where().and("a.C_USER", "IN", "'admin','"+cUser+"'");
        }

        if(("2".equals(checkType))){
            criteria.where().and("TYPE", "=", checkType);
        }
        //校验范围区分(表内校验,表外校验)
        if(("1".equals(checkArea))){
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        }else if(("2").equals(checkArea)){
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }

        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }
        criteria.getOrderBy().asc("ORGAN_NO,REPORT_NO_STR,length(ELEMENT),ELEMENT");
        criteria.getOrderBy().desc("REPORT_RATE");

        return this.getListBySql(sql, criteria, pager);
    }

    @Override
    public DyCheckResultsHelper fetchDyCheckResultsForViewYD(String id) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NAME,A.ORGAN_NO,A.REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_YIDONG_FORMULA_TYPE') as TAB_TYPE,FORMULA,A.REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,A.CONTENT,A.FORMULA_MARK,A.IS_REPAY,A.C_USER,A.DVALUE,B.VALUE_AREA FROM DY.DY_CHECK_RESULTS A LEFT JOIN DY.DY_CHECK_FORMULA B ON A.FORMULA_ID=B.ID WHERE a.id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }
}
