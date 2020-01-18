/**
 * 
 */
var reportCheckGrid;
var message;

$(function() {
	reportCheckGrid = mini.get('reportCheckGrid');
	gridLoad();
});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}


function doExportExcel() {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '生成Excel文件中...'
		});
		$.ajax({
			url : base + 'rd/check_cs/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			data : {
				brNo : mini.get('brNo').getValue(false),
				reportDate : mini.get("reportDate").getFormValue(),
				tabType : mini.get("tabType").getValue(),
				formulaType : mini.get("formulaType").getValue(),
				checkArea : mini.get("checkArea").getValue()
			},
			cache : false,
			success : function(text) {
				if (text != null) {
					toDownLoadFileByFilePath(text);
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

function onWinClosed() {
	gridLoad();
}

function checks(){
	mini.get('review').hide();
	mini.get('otherReview').hide();
}

function gridLoad() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var checkFormula = mini.get("checkFormula").getValue();
	var reExamine = mini.get('reExamine').getValue();
	if (brNo != '' && reportDate != '' && checkFormula != '' && reExamine !== '') {
		reportCheckGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			checkFormula : checkFormula,
			reExamine : reExamine
		});
	}
}

function showCheckView(e) {
	var row = e.record;
	mini.open({
		url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.id
				+ '&page=/rd/jsp/rd_report_check_results_view.jsp',
		title : "校验结果",
		iconCls : "icon-text",
		width : 750,
		height : 400,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}
	});
}

function onRiskRenderer(e) {
	if (e.value == '数值准确') {
		return '<font color="red">数值准确</font>';
	} else {
		return '<font color="blue">敏感关注</font>';
	}
}
function onValueRender(e){
	return e.value.toFixed(2);
}
function onErrorMsgRenderer(e) {
	var content = e.value;
	var start = content.indexOf("差值：");
	var end = content.indexOf("]，");
	if(start == "-1"){
		return content;
	}else{
		return content.substring(start+3,end)
	}
}

//问题下发
function issued() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			issueding();
		}
	});
}

//问题下发处理
function issueding() {
	var grid = mini.get('reportCheckGrid');
	var rows = grid.getSelecteds();
	var checkType = "0";  //0为逻辑校验，1为异动校验
	if (rows.length > 0) {
		var issuedResult = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			if (row.bzInformation == null || row.bzInformation == "" || row.bzInformation === undefined) {
				mini.alert("请填写备注信息！！！","提醒");
				return;
				//row.bzInformation = "null";
			}else {
				if(row.CZ === undefined){
					row.CZ = "null";
				}
//				if(row.existId === "" || row.existId === null){
//					row.existId = "null";
//				}
				issuedResult = issuedResult + row.id + "<" + row.bzInformation + "<" + row.CZ + "<" + row.existId +";";
			}
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '问题下发中,请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/problem/summary/sendIssueToTable.nut",
			data : {
				issuedResult : issuedResult.substring(0, issuedResult.length - 1),
				checkType : checkType,
				reExamine : reExamine
			},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert(data.data,'提醒',function(){
						gridLoad()
					});
				} else {
					mini.alert(data.data,'提醒',function(){
						gridLoad()
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
	}else {
		mini.alert("请选择需要下发的问题数据!!!");
	}
}


function relatedExist(e) {
	var s = "";
	if(e.record.existId != '' && e.record.existId != 'null'&& typeof(e.record.existId) != 'undefined') {
		s += '<a class="mini-button mini-button-plain" href="javascript:fetchProblem()"><span class="mini-button-text  mini-button-icon icon-search">查看</span></a>';
	}
	return s;
}

function fetchProblem(){
	var e = reportCheckGrid.getSelected();
	if (e) {
		mini.open({
			url : base + "rd/problem/summary/getDealProblemDetail.nut?problemId=" + e.existId + '&page=/rd/jsp/rd_problem_detail_yd_nj.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 480,
			allowResize : false,
			showMaxButton : true
		});
	}
}	
