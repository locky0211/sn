$(function() {
	var tableCode =	mini.get("tableCode").getValue();
	var tableCodes;
	var errorTabcodes = "[";
	if(tableCode.indexOf("@") != -1){
		tableCodes = tableCode.split("@");
		for(var i = 0;i<tableCodes.length;i++){
			errorTabcodes = errorTabcodes+'{id:\''+tableCodes[i]+'\',text:\''+tableCodes[i]+'\'},'
		}
		errorTabcodes = errorTabcodes.substring(0,errorTabcodes.length - 1)+"]";
	}else{
		errorTabcodes = "["+'{id:\''+tableCode+'\',text:\''+tableCode+'\'}'+"]"
	}
	mini.get("errorTabcode").set({data:errorTabcodes});
	
	if(tableCode.indexOf("@") == -1){
		mini.get("errorTabcode").select(0);
	}
	//获取单个报表编号
	
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
	var form = new mini.Form("#errorTrueForm");
	form.validate();
	if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'rd/error/check/confirm/UpdateErrorTrueInfo.nut',
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

function doReportImport(){
	var form = new mini.Form("#errorTrueForm");
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

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}
