package com.efraiser.test.db.service.sys.sysrzgl.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysRzgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysrzgl.SysRzglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysRzglServiceImpl extends BaseServiceImpl<SysRzgl> implements SysRzglService {


    @Override
    public GridQueryPageResult getQueryRzgl(String rzDate, String rzYh,int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Pager pager = super.dao().createPager(pageIndex + 1, pageSize);
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(rzDate)) {
            cri.where().andLike("rzDate", rzDate);
        }
        if (StrUtil.isNotNull(rzYh)) {
            cri.where().andLike("rzYh", rzYh);
        }
        cri.getOrderBy().desc("rzDate").desc("rzYh");
        List<SysRzgl> list = super.query(cri, pager);
        gqpr.setData(list);
        gqpr.setTotal(super.count(cri));
        return gqpr;
    }
}
