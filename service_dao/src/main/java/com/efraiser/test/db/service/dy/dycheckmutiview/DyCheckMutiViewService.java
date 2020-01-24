package com.efraiser.test.db.service.dy.dycheckmutiview;

import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckMutiViewService extends BaseService {

    /**
     * 功能描述：查询自定义多模块校验结果
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param cUser
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    List<DyCheckMutiResults> getDyReportCheckMutiResults(String brNo, String reportDate, String tabType, String cUser);


    /**
     * 功能描述：根据ID查询一条记录
     *
     * @param id
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    DyCheckMutiResults fetchDyCheckMutiResultForView(String id);

    /**
     * 功能描述：展示PISA报文时根据传入的quotacode获得tablecode
     *
     * @param quotacode
     * @return
     * @author
     * @date 2017年7月15日
     * @modify log:
     */
    String fetchPisaTableCode(String quotacode);
}
