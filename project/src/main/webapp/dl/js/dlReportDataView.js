var grid;
$(function() {
	grid = mini.get('dlReportDataGrid');
	if (reportId != '') {
		initDataGrid();
	}
});

// 初始化表结构
function initDataGrid() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'dl/reportTable/getReportDataStruct.nut',
		type : 'post',
		data : {
			reportId : reportId
		},
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				var gird = mini.get('dlReportDataGrid');
				grid.set({
					columns : text.data
				});
				grid.hideColumn(0);//隐藏第一列:ID
				grid.hideColumn(1);//隐藏第二列:BRNO
				grid.hideColumn(2);//隐藏第三列:REPORTDATE
				grid.load({
					reportId : reportId,
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

//查看明细
function viewDetail(e) {
	var row = e.record;
	mini.open({
		url : base + "dl/reportTable/getReportDataDetail.nut?reportId=" + reportId
				+ "&dataId=" + row.id,
		title : "数据详细信息",
		iconCls : "icon-edit",
		width : 900,
		height : 460,
		ondestroy : function(action) {
			grid.load({
				reportId : reportId
			});
		}
	});
}