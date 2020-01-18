/**
 * 
 */
$(function() {
	mini.get('combobox2').select(0);
	if($.inArray('1',userRole) === -1){
		mini.get('combobox2').setMultiSelect(true);
	}
});
//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function downLoadFile() {
	var document = mini.get('combobox2').getValue();
	if (document == null || document == "未上传附件。" || document == "") {
		mini.alert('没有附件!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '相关材料下载中...'
		});
		$.ajax({
			url : base + 'rd/problemIssued/attached/doExportRarFile.nut',
			type : 'post',
			dataType : 'json',
			data : {
				attachedId : document,
			},
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFileForBf(text);
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
