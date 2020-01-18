var dmImportLogInfoGrid;
$(function() {
	dmImportLogInfoGrid = mini.get("dmImportLogInfoGrid");
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				reportTypeArr = text;
			}
		}
	});
	gridLoad();
});

function gridLoad() {
	dmImportLogInfoGrid.load();
}

function onRenderer(e) {
	var value = e.value;
	var record = e.record;
	if (value == '1') {
		return '处理成功<a class="mini-button mini-button-plain" href="javascript:doPartManual(\''
		+ record._uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-system">分步执行</span></a><a class="mini-button mini-button-plain" href="javascript:doManual(\''
			+ record._uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-system">重新执行</span></a>';
	} else if (value == '2') {
		return '处理中';
	} else {
		return '<font color=\"red\">处理失败</font><a class="mini-button mini-button-plain" href="javascript:doManual()"><span class="mini-button-text  mini-button-icon icon-system">手工执行</span></a><a class="mini-button mini-button-plain" href="javascript:doPartManual(\''
		+ record._uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-system">分步执行</span></a>';
	}
}
function terminate(e){
	var row = dmImportLogInfoGrid.getSelected();
	 if (row) {
		 if(row.taskState !== "2"){
			 mini.confirm('请确认删除该任务？', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'rd/dmLog/nj/deleteDmImportLogInfo.nut',
									data : {
										'logId' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											dmImportLogInfoGrid.removeRow(row, true);
										} else {
											mini.alert(data.data, '提醒');
										}
									}
								});
					}
				});
		 }else{
			 mini.alert("任务执行中，无法执行删除操作!!!");
		 }
			
		 
	 }else{
		 alert("请选中需要删除的记录!");
	 }

}

// 报表类型
function reportTypeRenderer(e) {
	var row = e.row;
	for (var index = 0; index < reportTypeArr.length; index++) {
		if (reportTypeArr[index].zdValue == e.value) {
			return reportTypeArr[index].zdName;
		}
	}
}
//报表批次
function dataBatchRenderer(e) {
	if (e.value == '1') {
		return '第一批次';
	}else if(e.value == '2'){
		return '第二批次';
	}
}

function onDoRender(e) {
	var record = e.record;
	var state = record.state;
	if (state == '2') {
		return '<div class="mini-button mini-button-plain"><span class="mini-button-text  mini-button-icon icon-wait">处理中</span></div>';
	} else {
		return '<a class="mini-button mini-button-plain" href="javascript:showLogContent(\''
				+ record._uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-text">日志信息</span></a><a class="mini-button mini-button-plain" href="javascript:recheckrd(\''
				+ record._uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-text">逻辑校验</span></a><a class="mini-button mini-button-plain" href="javascript:remakeformula(\''
				+ record._uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-text">异动公式</span></a><a class="mini-button mini-button-plain" href="javascript:recheckyd(\''
				+ record._uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-text">异动校验</span></a>';
	}
}

function doManual() {
	var row = dmImportLogInfoGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'rd/dm/nj/doDataLoadTask.nut?reportDate=' + row.dataDate
				+ '&reportType=' + row.dataType+ '&dataBatch=' + row.dataBatch,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text == true) {
				gridLoad();
			} else {
				mini.alert("操作失败，请查看日志信息");
			}
			mini.unmask(document.body);
		},
		beforeSend : function(xhr) {

		}
	});
}

function doPartManual() {
	var row = dmImportLogInfoGrid.getSelected();
	mini.open({
		url : base + 'rd/jsp/dm_import_task_part.jsp?dataDate='
				+ row.dataDate+'&dataType='+row.dataType+ '&dataBatch=' + row.dataBatch,
		title : '查看执行步骤',
		iconCls : 'icon-edit',
		width : 800,
		height : 500,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
		}
	});
}

function showLogContent(row_uid) {
	var row = dmImportLogInfoGrid.getRowByUID(row_uid);
	var logInfoWin = mini.get("logInfoWin");
	// 清空window原来内容,防止叠加
	var el = logInfoWin.getBodyEl();
	el.innerHTML = '';
	logInfoWin.setBody(row.logInfo);
	logInfoWin.showAtPos("center", "middle");
	// logInfoWin.max();
}

function search() {
	dmImportLogInfoGrid.load({
		dataDateS : mini.get("dataDateS").getFormValue(),
		dataDateE : mini.get("dataDateE").getFormValue()
	});
}

// 刷新
function reloads(e) {
	gridLoad();
}

function recheckrd() {
	var row = dmImportLogInfoGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'rd/dm/nj/doRdCheck.nut?reportDate=' + row.dataDate
				+ '&reportType=' + row.dataType+ '&dataBatch=' + row.dataBatch,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text == true) {
				gridLoad();
				mini.alert("操作成功");
			} else {
				mini.alert("操作失败");
			}
			mini.unmask(document.body);
		},
	});
}
function remakeformula() {
	var row = dmImportLogInfoGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'rd/dm/nj/doMakeYdFormula.nut?reportDate=' + row.dataDate
				+ '&reportType=' + row.dataType+ '&dataBatch=' + row.dataBatch,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text == true) {
				gridLoad();
				mini.alert("操作成功");
			} else {
				mini.alert("操作失败");
			}
			mini.unmask(document.body);
		},
	});
}
function recheckyd() {
	var row = dmImportLogInfoGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'rd/dm/nj/doRdYdCheck.nut?reportDate=' + row.dataDate
				+ '&reportType=' + row.dataType+ '&dataBatch=' + row.dataBatch,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text == true) {
				gridLoad();
				mini.alert("操作成功");
			} else {
				mini.alert("操作失败");
			}
			mini.unmask(document.body);
		},
	});
}