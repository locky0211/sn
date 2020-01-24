package com.efraiser.test.db.service.dy.dycheckwithrdbfformula;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfFormula;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckWithRdBfFormulaService extends BaseService {

    DyCheckWithRdBfFormula fetchToEditCheckFormula(String id);

    DyCheckWithRdBfFormula updateCheckFormulaValidFlag(String id, String validFlag);

    List<DyCheckWithRdBfFormula> getFormulaListByTabCodes( List<String> tabCodes,List<String> tabCodesRd, String reportDate,String tabType);

    GridQueryPageResult getDyCheckFormulaList(String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize);
}
