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
	mini.get('calFormula').setValue('');
}
function addCheckFormula(e) {
	mini.open({
				url : base + "ir/jsp/ir_report_calculate_formula_add.jsp",
				title : "新增",
				iconCls : "icon-add",
				width : 580,
				height : 380,
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
	if (record.formulaStatus == 'y') {
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


function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'ir/calculate/updateCheckFormulaStatus.nut',
				data : {
					'id' : row.id,
					'formulaStatus' : row.formulaStatus
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
				tabVision : mini.get("tabVision").getValue(),
				calFormula : mini.get("calFormula").getValue(),
				formulaStatus : mini.get("formulaStatus").getValue()
			});
}

// 刷新
function reloads(e) {
	gridLoad();
}
// 重置查询条件
function reloadForm() {
	mini.get("tabcode").setValue('');
	mini.get("tabVision").setValue('');
	mini.get("calFormula").setValue('');
	mini.get("formulaStatus").setValue('');
}
function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'ir/calculate/toEditCalFormula.nut?id=' + row.id + '&page=/ir/jsp/ir_report_calculate_formula_add.jsp',
					title : '校验公式修改',
					iconCls : 'icon-edit',
					width : 580,
					height : 380,
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
				url : base + 'ir/calculate/fetchCalFormula.nut',
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
									url : base + 'ir/calculate/deleteCalFormula.nut',
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

