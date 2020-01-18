var grid ;
$(function() {
	grid = mini.get('checkDataGrid');
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'dck/result/getCheckResultStruct.nut?id=' + id + "&tableName=" + tableName,
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
				grid.load({
					tableName : tableName,
					fieldName : fieldName
				});
				gird.on("drawcell", function(e) {
					var record = e.record, column = e.column, field = e.field, value = e.value;
				     if (field.toUpperCase() == fieldName) {
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

function viewDetail(e) {
	var row = e.record;
	mini.open({
		url : base + "dck/result/getDckCheckDetail.nut?tableName=" + tableName
		+ "&dataId=" + row.id + "&fieldName=" + fieldName,
		title : "数据详细信息",
		iconCls : "icon-edit",
		width : 800,
		height : 500,
		ondestroy : function(action) {
			grid.load({
				tableName : tableName
			});
		}
	});
}

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
		url : base + 'dck/result/exportCheckResultToExcel.nut?id=' + id + '&brNo=' + brNo + '&reportDate=' + reportDate + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
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

//导出Excel进行数据修改
function doExportExcelChange(id, exportAll) {
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
		url : base + 'dck/result/exportCheckResultToExcelToChange.nut?id=' + id + '&brNo=' + brNo + '&reportDate=' + reportDate + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
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