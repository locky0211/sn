package com.efraiser.test.db.service.dy.dyuserreport;

import com.efraiser.test.db.model.dy.DyUserReport;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyUserReportService extends BaseService {


    /**
     * 功能描述：根据报表Id和用户Id删除用户管理报表
     *
     * @param tableId
     * @param userId
     * @author
     * @date 2017年12月29日
     * @modify log:
     */
    void deleteReportManage(String tableId, String userId);


    /**
     * 功能描述：批量添加
     *
     * @param userReportList
     * @author
     * @date 2017年12月29日
     * @modify log:
     */
    void add(List<DyUserReport> userReportList);
}
