var reportImportGrid;
var reportTypeArr;
var orgArr;
$(function() {
	reportImportGrid = mini.get('#reportImportGrid');
	reportImportGrid.on("load", function() {
		reportImportGrid.mergeColumns(["brNo"]);
	});

	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DL_REPORT_TYPE',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				reportTypeArr = text;
			}
		}
	});
	
	$.ajax({
		url : base + "sys/bm/getSysBmListByBmCategory.nut?bmCategory='DL'",
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				orgArr = text;
			}	
		}
	});
	gridLoad();
	
});

function gridLoad() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var reportType = mini.get("reportType").getValue();
	reportImportGrid.load({
		brNo : brNo,
		reportDate : reportDate,
		reportType : reportType
	});
}

// 查询
function search() {
	gridLoad();
}

//文件类型中文渲染
function reportTypeRenderer(e) {
	for (var index = 0; index < reportTypeArr.length; index++) {
		if (reportTypeArr[index].zdValue == e.value) {
			return reportTypeArr[index].zdName;
		}
	}
}

function brNoRenderer(e){
	for(var index=0; index < orgArr.length; index++){
		if(orgArr[index].bmCode == e.value){
			return orgArr[index].bmName;
		}
	}
}

//错误信息
function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value) {
		return '<font color="red" class="errorMsg" title="' + e.value
				+ '">导入失败</a>';
	} else if (record.reportId) {
		return '导入成功';
	} else {
		return '<font color="red">未导入</font>';
	}
}

//报表导入
function doReportImport() {
	var form = new mini.Form("#reportImportForm");
	form.validate();
	if (form.isValid()) {
		if (mini.get('datFile').getValue() == '' || mini.get('datFilePath').getValue() == '') {
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
				url : base + 'dl/report/import/doImportFile.nut',
				type : 'post',
				dataType : 'json',
				data : json,
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert(text.data, '提醒',
								function() {
									mini.get('datFile').setValue('');
									mini.get('datFilePath').setValue('');
									mini.get('datFileUpload').setText('');
									gridLoad();
								});
					} else {
						mini.alert(text.data, '提醒',function(){
							mini.get('datFile').setValue('');
							mini.get('datFilePath').setValue('');
							mini.get('datFileUpload').setText('');
							gridLoad();
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
		}
	}
}


function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('datFile').setValue(e.file.name);
		mini.get('datFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('datFile').setValue('');
		mini.get('datFilePath').setValue('');
	}
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	if (e.value && !record.errorMsg) {
		return '<a class="mini-button mini-button-plain" href="javascript:showTableDataView(\''
				+ uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">查看</span></a>';
	}
	return '';
}

//数据查看
function showTableDataView(uid) {
	var row = reportImportGrid.getRowByUID(uid);
	mini.open({
		url : base + "dl/jsp/dlReportDataView.jsp?reportId=" + row.reportId,
		title : "数据查看",
		iconCls : "icon-edit",
		width : $(top.window).width() - 50,
		height : $(top.window).height() - 50,
		allowResize : false
	});
}