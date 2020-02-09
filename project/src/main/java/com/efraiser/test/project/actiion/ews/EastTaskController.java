package com.efraiser.test.project.actiion.ews;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.service.ews.easttask.EastTaskService;
import com.efraiser.test.db.service.ews.easttask.impl.EastTaskServiceImpl;
import com.efraiser.test.project.actiion.BaseController;

import com.efraiser.test.project.actiion.sys.CacheController;
import com.efraiser.test.scheduler.task.job.ExcuteFileTask;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * 任务调度action
 */
@Controller
@RequestMapping("east/task")
public class EastTaskController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(EastTaskController.class);

    @Autowired
    private EastTaskService eastTaskService;

    /**
     * 获取调度任务列表
     *
     * @return 任务周期结果集
     */
    @RequestMapping("/getTsTaskList")
    @ResponseBody
    public Object getTsTaskList() {

        EastTaskServiceImpl eastTaskServiceImpl = (EastTaskServiceImpl)eastTaskService;

        // 获取调度任务集合
        List<EastTask> tLists = eastTaskServiceImpl.query(null, null);
        return tLists;
    }

    /**
     * 更新调度任务状态 (1:启用 0:停用)
     *
     * @return
     */
    @RequestMapping("/updateTaskFlag")
    @ResponseBody
    public Object updateTaskFlag(String id, String flag) {
        try {
            EastTask list = eastTaskService.updateTaskFlag(id, flag);
            return requestResult(true, list);
        } catch (Exception e) {
            logger.error("updateTaskFlag() error! id:[" + id + "],flag:[" + flag + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 获取调度任务用于编辑
     *
     * @param id 数据ID
     * @return
     */
    @RequestMapping("/toEditTaskList")
    public ModelAndView toEditTaskList(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        EastTaskServiceImpl eastTaskServiceImpl = (EastTaskServiceImpl)eastTaskService;
        modelAndView.addObject("obj", eastTaskServiceImpl.fetch(id));
        return modelAndView;
    }

    /**
     * 删除任务周期信息
     *
     * @param id 信息Id
     * @return
     */

    @RequestMapping("/deleteTaskList")
    @ResponseBody
    public RequestResult deleteTaskList(String id) {

        EastTaskServiceImpl eastTaskServiceImpl = (EastTaskServiceImpl)eastTaskService;
        try {
            eastTaskServiceImpl.delete(id);
            return requestResult(true, "删除成功!!");
        } catch (Exception e) {
            logger.error("deleteTaskList() error! id:[" + id + "]", e);
            return requestResult(false, "删除失败!!");
        }
    }

    /**
     * 新增或修改调度任务
     *
     * @param et 调度任务
     * @return
     */
    @RequestMapping("/addOrUpdateTaskList")
    @ResponseBody
    public RequestResult addOrUpdateTaskList(@RequestBody EastTask et) {

        EastTaskServiceImpl eastTaskServiceImpl = (EastTaskServiceImpl)eastTaskService;
        try {
            if (StrUtil.isNotNull(et.getId())) {
                eastTaskServiceImpl.dao().updateIgnoreNull(et);
            } else {
                et.setFlag("1");// 默认任务启用
                eastTaskServiceImpl.dao().insert(et);
            }
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("addOrUpdateTaskList() error! et:[" + JSONObject.toJSONString(et) + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 功能描述：手工执行
     *
     * @return
     * @author zyk
     * @date 2017年2月21日
     * @modify log:
     */
    @RequestMapping("/doImportData")
    @ResponseBody
    public Object doImportData() {
        ExcuteFileTask eft = new ExcuteFileTask();
        try {
            eft.execute();
        } catch (Exception e) {
            logger.error("doImportData() error!", e);
            return false;
        }
        return true;
    }

}
