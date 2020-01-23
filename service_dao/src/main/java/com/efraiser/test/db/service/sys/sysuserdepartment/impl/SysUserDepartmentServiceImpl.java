package com.efraiser.test.db.service.sys.sysuserdepartment.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUserDepartment;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuserdepartment.SysUserDepartmentService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysUserDepartmentServiceImpl extends BaseServiceImpl<SysUserDepartment> implements SysUserDepartmentService {

    @Override
    public List<String> getUserRolesById(String userId) {
        String sqlStr = "select USER_DEPARTMENT FROM SYS_USER_DEPARTMENT WHERE USER_ID=@userId";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public GridQueryPageResult getUserDepartmentInfoList(String userId, String userName, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(userId)) {
            cri.where().and("userId", "like ", "%" + userId + "%");
        }
        if (StrUtil.isNotNull(userName)) {
            cri.where().and("userName", "like ", "%" + userName + "%");
        }
        cri.getOrderBy().asc("userId");

        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(SysUserDepartment.class, cri, pager));
        gqpr.setTotal(this.count(cri));
        return gqpr;
    }

    @Override
    public List<SysUserDepartment> getAllDepartment() {
        String sqlstr = "SELECT DISTINCT USER_DEPARTMENT FROM SYS_USER_DEPARTMENT";
        Sql sql = Sqls.create(sqlstr);
        return super.getListBySql(sql);
    }

    @Override
    public List<SysUserDepartment> getByUserId(String userId) {
        return dao().query(SysUserDepartment.class, Cnd.where("userId", "=", userId));
    }
}
