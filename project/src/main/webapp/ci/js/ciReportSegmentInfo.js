var ReportSegmentInfoGrid;
$(function() {
	ReportSegmentInfoGrid = mini.get('ReportSegmentInfoGrid');
	ReportSegmentInfoGrid.load();
		});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s =  '<a class="mini-button mini-button-plain" href="javascript:showDataitemView(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">查看数据项</span></a>'
			+'<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}
function edit() {
	var row = ReportSegmentInfoGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'ci/reportSegment/toEditSegmentInfo.nut?id=' + row.id
							+ '&page=/ci/jsp/ciReportSegmentInfo_edit.jsp',
					title : '报文数据项信息修改',
					iconCls : 'icon-edit',
					width : 400,
					height : 355,
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
function add(e) {
	mini.open({
				url : base + "ci/jsp/ciReportSegmentInfo_edit.jsp",
				title : "新增报文信息",
				iconCls : "icon-add",
				width : 400,
				height : 380,
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
	var row = ReportSegmentInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'ci/reportSegment/deleteRegmentInfo.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											ReportSegmentInfoGrid.removeRow(row, true);
										} else {
											reloads();
										}
									}
								});
					}
				});
	}
}
function showDataitemView() {
	var row = ReportSegmentInfoGrid.getSelected();
		if (row) {
			mini.open({
						url : base + 'ci/jsp/ciReportDataitemInfo_m.jsp?reportCode=' + row.reportCode+'&segmentNo='+row.segmentNo,
						title : '数据项信息',
						iconCls : 'icon-edit',
						width : 1200,
						height : 500,
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
//刷新
function reloads(e) {
	gridLoad();
}
function gridLoad() {
	ReportSegmentInfoGrid.load();
}