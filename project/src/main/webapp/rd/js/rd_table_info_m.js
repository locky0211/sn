var tableInfoGrid;
$(function() {
			tableInfoGrid = mini.get('tableInfoGrid');
			tableInfoGrid.load();
		});

function onStatusRenderer(e) {
	if (e.value == 'y') {
		return '启用';
	}
	return '<font color="red">停用</font>';
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateTableInfoStatus(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.status == 'y') {
		s += 'icon-stop">停用';
	} else {
		s += 'icon-start">启用';
	}
	s += '</span></a>';
	return s;
}

function toUpdateTableInfoStatus(row_uid) {
	var row = tableInfoGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'rd/table/updateTableInfoStatus.nut',
				data : {
					'tabCode' : row.tabCode,
					'status' : row.status
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						tableInfoGrid.updateRow(row, data.data);
					}
				}
			});
}

function addTableInfo(e) {
	mini.open({
				url : base + "rd/jsp/rd_table_info.jsp",
				title : "新增报表模板信息",
				iconCls : "icon-add",
				width : 550,
				height : 600,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
function addTableInfoVersionNo(e) {
	var row = tableInfoGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'rd/table/toAddTableInfoVersionNo.nut?tabCode=' + row.tabCode + '&page=/rd/jsp/rd_table_info.jsp',
					title : '新增报表模板信息',
					iconCls : 'icon-add',
					width : 550,
					height : 600,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						if (action == 'ok') {
							reloads();
						}
					}
				});
	} else {
		mini.alert('请选中需要新增版本的报表信息!!', '提醒');
	}
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'rd/table/fetchTableInfo.nut',
				data : {
					'tabCode' : row.tabCode
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						tableInfoGrid.updateRow(row, data);
					} else {
						tableInfoGrid.reload();
					}
				}
			});
}

function update() {
	var row = tableInfoGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_table_info_update.jsp?tabCode=' + row.tabCode,
					title : '报表模板信息修改',
					iconCls : 'icon-edit',
					width : 850,
					height : 350,
					allowResize : false,
					showMaxButton : true
				});

	}
}

function del() {
	var row = tableInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'rd/table/deleteTableBasicInfo.nut',
									data : {
										'tabCode' : row.tabCode
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											tableInfoGrid.removeRow(row, true);
										} else {
											mini.alert(data.data, '提醒');
										}
									}
								});
					}
				});
	}
}
function reloads() {
	tableInfoGrid.reload();
}

function search() {
	tableInfoGrid.load({
				tabCode : mini.get("tabCode").getValue()
			});
}
