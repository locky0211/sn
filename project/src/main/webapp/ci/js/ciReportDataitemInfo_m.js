var ReportDataitemInfoGrid;
$(function() {
	ReportDataitemInfoGrid = mini.get('ReportDataitemInfoGrid');
	ReportDataitemInfoGrid.load();
		});

function showDataitemView(e) {
	var row = e.record;
	mini.open({
				url : base + "ci/reportDataitem/getReportDataitemInfoView.nut?id=" + row.id+'&page=/ci/jsp/ciReportDataitemInfo.jsp',
				title : "报文数据项信息",
				iconCls : "icon-text",
				width : 580,
				height : 360,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});

}
function add(e) {
	mini.open({
				url : base + "ci/jsp/ciReportDataitemInfo.jsp",
				title : "新增报文信息",
				iconCls : "icon-add",
				width : 580,
				height : 360,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
function del() {
	var row = ReportDataitemInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'ci/reportDataitem/deleteDataitemInfo.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											ReportDataitemInfoGrid.removeRow(row, true);
										} else {
											reloads();
										}
									}
								});
					}
				});
	}
}
//刷新
function reloads(e) {
	gridLoad();
}
function gridLoad() {
	ReportDataitemInfoGrid.load();
}