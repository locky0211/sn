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
		+ '\')"><span class="mini-button-text  mini-button-icon icon-system">分步执行</span></a><a class="mini-button mini-button-plain" href="javascript:doManual()"><span class="mini-button-text  mini-button-icon icon-system">重新执行</span></a>';
	} else if (value == '2') {
		return '处理中';
	} else {
		return '<font color=\"red\">处理失败</font><a class="mini-button mini-button-plain" href="javascript:doManual()"><span class="mini-button-text  mini-button-icon icon-system">手工执行</span></a><a class="mini-button mini-button-plain" href="javascript:doPartManual(\''
		+ record._uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-system">分步执行</span></a>';
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
function onDoRender(e) {
	var record = e.record;
	var state = record.state;
	if (state == '2') {
		return '<div class="mini-button mini-button-plain"><span class="mini-button-text  mini-button-icon icon-wait">处理中</span></div>';
	} else {
		return '<a class="mini-button mini-button-plain" href="javascript:showLogContent(\''
				+ record._uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-text">日志信息</span></a>';
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
		url : base + 'dy_xcz/dm/doDataLoadTask.nut?reportDate=' + row.dataDate
				+ '&reportType=' + row.dataType,
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
		url : base + 'dy_xcz/jsp/dy_xcz_import_task_part.jsp?dataDate='
				+ row.dataDate+'&dataType='+row.dataType,
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
