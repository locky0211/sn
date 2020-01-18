var reportImportGrid;
$(function() {
			reportImportGrid = mini.get('reportImportGrid');
			var tip = new mini.ToolTip();
			tip.set({
						target : document,
						selector : '[errorMsg], [title]'
					});
		});


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
/*function doSearchReportBill(){
	
}*/
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
			url : base + 'rd/report/import/doExportExcel.nut',
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
                //toDownLoadFile(base + "/rd/report/import/downloadAllExcelFiles.nut?ids="+ids);
                toDownLoadFile(base + "rd/report/import/doExportExcelAll.nut?ids="+ids);
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
				url : base + "rd/table/report/toRdTableReport.nut?reportId=" + row.reportId + "&tableId=" + row.tableId,
				// url : base + "rd/report/table/showExcelView.nut?reportId=" +
				// row.reportId,
				title : row.tableName,
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



function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value=='0') {
		return  '<font color="blue">已导入</font>';
	}else{
		return  '<font color="red">未导入</font>';
	}
	
}
function doSearch(){
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if(brNo!=""&&reportDate!=""&&tabType!=""){
	reportImportGrid.load({
		brNo : brNo,
		reportDate : reportDate,
		tabType : tabType,
		});
	}else{
		mini.alert("机构,报表年份,报表类型不能为空!!!");
	}
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
function onTabType(e){
	var val=e.value;
	if(val=='50'){
		return '月报';
	}
	if(val=='40'){
		return '季报';
	}
	if(val=='80'){
		return '半年报';
	}
	if(val=='00'){
		return '年报';
	}
}	
function onbrNo(e){
	var val=e.value;
	var brNo;
	$.ajax({
		url : base + 'sys/bm/getBmNameByBmCode.nut',
		type : 'post',
		dataType : 'json',
		data:{bmCode:val},
		cache : false,
		async : false,
		success : function(text) {
			if(text.success){
			brNo= text.data;
			}
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		}
	});
	
 return brNo;
}

