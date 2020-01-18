$(function () {
	
});

function excute() {
	var mysql = mini.get("sqlstr").getValue();
	if(mysql ==''){
		mini.alert("请至少输出一条sql语句!","",function(action){
			if(action == 'ok'){
				return;
			}
		});
	}else{
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		mini.get("excelSql").setValue(mysql);
		var ifream = document.getElementById('ifream1').contentWindow;
		ifream.submit(mysql);
	}
}

function unMask(){
	mini.unmask(document.body);
}

function itemClick(){
	var sql = mini.get("utilSql").getValue();
	mini.get("sqlstr").setValue(sql);
}

function exportExcel() {
	var sql = mini.get("excelSql").getValue();
	var messageid = mini.loading("正在导出,请耐心等待...", "Loading");
	$.ajax({
		type : "POST",
		url : base + "sys/table/query/exportExcel.nut?excelSql=" + sql,
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.hideMessageBox(messageid);
				$('#goToDownload').attr('src', encodeURI(base + "sys/table/query/getExcel.nut?fileName=" + data.data));
			} else {
				mini.alert("操作失败!!");
			}
		}
	});
}

function rzView() {
	mini.open({
		url : base + 'sys/jsp/sys_queryrzgl_m.jsp',
		title : '日志信息',
		iconCls : 'icon-edit',
		width : 600,
		bodyStyle : "padding:0px 5px",
		height : 400,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
		}
	});
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
						url : base + 'sys/table/query/doReportImport.nut',
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