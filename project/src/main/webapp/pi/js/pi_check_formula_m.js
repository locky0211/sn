var checkFormulaGrid;
$(function() {
			checkFormulaGrid = mini.get('checkFormulaGrid');
			gridLoad();
		});
function gridLoad() {
	checkFormulaGrid.load();
}
function rere() {
	mini.get('tabcode').setValue('');
	mini.get('check_formula').setValue('');
}

function onValidRenderer(e) {
	if (e.value == 'y') {
		return '启用';
	}
	return '<font color="red">停用</font>';
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

//function exportExcel() {
//	var dataStr = '';
//	var rows = checkFormulaGrid.getSelecteds();
//	if (rows.length > 0) {
//		for (var i = 0; i < rows.length; i++) {
//			var row = rows[i];
//			dataStr = dataStr + row.id + ",";
//		}
//		dataStr = dataStr.substring(0, dataStr.length - 1);
//	}
//	mini.mask({
//		el : document.body,
//		cls : 'mini-mask-loading',
//		html : '处理中...'
//	});
//	$.ajax({
//		type : "POST",
//		url : base + "bf/check/exportExcel.nut",
//		data : "id=" + dataStr,
//		dataType : 'json',
//		success : function(data) {
//			toDownLoadFileByFilePath(data);
//		},
//		error : function(jqXHR, textStatus, errorThrown) {
//			alert('访问服务器失败!!');
//		},
//		complete : function() {
//			mini.unmask(document.body);
//		}
//	});
//}

//function importExcel(){
//	mini.open({
//		url : base + '/bf/jsp/bf_check_formula_import.jsp',
//		title : "导入校验公式", 
//		iconCls : "icon-add",
//		width : 352,
//		height : 258,
//		allowResize : false,
//		showMaxButton : true,
//		ondestroy : function(action) {
//			if (action == 'ok') {
//				gridLoad();
//			}
//		}
//	});
//}

//function rollback(){
//	mini.open({
//		url : base + '/rd/jsp/rd_check_formula_rollback.jsp',
//		title : "回滚校验公式", 
//		iconCls : "icon-add",
//		width : 415,
//		height : 500,
//		allowResize : false,
//		showMaxButton : true,
//		ondestroy : function(action) {
//			if (action == 'ok') {
//				gridLoad();
//			}
//		}
//	});
//}
function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'pi/check/updateCheckFormulaStatus.nut',
				data : {
					'id' : row.id,
					'validFlag' : row.validFlag
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						checkFormulaGrid.updateRow(row, data.data);
					}
				}
			});
}

function addCheckFormula(e) {
	mini.open({
				url : base + "pi/jsp/pi_check_formula.jsp?cUser=" + $('#cUserInput').val(),
				title : "新增校验公式",
				iconCls : "icon-add",
				width : 580,
				height : 450,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					checkFormulaGrid.reload();
				}
			});
}

function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'pi/check/toEditCheckFormula.nut?id=' + row.id + '&page=/pi/jsp/pi_check_formula.jsp',
					title : '校验公式修改',
					iconCls : 'icon-edit',
					width : 580,
					height : 450,
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

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'pi/check/fetchCheckFormula.nut',
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
									url : base + 'pi/check/deleteCheckFormula.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											checkFormulaGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}

function search() {
	checkFormulaGrid.load({
				// check_type : mini.get("check_type").getValue(),
				tabcode : mini.get("tabcode").getValue(),
				vFlag : mini.get("vFlag").getValue(),
				checkFormula : mini.get("check_formula").getValue(),
			});
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
