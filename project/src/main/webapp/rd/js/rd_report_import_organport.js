var reportImportGrid;
$(function() {
			reportImportGrid = mini.get('reportImportGrid');
			var tip = new mini.ToolTip();
			tip.set({
						target : document,
						selector : '[errorMsg], [title]'
					});
			var dt = new Date();
			dt.setDate(1);
			cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
			mini.get('#rDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
			var rd = mini.get("rDate").getFormValue().substr(4, 2);
		    var tabType = mini.get("tabType");
			tabType.setValue("");
		    var url =base + 'sys/ggzd/getGgzdListByRd.nut?groupId=RD_TABLE_TAB_TYPE&rd='+rd;
		    tabType.setUrl(url);
		    tabType.select(0);
		});

function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value) {
		return '<font color="red" class="errorMsg" title="' + e.value + '">导入失败</a>';
	} else if (record.reportId) {
		return '导入成功';
	} else {
		return '<font color="red">未导入</font>';
	}
}
function toLookExcel(value) {

}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	if (e.value && !record.errorMsg) {
		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''
				+ uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a><a class="mini-button mini-button-plain" href="javascript:downLoadExcel(\''
				+ e.value + '\')"><span class="mini-button-text  mini-button-icon icon-down">下载</span></a>';
	}
	return '';
}

function downLoadExcel(reportId) {
	//doExportExcel
	/*if (reportId) {
		toDownLoadFile(base + "/rd/report/import/downloadExcelFiles.nut?id=" + reportId);
	}*/
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '生成Excel文件中...'
	});
	$.ajax({
			//url : base + 'rd/table/report/toExportTableReportExcel.nut?reportId=' +reportId,
			url : base + 'rd/report/import_organport/doExportExcel_OrganPort.nut',
			type : 'post',
			dataType : 'json',
			data : {
				reportId : reportId
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

function downLoadExcels() {
	var grid = mini.get("reportImportGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.reportId);
                }
                toDownLoadFile(base + "rd/report/import_organport/doExportExcelAll_OrganPort.nut?ids="+ids);
            } else {
                alert("请选中至少一条记录!");
            }
}

function showReportView(e) {
	var record = e.record;
	var uid = record._uid;
	toReportView(uid);
}

function toReportView(row_uid) {
	var row = reportImportGrid.getRowByUID(row_uid);
	mini.open({
				url : base + "rd/table/report/toRdTableReport_OrganPort.nut?reportId=" + row.reportId + "&tableId=" + row.tableId,
				// url : base + "rd/report/table/showExcelView.nut?reportId=" +
				// row.reportId,
				title : row.tabName,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportImport() {
	var form = new mini.Form("#reportImportForm");
	form.validate();
	if (form.isValid()) {
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择上传文件!!', '提醒');
			return false;
		} else {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '导入处理中...'
					});
			$.ajax({
						url : base + 'rd/report/import_organport/doReportImport_OrganPort.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功,' + text.data + '!!', '提醒', function() {
											mini.get('excelFile').setValue('');
											mini.get('excelFilePath').setValue('');
											mini.get('excelUpload').setText('');
											gridLoad();
										});
							} else {
								mini.alert(text.data, '提醒');
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
}

function doReportExport() {
	var rows = reportImportGrid.getSelecteds();
	var dataStr = '';
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		if (row.reportId != '' && row.reportId != 'undefined' && row.reportId != undefined && !row.errorMsg) {
			dataStr = dataStr + row.reportId + ";";
		}
	}
	if (dataStr.length != 0) {
		var brNo = mini.get("bmCode").getValue();
		var reportDate = mini.get("rDate").getFormValue();
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'rd/table/report/toExportTableReportBatchExcel.nut?reportIds=' + dataStr.substring(0, dataStr.length - 1)
							+ '&brNo=' + brNo + '&reportDate=' + reportDate,
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							toDownLoadFileByFilePath(text.data);
						} else {
							mini.alert(text.data, '提醒');
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
		mini.alert('没有可导出的报表!!', '提醒');
	}
}

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if (brNo != '' && reportDate != '' && tabType != '') {

			reportImportGrid.load({
						brNo : brNo,
						reportDate : reportDate,
						tabType : tabType,
						flag : mini.get("flag").getValue()
					});
	
	}
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

function checkDateType() {
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
function showTab(iid, text, url) {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var tabType1 = mini.get("tabType").getText();
	var checkArea = '0';
	var tabs = window.top['_CACHE'];
	var id = "tab$" + iid;
	var tab = tabs.getTab(id);
	if (!tab) {
		tab = {};
		tab.name = id;
		tab.title = text;
		tab.showCloseButton = true;
		tabs.addTab(tab);
	}
	var url=url+'?brNo='+brNo+'&reportDate='+reportDate+'&tabType='+tabType+'&checkArea='+checkArea+'&tabType1='+tabType1;
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}