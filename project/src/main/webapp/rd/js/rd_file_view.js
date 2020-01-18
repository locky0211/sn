var issuedResultGrid;

$(function() {
	issuedResultGrid = mini.get("issuedResultGrid");
	issuedResultGrid.on("load", function() {
		issuedResultGrid.mergeColumns(["organNo"]);
	});
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#startDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#endDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	issuedResultGrid.load();
});

//查询结果
function doSearchIssued(){
	var form = new mini.Form("#issuedResultForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.get('issuedResultGrid').load(o);
	} 
}

//把机构标号转换成中文名称
function onBrNo(e) {
	var row = e.record;
	var brNo = row.organNo;
	$.ajax({
		url : base + "bf/remarks/getBmNameByBmCode.nut",
		data : {
			code : brNo
		},
		type : "post",
		async : false,
		success : function(text) {
			brNo = text.data;
		},
	});
	return brNo
}

//校验状态显示
function issuedTypeRenderer(e) {
	if (e.value == '0') {
		return '基础校验';
	} else if (e.value == '1') {
		return '异动校验';
	}
}

//监管员中文名称
function onUserRenderer(e) {
	var row = e.record;
	var cUser = row.cUser;
	var cUserName;
	$.ajax({
		url : base + "rd/problemIssued/getUserNameByUserId.nut",
		data : {
			userId : cUser
		},
		type : "post",
		async : false,
		success : function(text) {
			cUserName = text.data;
		},
	});
	return cUserName;
}

//审核员中文名称
function onReportUserRenderer(e) {
	var row = e.record;
	var reportUser = row.reportUser;
	var reportUserName;
	$.ajax({
		url : base + "rd/problemIssued/getUserNameByUserId.nut",
		data : {
			userId : reportUser
		},
		type : "post",
		async : false,
		success : function(text) {
			reportUserName = text.data;
		},
	});
	return reportUserName;
}

//双击跳转校验详情
function showCheckView(e) {
	issuedResultGrid = mini.get("issuedResultGrid");
	var row = e.record;
	var issuedType = row.issuedType;
	if (issuedType == "0") {
		//基础校验
		mini.open({
			url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					issuedResultGrid.load();
				}
			}
		});
	} else if (issuedType == "1") {
		//异动校验
		mini.open({
			url : base + "rd/check/wave/toRdReportCheckResultsViewCS.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view_wave_cs.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					issuedResultGrid.load();
				}
			}
		});
	}
}

function onActionRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:lookDetail()"><span class="mini-button-text  mini-button-icon icon-txt">查看详情</span></a>';
	return s;
}

//跳转详情页面
function lookDetail() {
	var e = issuedResultGrid.getSelected();
	mini.open({
		url : base + 'rd/problemIssued/getRdProblemIssuedById.nut?id=' + e.id + '&page=/rd/jsp/rd_file_view_detail.jsp',
		title : '审核问题详情',
		width : 550,
		height : 330,
		allowResize : false,
		ondestroy : function(action) {
			//if (action == 'ok') {
				gridLoad();
			//}
		}
	});
}