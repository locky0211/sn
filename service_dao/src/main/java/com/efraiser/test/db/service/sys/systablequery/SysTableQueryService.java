package com.efraiser.test.db.service.sys.systablequery;

import com.efraiser.test.db.service.BaseService;

import java.util.HashMap;

public interface SysTableQueryService extends BaseService {


    HashMap<String, Object> getQueryResult(String sqls) throws Exception;
}
