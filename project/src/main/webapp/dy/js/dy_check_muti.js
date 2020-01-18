var reportCheckGrid;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			reportCheckGrid.on("load", function() {
						reportCheckGrid.mergeColumns(["organNo","reportNoStr"]);
						//reportCheckGrid.mergeColumns(["reportNoStr"]);
					});
			
			if (brNo != '' && reportDate != '' && tabType != ''){
				mini.get('bmCode').setValue(brNo);
				mini.get('rDate').setValue(reportDate);
				mini.get('tabType').setValue(tabType);
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
			var nodes = mini.get('bmCode').getCheckedNodes(false);
			var nl = nodes.length;
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'dy/muti/toReportCheck.nut',
						type : 'post',
						dataType : 'json',
						data : {
							brNo : mini.get('bmCode').getValue(false),
							reportDate : mini.get("rDate").getFormValue(),
							tabType : mini.get("tabType").getValue(),
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
									mini.alert(text.data, '提醒1');
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
					url : base + 'dy/muti/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						tabType : mini.get("tabType").getValue()
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
	
	if (rt == "D") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 4);
	var da = mini.get("rDate").getFormValue().substr(6, 2);
	var rs = false;
	if ((rd == "0131" || rd == "0228"||  rd == "0229" || rd == "0331" ||  rd == "0430" || rd == "0531" ||  rd == "0630" || rd == "0731" ||  rd == "0831" ||  rd == "0930" || rd == "1031" ||  rd == "1130" ||  rd == "1231") && rt == "M") {
		rs = true;
	}
	if ((rd == "0331" || rd == "0630" || rd == "0930" || rd == "1231") && rt == "S") {
		rs = true;
	}
	if ( rt == "T") {
		return true;
	}
	if ((rd == "0630" || rd == "1231") && rt == "SY") {
		rs = true;
	}

	if (rd == "1231" && rt == "Y") {
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
	if (brNo != '' && reportDate != '' && tabType != '') {
		reportCheckGrid.load({
					brNo : brNo,
					reportDate : reportDate,
					tabType : tabType
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

//查询
function search() {
	gridLoad();
}

//双击跳转
function showCheckView(e) {
	var row = e.record;
	mini.open({
		url : base + "dy/mutiView/toDyCheckMutiResultsView.nut?id=" + row.id
				+ '&page=/dy/jsp/dy_check_muti_results_view.jsp',
		title : "校验结果",
		iconCls : "icon-text",
		width : 660,
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