var checkGrid;
var dspData;
var eastData;
var typeData;
$(function() {
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		eastBmcode : mini.get('eastBmcode').getValue(),
		reportDate : mini.get('reportDate').getText(),
	});
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
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=East_3_TableName',
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

var newOrg;
function dckChange(e){ 
	mini.get("eastBmcode").setValue("");
	var dckOrg = mini.get("brNo").getValue();
	chooseMapOrg("DCK",dckOrg,"EAST");
	mini.get("eastBmcode").setValue(newOrg);
}

function eastChange(e){ 
	mini.get("brNo").setValue("");
	var eastOrg = mini.get("eastBmcode").getValue();
	chooseMapOrg("EAST",eastOrg,"DCK");
	mini.get("brNo").setValue(newOrg);
}
function chooseMapOrg(oldModule, oldOrg, newModule) {
	$.ajax({
		url : base + 'sys/moduleOrgMap/getNewOrg.nut?oldModule=' + oldModule + "&oldOrg="+ oldOrg +"&newModule=" + newModule,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					newOrg = oldOrg;
				} else {
					newOrg = text.data.newOrg;
				}
			} else {
				mini.alert(text.data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

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

function rowdblclick(e) {
	var record = e.record;
	mini.open({
		url : base + 'dck/east/getFormulaById.nut?id=' + record.formulaId + '&page=/dck/jsp/dckWithEastCheckResult.jsp?brNo=' + record.brNo + "&eastBmcode=" + mini.get('eastBmcode').getValue() + "&reportDate=" + record.reportDate,
		title : "检验结果明细",
		width : 1200,
		height : 600,
		allowResize : true
	});
}

//function importEast() {
//	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
//		mini.alert("请选择机构！！");
//	} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
//		mini.alert("请选择要导入的报表日期!!");
//	} else {
//		mini.mask({
//			el : document.body,
//			cls : 'mini-mask-loading',
//			html : '信息处理中...'
//		});
//		$.ajax({
//			type : 'POST',
//			dataType : 'json',
//			url : base + 'dck/coincide/importEastTable.nut?brNo=' + mini.get("brNo").getValue()+ '&eastBmcode=' + mini.get('eastBmcode').getValue() + '&reportDate=' + mini.get("reportDate").getText(),
//			success : function(text) {
//				if (text.success) {
//					mini.alert(text.data, '提醒', function() {
//						checkGrid.load({
//							brNo : mini.get('brNo').getValue(),
//							eastBmcode : mini.get('eastBmcode').getValue(),
//							reportDate : mini.get('reportDate').getFormValue()
//						});
//					});
//				} else {
//					alert(text.data);
//				}
//			},
//			error : function(jqXHR, textStatus, errorThrown) {
//				alert('访问服务器失败!!');
//			},
//			complete : function() {
//				mini.unmask(document.body);
//			}
//		});
//	}
//}

function excute() {
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
		mini.alert("请选择报表日期!!");
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'dck/coincide/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&eastBmcode=' + mini.get('eastBmcode').getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.alert(text.data, '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
							eastBmcode : mini.get('eastBmcode').getValue(),
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					mini.alert(text.data);
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
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	 var form=new mini.Form("#dckCheckCoincide");
	 form.validate();
	    checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		eastBmcode : mini.get('eastBmcode').getValue(),
		reportDate : mini.get('reportDate').getText(),
		tableName : mini.get('#repCode').getValue()
	});
	
}
function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}