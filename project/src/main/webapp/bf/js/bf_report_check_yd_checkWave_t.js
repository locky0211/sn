var reportCheckGrid;
$(function() {
	reportCheckGrid = mini.get('reportCheckGrid');
	reportCheckGrid.on("load", function() {
		reportCheckGrid.mergeColumns([ "tabCode", "tabName" ]);
	});
});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}


function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M1" || rt == "M2") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12")
			&& (rt == "S1" || rt == "S2")) {
		rs = true;
	}
	if (rd == "12" && rt == "Y") {
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
	var reportRate = mini.get("reportRate").getValue();
	var tabType = mini.get("tabType").getValue();
	if (brNo != '' && reportDate != '' && tabType != '') {
		reportCheckGrid.load({
			brNo : brNo,
			reportDate : reportDate,
			reportRate : reportRate,
			tabType : tabType
		});
	}
}

//function onGridLoad(obj) {
//	var data = obj.data;
//	if (data.length > 0) {
//		$('#noPassFont').html(
//				'<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
//	} else {
//		$('#noPassFont').html(
//				'<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
//	}
//}

function onRenderer(e) {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var reportRate = mini.get("reportRate").getValue();
	var tabType = mini.get("tabType").getValue();
	var row = e.record;
	if (e.value) {
		return '<a class="mini-button mini-button-plain" href="javascript:toEditTableReport(\''
				+ brNo + '\',\''
				+ reportDate + '\',\''
				+ reportRate + '\',\''
				+ tabType + '\',\''
				+ row.tabCode 
				+ '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看异动结果</span></a><a class="mini-button mini-button-plain" href="javascript:downLoadExcel(\''
				+ e.value
				+ '\')"><span class="mini-button-text  mini-button-icon icon-down">下载异动结果</span></a>';

	}
	return '';
}

function showCheckView(e) {
	var row = e.record;
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var reportRate = mini.get("reportRate").getValue();
	var tabType = mini.get("tabType").getValue();
	toEditTableReport(brNo, reportDate, reportRate, tabType, row.tabCode);
}

function toEditTableReport(brNo, reportDate, reportRate, tabType, tabCode) {
	mini.open({
		url : base
				+ "bf/check/wave/newCheck/temp/toBfTableReportForNewEdit.nut?brNo="+ brNo 
				+ "&reportDate=" + reportDate 
				+ "&reportRate=" + reportRate 
				+ "&tabType=" + tabType 
				+ "&tabcode=" + tabCode,
		title : tabCode,
		iconCls : "icon-excel",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false,
		showMaxButton : true
	});
}

function downLoadExcel(reportId) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '生成Excel文件中...'
	});
	$.ajax({
			url : base + 'bf/check/wave/newCheck/temp/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			data : {
				reportId : reportId
			},
			cache : false,
			success : function(text) {
				if (text != null) {
					toDownLoadFileByFilePath(text);
				} else {
					mini.alert('上期报表未导入！！', '提醒');
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

function search() {
	gridLoad();
}


//function doReportCheck() {
//	var form = new mini.Form("#reportCheckForm");
//	var brNo = mini.get('bmCode').getValue(false);
//	var reportDate = mini.get("rDate").getFormValue();
//	var tabType = mini.get("tabType").getValue();
//	var reportRate = mini.get("reportRate").getValue();
//	if (form.isValid()) {
//		if (reportDateValid()) {
//			var nodes = mini.get('bmCode').getCheckedNodes(false);
//			var nl = nodes.length;
//			mini.mask({
//				el : document.body,
//				cls : 'mini-mask-loading',
//				html : '数据校验中...'
//			});
//			$.ajax({
//				url : base + 'bf/check/wave/toReportCheck.nut?brNo=' + brNo
//						+ '&reportDate=' + reportDate + '&reportRate='
//						+ reportRate + '&tabType=' + tabType + '&nodeLe=' + nl,
//				type : 'post',
//				cache : false,
//				success : function(text) {
//					if (nl > 1) {
//						$('#rMsgDiv').html(text.data);
//						mini.get('win1').show();
//					} else {
//						if (text.success) {
//							gridLoad();
//						} else {
//							mini.alert(text.data, '提醒');
//						}
//					}
//				},
//				error : function(jqXHR, textStatus, errorThrown) {
//					alert('访问服务器失败!!');
//				},
//				complete : function() {
//					mini.unmask(document.body);
//				}
//			});
//		} else {
//			mini.alert('报表日期与报表类型不匹配!!', '提醒');
//		}
//	}
//}

//function saveRemarks() {
//	var grid = mini.get('reportCheckGrid');
//	if (!grid.isChanged()) {
//		mini.alert("提交备注不能为空!!!");
//		return false;
//	}
//	var data = grid.getChanges();
//	var json = mini.encode(data);
//	mini.mask({
//		el : document.body,
//		cls : 'mini-mask-loading',
//		html : '处理中...'
//	});
//	$.ajax({
//		url : base + "bf/check/wave/saveRemark.nut",
//		data : {
//			data : json
//		},
//		type : "post",
//		success : function(text) {
//			if (text.success) {
//				mini.alert("操作成功!!");
//			} else {
//				mini.alert("提交失败!!");
//			}
//		},
//		error : function(jqXHR, textStatus, errorThrown) {
//			alert('访问服务器失败!!');
//		},
//		complete : function() {
//			mini.unmask(document.body);
//			gridLoad();
//		}
//	});
//}
//
//function saveRemarks() {
//	var grid = mini.get('reportCheckGrid');
//	if (!grid.isChanged()) {
//		mini.alert("提交备注不能为空!!!");
//		return false;
//	}
//	var data = grid.getChanges();
//	var json = mini.encode(data);
//	mini.mask({
//		el : document.body,
//		cls : 'mini-mask-loading',
//		html : '处理中...'
//	});
//	$.ajax({
//		url : base + "bf/check/wave/saveRemark.nut",
//		data : {
//			data : json
//		},
//		type : "post",
//		success : function(text) {
//			if (text.success) {
//				mini.alert("操作成功!!");
//			} else {
//				mini.alert("提交失败!!");
//			}
//		},
//		error : function(jqXHR, textStatus, errorThrown) {
//			alert('访问服务器失败!!');
//		},
//		complete : function() {
//			mini.unmask(document.body);
//			gridLoad();
//		}
//	});
//}
//
//function saveRemark() {
//	mini.confirm("是否确认提交?", "提醒", function(action) {
//		if (action == 'ok') {
//			saveRemarks();
//		} else {
//		}
//	});
//}
