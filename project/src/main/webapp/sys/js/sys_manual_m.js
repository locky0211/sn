var manualGrid;

$(function() {
	manualGrid = mini.get("manualGrid");
	manualGrid.load();
});

// 新增
function add() {
	mini.open({
		url : base + 'sys/jsp/sys_manual_edit.jsp',
		title : '操作手册配置新增',
		width : 500,
		height : 300,
		allowResize : false,
		ondestroy : function(action) {
			manualGrid.reload();
		}
	});
}

// 状态显示
function onValidRenderer(e) {
	if (e.value == '1') {
		return '启用';
	}
	return '<font color="red">停用</font>';
}

// 操作
function onActionRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateManualStatus(\''
			+ uid + '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.status == '1') {
		s += 'icon-stop">停用';
	} else {
		s += 'icon-start">启用';
	}
	s += '</span></a><a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

// 修改状态
function toUpdateManualStatus(row_uid) {
	var row = manualGrid.getRowByUID(row_uid);
	$.ajax({
		type : 'POST',
		url : base + 'sys/manual/updateManualStatus.nut',
		data : {
			'manualId' : row.manualId,
			'status' : row.status
		},
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				manualGrid.updateRow(row, data.data);
			}
		}
	});
}

// 跳转编辑页面
function edit() {
	var e = manualGrid.getSelected();
	mini.open({
		url : base + 'sys/manual/getManualById.nut?manualId=' + e.manualId
				+ '&page=/sys/jsp/sys_manual_edit.jsp',
		title : '操作手册配置编辑',
		width : 500,
		height : 300,
		allowResize : false,
		ondestroy : function(action) {
			manualGrid.reload();
		}
	});
}

// 删除记录
function del() {
	var e = manualGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == "ok") {
				$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + "sys/manual/deleteManual.nut?manualId="
							+ e.manualId,
					success : function(text) {
						if (text.success) {
							manualGrid.removeRow(e, true);
						} else {
							mini.alert('操作失败!!', '提醒', function() {
							})
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
					}
				});
			}
		});
	}
}
