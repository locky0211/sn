package com.efraiser.test.db.service.ews.checkformula.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckFormula;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkformula.CheckFormulaService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckFormulaServiceImpl extends BaseServiceImpl<CheckFormula> implements CheckFormulaService {

    @Autowired
    private SysBmglService sysBmglService;

    @Override
    public GridQueryPageResult getFormulaList(String fieldName, String repCode, String formulaType, String formulaState, String version,
                                              int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from formula_all where id is not null ";
        if (StrUtil.isNotNull(fieldName)) {
            cri.where().and("fieldName", "like", '%' + fieldName + '%');
            sqlStr += "and fieldName like '%" + fieldName + "%' ";
        }
        if (StrUtil.isNotNull(repCode)) {
            cri.where().and("repCode", "=", repCode);
            sqlStr += "and repCode = '" + repCode + "' ";
        }
        if (StrUtil.isNotNull(formulaType)) {
            cri.where().and("formulaType", "=", formulaType);
            sqlStr += "and formulaType = '" + formulaType + "' ";
        }
        if (StrUtil.isNotNull(formulaState)) {
            cri.where().and("formulaState", "=", formulaState);
            sqlStr += "and formulaState = '" + formulaState + "' ";
        }
        if (StrUtil.isNotNull(version)) {
            cri.where().and("version", "=", version);
            sqlStr += "and version = '" + version + "' ";
        }
        cri.getOrderBy().asc("repCode");
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(CheckFormula.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;

    }

    @Override
    public void addCheckFormula(CheckFormula checkFormula) {
        checkFormula.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        checkFormula.setFormulaState("1");
        dao().insert(checkFormula);
    }

    @Override
    public void updateCheckFormula(CheckFormula checkFormula) {
        checkFormula.setUpdateTime(DateUtil.getNow(DateUtil.FORMAT_DATE));
        dao().updateIgnoreNull(checkFormula);
    }

    @Override
    public CheckFormula updateCheckFormulaState(String id) {
        CheckFormula checkFormula = super.fetch(id);
        if (checkFormula.getFormulaState().equals("1")) {
            checkFormula.setFormulaState("0");
        } else {
            checkFormula.setFormulaState("1");
        }
        dao().updateIgnoreNull(checkFormula);
        return super.fetch(id);
    }

    @Override
    public List<CheckFormula> getFormulaListByType(String type, String version) {
        Criteria cri = Cnd.cri();
        cri.where().and("formulaState", "=", "1");
        if (version == null) {
            cri.where().and("version", "=", version);
        }
        if (StrUtil.isNotNull(type)) {
            if (type.equals("NOTNULL_ALL")) {
                cri.where().and(Cnd.exps("formulaType", "=", "1").or("formulaType", "=", "11"));
            } else {
                cri.where().and("formulaType", "=", type);
            }
        }
        return dao().query(CheckFormula.class, cri);
    }

    @Override
    public List<CheckFormula> getFormulaListByType(String type, String brNo, String version) {

        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;
        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(brNo);
        Criteria cri = Cnd.cri();
        cri.where().and("formulaState", "=", "1");
        cri.where().and("version", "=", version);
        if (StrUtil.isNotNull(type)) {
            if (type.equals("NOTNULL_ALL")) {
                cri.where().and(Cnd.exps("formulaType", "=", "1").or("formulaType", "=", "11"));
            } else {
                cri.where().and("formulaType", "=", type);
            }
        }
        if (sysBmgl.getBmCategory().equals("分支")) {
            cri.where().andNotLike("REPCODE", "T_KFX_").andNotIn("REPCODE", "T_XG_DHJCB").andNotIn("REPCODE",
                    "T_SJD_BHYWXX");
        }
        return dao().query(CheckFormula.class, cri);
    }

    @Override
    public List<CheckFormula> getFormulaListByCnd(String type, String repCode, String version) {
        Criteria cri = Cnd.cri();
        cri.where().and("formulaState", "=", "1");
        cri.where().and("version", "=", version);
        if (StrUtil.isNotNull(type)) {
            if (type.equals("NOTNULL_ALL")) {
                cri.where().and(Cnd.exps("formulaType", "=", "1").or("formulaType", "=", "11"));
            } else {
                cri.where().and("formulaType", "=", type);
            }
        }
        if (StrUtil.isNotNull(repCode)) {
            cri.where().and("repCode", "=", repCode);
        }
        return dao().query(CheckFormula.class, cri);
    }

    @Override
    public List<CheckFormula> getFormulaListByCnd(String type, String repCode, String brNo, String version) {
        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;
        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(brNo);
        Criteria cri = Cnd.cri();
        cri.where().and("formulaState", "=", "1");
        cri.where().and("version", "=", version);
        if (StrUtil.isNotNull(type)) {
            if (type.equals("NOTNULL_ALL")) {
                cri.where().and(Cnd.exps("formulaType", "=", "1").or("formulaType", "=", "11"));
            } else {
                cri.where().and("formulaType", "=", type);
            }
        }
        if (StrUtil.isNotNull(repCode)) {
            cri.where().and("repCode", "=", repCode);
        }
        if (sysBmgl.getBmCategory().equals("分支")) {
            cri.where().andNotLike("REPCODE", "T_KFX_").andNotIn("REPCODE", "T_XG_DHJCB").andNotIn("REPCODE",
                    "T_SJD_BHYWXX");
        }
        return dao().query(CheckFormula.class, cri);
    }

    @Override
    public void deleteCheckResult(String id) {
        CheckFormula checkFormula = super.fetch(id);
        String deleteStr = "delete from ";
        switch (checkFormula.getFormulaType()) {
            case "1":
                deleteStr += "check_notnull ";
                break;
            case "11":
                deleteStr += "check_notnull ";
                break;
            case "2":
                deleteStr += "check_length ";
                break;
            case "3":
                deleteStr += "check_range ";
                break;
            case "4":
                deleteStr += "check_value ";
                break;
            case "5":
                deleteStr += "check_relative ";
                break;
            case "6":
                deleteStr += "check_complex ";
                break;
        }
        deleteStr += "where formulaId='" + id + "'";
        dao().execute(Sqls.create(deleteStr));
        dao().execute(Sqls.create("delete from check_all where formulaId='" + id + "'"));
    }

    @Override
    public List<CheckFormula> getFormulaListOrderByID(String type, String repCode, String version) {
        Criteria cri = Cnd.cri();
        cri.where().and("formulaState", "=", "1");
        cri.where().and("version", "=", version);
        if (StrUtil.isNotNull(type)) {
            if (type.equals("NOTNULL_ALL")) {
                cri.where().and(Cnd.exps("formulaType", "=", "1").or("formulaType", "=", "11"));
            } else {
                cri.where().and("formulaType", "=", type);
            }
        }
        if (StrUtil.isNotNull(repCode)) {
            cri.where().and("repCode", "=", repCode);
        }
        //cri.getOrderBy().asc("FIELDCODE");
        //cri.getOrderBy().asc("FORMULATYPE");
        cri.getOrderBy().asc("ID");
        return dao().query(CheckFormula.class, cri);
    }

    @Override
    public List<CheckFormula> getFormulaById() {
        String sqlStr = "select * from formula_all ";
		/*if (StrUtil.isNotNull(formulaId)) {
			sqlStr += "where id = '" + formulaId + "'";
		}*/
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }
}
