package com.efraiser.test.db.service.sys.sysnotice;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.service.BaseService;

public interface SysNoticeService extends BaseService {


    GridQueryPageResult getSysNoticeList(int pageIndex, int pageSize, String title, String content);


    void addOrUpdateSysNotice(SysNotice sysNotice);
}
