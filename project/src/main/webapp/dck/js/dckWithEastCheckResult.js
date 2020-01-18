$(function() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'dck/eastRe/getCheckResultStruct.nut?id=' + id,
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
				gird.load();
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
		url : base + 'dck/eastRe/exportCheckResultToExcel.nut?id=' + id + '&brNo=' + brNo +'&eastBmcode='+ eastBmcode + '&reportDate=' + reportDate + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
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