var indicatorsInfoGrid;
$(function() {
			indicatorsInfoGrid = mini.get('indicatorsInfoGrid');
			indicatorsInfoGrid.load();
		});

function onPcRenderer(e) {
	var record = e.record;
	if (record.isParent == 'y') {
		return '';
	}
	if (e.value == 'y') {
		return '是';
	}
	return '否';
}
function exTree(v) {
	if (v == 'up') {
		indicatorsInfoGrid.expandAll();
	} else {
		indicatorsInfoGrid.collapseAll();
	}
}
function onCURenderer(e) {
	var record = e.record;
	if (record.isParent == 'y') {
		return '';
	}
	if (e.value == 'admin') {
		return '公共库';
	}
	return '<font color="blue">个人自定义</font>';
}
function onStatusRenderer(e) {
	var record = e.record;
	if (record.isParent == 'y') {
		return '';
	}
	if (e.value == 'y') {
		return '启用';
	}
	return '<font color="red">停用</font>';
}

function search() {
	var key = mini.get("indName").getValue();
	if (key == "") {
		indicatorsInfoGrid.clearFilter();
	} else {
		key = key.toLowerCase();
		indicatorsInfoGrid.filter(function(node) {
					var text = node.indName ? node.indName.toLowerCase() : "";
					if (text.indexOf(key) != -1) {
						return true;
					}
				});
	}

}

// 保存结构
function saveDataRowSort() {
	var rows = indicatorsInfoGrid.getList();

    var dataArray = new Array();
	if (rows.length > 0) {
		for (var i = 0, l = rows.length; i < l; i++) {
			var row = rows[i];
			dataStr += "{sortNum:'" + i + "',id:'" + row.id + "'},";

            var obj ={};
            obj.sortNum=""+i;
            obj.id=""+row.id;
            dataArray.push(obj);

		}
		$.ajax({
					type : "POST",
					url : base + "dy/indicators/doSaveIndSort.nut",
					data : mini.encode(dataArray),
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
}

function onRenderer(e) {
	var record = e.record;
	if (uId == record.cUser) {
		if (record.isParent == 'y') {
			return '';
		}
		var uid = record._uid;
		var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">信息维护</span><a class="mini-button mini-button-plain" href="javascript:toUpdateindicatorsInfoStatus(\''
				+ uid + '\')"><span class="mini-button-text  mini-button-icon ';
		if (record.validFlag == 'y') {
			s += 'icon-stop">停用';
		} else {
			s += 'icon-start">启用';
		}
		s += '</span></a>';
		return s;
	} else {
		return '';
	}
}

function edit() {
	var row = indicatorsInfoGrid.getSelectedNode();
	if (uId == row.cUser) {
		if (row) {
			mini.open({
						url : base + 'dy/jsp/dy_indicators_info_list.jsp?pId=' + row.id,
						title : '指标信息',
						iconCls : 'icon-33',
						width : 680,
						height : 380,
						allowResize : false,
						showMaxButton : true
					});
		}
	} else {
		mini.alert('无法对公共库做维护!!', '提醒');
	}
}

function toUpdateindicatorsInfoStatus(row_uid) {
	var row = indicatorsInfoGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'dy/indicators/updateIndicatorsBasicInfoValidFlag.nut',
				data : {
					'id' : row.id,
					'validFlag' : row.validFlag
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						indicatorsInfoGrid.updateRow(row, data.data);
					}
				}
			});
}

function addIndicatorsBasicInfo() {
	mini.open({
				url : base + "dy/jsp/dy_indicators_basic_info.jsp?isParent=y&iconCls=icon-statistics",
				title : "新增指标类别",
				iconCls : "icon-add",
				width : 400,
				height : 420,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
function onIndTypeRenderer(e) {
	if (e.value == '1') {
		return '月度';
	} else if (e.value == '2') {
		return '季度';
	} else if (e.value == '3') {
		return '半年';
	} else if (e.value == '4') {
		return '年度';
	}
	return '';
}

function addIndicatorsInfo(e) {
	mini.open({
				url : base + "dy/jsp/dy_indicators_basic_info.jsp?isParent=n&iconCls=icon-36",
				title : "新增指标信息",
				iconCls : "icon-add",
				width : 520,
				height : 400,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'dy/indicators/fetchindicatorsInfo.nut',
				data : {
					'id' : row.id
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						indicatorsInfoGrid.updateNode(row, data);
					} else {
						indicatorsInfoGrid.reload();
					}
				}
			});
}

function update() {
	var row = indicatorsInfoGrid.getSelectedNode();
	if (uId == row.cUser) {
		if (row) {
			if (row.isParent == 'y') {
				mini.open({
							url : base + 'dy/indicators/toEditIndicatorsBasicInfo.nut?id=' + row.id
									+ '&page=/dy/jsp/dy_indicators_basic_info.jsp?isParent=y&iconCls=icon-statistics',
							title : '指标类型修改',
							iconCls : 'icon-edit',
							width : 400,
							height : 420,
							allowResize : false,
							showMaxButton : true,
							ondestroy : function(action) {
								if (action == 'ok') {
									updateRow(row);
								}
							}
						});
			} else {
				mini.open({
							url : base + 'dy/indicators/toEditIndicatorsBasicInfo.nut?id=' + row.id
									+ '&page=/dy/jsp/dy_indicators_basic_info.jsp?isParent=n&iconCls=icon-36',
							title : '指标信息修改',
							iconCls : 'icon-edit',
							width : 520,
							height : 400,
							allowResize : false,
							showMaxButton : true,
							ondestroy : function(action) {
								if (action == 'ok') {
									updateRow(row);
								}
							}
						});
			}

		}
	} else {
		mini.alert('无法对公共库做维护!!', '提醒');
	}
}

function del() {
	var row = indicatorsInfoGrid.getSelected();
	if (uId == row.cUser) {
		if (row) {
			mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
						if (action == 'ok') {
							$.ajax({
										type : 'POST',
										url : base + 'dy/indicators/deleteIndicatorsBasicInfo.nut',
										data : {
											'id' : row.id
										},
										dataType : 'json',
										success : function(data) {
											if (data.success) {
												indicatorsInfoGrid.removeNode(row);
											} else {
												mini.alert(data.data, '提醒');
											}
										}
									});
						}
					});
		}
	} else {
		mini.alert('无法对公共库做维护!!', '提醒');
	}
}
function reloads() {
	indicatorsInfoGrid.reload();
}
