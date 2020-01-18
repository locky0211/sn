var grid;
$(function() {
	grid=mini.get('ciReportDataGrid');
	if (tableCode != '') {
		initDataGrid();
	}
});

function initDataGrid() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'ci/reportTable/getReportDataStruct.nut',
		type : 'post',
		data : {tableCode : tableCode},
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
				mini.get('exportExcelBtn').hide();
			} else {
				var gird = mini.get('ciReportDataGrid');
				grid.set({
					columns : text.data
				});
				grid.hideColumn(0);
				grid.load({
					tableCode : tableCode,
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
}
function viewDetail(e) {
	var row = e.record;
	mini.open({
		url : base + "ci/reportTable/getReportDataDetail.nut?tableCode=" + tableCode
				+ "&dataId=" + row.id,
		title : "数据详细信息",
		iconCls : "icon-edit",
		width : 800,
		height : 500,
		ondestroy : function(action) {
			grid.load({
				tableCode : tableCode
			});
		}
	});
}

function doExportExcel(tableCode, exportAll) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出excel处理中...'
	});
	var gird = mini.get('ciReportDataGrid');
	var pageIndex = gird.getPageIndex();
	var pageSize = gird.getPageSize();
	var sortField = gird.getSortField();
	var sortOrder = gird.getSortOrder();
	$.ajax({
		url : base + 'ci/reportTable/exportResultToExcel.nut?tableCode=' + tableCode + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
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
