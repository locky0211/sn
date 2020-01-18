var checkLogGrid;
$(function() {
			// var rd = Date.today().addMonths(-1);
			// mini.get('reportDate').setValue(rd);
			$('#dateFont').html(Date.today().toString('yyyy年MM月dd日 E'));
			checkLogGrid = mini.get('checkLogGrid');
			checkLogGrid.load();
			checkLogGrid.sortBy("checkNoPassNum1", "desc");
			mini.get('sysNoticeGrid').load();
			initAuditComDegreeChart();
			var portal = new mini.ux.Portal();
			portal.set({
						style : "width: 100%;",
						columns : ["100%", 350]
					});
			portal.render(document.body);

			// panel
			portal.setPanels([{
						column : 0,
						id : "p2",
						title : "审核差错情况",
						body : '#checkLogGrid',
						iconCls : "icon-document",
						height : 250,
						showCollapseButton : true,
						bodyStyle : "padding:0px;"
					}, {
						column : 0,
						id : "p1",
						title : "最新公告",
						body : '#sysNoticeGrid',
						showCloseButton : true,
						height : 265,
						iconCls : "icon-document",
						bodyStyle : "padding:0px;"
					}, {
						column : 1,
						id : "p3",
						title : "审核进度",
						iconCls : "icon-pie",
						body : '#acdChartDiv',
						showCloseButton : true,
						height : 250,
						bodyStyle : "overflow: hidden;text-aligh:center"
					}, {
						column : 1,
						id : "p3",
						title : "登录信息",
						iconCls : "icon-checkSq",
						body : '#lmDiv',
						showCloseButton : true,
						height : 180,
						bodyStyle : "overflow: hidden;text-aligh:center"
					}

			]);

		});

function checkResultGrid() {
	checkLogGrid.load(
			// {
			// reportDate : mini.get('reportDate').getFormValue()
			// }
			);
}
var acdChart;
function initAuditComDegreeChart() {
	$.ajax({
				url : base + 'rd/check/log/getRdReportChekNum.nut',
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					acdChartt = new Highcharts.Chart({
								chart : {
									renderTo : 'acdChartDiv',
									type : 'pie',
									backgroundColor : 'rgba(0,0,0,0)'
								},
								title : {
									text : ''
								},
								credits : {
									enabled : false
								},
								exporting : {
									enabled : false
								},
								plotOptions : {
									pie : {
										startAngle : -90,
										endAngle : 90,
										cursor : 'pointer',
										dataLabels : {
											formatter : function() {
												return this.point.name + this.y;
											}
										},
										events : {
											click : function(event) {
												if (event.point.name == '未审核') {
													mini.open({
																url : base + "rd/jsp/rd_no_check_home.jsp",
																title : "未审核数据列表",
																iconCls : "icon-text",
																width : 750,
																height : 400,
																allowResize : false,
																showMaxButton : true
															});
												}

											}
										}
									}
								},
								tooltip : {
									enabled : false
								},
								series : [{
											data : [{
														name : '已审核',
														y : parseInt(text.checkNoPassNum2),
														color : '#7CB5EC'
													}, {
														name : '未审核',
														y : parseInt(text.checkNoPassNum1) - parseInt(text.checkNoPassNum2),
														color : '#F7A35C'
													}]
										}]
							});
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				}
			});

}

function showCheckView(e) {
	var row = e.record;
	parent.showTab(row.areaCode, '校验结果信息', base + 'rd/jsp/rd_check_result_list.jsp?brNo=' + row.areaCode + '&reportDate='
					+ Date.today().addMonths(-1).toString('yyyy-MM-dd'));
}
function showNoticeView(e) {
	var row = e.record;
	mini.open({
				url : base + "/sys/notice/toEditSysNotice.nut?id=" + row.id + '&page=/sys/jsp/sys_notice_view.jsp',
				title : "系统公告",
				width : $(top.window).width() - 100,
				height : $(top.window).height() - 100,
				showMaxButton : true,
				iconCls : "icon-document"
			});
}