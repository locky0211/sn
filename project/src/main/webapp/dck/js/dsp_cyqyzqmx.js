function onAdd() {
	form = new mini.Form('#cyqyzqForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
			url : base + 'cyqyzqmx/addOrUpdateDspCyqyzqmx.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(data) {
				if (data) {
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
			
			complete:function(){
				mini.unmask(document.body);
			} 
		});
	}
}

/**
 * 债券代码规范
 * @param e
 */
function zqdmValidate(e){
	if(e.isValid){
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\[\]]+$/;
		if(!reg.test(e.value)){
			e.errorText = '不符合债券代码规则';
			e.isValid = false;
		}
	}
}

/**
 * 金额大于0验证
 * @param e
 */
function jeValidate(e) {
	if (parseFloat(e.value) <= 0) {
		e.errorText = "金额必须大于0";
		e.isValid = false;
	}
}

/**
 * 日期应小于数据日期
 * @param e
 */
function dateValidate(e) {
	if (e.isValid) {
		var sjrq =  parseInt(mini.get('sjrq').getValue());
		var date =  parseInt(mini.get('fxrq').getText());
		if(date > sjrq){
			e.errorText = "日期应小于数据日期[" + sjrq + "]";
			e.isValid = false;
		}
	}
}

/**
 * 到期日期校验
 * 
 * @param e
 */
function dqdfrqValidate(e){
	if (e.isValid) {
		var fsrq = parseInt(mini.get('fxrq').getText());
		var dqrq = parseInt(mini.get('dqdfrq').getText());
		if(dqrq < fsrq){
			e.errorText = "到期兑付日期应大于发生日期";
			e.isValid = false;
		}
	}
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}

function onCancel() {
	window.CloseOwnerWindow();
}