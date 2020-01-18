var pdfUrl;

function onManualClick(e) {
	var manualTree = mini.get("manualTree");
	var node = manualTree.getSelectedNode()
	$.ajax({
		url : base + 'sys/manual/getManualUrl.nut?manualId=' + node.manualId,
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (text != null) {
				pdfUrl = text.data.manualUrl;
			} else {
				mini.alert('操作手册未配置!!', '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			changeUrl();
		}
	});
}

function changeUrl() {
	$("#manualBody").attr('src',pdfUrl); 
}
