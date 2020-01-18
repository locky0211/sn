var formulaExpendGrid;
var data;
var versionData;
$(function() {
	formulaExpendGrid = mini.get("#formulaExpendGrid");
	formulaExpendGrid.load({
		brNo : mini.get('brNo').getValue()
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=EastTableName',
		success : function(text) {
			data = text;
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
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CheckVersion',
		success : function(text) {
			versionData = text;
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


function onVersionNameRenderer(e) {
	for (var i = 0; i < versionData.length; i++) {
		if (versionData[i].zdValue == e.record.version) {
			return versionData[i].zdName;
		}
	}
}
function add() {
	mini.open({
		url : base + 'ews/jsp/checkFormulaExpend.jsp',
		title : '校验公式维护',
		width : 660,
		height : 420,
		allowResize : false,
		ondestroy : function(action) {
			formulaExpendGrid.reload();
		}
	});
}
function onRenderer(e) {
	var s;
	if (e.record.expendState == '1') {
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-stop">停用</span></a>';
	} else {
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-start">启用</span></a>';
	}
	s += '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(e) {
	var e = formulaExpendGrid.getSelected();
	mini.open({
		url : base + 'formulaExpend/getFormulaExpendByid.nut?id=' + e.id + '&page=/ews/jsp/checkFormulaExpend.jsp',
		title : '客户名称维护',
		width : 660,
		height : 420,
		allowResize : false,
		ondestroy : function(action) {
			formulaExpendGrid.reload();
		}
	});
}

function updateAllState(e) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'formulaExpend/updateAllState.nut?flag='+e,
		success : function(text) {
			if (text) {
				if(e=='1') {
					mini.alert('全部启用成功', '提醒', function() {
					})
				} else{
					mini.alert('全部停用成功', '提醒', function() {
					})
				}
				formulaExpendGrid.reload();
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


function changeCondition(e) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'formulaExpend/changeCondition.nut?condition='+e,
		success : function(text) {
			if (text) {
				
				mini.alert('更改取数条件成功', '提醒', function() {
				})
				formulaExpendGrid.reload();
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


function chageState() {
	var e = formulaExpendGrid.getSelected();
	// alert(JSON.stringify(e));
	var row = formulaExpendGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'formulaExpend/updateFormulaExpendState.nut?id=' + e.id,
		success : function(text) {
			if (text.success) {
				formulaExpendGrid.updateRow(row, text.data);
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
	var e = formulaExpendGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'formulaExpend/deleteFormulaExpend.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							formulaExpendGrid.removeRow(e, true);

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
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else {
		formulaExpendGrid.load({
			brNo : mini.get('#brNo').getValue(),
			repCode : mini.get('#repCode').getValue(),
			expendState : mini.get('#expendState').getValue(),
			version: mini.get('#version').getValue()
		});
	}
}