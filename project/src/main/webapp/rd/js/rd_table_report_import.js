
function doReportImport() {
	sysFlag = $('#sysFlag').val();
	if (sysFlag == '1') {
		endrow = mini.get('endrow').getValue();
		startdatarow = mini.get('startdatarow').getValue();
		col = mini.get('col').getValue();
		startcol = mini.get('startcol').getValue();
		skipcol = mini.get('skipcol').getValue();
	} else {
		autoZero = mini.get('autoZero').getValue();
	}
	if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
		mini.alert('请选择上传文件!!', '提醒');
		return false;
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '导入处理中...'
		});
		$.ajax({
			url : base + 'rd/report/import/doTableReportImport.nut',
			type : 'post',
			dataType : 'json',
			data : {
				tableId : $('#tableId').val(),
				brNo : $('#brNo').val(),
				reportDate : $('#reportDate').val(),
				excelFile : mini.get('excelFile').getValue(),
				excelFilePath : mini.get('excelFilePath').getValue(),
				autoZero : autoZero,
				endrow : endrow,
				startdatarow : startdatarow,
				col : col,
				startcol : startcol,
				skipcol : skipcol,
				sysFlag : sysFlag
			},
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('导入成功!!', '提醒', function() {
						CloseWindow("ok");
					});
				} else {
					mini.alert("导入失败", '提醒');
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
