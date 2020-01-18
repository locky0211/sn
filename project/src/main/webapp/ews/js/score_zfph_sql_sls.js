$(function(){
	if(mini.get("zbbh").getValue() == ''){
		mini.get("zbbh").setReadOnly(false);
	}
})

function zbbhIsOnly(e){
	//判断主键是否唯一
	if(zbbh == ''){
		if(mini.get("zbbh").getValue() != ''){
			$.ajax({
				url : base + "scoreZfphSqlSls/checkIsOnly.nut?zbbh=" + mini.get("zbbh").getValue(),
				dataType : 'json',
				async : false,
				success : function(data) {		
					//=false||data.success=="false"
					if (!data.success) {
						e.errorText = "已存在!";
						e.isValid = false;
//						mini.get("zbbh").setErrorText = "已存在!";
//						mini.get("zbbh").setIsValid = false;
					}
	
				}
			});
		}	
	}
		

}


function onSave() {
	var form = new mini.Form('#scoreZfghForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		
		if (zbbh == '') {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'scoreZfphSqlSls/addScoreZfphSql.nut',
				data : json,
				success : function(text) {
					if (text) {
						mini.alert('操作成功!!', '提醒', function() {
							CloseWindow("ok");
						});
					} else {
						mini.alert('操作失败!!', '提醒', function() {
							CloseWindow("ok");
						})
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
		} else {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'scoreZfphSqlSls/updateScoreZfphSqlSls.nut',
				data : json,
				success : function(text) {
					if (text) {
						mini.alert('操作成功!!', '提醒', function() {
							CloseWindow("ok");
						});
					} else {
						mini.alert('操作失败!!', '提醒', function() {
							CloseWindow("ok");
						})
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

function onCancel() {
	CloseWindow("cancel");
}