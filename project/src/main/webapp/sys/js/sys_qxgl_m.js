var qxTreeGrid;
$(function() {
			qxTreeGrid = mini.get("qxTreeGrid");
		});
function search() {
	var key = mini.get("key").getValue();
	if (key == "") {
		qxTreeGrid.clearFilter();
	} else {
		key = key.toLowerCase();
		qxTreeGrid.filter(function(node) {
					var text = node.qxName ? node.qxName.toLowerCase() : "";
					if (text.indexOf(key) != -1) {
						return true;
					}
				});
		qxTreeGrid.expandAll();
	}
}

function onKeyEnter() {
	search();
}

var Status = [{
			id : 0,
			text : ''
		}, {
			id : 1,
			text : '功能节点'
		}];
function onStatusRenderer(e) {
	for (var i = 0, l = Status.length; i < l; i++) {
		var g = Status[i];
		if (g.id == e.value)
			return g.text;
	}
	return "";
}

function add() {
	var node = qxTreeGrid.getSelectedNode();
	mini.open({
				url : base + "sys/jsp/sys_qxgl.jsp",
				title : "新增权限",
				iconCls : "icon-add",
				width : 500,
				height : 400,
				allowResize : false,
				onload : function() {
					var iframe = this.getIFrameEl();
					iframe.contentWindow.SetDataOfQx(node.qxId);
				},
				ondestroy : function(action) {
					if (action == 'ok') {
						reload();
					}
				}
			});
}

function onActionRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit() {
	var row = qxTreeGrid.getSelectedNode();
	if (row) {
		mini.open({
					url : base + "sys/qx/toEditSysQxgl.nut?qxId=" + row.qxId,
					title : "编辑权限",
					iconCls : "icon-edit",
					width : 500,
					height : 400,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							reload();
						}
					}
				});
	}
}

function del() {
	var node = qxTreeGrid.getSelectedNode();
	if (node) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									type : "POST",
									url : base + "sys/qx/deleteQxgl.nut",
									data : {
										"qxId" : node.qxId
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											qxTreeGrid.removeNode(node);
										}
									}
								});
					}
				});
	}
}

function reload() {
	qxTreeGrid.reload();
	var node = qxTreeGrid.getSelectedNode();
	if (node) {
		qxTreeGrid.expandPath(node);
	}
}

/**
 * 保存树形结构 xiaxiaofeng 2013/9/16
 */
function doSaveJG() {
	var rows = qxTreeGrid.getList();
	var dataStr = '';
	for (var i = 0, l = rows.length; i < l; i++) {
		var row = rows[i];
		var index = qxTreeGrid.indexOf(row);
		dataStr += "{sortNum:'" + index + "',qxId:'" + row.qxId + "',pId:'" + row.pId + "'},";
	}
	$.ajax({
				type : "POST",
				url : base + "sys/qx/doSaveQxglJG.nut",
				data : "[" + dataStr.substring(0, dataStr.length - 1) + "]",
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						mini.alert("操作成功!!");
					} else {
						mini.alert("操作失败!!");
					}
				}
			});
}
