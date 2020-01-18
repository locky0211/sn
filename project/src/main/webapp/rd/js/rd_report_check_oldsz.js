var reportCheckGrid;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			reportCheckGrid.on("load", function() {
						reportCheckGrid.mergeColumns(["organNo","reportNoStr"]);
						//reportCheckGrid.mergeColumns(["reportNoStr"]);
					});
			
			if (brNo != '' && reportDate != '' && tabType != '' && tabType1 != '' && checkArea != ''){
				mini.get('bmCode').setValue(brNo);
				mini.get('rDate').setValue(reportDate);
				mini.get('tabType').setValue(tabType);
				mini.get('tabType').setText(tabType1);
				mini.get('checkArea').setValue(checkArea);
				doReportCheck();
			}
		});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportCheck() {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			var nodes = mini.get('bmCode').getCheckedNodes(false);//getCheckedNodes ( haveParent )	haveParent: Boolean。是否包含父节点。	获取Check选中的多个节点
			var nl = nodes.length;
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'rd/checksz/toReportCheck.nut',
						type : 'post',
						dataType : 'json',
						data : {
							brNo : mini.get('bmCode').getValue(false),
							reportDate : mini.get("rDate").getFormValue(),
							tabType : mini.get("tabType").getValue(),
							formulaType:mini.get("formulaType").getValue(),
							checkArea : mini.get("checkArea").getValue(),
							nodeLe : nl
						},
						cache : false,
						success : function(text) {
							if (nl > 1) {
								$('#rMsgDiv').html(text.data);
								mini.get('win1').show();
							} else {
								if (text.success) {
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
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}

	}
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
					url : base + 'rd/checksz/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
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
function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "50") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "40") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "80") {
		rs = true;
	}

	if (rd == "12" && rt == "00") {
		rs = true;
	}
	return rs;

}

function onWinClosed() {
	gridLoad();
}


function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var checkArea = mini.get("checkArea").getValue();
	var formulaType = mini.get("formulaType").getValue();
	var checkFlag = mini.get("checkFlag").getValue();
	if (brNo != '' && reportDate != '' && tabType != '') {
		reportCheckGrid.load({
					brNo : brNo,
					reportDate : reportDate,
					tabType : tabType,
					checkArea : checkArea,
					formulaType : formulaType,
					checkFlag : checkFlag,
					reExamine:0
				});
	}
}

//function onFlagRenderer(e) {
//	if (e.value == '已通过') {
//		
//		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
//	} else {
//		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
//	}
//}
function onGridLoad(obj) {
	var data = obj.data;
	if (data.length >0) {
		if (data[0].checkFlag=='已通过'){
		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	}
}
}
function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "rd/checksz/toRdReportCheckResultsView.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view.jsp',
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
	if (e.value == '填报说明要求') {
		return '<font color="red">填报说明要求</font>';
	} else if (e.value == '逻辑关系')  {
		return '<font color="blue">逻辑关系</font>';
	}else{
		return e.value;
	}
}
function onFlagRenderer(e) {
	if (e.value == '已通过') {
		return '<font color="green">已通过</font>';
	} else {
		return '<font color="orange">未通过</font>';
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
				reExamine : 0
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
