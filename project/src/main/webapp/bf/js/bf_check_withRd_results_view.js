$(function() {
	var codes = tabCode.split('@');
	$
			.each(
					codes,
					function(i, n) {
						if (n.indexOf("A") == 0) {
							$('#reportNoStrTd')
									.append(
											'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportBf(\''
													+ n
													+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">'
													+ n + '</span></a>');
						} else {
							$('#reportNoStrTd')
									.append(
											'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportRd(\''
													+ n
													+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">'
													+ n + '</span></a>');
						}
					});

});

function toEditTableReportBf(tabCode, isReplay) {
	mini.open({
		url : base
				+ "bf/table/report/toBfTableReportForEdit.nut?tabCodeVersion="
				+ tabCode + "_" + isReplay + "&brNo=" + $('#bfBmcode').val()
				+ "&reportDate=" + $('#reportDate').val() + "&checkFormula="
				+ encodeURIComponent($('#formula').val()),
		title : tabCode,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}

function toEditTableReportRd(tabCode, isReplay) {
	mini.open({
		url : base
				+ "rd/table/report/toRdTableReportForEdit.nut?tabCodeVersion="
				+ tabCode + "_" + isReplay + "&brNo=" + $('#rdBmcode').val()
				+ "&reportDate=" + $('#reportDate').val() + "&checkFormula="
				+ encodeURIComponent($('#formula').val()),
		title : tabCode,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}