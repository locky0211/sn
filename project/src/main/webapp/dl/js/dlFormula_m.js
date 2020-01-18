var formulaGrid;
var tableNameArr;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DL_TABLENAME',
		success : function(text) {
			tableNameArr = text;
		}
	});
});

//表名称渲染
function onNameRenderer(e) {
	for (var i = 0; i < tableNameArr.length; i++) {
		if (tableNameArr[i].zdValue == e.record.tabCode) {
			return tableNameArr[i].zdName;
		}
	}
}

//新增
function add() {
	mini.open({
		url : base + 'dl/jsp/dlFormula.jsp',
		title : '新增校验公式',
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

//编辑
function edit(e) {
	var e = formulaGrid.getSelected();
	mini.open({
		url : base + 'dl/formula/getFormulaById.nut?id=' + e.id
				+ '&page=/dl/jsp/dlFormula.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}

//改变公式状态
function chageState() {
	var e = formulaGrid.getSelected();
	var row = formulaGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dl/formula/updateFormulaState.nut?id=' + e.id,
		success : function(text) {
			if (text.success) {
				formulaGrid.updateRow(row, text.data);
			} else {
				mini.alert('操作失败!!', '提醒');
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

//删除
function del() {
	var e = formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dl/formula/deleteFormula.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							formulaGrid.removeRow(e, true);
						} else {
							mini.alert('操作失败!!', '提醒');
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

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	formulaGrid.load({
		fieldName : mini.get('#fieldName').getValue(),
		tabCode : mini.get('#tabCode').getValue(),
		formulaState : mini.get('#formulaState').getValue()
	});
}