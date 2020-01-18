/**
 * 
 */
var dealProblemGrid;
var dealProblemSaveGrid;
var zxOrgan;
$(function() {
	dealProblemGrid = mini.get('dealProblemGrid');
	dealProblemSaveGrid = mini.get('dealProblemSaveGrid');
	dealProblemGrid.load();
	dealProblemSaveGrid.load();
	$.ajax({
		url : base + 'sys/ggzd/getZdValueByGid.nut',
		type : 'post',
		data : {
			gId : "PROVINCECODE"
		},
		dataType : 'json',
		cache : false,
		success : function(text) {
			zxOrgan = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
	
});
//审核问题处理
function searchCL(){
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();

	var endDate = mini.get("endDate").getFormValue();
	if(reportDate > endDate){
		mini.alert("开始日期大于结束日期!!!");
	}else {
		dealProblemGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			tabType : tabType,
			endDate : endDate
		});
	}
}

//审核问题存档
function searchCD() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var endDate = mini.get("endDate").getFormValue();
	var reExamine = mini.get('reExamine').getValue();
	var problemState = mini.get('problemState').getValue();
	if(reportDate > endDate){
		mini.alert("开始日期大于结束日期!!!");
	}else {
		dealProblemSaveGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			tabType : tabType,
			endDate : endDate,
			reExamine : reExamine,
			problemState : problemState
		});
	}
}

function tabTypeRenderer(e) {
	var row = e.record;
	var s="";
	if(row.tabType === "50"){
		s += '月报';
	}else if(row.tabType === "40"){
		s += '季报';
	}else if(row.tabType === "80"){
		s += '半年报';
	}else if(row.tabType === "00"){
		s += '年报';
	}
	return s;
}

function checkTypeRenderer(e) {
	var row = e.record;
	var s="";
	if(row.checkType === "0"){
		s += '逻辑校验';
	}else if(row.checkType === "1"){
		s += '异动校验';
	}
	return s;
}

function reExamineRenderer(e) {
	var row = e.record;
	var s="";
	if(row.reExamine === "0"){
		s += '初审';
	}else if(row.reExamine === "1"){
		s += '复审';
	}
	return s;
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var currentState = record.state;
	var s = '<a class="mini-button mini-button-plain" href="javascript:lookProblemDetail(\'' + uid
	+ '\')"><span class="mini-button-text  mini-button-icon icon-zoomin"><font color="blue">查看</font></span></a>';
	var isOrgReporter;
	if(currentState.indexOf("P1") !== -1 || currentState.indexOf("P8") !== -1){
		s += '<a class="mini-button mini-button-plain" href="javascript:backTosjtjy(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-undo"><font color="blue">反馈</font></span></a>'+
			'<a class="mini-button mini-button-plain" href="javascript:editBzInfo(\'' + uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-redo"><font color="blue">下发</font></span></a>'
	}else {
		if($.inArray('1',userRole) !== -1){
			isOrgReporter = "1";
			s += '<a class="mini-button mini-button-plain" href="javascript:writeCorrect(\'' + isOrgReporter
			+ '\')"><span class="mini-button-text  mini-button-icon icon-ok"><font color="blue">确认正确</font></span></a>'+
			'<a class="mini-button mini-button-plain" href="javascript:writeError(\'' + isOrgReporter
			+ '\')"><span class="mini-button-text  mini-button-icon icon-cancel">确认错误</span></a>';
		}else if($.inArray('2',userRole) !== -1 && $.inArray('3',userRole) === -1 && $.inArray('4',userRole) === -1&& record.reExamine === "1" ){
			s += '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占位</span></a>'
				+ '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占个位</span></a>';
		}else {
			isOrgReporter = "0";
			s += '<a class="mini-button mini-button-plain" href="javascript:writeCorrect(\'' + isOrgReporter
			+ '\')"><span class="mini-button-text  mini-button-icon icon-ok"><font color="blue">同意</font></span></a>'+
			'<a class="mini-button mini-button-plain" href="javascript:writeError(\'' + isOrgReporter
			+ '\')"><span class="mini-button-text  mini-button-icon icon-cancel">不同意</span></a>';
		}
	}
	return s;
}

