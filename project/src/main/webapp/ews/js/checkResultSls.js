$(function() {   
	mini.parse();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'check/result/sls/getCheckResultStruct.nut?id=' + id + '&brNo=' + brNo,
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
				mini.get('exportExcelBtn').hide();
			} else {
				var gird = mini.get('checkDataGrid');
				gird.set({
					columns : text.data
				});
				gird.load({
				});
				gird.on("drawcell", function(e) {
					var record = e.record, column = e.column, field = e.field, value = e.value;
				     if (field.toUpperCase() == fieldCode) {
			             e.cellStyle = "background:#FF0000";
			         }
				});
				mini.get('exportExcelBtn').show();
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

/*省联社使用*/
function doExportExcel(id, exportAll) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出excel处理中...'
	});
	var gird = mini.get('checkDataGrid');
	var pageIndex = gird.getPageIndex();
	var pageSize = gird.getPageSize();
	var sortField = gird.getSortField();
	var sortOrder = gird.getSortOrder();
	$.ajax({
		url : base + 'check/result/sls/exportCheckResultToExcel.nut?id=' + id + '&brNo=' + brNo + '&reportDate=' + reportDate + '&nbjgh=' + nbjgh + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
				+ pageSize + '&sortField=' + sortField + '&sortOrder=' + sortOrder,
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				toDownLoadFileByFilePath(text.data);
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
/**
 * 江南使用
 * @param id
 * @param exportAll
 */
function doExportExcel(id, exportAll) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出excel处理中...'
	});
	var gird = mini.get('checkDataGrid');
	var pageIndex = gird.getPageIndex();
	var pageSize = gird.getPageSize();
	var sortField = gird.getSortField();
	var sortOrder = gird.getSortOrder();
	$.ajax({
		url : base + 'check/result/sls/exportCheckResultToExcelJN.nut?id=' + id + '&brNo=' + brNo + '&reportDate=' + reportDate + '&nbjgh=' + nbjgh + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
				+ pageSize + '&sortField=' + sortField + '&sortOrder=' + sortOrder,
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				toDownLoadFileByFilePath(text.data);
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

