$(function() {
			var isReplay = false;
			if (formula.indexOf('^') > 0) {
				isReplay = true;
			}

			var codes = reportNoStr.split('@');
			$.each(codes, function(i, n) {
						$('#reportNoStrTd')
								.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReport(\'' + n
										+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + n + '</span></a>');
					});
			
			if(formula.indexOf('$') > 0){
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '上期</span></a>');
			}
		});

function toEditTableReport(tabCode, isReplay) {
	var n = '';
	var tabType;
	if($('#tabType').val()=='月度'){
		tabType='M';
	}else if($('#tabType').val()=='季度'){
		tabType='S';
	}else{
		tabType='Y';
	}
	mini.open({
				url : base + "pi/check/wave/toPiTableReportForEdit.nut?id="+ $('#id').val(),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}
function toEditTableReportLastRate(tabCode, isReplay) {
	var n = '上期';
	var tabType;
	if($('#tabType').val()=='月度'){
		tabType='M';
	}else if($('#tabType').val()=='季度'){
		tabType='S';
	}else{
		tabType='Y';
	}
	mini.open({
				url : base + "pi/check/wave/toPiTableReportForEditLastRate.nut?id="+ $('#id').val(),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}
