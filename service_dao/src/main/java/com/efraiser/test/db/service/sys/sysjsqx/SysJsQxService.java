package com.efraiser.test.db.service.sys.sysjsqx;

import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.Dao;

import java.util.List;

public interface SysJsQxService<T>  extends BaseService {


    List<SysJsQx> queryByJIds(String jsId);
}
