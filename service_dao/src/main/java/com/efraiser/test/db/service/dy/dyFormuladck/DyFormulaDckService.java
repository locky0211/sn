package com.efraiser.test.db.service.dy.dyFormuladck;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.dy.DyFormulaDck;
import com.efraiser.test.db.service.BaseService;

public interface DyFormulaDckService extends BaseService {

    void addFormula(DyFormulaDck rdFormula);

    void updateFormula(DyFormulaDck dyFormula);

    GridQueryPageResult getFormulaList(String dckTableName, String samTableName, String formulaState, int pageIndex, int pageSize);

    DyFormulaDck updateCheckFormulaState(String id);

    void deleteCheckResult(String id);
}
