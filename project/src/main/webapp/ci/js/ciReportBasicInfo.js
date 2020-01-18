var reportBasicInfoGrid;
$(function() {
	reportBasicInfoGrid = mini.get('reportBasicInfoGrid');
	 gridLoad();

		});

function addReportBasicInfo(e) {
	mini.open({
				url : base + "ci/jsp/ciReportBasicInfo_add.jsp",
				title : "新增报文信息",
				iconCls : "icon-add",
				width : 500,
				height : 150,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
//刷新
function reloads(e) {
	gridLoad();
}
function gridLoad() {
	reportBasicInfoGrid.load();
}
function update() {
	var row = reportBasicInfoGrid.getSelected();

	var reportName1=encodeURI(encodeURI(row.reportName)); 
	if (row) {
		mini.open({
					url : base + 'ci/jsp/ciReportBasicInfo_add.jsp?reportCode=' + row.reportCode+'&reportName='+reportName1,
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
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toGetReportBasicInfo(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon ';	
		s += 'icon-edit">查看数据段';
	s += '</span></a>';
	return s;
}
function showSegmentView(e) {
	var row = e.record;

	if (row) {
		mini.open({
					url : base + 'ci/jsp/ciReportSegmentInfo.jsp?reportCode=' + row.reportCode,
					title : '报文数据段',
					iconCls : 'icon-edit',
					width : 1050,
					height : 500,
					allowResize : false,
					showMaxButton : true,
					
				});

	}
}
function search() {
	reportBasicInfoGrid.load({
				
				reportCode : mini.get("reportCode").getValue()
				
			});
}
function del() {
	var row = reportBasicInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'ci/reportBasic/deleteReportBasicInfo.nut',
									data : {
										'reportCode' : row.reportCode
									},
									dataType : 'json',
									success : function(text) {
										if (text.success) {
											if(text.data=="0"){
												mini.alert('无操作权限!!', '提醒');
											} else{
											mini.alert('操作成功!!', '提醒',function(action) {
												reloads();
											});
											}
										}   else {
											mini.alert('操作失败!!', '提醒');
										}
									},
								});
					}
				});
	}
}