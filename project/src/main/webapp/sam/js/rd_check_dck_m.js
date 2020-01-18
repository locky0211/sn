var checkGrid;
var samdata;
$(function() {
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		rdBmcode : mini.get('rdBmcode').getValue(),
		reportDate : mini.get('reportDate').getText()
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=1104ReportName',
		success : function(text) {
			samdata = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

var newOrg;
function rdChange(e){ 
	mini.get("brNo").setValue("");
	var rdOrg = mini.get("rdBmcode").getValue();
	chooseMapOrg("RD",rdOrg,"DCK");
	mini.get("brNo").setValue(newOrg);
}

function dckChange(e){ 
	mini.get("rdBmcode").setValue("");
	var dckOrg = mini.get("brNo").getValue();
	chooseMapOrg("DCK",dckOrg,"RD");
	mini.get("rdBmcode").setValue(newOrg);
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

function onBalanceRenderer(e) {
	return "<span style=\"color: red\">" + (e.record.samValue - e.record.dckValue).toFixed(2) + "</span>"
}
function add() {
	mini.open({
		url : base + '/sam/jsp/rd_formula.jsp',
		title : '校验公式维护',
		width : 800,
		height : 500,
		allowResize : false,
		ondestroy : function(action) {
			checkGrid.reload();
		}
	});
}
function onSamNameRenderer(e) {
	for (var i = 0; i < samdata.length; i++) {
		if (samdata[i].zdValue == e.record.samTableName) {
			return samdata[i].zdName;
		}
	}

}
function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function rowdblclick(e) {
	var record = e.record;
	mini.open({
		url : base + 'rd/formula/getFormulaById.nut?id=' + record.formulaId + '&page=/sam/jsp/rd_formula_look.jsp',
		title : '校验公式维护',
		width : 800,
		height : 500,
		allowResize : false,
		ondestroy : function(action) {
		}
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
			url : base + 'rd/check/dck/startCheck.nut?brNo=' + mini.get("brNo").getValue()+ '&rdBmcode='+ mini.get('rdBmcode').getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.alert(text.data, '提醒', function() {
						checkGrid.load({
							brNo : mini.get('brNo').getValue(),
							rdBmcode : mini.get('rdBmcode').getValue(),
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					mini.alert(text.data, '提醒', function() {
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
}
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	var form=new mini.Form("#rdCheckForm");
	form.validate();
	   checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		rdBmcode : mini.get('rdBmcode').getValue(),
		reportDate : mini.get('reportDate').getText()
	});
    
}