function lookProblemDetail(row_uid) {
	var row = dealProblemGrid.getRowByUID(row_uid);
	var height = 420;
	var isOrgReporter = "";
	if($.inArray('1',userRole) !== -1){
		var isOrgReporter = "1";
	}else {
		var isOrgReporter = "0";
		height = 480;
	}
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_deal_problem_detail.jsp?isOrgReporter=' + isOrgReporter +"&problemId=" + row.id + "&checkType=" + row.checkType,
					title : '问题详情',
					iconCls : 'icon-zoomin',
					width : 580,
					height : height,
					allowResize : false,
					showMaxButton : true,
					onload: function () {
			            var iframe = this.getIFrameEl();
			            var data = { action: "more", reportNoStr: row.reportNoStr,reportName: row.reportName,tabType:row.tabType,
			            		reportDate:row.reportDate,organNo:row.organNo,checkType : row.checkType,reExamine : row.reExamine,
			            		diffValue : row.diffValue,remarkRecord : row.remarkRecord};
			            iframe.contentWindow.SetData(data);
			        }
				});
	}
}

function editBzInfo(uid) {
	var row = dealProblemGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_report_check_reExamine_fullIn_bz.jsp?back=0&problemId=' + row.id,
					title : '问题下发',
					iconCls : 'icon-redo',
					width : 480,
					height : 300,
					allowResize : false,
					showMaxButton : true,
					onload: function () {
			            var iframe = this.getIFrameEl();
			            var data = { action: "backOrSend", problemId : row.id, remarkRecord : row.remarkRecord};
			            iframe.contentWindow.SetData(data);
			        },
					ondestroy : function(action) {
						if (action == 'ok') {
							searchCL();
							searchCD();
						}
					}
				});
	}
}

function backTosjtjy(row_uid) {
	var row = dealProblemGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_report_check_reExamine_fullIn_bz.jsp?back=1&problemId='+row.id,
					title : '问题反馈',
					iconCls : 'icon-redo',
					width : 480,
					height : 400,
					allowResize : false,
					showMaxButton : true,
					onload: function () {
			            var iframe = this.getIFrameEl();
			            var data = { action: "backOrSend", problemId : row.id, remarkRecord : row.remarkRecord};
			            iframe.contentWindow.SetData(data);
			        },
					ondestroy : function(action) {
						if (action == 'ok') {
							searchCL();
							searchCD();
						}
					}
				});
	}
}
function writeCorrect(isOrgReporter) {
	var e = dealProblemGrid.getSelected(); 
	var problemId = e.id;
	var isAgree =  "1";
	var reExamine = e.reExamine;
	var remarkRecord = e.remarkRecord;
	var state = e.state;
	var errorLevelBz = e.errorLevel; //用于复审最长的流程（省局统计无法知道机构判定错误还是正确，故在分局同意机构确认错误，记错误等级为L
	mini.open({
		url : base + "rd/jsp/rd_deal_problem_upload_file_nj.jsp?isOrgReporter="+isOrgReporter + "&problemId=" + problemId + "&state=" + state + "&errorLevelBz=" + errorLevelBz,
		title : "确认正确",
		iconCls : "icon-edit",
		width : 480,
		height : 400,
		allowResize : false,
		onload: function () {
            var iframe = this.getIFrameEl();
            var data = { action: "correct", problemId: problemId,isAgree: isAgree,reExamine:reExamine,isOrgReporter:isOrgReporter,remarkRecord : remarkRecord};
            iframe.contentWindow.SetData(data);
        },
        ondestroy:function (action){
        	if(action == "ok"){
        		searchCL();
        		searchCD();
        	}
        }
	});
}

function writeError(isOrgReporter) {
	var e = dealProblemGrid.getSelected(); 
	var problemId = e.id;
	var isAgree =  "0";
	var reExamine = e.reExamine;
	var remarkRecord = e.remarkRecord;
	var checkType = e.checkType;
	var formula = e.formula;
	var problemCell = e.problemCell;
	var reportDate = e.reportDate;
	var confirmError = true;
	var height = 400;
	if($.inArray('1',userRole) !== -1 && confirmError){
		height = 440;
	}
	var param = "";
	if(checkType === "0"){
		param += "&formula=" + formula;
	}else{
		param += "&problemCell=" + problemCell;
	}
	mini.open({
		url : base + "rd/jsp/rd_deal_problem_upload_file_nj.jsp?isOrgReporter="+isOrgReporter+ "&problemId=" + problemId + "&confirmError="+confirmError 
		+"&checkType="+ checkType + "&reportDate=" + reportDate + param,
		title : "确认错误",
		iconCls : "icon-edit",
		width : 480,
		height : height,
		allowResize : false,
		onload: function () {
            var iframe = this.getIFrameEl();
            var data = { action: "error", problemId: problemId,isAgree: isAgree,reExamine:reExamine,isOrgReporter:isOrgReporter,remarkRecord : remarkRecord};
            iframe.contentWindow.SetData(data);
        },
        ondestroy:function (action){
        	if(action == "ok"){
        		searchCL();
        		searchCD();
        	}
        }
	});
}

