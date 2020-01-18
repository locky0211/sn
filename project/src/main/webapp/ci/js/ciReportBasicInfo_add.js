
$(function() {
	var rep = decodeURI(getQueryString("reportName"));
	if(mini.get("id").getValue() != ''){
	mini.get("reportName").setValue(rep);
	}else{
		mini.get("reportName").setValue("");
	}
		});

function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


function add() {
	// 添加和编辑校验公式
	var form = new mini.Form("#reportBasicInfoForm");
	form.validate();
	
	if(mini.get("id").getValue() == ''){
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'ci/reportBasic/addReportBasicInfo.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							if(text.data=="0"){
								mini.alert('无操作权限!!', '提醒', function() {
									CloseWindow("ok");
								});
							} else{
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
							}
						}   else {
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
	}else{
		if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '处理中...'
					});
			$.ajax({
						url : base + 'ci/reportBasic/updateReportBasicInfo.nut?id='+mini.get("id").getValue(),
						type : 'post',
						data : json,
						dataType : 'json',
						cache : false,
						success : function(text) {
							if (text.success) {
								if(text.data=="0"){
									mini.alert('无操作权限!!', '提醒', function() {
										CloseWindow("ok");
									});
								} else{
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
								}
							}   else {
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
}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}
