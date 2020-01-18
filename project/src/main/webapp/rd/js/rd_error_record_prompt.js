$(function() {

});

function doDownLoad() {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '通报批量处理中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/error/dispose/downLoadPromptWord.nut",
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("下载成功!!", "提醒", function() {
						toDownLoadFileForWord(data.data);
					});
				} else {
					mini.alert("下载失败!!", "提醒", function() {
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

function toDownLoadFileForWord(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}


