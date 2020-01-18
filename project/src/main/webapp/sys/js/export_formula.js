/**
 * 
 */
function exportSqlFile() {
	var form=new mini.Form("#exportForm");
	form.validate();
	var selectModule=mini.get('#selectModule').getValue();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "export/formula/exportFormulaSqlFile.nut",
		data :"selectModule=" + selectModule,
		dataType : 'json',
		success : function(data) {
//			toDownLoadFileByFilePath(data);
			if(data.success){
				console.log(data);
				mini.alert("导出成功！");
			}else{
				mini.alert(data.data);
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