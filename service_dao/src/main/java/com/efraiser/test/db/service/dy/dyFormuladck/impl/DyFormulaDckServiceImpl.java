package com.efraiser.test.db.service.dy.dyFormuladck.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyFormulaDck;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyFormuladck.DyFormulaDckService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

@Service
public class DyFormulaDckServiceImpl extends BaseServiceImpl<DyFormulaDck> implements DyFormulaDckService {

    @Override
    public void addFormula(DyFormulaDck rdFormula) {
        rdFormula.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        rdFormula.setFormulaState("1");
        dao().insert(rdFormula);
    }

    @Override
    public void updateFormula(DyFormulaDck dyFormula) {
        dyFormula.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        dao().updateIgnoreNull(dyFormula);
    }

    @Override
    public GridQueryPageResult getFormulaList(String dckTableName, String samTableName, String formulaState, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr="select count(*) from DY.DY_FORMULA_DCK where id is not null ";
        if(StrUtil.isNotNull(dckTableName)){
            cri.where().and("dckTableName","like",'%'+dckTableName+'%');
            sqlStr+="and dck_TableName like '%"+dckTableName+"%' ";
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
        gqpr.setData(dao().query(DyFormulaDck.class,cri,pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public DyFormulaDck updateCheckFormulaState(String id) {
        DyFormulaDck rdFormula = super.fetch(id);
        if (rdFormula.getFormulaState().equals("1")) {
            rdFormula.setFormulaState("0");
        } else {
            rdFormula.setFormulaState("1");
        }
        dao().updateIgnoreNull(rdFormula);
        return super.fetch(id);
    }

    @Override
    public void deleteCheckResult(String id) {
        dao().execute(Sqls.create("delete from DY.DY_CHECK_DCK where formulaId='" + id + "'"));
    }

}
