$(function() {
});

function add(){
	 mini.confirm("是否进行进行提交？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}

function onAdd() {
	var cacheInfoForm = new mini.Form('#errorRemarkForm');
	cacheInfoForm.validate();
	if (cacheInfoForm.isValid()) {
		var o = cacheInfoForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'rd/error/dispose/UpdateTbStatus.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
								CloseWindow();
									});
						} else {
							mini.alert('操作失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}

};

/*function onCancel(e) {
	CloseWindow("cancel");
}*/

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}


function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
		mini.alert('文件加载成功，请点击上传按钮!!', '提醒');
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}
}
function upLoadTbStatus() {
	if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
		mini.alert('请选择上传文件!!', '提醒');
		return false;
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '导入处理中...'
		});
		var id = mini.get('id').getValue();
		var excelFile = mini.get('excelFile').getValue();
		var excelFilePath = mini.get('excelFilePath').getValue();
		$.ajax({
			url : base + 'rd/report/import/doReportImportcl.nut',
			type : 'post',
			data : {
				id : id,
				excelFile : excelFile,
				excelFilePath : excelFilePath
			},
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!', '提醒', function() {
								mini.get('excelFile').setValue('');
								mini.get('excelFilePath').setValue('');
							});
				} else {
					mini.alert(text.data, '提醒');
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

