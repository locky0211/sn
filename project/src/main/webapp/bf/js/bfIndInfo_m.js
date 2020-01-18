var indInfoGrid;
$(function() {
	indInfoGrid = mini.get('indInfoGrid');
	indInfoGrid.load();
		});
function update() {
	var row = indInfoGrid.getSelected();

	if (row) {
		mini.open({
					url : base + 'bf/indInfo/toEditIndInfo.nut?id=' + row.id
							+ '&page=/bf/jsp/bfIndInfo.jsp',
					title : '信息修改',
					iconCls : 'icon-edit',
					width : 330,
					height : 240,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						if (action == 'ok') {
							reloads();
						}
					}
				});
	}
}
function add(e) {
	mini.open({
				url : base + "bf/jsp/bfIndInfo.jsp",
				title : "新增信息",
				iconCls : "icon-add",
				width : 330,
				height : 240,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});
}
function del() {
	var row = indInfoGrid.getSelected();
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'bf/indInfo/deleteIndInfo.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											indInfoGrid.removeRow(row, true);
										} else {
											reloads();
										}
									}
								});
					}
				});
	}
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
						url : base + 'bf/indInfo/doReportImport.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功,' + text.data + '!!', '提醒', function() {
											mini.get('excelFile').setValue('');
											mini.get('excelFilePath').setValue('');
											mini.get('excelUpload').setText('');
											gridLoad();
										});
							} else {
								if(text.data==null){
									mini.alert("没有需要导入的报表!!!", '提醒');
								}else{
									mini.alert(text.data, '提醒');
								}
								
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
//刷新
function reloads(e) {
	gridLoad();
}
function gridLoad() {
	indInfoGrid.load();
}
function search() {
	console.log(mini.get("tabCode").getValue());
	indInfoGrid.load({
				
				tabCode : mini.get("tabCode").getValue()
				
				
			});
}