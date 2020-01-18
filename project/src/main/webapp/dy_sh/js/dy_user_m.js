var userGrid;
$(function() {
	userGrid = mini.get("usergrid");
	gridLoad();
});

function gridLoad() {
	userGrid.load();
}

// miniui自带的客户端查询方法
function search() {
	var keyN = mini.get("keyName").getValue();
	var keyI = mini.get("keyId").getValue();
	var userOrgan = '';
	if (userId == 'admin') {
		userOrgan = mini.get('userOrgan').getValue();
	}
	userGrid.load({
		keyName : keyN,
		keyId : keyI,
		userOrgan : userOrgan
	});
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:manageReport(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-collapse">报表管理配置</span></a>';
	return s;
}

function manageReport(row_uid) {
	var row = userGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
			url : base + "dy_sh/jsp/dy_user_report.jsp?userId="+ row.userId,
			title : row.userName + "&nbsp;&nbsp;管理的报表",
			width : 660,
			height : 462,
			iconCls : "icon-collapse",
			allowResize : false,
			ondestroy : function(action) {
				if (action == 'ok') {
					userGrid.reload();
				}
			}
		});
	}
}