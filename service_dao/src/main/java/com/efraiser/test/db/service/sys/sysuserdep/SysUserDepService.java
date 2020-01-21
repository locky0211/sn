package com.efraiser.test.db.service.sys.sysuserdep;

import com.efraiser.test.db.model.sys.SysUserDep;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysUserDepService extends BaseService {


    void addOrupdateSysUserDep(String userId, List<String> userDeps) ;


    List<String> getDepByUserId(String userId);


    List<SysUserDep> querybyUserId(String userId);
}
