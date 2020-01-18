/**
 * 
 */
var evidenceTreeGrid;
$(function() {
	evidenceTreeGrid = mini.get('evidenceTreeGrid');
	evidenceTreeGrid.load();
});


function addEvidenceTableInfo() {
	mini.open({
		url : base + "rd/jsp/evidence_table_info.jsp",
		title : "新增材料信息",
		iconCls : "icon-add",
		width : 550,
		height : 200,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function() {
			evidenceTreeGrid.reload();
		}
	});
}

/**
 * 保存树形结构 xiaxiaofeng 2013/9/16
 */
function doSaveJG() {
	var rows = evidenceTreeGrid.getList();
	var dataStr = '';
	for (var i = 0, l = rows.length; i < l; i++) {
		var row = rows[i];
		var index = evidenceTreeGrid.indexOf(row);
		dataStr += "{sortNum:'" + index + "',id:'" + row.id + "',parent:'" + row.parent + "'},";
	}
	$.ajax({
				type : "POST",
				url : base + "evidence/tableInfo/doSaveZjcl.nut",
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

function onActionRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit() {
	var row = evidenceTreeGrid.getSelectedNode();
	if (row) {
		mini.open({
					url : base + "evidence/tableInfo/toEditSysQxgl.nut?id=" + row.id+"&page=/rd/jsp/evidence_table_info.jsp?id="+row.id,
					title : "编辑配置",
					iconCls : "icon-edit",
					width : 500,
					height : 400,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							evidenceTreeGrid.reload();
						}
					}
				});
	}
}

function del() {
	var node = evidenceTreeGrid.getSelectedNode();
	if (node) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									type : "POST",
									url : base + "evidence/tableInfo/deleteQxgl.nut",
									data : {
										"id" : node.id
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											evidenceTreeGrid.removeNode(node);
										}
									}
								});
					}
				});
	}
}