package com.efraiser.test.project.actiion;

import com.efraiser.test.common.util.RequestResult;

public abstract class BaseController {

    /**
     * 操作结果对象
     *
     * @param success
     *            是否成功
     * @param msg
     *            结果提示信息
     * @return
     */
    public static RequestResult requestResult(boolean success, String msg) {
        return new RequestResult(success, msg);
    }

    /**
     * 操作结果对象
     *
     * @param success
     *            是否成功
     * @param data
     *            结果数据
     * @return
     */
    public static RequestResult requestResult(boolean success, Object data) {
        return new RequestResult(success, data);
    }
}
