var piWaveResultsGrid;
$(function() {
	piWaveResultsGrid = mini.get('piWaveResultsGrid');
	piWaveResultsGrid.load();
		});



function doReportImport() {
	var form = new mini.Form("#piWaveResultsForm");
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
						url : base + 'pi/wave/results/doReportImport.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if(text.data!=""){
								mini.unmask(document.body);
								mini.confirm(text.data + '!!是否继续导入', '确定？', function(action) {
									if (action == 'ok') {
										mini.get("flag").setValue("1");
										var o2 = form.getData(true);
										var json2 = mini.encode(o2);
										mini.mask({
											el : document.body,
											cls : 'mini-mask-loading',
											html : '导入处理中...'
										});
										$.ajax({
													url : base + 'pi/wave/results/doReportImport.nut',
													type : 'post',
													dataType : 'json',
													data : json2,
													success : function(text) {
														mini.unmask(document.body);
														if (text.success) {
															mini.alert('导入成功!!', '提醒', function() {
																		mini.get('excelFile').setValue('');
																		mini.get('excelFilePath').setValue('');
																		mini.get('excelUpload').setText('');
																		mini.get("flag").setValue("0");
																		gridLoad();
																	});
														} else {
															mini.alert(text.data, '提醒');
														}
													}
												});
									}
								});
							}else{
								mini.alert('导入成功 !!', '提醒', function() {
									mini.get('excelFile').setValue('');
									mini.get('excelFilePath').setValue('');
									mini.get('excelUpload').setText('');
									mini.get("flag").setValue("0");
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
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="'+base+'/upload/downLoadFile.nut?filePath='+piWaveResultsGrid.getRowByUID(uid).filePath+'"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}

function gridLoad(){
	piWaveResultsGrid.load();
}
