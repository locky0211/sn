package com.efraiser.test.db.service.dy.dycheckdck.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckDck;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckdck.DyCheckDckService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

@Service
public class DyCheckDckServiceImpl extends BaseServiceImpl<DyCheckDck> implements DyCheckDckService {


    @Override
    public GridQueryPageResult getCheckDckList(String brNo, String reportDate, String reportCode, String checkDate, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from DY.DY_CHECK_DCK where id is not null ";
        if (StrUtil.isNotNull(brNo)) {
            cri.where().andIn("brNo", brNo);
            sqlStr += " and brNo in ('" + brNo + "')";
        }
        if(StrUtil.isNotNull(reportDate)){
            cri.where().and("reportDate", "=", reportDate);
            sqlStr += " and reportDate = '" + reportDate + "'";
        }
        if (StrUtil.isNotNull(reportCode)) {
            cri.where().and("reportCode", "like", '%' + reportCode + '%');
            sqlStr += "and reportCode like '%" + reportCode + "%' ";
        }
        if (StrUtil.isNotNull(checkDate)) {
            cri.where().and("checkDate", "=", checkDate);
            sqlStr += "and checkDate = '" + checkDate + "' ";
        }
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(DyCheckDck.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }
}
