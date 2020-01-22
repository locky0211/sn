package com.efraiser.test.db.service.sys.sysnotice.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysnotice.SysNoticeService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysNoticeServiceImpl extends BaseServiceImpl<SysNotice> implements SysNoticeService {


    @Override
    public GridQueryPageResult getSysNoticeList(int pageIndex, int pageSize, String title, String content) {
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(title)) {
            cri.where().and("title", "like", "%" + title + "%");
        }
        if (StrUtil.isNotNull(content)) {
            cri.where().and("content", "like", "%" + content + "%");
        }
        cri.getOrderBy().desc("release_Date");
        List<SysNotice> notices = this.query(cri, pager);
        gqpr.setTotal(this.count(cri));
        gqpr.setData(notices);
        return gqpr;
    }

    @Override
    public void addOrUpdateSysNotice(SysNotice sysNotice) {
        // 如果存在,修改
        if (StrUtil.isNull(sysNotice.getId())) {
            dao().insert(sysNotice);
        } else {
            dao().updateIgnoreNull(sysNotice);
        }
    }
}
