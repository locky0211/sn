$(function() {
			if (mini.get("tableId").getValue() != '' || mini.get("tabCode").getValue() != '') {
				mini.get('tabCode').setReadOnly(true);
			}/*else{
				$.ajax({
					url : base + 'dy/table/getReportOrganTypes.nut',
					type : 'POST',
					dataType : 'json',
					success : function(text) {
						console.log(text.data);
						mini.get('reportOrganTypes').setValue(text.data);
					},
					error : function(jqXHR, textStatus, errorThrown) {
					},
					complete : function() {
					}
				});
			}*/
			if (mini.get("tableId").getValue() == '') {
				mini.get('endDate').setValue("99991231");
			}
			
		});
function onAdd() {
	// 添加和编辑校验公式
	var form = new mini.Form("#tableInfoForm");
	form.validate();
	if (form.isValid()) {
		if (checkExcelFileUpload()) {    
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'dy_xcz/table/addOrUpdateTableInfo.nut',
						type : 'post',
						data : json,
						dataType : 'json',
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
							} else {
								mini.alert('操作失败,' + text.data, '提醒');
							}
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						},
						complete : function() {
							mini.unmask(document.body);
						}
					});
		}

	}
}

function checkExcelFileUpload() {
	if (mini.get("tableId").getValue() == '') {
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择并上传模板文件!!', '提醒');
			return false;
		}
	}
	return true;
}
function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}
