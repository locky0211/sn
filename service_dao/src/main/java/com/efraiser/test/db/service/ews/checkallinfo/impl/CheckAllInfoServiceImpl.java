package com.efraiser.test.db.service.ews.checkallinfo.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckAllInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkallinfo.CheckAllInfoService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CheckAllInfoServiceImpl  extends BaseServiceImpl<CheckAllInfo> implements CheckAllInfoService {

    @Autowired
    private LocalConfig localConfig;

    @Override
    public GridQueryPageResult getResultList(String brNo, String reportDate, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from check_all_info where id is not null ";
        if (StrUtil.isNotNull(brNo)) {
            cri.where().andIn("brNo", brNo);
            sqlStr += " and brNo in ('" + brNo + "')";
        }
        if (StrUtil.isNotNull(reportDate)) {
            cri.where().and("sjrq", "=", reportDate);
            sqlStr += " and sjrq = '" + "'";
        }
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(CheckAllInfo.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;

    }

    @Override
    public List<CheckAllInfo> getCheckAllInfoList() {
        Criteria cri = Cnd.cri();
        cri.where().orIn("status", "0");
        cri.where().orIn("status", "1");
        return dao().query(CheckAllInfo.class, cri);
    }

    @Override
    public GridQueryPageResult getCheckAllInfo(int pageIndex, int pageSize) {
        String sqlStr = "SELECT ID, GET_BM_NAME(BRNO) AS BRNAME,BRNO, SJRQ, FORMULATYPE, CHECKSTARTTIME, CHECKENDTIME, FORMULAID, COMPLETEDFORMULANUMBER, FORMULATOTALCOUNT, STATUS,TABLERANGE,VERSION FROM CHECK_ALL_INFO ORDER BY CHECKSTARTTIME DESC";
        GridQueryPageResult gqpr = new GridQueryPageResult();
        List<CheckAllInfo> list = this.getListObjectBySql(sqlStr, CheckAllInfo.class);
        List<CheckAllInfo> lists = new ArrayList<CheckAllInfo>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {

            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);
        return gqpr;
    }

    @Override
    public GridQueryPageResult getCheckAllInfo(String brNo, String reportDate, String repCode, String version,
                                               int pageIndex, int pageSize) {
        String sqlStr = "SELECT ID, GET_BM_NAME(BRNO) AS BRNAME,BRNO, SJRQ, FORMULATYPE, CHECKSTARTTIME, CHECKENDTIME, FORMULAID, COMPLETEDFORMULANUMBER, FORMULATOTALCOUNT, STATUS,TABLERANGE,VERSION FROM CHECK_ALL_INFO WHERE ID IS NOT NULL";
        if (StrUtil.isNotNull(brNo)) {
            sqlStr += " and BRNO = '" + brNo + "'";
        }
        if (StrUtil.isNotNull(reportDate)) {
            sqlStr += " and sjrq = '" + reportDate.replace("-", "") + "'";
        }
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += " and TABLERANGE = '" + repCode + "'";
        }
        if (StrUtil.isNotNull(version)) {
            sqlStr += " and version = '" + version + "'";
        }
        sqlStr += " ORDER BY CHECKSTARTTIME ASC ";
        GridQueryPageResult gqpr = new GridQueryPageResult();
        List<CheckAllInfo> list = this.getListObjectBySql(sqlStr, CheckAllInfo.class);
        List<CheckAllInfo> lists = new ArrayList<CheckAllInfo>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {

            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);
        return gqpr;
    }

    @Override
    public GridQueryPageResult getCheckAllInfo2(int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from check_all_info where id is not null ";
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(CheckAllInfo.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));

        return gqpr;
    }

    @Override
    public List<CheckAllInfo> getCheckAllInfoByBrNo(String[] brNos) {
        Criteria cri = Cnd.cri();
        for (int i = 0; i < brNos.length; i++) {
            cri.where().orIn("brNo", brNos[i]);
        }
        return dao().query(CheckAllInfo.class, cri);
    }

    @Override
    public void addCheckAllInfo(String brNo, String reportDate, String formulaType, String formulaId, String version,
                                String repCode) {
        CheckAllInfo checkAllInfo = new CheckAllInfo();
        checkAllInfo.setBrNO(brNo);
        checkAllInfo.setSjRQ(reportDate);
        checkAllInfo.setCheckStartTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
        checkAllInfo.setStatus("0");
        checkAllInfo.setCompletedFormulaNumber(0);
        checkAllInfo.setFormulaTotalCount(0);
        checkAllInfo.setFormulaType(formulaType);
        checkAllInfo.setFormulaId(formulaId);
        checkAllInfo.setVersion(version);
        checkAllInfo.setTableRange(repCode);
        dao().insert(checkAllInfo);
    }

    @Override
    public CheckAllInfo updateCheckAllInfo(CheckAllInfo checkAllInfo, boolean flag) {
        if (flag) {
            CheckAllInfo oldInfo = super.fetch(checkAllInfo.getId());
            checkAllInfo.setStatus(oldInfo.getStatus());
            if (!checkAllInfo.getStatus().equals("0")) {
                checkAllInfo.setCheckEndTime(oldInfo.getCheckEndTime());
            } else {
                checkAllInfo.setCheckEndTime(null);
            }
            dao().update(checkAllInfo);
        } else {
            if (checkAllInfo.getStatus().equals("1")) {
                checkAllInfo.setStatus("0");
                checkAllInfo.setCheckEndTime(null);
            } else {
                checkAllInfo.setStatus("1");
                checkAllInfo.setCheckEndTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
            }
            if (checkAllInfo.getCompletedFormulaNumber() != 0
                    && checkAllInfo.getCompletedFormulaNumber() == checkAllInfo.getFormulaTotalCount()) {
                checkAllInfo.setStatus("2");
            }
            dao().updateIgnoreNull(checkAllInfo);
        }

        return super.fetch(checkAllInfo.getId());
    }

    @Override
    public List<CheckAllInfo> getCheckAllInfoByBrNo(String brNo, String reportDate, String version, String repCode) {

        Criteria cri = Cnd.cri();
        cri.where().and("brNo", "=", brNo);
        cri.where().and("sjrq", "=", reportDate);
        cri.where().and("version", "=", version);
        if(localConfig.getDriver().toUpperCase().contains("ORACLE")){
            if (StrUtil.isNotNull(repCode)) {
                cri.where().and("tableRange", "=", repCode);
            }else {
                cri.where().andIsNull("tableRange");
            }
        }else {
            cri.where().and("tableRange", "=", repCode);
        }

        // if (StrUtil.isNotNull(repCode)) {
        // cri.where().and("tableRange", "=", repCode);
        // }
        // else {
        // cri.where().and("tableRange", "=", "");
        // }

        return dao().query(CheckAllInfo.class, cri);
    }
}
