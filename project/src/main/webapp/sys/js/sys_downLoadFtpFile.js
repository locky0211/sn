/**
 * 
 */
function downLoad() {
	var ftpName = mini.get('ftpName').getValue();
	if (ftpName == null || ftpName === undefined || ftpName == "") {
		mini.alert('请选择ftp服务器!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '导出FTP文件中...'
		});
		$.ajax({
			url : base + 'ftpConfig/downLoadFtpFile.nut',
			type : 'post',
			dataType : 'json',
			data : {
				id : ftpName,
			},
			cache : false,
			success : function(text) {
				if (text.success) {
					toDownLoadFileForBf(text);
				}else {
					mini.alert(text.data,'提醒');
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

function toDownLoadFtpFile(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}
