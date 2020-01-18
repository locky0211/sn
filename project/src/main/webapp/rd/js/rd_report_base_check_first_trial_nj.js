/**
 * 
 */
/**
 * 
 */
var reportFirstCheckGrid;
$(function() {
			reportFirstCheckGrid = mini.get('reportFirstCheckGrid');
			reportFirstCheckGrid.on("load", function() {
						reportFirstCheckGrid.mergeColumns(["organNo","reportNoStr"]);
						//reportFirstCheckGrid.mergeColumns(["reportNoStr"]);
					});
			var dt = new Date();
			dt.setDate(1);
			cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
			mini.get('#rDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) ); //+ "-" + cdt.getDate()
			var rd = mini.get("rDate").getFormValue().substr(4, 2);
		    var tabType = mini.get("tabType");
			tabType.setValue("");
		    var url =base + 'sys/ggzd/getGgzdListByRd.nut?groupId=RD_TABLE_TAB_TYPE&rd='+rd;
		    tabType.setUrl(url);
		    tabType.select(0);
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
function onValueRender(e){
	return e.value.toFixed(2);
}
function doReportCheck() {
	var form = new mini.Form("#reportFirstCheckForm");
	form.validate();
	if (form.isValid()) {
			var nodes = mini.get('bmCode').getCheckedNodes(false);//getCheckedNodes ( haveParent )	haveParent: Boolean。是否包含父节点。	获取Check选中的多个节点
			var nl = nodes.length;
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'rd/check/toReportCheck_LJCS.nut',
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

	}
}
function doExportExcel() {
	var form = new mini.Form("#reportFirstCheckForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'rd/check/doExportExcel.nut',
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
	if (brNo != '' && reportDate != '' && tabType != '') {
		reportFirstCheckGrid.load({
					brNo : brNo,
					reportDate : reportDate,
					tabType : tabType,
					checkArea : checkArea,
					formulaType : formulaType,
					reExamine:reExamine
				});
	}
}
function onGridLoad(obj) {
	var data = obj.data;
	if (data.length > 0) {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	}
}
function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view.jsp',
				title : "校验结果",
				iconCls : "icon-text",
				width : 750,
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
function onReviewCount(e){
	var row = e.record;
	$.ajax({
		url : base + 'rd/checkReview/getReviewCount.nut',
		type : 'post',
		dataType : 'json',
		data : {
			brNo : mini.get("bmCode").getValue(),
			reportDate : row.reportDate,
			checkFormula : row.formula
		},
		cache : false,
		success : function(num) {
			if (num >0) {
				return e.rowStyle = '<font color="red">'+e.value+'</font>';
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

function search() {
	gridLoad();
}

function rDateChanged(){
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
    var tabType = mini.get("tabType");
	tabType.setValue("");
    var url =base + 'sys/ggzd/getGgzdListByRd.nut?groupId=RD_TABLE_TAB_TYPE&rd='+rd;
    tabType.setUrl(url);
    tabType.select(0);
	gridLoad();
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
	var grid = mini.get('reportFirstCheckGrid');
	var rows = grid.getSelecteds();
	var checkType = "0";  //0为逻辑校验，1为异动校验
	var reExamine = "0"; 	//0为初审，1为复审
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
				
				issuedResult = issuedResult + row.id + "<" + row.bzInformation + "<" + row.CZ +";";
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