var checkGrid;
var data;
$(function() {
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
//	checkGrid.load({
//		brNo : mini.get('brNo').getValue(),
//		reportDate : mini.get('reportDate').getText(),
//	});
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
		if (data[i].zdValue == e.record.tableName) {
			return data[i].zdName;
		}
	}

}

function rowdblclick(e) {
	var record = e.record;
	mini.open({
		url : base + 'dckformula/getFormulaById.nut?id=' + record.formulaId + '&page=/dck/jsp/dckCheckResult.jsp?brNo=' + record.brNo + "&reportDate="
				+ record.reportDate + '&fieldName=' + record.fieldCode + '&tableName=' + record.tableName,
		title : "检验结果明细",
		width : 1200,
		height : 600,
		allowResize : true
	});

}
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
			url : base + 'dck/certainty/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.alert(text.data, '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					alert(text.data);
				}
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
	var form=new mini.Form("#dckCheckForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		tableName : mini.get('#repCode').getValue()
	});
}
function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}
function exportExcel() {
	var form=new mini.Form("#dckCheckForm");
	form.validate();
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	var brnoName=mini.get('#brNo').getText();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "dck/certainty/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate+"&tableName=DCK.CHECK_CERTAINTY",
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
	var brNo = mini.get("brNo").getValue();
	mini.open({
		url : base + 'dck/jsp/dckChecklog.jsp?brNo='+brNo+'&checkType='+2,
		title : "校验日志",
		width : 1000,
		height : 400,
		allowResize : true
	});
}

//by sampson
function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:searchFormula()"><span class="mini-button-text  mini-button-icon icon-edit">查看公式</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:restartFormula()"><span class="mini-button-text  mini-button-icon icon-start">重新执行</span></a>';	
	return s;
}

//by sampson
function searchFormula() {
	var e = checkGrid.getSelected();
	mini.open({
		url : base + 'dckformula/getFormulaByid.nut?id=' + e.formulaId + '&page=/dck/jsp/dckFormula.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false
	});
}
//by sampson
function restartFormula() {
	var e = checkGrid.getSelected();
	console.log("id:" + e.id + "formulaId: " + e.formulaId)
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dck/certainty/startSingleCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + "&id=" +e.id + "&formulaId="+ e.formulaId,
		success : function(text) {
			if (text.success) {
				mini.alert(text.data, '提醒', function() {
					checkGrid.load({
						brNo : mini.get('brNo').getValue(),
						reportDate : mini.get('reportDate').getFormValue()
					});
				});
			} else {
				alert(text.data);
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