var reportTableGrid;
$(function() {
	reportTableGrid = mini.get('reportTableGrid');
	gridLoad();

});

// 刷新
function reloads(e) {
	gridLoad();
}
function gridLoad() {
	reportTableGrid.load();
}
function update() {
	var row = reportTableGrid.getSelected();

	var reportName1 = encodeURI(encodeURI(row.reportName));
	if (row) {
		mini.open({
			url : base + 'ci/jsp/ciReportBasicInfo_add.jsp?reportCode='
					+ row.reportCode + '&reportName=' + reportName1,
			title : '数据项信息',
			iconCls : 'icon-edit',
			width : 500,
			height : 140,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					reloads();
				}
			}
		});

	}
}
function onRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:showTableDataView(\''
			+ e + '\')"><span class="mini-button-text  mini-button-icon ';
	s += 'icon-edit">查看数据';
	s += '</span></a>';
	return s;
}
function showTableDataView(e) {
	var row = e.record;
	if (row) {
		mini.open({
					url :base + "ci/jsp/ciReportDataView.jsp?tableCode=" + row.mapTable,
					title : "数据查看",
					iconCls : "icon-edit",
					width : $(top.window).width() - 100,
					height : $(top.window).height() - 100,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							reload();
						}
					}
				});
	}
}
function search() {
	reportTableGrid.load({
		reportCode : mini.get("reportCode").getValue(),
		segmentNo : mini.get("segmentNo").getValue()

	});
}