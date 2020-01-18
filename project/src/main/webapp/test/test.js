var checkFormulaGrid;
$(function() {
			checkFormulaGrid = mini.get('checkFormulaGrid');
			gridLoad();
		});
function gridLoad() {
	checkFormulaGrid.load();
}
function rere() {
	mini.get('tableId').setValue('');
	mini.get('tabCode').setValue('');
	mini.get('checkFormula').setValue('');
}
function addCheckFormula(e) {
	mini.open({
				url : base + "test/test_add.jsp",
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




function search() {
	checkFormulaGrid.load({
				// check_type : mini.get("check_type").getValue(),
				tabcode : mini.get("tabCode").getValue(),
				vFlag : mini.get("tableId").getValue(),
				checkFormula : mini.get("checkFormula").getValue()
				
			});
}

// 刷新
function reloads(e) {
	gridLoad();
}
// 重置查询条件
function reloadForm() {
	mini.get("tabCode").setValue('');
	mini.get("vFlag").setValue('');
	mini.get("check_formula").setValue('');
}
function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'ir/attention/toEditCheckFormula.nut?id=' + row.id + '&page=/ir/jsp/ir_attention_formula_add.jsp',
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
				url : base + 'ir/attention/fetchCheckFormula.nut',
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
									url : base + 'ir/attention/deleteCheckFormula.nut',
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

