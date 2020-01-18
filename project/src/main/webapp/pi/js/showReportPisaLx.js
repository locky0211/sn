/**
 * 
 */
$(function() {

			if ($('#bjFlag').val() == 'true') {
				$('.td-data_1').live('dblclick', function() {
							$(this).children('.valNoBr').hide();
							var input = $(this).children('.input_out');
							input.show();
							input.select();

						});
				$('.input_out').live('blur', function() {
							doEditData($(this));
						});

				$('.input_out').live('keypress', function(event) {
							if (event.keyCode == "13") {
								doEditData($(this));
							}
						});
				mini.get('layout1').showRegion('south');
			}

			
				mini.get('layout1').showRegion('north');
				
			initTableTr();
			var str=$('#errorColor').val();
			var strs=new Array();
			strs=str.split(",");
			for(i=0;i<strs.length;i++){
				$('#'+strs[i]).css({"border":"2px solid red"});
			}
		});
/**
 * 添加斑马线效果和鼠标移动样式
 */
function initTableTr() {
	$("tbody>tr:odd").addClass("odd_row");
	$("tbody>tr:even").addClass("even_row");

	$('tbody>tr').mouseover(function() {
				$(this).addClass("in_right");
			});

	$('tbody>tr').mouseout(function() {
				$(this).removeClass("in_right");
			});
}

/**
 * 校验转换
 * 
 * @param {}
 *            obj
 */
function doEditData(obj) {
	var dType = obj.attr("dType");
	var preStr = obj.attr("preStr");
	var nobr = obj.next(".valNoBr");
	var nobrText = nobr.text().replace(",", "").replace("%", "");
	if (dType == 'LS') {
		if (obj.val() != nobrText) {
			$("#isChanged").val("y");// 标识页面数据已修改
			nobr.html("<font color='red'>" + obj.val() + "</font>");
		}
		obj.hide();
		nobr.show();
	} else {
		if (obj.val() == '') {
			if (preStr == '%') {
				obj.val('0.0000');
			} else {
				obj.val('0.00');
			}
		}
		/*if (checkNum(obj)) {*/
			if (preStr == '%') {
				if (parseFloat(obj.val()).toFixed(4) != parseFloat(nobrText).toFixed(4)) {// 修改过
					$("#isChanged").val("y");// 标识页面数据已修改
					obj.val(parseFloat(obj.val()).toFixed(4));
					nobr.html("<font color='red'>" + formatNumber(obj.val(), 4) + preStr + "</font>");
				}
			} else {
				if (parseFloat(obj.val()).toFixed(2) != parseFloat(nobrText).toFixed(2)) {// 修改过
					$("#isChanged").val("y");// 标识页面数据已修改
					obj.val(parseFloat(obj.val()).toFixed(2));
					nobr.html("<font color='red'>" + formatNumber(obj.val(), 2) + "</font>");
				}
			}

			obj.hide();
			nobr.show();
		/*}*/
	}

	// 预留自动计算
	var idVar = obj.attr('id');
	var funname = "F" + idVar;
	if (idVar != "" && isFunExist(funname)) {// 自动计算
		eval(funname)(obj);
	}
}

// 页面显示千位分隔符
function showStr(obj) {
	var cvalue = obj.val();
	var preStr = obj.attr("preStr");
	var nobr = obj.next(".valNoBr");
	var nobrText = nobr.text().replace(",", "").replace("%", "");
	if (preStr == '%') {
		if (parseFloat(cvalue).toFixed(4) != parseFloat(nobrText).toFixed(4)) {// 修改过
			$("#isChanged").val("y");// 标识页面数据已修改
			obj.val(parseFloat(cvalue).toFixed(4));
			nobr.html("<font color='red'>" + formatNumber(cvalue, 4) + preStr + "</font>");
		}
	} else {
		if (parseFloat(cvalue).toFixed(2) != parseFloat(nobrText).toFixed(2)) {// 修改过
			$("#isChanged").val("y");// 标识页面数据已修改
			obj.val(parseFloat(cvalue).toFixed(2));
			nobr.html("<font color='red'>" + formatNumber(cvalue, 2) + "</font>");
		}
	}
}


function doSaveReportDate() {
	if ($('#isChanged').val() == 'y') {
		var url = base + 'bf/table/report/doSaveTableReportData.nut';
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '数据保存中...'
				});
		$.ajax({
					url : url,
					type : 'post',
					dataType : 'json',
					cache : false,
					data : $("#rdTableReportForm").serialize(),
					success : function(text) {
						if (text.success) {
							mini.alert(text.data, '提醒', function() {
										doReload();
									});
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
	} else {
		mini.alert('没有进行任何修改操作!!', '提醒');
	}

}

function doRepaceReportData() {
	mini.confirm('是否确定覆盖为导入前数据状态?!', '确定？', function(action) {
				if (action == 'ok') {
					$.ajax({
								type : 'POST',
								url : base + "bf/report/import/doReplaceReportDate.nut",
								data : {
									"reportId" : $('#reportId').val()
								},
								dataType : 'json',
								success : function(data) {
									if (data.success) {
										doReload();
									} else {
										mini.alert(data.data);
									}
								}
							});
				}
			});
}

function posBtnDiv() {
	var wh = $(window).height();

}

function doExportExcel() {
	var url = base + 'bf/table/report/toExportTableReportExcel.nut?reportId=' + $('#reportId').val();
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '生成Excel文件中...'
			});
	$.ajax({
				url : url,
				type : 'post',
				dataType : 'json',
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
function doTableReportImport() {
	mini.open({
				url : base + 'bf/jsp/rd_table_report_import.jsp?reportId=' + $('#reportId').val(),
				title : '数据导入',
				width : 366,
				height : 198,
				allowResize : false,
				iconCls : "icon-excel",
				ondestroy : function(action) {
					if (action == 'ok') {
						doReload();
					}
				}
			});
}
function doReload() {
	window.location.reload();
}

/* 
页面装载时，为每个td增加单击事件，这样，就可以不用对每个页面进行更改。 
*/ 
function ReWritable() {
if($('#bjFlag').val()=='true'){
	for(var k=0;k<document.getElementsByTagName("table").length;k++){
		var tbmain=document.getElementById("tbmain"+k+""); 
		for(var i=0;i<tbmain.rows.length;i++){ 
			for(var j=0;j<tbmain.rows[i].cells.length;j++){ 
				tbmain.rows[i].cells[j].ondblclick=changeValue; 
			} 
		}
	}
	var inputId=document.getElementsByTagName("input");
	inputId.ondblclick=changeValue;
	}
} 

function changeValue(){
	var frequentness=$("#frequentness").val();
	var subNo=$("#subNo").val();
	var tableCode=$("#tableCode").val();
	var brNo=$("#brNo").val();
	var tdid=window.event.srcElement; 
	var inputId=tdid.id;
	var tdtxt=tdid.innerText;
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.id;
		tdtxt=tdid.parentElement.innerText;
	}
	//正则表达式判断数值是否为数值和小数点
	mini.open({
			url : base + 'pi/jsp/pi_table_report_changeValue.jsp?&value='+tdtxt+'&inputId='+inputId+'&frequentness='+frequentness+'&subNo='+subNo+'&brNo='+brNo+'&tableCode='+tableCode,
			title : '数据修改',
			width : 300,
			height : 170,
			allowResize : false,
			iconCls : "icon-excel",
			ondestroy : function(action) {
				if (action == 'ok') {
					window.location.reload();
				}
			}
		});  
    
}

