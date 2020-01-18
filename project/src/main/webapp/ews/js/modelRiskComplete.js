var riskDataGrid;
$(function() {
	riskDataGrid = mini.get('riskDataGrid');
	search();
});

function search() {
	var startDate = mini.get('startDate').getText();
	var endDate = mini.get('endDate').getText();
	riskDataGrid.load({
		startDate : startDate,
		endDate : endDate,
		status : "2"
	});
}

function onStatusRender(e) {
	var status = e.record.status;
	var s = '';
	if (status == '0') {
		s = '未排查';
	}
	if (status == '1') {
		s = '排查中';
	}
	if (status == '2') {
		s = '排查完成';
	}
	return s;
}

function onActionRenderer(e) {
	var status = e.record.status;
	if (status == '0') {
		return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a>';
	} else {
		return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:viewRiskRecord()"><span class="mini-button-text  mini-button-icon icon-view">排查情况</span></a>';
	}
}

function viewRisk() {
	var row = riskDataGrid.getSelected();
	mini.open({
		url : base + 'ews/jsp/modelDataView.jsp?id=' + row.taskId,
		title : '查看模型任务信息',
		iconCls : 'icon-search',
		width : parseInt($(top.window).width() / 10 * 8),
		borderStyle : "padding:0px 0px;",
		height : $(top.window).height(),
		allowResize : false,
		showMaxButton : true
	});
}

function viewRiskRecord() {
	var row = riskDataGrid.getSelected();
	mini.open({
		url : base + "modelRisk/viewRiskRecord.nut?modelRiskId=" + row.id,
		title : "排查进度",
		iconCls : "icon-view",
		width : parseInt($(top.window).width() * 0.7),
		height : $(top.window).height(),
		allowResize : false,
		ondestroy : function(action) {
			riskDataGrid.reload();
		}
	});
}