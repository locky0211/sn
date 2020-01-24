package com.efraiser.test.db.service.dy.dycheckresultshelper;

import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import java.util.List;

public interface DyCheckResultsHelperService  extends BaseService {


    /**
     * 功能描述：获取区分的校验结果(异动)
     * @author
     * @date 2016年3月4日
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @param pager
     * @return
     * @modify log:
     */
     List<DyCheckResultsHelper> getDyReportCheckResultListAreaYidong(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String checkType, String checkArea, String cUser);

    DyCheckResultsHelper fetchDyCheckResultsForViewYD(String id);
}
