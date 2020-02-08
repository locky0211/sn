package com.efraiser.test.db.service.sys.sysschedule.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysSchedule;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysschedule.SysScheduleService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

@Service
public class SysScheduleServiceImpl extends BaseServiceImpl<SysSchedule> implements SysScheduleService {

    @Override
    public GridQueryPageResult getScheduleList(String taskTime, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from SAM.SYS_SCHEDULE where id is not null ";
        if (StrUtil.isNotNull(taskTime)) {
            cri.where().and("taskTime", "=", taskTime);
        }
        cri.getOrderBy().asc("TASK_TIME").asc("TASK_TYPE");
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(SysSchedule.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public void deleteSchedule(String id) {
        this.delete(id);
    }

    @Override
    public int checkSchedule(String taskTime, String taskType, String reportDate, String reportType) {
        String sqlStr = "SELECT count(*) FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskTime + "' AND TASK_TYPE='" + taskType + "' AND REPORTDATE='" + reportDate + "' AND REPORTTYPE='" + reportType + "'";
        return super.singleInt(sqlStr);
    }

    @Override
    public int checkScheduleNj(String taskTime, String taskType, String reportDate, String reportType, String dataBatch) {
        String sqlStr = "SELECT count(*) FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskTime + "' AND TASK_TYPE='" + taskType + "' AND REPORTDATE='" + reportDate + "' AND REPORTTYPE='" + reportType + "' AND DATA_BATCH='" + dataBatch + "'";
        return super.singleInt(sqlStr);
    }

    @Override
    public boolean checkScheduleStatus(String taskTime, String taskType) {
        String taskDate = taskTime.replace("-", "");
        String sqlStr = "SELECT count(1) FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskDate + "' AND TASK_TYPE='" + taskType + "' AND STATUS='0'";
        int count = super.singleInt(sqlStr);
        if (count == 0) {
            return false;
        } else {
            return true;
        }
    }

    @Override
    public SysSchedule getSysSchedule(String taskTime, String taskType) {
        return this.getObjectBySql(Sqls.create("SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskTime.replace("-", "") + "' AND TASK_TYPE='" + taskType + "' AND STATUS='0'"), null, null);
    }

    @Override
    public boolean updateScheduleStatus(String taskTime, String reportDate, String reportType, String taskType) {
        String taskDate = taskTime.replace("-", "");
        String sqlStr = "SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskDate + "' AND TASK_TYPE='" + taskType + "' AND REPORTDATE='" + reportDate + "' AND reportType='" + reportType + "'";
        Sql sql = Sqls.create(sqlStr);
        SysSchedule sysSchedule = super.getObjectBySql(sql, null, null);
        if (sysSchedule != null) {
            sysSchedule.setStatus("1");
            dao().update(sysSchedule);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean updateScheduleStatus_nj(String taskTime, String reportDate, String dataBatch, String reportType, String taskType) {
        String taskDate = taskTime.replace("-", "");
        String sqlStr = "SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskDate + "' AND TASK_TYPE='" + taskType + "' AND REPORTDATE='" + reportDate + "' AND reportType='" + reportType + "' AND DATA_BATCH='" + dataBatch + "'";
        Sql sql = Sqls.create(sqlStr);
        SysSchedule sysSchedule = super.getObjectBySql(sql, null, null);
        if (sysSchedule != null) {
            sysSchedule.setStatus("1");
            dao().update(sysSchedule);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean updateScheduleStatus(String taskTime, String taskType) {
        String taskDate = taskTime.replace("-", "");
        String sqlStr = "SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + taskDate + "' AND TASK_TYPE='" + taskType + "'";
        Sql sql = Sqls.create(sqlStr);
        SysSchedule sysSchedule = super.getObjectBySql(sql, null, null);
        if (sysSchedule != null) {
            sysSchedule.setStatus("1");
            dao().update(sysSchedule);
            return true;
        } else {
            return false;
        }
    }
}
