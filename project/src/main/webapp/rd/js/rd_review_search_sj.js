var issuedResultGrid;

$(function() {
	issuedResultGrid = mini.get("issuedResultGrid");
	issuedResultGrid.on("load", function() {
		issuedResultGrid.mergeColumns(["organNo"]);
	});
	//判断用户是监管员还是审核员
	$.ajax({
		url : base + 'rd/problemIssued/checkUserEmail.nut',
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

//校验状态显示
function issuedTypeRenderer(e) {
	if (e.value == '0') {
		return '基础校验';
	} else if (e.value == '1') {
		return '异动校验';
	}
}

//监管员
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

//审核员
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
				/*if (action == 'ok') {
					gridLoad();
				}*/
				issuedResultGrid.reload();
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
					gridLoad();
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
		url : base + 'rd/problemIssued/getRdProblemIssuedById.nut?id=' + e.id + '&page=/rd/jsp/rd_review_search_sj_detail.jsp',
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

//提交存档
function saveIssued() {
	 mini.showMessageBox({
         title: "存档提醒",
         iconCls: "mini-messagebox-question",
         buttons: ["ok", "no", "cancel"],
         message: "确定：存档-有问题；否：存档-无问题；取消。",
         callback: function (action) {
        	 if (action != 'cancel') {
            	 saveIssueding(action);
    			};
         }
     });
}

//提交存档处理
function saveIssueding(action) {
	var istrue;
	if(action=="ok"){
		istrue = 1;
	}else{
		istrue = 2;
	}
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
			html : '提交存档中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/problemIssued/setIssuedFlag.nut?istrue="+istrue,
			data : "rowIds=" + rowIds.substring(0, rowIds.length - 1),
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("提交成功!!", "提醒", function() {
						grid.reload();
					});
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
		mini.alert("请选择需要存档的选项！", "提醒");
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
