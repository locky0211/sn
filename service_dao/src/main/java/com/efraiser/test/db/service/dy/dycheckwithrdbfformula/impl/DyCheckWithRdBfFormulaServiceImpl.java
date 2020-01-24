package com.efraiser.test.db.service.dy.dycheckwithrdbfformula.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfFormula;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckwithrdbfformula.DyCheckWithRdBfFormulaService;
import org.nutz.dao.Chain;
import org.nutz.dao.Cnd;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DyCheckWithRdBfFormulaServiceImpl  extends BaseServiceImpl<DyCheckWithRdBfFormula> implements DyCheckWithRdBfFormulaService {

    @Override
    public DyCheckWithRdBfFormula fetchToEditCheckFormula(String id) {
        return this.fetch(id);
    }

    @Override
    public DyCheckWithRdBfFormula updateCheckFormulaValidFlag(String id,  String validFlag) {
        DyCheckWithRdBfFormula icf=this.fetch(id);
        icf.setValidFlag(validFlag);
        //super.dao().updateIgnoreNull(icf);
        this.dao().update(DyCheckWithRdBfFormula.class, Chain.make("validFlag",validFlag ), Cnd.where("id","=",icf.getId()));
        String s = "";
        if (validFlag.equals("y")) {
            s = "<font color=\"blue\">启用</font>";
        } else {
            s = "<font color=\"red\">停用</font>";
        }
        return icf;
    }

    @Override
    public List<DyCheckWithRdBfFormula> getFormulaListByTabCodes(
            List<String> tabCodes,List<String> tabCodesRd, String reportDate,String tabType) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");

        sqlCon.append(" AND formula_type = '" + tabType + "'");
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCode);
            sqlCon.append("%' OR");
        }
        for (String tabCodeRd : tabCodesRd) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCodeRd);
            sqlCon.append("%' OR");
        }
//		for (String tabCodeBf : tabCodesBf) {
//			sqlCon.append(" tabcode like '%");
//			sqlCon.append(tabCodeBf);
//			sqlCon.append("%' OR");
//		}
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }

    public GridQueryPageResult getDyCheckFormulaList(String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize){
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria criteria = Cnd.cri();
        if (StrUtil.isNotNull(tabcode)) {
            criteria.where().and("tabcode", "like", "%" + tabcode + "%");
        }
        if (StrUtil.isNotNull(vFlag)) {
            criteria.where().and("validFlag", "=", vFlag);
        }
        if(StrUtil.isNotNull(formulaType))
        {
            criteria.where().and("formulaType", "=", formulaType);
        }

        List<DyCheckWithRdBfFormula> list = query(criteria, null);
        for(int i=0;i<list.size();i++){
            if (StrUtil.isNotNull(checkFormula)) {
                if(list.get(i).getCheckFormula().contains(""+checkFormula+"")){

                }else{
                    list.remove(list.get(i));
                    i--;
                }
            }
        }
        List<DyCheckWithRdBfFormula> lists = new ArrayList<DyCheckWithRdBfFormula>();
        gqpr.setTotal(list.size());
        for(int j=pageIndex*pageSize;j<(pageIndex+1)*pageSize;j++){
            if(j<list.size()){
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);

        return gqpr;
    }

}
