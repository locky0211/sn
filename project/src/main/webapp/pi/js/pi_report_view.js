var reportViewGrid;
$(function() {
			reportViewGrid = mini.get('reportViewGrid');
			var tip = new mini.ToolTip();
			tip.set({
						target : document,
						selector : '[errorMsg], [title]'
					});
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
	if(record.flag=="1"){
	return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''
				+ uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a><a class="mini-button mini-button-plain" href="javascript:doExport(\''
				+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-down">下载</span></a>';
	}else{
		return "";
	}
	
}


function downLoadExcel(reportId) {
	//doExportExcel
	if (reportId) {
		toDownLoadFile(base + "bf/report/import/downloadExcelFiles.nut?id=" + reportId);
		//var url = base + 'rd/table/report/toExportTableReportExcel.nut?reportId=' + $('#reportId').val();
	}
	/*mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '生成Excel文件中...'
	});
	$.ajax({
			//url : base + 'rd/table/report/toExportTableReportExcel.nut?reportId=' +reportId,
			url : base + '/rd/report/import/doExportExcel.nut',
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
*/
}

function downLoadExcels() {
	var grid = mini.get("reportViewGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.reportId);
                }
                toDownLoadFile(base + "bf/report/import/downloadAllExcelFiles.nut?ids="+ids);
                //toDownLoadFile(base + "/rd/report/import/doExportExcelAll.nut?ids="+ids);
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
	var row = reportViewGrid.getRowByUID(row_uid);
	if(row.frequentness == "AC" ||row.frequentness == "IN" ){
		mini.open({
			url : base + "pireport/showReportPisaLx.nut?id="+row.id+"&tableName="+row.tableName+"&subNo="+row.subNo+"&frequentness="+row.frequentness+"&tableCode="+row.tableCode,
			title : "展示页面",
			iconCls : "icon-excel",
			width : $(top.window).width()-50,
			height : $(top.window).height()-50,
			allowResize : false,
			showMaxButton : true
		});
	}else{
	mini.open({
				url : base + "pi/showReportPisa.nut?id="+row.id+"&tableName="+encodeURI(encodeURI(row.tableName))+"&subNo="+row.subNo+"&brNo="+row.brNo+"&frequentness="+row.frequentness+"&tableCode="+row.tableCode,
				// url : base + "rd/report/table/showExcelView.nut?reportId=" +
				// row.reportId,
				title : "展示页面",
				iconCls : "icon-excel",
				width : $(top.window).width()-50,
				height : $(top.window).height()-50,
				allowResize : false,
				showMaxButton : true
			});
	}
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportImport() {
	var form = new mini.Form("#reportViewForm");
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
						url : base + 'bf/report/import/doReportImport.nut',
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
								if(text.data==null){
									mini.alert("没有需要导入的报表!!!", '提醒');
								}else{
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
}

function doReportExport() {
	var rows = reportViewGrid.getSelecteds();
	var dataStr = '';
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		if (row.reportId != '' && row.reportId != 'undefined' && row.reportId != undefined && !row.errorMsg) {
			dataStr = dataStr + row.reportId + ";";
		}
	}
	if (dataStr.length != 0) {
		var brNo = mini.get("bmCode").getValue();
		var brGl = mini.get("bmGl").getValue();
		var reportDate = mini.get("rDate").getFormValue();
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'bf/table/report/toExportTableReportBatchExcel.nut?reportIds=' + dataStr.substring(0, dataStr.length - 1)
							+ '&brNo=' + brNo + '&brGl=' + brGl + '&reportDate=' + reportDate,
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
	var brGl = mini.get("bmGl").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if(tabType!='AI'){
	if ((brNo != '' || brGl != '') && reportDate != '' && tabType != '') {
		if (checkDateType()) {
			$.ajax({
				url : base + 'pi/getPiSearchTableInfo.nut',
				type : 'post',
				dataType : 'json',
				data : {
					brNo : brNo,
					brGl : brGl,
					reportDate : reportDate,
					frequentness : tabType,
				},
				async:false,
				cache : false,
				success : function(text) {
					var data=mini.encode(text);
					if(data=='[]'){
						mini.alert("在当前期数和区域下没有要查询的报表!!!");
					}
					
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					
				}
			});
			reportViewGrid.load({
						brNo : brNo,
						brGl : brGl,
						reportDate : reportDate,
						frequentness : tabType,
						
			});
		} else {
			mini.alert('日期与报表周期不相符!!');
		}
	}else{
		mini.alert('查询条件不能为空!!');
	}
	}else{
		reportViewGrid.load({
			brNo : brNo,
			brGl : brGl,
			reportDate : reportDate,
			frequentness : tabType,
		});
	}
}

function checkDateType() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S")) {
		rs = true;
	}

	if (rd == "12" && rt == "Y") {
		rs = true;
	}
	return rs;
}
function showTab(iid, text, url) {
	var brNo = mini.get("bmCode").getValue();
	var brGl = mini.get("bmGl").getValue();
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
	var url=url+'?brNo='+brNo+'&brGl='+brGl+'&reportDate='+reportDate+'&tabType='+tabType+'&checkArea='+checkArea+'&tabType1='+tabType1;
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}

function doExport(row_uid){
	var row = reportViewGrid.getRowByUID(row_uid);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '生成Excel文件中...'
	});
	if(row.frequentness=="AC"||row.frequentness=="IN"){
		$.ajax({
			url : base + 'pi/doExportExcelLx.nut',
			type : 'post',
			dataType : 'json',
			data : {
				brNo : row.brNo,
				brGl : row.brGl,
				tableCode:row.tableCode,
				frequentness:row.frequentness,
				subNo:row.subNo,
				tableName:row.tableName
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
	}else{
	$.ajax({
			url : base + 'pi/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			data : {
				brNo : row.brNo,
				brGl : row.brGl,
				tableCode:row.tableCode,
				frequentness:row.frequentness,
				subNo:row.subNo,
				tableName:row.tableName
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
function onFrequentness(e){
	if(e.value=='M'){
		return '月度';
	}
	if(e.value=='S'){
		return '季度';
	}
	if(e.value=='Y'){
		return '年度';
	}
	else{
		return e.value;
	}
	
}
function onBrNo(e){
	var brNo=e.value;
    var subNo;
    var tabType = mini.get("tabType").getValue();
    if(tabType!='AI'){
	$.ajax({
		url : base + 'pi/findAreaByBmCode.nut',
		type : 'post',
		dataType : 'json',
		data : {
			brNo : brNo
		},
		async:false,
		cache : false,
		success : function(text) {
			subNo=text.data;
				},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			
		}
	});
    }else{
    	subNo='无';
    }
	return subNo;
}

function onBrGl(e){
	var brGl=e.value;
    var subNoGl;
    var tabType = mini.get("tabType").getValue();
    if(tabType!='AI'){
	$.ajax({
		url : base + 'pi/findAreaByBmGl.nut',
		type : 'post',
		dataType : 'json',
		data : {
			brGl : brGl
		},
		async:false,
		cache : false,
		success : function(text) {
			subNoGl=text.data;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			
		}
	});
    }else{
    	subNoGl='无';
    }
	return subNoGl;
}

function onFlag(e){
	var flag=e.value;
	if(flag=='1'){
		return '已经导入';
	}else{
		return '还未导入';
	}
}