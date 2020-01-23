package com.efraiser.test.db.service.ews.checkformulaexpend.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckFormulaExpend;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkformulaexpend.CheckFormulaExpendService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckFormulaExpendServiceImpl  extends BaseServiceImpl<CheckFormulaExpend> implements CheckFormulaExpendService {

    @Override
    public GridQueryPageResult getFormulaExpends(String brNo, String repCode, String expendState, String version,
                                                 int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = new GridQueryPageResult();
        String sqlStr = "select ID,	BRNO, GET_BM_NAME(BRNO) AS BRNAME,REPCODE,FORMULAEXPEND,VERSION,EXPENDSTATE,UPDATETIME from formula_all_expend where brno = '"
                + brNo + "'";
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += "and repCode = '" + repCode + "' ";
        }
        if (StrUtil.isNotNull(expendState)) {
            sqlStr += "and expendState = '" + expendState + "' ";
        }
        if (StrUtil.isNotNull(version)) {
            sqlStr += "and version = '" + version + "' ";
        }
        Sql sql = Sqls.create(sqlStr);
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        gqpr.setData(super.getListBySql(sql, null, pager));
        gqpr.setTotal(super.countBySql(sqlStr));
        return gqpr;

    }

    @Override
    public List<CheckFormulaExpend> getFormulaExpendList(String brNo, String repCode, String version) {
        String sqlStr = "select ID,	BRNO,REPCODE,FORMULAEXPEND,VERSION,EXPENDSTATE,UPDATETIME from formula_all_expend where brno = '"
                + brNo + "' and expendState = '1'";
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += "and repCode = '" + repCode + "' ";
        }
        if (StrUtil.isNotNull(version)) {
            sqlStr += "and version = '" + version + "' ";
        }
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);

    }

    @Override
    public void addCheckFormulaExpend(CheckFormulaExpend checkFormulaExpend) {
        checkFormulaExpend.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        checkFormulaExpend.setExpendState("1");
        dao().insert(checkFormulaExpend);
    }

    @Override
    public CheckFormulaExpend updateCheckFormulaExpendState(String id) {
        CheckFormulaExpend checkFormulaExpend = super.fetch(id);
        if (checkFormulaExpend.getExpendState().equals("1")) {
            checkFormulaExpend.setExpendState("0");
        } else {
            checkFormulaExpend.setExpendState("1");
        }
        dao().updateIgnoreNull(checkFormulaExpend);
        return super.fetch(id);
    }

    @Override
    public void updateCheckFormulaExpend(CheckFormulaExpend checkFormulaExpend) {
        checkFormulaExpend.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        dao().updateIgnoreNull(checkFormulaExpend);
    }

    @Override
    public void updateAllState(String flag) {
        String sqlStr = "UPDATE SAM.FORMULA_ALL_EXPEND SET EXPENDSTATE = '" + flag + "'";
        dao().execute(Sqls.create(sqlStr));
    }

    @Override
    public void changeCondition(String condition) {
        List<CheckFormulaExpend> list = dao().query(CheckFormulaExpend.class, Cnd.cri());
        for (CheckFormulaExpend checkFormulaExpend : list) {
            if (condition.equals("<")) {
                checkFormulaExpend.setFormulaExpend(checkFormulaExpend.getFormulaExpend().replace(">=", condition));
            } else {
                checkFormulaExpend.setFormulaExpend(checkFormulaExpend.getFormulaExpend().replace("<", condition));
            }
            checkFormulaExpend.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
            dao().update(checkFormulaExpend);
        }

    }
}
