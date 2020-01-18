var jsDataGrid;
$(function() {
			jsDataGrid = mini.get('jsDataGrid');
			jsDataGrid.load();
		});
function search() {
	var key1 = mini.get('key').getValue();
	jsDataGrid.load({
				key : key1
			});
}

function onKeyEnter() {
	search();
}

function add() {
	mini.open({
				url : base + 'sys/jsp/sys_jsgl.jsp',
				title : '新增角色',
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

var Status = [{
			id : 0,
			text : '停用'
		}, {
			id : 1,
			text : '启用'
		}];
function onStatusRenderer(e) {
	for (var i = 0, l = Status.length; i < l; i++) {
		var g = Status[i];
		if (g.id == e.value)
			return g.text;
	}
	return '';
}

function onActionRenderer(e) {
	var record = e.record;
	var uid = record._uid;

	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}

function edit(row_uid) {
	var row = jsDataGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'sys/jus/toEditSysJsList.nut?jsId=' + row.jsId,
					title : '角色编辑',
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
									url : base + 'sys/jus/deleteJsgl.nut',
									data : {
										'jsId' : row.jsId
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											jsDataGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}

function reload() {
	jsDataGrid.reload();
}