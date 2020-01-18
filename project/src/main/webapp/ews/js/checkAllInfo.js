var checkGrid;
var data;
var versionData;
var typeData;
var t;
var checkFormula_grid;
var checkFormula_Form;
var checkTempGrid;

$(function() {   mini.parse();
	var dateformat = $('#a').val();
	if(dateformat == '1'){
		checkGrid = mini.get("#checkGrid");
		checkTempGrid = mini.get("#checkTempGrid");
		checkFormula_grid = mini.get("checkFormula_grid");
		checkFormula_Form = document.getElementById("checkFormula_Form");
		var dt = new Date();
		dt.setDate(1);
		cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
		mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
		mini.get('#version').setValue(3);
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			reportDate : mini.get('reportDate').getValue()
		});
		checkTempGrid.load({
			
		});
	}
	else{
		checkGrid = mini.get("#checkGrid");
		checkTempGrid = mini.get("#checkTempGrid");
		checkFormula_grid = mini.get("checkFormula_grid");
		checkFormula_Form = document.getElementById("checkFormula_Form");
		mini.get('#version').setValue(3);
//		var dt = new Date();
//		dt.setDate(1);
//		cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
//		mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			reportDate : mini.get('reportDate').getValue()
		});
		checkTempGrid.load({
			
		});
	}
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
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CheckType',
		success : function(text) {
			typeData = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
	checkGrid.hideColumn("brNo");
	checkTempGrid.hideColumn("brNo");
	if(t==null){
		t=self.setInterval("search()",30*1000);
	}
});

function statusRenderer(e){
	if (e.value == '0') {
		return '正在进行';
	} else if (e.value == '1') {
		return '暂停';
	}else{
		return '校验完成';
	}
}

function tempStatusRenderer(e){
	if (e.value == '0') {
		return '等待中';
	} else if (e.value == '1') {
		return '数据准备中';
	}
}

function formulaStateRenderer(e){
	if (e.value == '0') {
		return '已停用';
	} else {
		return '已启用';
	}
}

function onNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.repCode) {
			return data[i].zdName;
		}
	}
}
function onTableRangeRenderer(e){
	if(e.record.tableRange!=''){
		for (var i = 0; i < data.length; i++) {
			if (data[i].zdValue == e.record.tableRange) {
				return data[i].zdName;
			}
		}
	}
	return "全表";
}


function onVersionNameRenderer(e) {
	for (var i = 0; i < versionData.length; i++) {
		if (versionData[i].zdValue == e.record.version) {
			return versionData[i].zdName;
		}
	}
}

function onTypeNameRenderer(e) {
	for (var i = 0; i < typeData.length; i++) {
		if (typeData[i].zdValue == e.record.formulaType) {
			return typeData[i].zdName;
		}
	}
	return '整体校验';
}

function onRenderer(e) {
	var s='';
	if (e.record.status == '0') {
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text mini-button-icon icon-stop">暂停</span></a>';
	} else if (e.record.status == '1') {
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text mini-button-icon icon-start ">继续</span></a>';
	}
	if(e.record.status != '0') {
		s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	}
	return s;
}

function onCancelRenderer(){
	var s='<a class="mini-button mini-button-plain" href="javascript:cancelRow()"><span class="mini-button-text mini-button-icon icon-canel ">取消</span></a>';
	return s;
}

function cancelRow(){
	var e = checkTempGrid.getSelected();
	if (e) {
		mini.confirm("确定取消校验？", "确定？", function(action) {
			if (action == 'ok') {
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'check/allInfo/cancelCheck.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							checkTempGrid.removeRow(e, true);
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
	}
}

function del(){
	var e = checkGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'check/allInfo/delete.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							checkGrid.removeRow(e, true);
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
	}
}

function chageState() {
	var e = checkGrid.getSelected();
	var row = checkGrid.getRowByUID(e._uid);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/allInfo/updateState.nut?id=' + e.id,
		success : function(text) {
			if (text.success) {
				if(e.status=="1")
				{
					if(t==null){
						t=self.setInterval("search()",30*1000);
						}
				}
				checkGrid.updateRow(row, text.data);
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

function rowdblclick() {
	var e = checkGrid.getSelected();
		mini.open({
			url : base + 'ews/jsp/checkAllInfoResult.jsp?brNo=' + e.brNO + '&reportDate=' + e.sjRQ+'&formulaType=' +e.formulaType+'&version=' +e.version+'&tableRange=' +e.tableRange,
			title : "校验结果明细",
			width : 1200,
			height : 600,
			allowResize : true
		});
}

function addCheck(){
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
		mini.alert("请选择报表日期!!");
	}else if (mini.get("version").getText() == '' || mini.get("version").getText() == null) {
		mini.alert("请选择公式版本!!");
	}else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'check/allInfo/addCheckAllInfo.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + '&version=' + mini.get("version").getValue()+'&formulaType=' + mini.get("formulaType").getValue()+'&tableRange=' + mini.get("tableRange").getValue(),
			success : function(text) {
				if (text.success) {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
						checkTempGrid.reload();
						checkGrid.reload();
					});
				} else {
					if(JSON.stringify(text.data).indexOf("已经存在校验，请确定是否重新校验")!=-1){
						mini.confirm(JSON.stringify(text.data),"提醒",function(action){
							if(action=="ok"){
								reCheckAllInfo();
							}
						});
					}
					else{
						mini.alert(JSON.stringify(text.data), '提醒');
					}
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
		if(t==null){
			t=self.setInterval("search()",30*1000);
		}
		
	}
}


function reCheckAllInfo() {
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/allInfo/reCheckAllInfo.nut?reportDate=' + mini.get("reportDate").getText() + '&version=' + mini.get("version").getValue()+'&formulaType=' + mini.get("formulaType").getValue()+'&tableRange=' + mini.get("tableRange").getValue(),
		success : function(text) {
			if (text.success) {
				checkTempGrid.reload();
				checkGrid.reload();
			} else {
				mini.alert(JSON.stringify(text.data), '提醒', function() {
				});
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
	if(t==null){
		t=self.setInterval("search()",30*1000);
	}
	
}

function search() {
	checkTempGrid.reload();
	checkGrid.reload();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/allInfo/closeRefresh.nut',
		success : function(text) {
			if (text.success) {
				clearInterval(t);
				t=null;
			} else {
				
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		}
	});
}

function onShowRowDetail(e) {
    var grid = e.sender;
    var rows = e.record;
    var td = grid.getRowDetailCellEl(rows);
    td.appendChild(checkFormula_Form);
    checkFormula_Form.style.display = "block";
    checkFormula_grid.load({
    	brNo: rows.brNO,
    	sjrq:rows.sjRQ,
    	version:rows.version,
    	tableRange:rows.tableRange 
	});
}
