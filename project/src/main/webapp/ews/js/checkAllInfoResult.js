var checkGrid;
var data;
var data1 = new Array;
var t;
$(function() {   mini.parse();
	var dateformat = $('#a').val();
	if(dateformat == '1'){
		checkGrid = mini.get("#checkGrid");
		var dt = new Date();
		dt.setDate(1);
		cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
		//mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			reportDate : mini.get('reportDate').getFormValue(),
			repCode : mini.get('#repCode').getValue(),
			formulaType : mini.get('#formulaType').getValue()
		});
	}
	else{
		checkGrid = mini.get("#checkGrid");
//		var dt = new Date();
//		dt.setDate(1);
//		cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
//		mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			//reportDate : mini.get('reportDate').getFormValue()
			startDate : mini.get('startDate').getFormValue(),
			endDate : mini.get('endDate').getFormValue(),
			tableName : mini.get('#repCode').getValue(),
			formulaType : mini.get('#formulaType').getValue()
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
			url : base + 'formula/getFormulaById.nut?id=' + record.formulaId + '&page=/ews/jsp/checkResult.jsp?brNo=' + mini.get("brNo").getValue() + '&startDate=' + mini.get("startDate").getText()
			+ '&endDate=' + mini.get("endDate").getText() + '&fieldCode=' + record.fieldCode,
			title : "检验结果明细",
			width : 1200,
			height : 600,
			allowResize : true
		});
}

function typeRenderer(e) {
	if (e.value == '1') {
		return '非空校验';
	} else if (e.value == '2') {
		return '长度校验';
	} else if (e.value == '3') {
		return '数值校验';
	} else if (e.value == '4') {
		return '范围校验';
	} else if (e.value == '5') {
		return '关联校验';
	} else {
		return '重点校验';
	}
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}

function exportExcel() {
	var form=new mini.Form("#checkForm");
	form.validate();
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	var brnoName=mini.get('#brNo').getText();
	var repCode=mini.get('#repCode').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnull/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate+"&tableName=CHECK_ALL"+"&repCode="+repCode,
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
	var brno=mini.get('#brNo').getValue();
//	var reportDate=mini.get('#reportDate').getText();
    var startDate=mini.get('#startDate').getText();
    var endDate=mini.get('#endDate').getText();
	var brnoName=mini.get('#brNo').getText();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnullsd/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&startDate="+startDate+"&tableName=CHECK_ALL",
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
	var repCode = mini.get("repCode").getValue();
	var reportDate = mini.get('reportDate').getText();
	mini.open({
		url : base + 'ews/jsp/checklog.jsp?brNo='+brNo+'&checkType='+8+'&repCode='+repCode+'&sjrq='+reportDate,
		title : "校验日志",
		width : 1000,
		height : 200,
		allowResize : true
	});
}

function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		repCode : mini.get('#repCode').getValue(),
		formulaType : mini.get('#formulaType').getValue()
	});
}

function onRenderer(e) {

	var	s = '<a class="mini-button mini-button-plain" href="javascript:reCheck()"><span class="mini-button-text  mini-button-icon icon-stop">重新校验</span></a>';

	return s;
}


function reCheck() {
	var e = checkGrid.getSelected();
	var row = checkGrid.getRowByUID(e._uid);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...' 
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/allInfo/singleFormulaCheck.nut?formulaId=' + e.formulaId+'&brNo='+mini.get("brNo").getValue()+'&reportDate='+ mini.get('reportDate').getText()+'&id='+ e.id,
		success : function(text) {
			if (text.success) {
				mini.alert(JSON.stringify(text.data), '提醒', function() {
					checkGrid.reload();
				})			
			} else {
				mini.alert(JSON.stringify(text.data), '提醒', function() {
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



function exportExcelForOrganOrDown(){
	var form=new mini.Form("#checkForm");
	form.validate();
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	var repCode=mini.get('#repCode').getText();
	var formulaType=mini.get('#formulaType').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "getorganinfo/exportExcelForOrganOrDown.nut",
		data :"brno=" + brno+"&reportDate="+reportDate+"&repCode="+repCode+"&formulaType="+formulaType,
		dataType : 'json',
		success : function(text) {
			if (text.success) {
				toDownLoadFileByFilePath(text.data);
			} else {
				mini.alert(text.data, '提醒');
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

function exportExcelForSls(){
	var form=new mini.Form("#checkForm");
	form.validate();
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	var repCode=mini.get('#repCode').getText();
	var formulaType=mini.get('#formulaType').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "getorganinfo/exportExcelForSls.nut",
		data :"brno=" + brno+"&reportDate="+reportDate+"&repCode="+repCode+"&formulaType="+formulaType,
		dataType : 'json',
		success : function(text) {
			if (text.success) {
				toDownLoadFileByFilePath(text.data);
			} else {
				mini.alert(text.data, '提醒');
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
function toDownLoadFileByFilePath(path){
	 var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	 $("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
	}

