var reportDateStr;
var counter = 0;
function stringNumbers(str) {
	if (str.indexOf("[")==-1) {
		return 0;
	} else if (str.indexOf("[") != -1) {
		counter++; 
		stringNumbers(str.substring(str.indexOf("[")+1));  
        return counter;
	}
}

//判断字符串包含的方法
function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

$(function() {
	var formulaStr = formula;
	var formulaStrList = new Array();
	var count = stringNumbers(formulaStr);
	var reportStr = "";
	var codeStrList = new Array();
	for (var i = 0; i < count; i++) {
		var left = formulaStr.indexOf("[");
		var right = formulaStr.indexOf("]");
     	var strNew = formulaStr.substring(left + 1 , right);
     	formulaStrList.push(strNew);
     	formulaStr = formulaStr.substring(right+1);
	}
	for (var j = 0; j < formulaStrList.length; j++) {
		var flag = 1;
		var allCodes = new Array();
		var formulaChild = formulaStrList[j];
		var codes;
		var falgName;
		//固定机构
		var fixedBrno = "";
		if (isContains(formulaChild,"J|")) {
			var leftStr = formulaChild.indexOf("|");
			var rightStr = formulaChild.lastIndexOf("|");
	     	fixedBrno = formulaChild.substring(leftStr + 1 , rightStr);
	     	formulaChild = formulaChild.substring(0,1) + formulaChild.substring(rightStr+1);
		}
		var formulaCodes = formulaChild.split('_');
		if (isContains(formulaCodes[1],"$")) {
			codes = formulaCodes[1].split('$');
			allCodes.push(formulaCodes[0]);
			for (var k = 0; k < codes.length; k++) {
				allCodes.push(codes[k]);
			}
			allCodes.push("$");
		} else if (isContains(formulaCodes[1],"@")) {
			codes = formulaCodes[1].split('@');
			allCodes.push(formulaCodes[0]);
			for (var k = 0; k < codes.length; k++) {
				allCodes.push(codes[k]);
			}
			allCodes.push("@");
		} else if (isContains(formulaCodes[1],"~")) {
			codes = formulaCodes[1].split('~');
			allCodes.push(formulaCodes[0]);
			for (var k = 0; k < codes.length; k++) {
				allCodes.push(codes[k]);
			}
			allCodes.push("~");
		}else {
			for (var k = 0; k < formulaCodes.length; k++) {
				allCodes.push(formulaCodes[k]);
			}
			allCodes.push("_");
		}
		
		if (allCodes[allCodes.length-1] == "_") {
			falgName = "";
		} else if (allCodes[allCodes.length-1] == "$") {
			falgName = "(上期)";
		} else if (allCodes[allCodes.length-1] == "@") {
			falgName = "(年初)";
		} else if (allCodes[allCodes.length-1] == "~") {
			falgName = "(去年同期)";
		}
		if (allCodes[0] == 'D') {
			//自定义模块  DY
			var codeStr = allCodes[1] + ";" + allCodes[allCodes.length-1];
			for (var d = 0; d < codeStrList.length; d++) {
				if (codeStr == codeStrList[d]) {
					flag = 0;
				}
			}
			if (flag == 1) {
				$('#reportNoStrTd').append(
						'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportDY(\''
						+ allCodes[1]
						+ '\',\'false\',\''+allCodes[allCodes.length-1]+'\',\''+ fixedBrno +'\')"><span class="mini-button-text  mini-button-icon icon-excel">'
						+ allCodes[1] + falgName + '</span></a>');
				codeStrList.push(codeStr);
			}
		} else if (allCodes[0] == 'R') {
			//1104模块  RD
			var codeStr = allCodes[1] + ";" + allCodes[allCodes.length-1];
			for (var d = 0; d < codeStrList.length; d++) {
				if (codeStr == codeStrList[d]) {
					flag = 0;
				}
			}
			if (flag == 1) {
				$('#reportNoStrTd').append(
						'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportRD(\''
						+ allCodes[1]
						+ '\',\'false\',\''+allCodes[allCodes.length-1]+'\',\''+ fixedBrno +'\')"><span class="mini-button-text  mini-button-icon icon-excel">'
						+ allCodes[1] + falgName + '</span></a>');
				codeStrList.push(codeStr);
			}
		}else if (allCodes[0] == 'B') {
			//大集中模块 BF
			var codeStr = allCodes[1] + ";" + allCodes[allCodes.length-1];
			for (var d = 0; d < codeStrList.length; d++) {
				if (codeStr == codeStrList[d]) {
					flag = 0;
				}
			}
			if (flag == 1) {
				$('#reportNoStrTd').append(
						'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportBF(\''
						+ allCodes[1]
						+ '\',\'false\',\''+allCodes[allCodes.length-1]+'\',\''+ fixedBrno +'\')"><span class="mini-button-text  mini-button-icon icon-excel">'
						+ allCodes[1] + falgName + '</span></a>');
				codeStrList.push(codeStr);
			}
		}else if (allCodes[0] == 'I') {
			//利率报备模块  IR
			var codeStr = allCodes[1] + ";" + allCodes[allCodes.length-1];
			for (var d = 0; d < codeStrList.length; d++) {
				if (codeStr == codeStrList[d]) {
					flag = 0;
				}
			}
			if (flag == 1) {
				$('#reportNoStrTd').append(
						'<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportIR(\''
						+ allCodes[1]
						+ '\',\'false\',\''+allCodes[allCodes.length-1]+'\',\''+ fixedBrno +'\')"><span class="mini-button-text  mini-button-icon icon-excel">'
						+ allCodes[1] + falgName + '</span></a>');
				codeStrList.push(codeStr);
			}
		}else if (allCodes[0] == 'P') {
			//PISA模块  PI
			choosePICode(allCodes[1]);
			var codeStr = piTableCode + ";" + allCodes[allCodes.length-1];
			for (var d = 0; d < codeStrList.length; d++) {
				if (codeStr == codeStrList[d]) {
					flag = 0;
				}
			}
			if (flag == 1) {
				if (allCodes[allCodes.length-1] == "_") {
					$('#reportNoStrTd').append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportPI(\'' + piTableCode
							+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + piTableCode + '</span></a>');
				} else if (allCodes[allCodes.length-1] == "$") {
					$('#reportNoStrTd').append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + piTableCode
							+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + piTableCode + '上期</span></a>');
				} else if (allCodes[allCodes.length-1] == "@") {
					$('#reportNoStrTd').append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportNc(\'' + piTableCode
							+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + piTableCode + '年初</span></a>');
				} else if (allCodes[allCodes.length-1] == "~") {
					$('#reportNoStrTd').append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportQntq(\'' + piTableCode
							+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + piTableCode + '去年同期</span></a>');
				}
				codeStrList.push(codeStr);
			}
		}
	}
});

