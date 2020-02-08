package com.efraiser.test.db.service.rd.dmdatataskloginfo.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.DmDataTaskLogInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.dmdatataskloginfo.DmDataTaskLogInfoService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class DmDataTaskLogInfoServiceImpl extends BaseServiceImpl<DmDataTaskLogInfo> implements DmDataTaskLogInfoService {

    private Logger logger = LoggerFactory.getLogger(DmDataTaskLogInfoServiceImpl.class);

    @Override
    public DmDataTaskLogInfo getLastDateImportLogInfo() {
        try {
            String sqlString = "SELECT * FROM(SELECT di.*,row_number() over(ORDER BY data_date DESC) rn FROM SAM.DM_DATA_TASK_LOG_INFO di) t WHERE t.rn=1";
            Sql sql = Sqls.create(sqlString);
            return getObjectBySql(sql, null, null);
        } catch (Exception e) {
            logger.error("getLastDateImportLogInfo() error!", e);
            return null;
        }
    }

    @Override
    public DmDataTaskLogInfo getDataImportLogInfo(String dataDate, String dataType) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "'";
        Sql sql = Sqls.create(sqlStr);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public DmDataTaskLogInfo getDataImportLogInfo_Nj(String dataDate, String dataType, String dataBatch) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "' AND DATA_BATCH='" + dataBatch + "'";
        Sql sql = Sqls.create(sqlStr);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void deleteLastImportLogInfo() {
        String sqlString = "DELETE SAM.DM_DATA_TASK_LOG_INFO WHERE STATE=@state";
        Sql sql = Sqls.create(sqlString);
        sql.params().set("state", "0");
        super.dao().execute(sql);

    }

    @Override
    public void updateImportLogInfo(String dataDate, String dataType, String state, String logInfo) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "'";
        Sql sql = Sqls.create(sqlStr);
        DmDataTaskLogInfo dmDataTaskLogInfo = getObjectBySql(sql, null, null);
        if (dmDataTaskLogInfo != null) {
            if (StrUtil.isNotNull(state)) {
                dmDataTaskLogInfo.setTaskState(state);
            }
            if (StrUtil.isNotNull(dmDataTaskLogInfo.getLogInfo())) {
                dmDataTaskLogInfo.setLogInfo(dmDataTaskLogInfo.getLogInfo() + logInfo);
            } else {
                dmDataTaskLogInfo.setLogInfo(logInfo);
            }
            dmDataTaskLogInfo.setHandleDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            super.dao().update(dmDataTaskLogInfo);
        } else {
            dmDataTaskLogInfo = new DmDataTaskLogInfo();
            dmDataTaskLogInfo.setDataDate(dataDate);
            dmDataTaskLogInfo.setDataType(dataType);
            dmDataTaskLogInfo.setHandleDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            dmDataTaskLogInfo.setLogInfo(logInfo);
            dmDataTaskLogInfo.setTaskState(state);// 日志为处理中
            super.dao().insert(dmDataTaskLogInfo);
        }
    }

    @Override
    public void updateImportLogInfoNj(String dataDate, String dataType, String dataBatch, String state, String logInfo) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "' AND DATA_BATCH='" + dataBatch + "'";
        Sql sql = Sqls.create(sqlStr);
        DmDataTaskLogInfo dmDataTaskLogInfo = getObjectBySql(sql, null, null);
        if (dmDataTaskLogInfo != null) {
            if (StrUtil.isNotNull(state)) {
                dmDataTaskLogInfo.setTaskState(state);
            }
            if (StrUtil.isNotNull(dmDataTaskLogInfo.getLogInfo())) {
                dmDataTaskLogInfo.setLogInfo(dmDataTaskLogInfo.getLogInfo() + logInfo);
            } else {
                dmDataTaskLogInfo.setLogInfo(logInfo);
            }
            dmDataTaskLogInfo.setHandleDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            super.dao().update(dmDataTaskLogInfo);
        } else {
            dmDataTaskLogInfo = new DmDataTaskLogInfo();
            dmDataTaskLogInfo.setDataDate(dataDate);
            dmDataTaskLogInfo.setDataType(dataType);
            dmDataTaskLogInfo.setDataBatch(dataBatch);
            dmDataTaskLogInfo.setHandleDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            dmDataTaskLogInfo.setLogInfo(logInfo);
            dmDataTaskLogInfo.setTaskState(state);// 日志为处理中
            super.dao().insert(dmDataTaskLogInfo);
        }
    }

    @Override
    public void updateImportTableNum(String dataDate, String dataType, int loadNum, int extractNum) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "'";
        Sql sql = Sqls.create(sqlStr);
        DmDataTaskLogInfo dmDataTaskLogInfo = getObjectBySql(sql, null, null);
        dmDataTaskLogInfo.setDataDate(dataDate);
        dmDataTaskLogInfo.setLoadNum(loadNum);
        dmDataTaskLogInfo.setExtractNum(extractNum);
        super.dao().updateIgnoreNull(dmDataTaskLogInfo);
    }

    @Override
    public void updateImportTableNum_nj(String dataDate, String dataType, String dataBatch, int loadNum, int extractNum) {
        String sqlStr = "SELECT * FROM SAM.DM_DATA_TASK_LOG_INFO WHERE DATA_DATE='" + dataDate + "' AND DATA_TYPE='" + dataType + "' AND DATA_BATCH='" + dataBatch + "'";
        Sql sql = Sqls.create(sqlStr);
        DmDataTaskLogInfo dmDataTaskLogInfo = getObjectBySql(sql, null, null);
        dmDataTaskLogInfo.setDataDate(dataDate);
        dmDataTaskLogInfo.setLoadNum(loadNum);
        dmDataTaskLogInfo.setExtractNum(extractNum);
        super.dao().updateIgnoreNull(dmDataTaskLogInfo);
    }
}
