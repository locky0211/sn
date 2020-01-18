var reportImportGrid;
var data;
$(function() {
	reportImportGrid = mini.get('reportImportGrid');
	gridLoad();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

function gridLoad() {
	reportImportGrid.load({
		tableCode : mini.get('tableCode').getValue()
	});
}

function search() {
	gridLoad();
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function onNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.tableCode) {
			return data[i].zdName;
		}
	}
}

function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.changeNum + "</span>"
}

function onRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function del() {
	var e = reportImportGrid.getSelected();
	mini.confirm("确定删除记录？", "确定？", function(action) {
		if (action == 'ok') {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'dck/update/delUpdateInfo.nut?id=' + e.id,
				success : function(text) {
					if (text) {
						reportImportGrid.removeRow(e, true);
					} else {
						mini.alert('操作失败!!', '提醒')
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
	});
}

function doReportImport() {
	var form = new mini.Form("#reportImportForm");
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
				url : base + 'dck/update/doReportImport.nut',
				type : 'post',
				dataType : 'json',
				data : json,
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert('操作成功,' + text.data + '!!', '提醒',
								function() {
									mini.get('excelFile').setValue('');
									mini.get('excelFilePath').setValue('');
									mini.get('excelUpload').setText('');
									gridLoad();
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


