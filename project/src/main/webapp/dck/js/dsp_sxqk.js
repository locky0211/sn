$(function() {
			var sjrq = mini.get('sjrq');
			if (sjrq.getValue() == '') {
				sjrq.setValue(Date.today().toString("yyyyMMdd"));
			}
		});
function onAdd() {
	form = new mini.Form('#sxqkForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true,true);
		var json = mini.encode(o);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
					url : base + 'sxqk/addOrUpdateSxqk.nut',
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
 * 验证授信号唯一性
 * @param e
 */
function checkSxh(e){
	var value = e.value;
	var reg = /[^a-z0-9A-Z\u4E00-\u9FA5()\[\]]/;
	if(value.length<2){
		e.errorText = "非空；长度大于等于2个字符";
		e.isValid = false;
	}else{
		if(e.value != sxhm){
			var khid = mini.get("khid").getValue();
			$.ajax({
				url : base + "sxqk/checkSxh.nut?khid="+khid+"&sxhm="+e.value,
				dataType : 'json',
				async : false, 
				success : function(data) {
					if (data) {
						e.errorText = "授信号已存在!";
						e.isValid = false;
					}
				}
			});
		}
		if (reg.test(e.value)) {
			e.errorText = "必须符合号码校验码规范";
			e.isValid = false;
		}
	}
}

//验证授信额度,规则:必须大于等于0
function sxedValid(e){
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}
}

//贷款授信额度验证,规则:必须大于等于0,同业客户必须为0,必须小于等于授信额度
function dksxedValid(e){
	var sxed = mini.get("sxed").getValue();
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}
	if(parseFloat(e.value) >= 0){
		if(khlx == '3' && parseFloat(e.value) >0){
			e.errorText = "同业客户贷款授信额度必须为0";
			e.isValid = false;
		}
	}
	if(parseFloat(e.value)>parseFloat(sxed)){
		e.errorText = "必须小于等于授信额度";
		e.isValid = false;
	}
}

//授信起始日期验证,不能大于数据日期,,当授信号为WNRSXYW时可以为空
function sxqsrqValid(e){
	var sxhm = mini.get("sxhm").getValue();
	var sjrq = parseInt(mini.get("sjrq").getValue());
	if(e.value != ''){
		if(parseInt(mini.get("sxqsrq").getText()) > sjrq){
			e.errorText = "不能大于数据日期["+sjrq+"]";
			e.isValid = false;
		}
	}else{
		if(sxhm != 'WNRSXYW'){
			e.errorText = "不能为空!";
			e.isValid = false;
		}
	}
}

//授信到期日期验证,规则不能小于起始日期,当授信号为WNRSXYW时可以为空
function sxdqrqValid(e){
	var sxhm = mini.get("sxhm").getValue();
	var sxqsrq = parseInt(mini.get("sxqsrq").getText());
	if(e.value != ''){
		if(mini.get("sxdqrq").getText() < sxqsrq){
			e.errorText = "不能小于起始日期["+sxqsrq+"]";
			e.isValid = false;
		}
	}else{
		if(sxhm != 'WNRSXYW'){
			e.errorText = "不能为空!";
			e.isValid = false;
		}
	}
}

//若为同业客户则为空或0,否则大于等于0
function tykhyeValid(e){
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}
	if(parseFloat(e.value) >= 0){
		if(khlx == '3' && parseFloat(e.value) >0){
			e.errorText = "同业客户金额必须为0";
			e.isValid = false;
		}
	}
}

//贷款余额占用贷款授信额度,规则:若[客户类型]为“3-同业客户”，则为空或0；若非空则大于等于0；小于等于[现有业务余额占用授信额度]
function dkyezydksxedValid(e){
	var xyywyezysxed = mini.get("xyywyezysxed").getValue();
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}else{
		if(khlx == '3'&& parseFloat(e.value) >0){
			e.errorText = "同业客户贷款余额占用贷款授信额度必须为0";
			e.isValid = false;
		}
		if(parseFloat(e.value) > parseFloat(xyywyezysxed) && khlx != '3'){
			e.errorText = "不能大于现有业务余额占用授信额度!";
			e.isValid = false;
		}
	}
}

