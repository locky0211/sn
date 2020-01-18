function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "dy/check/toDyReportCheckResultsView.nut?id=" + row.id + '&page=/dy/jsp/dy_report_check_results_view.jsp',
				title : "校验结果",
				iconCls : "icon-text",
				width : 750,
				height : 400,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});

}
