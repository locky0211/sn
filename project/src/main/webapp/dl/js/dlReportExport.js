var reportExportGrid;
var reportTypeArr;

$(function() {
	reportExportGrid = mini.get('#reportExportGrid');
	reportExportGrid.on("load", function() {
		reportExportGrid.mergeColumns(["brNo"]);
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
	var reportDate = mini.get("reportDate").getFormValue();
	reportExportGrid.load({
			brNo : brNo,
			reportDate : reportDate
	});
}

function brNoRenderer(e){
	for(var index=0; index < orgArr.length; index++){
		if(orgArr[index].bmCode == e.value){
			return orgArr[index].bmName;
		}
	}
}

//查询
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

//错误信息
function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value) {
		return '<font color="red" class="errorMsg" title="' + e.value
				+ '">失败</a>';
	} else if (record.id) {
		return '成功';
	} else {
		return '<font color="red">未生成</font>';
	}
}

//生成报文
function makeReport() {
	var form = new mini.Form("#reportExportForm");
	form.validate();
	if (form.isValid()) {
		if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
			mini.alert("请选择机构！！");
		} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
			mini.alert("请选择报文日期!!");
		} else {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '报文生成处理中...'
			});
			$.ajax({
				url : base + 'dl/report/export/makeDatFile.nut?brNo=' + mini.get("brNo").getValue() 
				+ '&reportDate=' + mini.get("reportDate").getText(),
				type : 'POST',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert(text.data, '提醒', function() {
							reportExportGrid.reload();
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

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="'
			+ base
			+ 'dl/report/export/downLoadReport.nut?fileName='
			+ reportExportGrid.getRowByUID(uid).fileName
			+ '"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}

function downLoadDat(id) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件下载中...'
	});
	$.ajax({
			url : base + 'dl/report/export/downLoadDat.nut',
			type : 'post',
			dataType : 'json',
			data : {
				id : id
			},
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
}