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
				url : base + "rd/table/report/toRdTableReportForEditToNjDealProblemPage.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
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
				url : base + "rd/table/report/toRdTableReportForEditLastRateNjDealProblemPage.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&reportRate=" + $('#reportRate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}

function showTab() {
	var iid = 'RD_REPORT_CHECK_YD_SJ';
	var text = '异动追溯结果';
	var url = 'rd/jsp/rd_report_check_yd_zs_nj.jsp?brNo='+$('#organNo').val()+'&formula='+encodeURIComponent($('#formula').val())+'&reportDate='+$('#reportDate').val();
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