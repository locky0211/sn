$(function() {
	if (mini.get("id").getValue() == '') {
		mini.get('endDate').setValue('99991231');
	}	
});

function add() {
	// 添加和编辑校验公式
	var form = new mini.Form("#checkformulaForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			url : base + 'ci/formula/addOrUpdateCheckFormula.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!!', '提醒', function() {
						CloseWindow("ok");
					});
				} else{
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

function isincludSpace(e) {
	var regu = /\s/;
	if (regu.test(e.value)) {
		e.errorText = "不能有空格、回车等";
		e.isValid = false;
	}
}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

// combox清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}

function endDateValid(e) {
	if (e.isValid && mini.get('startDate').isValid()) {
		if (e.value < mini.get('startDate').getValue()) {
			e.errorText = "截止日期应大于生效日期";
			e.isValid = false;
		}
	}
}	
function help(){
	var schemaType='CI_CHECK_FORMULA';
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
