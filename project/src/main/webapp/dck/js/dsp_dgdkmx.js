var oldDkffhdm;
var jjh;
$(function() {
	var dklx = mini.get('dklx').getValue();
	if (dklx == 2) {
		mini.get('dbfs').setReadOnly(true);
	}
	if(mini.get('dgdkid').getValue() != ''){
		//oldDkffhdm = mini.get('dkffhdm').getValue();
		jjh = mini.get('jjh').getValue();
	}
});

function beforenodeselect(e) {
    //禁止选中父节点
    if (e.isLeaf == false) e.cancel = true;
}

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
			url : base + 'dkmx/addOrUpdateDspdkmx.nut',
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


function onDkhthChanged() {
	var name = mini.get('htid').getText();
	mini.get('dkhth').setValue(name);
}

/**
 * 同一[填报机构代码]下,[借据号]唯一
 * 
 * @param e
 */
function jjhValid(e) {
	var value = e.value;
	if(value != jjh){
		$.ajax({
			url : base + 'dgdkmx/checkJjh.nut?jjh='
					+ e.value,
			type : 'post',
			async : false,
			dataType : 'json',
			success : function(text) {
				if(!text){
					e.errorText = "该借据号已存在";
					e.isValid = false;
				}
			}
		});
	}
}

/**
 * 发放日期校验 小于数据日期
 * 
 * @param e
 */
function ffrqValid(e) {
	if (e.isValid) {
		var sjrq = parseInt(mini.get('sjrq').getValue());
		var date = parseInt(mini.get('ffrq').getText());
		if (date > sjrq) {
			e.errorText = "发放日期日期应小于数据日期[" + sjrq + "]";
			e.isValid = false;
		}
		// 贷款业务种类 [发放日期]大于2010年2月13日，则非空
		if (date > 20100213) {
			mini.get('dkyw').setRequired(true);
			mini.get('zffs').setRequired(true);
		} else {
			mini.get('dkyw').setRequired(false);
			mini.get('zffs').setRequired(false);
		}
		if (date > 20120101) {
			mini.get('txhy').setRequired(true);
			mini.get('gyzxsjbs').setRequired(true);
		} else {
			mini.get('txhy').setRequired(false);
			mini.get('gyzxsjbs').setRequired(false);
		}
	}
}

/**
 * 到期日期验证 大于等于发放日起
 * 
 * @param e
 */
function dqrqValid(e) {
	if (e.isValid) {
		if(isDate(e.value)==false){
			if(parseInt(e.value) != 99999999){
				e.errorText = "日期不正确";
				e.isValid = false;
			}
		}else{
			var ffrq = parseInt(mini.get('ffrq').getText());
			var date = parseInt(mini.get('dqrq').getValue());
			if (date < ffrq) {
				e.errorText = "到期日期应大于等于发放日期[" + ffrq + "]";
				e.isValid = false;
			}
			// 若[到期日期]小于等于[数据日期]，则下期还本金额为0或空 ,下期还息金额为0或空
			var sjrq = parseInt(mini.get('sjrq').getValue());
			if (date <= sjrq) {
				mini.get('xqhbje').setValue(0);
				mini.get('xqhbje').setRequired(true);
				mini.get('xqhxje').setValue(0);
				mini.get('xqhxje').setRequired(true);
			} else {
				mini.get('xqhbje').setRequired(false);
				mini.get('xqhxje').setRequired(false);
			}
			// 若[到期日期]大于[数据日期]，且贷款余额等于0或空，则下期还本金额等于0或空
			var dkye = mini.get('dkye').getValue();
			if (date > sjrq && dkye == 0) {
				mini.get('xqhbje').setValue(0);
				mini.get('xqhbje').setRequired(true);
				mini.get('xqhxje').setValue(0);
				mini.get('xqhxje').setRequired(true);
			} else {
				mini.get('xqhbje').setRequired(false);
				mini.get('xqhxje').setRequired(false);
			}
		}
	}
}

/**
 * 发放金额校验 大于0;大于等于[贷款余额]
 * 
 * @param e
 */
function ffjeValid(e) {
	if (e.isValid) {
		var value = e.value;
		var dkye = mini.get('dkye').getValue();
		if (value < 0) {
			e.errorText = '金额应大于0';
			e.isValid = false;
		} else {
			if (value < dkye) {
				e.errorText = '金额应大于等于贷款余额' + dkye;
				e.isValid = false;
			}
		}
	}
}

/**
 * 贷款余额 若非空则大于等于0;[贷款余额]+[欠本余额]+[欠息余额]大于0
 * 
 * @param e
 */
