$(function() {
			var codes = reportNoStr.split('@');
			var ncodes = formula.split('AND');
			if(ncodes.length==2){
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReport(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '</span></a>');
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '上期</span></a>');
			}
		});

function toEditTableReport(tabCode, isReplay) {
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEdit.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}
function toEditTableReportLastRate(tabCode, isReplay) {
	var n = '上期';
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEditLastRateNj.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&reportRate=" + $('#reportRate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}

function downIssue() {
	content =mini.get('content').getValue();
	if($.trim(content)==''){
		mini.alert('保存说明时，请填写说明信息', '提醒');
		return false;
	}
	oldContent=mini.get('oldContent').getValue();
	if(content==oldContent){
		mini.alert('说明信息没有更改，不需要保存', '提醒');
		return false;
	}
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '说明信息保存中...'
	});
	$.ajax({
		url : base + 'rd/check/wave/saveRemarkJG.nut',
		type : 'post',
		dataType : 'json',
		data : {
			id:mini.get('formulaId').getValue(),
			content:content
		},
		cache : false,
		success : function(text) {
			mini.alert(text.data, '提醒', function() {
				CloseWindow('cancel')
			})
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}