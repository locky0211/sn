var issuedResultGrid;

$(function() {
	issuedResultGrid = mini.get("issuedResultGrid");
	issuedResultGrid.on("load", function() {
		issuedResultGrid.mergeColumns(["organNo"]);
	});
	//判断用户是监管员还是审核员
	$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				$("#checkDiv").show();
				issuedResultGrid.load();
			} else {
				$("#checkDiv").hide();
				issuedResultGrid.load();
			}
		},
	});
	
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#startDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#endDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	gridLoad();
});

function gridLoad() {
	issuedResultGrid.load();
}

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

//渲染差错来源
function theRenderer(e){
	if (e.value == '1') {
		return '系统';
	} else {
		return '人工录入';
	}
}

//校验状态显示
function issuedTypeRenderer(e) {
	if (e.value == '1') {
		return '基础校验';
	} else if (e.value == '2') {
		return '异动校验';
	}
}

//userId转为userName
function onUserRenderer(e) {
	var row = e.record;
	var blameUser = row.blameUser;
	var cUserName;
	$.ajax({
		url : base + "rd/error/check/confirm/getUserNameByUserId.nut",
		data : {
			userId : blameUser
		},
		type : "post",
		async : false,
		success : function(text) {
			cUserName = text.data;
		},
	});
	return cUserName;
}


//双击跳转校验详情
function showCheckView(e) {
	var row = e.record;
	var checkFlag = row.checkFlag;
	if (checkFlag == "1") {
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
				/*if (action == 'ok') {
					gridLoad();
				}*/
				issuedResultGrid.reload();
			}
		});
	} else if (checkFlag == "2") {
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
					gridLoad();
				}
			}
		});
	}
}

function onActionRenderer(e) {
	var row = e.record;
	var jgFlag = row.jgFlag;
	var s;
	$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		async : false,
		success : function(text) {
			if (text.success) {//统计人员
				if(jgFlag == '2'){//确认正确 (绿)
					s = '<a class="mini-button mini-button-plain" href="javascript:detail()"><span class="mini-button-text  mini-button-icon icon-txt"><font color="green">具体情况</font></span></a><a class="mini-button mini-button-plain" href="javascript:remark()"><span class="mini-button-text  mini-button-icon icon-txt">备注</span></a>';
				}else if(jgFlag == '1') {//确认差错 （红）
					s = '<a class="mini-button mini-button-plain" href="javascript:detail()"><span class="mini-button-text  mini-button-icon icon-txt"><font color="red">具体情况</font></span></a><a class="mini-button mini-button-plain" href="javascript:remark()"><span class="mini-button-text  mini-button-icon icon-txt">备注</span></a>';
				}else{//还未认定  （蓝）
					s = '<a class="mini-button mini-button-plain" href="javascript:detail()"><span class="mini-button-text  mini-button-icon icon-txt"><font color="blue">具体情况</font></span></a><a class="mini-button mini-button-plain" href="javascript:remark()"><span class="mini-button-text  mini-button-icon icon-txt">备注</span></a>';
				}
			} else {//审核人员
				s = '<a class="mini-button mini-button-plain" href="javascript:select()"><span class="mini-button-text  mini-button-icon icon-txt">差错认定</span></a>';
			}
		},
	});
	return s;
}

function select(){
	var e = issuedResultGrid.getSelected();
	var fg = e.jgFlag;
		mini.open({
			url : base + 'rd/jsp/rd_error_comfirm.jsp?errorId='+e.id +'&fg='+fg ,
			title : "差错认定",
			iconCls : "icon-add",
			width : 350,
			height : 100,
			ondestroy : function(action) {
					gridLoad();
			}
		});
}

//跳转详情页面
function lookDetail() {
	var e = issuedResultGrid.getSelected();
	mini.open({
		url : base + 'rd/problemIssued/getRdProblemIssuedById.nut?id=' + e.reportNoStr + '&page=/rd/jsp/rd_review_search_sj_detail.jsp',
		title : '审核问题详情',
		width : 550,
		height : 410,
		allowResize : false,
		ondestroy : function(action) {
			//if (action == 'ok') {
				gridLoad();
			//}
		}
	});
}

