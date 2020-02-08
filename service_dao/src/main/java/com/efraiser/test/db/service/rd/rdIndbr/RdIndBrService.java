package com.efraiser.test.db.service.rd.rdIndbr;

import com.efraiser.test.db.model.rd.RdIndBr;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdIndBrService extends BaseService {

    /**
     * 获取机构指标数据信息
     *
     * @param userId
     * @return
     */
    List<RdIndBr> getRdIndBrs(String indId, String userId);

    void insertOrUpdateRdIndBr(RdIndBr rdIndBr) throws Exception;
}
