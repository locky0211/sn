$(document).ready(function() {
	// 初始化用户表单验证
	$('#pageForm').validate();
	$("#file_upload").uploadify({
		'swf' : swfUrl, // 设置uploadify.swf的路径
		'uploader' : base + 'uploadFiles/uploadFilesToTemps', // 请求响应的Action
		'buttonImage' : buttonImage,
		'cancelImg' : cancelImg, // 取消按钮图片路径
		'buttonCursor' : 'pointer',// 上传鼠标hover后Cursor的形状
		'auto' : false, // 设置是否自动上传
		'multi' : false,
		'fileObjName' : 'file', // 服务器端名称，与HTML中的名称相同就可以
		'fileSizeLimit' : '100MB',
		'buttonText' : '添加文件',
		'height' : 24,
		'width' : 80,
		'queueSizeLimit' : 1,
		'uploadLimit' : 1,
		'removeCompleted' : false,
		'onUploadStart' : function(file) {
			loadingShow('正在上传文件,请稍等....');
		},
		'onSelect' : function(fileObj) {
			$('#toolType').val(fileObj.type);
			$('#toolSize').val(fileObj.size);
		},
		'onUploadSuccess' : function(fileObj, resp, flag) {// 每个文件上传成功后触发
			var data = jQuery.parseJSON(resp);
			if (data.success) {
				$('#tempFilesName').val($('#tempFilesName').val() + data.msg + ',');
			} else {
				$.messager.alert('错误', '上传文件服务器端出错!!', 'error', function() {
							$('#file_upload').uploadify('cancel', fileObj.id, true);
						});
			}
		},
		'onQueueComplete' : function(queueData) {
			loadingHide();
			$('#pageForm').submit();
		}
	});
	$('#btnAdd').bind('click', function() {
				if ($('#pageForm').valid()) {
					$("#file_upload").uploadify('upload', '*');
				}
			});
	$('#btnPageCancel').bind('click', function(e) {
				parent.reportWinClose();
			});
});