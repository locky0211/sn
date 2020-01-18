var modelfltreegrid;
$(function() {
			modelfltreegrid = mini.get('modelfltreegrid');
			getUrlData();
		});

function getUrlData() {
	mini.mask({
				el : document.body,
				cls : 'mini-mark-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'modelfl/getUrlData.nut?url=' + getCategoryOfModels,
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success && text.data != null) {
						var jsondata = mini.decode(text.data);
						modelfltreegrid.loadData(jsondata.category);
					} else {
						mini.alert("未有数据或网络异常");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
};

function onActionRenderer(e) {
	var node = e.node;
	if (modelfltreegrid.isLeaf(node) && node.type == 'model') {
		return '<a class="mini-button mini-button-plain" href="javascript:editModelDesc()"><span class="mini-button-text  mini-button-icon icon-edit">解读编辑</span></a><a class="mini-button mini-button-plain" href="javascript:moveModel()"><span class="mini-button-text  mini-button-icon icon-edit">移动</span></a><a class="mini-button mini-button-plain" href="javascript:appendDept()"><span class="mini-button-text  mini-button-icon icon-edit">分配部门</span></a><a class="mini-button mini-button-plain" href="javascript:appendCycle()"><span class="mini-button-text  mini-button-icon icon-edit">执行周期</span></a>';
	}
}

function appendDept() {
	var row = modelfltreegrid.getSelectedNode();
	mini.open({
				url : base + "ews/jsp/modelDeptAssign.jsp?id=" + row.id + "&name=" + row.name,
				title : "分配部门",
				iconCls : "icon-add",
				width : 500,
				height : 300,
				allowResize : false,
				ondestroy : function(action) {
					getUrlData();
				}
			});
}
function appendCycle() {
	var row = modelfltreegrid.getSelectedNode();
	mini.open({
				url : base + "ews/jsp/modelCycleAssign.jsp?id=" + row.id + "&name=" + row.name,
				title : "分配执行周期",
				iconCls : "icon-add",
				width : 500,
				height : 300,
				allowResize : false,
				ondestroy : function(action) {
					getUrlData();
				}
			});
}

function moveModel() {
	var row = modelfltreegrid.getSelectedNode();
	mini.open({
				url : base + "ews/jsp/modelMove.jsp?id=" + row.id + "&parent=" + row.parent,
				title : "移动模型",
				iconCls : "icon-add",
				width : 500,
				height : 300,
				allowResize : false,
				ondestroy : function(action) {
					getUrlData();
				}
			});
}

function editModel() {
	var row = modelfltreegrid.getSelectedNode();
	if (row == null) {
		mini.alert("请先选中一行进行操作!");
	} else {
		mini.open({
					url : base + "ews/jsp/modelEdit.jsp?id=" + row.id + "&name=" + row.name + "&type=" + row.type,
					title : "编辑模型",
					iconCls : "icon-add",
					width : 500,
					height : 300,
					allowResize : false,
					ondestroy : function(action) {
						getUrlData();
					}
				});
	}
}

function addModel() {
	mini.open({
				url : base + "ews/jsp/modelAdd.jsp",
				title : "添加模型",
				iconCls : "icon-add",
				width : 500,
				height : 300,
				allowResize : false,
				ondestroy : function(action) {
					getUrlData();
				}
			});
}

function editModelDesc() {
	var row = modelfltreegrid.getSelectedNode();
	mini.open({
				url : base + "ews/jsp/modelDescEdit.jsp?id=" + row.id,
				title : "模型解读编辑",
				iconCls : "icon-edit",
				width : 800,
				height : 600,
				allowResize : false
			});
}
function addCategroy() {
	mini.open({
				url : base + "ews/jsp/categroyAdd.jsp",
				title : "添加分类",
				iconCls : "icon-add",
				width : 500,
				height : 300,
				allowResize : false,
				ondestroy : function(action) {
					getUrlData();
				}
			});
}

function delModelOrCategroy() {
	var row = modelfltreegrid.getSelectedNode();
	if (row == null) {
		mini.alert("请先选中一行进行操作!");
	} else if (!modelfltreegrid.isLeaf(row)) {
		mini.alert("请先删除子节点!");
	} else {
		$.ajax({
					url : base + 'modelDept/delModelOrCategroy.nut?id=' + row.id,
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert("操作成功!", "", function(action) {
										getUrlData();
									});
						} else {
							mini.alert("未有数据或网络异常");
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}
}
