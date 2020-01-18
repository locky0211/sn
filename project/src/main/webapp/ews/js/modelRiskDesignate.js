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
		endDate : endDate
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
		return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:designateRisk()"><span class="mini-button-text  mini-button-icon icon-goto">排查</span></a>';
	} else if (status == '1'){
		return '<a class="mini-button mini-button-plain" href="javascript:viewRisk()"><span class="mini-button-text  mini-button-icon icon-view">查看风险</span></a><a class="mini-button mini-button-plain" href="javascript:viewRiskRecord()"><span class="mini-button-text  mini-button-icon icon-view">排查情况</span></a><a class="mini-button mini-button-plain" href="javascript:stopRiskRecord()"><span class="mini-button-text  mini-button-icon icon-stop">结束排查</span></a>';
	}else if (status == '2'){
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

function designateRisk() {
	var row = riskDataGrid.getSelected();
	mini.open({
		url : base + "ews/jsp/modelRiskDesUser.jsp?title=" + row.title
				+ "&modelRiskId=" + row.id,
		title : "指派",
		iconCls : "icon-add",
		width : 700,
		height : 440,
		allowResize : false,
		ondestroy : function(action) {
			riskDataGrid.reload();
		}
	});
}

function viewRiskRecord(id){
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

function stopRiskRecord(){
	var row = riskDataGrid.getSelected();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'modelRisk/stopModelRiskRecord.nut?id=' + row.id,
		success : function(text) {
			if (text.success) {
				mini.alert('操作成功!!', '提醒', function() {
					search();
				});
			} else {
				mini.alert('操作失败!!', '提醒');
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