var riskDataGrid;
$(function() {
	riskDataGrid = mini.get('riskDataGrid');
	search();
});

function search() {
	var title = mini.get('title').getValue();
	var status = mini.get('status').getValue();
	riskDataGrid.load({
		title : title,
		status : status
	});
}

function onStatusRender(e) {
	var status = e.record.status;
	var s = '';
	if (status == '0') {
		s = '未排查';
	}
	if (status == '1') {
		s = '已反馈';
	}
	return s;
}

function onActionRenderer(e) {
	var status = e.record.status;
	var modelRiskStatus = e.record.modelRiskStatus;
	if (modelRiskStatus != '2') {
		if (status == '0') {
			return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:recoredRisk()"><span class="mini-button-text  mini-button-icon icon-edit">录入结果</span></a>';
		} else {
			return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:recoredRisk()"><span class="mini-button-text  mini-button-icon icon-edit">录入结果</span></a><a class="mini-button mini-button-plain" href="javascript:viewRiskRecord()"><span class="mini-button-text  mini-button-icon icon-view">查看记录</span></a>';
		}
	} else {
		return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:viewRiskRecord()"><span class="mini-button-text  mini-button-icon icon-view">查看记录</span></a>';
	}
}

function viewRisk() {
	var row = riskDataGrid.getSelected();
	var id = getTaskId(row.modelRiskId);
	mini.open({
		url : base + 'ews/jsp/modelDataView.jsp?id=' + id,
		title : '查看模型任务信息',
		iconCls : 'icon-search',
		width : parseInt($(top.window).width() / 10 * 8),
		borderStyle : "padding:0px 0px;",
		height : $(top.window).height(),
		allowResize : false,
		showMaxButton : true
	});
}

function getTaskId(id) {
	var taskId = '';
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'modelRisk/getTaskIdByModelRiskId.nut?modelRiskId=' + id,
		async : false,
		success : function(text) {
			if (text.success) {
				taskId = text.data;
			}
		}
	});
	return taskId;
}

function recoredRisk() {
	var row = riskDataGrid.getSelected();
	mini.open({
		url : base + "ews/jsp/modelRiskRecordAdd.jsp?id=" + row.id + "&title="
				+ row.title + "&modelRiskId=" + row.id,
		title : "录入",
		iconCls : "icon-add",
		width : 500,
		height : 300,
		allowResize : false,
		ondestroy : function(action) {
			riskDataGrid.reload();
		}
	});
}

function viewRiskRecord() {
	var row = riskDataGrid.getSelected();
	mini.open({
		url : base + "ews/jsp/modelRiskRecordMyView.jsp?id=" + row.id,
		title : "查看录入",
		iconCls : "icon-view",
		width : 600,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			riskDataGrid.reload();
		}
	});
}