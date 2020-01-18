var tableInfoGrid;
var data;
$(function() {
	tableInfoGrid = mini.get('tableInfoGrid');
	tableInfoGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE_WJ',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

function onRendererType(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.tabType) {
			return data[i].zdName;
		}
	}
}

function onAdd() {
	$.ajax({
		type : 'POST',
		url : base + 'dy/sh/table/searchTableNotInUser.nut',
		data : {
			'userId'  : userId
		},
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.open({
					url : base + "dy_sh/jsp/dy_user_report_list.jsp?userId=" + userId,
					title : "添加报表管理",
					iconCls : "icon-addnew",
					width : 660,
					height : 462,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						tableInfoGrid.reload();
					}
				});
			} else {
				mini.alert(data.data,"提醒");
			}
		}
	});
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:del(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">移除</span></a>';
	return s;
}

function del(row_uid) {
	var row = tableInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('是否确定移除？', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + 'dy/sh/table/deleteReportManage.nut',
					data : {
						'tableId' : row.tableId,
						'userId'  : userId
					},
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							tableInfoGrid.removeRow(row, true);
							tableInfoGrid.reload();
						} else {
							mini.alert(data.data);
							tableInfoGrid.reload();
						}
					}
				});
			}
		});
	}
}