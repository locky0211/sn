// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

//修改值
function change(){
	var form = new mini.Form("#changeValueForm");
	var brNo=$("#brNo").val();
	var inputId=$("#inputId").val();
	var value=mini.get("changeValue").getValue().replace(/,/g,"");
	var originalValue=$("#originalValue").val().replace(/,/g,"");
	var frequentness=$("#frequentness").val();
	var tableCode=$("#tableCode").val();
	var subNo=$("#subNo").val();
	form.validate();
	if(form.isValid()){
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'pireport/changeValue.nut?inputId='+inputId+'&originalValue='+originalValue+'&value='+value+'&subNo='+subNo+'&brNo='+brNo+'&frequentness='+frequentness+'&tableCode='+tableCode,
					type : 'post',
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
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}
	
}

