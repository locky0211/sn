package com.efraiser.test.db.service.dy.dyformulaeEast.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyFormulaEast;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyformulaeEast.DyFormulaEastService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

@Service
public class DyFormulaEastServiceImpl extends BaseServiceImpl<DyFormulaEast> implements DyFormulaEastService {

    @Override
    public void addFormula(DyFormulaEast rdFormulaEast) {
        rdFormulaEast.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        rdFormulaEast.setFormulaState("1");
        dao().insert(rdFormulaEast);
    }

    @Override
    public void updateFormula(DyFormulaEast rdFormulaEast) {
        rdFormulaEast.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        dao().updateIgnoreNull(rdFormulaEast);
    }

    @Override
    public GridQueryPageResult getFormulaList(String eastTableName, String samTableName, String formulaState, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr="select count(*) from DY.DY_FORMULA_EAST where id is not null ";
        if(StrUtil.isNotNull(eastTableName)){
            cri.where().and("eastTableName","like",'%'+eastTableName+'%');
            sqlStr+="and east_TableName like '%"+eastTableName+"%' ";
        }
        if(StrUtil.isNotNull(samTableName)){
            cri.where().and("samTableName","like",'%'+samTableName+'%');
            sqlStr+="and sam_TableName like '%"+samTableName+"%' ";
        }
        if(StrUtil.isNotNull(formulaState)){
            cri.where().and("formulaState","=",formulaState);
            sqlStr+="and formulaState = '"+formulaState+"' ";
        }
        Pager pager = this.dao().createPager(pageIndex+1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(DyFormulaEast.class,cri,pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public DyFormulaEast updateCheckFormulaState(String id) {
        DyFormulaEast rdFormulaEast = super.fetch(id);
        if (rdFormulaEast.getFormulaState().equals("1")) {
            rdFormulaEast.setFormulaState("0");
        } else {
            rdFormulaEast.setFormulaState("1");
        }
        dao().updateIgnoreNull(rdFormulaEast);
        return super.fetch(id);
    }

    @Override
    public void deleteCheckResult(String id) {
        dao().execute(Sqls.create("delete from DY.DY_CHECK_EAST where formulaId='" + id + "'"));
    }

}
