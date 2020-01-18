var promptWarnGrid
$(function() {
	promptWarnGrid = mini.get('promptWarnGrid');
	promptWarnGrid.load({
		fileType : fileType
	});
});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function search() {
	promptWarnGrid.load({
		fileType : fileType,
		organNo : mini.get('organNo').getValue(),
		reportName : mini.get('reportName').getValue(),
		startTime : mini.get('startTime').getFormValue(),
		endTime : mini.get('endTime').getFormValue(),
	});
}

function clear() {
	mini.get('organNo').setValue(''),
	mini.get('reportName').setValue(''),
	mini.get('startTime').setValue(''),
	mini.get('endTime').setValue('')
}

function addPromptWarn() {
	var title = "";
	if(fileType === '0'){
		title = "警示单";
	}else if(fileType === '1'){
		title = "提示单";
	}
	mini.open({
		url : base + "rd/jsp/rd_error_record_warn_detail.jsp?fileType="+fileType,
		title : title,
		iconCls : "icon-edit",
		width : 500,
		height : 320,
		allowResize : false,
		ondestroy:function(){
			promptWarnGrid.reload();
		}
	});
}

function deletePromptWarn() {
	var e = promptWarnGrid.getSelected();
	if(e){
		$.ajax({
			type : "POST",
			url : base + "rd/promptwarn/deletePromptOrWarn.nut",
			dataType : 'json',
			data : {
				id : e.id
			},
			success : function(data) {
				if (data.success) {
					mini.alert(data.data, '提醒',function(action) {
						promptWarnGrid.reload();
					});
				} else {
					mini.alert(data.data, "提醒");
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	}else {
		mini.alert("请选择需要删除的记录!!!",'提醒');
	}
}

function doDownLoad() {
	var e = promptWarnGrid.getSelected();
	if(e){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '通报批量处理中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/promptwarn/doDownLoad.nut",
			dataType : 'json',
			data : {
				id : e.id
			},
			success : function(data) {
				if (data.success) {
					mini.alert("下载成功!!", "提醒", function() {
						toDownLoadFileForWord(data.data);
					});
				} else {
					mini.alert("下载失败!!", "提醒", function() {
					});
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	}else {
		mini.alert("请选择需要下载的文件!!!");
	}
		
}

function toDownLoadFileForWord(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function doDownLoadFile() {
	var url = "";
	if(fileType === "1"){
		url = base + "rd/error/dispose/downLoadPromptWord.nut";
	}else if(fileType === "0"){
		url = base + "rd/error/dispose/downLoadWarnWord.nut";
	}
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '通报批量处理中请稍后...'
	});	
	$.ajax({
		type : "POST",
		url : url,
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.alert("下载成功!!", "提醒", function() {
					toDownLoadFileForWord(data.data);
				});
			} else {
				mini.alert("下载失败!!", "提醒", function() {
				});
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