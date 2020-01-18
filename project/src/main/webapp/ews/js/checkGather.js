var checkGrid;
$(function() {
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	checkGrid = mini.get("#checkGrid");
	checkGrid.load({
		reportDate : mini.get('#reportDate').getFormValue()
	});
});

function rowdblclick(e) {
	var record = e.record;
	mini.open({
		url : base + 'check/gather/getCheckGatherById.nut?id=' + record.id + '&page=/ews/jsp/checkGather_chart.jsp',
		title : "汇总明细图",
		width : 1300,
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
		return '复杂校验';
	}
}
function excute() {
	if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
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
			url : base + 'check/gather/handCheckGather.nut?reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text) {
					mini.alert('操作成功!!', '提醒', function() {
						checkGrid.load({
							reportDate : mini.get('#reportDate').getFormValue().replace("-","")
						});
					});
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
}
function onNumberRender(e) {
	if (e.value == '0') {
		return "<span style=\"color: green;font-size: 40px;\">●</span>"
	} else {
		return "<span style=\"color: red;font-size: 40px;\">●</span>"
	}
}
function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		tableCode : mini.get('#tableCode').getValue(),
		reportDate : mini.get('#reportDate').getFormValue()
	});
}
function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}