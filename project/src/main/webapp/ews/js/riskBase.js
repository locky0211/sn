var riskbaseTreegrid;
$(function() {
	riskbaseTreegrid = mini.get('riskbaseTreegrid');
	search();
});

function search() {
	var key = mini.get("title").getValue();
	if (key == "") {
		riskbaseTreegrid.clearFilter();
	} else {
		key = key.toLowerCase();
		riskbaseTreegrid.filter(function(node) {
			var text = node.title ? node.title.toLowerCase() : "";
			if (text.indexOf(key) != -1) {
				return true;
			}
			riskbaseTreegrid.expandAll();
		});
	}
}

function onActionRenderer(e) {
	return '<a class="mini-button mini-button-plain" href="javascript:editRiskBase()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a><a class="mini-button mini-button-plain" href="javascript:deleteRiskBase()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
}

function addFolder() {
	mini.open({
		url : base + "ews/jsp/riskBaseFolderAdd.jsp?type=0",
		title : "新增",
		iconCls : "icon-add",
		width : 600,
		height : 250,
		allowResize : false,
		ondestroy : function(action) {
			riskbaseTreegrid.reload();
		}
	});
}

function add() {
	mini.open({
		url : base + "ews/jsp/riskBaseAdd.jsp?type=1",
		title : "新增",
		iconCls : "icon-add",
		width : 800,
		height : 600,
		allowResize : false,
		ondestroy : function(action) {
			riskbaseTreegrid.reload();
		}
	});
}

function editRiskBase() {
	var row = riskbaseTreegrid.getSelectedNode();
	var type = row.type;
	var url = base;
	var width = 600;
	var height = 250;
	if (type == '0') {
		url += 'riskBase/gotoEidtRiskBaseFolder.nut';
	} else if (type == '1') {
		url += 'riskBase/gotoEidtRiskBase.nut';
		width = 800;
		height = 600;
	}
	url += '?id=' + row.id;
	mini.open({
		url : url,
		title : '编辑',
		iconCls : 'icon-edit',
		width : width,
		height : height,
		allowResize : false,
		ondestroy : function(action) {
			riskbaseTreegrid.reload();
		}
	});
}

function deleteRiskBase() {
	var row = riskbaseTreegrid.getSelectedNode();
	mini.confirm('删除后数据无法恢复', '提醒', function(action) {
		if (action == "ok") {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'riskBase/deleteRiskBase.nut?id=' + row.id,
				success : function(text) {
					if (text.success) {
						mini.alert('删除成功!!', '提醒', function() {
							riskbaseTreegrid.reload();
						});
					} else {
						mini.alert('删除失败!!', '提醒');
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
	});
}