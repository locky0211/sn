$(function() {
			var isReplay = false;
			

			var codes = reportNoStr.split('@');
			$.each(codes, function(i, n) {
						$('#reportNoStrTd')
								.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReport(\'' + n
										+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + n + '</span></a>');
					});
		});

function toEditTableReport(tabCode, isReplay) {
	var n = '';
	
	mini.open({
				url : base + "ir/table/report/toIrTableAttentionForEdit.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&attention=" + encodeURIComponent($('#attention').val()),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}
