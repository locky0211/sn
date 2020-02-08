package com.efraiser.test.db.service.rd.dmdatataskloginfo;

import com.efraiser.test.db.model.rd.DmDataTaskLogInfo;
import com.efraiser.test.db.service.BaseService;

public interface DmDataTaskLogInfoService extends BaseService {


    DmDataTaskLogInfo getLastDateImportLogInfo();

    /**
     * 根据报表日期和报表类型获取跑批日志
     */
    DmDataTaskLogInfo getDataImportLogInfo(String dataDate, String dataType);

    /**
     * 根据报表日期和报表类型获取跑批日志
     */
    DmDataTaskLogInfo getDataImportLogInfo_Nj(String dataDate, String dataType, String dataBatch);

    /**
     * 删除导数错误的日志数据(基本上为最近一条记录)
     */
    void deleteLastImportLogInfo();

    void updateImportLogInfo(String dataDate, String dataType, String state, String logInfo);

    void updateImportLogInfoNj(String dataDate, String dataType, String dataBatch, String state, String logInfo);

    void updateImportTableNum(String dataDate, String dataType, int loadNum, int extractNum);

    void updateImportTableNum_nj(String dataDate, String dataType, String dataBatch, int loadNum, int extractNum);
}
