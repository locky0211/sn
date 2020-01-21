var bmglgrid;
$(function() {
			bmglgrid = mini.get("bmTreeGrid");
		});
function add() {
	var selectNode = bmglgrid.getSelectedNode();
	var data = '';
	if (selectNode) {
		data = selectNode.bmCode;
	}
	mini.open({
				url : base + "sys/jsp/sys_bmgl.jsp",
				title : "新增机构",
				iconCls : "icon-add",
				width : 400,
				height : 400,
				allowResize : false,
				onload : function() {
					var iframe = this.getIFrameEl();
					iframe.contentWindow.SetDataOfOrgan(data);
				},
				ondestroy : function(action) {
					if (action == 'ok') {
						reload();
					}
				}
			});
};

function onActionRenderer(e) {
	var record = e.record;// 行对象
	var uid = record._uid;

	var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:delRow(\''
			+ uid
			+ '\')"><span class="mini-button-text mini-button-icon icon-remove">删除</span></a>';
	return s;
};

function edit() {
	var row = bmglgrid.getSelectedNode();
	if (row) {
		mini.open({
					url : base + "sys/bm/toEditSysBmgl.nut?bmCode=" + encodeURIComponent(row.bmCode),
					title : "编辑机构",
					width : 400,
					height : 400,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							reload();
						}
					}
				});
	}
};

function delRow(row_uid) {
	var row = bmglgrid.getRowByUID(row_uid);
	var node = bmglgrid.getSelectedNode();
	if (row) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									url : base + "sys/bm/delBmgl.nut?bmCode=" + row.bmCode,
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											bmglgrid.removeNode(node);
										}
									}
								});
					}
				});
	}
};

function search() {
	var bmName = mini.get('bmName').getValue();
	var bmType = mini.get('bmType').getValue();
	reload(bmName, bmType);
};

function doSaveJG() {
	var rows = bmglgrid.getList();
    var sortArray = new Array();

	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '信息处理中...'
			});
	for (var i = 0, l = rows.length; i < l; i++) {
		var row = rows[i];
		var index = bmglgrid.indexOf(row);

        var obj ={};
        obj.sortNum=""+index;
        obj.bmCode=""+row.bmCode;
        obj.pId= ""+row.pId;
        sortArray.push(obj);
	}
	$.ajax({
				type : "POST",
				url : base + "sys/bm/doSaveBmglJG.nut",
				data :mini.encode(sortArray),
				dataType : 'json',
        		contentType : "application/json",
				success : function(data) {
					if (data.success) {
						mini.alert("操作成功!!");
					} else {
						mini.alert("操作失败!!");
					}
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
}

function reload(bmName, bmType) {
	bmglgrid.load({
				bmName : bmName,
				bmType : bmType
			});
	var node = bmglgrid.getSelectedNode();
	if (node) {
		bmglgrid.expandPath(node);
		bmglgrid.expandNode(node);
	}
};