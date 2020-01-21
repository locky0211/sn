var ggzdTreeGrid;
var groupTree;
$(function() {
			ggzdTreeGrid = mini.get("ggzdm");
			groupTree = mini.get("groupTree");
		});

// 点击tree刷新grid
function onGroupTreeClick(e) {
	if (e.isLeaf) {
		var zuId = e.node.gId;
		ggzdTreeGrid.load({
					groupId : zuId
				});
	}
}

// 新增公共字典组
function addZu() {
	mini.open({
				url : base + "sys/jsp/sys_ggzd_group.jsp",
				title : "新增数据组",
				width : 330,
				height : 260,
				iconCls : "icon-add",
				allowResize : false,
				onload : function() {
					var iframe = this.getIFrameEl();
					iframe.contentWindow.SetDataOfGgzd(groupTree.getSelectedNode().gId);
				},
				ondestroy : function(action) {
					if (action == "ok") {
						groupTreeReload();
					}

				}
			});
}

// 修改组
function editZu() {
	var node = groupTree.getSelectedNode();
	if (node == null) {
		mini.alert("请先选择一个数据!!");
	} else {
		mini.open({
					url : base + "sys/ggzd/toEditGgzdzu.nut?gId=" + node.gId + "&page=/sys/jsp/sys_ggzd_group.jsp",
					title : "编辑数据",
					width : 330,
					height : 240,
					allowResize : false,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							groupTreeReload();
						}
					}
				});
	}
}

function doCleanCache() {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
	$.ajax({
				url : base + 'sys/ggzd/doCleanSysGgzdCache.nut',
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text) {
						mini.alert('加载成功!!', "提醒");
					} else {
						mini.alert('加载失败!!', "提醒");
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

function groupTreeReload() {
	groupTree.reload();
	var node = groupTree.getSelectedNode();
	if (node) {
		groupTree.expandNode(node);
		groupTree.expandPath(node);
	}
}

// 删除数据组
function deleteZu() {
	var node = groupTree.getSelectedNode();
	if (node == null) {
		mini.alert("请先选择一个数据!!");
	} else {
		mini.confirm("是否确认删除?", "删除数据", function(action) {
					if (action == "ok") {
						$.ajax({
									type : "POST",
									url : base + "sys/ggzd/deleteGgzdZu.nut",
									data : {
										"gId" : node.gId
									},
									dataType : 'json',
									cache : false,
									success : function(data) {
										if (data) {
											// 删除选中的节点
											groupTree.removeNode(node);
											groupTreeReload();
										} else {
											mini.alert("删除失败!!!");
										}

									}
								});
					}
				});
	}
}
// 新增公共字典
function addGgzd() {
	var sGroupNode = groupTree.getSelectedNode();
	if (sGroupNode == null || !groupTree.isLeaf(sGroupNode)) {
		mini.alert("请选择正确的子节点进行添加数据!!");
	} else {
		var pId;
		var gs = ggzdTreeGrid.getSelectedNode();
		if (gs != null) {
			pId = gs.zdValue;
		}
		mini.open({
					url : base + "sys/ggzd/toAddGgzd.nut?pId=" + pId + "&gId=" + sGroupNode.gId + "&page=/sys/jsp/sys_ggzd.jsp",
					title : "新增数据",
					iconCls : "icon-add",
					width : 380,
					height : 240,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							ggzdTreeGridReload();
						}
					}
				});
	}

}

// 添加后刷新
function ggzdTreeGridReload() {
	ggzdTreeGrid.reload();
	var node = ggzdTreeGrid.getSelectedNode();
	if (node) {
		ggzdTreeGrid.expandNode(node);
		ggzdTreeGrid.expandPath(node);
	}
}

// 彻底刷新
function reloads(e) {
	mini.get('key').setValue('');
	ggzdTreeGrid.reload();
	var node = ggzdTreeGrid.getSelectedNode();
	ggzdTreeGrid.deselect(node);
}

// miniui客户端查询方法
function search() {
	var key = mini.get("key").getValue();
	if (key == "") {
		ggzdTreeGrid.clearFilter();
	} else {
		ggzdTreeGrid.filter(function(node) {
					if (node.zdName.indexOf(key) != -1) {
						return true;
					}
				});
	}
}

// 修改公共字典数据
function edit() {
	var zdNode = ggzdTreeGrid.getSelectedNode();
	if (zdNode == null) {
		mini.alert("请先选择一个数据!!");
	} else {
		mini.open({
					url : base + "sys/ggzd/toEditGgzd.nut?id=" + zdNode.id + "&page=/sys/jsp/sys_ggzd.jsp",
					title : "编辑数据",
					width : 380,
					height : 290,
					allowResize : false,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							ggzdTreeGridReload();
						}
					}
				});
	}
}

function onOk() {
	var node = tree.getSelectedNode();
	if (node && tree.isLeaf(node) == false) {
		alert("不能选中父节点");
		return;
	}

	CloseWindow("ok");
}

// 删除公共字典
function ondelete() {
	var node = ggzdTreeGrid.getSelectedNode();
	if (node == null) {
		mini.alert("请先选择一个数据!!");
	} else {
		mini.confirm("是否确认删除?", "删除数据", function(action) {
					if (action == "ok") {
						$.ajax({
									type : "POST",
									url : base + "sys/ggzd/deleteGgzd.nut",
									data : {
										"id" : node.id
									},
									dataType : 'json',
									cache : false,
									success : function(data) {
										if (data.success == true) {
											ggzdTreeGrid.reload();
										} else {
											mini.alert("删除失败!!!");
										}

									}
								});
					}
				});
	}

}

// 保存结构
function doSaveJG() {
	var rows = ggzdTreeGrid.getList();
	var dataStr = '';
	for (var i = 0, l = rows.length; i < l; i++) {
		var row = rows[i];
		var index = ggzdTreeGrid.indexOf(row);
		dataStr += "{sortNum:'" + index + "',id:'" + row.id + "',pId:'" + row.pId + "'},";
	}
	$.ajax({
				type : "POST",
				url : base + "sys/ggzd/doSaveGgzdJG.nut",
				data : {
					ggzdList : "[" + dataStr.substring(0, dataStr.length - 1) + "]"
				},
        		contentType : "application/json",
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

function allExpand() {
	ggzdTreeGrid.expandAll();
}

function allCollapse() {
	ggzdTreeGrid.collapseAll();
}