//尚可使用授信额度,规则:若[客户类型]为“3-同业客户”，则为空或0；若非空则大于等于0;小于等于[授信额度];小于等于[其中：贷款授信额度]
function sksysxedValid(e){
	var sxed = mini.get("sxed").getValue();
	var dksxed = mini.get("dksxed").getValue();
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}else{
		if(khlx == '3' && parseFloat(e.value) >0){
			e.errorText = "同业客户尚可使用授信额度必须为0";
			e.isValid = false;
		}
		if(parseFloat(e.value) > parseFloat(sxed) ||parseFloat(e.value) >parseFloat(dksxed)){
			e.errorText = "不能大于授信额度和贷款授信额度";
			e.isValid = false;
		}
	}
}

//关联方授信标志,规则:必须为1/2
function glfsxbzValid(e){
	if(e.isValid){ 
		if(e.value != '1' && e.value !='2'){
			e.errorText = "必须为1或2";
			e.isValid = false;
		}
	}
}

function ffjeValid(e) {
	if (parseFloat(e.value) <= 0) {
		e.errorText = "金额必须大于0";
		e.isValid = false;
	}
}
function dkyeValid(e) {
	if (e.value != '') {
		if (parseFloat(e.value) < 0) {
			e.errorText = "金额必须大于等于0";
			e.isValid = false;
		} else if (parseFloat(e.value) > parseFloat(mini.get('ffje').getValue())) {
			e.errorText = "金额必须小于等于发放金额";
			e.isValid = false;
		}
	}
}
function zjychkjeValid(e) {
	if (e.value != '') {
		if (parseFloat(e.value) < 0) {
			e.errorText = "金额必须大于等于0";
			e.isValid = false;
		}
		mini.get('zjychkrq').setReadOnly(false);
	} else {
		mini.get('zjychkrq').setValue('');
		mini.get('zjychkrq').setReadOnly(true);
	}
}
function ffrqValid(e) {
	if (e.isValid) {
		var sjrq = mini.get('sjrq').getValue();
		if (sjrq == '') {
			sjrq = Date.today().toString("yyyy-MM-dd");
		} else {
			sjrq = Date.parseExact(sjrq, 'yyyyMMdd').toString("yyyy-MM-dd");
		}
		var ffrq = e.value.toString("yyyy-MM-dd");
		if (e.value > Date.parseExact(sjrq, 'yyyy-MM-dd')) {
			e.errorText = "发放日期应小于数据日期[" + sjrq + "]";
			e.isValid = false;
		} else {
			var days = DateDiff(ffrq, sjrq);
			if (days < 90) {
				e.errorText = "发放日期应比数据日期[" + sjrq + "]小90天";
				e.isValid = false;
			}
		}
	}
}
function dqrqValid(e) {
	if (e.isValid && mini.get('ffrq').isValid()) {
		if (e.value < mini.get('ffrq').getValue()) {
			e.errorText = "到期日期应大于发放日期";
			e.isValid = false;
		}
	}
}
function wytsValid(e) {
	if (parseInt(e.value) < 90) {
		e.errorText = "违约天数必须大于90天";
		e.isValid = false;
	} else if (mini.get('ffrq').getValue() != '' && mini.get('sjrq').getValue() != '') {
		var days = DateDiff(mini.get('ffrq').getValue().toString("yyyy-MM-dd"), Date.parseExact(mini.get('sjrq').getValue(), 'yyyyMMdd')
						.toString("yyyy-MM-dd"));
		if (e.value > days) {
			e.errorText = "天数应该小于等于[数据日期]-[发放日期]=" + days + "天";
			e.isValid = false;
		}
	}
}

function onCancel() {
	CloseWindow("cancel");
}