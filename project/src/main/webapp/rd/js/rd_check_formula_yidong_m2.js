var checkFormulaGrid;
$(function() {
			checkFormulaGrid = mini.get('checkFormulaGrid');
		});
function gridLoad() {
	checkFormulaGrid.load();
}
function search() {
	var key = mini.get("key").getValue();
	if (key == "") {
		checkFormulaGrid.clearFilter();
	} else {
		key = key.toLowerCase();
		checkFormulaGrid.filter(function(node) {
					var text = node.checkProject ? node.checkProject.toLowerCase() : "";
					if (text.indexOf(key) != -1) {
						return true;
					}
				});
		checkFormulaGrid.expandAll();
	}
}
function onKeyEnter() {
	search();
}
function rere() {
	mini.get('tabcode').setValue('');
	mini.get('check_formula').setValue('');
}
function onRiskRenderer(e) {
	if (e.value == '1') {
		return '数值准确';
	} else {
		return '<font color="blue">敏感关注</font>';
	}
}
function onValidRenderer(e) {
	if (e.value == 'y') {
		return '启用';
	}
	return '<font color="red">停用</font>';
}

function onRenderType(e) {
	if (e.value == '1') {
		return '普通';
	}
	else if (e.value == '2') {
		return '异动';
	}
	return '未知';
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateCheckFormulaStatus(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.validFlag == 'y') {
		s += 'icon-stop">停用';
	} else {
		s += 'icon-start">启用';
	}
	s += '</span></a>';
	return s;
}

function exportExcel() {
	var dataStr = '';
	var rows = checkFormulaGrid.getSelecteds();
	if (rows.length > 0) {
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			dataStr = dataStr + row.id + ",";
		}
		dataStr = dataStr.substring(0, dataStr.length - 1);
	}
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "rd/check/exportExcel.nut",
		data : "id=" + dataStr,
		dataType : 'json',
		success : function(data) {
			toDownLoadFileByFilePath(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}

function importExcel(){
	mini.open({
		url : base + 'rd/jsp/rd_check_formula_import.jsp',
		title : "导入校验公式", 
		iconCls : "icon-add",
		width : 352,
		height : 258,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}
	});
}

function rollback(){
	mini.open({
		url : base + 'rd/jsp/rd_check_formula_rollback.jsp',
		title : "回滚校验公式", 
		iconCls : "icon-add",
		width : 415,
		height : 500,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}
	});
}
function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'rd/check/updateCheckFormulaStatus2.nut',
				data : {
					'parent' : row.parent,
					'validFlag' : row.validFlag,
					'checkProject' : row.checkProject
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						reload();
					}
				}
			});
}

function addCheckFormula(e) {
	var node = checkFormulaGrid.getSelectedNode();
	mini.open({
				url : base + "rd/jsp/rd_check_formula_yidong.jsp?cUser=" + $('#cUserInput').val(),
				title : "跨期异动公式",
				iconCls : "icon-add",
				width : 580,
				height : 450,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					reload();
				}
			});
}

function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'rd/check/toEditCheckFormula2.nut?parent=' + row.parent + '&id='+ row.id +'&page=/rd/jsp/rd_check_formula_yidong.jsp',
					title : '跨期异动公式',
					iconCls : 'icon-edit',
					width : 580,
					height : 450,
					allowResize : true,
					showMaxButton : true,
					ondestroy : function(action) {
						if (action == 'ok') {
							reload();
						}
					}
				});
	}
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'rd/check/fetchCheckFormula.nut',
				data : {
					'id' : row.id
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						checkFormulaGrid.updateRow(row, data);
					}
				}
			});
}

function del() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.confirm('确定删除？删除后无法恢复!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'rd/check/deleteCheckFormula2.nut',
									data : {
										'parent' : row.parent,
										'id' : row.id,
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											checkFormulaGrid.removeNode(row);;
										}
									}
								});
					}
				});
	}
}


// 刷新
function reloads(e) {
	gridLoad();
}
// 重置查询条件
function reloadForm() {
	mini.get("tabcode").setValue('');
	mini.get("vFlag").setValue('');
	mini.get("check_formula").setValue('');
}

function reload() {
	checkFormulaGrid.reload();
	var node = checkFormulaGrid.getSelectedNode();
	if (node) {
		checkFormulaGrid.expandPath(node);
	}
}
