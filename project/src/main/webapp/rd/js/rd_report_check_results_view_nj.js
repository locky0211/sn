/**
 * 
 */
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
						if (isReplay) {
							$('#reportNoStrTd')
									.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReport(\'' + n
											+ '\',\'true\')"><span class="mini-button-text  mini-button-icon icon-excel">' + n + '补报</span></a>');
						}
					});
			var ncodes = formula.split('AND');
			if(ncodes.length==2){
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '上期</span></a>');
				if (isReplay) {
					$('#reportNoStrTd')
						.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + codes[0]
						+ '\',\'true\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '上期补报</span></a>');
				}
			}
		});

function toEditTableReport(tabCode, isReplay) {
	var n = '';
	if (isReplay=='true') {
		n = '补报';
	}
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEdit.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
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
	if (isReplay=='true') {
		n = '补报';
	}
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEditLastRate.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}


function showTab() {
	var iid = 'RD_REPORT_CHECK_OLD_SJ';
	var text = '追溯结果';
	var url = 'rd/jsp/rd_report_base_check_review.jsp?brNo='+$('#organNo').val()+'&checkFormula='+encodeURIComponent($('#formula').val())+'&reportDate='+$('#reportDate').val() + '&reExamine=1';
	var checkArea = '0';
	var tabs = window.top['_CACHE'];
	var id = "tab$" + iid;
	var tab = tabs.getTab(id);
	if (!tab) {
		tab = {};
		tab.name = id;
		tab.title = text;
		tab.showCloseButton = true;
		tabs.addTab(tab);
	}
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}