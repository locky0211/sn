var charts1;
$(function() {
			$('#container').height($(window).height() - 70);
			$(window).resize(function() {
						$('#container').height($(window).height() - 70);
					});
		});
function doInitIndData(action) {
	// 添加和编辑校验公式
	var form = new mini.Form("#indDataForm");
	form.validate();
	if (form.isValid() && checkDate()) {

		if (action == 'excel') {
			mini.get('indGrid').show();
			$('#indGridDiv').show();
			$('#container').hide();
			doInItDataExcel();
			mini.get('btnExcel').disable();
			mini.get('btnPie').enable();
		} else {
			mini.get('indGrid').hide();
			$('#indGridDiv').hide();
			$('#container').show();
			doInItDataPie();
			mini.get('btnPie').disable();
			mini.get('btnExcel').enable();
		}

	}
}
/**
 * 导出Excel
 */
function doExportIndDataExcel() {
	var form = new mini.Form("#indDataForm");
	form.validate();
	if (form.isValid() && checkDate()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'dy/ind/data/report/doExportIndDataExcel1.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('brNo').getValue(),
						inds : mini.get('inds').tree.getValue(false),
						indType : mini.get('indType').getValue(),
						sDate : mini.get('sDate').getFormValue(),
						eDate : mini.get('eDate').getFormValue()
					},
					cache : false,
					success : function(text) {
						if (text.success) {
							toDownLoadFileByFilePath(text.data);
						} else {
							mini.alert(text.data, '提醒');
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

function doInItDataExcel() {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'dy/ind/data/report/initIndDataExcel1.nut',
				type : 'post',
				dataType : 'json',
				cache : false,
				data : {
					brNo : mini.get('brNo').getValue(),
					inds : mini.get('inds').tree.getValue(false),
					indType : mini.get('indType').getValue(),
					sDate : mini.get('sDate').getFormValue(),
					eDate : mini.get('eDate').getFormValue()
				},
				success : function(text) {
					if (!text.success) {
						mini.alert('获取报表数据失败!!', '提醒');
					} else {
						var data = text.data;
						var gird = mini.get('indGrid');
						gird.set({
									columns : data.dataGridColumns
								});
						gird.setData(data.rdExcelHelpers);

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
function doInItDataPie() {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'dy/ind/data/report/initIndDataReport1.nut',
				type : 'post',
				dataType : 'json',
				cache : false,
				data : {
					brNo : mini.get('brNo').getValue(),
					inds : mini.get('inds').tree.getValue(false),
					indType : mini.get('indType').getValue(),
					sDate : mini.get('sDate').getFormValue(),
					eDate : mini.get('eDate').getFormValue()
				},
				success : function(text) {
					if (!text.success) {
						mini.alert(text.data, '提醒');
					} else {
						var data = text.data;
						charts1 = $('#container').highcharts({
									chart : {
										type : 'column',
										margin : 75,
										backgroundColor : 'rgba(0,0,0,0)'
									},
									credits : {
										enabled : false
									},
									title : {
										text : data.title
									},
									subtitle : {
										text : data.subTitle
									},
									plotOptions : {
										series : {
											dataLabels : {
												enabled : true,
												formatter : function() {
													if (this.point.isPercent == 'y') {
														return this.y + '%';
													} else {
														return this.y + ' ';
													}
												}
											}
										},
										column : {
											depth : 25
										}
									},
									xAxis : {
										categories : data.categories
									},
									yAxis : [{
												labels : {
													format : '{value} 万元'
												},
												title : {
													text : null
												}
											}, {
												title : {
													text : null
												},
												labels : {
													format : '{value} %'
												},
												opposite : true
											}],
									tooltip : {
										formatter : function() {
											if (this.point.isPercent == 'y') {
												return this.x + '<br><b>' + this.series.name + '</b> : ' + this.y + '%';
											} else {
												return this.x + '<br><b>' + this.series.name + '</b> : ' + this.y + "万";
											}

										}
									},
									series : data.series
								});

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

function checkDate() {
	var sDate = mini.get('sDate').getFormValue();
	var eDate = mini.get('eDate').getFormValue();
	if (sDate > eDate) {
		mini.alert("开始日期不能大于结束日期!!", '提醒');
		return false;
	}
	return true;
}
function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function initRdIndList() {
	var brNo = mini.get('brNo').getValue();
	var indType = mini.get('indType').getValue();
	if (brNo != '' && indType != '') {
		mini.get('inds').load(base + 'dy/ind/data/getRdIndLists.nut?brNo=' + brNo + '&indType=' + indType);
	}
}
