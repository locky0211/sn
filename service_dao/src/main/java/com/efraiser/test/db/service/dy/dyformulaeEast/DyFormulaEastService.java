package com.efraiser.test.db.service.dy.dyformulaeEast;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.dy.DyFormulaEast;
import com.efraiser.test.db.service.BaseService;

public interface DyFormulaEastService extends BaseService {


    void addFormula(DyFormulaEast rdFormulaEast);

    void updateFormula(DyFormulaEast rdFormulaEast);

    GridQueryPageResult getFormulaList(String eastTableName, String samTableName, String formulaState, int pageIndex, int pageSize);

    DyFormulaEast updateCheckFormulaState(String id);

    void deleteCheckResult(String id);

}
