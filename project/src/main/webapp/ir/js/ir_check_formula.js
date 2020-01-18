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
function addCheckFormula(e) {
	mini.open({
				url : base + "ir/jsp/ir_check_formula_add.jsp",
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
function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'ir/formula/updateCheckFormulaStatus.nut',
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
function search() {
	checkFormulaGrid.load({
				// check_type : mini.get("check_type").getValue(),
				tabcode : mini.get("tabcode").getValue(),
				vFlag : mini.get("vFlag").getValue(),
				checkFormula : mini.get("check_formula").getValue(),
				formulaType : mini.get("formulaAllType").getValue()
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
function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'ir/formula/toEditCheckFormula.nut?id=' + row.id + '&page=/ir/jsp/ir_check_formula_add.jsp',
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
				url : base + 'ir/formula/fetchCheckFormula.nut',
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
									url : base + 'ir/formula/deleteCheckFormula.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(text) {
										if (text.success) {
											if(text.data=="0"){
												mini.alert('无操作权限!!', '提醒');
											} else{
											mini.alert('操作成功!!', '提醒',function(action) {
												checkFormulaGrid.reload();
											});
											}
										}   else {
											mini.alert('操作失败!!', '提醒');
										}
									},
								});
					}
				});
	}
}

