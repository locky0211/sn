// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

//修改值
function change(){
	var form = new mini.Form("#changeValueForm");
	var reportId=mini.get("reportId").getValue();
	var inputId=mini.get("inputId").getValue();
	var value=mini.get("changeValue").getValue().replace(/,/g,"");
	var originalValue=mini.get("originalValue").getValue().replace(/,/g,"");
	var reportDate=mini.get("reportDate").getValue();
	form.validate();
	if(form.isValid()){
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'bf/table/report/temp/changeValue.nut?reportId='+reportId+'&inputId='+inputId+'&originalValue='+originalValue+'&value='+value+'&reportDate='+reportDate,
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
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