function dkyeValid(e) {
	var value = e.value;
	if (value != '') {
		if (value < 0) {
			e.errorText = '金额应大于0';
			e.isValid = false;
		}
		// 贷款业务种类 工业转型升级标志 若[贷款余额]大于0,则非空
		if (value > 0) {
			mini.get('dkyw').setRequired(true);
			mini.get('txhy').setRequired(true);
			mini.get('gyzxsjbs').setRequired(true);
			mini.get('gyzxsjbs').setRequired(true);
			mini.get('zffs').setRequired(true);
		} else {
			mini.get('dkyw').setRequired(false);
			mini.get('txhy').setRequired(false);
			mini.get('gyzxsjbs').setRequired(false);
			mini.get('zffs').setRequired(false);
		}
		// 若[贷款余额]大于0，五级分类则非空
		mini.get('wjfl').setRequired(true);
	}
	if (!getAll()) {
		e.errorText = '[贷款余额]+[欠本余额]+[欠息余额]应大于0';
		e.isValid = false;
	}
}

/**
 * [贷款余额]+[欠本余额]+[欠息余额]
 * 
 * @returns {Boolean}
 */
function getAll() {
	var dkye = mini.get('dkye').getValue();
	var qbye = mini.get('qbye').getValue();
	var qxye = mini.get('qxye').getValue();
	if (dkye + qbye + qxye < 0) {
		return false;
	} else {
		return true;
	}
}

/**
 * 若[贷款类型]为“2-贴现”，担保方式 则为空，其他非空
 * 
 * @param e
 */
function dklxValuechanged(e) {
	if (e.value == 2) {
		mini.get('dbfs').setValue('');
		mini.get('dbfs').setReadOnly(true);
		mini.get('dbfs').setRequired(false);
	} else {
		mini.get('dbfs').setReadOnly(false);
		mini.get('dbfs').setRequired(true);
	}
}

/**
 * 欠本余额 校验 若非空则大于等于0;小于等于[贷款余额];[贷款余额]+[欠本余额]+[欠息余额]大于0
 * 
 * @param e
 */
function qbyeValid(e) {
	var value = e.value;
	var dkye = mini.get('dkye').getValue();
	if (value != '') {
		if (value < 0 || value > dkye) {
			e.errorText = '金额应大于等于0;小于等于[贷款余额]' + dkye;
			e.isValid = false;
		}
	}
	if (!getAll()) {
		e.errorText = '[贷款余额]+[欠本余额]+[欠息余额]应大于0';
		e.isValid = false;
	}
}

/**
 * 欠本天数校验 若非空则大于等于0;整数;小于等于[数据日期]-[发放日期]
 * 
 * @param e
 */
function qbtsValid(e) {
	var value = e.value;
	var qbye = mini.get("qbye").getValue();
	if(qbye>0){
		if(value<=0){
			e.errorText = '若欠本余额大于0,则欠本天数必须大于0';
			e.isValid = false;
		}else{
			var sjrq = mini.get('sjrq').getValue();
			var ffrq = mini.get('ffrq').getText();
			var newSjrq = sjrq.substring(0,4)+'-'+sjrq.substring(4,6)+'-'+sjrq.substring(6,8);
			var newFfrq = ffrq.substring(0,4)+'-'+ffrq.substring(4,6)+'-'+ffrq.substring(6,8);
			var days = DateDiff(newFfrq,newSjrq);
			if (value > days) {
				e.errorText = '天数应小于等于[数据日期]-[发放日期]' + days;
				e.isValid = false;
			}
		}
	}
	if(qbye == 0 || qbye == ''){
		if(value != 0 && value !=''){
			e.errorText = '若欠本余额等于0或空,则欠本天数必须为0或空';
			e.isValid = false;
		}
	}
}

function qxtsValid(e) {
	var value = e.value;
	var qxye = mini.get("qxye").getValue();
	if(qxye>0){
		if(value<=0){
			e.errorText = '若欠息余额大于0,则欠息天数必须大于0';
			e.isValid = false;
		}else{
			var sjrq = mini.get('sjrq').getValue();
			var ffrq = mini.get('ffrq').getText();
			var newSjrq = sjrq.substring(0,4)+'-'+sjrq.substring(4,6)+'-'+sjrq.substring(6,8);
			var newFfrq = ffrq.substring(0,4)+'-'+ffrq.substring(4,6)+'-'+ffrq.substring(6,8);
			var days = DateDiff(newFfrq,newSjrq);
			if (value > days) {
				e.errorText = '天数应小于等于[数据日期]-[发放日期]' + days;
				e.isValid = false;
			}
		}
	}
	if(qxye == 0 || qxye == ''){
		if(value != 0 && value !=''){
			e.errorText = '若欠本余额等于0或空,则欠本天数必须为0或空';
			e.isValid = false;
		}
	}
}

function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式  
    var  aDate,oDate1,oDate2,iDays;
    aDate  =  sDate1.split("-");
    oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  //转换为12-18-2006格式  
    aDate  =  sDate2.split("-");
    oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);
    iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24);   //把相差的毫秒数转换为天数  
    return  iDays;  
}    

/**
 * 欠息余额校验 若非空则大于等于0;[贷款余额]+[欠本余额]+[欠息余额]大于0
 * 
 * @param e
 */
