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
		checkGrid.load({
			brNo : mini.get('brNo').getValue(),
			reportDate : mini.get('reportDate').getFormValue()
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
			endDate : mini.get('endDate').getFormValue()
		});
	}
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DcTableName',
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
			url : base + 'dcFormula/getDcFormulaById.nut?id=' + record.formulaId + '&page=/dc/jsp/dcCheckResult.jsp?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + '&fieldCode=' + record.fieldCode,
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
		return '范围校验';
	} else if (e.value == '4') {
		return '数值校验';
	} else if (e.value == '5') {
		return '关联校验';
	} else {
		return '重点校验';
	}
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
			url : base + 'dcCheck/all/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText() + '&repCode=' + mini.get("repCode").getValue()+'&formulaType=' + mini.get("formulaType").getValue(),
			success : function(text) {
				if (text.success) {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
							reportDate : mini.get('reportDate').getFormValue(),
							tableName : mini.get('#repCode').getValue(),
							formulaType : mini.get('#formulaType').getValue()
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


function a(){
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dcCheck/all/refreshSession.nut',
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

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		tableName : mini.get('#repCode').getValue(),
		formulaType : mini.get('#formulaType').getValue()
	});
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
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnull/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate+"&tableName=DC.DC_CHECK_ALL",
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
		url : base + 'dc/jsp/dcCheckLog.jsp?brNo='+brNo+'&checkType='+7,
		title : "校验日志",
		width : 1000,
		height : 200,
		allowResize : true
	});
}