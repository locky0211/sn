<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkGather_chart.js"></script>
<style type="text/css">
.grap {
	width: 600px;
	height: 600px;
	float: left;
}
</style>
</head>
<body>
	<div id="graphic1" class="grap"></div>
	<div id="graphic2" class="grap"></div>

</body>

<script src="../../echarts/dist/echarts.js"></script>
<script type="text/javascript">
	require.config({
		paths : {
			echarts : '../../echarts/dist'
		}
	});
	var tableName = '${obj.tableName}';
	var notnullNum = '${obj.notnullNum}';
	var lengthNum = '${obj.lengthNum}';
	var rangeNum = '${obj.rangeNum}';
	var valueNum = '${obj.valueNum}';
	var relativeNum = '${obj.relativeNum}';
	var complexNum = '${obj.complexNum}';
	var notnullCKNum = '${obj.notnullCKNum}';
	var lengthCKNum = '${obj.lengthCKNum}';
	var rangeCKNum = '${obj.rangeCKNum}';
	var valueCKNum = '${obj.valueCKNum}';
	var relativeCKNum = '${obj.relativeCKNum}';
	var complexCKNum = '${obj.complexCKNum}';
	function showGraphic1() {
		require([ 'echarts', 'echarts/chart/bar' ], function(ec) {
			var myChart = ec.init(document.getElementById('graphic1'));
			var option = {
				title : {
					text : '汇总数据明细',
					subtext : ''
				},
				tooltip : {
					trigger : 'axis'
				},
				legend : {
					data : [ '校验数据总量', '错误数据总量' ]
				},
				toolbox : {
					show : false,
					feature : {
						mark : {
							show : true
						},
						dataView : {
							show : true,
							readOnly : false
						},
						magicType : {
							show : true,
							type : [ 'line', 'bar' ]
						},
						restore : {
							show : true
						},
						saveAsImage : {
							show : true
						}
					}
				},
				calculable : true,
				xAxis : [ {
					type : 'category',
					data : [ '非空校验', '长度校验', '范围校验', '数值校验', '关联校验', '银监检验' ]
				} ],
				yAxis : [ {
					type : 'value'
				} ],
				series : [ {
					name : '校验数据总量',
					type : 'bar',
					itemStyle : {
						normal : {
							color : '#9900FF'
						},
						emphasis : {}
					},
					data : [ notnullCKNum, lengthCKNum, rangeCKNum, valueCKNum, relativeCKNum, complexCKNum ],
					markPoint : {
						data : [ {
							name : '标注1',
							value : notnullCKNum,
							xAxis : 0,
							yAxis : notnullCKNum
						}, {
							name : '标注2',
							value : lengthCKNum,
							xAxis : 1,
							yAxis : lengthCKNum
						}, {
							name : '标注3',
							value : rangeCKNum,
							xAxis : 2,
							yAxis : rangeCKNum
						}, {
							name : '标注4',
							value : valueCKNum,
							xAxis : 3,
							yAxis : valueCKNum
						}, {
							name : '标注5',
							value : relativeCKNum,
							xAxis : 4,
							yAxis : relativeCKNum
						}, {
							name : '标注6',
							value : complexCKNum,
							xAxis : 5,
							yAxis : complexCKNum
						} ]
					}
				}, {
					name : '错误数据总量',
					type : 'bar',
					itemStyle : {
						normal : {
							color : '#66CCFF'
						},
						emphasis : {}
					},
					data : [ notnullNum, lengthNum, rangeNum, valueNum, relativeNum, complexNum ],
					markPoint : {
						data : [ {
							name : '标注1',
							value : notnullNum,
							xAxis : 0,
							yAxis : notnullNum
						}, {
							name : '标注2',
							value : lengthNum,
							xAxis : 1,
							yAxis : lengthNum
						}, {
							name : '标注3',
							value : rangeNum,
							xAxis : 2,
							yAxis : rangeNum
						}, {
							name : '标注4',
							value : valueNum,
							xAxis : 3,
							yAxis : valueNum
						}, {
							name : '标注5',
							value : relativeNum,
							xAxis : 4,
							yAxis : relativeNum
						}, {
							name : '标注6',
							value : complexNum,
							xAxis : 5,
							yAxis : complexNum
						} ]
					}
				} ]
			};

			myChart.setOption(option);
		});
	}
	function showGraphic2() {
		require([ 'echarts', 'echarts/chart/pie' ], function(ec) {
			var myChart = ec.init(document.getElementById('graphic2'));
			option = {
				title : {
					text : tableName + '校验错误比例',
					subtext : '',
					x : 'center'
				},
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					orient : 'vertical',
					x : 'left',
					data : [ '非空校验', '长度校验', '范围校验', '数值校验', '关联校验', '银监校验' ]
				},
				toolbox : {
					show : false,
					feature : {
						mark : {
							show : true
						},
						dataView : {
							show : true,
							readOnly : false
						},
						magicType : {
							show : true,
							type : [ 'pie', 'funnel' ],
							option : {
								funnel : {
									x : '25%',
									width : '50%',
									funnelAlign : 'left',
									max : 1548
								}
							}
						},
						restore : {
							show : true
						},
						saveAsImage : {
							show : true
						}
					}
				},
				calculable : true,
				series : [ {
					name : '汇总来源来源',
					type : 'pie',
					radius : '55%',
					center : [ '50%', '60%' ],
					data : [ {
						value : notnullNum,
						name : '非空校验'
					}, {
						value : lengthNum,
						name : '长度校验'
					}, {
						value : rangeNum,
						name : '范围校验'
					}, {
						value : valueNum,
						name : '数值校验'
					}, {
						value : relativeNum,
						name : '关联校验'
					}, {
						value : complexNum,
						name : '银监校验'
					} ]
				} ]
			};

			myChart.setOption(option);
		});

	}
	showGraphic1();
	showGraphic2();
</script>
</html>