var grid ;
$(function() {
	grid = mini.get('checkDataGrid');
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据加载中...'
	});
	$.ajax({
		url : base + 'dl/result/getCheckResultStruct.nut?formulaId=' + formulaId + "&tabCode=" + tabCode,
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
				grid.hideColumn(0);//隐藏第一列
				grid.hideColumn(1);//隐藏第二列
				grid.load({
					tabCode : tabCode,
					fieldCode : fieldCode
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

function viewDetail(e) {
	var row = e.record;
	mini.open({
		url : base + "dl/result/getDlCheckDetail.nut?tabCode=" + tabCode
		+ "&dataId=" + row.id + "&fieldCode=" + fieldCode,
		title : "数据详细信息",
		iconCls : "icon-edit",
		width : 800,
		height : 500,
		ondestroy : function(action) {
			grid.load({
				tabCode : tabCode
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
		url : base + 'dl/result/exportCheckResultToExcel.nut?id=' + id + '&brNo=' + brNo + '&reportDate=' + reportDate + '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
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
