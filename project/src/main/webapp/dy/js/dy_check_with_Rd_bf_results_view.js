$(function() {
	var n='';
	var codes =reportNoStr .split('@');
	$.each(codes,function(i, n) {
						if (n.indexOf("A") == 0) {
							$('#reportNoStrTd')
									.append(
											'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportBf(\''
													+ n
													+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">'
													+ n + '</span></a>');
						} 
						
						else if(n.indexOf("G") == 0||n.indexOf("SF") == 0){
							$('#reportNoStrTd')
									.append(
											'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportRd(\''
													+ n
													+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">'
													+ n + '</span></a>');
						}
						else{
							$('#reportNoStrTd')
									.append(
											'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportDy(\''
													+ n
													+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">'
													+ n + '</span></a>');
						}
					});

});

function toEditTableReportBf(reportNoStr, isReplay) {
	mini.open({
		url : base
				+ "bf/table/report/toBfTableReportForEdit.nut?tabCodeVersion="
				+ reportNoStr + "_" + isReplay + "&brNo=" + $('#organNoBf').val()
				+ "&reportDate=" + $('#reportDate').val() + "&checkFormula="
				+ encodeURIComponent($('#formula').val()),
		title : reportNoStr,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}

function toEditTableReportRd(reportNoStr, isReplay) {
	mini.open({
		url : base
				+ "rd/table/report/toRdTableReportForEdit.nut?tabCodeVersion="
				+ reportNoStr + "_" + isReplay + "&brNo=" + $('#organNoRd').val()
				+ "&reportDate=" + $('#reportDate').val() + "&checkFormula="
				+ encodeURIComponent($('#formula').val()),
		title : reportNoStr,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}
function toEditTableReportDy(reportNoStr, isReplay) {
	mini.open({
				url : base + "dy/table/report/toDyTableReportForEdit.nut?tabCodeVersion=" + reportNoStr + "_" + isReplay + "&brNo=" + $('#organNoDy').val()
						+ "&reportDate=" + $('#reportDate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : reportNoStr,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}