package com.efraiser.test.db.service.sys.sysrzgl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.service.BaseService;

public interface SysRzglService extends BaseService {


    /**
     * 查询sql执行日志
     *
     * @param pageIndex
     * @param pageSize
     * @return
     */
    GridQueryPageResult getQueryRzgl(String rzDate, String rzYh, int pageIndex, int pageSize);
}
