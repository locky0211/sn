var reportCheckGrid;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			reportCheckGrid.on("load", function() {
					});
		});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportCheck() {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	var brNo = mini.get('bmCode').getValue(false);
	var reportDate = mini.get("reportDate").getFormValue();
	var checkType = mini.get("checkType").getValue(); 
	var grid = mini.get("reportCheckGrid");
	var rows = grid.getSelecteds();
    if (rows.length > 0) {
    	var tabCode = [];
    	for (var i = 0, l = rows.length; i < l; i++) {
    		var r = rows[i];
    		tabCode.push(r.tabCode);
        }
		if (form.isValid()) {
			if(reportDateValid()){
				var nodes = mini.get('bmCode').getCheckedNodes(false);
				var nl = nodes.length;
				mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '数据校验中...'
						});
				$.ajax({
							url : base + 'rd/check/wave_organport/reduceWaveRequestNum.nut?brNo='+brNo+'&tabCodes='+tabCode+'&reportDate='+reportDate+'&checkType='+checkType+'&nodeLe='+nl,
							type : 'post',
							cache : false,
							success : function(text) {
								if (nl > 1) {
									$('#rMsgDiv').html(text.data);
									mini.get('win1').show();
								} else {
									if (text.success) {
										mini.alert("校验完成!!!");
										gridLoad();
									} else {
										if(text.data === "wait"){
											mini.alert("当前使用人数较多，请稍后再试!!!", '提醒');
										}else {
											mini.alert(text.data, '提醒');
										}
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
    } else {
    	alert("请选中至少一条记录!");
    }
}

function doExportExcel(isValue) {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	var brNo = mini.get('bmCode').getValue(false);
	var reportDate = mini.get("reportDate").getFormValue();
	var checkType = mini.get("checkType").getValue();
	var grid = mini.get("reportCheckGrid");
	var rows = grid.getSelecteds();
    if (rows.length > 0) {
    	var tabCodes="";
    	for (var i = 0, l = rows.length; i < l; i++) {
    		tabCodes +=","+rows[i].tabCode;
        }
		if (form.isValid()) {
			if(reportDateValid()){
				mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '生成Excel文件中...'
						});
				var codes = tabCodes.substr(1,tabCodes.length-1).split(',');
				$.each(codes, function(i, n) {
					$.ajax({
								url : base + 'rd/check/wave_organport/doExportExcelYD_OrganPort.nut?tabCodes=' + n + '&brNo=' + brNo + '&reportDate=' + reportDate + '&checkType=' + checkType +'&isValue='+isValue,
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
				});
			}else{
				mini.alert("校验日期与频度不匹配!")
			}
		}
    } else {
    	alert("请选中至少一条记录!");
    }

}
function reportDateValid() {
	var rt = mini.get("checkType").getValue();
	var rd = mini.get("reportDate").getFormValue().substr(4, 2);
	var rs = false;
	if (rt == "1"||rt =='4') {
		rs = true;
	}
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "2") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "3") {
		rs = true;
	}
	return rs;
}

function onWinClosed() {
	gridLoad();
}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var checkType = mini.get("checkType").getValue();
	if (brNo != '' && reportDate != '' && checkType != '') {
		if(reportDateValid()){
			reportCheckGrid.load({
						brNo : brNo,
						reportDate : reportDate,
						checkType : checkType
					});
		}else{
			reportCheckGrid.on("load", function() {
			});
			mini.alert("报表日期与校验频度不匹配!");
		}
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
				url : base + "rd/check/wave/toRdReportCheckResultsView.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view.jsp',
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

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="red">公共库</font>';
	} else {
		e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}

function onRenderer(e) {
	var record = e.record;
	var reportNoStr = record.reportNoStr;
	if (record.reportNoStr) {
		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''+ reportNoStr + '\',\'0\')"><span class="mini-button-text  mini-button-icon icon-excel">查看波动率</span></a>'
			  +'<a class="mini-button mini-button-plain" href="javascript:toReportView(\''+ reportNoStr + '\',\'1\')"><span class="mini-button-text  mini-button-icon icon-excel">查看波动差</span></a>';
	}
	return '';
}

function toReportView(reportNoStr,isdValue) {
	var reportDate = mini.get("reportDate").getFormValue();
	var brNo = mini.get("bmCode").getValue();
	var checkType = mini.get("checkType").getValue();
	if(reportDate!=null&&reportDate!=""){
		mini.open({
					url : base + "rd/check/wave_organport/getCheckRusultsForYD_OrganPort.nut?tabCode=" + reportNoStr + "&checkType=" + checkType + "&reportDate=" + reportDate +"&brNo=" + brNo+'&isdValue='+isdValue,
					title : "阈值明细",
					iconCls : "icon-excel",
					width : $(top.window).width() - 50,
					height : $(top.window).height() - 50,
					allowResize : false,
					showMaxButton : true
				});
	}else{
		mini.get("reportDate").errorText="不能为空";
		mini.get("reportDate").setIsValid(false);
		alert("请选择日期！")
	}
}


function checkTypeValid() {
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


function downLoadYdExcel(type) {
	var brNo = mini.get('bmCode').getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var checkType = mini.get("checkType").getValue();
	var grid = mini.get("reportCheckGrid");
	var rows = grid.getSelecteds();
    if (rows.length > 0) {
    	if(reportDate==''){
    		mini.alert("请选择报表日期！！");
        	return false;
    	}
    	if(reportDateValid()){
	    	var tabCodes="";
	    	for (var i = 0, l = rows.length; i < l; i++) {
	    		tabCodes +=",'"+rows[i].tabCode+"'";
	        }
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '生成Excel文件中...'
			});
			tabCodes = tabCodes.substr(1,tabCodes.length-1);
			$.ajax({
				url : base + 'importWaveDesc/doExportExcelYdDesc_OrganPort.nut?tabCodes=' + tabCodes + '&brNo=' + brNo + '&reportDate=' + reportDate +'&type='+type+ '&checkType=' + checkType,
				cache : false,
				success : function(text) {
					if (text != null||text!='') {
						toDownLoadFileByFilePath(text);
					}else{
						mini.alert("导出异常!");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
    	}else{
			mini.alert("校验日期与频度不匹配!")
		}
    } else {
    	mini.alert("请选中至少一条记录!");
    }
	
   
}

function commitYDInfo(){
	var brNo = mini.get('bmCode').getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var checkType = mini.get("checkType").getValue();
	var grid = mini.get("reportCheckGrid");
	var rows = grid.getSelecteds();
	
    if (rows.length > 0) {
    	mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '提交异动报备中...'
		});
    	var tabCodes="";
    	for (var i = 0, l = rows.length; i < l; i++) {
    		tabCodes +=",'"+rows[i].tabCode+"'";
        }
    	tabCodes = tabCodes.substr(1,tabCodes.length-1);
		$.ajax({
			url : base + 'importWaveDesc/commitYDInfo.nut?tabCodes=' + tabCodes + '&brNo=' + brNo + '&reportDate=' + reportDate + '&checkType=' + checkType,
			type : 'post',
			cache : false,
			success : function(text) {
				if(text.success){
					mini.alert(text.data);
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
    	alert("请选中至少一条记录!");
    }
}