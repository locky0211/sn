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

//按钮渲染
function onActionRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:detail()"><span class="mini-button-text  mini-button-icon icon-txt">显示</span></a><a class="mini-button mini-button-plain" href="javascript:replenish()"><span class="mini-button-text  mini-button-icon icon-txt">补录</span></a>';

	/*$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		async : false,
		success : function(text) {
			if (text.success) {//统计人员
				s = '<a class="mini-button mini-button-plain" href="javascript:detail()"><span class="mini-button-text  mini-button-icon icon-txt">具体情况</span></a><a class="mini-button mini-button-plain" href="javascript:remark()"><span class="mini-button-text  mini-button-icon icon-txt">备注</span></a>';
			} else {//审核人员
				s = '<a class="mini-button mini-button-plain" href="javascript:select()"><span class="mini-button-text  mini-button-icon icon-txt">差错认定</span></a>';
			}
		},
	});*/
	return s;
}


//查看差错详情
function detail(){
	var e = issuedResultGrid.getSelected();
		mini.open({
			url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e.id + '&page=/rd/jsp/rd_error_info.jsp&flag=1',
			title : "差错详情",
			iconCls : "icon-search",
			width : 530,
			height : 390,
			allowResize : false,
			ondestroy : function(action) {
				if (action == 'ok') {
					CloseWindow();
				}
			}
		});
}

//补录信息
function replenish(){
	var e = issuedResultGrid.getSelected();
	mini.open({
		url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e.id + '&page=/rd/jsp/rd_error_replenish.jsp',
		title : "补录信息",
		iconCls : "icon-add",
		width : 450,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}
	});
}

function add(e) {
	mini.open({
				url : base + "rd/jsp/rd_error_info.jsp?flag=2",
				title : "新增差错信息",
				iconCls : "icon-add",
				width : 530,
				height : 430,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						gridLoad();
					}
				}
			});
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
			url : base + "rd/problemIssued/sendEmails.nut",
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

