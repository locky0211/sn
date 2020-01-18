$(function() {
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	var month=Number(cdt.getMonth()) + 1;
	if(month<10){
		month="0"+month;
	}
	mini.get('#dataDateS').setValue(cdt.getFullYear() +"-"+month);
	changeDate();
});

function changeDate(){
	var sjrq=mini.get('dataDateS').getFormValue();
	$.ajax({
		url : base + 'east/rank/getRankHighcharts.nut?sjrq=' + sjrq,
		type : "post",
		dataType : "json",
		success : function(data) {
				drscDatePie(data,sjrq)
		},
		error : function(jqXHR, textStatus, errorThrown) {
			mini.alert('访问服务器失败!!');
		}
	});	

	$.ajax({
		url : base + 'east/rank/getCheckResultStruct.nut?sjrq='+sjrq,
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				var gird = mini.get('rankGrid');
				gird.set({
					columns : text.data
				});
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
	});
	
	mini.get("#rankGrid").load({
		sjrq : mini.get('dataDateS').getFormValue(),
	});
	
} 

function drscDatePie(data,sjrq) {
	$('#zfpm').highcharts({
		chart : {
			zoomType : 'x',
			inverted: true,
			backgroundColor: 'rgba(0,0,0,0)',
			type : 'column', 
		},
		title : {
			text :sjrq+ '的总分排行',
			style : {
                fontSize:'18px',  
                color:'#FFFFFF',
			},
		},
		xAxis : [ {
			 categories: data.categories,
			labels : {
				rotation:-25,
				style : {
                    fontSize:'15px',  
                    color:'#FFFFFF',
				},
			},
		} ],
		 plotOptions: {
		        series: {
		        	pointWidth: 10
		        }
		    },
		yAxis : [ { // Primary yAxis
			labels : {
				enabled:false,
				format : '{value}',
				style : {
					color : '#FFFFFF',
				}
			},
			title : {
				text : '分数（分）',
				style : {
					color : '#FFFFFF',
				}
			},
			gridLineWidth : 0 ,
			min : 0,
			max :110
		}],
		tooltip : {
			shared : true,
			followTouchMove : false,
			valueSuffix: '分'     
		},
		legend : {
			layout : 'vertical',
			align : 'right',
			//x: 120,
			verticalAlign : 'top',
			//y: 0,
			floating : true,
			itemStyle: {
                color: '#FFFFFF',
            }
		},
		 plotOptions: {  
		        series: {  
		        	 dataLabels: {
		                 enabled: true,
		                 color: '#FFFFFF'
		             },
		            cursor: 'pointer',  
		            events: {  
		                click: function(e) {  
		                	getQstjData(typeof(e.point.category)=='undefined'?'':e.point.category);  
		                	getXxtjData(typeof(e.point.category)=='undefined'?'':e.point.category,sjrq);
		                },
						 afterAnimate: function () {
							 getQstjData(typeof(data.categories[0])=='undefined'?'':data.categories[0]);  
							 getXxtjData(typeof(data.categories[0])=='undefined'?'':data.categories[0],sjrq);
				         }
		            }  
		        } 
		    },  
		colors: ['#5EF7FF', '#5EF7FF', '#5EF7FF', '#5EF7FF',
                 '#5EF7FF', '#5EF7FF', '#5EF7FF', '#5EF7FF', '#5EF7FF'],
		series :data.series
	});
}


function getQstjData(brno){
	$.ajax({
		url : base + 'east/rank/getQstiHighcharts.nut?brno='+encodeURI(encodeURI(brno)),
		type : "post",
		dataType : "json",
		success : function(data) {  
			qstjDatePie(data,brno)
		},
		error : function(jqXHR, textStatus, errorThrown) {
			mini.alert('访问服务器失败!!');
		}
	});	
}

function getXxtjData(brno,sjrq){
	$.ajax({
		url : base + 'east/rank/getXxtjHighcharts.nut?brno='+encodeURI(encodeURI(brno))+'&sjrq='+sjrq,
		type : "post",
		dataType : "json",
		success : function(data) {  
			xxtjDatePie(data,brno,sjrq)
		},
		error : function(jqXHR, textStatus, errorThrown) {
			mini.alert('访问服务器失败!!');
		}
	});	
}


function xxtjDatePie(data,brno,sjrq){
	$('#xxtj').highcharts({
		 chart: {
			 	backgroundColor: 'rgba(0,0,0,0)',
				zoomType: 'xy'
	        },
	        title: {
	            text:  brno+sjrq+'的错误分布统计'
	        },
	        tooltip: {
	            headerFormat: '{series.name}<br>',
	            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
							followTouchMove:false
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
	                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
	                    }
	                }
	            }
	        },
	        series: data.series
	});

}

function qstjDatePie(data,brno) {
	$('#qstj').highcharts({
		chart : {
			zoomType : 'x',
			backgroundColor: 'rgba(0,0,0,0)',
		},
		title : {
			text : brno+'排名趋势统计',
			style : {
                fontSize:'18px',  
                color:'#FFFFFF',
			},
		},
		xAxis : [ {
			 categories: data.categories,
			labels : {
				rotation:-25,
				style : {
                    fontSize:'15px',  
                    color:'#FFFFFF',
				},
			},
		} ],
		 plotOptions: {
		        series: {
		        	pointWidth: 10
		        }
		    },
		yAxis : [ { // Primary yAxis
			labels : {
				enabled:true,
				format : '{value}',
				style : {
					color : '#FFFFFF',
				}
			},
			title : {
				text : '分数（分）',
				style : {
					color : '#FFFFFF',
				}
			},
			min : 0,
			max :100
		},{ // Primary yAxis
			labels : {
				enabled:true,
				format : '{value}',
				style : {
					color : '#FFFFFF',
				}
			},
			reversed: true,
			title : {
				text : '排名',
				style : {
					color : '#FFFFFF',
				}
			},
			opposite: true,
			min : 0,
			max :40
		}
		],
		tooltip : {
			shared : true,
			followTouchMove : false,
		},
		legend : {
			layout : 'vertical',
			align : 'right',
			//x: 120,
			verticalAlign : 'top',
			//y: 0,
			floating : true,
			itemStyle: {
                color: '#FFFFFF',
            }
		},
		series :data.series
	});
}

function onClose(){
	$("#mask").hide();
}

function addCheck(){
	if($("#rankChart").is(":hidden")){
	       $("#rankChart").show();    //如果元素为隐藏,则将它显现
	       $("#rankTable").hide();
	}else{
	      $("#rankChart").hide();     //如果元素为显现,则将其隐藏
	      $("#rankTable").show();
	}
}