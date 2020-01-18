$(function() {
	//判断是查看还是新增
	var flag = mini.get("flag").getValue();
			if (flag == "1") {
				$("#checkDiv").hide();
				mini.get('organNo').setReadOnly(true);
				mini.get('reportName').setReadOnly(true);
				mini.get('reportNoStr').setReadOnly(true);
				mini.get('cUser').setReadOnly(true);
				mini.get('reportDate').setReadOnly(true);
				mini.get('tabType').setReadOnly(true);
				mini.get('errorFlag').setReadOnly(true);
				mini.get('errorMoney').setReadOnly(true);
				mini.get('remark').setReadOnly(true);
				mini.get('lateDays').setReadOnly(true);
				mini.get('deblocFlag').setReadOnly(true);
				mini.get('otherMeasures').setReadOnly(true);
			} else {
				$("#checkDiv").show();
			}
});

function add(){
	 mini.confirm("确认新增信息并反馈？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}
   
function onAdd() {
	var form = new mini.Form("#errorTrueForm");
	form.validate();
	if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'rd/error/check/confirm/addErrorInfo.nut',
						type : 'post',
						data : json,
						dataType : 'json',
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
							} else {
								mini.alert('操作失败,' + text.data, '提醒');
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

function reportNameChange(e){ 
	mini.get("reportName").setValue("");
	var reportNoStr = mini.get("reportNoStr").getValue();
	mapRepName(reportNoStr);
	mini.get("reportName").setValue(repName);
}

function mapRepName(reportNoStr){
	$.ajax({
		url : base + 'rd/error/check/confirm/getRepName.nut?reportNoStr=' + reportNoStr,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					repName = "未映射到报表名称";
				} else {
					repName = text.data;
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

function onReportNameChanged(){
	var reportNoStr = mini.get('reportName').getFormValue();
	mini.get('reportNoStr').setValue(reportNoStr);
	mapTableType(reportNoStr);
	if(tabType == '50'){
		sort = 0;
	}else if(tabType == '40'){
		sort = 1;
	}else if(tabType == '80'){
		sort = 2;
	}else if(tabType == '00'){
		sort = 3;
	}
	mini.get("tabType").select(sort);
}

function onTableType(){
	var sort;
	var reportNoStr = mini.get('reportNoStr').getValue();
	mapTableType(reportNoStr);
	if(tabType == '50'){
		sort = 0;
	}else if(tabType == '40'){
		sort = 1;
	}else if(tabType == '80'){
		sort = 2;
	}else if(tabType == '00'){
		sort = 3;
	}
	mini.get("tabType").select(sort);
}

function mapTableType(reportNoStr){
	$.ajax({
		url : base + 'rd/error/check/confirm/getTableType.nut?reportNoStr=' + reportNoStr,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					tabType = "";
				} else {
					tabType = text.data;
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
/*function blameUserChange(e){ 
	mini.get("blameRoom").setValue("");
	var blameUser = mini.get("blameUser").getValue();
	mapBlameRoom(blameUser);
	mini.get("blameRoom").setValue(blameRoom);
}

function mapBlameRoom(blameUser){
	$.ajax({
		url : base + 'rd/error/check/confirm/getBlameRoom.nut?blameUser=' + encodeURIComponent(blameUser),
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					blameRoom = "未映射到处室";
				} else {
					blameRoom = text.data;
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
}*/

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}
