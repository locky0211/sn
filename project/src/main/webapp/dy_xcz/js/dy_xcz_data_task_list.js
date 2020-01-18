$(function(){
	if(mini.get("taskType").getValue()=='L'||mini.get("taskType").getValue()=='D'){
		//mini.get('tabTaskTableName').show();
		mini.get('taskTableName').show();
	}else{
		mini.get('taskTableName').hide();
	}
});
function onAdd() {
	form = new mini.Form('#tlForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'dy_xcz/dm/addOrUpdateDataTaskList.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}
}

function onTaskTypeValueChanged(e) {
	if(e.value=='L'||e.value=='D'){
		//mini.get('tabTaskTableName').show();
		mini.get('taskTableName').show();
	}else{
		//mini.get('tabTaskTableName').hide();
		mini.get('taskTableName').hide();
	}
}

function onCancel() {
	CloseWindow("cancel");
}