var ftpDataGrid;
$(function() {
	ftpDataGrid = mini.get("ftpDataGrid");
	ftpDataGrid.load();
});


function addRow(e) {
	mini.open({
				url : base + "sys/jsp/sys_ftpConfig.jsp",
				title : "新增FTP配置",
				iconCls : "icon-add",
				width : 500,
				height : 350,
				allowResize : false,
				ondestroy : function() {
					ftpDataGrid.reload();
				}

			});
}


function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
	+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(row_uid) {
	var row = ftpDataGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "ftpConfig/getFtpConfig.nut?ftpName=" + row.ftpName,
					title : "编辑FTP配置",
					width : 500,
					height : 350,
					iconCls : "icon-edit",
					allowResize : false,
					ondestroy : function() {
						ftpDataGrid.reload();
					}
				});
	}
}


function del(row_uid) {
	var row = ftpDataGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('确定删除此卸数规则!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + "ftpConfig/delete.nut",
									data : {
										ftpName : row.ftpName
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											ftpDataGrid.reload();
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
	var state = record.state;
	var s;
	// 拼接a标签
	if (state == 1) {
		s = '<a class="mini-button mini-button-plain"  href="javascript:edtiStatus(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-stop">停用</span></a> ';
	} else {
		s = '<a class="mini-button mini-button-plain"  href="javascript:edtiStatus(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-start">启用</span></a> ';
	}

	return s;
}

function edtiStatus(row_uid) {
	var row = ftpDataGrid.getRowByUID(row_uid);
	if (row) {
		$.ajax({
					type : "POST",
					url : base + "ftpConfig/editStatus.nut",
					data : {
						ftpName : row.ftpName
					},
					cache : false,
					async : false,
					dataType : 'json',
					success : function(data) {
						if (data) {
							ftpDataGrid.reload();
						} else {
							mini.alert("操作失败！");
						}
					}
				});
	}
}
