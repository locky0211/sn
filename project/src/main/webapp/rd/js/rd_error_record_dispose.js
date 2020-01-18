var issuedResultGrid;

$(function() {
	issuedResultGrid = mini.get("issuedResultGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#startDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	mini.get('#endDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
});

function gridLoad() {
	issuedResultGrid.load();
}

//查询结果
function doSearch(){
	var form = new mini.Form("#issuedResultForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.get('issuedResultGrid').load(o);
	} 
}

//把机构标号转换成中文名称
function onBrNo(e) {
	var row = e.record;
	var brNo = row.organNo;
	$.ajax({
		url : base + "bf/remarks/getBmNameByBmCode.nut",
		data : {
			code : brNo
		},
		type : "post",
		async : false,
		success : function(text) {
			brNo = text.data;
		},
	});
	return brNo
}

//渲染差错来源
function onErrorType(e){
	if (e.value == '1') {
		return '迟报';
	} else {
		return '错漏报';
	}
}

function doNotiFy(){
	mini.confirm("是否确认通报？","提醒",function(action){
		if (action == 'ok') {
			notiFy();
		}
	});
}


//双击跳转校验详情
function showCheckView(e) {
	var row = e.record;
	var checkFlag = row.checkFlag;
	if (checkFlag == "1") {
		//基础校验
		mini.open({
			url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				/*if (action == 'ok') {
					gridLoad();
				}*/
				issuedResultGrid.reload();
			}
		});
	} else if (checkFlag == "2") {
		//异动校验
		mini.open({
			url : base + "rd/check/wave/toRdReportCheckResultsViewCS.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view_wave_cs.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					gridLoad();
				}
			}
		});
	}
}




//通报处理
function notiFy(flag) {
	var istrue = flag;
	var grid = mini.get('issuedResultGrid');
	var rows = grid.getSelecteds();
	if (rows.length > 0) {
		var rowIds = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			rowIds = rowIds + row.id + ";";
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '通报批量处理中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/error/dispose/updateTbFlag.nut",
			data : "rowIds=" + rowIds.substring(0, rowIds.length - 1),
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("通报成功!!", "提醒", function() {
						toDownLoadFileForWord(data.data);
						doSearch()
					});
				} else {
					mini.alert("通报失败!!", "提醒", function() {
						doSearch();
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
	} else {
		mini.alert("请选择需要认定的选项！", "提醒");
	}
}

function onActionRenderer(e) {
	var record = e.record;
	var id = record.id;
	var s = "";
	s += '<a class="mini-button mini-button-plain" href="javascript:updateTbStatus(\''+ id + '\')"><span class="mini-button-text  mini-button-icon icon-txt">修改通报状态</span></a>'
	return s;
}

function updateTbStatus(e){
	mini.open({
		url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + e + '&page=/rd/jsp/rd_error_record_updateTbStatus.jsp',
		title : "确认正确",
		iconCls : "icon-add",
		width : 500,
		height : 300,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				doSearch()
			}
		}
	});
}
function toDownLoadFileForWord(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}


