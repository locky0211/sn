var checkGrid;
var sumTypeArr;
$(function() {
	checkGrid = mini.get("#checkGrid");
	checkGrid.on("load", function() {
		checkGrid.mergeColumns(["brNo"]);
	});
	
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(
			cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DL_SUM_TYPE',
		success : function(text) {
			sumTypeArr = text;
		}
	});
});


function onSumTpyeRenderer(e) {
	for (var i = 0; i < sumTypeArr.length; i++) {
		if (sumTypeArr[i].zdValue == e.record.sumType) {
			return sumTypeArr[i].zdName;
		}
	}
}

//校验
function excute() {
	var form = new mini.Form("#dlCheckForm");
	form.validate();
	if (form.isValid()) {
		var nodes = mini.get('brNo').getCheckedNodes(false);
		// getCheckedNodes (haveParent ) haveParent:Boolean。是否包含父节点。获取Check选中的多个节点
		var nl = nodes.length;
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '数据校验中...'
		});
		$.ajax({
			url : base + 'dl/summaryCheck/toReportCheck.nut',
			type : 'post',
			dataType : 'json',
			data : {
				brNo : mini.get('brNo').getValue(),
				reportDate : mini.get("reportDate").getFormValue(),
				bfTabCode : mini.get("bfTabCode").getValue(),
				sumType : mini.get("sumType").getValue(),
				nodeLe : nl
			},
			cache : false,
			success : function(text) {
				if (nl > 1) {
					$('#rMsgDiv').html(text.data);
					mini.get('win1').show();
				} else {
					if (text.success) {
						$('#rMsgDiv').html(text.data);
						mini.get('win1').show();
						gridLoad();
					} else {
						mini.alert(text.data, '提醒');
					}
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

function gridLoad() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var bfTabCode = mini.get("bfTabCode").getValue();
	var sumType = mini.get("sumType").getValue();
	if (brNo != '' && reportDate != '') {
		checkGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			bfTabCode : bfTabCode,
			sumType : sumType
		});
	}
}


function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	var form = new mini.Form("#dlCheckForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
		bfTabCode : mini.get('#bfTabCode').getValue(),
		sumType : mini.get('#sumType').getValue()
	});
}

function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:viewDetail()"><span class="mini-button-text  mini-button-icon icon-edit">查看明细</span></a>';
	return s;
}

//双击查看明细
function viewDetail(e) {
	var e = checkGrid.getSelected();
	if (e.sumType == 'DE') {
		mini.open({
			url : base + 'dl/summaryCheck/getCheckResultById.nut?id=' + e.id
				+ '&page=/dl/jsp/dlReportSummaryCheckDE.jsp?resultId=' + e.id,
			title : "存款检验结果明细",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false
		});
	} else if (e.sumType == 'LO') {
		mini.open({
			url : base + 'dl/summaryCheck/getCheckResultById.nut?id=' + e.id
				+ '&page=/dl/jsp/dlReportSummaryCheckLO.jsp?resultId=' + e.id,
			title : "贷款检验结果明细",
			width : $(top.window).width() - 50,
			height : $(top.window).height() - 50,
			allowResize : false
		});
	}
}