var indInfoGrid;
$(function() {
			indInfoGrid = mini.get('indInfoGrid');
			indInfoGrid.load();
		});

function add() {
	mini.open({
				url : base + "dy/jsp/dy_indicators_info.jsp?bId=" + mini.get('pId').getValue(),
				title : "新增指标公式",
				iconCls : "icon-add",
				width : 580,
				height : 420,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
function edit() {
	var row = indInfoGrid.getSelected();
	if (row) {
		mini.open({
					url : base + "dy/indicators/toEditIndicatorsInfo.nut?id=" + row.id + "&bId="
							+ mini.get('pId').getValue()+"&page=/dy/jsp/dy_indicators_info.jsp",
					title : '指标公式修改',
					iconCls : 'icon-edit',
					width : 580,
					height : 420,
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
function del() {
	var row = indInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'dy/indicators/deleteIndicatorsInfo.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											indInfoGrid.removeRow(row);
										} else {
											mini.alert('删除指标信息失败', '提醒');
										}
									}
								});
					}
				});
	}
}

function reloads() {
	indInfoGrid.reload();
}
