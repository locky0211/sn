var taskGrid;
$(function() {
	taskGrid = mini.get("taskGrid");
	taskGrid.load();
});

function excute() {
	var selectNodes = taskGrid.getSelecteds()();
	if(selectNodes.length>0){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		var json = mini.encode(selectNodes);
		json+=',[dataDate:'+dataDate+'],[dataType:'+dataType+']';
		$.ajax({
			url : base + 'rd/dmLog/doPartManual.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert(text.data, '提醒', function() {
						CloseWindow("ok");
					});
					mini.unmask(document.body);
				} else {
					mini.alert(text.data, '提醒');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			}
		});
	}else{
		mini.alert("请至少选择一行数据!");
	}
	
}

