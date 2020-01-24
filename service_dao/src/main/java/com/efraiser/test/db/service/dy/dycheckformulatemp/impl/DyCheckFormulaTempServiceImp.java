package com.efraiser.test.db.service.dy.dycheckformulatemp.impl;

import com.efraiser.test.db.model.dy.DyCheckFormulaTemp;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformulatemp.DyCheckFormulaTempService;
import org.nutz.dao.Cnd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyCheckFormulaTempServiceImp extends BaseServiceImpl<DyCheckFormulaTemp> implements DyCheckFormulaTempService {


    @Override
    public void delCheckFormulaTemp(String date) throws Exception {
        clear(Cnd.where("updateDate", "=", date));
    }

    @Override
    public List<DyCheckFormulaTemp> getDyCheckFormulaTemp() {
        return getListBySql("SELECT DISTINCT UPDATE_DATE FROM DY.DY_CHECK_FORMULA_TEMP ORDER BY UPDATE_DATE DESC", null, null);
    }
}
