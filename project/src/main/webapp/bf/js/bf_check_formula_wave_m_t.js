var checkFormulaGrid;
$(function() {
			checkFormulaGrid = mini.get('checkFormulaGrid');
			gridLoad();
		});
function gridLoad() {
	checkFormulaGrid.load();
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
				url : base + 'bf/check/wave/temp/updateCheckFormulaStatus.nut',
				data : {
					id : row.id,
					validFlag : row.validFlag
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
				url : base + "bf/jsp/bf_check_formula_wave_t.jsp",
				title : "新增校验公式",
				iconCls : "icon-add",
				width : 520,
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
					url : base + 'bf/check/wave/temp/toEditCheckFormulaWave.nut?id=' + row.id + '&page=/bf/jsp/bf_check_formula_wave_t.jsp',
					title : '校验公式修改',
					iconCls : 'icon-edit',
					width : 520,
					height : 450,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						checkFormulaGrid.reload();
					}
				});
	}
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'bf/check/wave/temp/fetchCheckFormulaWave.nut',
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
									url : base + 'bf/check/wave/temp/deleteCheckFormulaWave.nut',
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
				tabcode : mini.get("tabcode").getValue(),
				vFlag : mini.get("vFlag").getValue(),
				checkProject : mini.get("checkProject").getValue(),
			});
}

// 刷新
function reloads(e) {
	gridLoad();
}

//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function onRateRendeder(e){
	var value=e.value;
	var rate="";
	if(value.indexOf("1")>-1){
		rate+= "月,";
	}
	if(value.indexOf("2")>-1){
		rate+= "季,";
	}
	if(value.indexOf("3")>-1){
		rate+= "半年,";
	}
	if(value.indexOf("4")>-1){
		rate+= "去年同期,";
	}
	if(value.indexOf("5")>-1){
		rate+= "上半年度,";
	}
	if(value.indexOf("6")>-1){
		rate+= "下半年度,";
	}
	if(value.indexOf("7")>-1){
		rate+= "前三季度,";
	}
	if(value.indexOf("8")>-1){
		rate+= "第四季度,";
	}
	rate=rate.substring(0,rate.length-1);
	return rate;
}

function doAutoInsert(){
	mini.open({
		url : base + "bf/jsp/bf_table_list_t.jsp",
		title : '异动公式批量导入',
		iconCls : 'icon-edit',
		width : 800,
		height : 500,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			checkFormulaGrid.reload();
		}
	});
}
