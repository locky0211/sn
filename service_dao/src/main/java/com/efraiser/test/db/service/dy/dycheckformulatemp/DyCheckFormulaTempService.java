package com.efraiser.test.db.service.dy.dycheckformulatemp;

import com.efraiser.test.db.model.dy.DyCheckFormulaTemp;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckFormulaTempService extends BaseService {


    void delCheckFormulaTemp(String date) throws Exception;

    List<DyCheckFormulaTemp> getDyCheckFormulaTemp();
}
