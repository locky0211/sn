package com.efraiser.test.db.service.ews.checkformulaexpend;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.CheckFormulaExpend;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckFormulaExpendService extends BaseService {


    /**
     * 功能描述：查询公式扩展
     *
     * @param brNo
     * @param repCode
     * @param expendState
     * @param version
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年7月3日
     * @modify log:
     */
    GridQueryPageResult getFormulaExpends(String brNo, String repCode, String expendState, String version, int pageIndex, int pageSize);

    /**
     * 功能描述：查询公式扩展
     *
     * @param brNo
     * @param repCode
     * @param version
     * @return
     * @author
     * @date 2017年7月3日
     * @modify log:
     */
    List<CheckFormulaExpend> getFormulaExpendList(String brNo, String repCode, String version);

    /**
     * 功能描述：添加新的扩展公式
     *
     * @param checkFormulaExpend
     * @author
     * @date 2017年7月3日
     * @modify log:
     */
    void addCheckFormulaExpend(CheckFormulaExpend checkFormulaExpend);


    /**
     * 功能描述：更新公式扩展状态
     *
     * @param id
     * @return
     * @author
     * @date 2017年7月3日
     * @modify log:
     */
    CheckFormulaExpend updateCheckFormulaExpendState(String id);

    /**
     * 功能描述：更新公式扩展
     *
     * @param checkFormulaExpend
     * @author
     * @date 2017年7月3日
     * @modify log:
     */
    void updateCheckFormulaExpend(CheckFormulaExpend checkFormulaExpend);

    void updateAllState(String flag);

    /**
     * 功能描述：启用12年之前或之后取数的条件
     *
     * @param condition
     * @author
     * @date 2017年7月7日
     * @modify log:
     */
    void changeCondition(String condition);
}
