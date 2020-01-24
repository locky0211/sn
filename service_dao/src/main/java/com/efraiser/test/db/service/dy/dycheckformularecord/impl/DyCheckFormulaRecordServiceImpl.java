package com.efraiser.test.db.service.dy.dycheckformularecord.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckFormulaRecord;
import com.efraiser.test.db.model.dy.DyCheckFormulaWave;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyCheckFormulaRecordServiceImpl extends BaseServiceImpl<DyCheckFormulaRecord> implements DyCheckFormulaRecordService {


    @Override
    public void insertRecord(String operate, DyCheckFormulaWave checkformula) {
        DyCheckFormulaRecord formula = new DyCheckFormulaRecord();
        formula.setTabcode(checkformula.getTabcode());
        formula.setCheckRisk(checkformula.getCheckRisk());
        formula.setStartDate(checkformula.getThisVersion());
        formula.setEndDate(checkformula.getLastVersion());
        formula.setCheckArea(checkformula.getCheckArea());
        formula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        formula.setFormulaId(checkformula.getId());
        formula.setOperate(operate);
        formula.setIsReplay("0");
        super.dao().insert(formula);
    }


    @Override
    public List<DyCheckFormulaRecord> getRecordByBrno(String brNos) {
        String sql = "SELECT * FROM DY.DY_CHECK_FORMULA_RECORD WHERE CHECK_BRNO IN ("+ StrUtil.convertQuoMarksSQL(brNos)+") order by update_date desc";
        Sql sqlStr = Sqls.create(sql);
        return super.getListObjectBySql(sqlStr,DyCheckFormulaRecord.class);
    }
}
