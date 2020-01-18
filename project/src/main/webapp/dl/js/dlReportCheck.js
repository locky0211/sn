var checkGrid;
var tabNameArr;
$(function() {
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(
			cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DL_TABLENAME',
		success : function(text) {
			tabNameArr = text;
		}
	});
});

//表名渲染
function onNameRenderer(e) {
	for (var i = 0; i < tabNameArr.length; i++) {
		if (tabNameArr[i].zdValue == e.record.tabCode) {
			return tabNameArr[i].zdName;
		}
	}
}

//校验
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
			url : base + 'dl/check/startCheck.nut?brNo=' + mini.get("brNo").getValue() 
						+ '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.alert(text.data, '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
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
	var form = new mini.Form("#dlCheckForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		tabCode : mini.get('#tabCode').getValue()
	});
}

function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}

function searchCheckLog() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get('reportDate').getText();
	mini.open({
		url : base + 'dl/jsp/dlChecklog.jsp?brNo=' + brNo
		+ '&reportDate=' + reportDate,
		title : "校验日志",
		width : 1000,
		height : 400,
		allowResize : true
	});
}

function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:searchFormula()"><span class="mini-button-text  mini-button-icon icon-edit">查看公式</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:restartFormula()"><span class="mini-button-text  mini-button-icon icon-start">重新执行</span></a>';	
	return s;
}

function searchFormula() {
	var e = checkGrid.getSelected();
	mini.open({
		url : base + 'dl/formula/getFormulaById.nut?id=' + e.formulaId + '&page=/dl/jsp/dlFormula.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false
	});
}

function restartFormula() {
	var e = checkGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dl/check/startSingleCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + "&id=" +e.id + "&formulaId="+ e.formulaId,
		success : function(text) {
			if (text.success) {
				mini.alert(text.data, '提醒', function() {
					checkGrid.load({
						brNo : mini.get('brNo').getValue(),
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

//双击查看明细
function rowdblclick(e) {
	var record = e.record;
	mini.open({
		url : base + 'dl/formula/getFormulaById.nut?id=' + record.formulaId
				+ '&page=/dl/jsp/dlCheckResult.jsp?brNo=' + record.brNo
				+ '&reportDate=' + record.reportDate + '&tabCode=' + record.tabCode 
				+ '&fieldCode=' + record.fieldCode,
		title : "检验结果明细",
		width : 1200,
		height : 600,
		allowResize : true
	});
}

function doExportExcel() {
	var form = new mini.Form("#dlCheckForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '生成Excel文件中...'
		});
		$.ajax({
			url : base + 'dl/check/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			data : {
				brNo : mini.get('brNo').getValue(),
				reportDate : mini.get("reportDate").getFormValue()
			},
			cache : false,
			success : function(text) {
				if (text != null) {
					toDownLoadFileByFilePath(text);
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