package com.efraiser.test.db.service.sys.sysggzdzu;

import com.efraiser.test.db.model.sys.SysGgzdGroup;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysGgzdZuService <T> extends BaseService {


     boolean checkGgzdZu(String id);



    /**
     * 获取非同级节点下的字典目录
     *
     * @param gId
     * @return
     */
     List<SysGgzdGroup> getGgzdZuListNotLower(String gId);



    void deletGGzdZu(String gId) throws Exception;
}
