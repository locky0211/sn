$(function() {
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



function posBtnDiv() {
	var wh = $(window).height();

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
		for(var i=0;i<tbmain.rows.length;i++){ 
			for(var j=0;j<tbmain.rows[i].cells.length;j++){ 
				tbmain.rows[i].cells[j].ondblclick=AlertTab; 
			} 
		}
	}
	var inputId=document.getElementsByTagName("input");
	inputId.ondblclick=AlertTab;
} 

function AlertTab() {
	var tdid=window.event.srcElement; 
	var inputId=tdid.id;
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.id;
	}
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.parentElement.id;
	}
	var formulaId=$("#"+inputId+"_formulaId").val();
	mini.open({
		url : base + "rd/check/wave_organport/toRdReportCheckResultsView_OrganPort.nut?id=" + formulaId + '&page=/rd/jsp/rd_report_check_results_view_wave_organport.jsp',
		title : "校验结果",
		iconCls : "icon-text",
		width : 750,
		height : 440,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				CloseWindow('cancel');
			}
		}
	});
}