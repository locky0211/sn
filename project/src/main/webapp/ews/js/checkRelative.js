var checkGrid;
var data;
var data1 = new Array;
var t;
$(function() {
	var dateformat = $('#a').val();
	if(dateformat == '1'){
		checkGrid = mini.get("#checkGrid");
		var dt = new Date();
		dt.setDate(1);
		cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
		mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
		mini.get('#version').setValue(3);
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			reportDate : mini.get('reportDate').getFormValue()
		});
	}
	else{
	checkGrid = mini.get("#checkGrid");
	mini.get('#version').setValue(3);
//	var dt = new Date();
//	dt.setDate(1);
//	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
//	//mini.get('#checkDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
//	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
//		reportDate : mini.get('reportDate').getFormValue()
		startDate : mini.get('startDate').getFormValue(),
		endDate : mini.get('endDate').getFormValue(),
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
		url : base + 'formula/getFormulaById.nut?id=' + record.formulaId + '&page=/ews/jsp/checkResult.jsp?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + '&fieldCode=' + record.fieldCode,
		title : "检验结果明细",
		width : 1200,
		height : 600,
		allowResize : true
	});

}

function rowdblclick_sd(e) {
	var record = e.record;
	mini.open({
		url : base + 'formula/getFormulaById.nut?id=' + record.formulaId + '&page=/ews/jsp/checkResult.jsp?brNo=' + mini.get("brNo").getValue() + '&startDate='
		+ mini.get("startDate").getText() + '&endDate=' + mini.get("endDate").getText() + '&fieldCode=' + record.fieldCode,
		title : "检验结果明细",
		width : 1200,
		height : 600,
		allowResize : true
	});

}
function excute() {
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null ) {
		mini.alert("请选择报表日期!!");
	}  else if (mini.get("version").getText() == '' || mini.get("version").getText() == null) {
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
			url : base + 'check/relative/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + '&version=' + mini.get("version").getValue(),
			success : function(text) {
				if (text.success) {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
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
				clearInterval(t);
				mini.unmask(document.body);
			}
		});
		if(data1[0]!=data1[1]||data1[0]==null){
			t=self.setInterval("a()",1000);
			}
	}
}

function excute_sd() {
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("startDate").getText() == '' || mini.get("startDate").getText() == null || mini.get("endDate").getText() == '' || mini.get("endDate").getText() == null) {
		mini.alert("请选择报表日期!!");
	} else if (mini.get("startDate").getText().replace("-","") > mini.get("endDate").getText().replace("-","")){
		mini.alert("起始日期不能大于结束日期!!");
	} else if (mini.get("version").getText() == '' || mini.get("version").getText() == null) {
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
			url : base + 'check/relativesd/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&startDate=' + mini.get("startDate").getText() + '&endDate=' + mini.get("endDate").getText()+ '&version=' + mini.get("version").getValue(),
			success : function(text) {
				if (text.success) {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
//							reportDate : mini.get('reportDate').getFormValue()
							startDate : mini.get('startDate').getFormValue(),
							endDate : mini.get('endDate').getFormValue(),
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
				clearInterval(t);
				mini.unmask(document.body);
			}
		});
		if(data1[0]!=data1[1]||data1[0]==null){
			t=self.setInterval("a_sd()",1000);
			}
	}
}

function a(){
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/relative/refreshSession.nut',
		success : function(text) {
			if (text.success) {
				var data1=text.data;
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : data1[0]+'/'+data1[1],
				});
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		
	});
}

function a_sd(){
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/relativesd/refreshSession.nut',
		success : function(text) {
			if (text.success) {
				var data1=text.data;
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '<p style="text-align:center">'+data1[0]+'/'+data1[1]+'<br/><p style="text-align:center">公式类型：'+data1[4]+'<br/><p align="center">表名：'+data1[2]+'<br/><p align="center">公式描述：'+data1[3]+'</p>',
				});
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		
	});
}

function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		tableName : mini.get('#repCode').getValue()
	});
}

function search_sd() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
//		reportDate : mini.get('reportDate').getText(),
		startDate : mini.get('startDate').getText(),
		endDate : mini.get('endDate').getText(),
		tableName : mini.get('#repCode').getValue()
	});
}

function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}
function exportExcel() {
	var form=new mini.Form("#checkForm");
	form.validate();
	var brnoName=mini.get('#brNo').getText();
	var reportDate=mini.get('#reportDate').getText();
	var brno=mini.get('#brNo').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnull/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate+"&tableName=CHECK_RELATIVE",
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

function exportExcel_sd() {
	var form=new mini.Form("#checkForm");
	form.validate();
	var brnoName=mini.get('#brNo').getText();
//	var reportDate=mini.get('#reportDate').getText();
	var startDate=mini.get('#startDate').getText();
    var endDate=mini.get('#endDate').getText();
	var brno=mini.get('#brNo').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnullsd/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&startDate="+startDate+"&tableName=CHECK_RELATIVE",
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
		url : base + 'ews/jsp/checklog.jsp?brNo='+brNo+'&checkType='+5,
		title : "校验日志",
		width : 1000,
		height : 200,
		allowResize : true
	});
}