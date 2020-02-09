package com.efraiser.test.db.service.ews.checkformula;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.CheckFormula;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckFormulaService extends BaseService {

    GridQueryPageResult getFormulaList(String fieldName, String repCode, String formulaType, String formulaState, String version,
                                       int pageIndex, int pageSize);

    void addCheckFormula(CheckFormula checkFormula);


    void updateCheckFormula(CheckFormula checkFormula);

    CheckFormula updateCheckFormulaState(String id);

    List<CheckFormula> getFormulaListByType(String type, String version);

    List<CheckFormula> getFormulaListByType(String type, String brNo, String version);

    List<CheckFormula> getFormulaListByCnd(String type, String repCode, String version);

    List<CheckFormula> getFormulaListByCnd(String type, String repCode, String brNo, String version);

    void deleteCheckResult(String id);

    /**
     * 功能描述：检索公式并按id排序
     *
     * @author wangfei
     * @date 2017年5月18日
     */
     List<CheckFormula> getFormulaListOrderByID(String type, String repCode, String version);

    List<CheckFormula> getFormulaById();

}
