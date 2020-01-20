package com.efraiser.test.db.service.sys.sysjsqx.impl;

import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysjsqx.SysJsQxService;
import org.nutz.dao.Cnd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysJsQxServiceImpl  extends BaseServiceImpl<SysJsQx> implements SysJsQxService<SysJsQx> {

    @Override
    public List<SysJsQx> queryByJIds(String jsId) {
       return query(Cnd.where("jId", "=", jsId), null);
    }
}
