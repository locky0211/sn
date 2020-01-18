function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view.jsp',
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