function qxyeValid(e) {
	var value = e.value;
	if (value != '') {
		if (value < 0) {
			e.errorText = '欠息余额应大于等于0';
			e.isValid = false;
		}
	}
	if (!getAll()) {
		e.errorText = '[贷款余额]+[欠本余额]+[欠息余额]应大于0';
		e.isValid = false;
	}
}

/**
 * 本期还款 校验 若非空则大于等于0
 * 
 * @param e
 */
function bqhkValid(e) {
	var value = e.value;
	if (value != '') {
		if (value < 0) {
			e.errorText = '本期还款应大于等于0';
			e.isValid = false;
		}
	}
}

/**
 * 下期还本金额 若[到期日期]小于等于[数据日期]，则为0或空； 若[到期日期]大于[数据日期]，且贷款余额大于0，则大于0；
 * 若[到期日期]大于[数据日期]，且贷款余额等于0或空，则等于0或空;小于等于[贷款余额]
 * 
 * @param e
 */
function xqhbjeValid(e) {
	var sjrq = parseInt(mini.get('sjrq').getValue());
	var dqrq = parseInt(mini.get('dqrq').getValue());
	var dkye = mini.get('dkye').getValue();
	var value = e.value;
	if (dqrq > sjrq && dkye > 0) {
		if (value <= 0) {
			e.errorText = '还本金额应大于0';
			e.isValid = false;
		}
	}
	if (value > dkye) {
		e.errorText = '还本金额应小于等于[贷款余额]' + dkye;
		e.isValid = false;
	}
	// 若下期还本金额>0，则下期还本日期非空;若下期还本金额等于0或空，则下期还本日期为空
	if (value > 0) {
		mini.get('xqhbrq').setRequired(true);
		mini.get('xqhbrq').setReadOnly(false);
	} else if (value == 0) {
		mini.get('xqhbrq').setRequired(false);
		mini.get('xqhbrq').setValue('');
		mini.get('xqhbrq').setReadOnly(true);
	} else {
		mini.get('xqhbrq').setRequired(false);
		mini.get('xqhbrq').setReadOnly(false);
	}
}

/**
 * 下期还本日期校验
 * 若下期还本金额>0，则下期还本日期非空;若下期还本金额等于0或空，则下期还本日期为空；8位数字日期格式;大于[数据日期]；小于等于[到期日期]
 * 
 * @param e
 */
function xqhbrqValid(e) {
	var sjrq = parseInt(mini.get('sjrq').getValue());
	var dqrq = parseInt(mini.get('dqrq').getValue());
	var xqhbrq = parseInt(mini.get('xqhbrq').getText());
	if (xqhbrq <= sjrq || xqhbrq > dqrq) {
		e.errorText = '还本日期应大于[数据日期]' + sjrq + ',小于等于[到期日期]' + dqrq;
		e.isValid = false;
	}
}

/**
 * 若[到期日期]小于等于[数据日期]，则为0或空；若[到期日期]大于[数据日期]，则大于等于0或为空
 * 
 * @param e
 */
function xqhxjeValid(e) {
	var sjrq = parseInt(mini.get('sjrq').getValue());
	var dqrq = parseInt(mini.get('dqrq').getValue());
	var value = e.value;
	if(dqrq<=sjrq){
		if(value !=0){
			e.errorText = '若到期日期小于等于数据日期，则为0或空';
			e.isValid = false;
		}
	}
	if (dqrq > sjrq) {
		if (value < 0) {
			e.errorText = '还息金额应大于等于0';
			e.isValid = false;
		}
	}
	// 若下期还息金额>0，则下期还息日期非空
	if (value > 0) {
		mini.get('xqhxrq').setRequired(true);
		mini.get('xqhxrq').setReadOnly(false);
	} else if (value == 0) {
		mini.get('xqhxrq').setRequired(false);
		mini.get('xqhxrq').setValue('');
		mini.get('xqhxrq').setReadOnly(true);
	} else {
		mini.get('xqhxrq').setRequired(false);
		mini.get('xqhxrq').setReadOnly(false);
	}
}

/**
 * 下期还息日期校验
 * 若下期还息金额>0，则下期还息日期非空。若下期还息金额等于0或空，则下期还息日期为空；8位数字日期格式;大于[数据日期]；小于等于[到期日期]
 * 
 * @param e
 */
function xqhxrqValid(e) {
	var sjrq = parseInt(mini.get('sjrq').getValue());
	var dqrq = parseInt(mini.get('dqrq').getValue());
	var xqhxrq = parseInt(mini.get('xqhxrq').getText());
	if (xqhxrq <= sjrq || xqhxrq > dqrq) {
		e.errorText = '还本日期应大于[数据日期]' + sjrq + ',小于等于[到期日期]' + dqrq;
		e.isValid = false;
	}
}

/**
 * 减值准备 若非空则大于等于0
 * 
 * @param e
 */
function jzzbValid(e) {
	var value = e.value;
	if (value != '') {
		if (value < 0) {
			e.errorText = '减值准备应大于等于0';
			e.isValid = false;
		}
	}
}

function onCancel() {
	CloseWindow("cancel");
}
