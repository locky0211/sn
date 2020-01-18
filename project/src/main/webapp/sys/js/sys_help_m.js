var sysNoticeGrid;
$(function() {
			sysNoticeGrid = mini.get("sysNoticeGrid");
			sysNoticeGrid.load();
		});

function onRenderer(e) {
	var record = e.record;// 行对象
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(' + uid
			+ ')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:delRow(\'' + uid
			+ '\')"><span class="mini-button-text mini-button-icon icon-remove">删除</span></a>';
	return s;
};
function addNotice() {
	mini.open({
				url : base + "sys/jsp/sys_help.jsp",
				title : "新增帮助",
				iconCls : "icon-add",
				width : 780,
				height : 490,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						sysNoticeGrid.reload();
					}
				}
			});
}

function edit(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "sys/help/toEditSysHelp.nut?id=" + row.id + '&page=/sys/jsp/sys_help.jsp',
					title : "编辑系统公告",
					width : 780,
					height : 490,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							sysNoticeGrid.reload();
						}
					}
				});
	}
};

function delRow(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									url : base + "sys/help/delSysHelp.nut?id=" + row.id,
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											sysNoticeGrid.removeRow(row);
										}
									}
								});
					}
				});
	}
};

function search() {
	sysNoticeGrid.load({
				title : mini.get('schemaType').getValue(),
				content : mini.get('title').getValue()
			});
};


