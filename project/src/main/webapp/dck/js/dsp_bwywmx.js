var oldCbyhjgdm;
var oldYwhm;
$(function(){
	var bwywlx = mini.get('bwywlx').getValue();
	if(bwywlx != 7 && bwywlx != 8){
		mini.get('ywhm').setRequired(true);
	}else if(bwywlx == 8){
		mini.get('ywhm').setReadOnly(true);
	}
	if(mini.get('bwywid').getValue() != ''){
		oldCbyhjgdm = mini.get('cbyhjgdm').getValue();
		oldYwhm = mini.get('ywhm').getValue();
	}
});

function onAdd() {
	form = new mini.Form('#dgdkForm');
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
			url : base + 'bwyw/addOrUpdateBwywmx.nut',
			type : 'post',
			data : json,
			dataType : 'json',
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
			complete:function(){
				mini.unmask(document.body);
			} 
		});
	}
}
/**
 * 业务号码
 * @param e
 */
function ywhmValidate(e){
	if(e.value != ''){
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\[\]]+$/;
		if(!reg.test(e.value)){
			e.errorText = '不符合业务号码规则';
			e.isValid = false;
		}else{
			var cbyhjgdm = mini.get('cbyhjgdm').getValue();
			var bwywlx = mini.get('bwywlx').getValue();
			var ywhm = mini.get('ywhm').getValue();
			if (cbyhjgdm != oldCbyhjgdm || ywhm != oldYwhm) {
				$.ajax({
					url : base + 'bwyw/checkYwh.nut?cbyhjgdm=' + cbyhjgdm
							+ '&bwywlx=' + bwywlx + '&ywhm=' + ywhm,
					type : 'post',
					async : false,
					dataType : 'json',
					success : function(text) {
						if (!text) {
							e.errorText = "该业务号已存在";
							e.isValid = false;
						}
					}
				});	
			}
		}
	}
}
/**
 * 业务余额验证
 * @param e
 */
function ywyeValidate(e) {
	if (e.value != '' && parseFloat(e.value) <= 0) {
		e.errorText = "金额必须大于0";
		e.isValid = false;
	}
}
/**
 * 业务余额验证
 * @param e
 */
function bzjjeValidate(e) {
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
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
		var date =  parseInt(mini.get('fsrq').getText());
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
function dqrqValidate(e){
	if (e.isValid) {
		if(isDate(e.value)==false){
			if(parseInt(e.value) != 99999999){
				e.errorText = "日期不正确";
				e.isValid = false;
			}
		}else{
			var fsrq = parseInt(mini.get('fsrq').getText());
			var dqrq = parseInt(mini.get('dqrq').getValue());
			if(dqrq < fsrq){
				e.errorText = "到期日期应大于发生日期";
				e.isValid = false;
			}
		}
	}
}

//function onCloseClick(e) {
//    var obj = e.sender;
//    obj.setText("");
//    obj.setValue("");
//}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}

function onCancel() {
	window.CloseOwnerWindow();
}