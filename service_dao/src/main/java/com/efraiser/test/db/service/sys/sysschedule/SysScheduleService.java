package com.efraiser.test.db.service.sys.sysschedule;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysSchedule;
import com.efraiser.test.db.service.BaseService;

public interface SysScheduleService extends BaseService {

    /**
     * 功能描述：分页查询
     *
     * @param taskTime
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    GridQueryPageResult getScheduleList(String taskTime, int pageIndex, int pageSize);

    /**
     * 功能描述：根据Id删除
     *
     * @param id
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    void deleteSchedule(String id);

    /**
     * 功能描述：判断任务是否重复
     *
     * @param taskTime
     * @param taskType
     * @param reportDate
     * @param reportType
     * @return
     * @author
     * @date 2017年10月10日
     * @modify log:
     */
    int checkSchedule(String taskTime, String taskType, String reportDate, String reportType);

    int checkScheduleNj(String taskTime, String taskType, String reportDate, String reportType, String dataBatch);

    /**
     * 功能描述：判断是否可执行任务
     *
     * @param taskTime 任务日期
     * @param taskType 任务类型
     * @return
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    boolean checkScheduleStatus(String taskTime, String taskType);

    SysSchedule getSysSchedule(String taskTime, String taskType);

    /**
     * 功能描述：将任务状态改为完成("1")
     *
     * @param taskTime 任务日期
     * @param taskType 任务类型
     * @return true 更新成功
     * false 更新失败
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    boolean updateScheduleStatus(String taskTime, String reportDate, String reportType, String taskType);

    /**
     * 功能描述：将任务状态改为完成("1")
     *
     * @param taskTime 任务日期
     * @param taskType 任务类型
     * @return true 更新成功
     * false 更新失败
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    boolean updateScheduleStatus_nj(String taskTime, String reportDate, String dataBatch, String reportType, String taskType);

    /**
     * 功能描述：将任务状态改为完成("1")
     *
     * @param taskTime 任务日期
     * @param taskType 任务类型
     * @return true 更新成功
     * false 更新失败
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    boolean updateScheduleStatus(String taskTime, String taskType);
}
