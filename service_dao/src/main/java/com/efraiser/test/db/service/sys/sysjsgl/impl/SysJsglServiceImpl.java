package com.efraiser.test.db.service.sys.sysjsgl.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.model.sys.SysJsgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysjsgl.SysJsglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.trans.Atom;
import org.nutz.trans.Trans;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.util.List;

@Service
public class SysJsglServiceImpl extends BaseServiceImpl<SysJsgl> implements SysJsglService<SysJsgl> {
    private Logger logger = LoggerFactory.getLogger(SysJsglServiceImpl.class);

    @Override
    public boolean checkJsId(String jsId) {
        return super.count(Cnd.where("jsId", "=", jsId.trim())) > 0;
    }

    @Override
    public boolean checkJsName(String jsName) {
        return super.count(Cnd.where("jsName", "=", jsName.trim())) > 0;
    }

    @Override
    public List<SysJsgl> getJsglListForYh() {
        return super.query(Cnd.where("JS_STATUS", "=", 1), null);
    }

    @Override
    public GridQueryPageResult getSysJsList(int pageIndex, int pageSize, String key) {

        Pager pager = getDao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(key)) {
            cri.where().and("jsName", "like", "%" + key + "%");
        }
        int total = count(cri);
        List<SysJsgl> jsglList = query(cri, pager);
        gqpr.setTotal(total);
        gqpr.setData(jsglList);
        return gqpr;
    }

    @Override
    public void addOrUpdateJsgl(List<SysJsQx> jsQxs, SysJsgl sysJsgl, String flag) {

        Trans.exec(Connection.TRANSACTION_READ_COMMITTED, new Atom() {
            @Override
            public void run() {
                // 事物控制

                if (flag != null) {
                    dao().updateIgnoreNull(sysJsgl);
                    dao().clear(SysJsQx.class, Cnd.where("jId", "=", sysJsgl.getJsId()));
                    dao().fastInsert(jsQxs);
                } else {
                    dao().fastInsert(sysJsgl);
                    dao().fastInsert(jsQxs);
                }
            }
        });

    }

    @Override
    public void deleteJsgl(String jsId) {

        Trans.exec(Connection.TRANSACTION_READ_COMMITTED, new Atom() {
            @Override
            public void run() {

                dao().delete(SysJsgl.class, jsId);
                dao().clear(SysJsQx.class, Cnd.where("jId", "=", jsId));
            }
        });

    }
}