//统计人员查看具体情况
function detail(){
	var e = issuedResultGrid.getSelected();
	if(e.jgFlag == '1'){
		mini.open({
			url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e.id + '&page=/rd/jsp/rd_error_true.jsp',
			title : "确认差错",
			iconCls : "icon-add",
			width : 500,
			height : 350,
			allowResize : false,
			ondestroy : function(action) {
				if (action == 'ok') {
					CloseWindow();
				}
			}
		});
	}else if(e.jgFlag == '2'){
		mini.open({
			url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e.id + '&page=/rd/jsp/rd_error_false.jsp',
			title : "确认正确",
			iconCls : "icon-add",
			width : 500,
			height : 300,
			allowResize : false,
			ondestroy : function(action) {
				if (action == 'ok') {
					CloseWindow();
				}
			}
		});
	}else{
		mini.alert("审核人员还未确认！！");
	}
	
}

//统计人员备注信息
function remark(){
	var e = issuedResultGrid.getSelected();
	mini.open({
		url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e.id + '&page=/rd/jsp/rd_error_remark.jsp',
		title : "备注信息",
		iconCls : "icon-add",
		width : 350,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}
	});
}
//认定
function agree(){
	var flag = "1";
	mini.confirm("确定认定？","提醒",function(action){
		if (action == 'ok') {
			agreeerror(flag);
		}
	});
}
//不认定
function disagree(){
	var flag = "2";
	mini.confirm("确定不认定？","提醒",function(action){
		if (action == 'ok') {
			agreeerror(flag);
		}
	});
}

//认定存档处理
function agreeerror(flag) {
	var istrue = flag;
	var grid = mini.get('issuedResultGrid');
	var rows = grid.getSelecteds();
	if (rows.length > 0) {
		var rowIds = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			rowIds = rowIds + row.id + ";";
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '认定信息存档中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/error/check/confirm/updateIssuedFlag.nut?istrue="+istrue,
			data : "rowIds=" + rowIds.substring(0, rowIds.length - 1),
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					if(data.data == "1"){
						mini.alert("监管人员未认定问题无法提交!!", "提醒", function() {
							grid.reload();
						});
					}else{
						mini.alert("提交成功!!", "提醒", function() {
							grid.reload();
						});
					}
				} else {
					mini.alert("提交失败!!", "提醒", function() {
						grid.reload();
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
	} else {
		mini.alert("请选择需要认定的选项！", "提醒");
	}
}

//发送邮件
function sendEmail() {
	var grid = mini.get('issuedResultGrid');
	var rows = grid.getSelecteds();
	if (rows.length > 0) {
		mini.confirm("是否发送邮件?", "提醒", function(action) {
			if (action == 'ok') {
				sendingEmails();
			}
		});		
	} else {
		mini.alert("请勾选后再发送邮件！", "提醒");
	}	
}

//发送邮件
function sendingEmails() {
	var grid = mini.get('issuedResultGrid');
	var rows = grid.getSelecteds();
	if (rows.length > 0) {
		var rowIds = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			rowIds = rowIds + row.id + ";";
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '发送邮件中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/error/check/confirm/sendEmails.nut",
			data : "rowIds=" + rowIds.substring(0, rowIds.length - 1),
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("发送成功!!", "提醒");
				} else {
					mini.alert(data.data, "提醒");
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
		mini.alert("请勾选后再发送邮件！", "提醒");
	}
}

//编辑邮件
function editEmail(){
	var grid = mini.get('issuedResultGrid');
	var rows = grid.getSelecteds();
	if (rows.length = 1) {
		var row = rows[0];
		mini.open({
					url : base + "rd/error/email/toEditSysNotice.nut?id=" + row.id + '&page=/rd/jsp/rd_error_email.jsp',
					title : "预览邮件",
					width : 780,
					height : 490,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							//sysNoticeGrid.reload();
						}
					}
				});
	}else{
		mini.alert("请选择单条错误信息！");
	}
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}