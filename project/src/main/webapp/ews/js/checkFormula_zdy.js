function onSave() {
	var form = new mini.Form('#editForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		
		if (id == '') {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'formula/sls/zdy/addFormula.nut',
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
				url : base + 'formula/sls/zdy/updateFormula.nut',
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
function help(){
	var schemaType='EAST_CHECK_FORMULA';
	mini.open({
		url : base + "sys/help/toShowSysHelp.nut?schemaType=" + schemaType + '&page=/dy/jsp/dy_table_info_help.jsp',
		title : '帮助',
		iconCls : 'icon-edit',
		width : 850,
		height : 350,
		allowResize : false,
		showMaxButton : true
	});

}