var newOrg;
var piTableCode;
var flag = 0;
//选择映射机构
function chooseMapOrg(newModule) {
	var oldModule = "DY";
	var oldOrg = $('#organNo').val();
	$.ajax({
		url : base + 'sys/moduleOrgMap/getNewOrg.nut?oldModule=' + oldModule + "&oldOrg="+ oldOrg +"&newModule=" + newModule,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					newOrg = null;
				} else {
					newOrg = text.data.newOrg;
				}
			} else {
				mini.alert(text.data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

//根据公式查找tabCode
function choosePICode(quotaCode) {
	$.ajax({
		url : base + 'dy/mutiView/getTableCode.nut?quotaCode=' + quotaCode,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				piTableCode = text.data;
			} else {
				mini.alert("获取tabCode异常！");
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

//自定义模块查看
function toEditTableReportDY(reportNoStr, isReplay,typeStr,fixedBrno) {
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate;
	var brno;
	if (fixedBrno == null || fixedBrno == "") {
		brno = $('#organNo').val();
	} else {
		brno = fixedBrno;
	}
	mini.open({
		url : base + "dy/table/report/toDyTableReportForEdit_WJ.nut?tabCodeVersion=" + reportNoStr + "_" + isReplay + "&brNo=" + brno
				+ "&reportDate=" + reportDateStr + "&checkFormula=" + encodeURIComponent($('#formula').val())+ "&typeStr=" + typeStr+ "&tabType=" + tabType,
		title : reportNoStr,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}

//1104模块查看
function toEditTableReportRD(reportNoStr, isReplay, typeStr, fixedBrno) {
	var reportDate = $('#reportDate').val()
	var brno;
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("RD");
	if (fixedBrno == null || fixedBrno == "") {
		brno = newOrg;
	} else {
		brno = fixedBrno;
	}
	if (brno == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "rd/table/report/toRdTableReportForEdit_WJ.nut?tabCodeVersion="
			+ reportNoStr + "_" + isReplay + "&brNo=" + brno
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val())+ "&typeStr=" + typeStr+ "&tabType=" + tabType,
			title : reportNoStr,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

//大集中模快查看
function toEditTableReportBF(reportNoStr, isReplay,typeStr,fixedBrno) {
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("BF");
	var brno;
	if (fixedBrno == null || fixedBrno == "") {
		brno = newOrg;
	} else {
		brno = fixedBrno;
	}
	if (brno == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "bf/table/report/toBfTableReportForEdit_WJ.nut?tabCodeVersion="
			+ reportNoStr + "_" + isReplay + "&brNo=" + brno
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val())+ "&typeStr=" + typeStr+ "&tabType=" + tabType,
			title : reportNoStr,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

//利率报备模块查看
function toEditTableReportIR(reportNoStr, isReplay,typeStr,fixedBrno) {
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("IR");
	var brno;
	if (fixedBrno == null || fixedBrno == "") {
		brno = newOrg;
	} else {
		brno = fixedBrno;
	}
	if (brno == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "ir/table/report/toIrTableReportForEdit_WJ.nut?tabCodeVersion="
			+ reportNoStr + "_" + isReplay + "&brNo=" + brno
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val())+ "&typeStr=" + typeStr+ "&tabType=" + tabType,
			title : reportNoStr,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

//pisa模块查看
function toEditTableReportPI(tabCode, isReplay) {
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("PI");
	if (newOrg == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "pireport/toPiTableReportForEdit_WJ.nut?tabType=" 
			+ tabType + "&tableCode="+ tabCode + "&brNo=" + newOrg
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val()) + "&content=" + $('#content').val(),
			title : tabCode,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

function toEditTableReportLastRate(tabCode, isReplay) {
	var n = '上期';
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("PI");
	if (newOrg == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "pireport/toPiTableReportForEditLastRate_WJ.nut?tabType=" 
			+ tabType + "&tableCode="+ tabCode + "&brNo=" + newOrg
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val()) + "&content=" + $('#content').val(),
			title : tabCode + n,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

function toEditTableReportNc(tabCode, isReplay) {
	var n = '年初';
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("PI");
	if (newOrg == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "pireport/toPiTableReportForEditNc_WJ.nut?tabType=" 
			+ tabType + "&tableCode="+ tabCode + "&brNo=" + newOrg
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val()) + "&content=" + $('#content').val(),
			title : tabCode + n,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}

function toEditTableReportQntq(tabCode, isReplay) {
	var n = '去年同期';
	var reportDate = $('#reportDate').val()
	reportDateStr = reportDate.substring(0,6);
	chooseMapOrg("PI");
	if (newOrg == null) {
		mini.alert("映射机构未配置！！");
	} else {
		mini.open({
			url : base + "pireport/toPiTableReportForEditQntq_WJ.nut?tabType=" 
			+ tabType + "&tableCode="+ tabCode + "&brNo=" + newOrg
			+ "&reportDate=" + reportDateStr + "&checkFormula="
			+ encodeURIComponent($('#formula').val()) + "&content=" + $('#content').val(),
			title : tabCode + n,
			iconCls : "icon-excel",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false,
			showMaxButton : true
		});
	}
}
