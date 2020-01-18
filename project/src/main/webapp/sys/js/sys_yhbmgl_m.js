var yonghuGrid;
var data;
$(function() {
			yonghuGrid = mini.get("usergrid");
			gridLoad();
			$.ajax({
				type : 'POST',
				dataType : 'json',
				async : false,
				url : base + 'sys/ggzd/getGgzdList.nut?groupId=SYS_YGBMGL',
				success : function(text) {
					data = text;
				},
				error : function(jqXHR, textStatus, errorThrown) {
				},
				complete : function() {
				}
			});
		});

function gridLoad() {
	yonghuGrid.load();
}
function onRendererType(e) {
	if(e.record.userDepartment=="" || e.record.userDepartment==null){
		return e.record.userDepartment;
	}else{
	var ud=e.record.userDepartment.split(",");
	var udvalue="";
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < ud.length;j++) {
		if (data[i].zdValue ==ud[j] ) {
			udvalue +=data[i].zdName+",";
		}
		}
	}
	udvalue=udvalue.substr(0,udvalue.lastIndexOf(","));
	return udvalue;
	}
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
function edit(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "sys/userDepartment/getUserMessage.nut?id=" + row.id,
					title : "编辑用户",
					width : 380,
					height : 230,
					iconCls : "icon-edit",
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							yonghuGrid.reload();
						}
					}
				});
	}
}
function search() {
	var keyN = mini.get("userId").getValue();
	var keyI = mini.get("userName").getValue();
	
	yonghuGrid.load({
				userName : keyI,
				userId : keyN
			});
}
function del(row_uid) {
	var row = yonghuGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + "sys/userDepartment/deleteUser.nut",
									data : {
										"id" : row.id
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
function addRow(e) {
	mini.open({
				url : base + "sys/jsp/sys_yhbmgl.jsp",
				title : "新增用户",
				iconCls : "icon-add",
				width : 380,
				height : 230,
				allowResize : false,
				ondestroy : function(action) {
					yonghuGrid.reload();
				}

			});
}
function addUser() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '添加用户中...'
	});
	$.ajax({
		type : 'POST',
		url : base + "sys/userDepartment/addAllUser.nut",
		data : {},
		dataType : 'json',
		success : function(data) {
			if (data) {
				yonghuGrid.reload();
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}