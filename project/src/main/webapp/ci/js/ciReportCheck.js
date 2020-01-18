var checkGrid;
var data;
$(function() {
		checkGrid = mini.get("#checkGrid");
		var dt = new Date();
		cdt = new Date(dt.getTime());
		mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth())+1) + "-" + cdt.getDate());
		checkGrid.load({
			reportDate : mini.get('reportDate').getFormValue()
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			async : false,
			url : base + 'sys/ggzd/getGgzdList.nut?groupId=CI_TABLENAME',
			success : function(text) {
				data = text;
			},
			error : function(jqXHR, textStatus, errorThrown) {
			},
			complete : function() {
			}
		});
});

function onTableNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.tableName) {
			return data[i].zdName;
		}
	}
}

function showTableDataView(e) {
	var row = e.record;
	if (row) {
		mini.open({
			url :base + 'ci/formula/getFormulaById.nut?id=' + row.formulaId + "&page=/ci/jsp/ciReportDataView_jy.jsp?tableCode=" + row.tableName + '&fieldName=' + row.fieldName + '&reportDate=' + row.reportDate,
					title : "数据查看",
					iconCls : "icon-edit",
					width : $(top.window).width() - 100,
					height : $(top.window).height() - 100,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							reload();
						}
					}
				});
	}
}

function excute() {
	if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null ) {
		mini.alert("请选择报表日期!!");
	}  else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + "ci/report/check/startCheck.nut" ,
			success : function(text) {
				if (text.success) {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
						checkGrid.load({
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					alert(JSON.stringify(text.data));
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
}

function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		reportDate : mini.get('reportDate').getText(),
		tableName : mini.get('tableName').getValue()
	});
}

function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}
function exportExcel() {
	var form=new mini.Form("#checkForm");
	form.validate();
	var reportDate=mini.get('#reportDate').getText();
	var tableName=mini.get('tableName').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "ci/check/result/exportExcel.nut",
		data :"reportDate="+reportDate+"&tableName="+tableName,
		dataType : 'json',
		success : function(data) {
			toDownLoadFileByFilePath(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}

function searchCheckLog(){
	var reportDate=mini.get('#reportDate').getText();
	mini.open({
		url : base + 'ci/jsp/ciCheckLog.jsp?reportDate='+reportDate,
		title : "校验日志",
		width : 1000,
		height : 200,
		allowResize : true
	});
}

//查看入库日志
function searchTempToOfficialLog(){
	var reportDate = mini.get('#reportDate').getText();
	mini.open({
		url : base + 'ci/jsp/ciTempToOfficialLog.jsp?reportDate='+reportDate,
		title : "入库日志",
		width : 1000,
		height : 200,
		allowResize : true
	});
}

//是否确认入库
function isSaveIntoOfficial() {
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'ci/tempToOfficial/countReportTypes.nut',
		success : function(text) {
			if (text.success) {
				if (text.data == 0) {
					mini.alert("本期报文未导入！！", '提醒');
				} else {
					mini.confirm("是否确认已经校验完成？", '提醒', function(action) {
						if (action == 'ok') {
							mini.confirm("当前有  " + text.data + " 个报文文件需要入库，是否确认？", '提醒', function(action) {
								if (action == 'ok') {
									isReportIn();
								}
							});
						}
					});
				}
			} else {
				mini.alert("操作异常!!!", '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

//判断是否重复入库
function isReportIn() {
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'ci/tempToOfficial/checkMessageIsInLog.nut',
		success : function(text) {
			if (text.success) {
				tempToOfficial();
			} else {
				if(text.data == null){
					mini.alert("操作异常!!!", '提醒');
				}else{
					mini.alert(text.data, '提醒');
				}
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

//入库操作
function tempToOfficial() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据入库中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'ci/tempToOfficial/makeIntoOfficial.nut',
		success : function(text) {
			if (text.success) {
				mini.alert("操作成功!!!", '提醒');
			} else {
				if(text.data == null){
					mini.alert("操作异常!!!", '提醒');
				}else{
					mini.alert(text.data, '提醒');
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
}