var jsDataGrid;
$(function() {
			jsDataGrid = mini.get('jsDataGrid');
			jsDataGrid.load();
		});
function search() {
	var key1 = mini.get('key').getValue();
	jsDataGrid.load({
				tabCode : key1
			});
}

function onKeyEnter() {
	search();
}

function add() {
	mini.open({
				url : base + 'rd/jsp/rd_table_coord_version.jsp',
				title : '新增记录',
				width : 700,
				height : 414,
				allowResize : false,
				iconCls : "icon-add",
				ondestroy : function(action) {
					if (action == 'ok') {
						jsDataGrid.reload();
					}
				}
			});
}

function onActionRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateRecordStatus(\'' + uid
		+ '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.validFlag == '0') {
	s += 'icon-start">启用';
	} else {
	s += 'icon-stop">停用';
	}
	s += '</span></a>';
    var n = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
    s += n;
	return s;
}

function toUpdateRecordStatus(row_uid) {
	var row = jsDataGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'rd/tabcoord/updateRecordStatus.nut',
				data : {
					'id' : row.id,
					'validFlag' : row.validFlag
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						jsDataGrid.updateRow(row, data.data);
					}
				}
			});
}

function edit(row_uid) {
	var row = jsDataGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'rd/tabcoord/toEditRecordInfo.nut?tabid=' + row.id+
					'&page=/rd/jsp/rd_table_coord_version.jsp',
					title : '报表模板编辑',
					iconCls : 'icon-edit',
					width : 700,
					height : 414,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							jsDataGrid.reload();
						}
					}
				});
	}
}



function del(row_uid) {
	var row = jsDataGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('确定删除记录？', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'rd/tabcoord/deleteRecordInfo.nut',
									data : {
										'tableId' : row.id
									},
									dataType : 'json',
									success : function(data) {
											jsDataGrid.reload();
									}
								});
					}
				});
	}
}

function reload() {
	jsDataGrid.reload();
}