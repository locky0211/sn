var formulaGrid;
var data;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});
function onNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.repCode) {
			return data[i].zdName;
		}
	}

}
function add() {
	mini.open({
		url : base + 'dck/jsp/dckFormula.jsp',
		title : '校验公式维护',
		width : 660,
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
		url : base + 'dckformula/getFormulaByid.nut?id=' + e.id + '&page=/dck/jsp/dckFormula.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function typeRenderer(e) {
	if (e.value == '1') {
		return '基础性校验';
	} else if (e.value == '2') {
		return '确定性校验';
	} else if (e.value == '3') {
		return '吻合性校验';
	} else {
		return '关联校验';
	}
}

function chageState(){
	var e = formulaGrid.getSelected();
	//alert(JSON.stringify(e));
	var row = formulaGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dckformula/updateFormulaState.nut?id=' + e.id,
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
function del() {
	var e = formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dckformula/deleteFormula.nut?id=' + e.id,
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
function excute() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dckformula/excute.nut',
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
		fieldName : mini.get('#fieldName').getValue(),
		repCode : mini.get('#repCode').getValue(),
		formulaType : mini.get('#formulaType').getValue(),
		formulaState : mini.get('#formulaState').getValue()
	});
}