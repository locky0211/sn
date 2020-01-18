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
		if($('#flag').val()=='false'){
   	      ReWritable(); 
   	   ReWritable1(); 
   	   }
			if (tarStr != '') {
				mini.get('layout1').showRegion('north');
				$.each(tarStr.split(';'), function(i, n) {
							$('#' + n + '_TD').addClass('errorInput');
						});
			}
			initTableTr();
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
		if (checkNum(obj)) {
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
		}
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

function checkNum(obj) {
	var reg = /^(-|\+)?\d+(\.\d+)?$/;
	var val = obj.val();
	if (val != "" && !reg.test(val)) {
		alert(val + " 不合法，请输入合法数字！");
		obj.select();
		return false;
	} else {
		if (val.indexOf(".") != -1) {// 带小数点
			if ((val.substr(0, val.indexOf("."))).length > 12) {
				alert(val + " 超出数据库允许范围，整数部分不能超出12位！");
				obj.select();
				return false;
			} else if ((val.substr(val.indexOf("."))).length > 5) {
				alert(val + " 超出数据库允许范围，小数部分不能超出4位！");
				obj.select();
				return false;
			}
		} else {
			if (val.substr(0, val.length > 12)) {
				alert(val + " 超出数据库允许范围,整数部分不能超过12位！");
				obj.select();
				return false;
			}
		}
	}

	return true;
}

function doSaveReportDate() {
	if ($('#isChanged').val() == 'y') {
		var url = base + 'bf/table/report/temp/doSaveTableReportData.nut';
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
								url : base + "bf/report/import/temp/doReplaceReportDate.nut",
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
	var url = base + 'bf/table/report/temp/toExportTableReportExcel.nut?reportId=' + $('#reportId').val();
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
				url : base + 'bf/jsp/rd_table_report_import_t.jsp?reportId=' + $('#reportId').val(),
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
	for(var k=0;k<document.getElementsByTagName("table").length;k++){
		var tbmain=document.getElementById("tbmain"+k+""); 
		console.log("tbmain.length"+tbmain.rows.length);
		for(var i=0;i<tbmain.rows.length;i++){ 
			console.log("tbmainrow.length"+tbmain.rows[i].cells.length);
			for(var j=0;j<tbmain.rows[i].cells.length;j++){ 
				tbmain.rows[i].cells[j].ondblclick=changeValue; 
				
			} 
		}
	}
	var inputId=document.getElementsByTagName("input");
	inputId.ondblclick=changeValue;

} 
function ReWritable1() { 	
	for(var k=0;k<document.getElementsByTagName("table").length;k++){
		var tbmain=document.getElementById("tbmain"+k+""); 
		for(var i=0;i<tbmain.rows.length;i++){ 
			for(var j=0;j<tbmain.rows[i].cells.length;j++){ 
				tbmain.rows[i].cells[j].onmouseover=show; 	
				tbmain.rows[i].cells[j].onmousemove=notshow; 		
			} 
		}
	}
	var inputId=document.getElementsByTagName("input");
	inputId.onmouseover=show;
	inputId.onmousemove=notshow;

} 

function changeValue(){
	var reportId=$("#reportId").val();
	//console.log("reportId="+reportId);
	var reportDate=$("#reportDate").val();
	var tdid=window.event.srcElement; 
	var inputId=tdid.id;
	var tdtxt=tdid.innerText;
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.id;
		tdtxt=tdid.parentElement.innerText;
	}
	//console.log("tdid="+tdid);
	//console.log("inputId="+inputId);
	//console.log("tdtxt="+tdtxt);
	//正则表达式判断数值是否为数值和小数点
	var reg = new RegExp("^(-?)\\d+(\\.\\d+)?$");
	if(reg.test(tdtxt.replace(/,/g,""))){
		mini.open({
			url : base + 'bf/jsp/bf_table_report_changeValue_t.jsp?&value='+tdtxt+'&inputId='+inputId+''+'&reportId='+reportId+'&reportDate='+reportDate,
			title : '数据修改',
			width : 300,
			height : 140,
			allowResize : false,
			iconCls : "icon-excel",
			ondestroy : function(action) {
				if (action == 'ok') {
					window.location.reload(); 
				}
			}
		});  
    }
}
function show(){
	var reportId=$("#reportId").val();
	//console.log("reportId="+reportId);
	var reportDate=$("#reportDate").val();
	var tdid=window.event.srcElement; 
	var inputId=tdid.id;
	var tdtxt=tdid.innerText;
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.id;
		tdtxt=tdid.parentElement.innerText;
	}
	//console.log("tdid="+tdid);
	//console.log("inputId="+inputId);
	//console.log("tdtxt="+tdtxt);
	var reg = new RegExp("^[0-9]+[0-9]+[A-Z]+[0-9A-Z]+[0-9A-Z]$");
	if(reg.test(tdtxt)){
		$.ajax({
			type : 'POST',
			url : base + 'bf/table/report/temp/showIndExplain.nut?value='+tdtxt+'&inputId='+inputId,
			dataType : 'json',
			success : function(text) {
				if(text.data!=null){
					tips(inputId,text.data);
				}else{
					tips(inputId,"没有相关解释！");
				}
				
					//mini.alert(text.data, '提醒');
				
			},
		});
	}else{
		 outtips();
	}
}

 function notshow(){
	 //outtips();
 }

 function tips(id,str){

	    t= getTop(document.getElementById(id))+document.getElementById(id).offsetHeight+document.getElementById(id).offsetHeight/4;

	    l=  getLeft(document.getElementById(id))+document.getElementById(id).offsetHeight*5;

	    document.getElementById("tips").innerHTML=str;

	    document.getElementById("tips").style.left=l+"px";

	    document.getElementById("tips").style.top=t+"px";
	 //   document.getElementById("tips").style.width="250px";
	   // document.getElementById("tips").style.height="30px";
	   // document.getElementById("tips").style.backgroundColor="#f0f1f1";
	  //  document.getElementById("tips").style.color="white";
	   // document.getElementById("tips").style.border="0";
	    
	    //document.getElementById("tips").style.borderRadius="2px";
	    document.getElementById("tips").style.display="";

	}

	/*移除说明性文字*/

	function outtips(){

	    document.getElementById("tips").style.display='none';

	}

	//获取元素的纵坐标

	    function getTop(e){

	        var offset=e.offsetTop;

	        if(e.offsetParent!=null) offset+=getTop(e.offsetParent);

	        return offset;

	    }

	//获取元素的横坐标

	    function getLeft(e){

	        var offset=e.offsetLeft;

	        if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);

	        return offset;

	    }
    
        
	