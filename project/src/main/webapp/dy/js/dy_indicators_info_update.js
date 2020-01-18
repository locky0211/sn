var indicatorsInfoGrid;
$(function() {
			indicatorsInfoGrid = mini.get('indicatorsInfoGrid');
			indicatorsInfoGrid.load();
		});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}
function edit(row_uid) {
	var row = indicatorsInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'dy/indicators/toEditindicatorsInfo.nut?indName=' + row.indName + '&versionNo=' + row.versionNo
							+ '&page=/dy/jsp/dy_indicators_info.jsp',
					title : '指标信息修改',
					iconCls : 'icon-edit',
					width : 580,
					height : 520,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						if (action == 'ok') {
							indicatorsInfoGrid.reload();
						}
					}
				});
	}
}

function del(row_uid) {
	var row = indicatorsInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'dy/indicators/deleteindicatorsInfo.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											indicatorsInfoGrid.removeRow(row, true);
										} else {
											indicatorsInfoGrid.reload();
										}
									}
								});
					}
				});
	}
}
