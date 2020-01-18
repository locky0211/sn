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
				url : base + 'pi/check/wave/updateCheckFormulaStatus.nut',
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
				url : base + "pi/jsp/pi_check_formula_wave.jsp",
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
					url : base + 'pi/check/wave/toEditCheckFormulaWave.nut?id=' + row.id + '&page=/pi/jsp/pi_check_formula_wave.jsp',
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
				url : base + 'pi/check/wave/fetchCheckFormulaWave.nut',
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
									url : base + 'pi/check/wave/deleteCheckFormulaWave.nut',
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
				tablecode : mini.get("tablecode").getValue(),
				vFlag : mini.get("vFlag").getValue(),
				quotacode : mini.get("quotacode").getValue(),
				latcode : mini.get("latcode").getValue(),
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

function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S")) {
		rs = true;
	}
    if (rd == "12" && rt == "Y") {
		rs = true;
	}
	return rs;
}

function makeFormula() {
	var form = new mini.Form("#reportCheckForm");
	var brNo = mini.get('bmCode').getValue(false);
	var reportDate = mini.get("rDate").getFormValue();
	var reportRate = mini.get("Rate").getValue();
	var tabType = mini.get("tabType").getValue();
	if (form.isValid()) {
		if (reportDateValid()) {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '公式生成中...'
			});
			$.ajax({
				url : base + 'pi/wave/formula/makeCheckWaveFormula.nut?brNo='
						+ brNo + '&reportDate=' + reportDate + '&tabType='
						+ tabType + '&reportRate=' + reportRate,
				type : 'post',
				cache : false,
				dataType : 'json',
				success : function(text) {
					if (text.success) {
						mini.alert(text.data, '提醒');
						gridLoad();
					} else {
						mini.alert(text.data, '提醒');
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}



