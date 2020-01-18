$(function() {
	//判断用户是监管员还是审核员
	$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		async : false,
		success : function(text) {
			if (text.success) {
				mini.get("combobox2").set({multiSelect:"true"});
				$("#checkDiv").hide();
				$("#checkDiv1").show();
			} else {
				mini.get("combobox2").setMultiSelect(false);
				$("#checkDiv").show();
				$("#checkDiv1").hide();
			}
		},
	});
	var fg = mini.get('fg').getValue();
	 if(fg != '0'){
		 $("#checkDiv").hide();
		 $("#checkDiv2").hide();
	 }
	/*//加载附件
	var problemId = mini.get('id').getValue();
	$.ajax({
		url : base + 'rd/problemIssued/attached/getAttachedAll.nut?problemId='+problemId,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			mini.get('combobox2').setValue(text);
		},
	});*/
});

function add(){
	 mini.confirm("确认差错并反馈？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}

function onAdd() {
	var cacheInfoForm = new mini.Form('#errorFalseForm');
	cacheInfoForm.validate();
	if (cacheInfoForm.isValid()) {
		var o = cacheInfoForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'rd/error/check/confirm/UpdateErrorFalseInfo.nut',
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
							mini.alert('操作失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}

};

function doReportImport(){
	var form = new mini.Form("#errorFalseForm");
	form.validate();
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择上传文件!!', '提醒');
			return false;
		} else {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '导入处理中...'
					});
			$.ajax({
						url : base + 'rd/error/check/confirm/doReportImportsj.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!', '提醒', function() {
											mini.get('excelFile').setValue('');
											mini.get('excelUpload').setText('');
											mini.get('combobox2').setUrl(base +"rd/problemIssued/attached/getAttachedAll.nut?problemId=" + mini.get('id').getValue());
											mini.get('combobox2').select(0);
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

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
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

function expo(){
	var document = mini.get('combobox2').getValue();
	if (document == null || document == "未上传附件。" || document == "") {
		mini.alert('没有附件!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '下载并打包附件中...'
		});
		$.ajax({
			url : base + 'rd/error/check/confirm/doExportExcelsj.nut',
			type : 'post',
			dataType : 'json',
			data : {
				attachedId : document,
			},
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFileForBf(text);
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

function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}


