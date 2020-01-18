var yonghuGrid;
$(function() {
			yonghuGrid = mini.get("usergrid");
			gridLoad();
		});

function gridLoad() {
	yonghuGrid.load();
}

// 添加用户
function addRow(e) {
	mini.open({
				url : base + "sys/jsp/sys_user.jsp",
				title : "新增用户",
				iconCls : "icon-add",
				width : 660,
				height : 462,
				allowResize : false,
				ondestroy : function(action) {
					yonghuGrid.reload();
				}

			});
}

// miniui自带的客户端查询方法
function search() {
	var keyN = mini.get("keyName").getValue();
	var keyI = mini.get("keyId").getValue();
	var userOrgan = '';
	if (userId == 'admin') {
		userOrgan = mini.get('userOrgan').getValue();
	}
	yonghuGrid.load({
				keyName : keyN,
				keyId : keyI,
				userOrgan : userOrgan
			});
}

function onRendererPass(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:initPassword(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">密码初始化</span></a>';

	return s;
}
function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	if (userId == 'admin') {
		s += '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	}

	return s;
}
function initPassword(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		$.ajax({
					type : 'POST',
					url : base + 'sys/user/initUserPass.nut',
					data : {
						'userId' : row.userId
					},
					dataType : 'json',
					success : function(data) {
						mini.alert(data.data, "提醒");
					}
				});
	}
}

function edit(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "sys/user/getUserMessage.nut?userId=" + row.userId,
					title : "编辑用户",
					width : 660,
					height : 462,
					iconCls : "icon-edit",
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							updateRow(row);
						}
					}
				});
	}
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'sys/user/fetchSysUser.nut',
				data : {
					'userId' : row.userId
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						yonghuGrid.updateRow(row, data);
					}
				}
			});
}

function del(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + "sys/user/deleteUser.nut",
									data : {
										"userId" : row.userId
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											yonghuGrid.removeRow(row, true);
										} else {
											mini.alert("删除失败!!!");
										}
									}
								});
					}
				});
	}
}

// 修改状态入口
function onStatusRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var status = record.status;
	var s;
	// 拼接a标签
	if (status == "1") {
		s = '<a class="mini-button mini-button-plain"  href="javascript:edtiStatus(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">停用</span></a> ';
	} else {
		s = '<a class="mini-button mini-button-plain"  href="javascript:edtiStatus(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">启用</span></a> ';
	}

	return s;
}

// 修改状态的ajax方法
function edtiStatus(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		$.ajax({
					type : "POST",
					url : base + "sys/user/editStatus.nut",
					data : {
						"uid" : row.userId
					},
					cache : false,
					async : false,
					dataType : 'json',
					success : function(data) {
						if (data) {
							updateRow(row);
						} else {
							mini.alert("操作失败!!!");
						}
					}
				});
	}
}
