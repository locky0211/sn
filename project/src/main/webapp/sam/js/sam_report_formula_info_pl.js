$(function() {
			initUploady();
			initBtn();
		});
function initBtn() {
	$('#btnAdd').bind('click', function() {
				if ($('#errorMsgId').val() == '') {
					$('#file_upload').uploadify('upload', '*');
				}
			});
}

function initUploady() {
	$("#file_upload").uploadify({
				'swf' : swfUrl, // 设置uploadify.swf的路径
				'uploader' : base + '/sam/srf/importReportFormulaInfo;jsessionid=' + $('#iSessionId').val(), // 请求响应的Action
				'cancelImg' : cancelImg, // 取消按钮图片路径
				'buttonCursor' : 'pointer',// 上传鼠标hover后Cursor的形状
				'auto' : false, // 设置是否自动上传
				'multi' : false,
				'removeCompleted' : false,
				'fileObjName' : 'file', // 服务器端名称，与HTML中的名称相同就可以
				'fileSizeLimit' : '10MB',
				'buttonText' : '浏览文件',
				'fileTypeExts' : '*.xls;*.xlsx',
				'fileTypeDesc' : 'Microsoft Office Excel工作表 (.xls .xlsx)',
				'height' : 34,
				'width' : 80,
				'queueSizeLimit' : 1,
				'uploadLimit' : 1,
				'onUploadError' : function(file, errorCode, errorMsg, errorString) {
					loadingHide();
				},
				'onUploadSuccess' : function(fileObj, resp, flag) {// 每个文件上传成功后触发
					var data = jQuery.parseJSON(resp);
					if (data.success) {
						window.location.href = base + '/common/jsp/success.jsp';
					} else {
						window.location.href = base + '/common/jsp/error.jsp?message=' + data.msg;
					}
				},
				'onUploadStart' : function(file) {
					$('#errorMsgId').val('');
					loadingShow('处理中,请稍等....');
				},
				'onQueueComplete' : function(queueData) {
				}
			});
}