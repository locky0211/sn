package com.efraiser.test.db.service.sys.sysuserdep;

import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysUserDepService<T> extends BaseService {


    void addOrupdateSysUserDep(String userId, List<String> userDeps) throws Exception ;


    List<String> getDepByUserId(String userId);
}
