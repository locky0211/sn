package com.efraiser.test.db.service.dy.dyreportrecord.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyReportRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyreportrecord.DyReportRecordService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DyReportRecordServiceImpl extends BaseServiceImpl<DyReportRecord> implements DyReportRecordService {


    @Override
    public GridQueryPageResult getDyReportRecordList(int pageIndex, int pageSize,String userId, String reportDate, String tabType) {
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(userId)) {
            cri.where().and("userId", "like", "%" + userId + "%");
        }
        if (StrUtil.isNotNull(reportDate)) {
            cri.where().and("reportDate", "like", "%" + reportDate + "%");
        }
        if (StrUtil.isNotNull(tabType)) {
            cri.where().and("tabType", "like", "%" + tabType + "%");
        }
        cri.getOrderBy().desc("updateDate");
        List<DyReportRecord> notices = this.query(cri, pager);
        gqpr.setTotal(this.count(cri));
        gqpr.setData(notices);
        return gqpr;
    }
}