//function confirmCorrect(row_uid){
//	var row = dealProblemGrid.getRowByUID(row_uid);
//	mini.mask({
//		el : document.body,
//		cls : 'mini-mask-loading',
//		html : '处理中...'
//	});
//	$.ajax({
//		url : base + 'rd/problem/summary/sendProblemToNextRole.nut',
//		type : 'post',
//		data : {
//			problemId : row.id,
//			isAgree : "1",
//			reExamine : row.reExamine
//		},
//		dataType : 'json',
//		cache : false,
//		success : function(text) {
//			if (text.success) {
//				mini.alert(text.data,'提醒',function(){
//					searchCL()
//				});
//			} else{
//				mini.alert(text.data,'提醒');
//			}  
//		},
//		error : function(jqXHR, textStatus, errorThrown) {
//			alert('访问服务器失败!!');
//		},
//		complete : function() {
//			mini.unmask(document.body);
//		}
//	});
//}

function onSaveRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:lookProblemSaveDetail(\'' + uid
	+ '\')"><span class="mini-button-text  mini-button-icon icon-zoomin"><font color="blue">查看</font></span></a>';
	return s;
}

function lookProblemSaveDetail(row_uid) {
	var row = dealProblemSaveGrid.getRowByUID(row_uid);
	var height = 420;
	var isOrgReporter = "";
	var isOrgReporter = "0";
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_deal_problem_detail.jsp?isOrgReporter=' + isOrgReporter +"&problemId=" + row.id + "&checkType=" + row.checkType,
					title : '问题详情',
					iconCls : 'icon-zoomin',
					width : 580,
					height : 480,
					allowResize : false,
					showMaxButton : true,
					onload: function () {
			            var iframe = this.getIFrameEl();
			            var data = { action: "more", reportNoStr: row.reportNoStr,reportName: row.reportName,tabType:row.tabType,
			            		reportDate:row.reportDate,organNo:row.organNo,checkType : row.checkType,reExamine : row.reExamine,
			            		diffValue : row.diffValue,remarkRecord : row.remarkRecord};
			            iframe.contentWindow.SetData(data);
			        }
				});
	}
}

//双击展示
function showRelateCheckResultsCL(e) {
	var row = e.record;
	var checktype = row.checkType;
	var reExamine = row.reExamine
	if(checktype == "0"){//逻辑
	mini.open({
				url : base + "rd/check/toRdReportCheckResultsViewCL.nut?id=" + row.resultId + "&flag="+ row.checkType + '&page=/rd/jsp/rd_report_check_results_view_nj_dealProblem.jsp',
				title : "校验结果",
				iconCls : "icon-text",
				width : 750,
				height : 430,
				allowResize : false,
				showMaxButton : true
			});
	}else if (checktype == "1" && reExamine == "0"){//异动初审
		mini.open({
			url : base + "rd/check/wave/toRdReportCheckResultsViewNjCS.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view_wave_nj_s.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true
		});
	}else if (checktype == "1" && reExamine == "1"){//异动复审
		mini.open({
			url : base + "rd/check/wave/toRdReportCheckResultsViewNjFS.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view_wave_nj_s.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true
		});
	}
}
function onDealProblemState(e) {
	var record = e.record;
	var organ = record.organNo;
	var s = "";
	if(record.state === "C1" || record.state === "C5" || record.state === "R1" || record.state === "R5" || record.state === "P2" || record.state === "P6"){
		s += "等待机构处理问题";
	}else if(record.state === "C2" || record.state === "C3"){
		s += "等待监管员处理问题";
	}else if(record.state === "R2" || record.state === "R3" || record.state === "P3" || record.state === "P4" || record.state === "P1" || record.state === "P8"){
		if($.inArray(organ,zxOrgan) === -1){
			s += "等待分局统计员处理问题";
		}else{
			s += "等待省局统计员处理问题";
		}
	}else if(record.state === "P5"){
		s += "等待省局统计员处理问题";
	}else if(record.state === "C4" || record.state === "R4" || record.state === "P7"){
		s += "问题已存档";
	}
	return s;
}