var reportCheckGrid;
var message;

$(function() {
	reportCheckGrid = mini.get('reportCheckGrid');
	$.ajax({
		url : base + 'rd/problemIssued/checkRole.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				$("#checkRole").show();
				gridLoad();
			} else {
				$("#checkRole").hide();
				gridLoad();
			}
		}
	});	
});

function onBrNo(e){
	var row=e.record;
	var brNo=row.organNo;
	$.ajax({
        url: base+"bf/remarks/getBmNameByBmCode.nut",
        data: { code:brNo },
        type: "post",
        async:false,
        success: function (text) {
           brNo=text.data;
        	 },
       
    });
	return brNo
}

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
	if (brNo != '' && reportDate != '' && checkFormula != '') {
		reportCheckGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			checkFormula : checkFormula
		});
	}
}

function showCheckView(e) {
	var row = e.record;
	mini.open({
		url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.id
				+ '&page=/rd/jsp/rd_report_check_results_view_cs.jsp',
		title : "校验结果",
		iconCls : "icon-text",
		width : 750,
		height : 400,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				reloads();
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
	if (rows.length > 0) {
		var issuedResult = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			if (row.bzInformation == null || row.bzInformation == "") {
				row.bzInformation = "null";
			}
			issuedResult = issuedResult + row.id + "-" + row.bzInformation + ";";
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '问题下发中请稍后...'
		});	
		$.ajax({
			type : "POST",
			//上海新需求
			url : base + "rd/error/check/confirm/saveIssued.nut",
			//上海旧方案
			//url : base + "rd/problemIssued/saveIssued.nut",
			data : "issuedResult=" + issuedResult.substring(0, issuedResult.length - 1),
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("处理成功!!");
					grid.reload();
				} else {
					mini.alert("下发失败!!!");
					grid.reload();
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