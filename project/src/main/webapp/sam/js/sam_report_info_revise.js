$(function() {
			initUploady();
			initBtn();
		});
function initBtn() {
	$('#btnAdd').bind('click', function() {
				if ($('#errorMsgId').text() == '') {
					$("#file_upload").uploadify("settings", "formData", {
								'bankOrganNo' : $('#bankOrganNoId').val(),
								'reportDate' : $('#reportDateId').val(),
								'reportType' : $('#reportTypeId').val(),
								'reportModelNo' : $('#reportModelNoId').val()
							});
					$('#file_upload').uploadify('upload', '*');
				}
			});// bind 取消关闭
	$('#btnCancel').bind('click', function() {
				parent.reportWinClose();
			});
}

function initUploady() {
	$("#file_upload").uploadify({
				'swf' : swfUrl, // 设置uploadify.swf的路径
				'uploader' : base + '/sam/srl/uploadReportFile;jsessionid=' + $('#iSessionId').val(), // 请求响应的Action
				'buttonImage' : buttonImage,
				'cancelImg' : cancelImg, // 取消按钮图片路径
				'buttonCursor' : 'pointer',// 上传鼠标hover后Cursor的形状
				'auto' : false, // 设置是否自动上传
				'multi' : false,
				'removeCompleted' : false,
				'fileObjName' : 'file', // 服务器端名称，与HTML中的名称相同就可以
				'fileSizeLimit' : '10MB',
				'buttonText' : '选择文件',
				'fileTypeExts' : '*.xls',
				'fileTypeDesc' : 'Microsoft Office Excel 97-2003 工作表 (.xls)',
				'height' : 24,
				'width' : 80,
				'queueSizeLimit' : 1,
				'uploadLimit' : 1,
				'onUploadError' : function(file, errorCode, errorMsg, errorString) {
					loadingHide();
				},
				'onUploadStart' : function(file) {
					loadingShow('处理 ' + file.name + ' 中,请稍等....');
				},
				'onSelect' : function(file) {
					var fileName = file.name;
					if (fileName == $('#fileNameTd').text() + ".xls") {
						$('#errorMsgId').text('');
					} else if ($('#reportModelNoId').val() == fileName.split('_')[2]) {
						$('#errorMsgId').text('');
					} else if ($('#reportModelNoId').val() == fileName.split('_')[0]) {
						$('#errorMsgId').text('');
					} else if (fileName.indexOf($('#keys').val()) != -1) {
						$('#errorMsgId').text('');
					} else {
						$('#errorMsgId').text('选择文件名称不一致');
					}
				},
				'onQueueComplete' : function(queueData) {
					loadingHide();
					parent.parentFormSubmit();
				}
			});
}