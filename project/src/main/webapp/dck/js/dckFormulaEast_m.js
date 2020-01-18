var formulaGrid;
var dspData;
var eastData;
var typeData;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
		success : function(text) {
			dspData = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=East_3_TableName',    //去掉ImportEastTable 改为EAST3.0
		success : function(text) {
			eastData = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=FormulaEastType',
		success : function(text) {
			typeData = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});
function onDspNameRenderer(e) {
	for (var i = 0; i < dspData.length; i++) {
		if (dspData[i].zdValue == e.record.dspTable) {
			return dspData[i].zdName;
		}
	}

}
function onEastNameRenderer(e) {
	for (var i = 0; i < eastData.length; i++) {
		if (eastData[i].zdValue == e.record.eastTable) {
			return eastData[i].zdName;
		}
	}

}
function onformulaTypeRenderer(e) {
	for (var i = 0; i < typeData.length; i++) {
		if (typeData[i].zdValue == e.record.formulaType) {
			return typeData[i].zdName;
		}
	}

}
function add() {
	mini.open({
		url : base + 'dck/jsp/dckFormulaEast.jsp',
		title : '校验公式维护',
		width : 700,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function onRenderer(e) {
	var s;
	if(e.record.formulaState=='1'){
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-stop">停用</span></a>';
	}else{
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-start">启用</span></a>';
	}
	s += '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(e) {
	var e = formulaGrid.getSelected();
	mini.open({
		url : base + 'dck/east/getFormulaByid.nut?id=' + e.id + '&page=/dck/jsp/dckFormulaEast.jsp',
		title : '校验公式维护',
		width : 700,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function del() {
	var e = formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dck/east/deleteFormula.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							formulaGrid.removeRow(e, true);

						} else {
							mini.alert('操作失败!!', '提醒', function() {
							})
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
			}
		});
	} else {
		mini.alert("请选择你要删除的记录!!");
	}
}

function chageState(){
	var e = formulaGrid.getSelected();
	//alert(JSON.stringify(e));
	var row = formulaGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dck/east/updateFormulaState.nut?id=' + e.id,
		success : function(text) {
			if (text.success) {
				formulaGrid.updateRow(row, text.data);
			} else {
				mini.alert('操作失败!!', '提醒', function() {
				})
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}
function excute() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dck/east/excute.nut',
		success : function(text) {
			if (text) {
				mini.alert('操作成功!!', '提醒', function() {
				});
			} else {
				mini.alert('操作失败!!', '提醒', function() {
				})
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});

}
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	formulaGrid.load({
		dspTable : mini.get('#dspTable').getValue(),
		eastTable : mini.get('#eastTable').getValue(),
		formulaType:mini.get('#formulaType').getValue(),
		formulaState : mini.get('#formulaState').getValue()
	});
}