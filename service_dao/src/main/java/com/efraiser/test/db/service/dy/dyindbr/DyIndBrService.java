package com.efraiser.test.db.service.dy.dyindbr;

import com.efraiser.test.db.model.dy.DyIndBr;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyIndBrService extends BaseService {


    /**
     * 获取机构指标数据信息
     *
     * @param userId
     * @return
     */
    List<DyIndBr> getDyIndBrs(String indId, String userId);

    void insertOrUpdateDyIndBr(DyIndBr rdIndBr) throws Exception;


    Boolean checkRdIndBr(String orgId);
}
