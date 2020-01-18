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
function onRenderType(e) {
	if (e.value == '50') {
		return '月报';
	}
	else if (e.value == '40') {
		return '季报';
	}
	else if (e.value == '80') {
		return '半年报';
	}
	else if (e.value == '00') {
		return '年报';
	}
	return '未知';
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
function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'dy/checkRdBf/updateCheckFormulaStatus.nut',
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
				url : base + "dy/jsp/dy_check_with_rd_bf_formula_add.jsp?cUser=" + $('#cUserInput').val(),
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
					url : base + 'dy/checkRdBf/toEditFormula.nut?id=' + row.id + '&page=/dy/jsp/dy_check_with_rd_bf_formula_add.jsp',
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
}function updateRow(row) {
	$.ajax({
		type : 'POST',
		url : base + 'dy/checkRdBf/fetchFormula.nut',
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
									url : base + 'dy/checkRdBf/deleteFormula.nut',
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
				vFlag : mini.get("validFlag").getValue(),
				checkFormula : mini.get("check_formula").getValue(),
				formulaType : mini.get("tabType").getValue()
			});
}
//刷新
function reloads(e) {
	gridLoad();
}
// 重置查询条件
function reloadForm() {
	mini.get("tabcode").setValue('');
	mini.get("vFlag").setValue('');
	mini.get("check_formula").setValue('');
	mini.get("formulaType").setValue('');
}