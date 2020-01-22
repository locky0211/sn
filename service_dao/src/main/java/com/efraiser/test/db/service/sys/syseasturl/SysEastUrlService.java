package com.efraiser.test.db.service.sys.syseasturl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.service.BaseService;

public interface SysEastUrlService extends BaseService {


    GridQueryPageResult getEastUrlList(String brNo, int pageIndex, int pageSize);


    void addEastUrl(SysEastUrl sysEastUrl);


    void updateEastUrl(SysEastUrl sysEastUrl);


    void deleteEastUrl(String brNo);
}
