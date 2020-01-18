var reportSummaryGrid;
var isSumArr;
$(function() {
	reportSummaryGrid = mini.get("#reportSummaryGrid");
	reportSummaryGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DL_SUMMARY_ISSUM',
		success : function(text) {
			isSumArr = text;
		}
	});
});

function onIsSumRenderer(e) {
	for (var i = 0; i < isSumArr.length; i++) {
		if (isSumArr[i].zdValue == e.record.isSum) {
			return isSumArr[i].zdName;
		}
	}
}

//新增
function add() {
	mini.open({
		url : base + 'dl/jsp/dlReportSummaryLOEdit.jsp',
		title : '新增汇总配置',
		width : 660,
		height : 500,
		allowResize : false,
		ondestroy : function(action) {
			reportSummaryGrid.reload();
		}
	});
}

function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

//编辑
function edit(e) {
	var e = reportSummaryGrid.getSelected();
	mini.open({
		url : base + 'dl/reportSummary/getReportSummaryLOById.nut?id=' + e.id
				+ '&page=/dl/jsp/dlReportSummaryLOEdit.jsp',
		title : '汇总配置维护',
		width : 660,
		height : 500,
		allowResize : false,
		ondestroy : function(action) {
			reportSummaryGrid.reload();
		}
	});
}

//删除
function del() {
	var e = reportSummaryGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dl/reportSummary/deleteReportSummaryLO.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							reportSummaryGrid.removeRow(e, true);
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
		});
	} else {
		mini.alert("请选择你要删除的记录!!");
	}
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	reportSummaryGrid.load({
		typeCode : mini.get('#typeCode').getValue(),
		bfTabCode : mini.get('#bfTabCode').getValue()
	});
}