$(function() {
			if (mini.get("id").getValue() == '') {
				// mini.get('tabcode').setReadOnly(true);
				// } else {
				mini.get('endDate').setValue('99991231');
			}	
		});
function add() {
	// 添加和编辑校验公式
	var form = new mini.Form("#checkformulaForm");
	form.validate();
	if (form.isValid() && checkDeviationValue()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'bf/report/temp/addOrUpdateCheckFormula.nut',
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
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}
}

function checkDeviationValue() {
	if (mini.get('checkFormula').getValue().indexOf("=0") >= 0 && mini.get('deviationValue').getValue() != '') {
		mini.alert('当公式存在=0时,容忍波动值不需填写!!', '提醒');
		return false;
	} else if (mini.get('checkFormula').getValue().indexOf("!=") >= 0 && mini.get('deviationValue').getValue() != '') {
		mini.alert('当公式存在!=时,容忍波动值不需填写!!', '提醒');
		return false;
	}
	return true;
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

function checkIsOnly(e) {
	var regu = /\s/;
	if (regu.test(e.value)) {
		e.errorText = "不能有空格、回车等";
		e.isValid = false;
	} else {
		// 唯一性校验
		$.ajax({
					url : base + "bf/report/temp/checkIsOnly.nut?checkFormula=" + e.value + "&id=" + mini.get("id").getValue(),
					async : false,
					dataType : 'json',
					success : function(data) {
						if (!data.success) {
							e.errorText = "已存在!";
							e.isValid = false;
						}
					}
				});
	}
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
