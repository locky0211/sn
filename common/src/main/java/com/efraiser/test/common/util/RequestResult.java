package com.efraiser.test.common.util;

/**
 * 自定义处理结果 success:操作结果 msg:操作结果说明
 * 
 */
public class RequestResult {

	private boolean success;

	private Object data;

	public RequestResult(boolean success, Object data) {
		this.success = success;
		this.data = data;
	}

	public boolean isSuccess() {
		return success;
	}

	public Object getData() {
		return data;
	}

}