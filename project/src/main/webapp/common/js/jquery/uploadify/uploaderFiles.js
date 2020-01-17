$(document).ready(function() {
			$("#file_upload").uploadify({
						'swf' : 'uploadify.swf', // 设置uploadify.swf的路径
						'uploader' : '/acc/uploadFiles/uploadFilesToTemps', // 请求响应的Action
						'buttonImage' : '1.jpg',
						'cancelImg' : 'uploadify-cancel.png', // 取消按钮图片路径
						'buttonCursor' : 'pointer',// 上传鼠标hover后Cursor的形状
						'auto' : false, // 设置是否自动上传
						'multi' : false,
						'removeCompleted' : false,
						'fileObjName' : 'file', // 服务器端名称，与HTML中的名称相同就可以
						'queueID' : 'fileQueue',
						'queueSizeLimit' : 1,
						'method' : 'post',// 和后台交互的方式：post/get
						'buttonText' : '添加文件',
						'height' : 24,
						'width' : 80,
						'uploadLimit' : 1,
						'removeCompleted' : false,
						'onUploadStart' : function(file) {
							$('#completeTxt').text('');
							loadingShow();
						},
						'onUploadSuccess' : function(fileObj, resp, flag) {// 每个文件上传成功后触发
							if (resp) {
								$('#' + fileObj.id).find('input[name="fileNames"]').val(resp);
							} else {
								$.messager.alert('错误', '上传文件服务器端出错!!', 'error', function() {
											$('#file_upload').uploadify('cancel', fileObj.id, true);
										});
							}
						},
						'onQueueComplete' : function(queueData) {
							loadingHide();
							$('#completeTxt').text('全部文件上传成功!!');
						}
					});
			$('#btnUpload').bind('click', uploadFile);
		});
function uploadFile() {
	// 上传队列中的所有文件
	$("#file_upload").uploadify('upload', '*');
}
function clearFile() {// 清空列表
	$('#file_upload').uploadify('cancel', '*', true);
}
function stopFile() {// 清空列表
	$('#file_upload').uploadify('stop');
}