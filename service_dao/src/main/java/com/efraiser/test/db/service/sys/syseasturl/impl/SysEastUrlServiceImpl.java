package com.efraiser.test.db.service.sys.syseasturl.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

@Service
public class SysEastUrlServiceImpl extends BaseServiceImpl<SysEastUrl> implements SysEastUrlService{


    @Override
    public GridQueryPageResult getEastUrlList(String brNo, int pageIndex, int pageSize) {
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria cri = Cnd.cri();
        if(StrUtil.isNotNull(brNo)){
            cri.where().and("brNo","=",brNo);
        }
        gqpr.setTotal(this.count(cri));
        gqpr.setData(this.query(cri, pager));
        return gqpr;
    }

    @Override
    public void addEastUrl(SysEastUrl sysEastUrl) {
        dao().insert(sysEastUrl);
    }

    @Override
    public void updateEastUrl(SysEastUrl sysEastUrl) {
        dao().update(sysEastUrl);
    }

    @Override
    public void deleteEastUrl(String brNo) {
        String sqlStr = "DELETE FROM EAST_URL WHERE BRNO = '" + brNo + "'";
        Sql sql = Sqls.create(sqlStr);
        super.dao().execute(sql);
    }
}
