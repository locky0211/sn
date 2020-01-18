
function khlxvalidat(e){
		$.ajax({
			url : base + 'frkh/checkKhlx.nut?khid=' + mini.get('frkhxxId').getValue(),
			type : 'post',
			async : false,
			dataType : 'json',
			success : function(text) {
				if(text.success){
					mini.get('khlx').setRequired(false);
				}else{
					mini.get('khlx').setRequired(true);
				}
			}
		});
};
function xzqudavalidat(e){
	if(e.value.substring(4)=='00'||e.value.substring(3)=='000'){
		if (e.value != '710000' && e.value != '810000' && e.value != '820000') {
			e.errorText = "区划代码只能为市区下或县区下";
			e.isValid = false;
		}
	}
}
/**
 * 校验财务报表日期
 * @param e
 */
function cwbbrqValidate(e){
	if(e.value !=''){
		var cwbblx = mini.get("cwbblx").getValue();
		var cwbbrq = mini.get('cwbbrq').getText();
		var reg = new RegExp("1231$");
		var reg2 = new RegExp("0331$");
		var reg3 = new RegExp("0630$");
		var reg4 = new RegExp("0930$");
		var reg5 = new RegExp("30$");
		var reg6 = new RegExp("31$");
		var reg7 = new RegExp("28$");
		var reg8 = new RegExp("29$");
		var Year = parseInt(cwbbrq.substring(0, 4));
		var days = getDaysInMonth(Year, parseInt(cwbbrq.substring(4, 6)));
		var moth = cwbbrq.substring(4, 6).replace(/\b(0+)/gi, "");
		var rq = cwbbrq.substring(4, 6).replace(/\b(0+)/gi, "");
		if(getZc()>0){
			if(e.value = ''){
				e.errorText = '不能为空!';
				e.isValid = false;
			}else{
				if(parseInt(cwbbrq) > parseInt(mini.get("sjrq").getValue())){
					e.errorText = "必须为小于等于数据日期";
					e.isValid = false;
				} else {
					switch (cwbblx) {
					case '1':
						if (!reg.test(cwbbrq)) {
							e.errorText = "必须为年末日期";
							e.isValid = false;
						}
						break;
					case '2':
						if (!reg3.test(cwbbrq)) {
							e.errorText = "必须半年末日期";
							e.isValid = false;
	
						}
						break;
					case '3':
						if (moth == '3') {
							if (!reg2.test(cwbbrq)) {
								e.errorText = "必须为年季度末日期";
								e.isValid = false;
							}
						}
						if (moth == '6') {
							if (!reg3.test(cwbbrq)) {
								e.errorText = "必须为年季度末日期";
								e.isValid = false;
							}
	
						}
						if (moth == '9') {
							if (!reg4.test(cwbbrq)) {
								e.errorText = "必须为年季度末日期";
								e.isValid = false;
							}
	
						}
						if (moth == '12') {
							if (!reg.test(cwbbrq)) {
								e.errorText = "必须为年季度末日期";
								e.isValid = false;
							}
						}
						break;
	
					case '4':
						if (isLeapYear(Year)) {
							if (rq != '2') {
								if (days == '30') {
									if (!reg5.test(cwbbrq)) {
										e.errorText = "必须为月末日期";
										e.isValid = false;
									}
								}
								if (days == '31') {
									if (!reg6.test(cwbbrq)) {
										e.errorText = "必须为月末日期";
										e.isValid = false;
									}
								}
	
							} else {
								if (!reg8.test(cwbbrq)) {
									e.errorText = "必须为月末日期";
									e.isValid = false;
								}
							}
	
						} else {
							if (rq != '2') {
								if (days == '30') {
									if (!reg5.test(cwbbrq)) {
										e.errorText = "必须为月末日期";
										e.isValid = false;
									}
								}
								if (days == '31') {
									if (!reg6.test(cwbbrq)) {
										e.errorText = "必须为月末日期";
										e.isValid = false;
									}
								}
							} else {
								if (!reg7.test(cwbbrq)) {
									e.errorText = "必须为月末日期";
									e.isValid = false;
								}
							}
						}
						break;
					}
				}
		
			}
		}
	}else{
		if(mini.get("zcze").getValue()!=0 ||mini.get("fzze").getValue()!=0||mini.get("sqlr").getValue()!=0||mini.get("zyywsr").getValue()!=0 ){
			e.errorText = "当|资产总和|+|负债总额|+|税前利润|+|主营业务收入|之和大于0,则不能为空!";
			e.isValid = false;
		}
	}
}

/**
 * 判断是否为闰年
 * 
 * @param Year
 * @returns {Boolean}
 */
function isLeapYear(Year) {
	if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
		return true;
	} else {
		return false;
	}
}
/**根据 年月 获取天数
 * @param year
 * @param month
 * @returns
 */
function getDaysInMonth(year, month) {
	var temp = new Date(year, month, 0);
	return temp.getDate();
}

/**
 * 组织机构代码规范校验
 * 
 * @param e
 */
function zzjgdmValidate(e) {
	var reg = new RegExp("^[A-Z0-9]{9}$");
	var value = e.value;
	if (value != '') {
		var jyw = new Array(3, 7, 9, 10, 5, 8, 4, 2);
		if (reg.test(value)) {
			var c9 = value.substring(8, 9);
			var c = 0;
			for (var i = 0; i < 8; i++) {
				var a = value.substring(i,i+1);
				if (isNaN(a)) {
				a = a.charCodeAt(0);
				}
				c += a * jyw[i];
			}
			c = 11 - (c % 11);
			if (c == 10) {
				c = 'X';
			}
			if (c == 11) {
				c = 0;
			}
			if (c9 != c) {
				e.errorText = '必须符合规则,尾数应为' + c;
				e.isValid = false;
			}
			if (value == 000000000) {
				e.errorText = '不能为特殊代码000000000';
				e.isValid = false;
			}
		} else {
			e.errorText = '组织机构代码必须为9位数字或字母(字母为大写)';
			e.isValid = false;
		}
	}else{
		if(mini.get("gbdm").getValue() == 'CHN'){
			e.errorText = '国别代码为中国,组织机构代码不能为空';
			e.isValid = false;
		}
	}
}

/**
 * 客户代码规范
 * 
 * @param e
 */
function khdmValidate(e) {
	if (e.value != '') {
		var reg = /^[a-zA-Z0-9#]+$/;
		if (!reg.test(e.value)) {
			e.errorText = '不符合客户号规范';
			e.isValid = false;
		}else{
			var zzjgdm = mini.get('zzjgdm').getValue();
			var khdm = e.value;
			if(khdm != oldKhdm || zzjgdm != oldJgdm){
				$.ajax({
					url : base + 'frkh/checkKhdm.nut?zzjgdm=' + zzjgdm + '&khdm='
							+ khdm,
					type : 'post',
					async : false,
					dataType : 'json',
					success : function(text) {
						if(!text){
							e.errorText = "该客户代码已存在";
							e.isValid = false;
						}
					}
				});
			}
		}
	}
}

/**
 * 法人客户名称规范
 * 
 * @param e
 */
function khmcValidate(e) {
	if (e.value != '' && e.value != '*********') {
		var reg = /^[\d]+$/;
		var reg2 = /^([A-Z])\1*$/;
		var reg3 = /[\s%$&]/;
		var reg4 = /^[A-Z0-9\u4E00-\u9FA5《》、()&-',.。]+$/;
		if (reg.test(e.value) || reg2.test(e.value)) {
			e.errorText = '不能全部为数字或重复的相同字母';
			e.isValid = false;
		}
		if (reg3.test(e.value)) {
			e.errorText = '不能包含特殊字符';
			e.isValid = false;
		}
		if (!reg4.test(e.value)) {
			e.errorText = '不符合法人名称规范';
			e.isValid = false;
		}
	}
}


/**
 * 登记注册代码：允许汉字、0-9，英文字母，( )，[ ]
 * 
 * @param e
 */
function djzcdmValidate(e) {
	if (e.value != '') {
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\[\]]+$/;
		if (!reg.test(e.value)) {
			e.errorText = '不符合注册代码规则';
			e.isValid = false;
		}
	}else{
		mini.get('djgxrq').setValue('');
	}
}

/**
 * 地址校验规范
 * 
 * @param e
 */
function zcdzValidate(e) {
	if (e.value != '') {
		var reg = /^[\d]+$/;
		var reg2 = /^([a-zA-Z])\1*$/;
		var reg3 = /[\s%$&]/;
		var reg4 = /^[a-zA-Z0-9\u4E00-\u9FA5《》、()&*#-]+$/;
		if (reg.test(e.value) || reg2.test(e.value)) {
			e.errorText = '不能全部为数字或重复的相同字母';
			e.isValid = false;
		}
		if (reg3.test(e.value)) {
			e.errorText = '不能包含特殊字符';
			e.isValid = false;
		}
		if (!reg4.test(e.value)) {
			e.errorText = '不符合地址规范';
			e.isValid = false;
		}
		if(e.value.indexOf('上海市')<0&&e.value.indexOf('重庆市')<0&&e.value.indexOf('北京市')<0&&e.value.indexOf('天津市')<0){
			if((e.value.indexOf('省')<0 || e.value.indexOf('市')<0)){
				e.errorText = '非直辖市必须包含省,市字符,直辖市必须包含市字符';
				e.isValid = false;
			}	
		}
	}
}
function cwbblxvalidat(e){
	var zcze = parseInt(mini.get('zcze').getValue());
	var sqlr = parseInt(mini.get('sqlr').getValue());
	var fzze = parseInt(mini.get('fzze').getValue());
	var zyysr = parseInt(mini.get('zyywsr').getValue());
	if(zcze!=0||sqlr!=0||fzze!=0||zyysr!=0){
		if(e.value==''){
			e.errorText = '不能为空';
			e.isValid = false;
		}
	}
}
/**
 * 资产总额校验
 * 
 * @param e
 */
function zczeValidate(e) {
	var value = e.value;
	if (value < getZk()) {
		e.errorText = '资产总额应大于等于[存货]+[应收账款]+[其他应收款]';
		e.isValid = false;
	}
	if (value < mini.get('ldzchj').getValue()) {
		e.errorText = '资产总额应大于等于[流动资产合计]';
		e.isValid = false;
	}
	if (value != '') {
		if (value < 0) {
			e.errorText = "大于等于0";
			e.isValid = false;
		}
	}
	if (getZc()) {
		mini.get('cwbblx').setRequired(true);
		mini.get('cwbbrq').setRequired(true);
	} else {
		mini.get('cwbblx').setRequired(false);
		mini.get('cwbbrq').setRequired(false);
	}
}

/**
 * 负债总额 若非空则大于等于0
 * 
 * @param e
 */
function fzzeValidate(e) {
	var value = e.value;
	if (value != '') {
		if (value < 0) {
			e.errorText = "大于等于0";
			e.isValid = false;
		}
	}
	if (getZc()) {
		mini.get('cwbblx').setRequired(true);
		mini.get('cwbbrq').setRequired(true);
	} else {
		mini.get('cwbblx').setRequired(false);
		mini.get('cwbbrq').setRequired(false);
	}
}

/**
 * 税前利润
 * 
 * @param e
 */
function sqlrValidate(e) {
	if (getZc()) {
		mini.get('cwbblx').setRequired(true);
		mini.get('cwbbrq').setRequired(true);
	} else {
		mini.get('cwbblx').setRequired(false);
		mini.get('cwbbrq').setRequired(false);
	}
}

/**
 * [存货]+[应收账款]+[其他应收款]
 * 
 * @returns
 */
function getZk() {
	var ch = mini.get('ch').getValue();
	var yszk = mini.get('yszk').getValue();
	var qtysk = mini.get('qtysk').getValue();
	return ch + yszk + qtysk;
}

/**
 * 资产总额+负债总额+|税前利润|+主营业务
 */
function getZc() {
	var zcze = mini.get('zcze').getValue();
	var fzze = mini.get('fzze').getValue();
	var sqlr = mini.get('sqlr').getValue();
	var zyywsr = mini.get('zyywsr').getValue();
	var zc = zcze + fzze + Math.abs(sqlr) + zyywsr;
	if (zc <= 0) {
		return false;
	}
	if (zc > 0) {
		return true;
	}
}

/**
 * 日期应小于数据日期
 * 
 * @param e
 */
function jgdmgxrqValidate(e) {
	if(e.value.length>0){
		if(isDate(e.value)==false){
			if(parseInt(e.value) != 99999999){
				e.errorText = "日期不正确";
				e.isValid = false;
			}
		}else{
			var sjrq = parseInt(mini.get('sjrq').getValue());
			if(parseInt(e.value) != 99999999){
				if (parseInt(e.value) > sjrq) {
					e.errorText = "更新日期应小于数据日期[" + sjrq + "]";
					e.isValid = false;
				}
			}
		}
	}else if(mini.get("zzjgdm").getValue()!='' && e.value==''){
		e.errorText = "组织机构代码不为空,则更新日期也不能为空";
		e.isValid = false;
	}
	
}

/**
 * 日期应小于数据日期
 * 
 * @param e
 */
function zcdmgxrqValidate(e) {
		var sjrq = parseInt(mini.get('sjrq').getValue());
		if(e.value.length>0){
			if(isDate(e.value)==false){
				e.errorText = "日期不规范";
				e.isValid = false;
			}else{
				if(parseInt(e.value) != 99999999){
					if (parseInt(e.value) > sjrq) {
						e.errorText = "更新日期应小于数据日期[" + sjrq + "]";
						e.isValid = false;
					}
				}
				
			}
		}else if(mini.get("djzcdm").getValue()!=''){
			e.errorText = "登记注册代码不为空,则更新日期也不能为空";
			e.isValid = false;
		}
}

/**
 * 违约概率若非空则大于等于0
 * 
 * @param e
 */
function wyglValidate(e) {
	if (e.value != '') {
		if (e.value < 0) {
			e.errorText = "大于等于0";
			e.isValid = false;
		}
	}
}

/**
 * 当证件类型值变化的时候
 */
function onZjlxValueChange(e) {
	var zjhmOjb = mini.get('zjhm');
	if (e.value == '12') {
		zjhmOjb.setValue('');
		zjhmOjb.setIsValid(true);
		zjhmOjb.setReadOnly(true);
	} else {
		zjhmOjb.setReadOnly(false);
	}
}

/**
 * 贷款卡号 若非空则16位或18位数字
 * 
 * @param e
 */
function onICCardsValidation(e) {
	if (e.value != '') {
		var pattern = /\d*/;
		if ((e.value.length == 16 || e.value.length == 18)
				&& pattern.test(e.value) == true) {
			e.isValid = true;
		} else {
			e.errorText = "必须输入16或18位数字";
			e.isValid = false;
		}
	}
}
/**
 * 非空；大于等于1的整数
 */
function jtcysvalidat(e) {
	if (isNaN(e.value)) {
		e.errorText = "请输入数字";
		e.isValid = false;
	} else if (parseInt(e.value) < 1) {
		e.errorText = "集团成员数必须大于等于1";
		e.isValid = false;
	}
}
/**
 * 若非空则大于等于0 如果大于0 则资产负债表类型不得为空
 */
function validat(e) {
	if (isNaN(e.value)) {
		e.errorText = "请输入数字";
		e.isValid = false;
	} else if (e.value < 0) {
		e.errorText = "必须大于等于0";
		e.isValid = false;
	} else {
		if (e.value > 0) {
			mini.get('zcfzblx').setRequired(true);
		} else {
			mini.get('zcfzblx').setRequired(false);
		}
	}
}
/**
 * 校验个人用户身份证信息 若[有效身份证件类型]为“2”-“11”，则非空； 若非空则长度大于等于2个字符； 若[有效身份证件类型]为“12”，则为空；
 * 必须符合号码校验规范，若[有效身份证件类型]为“2”则必须符合身份证号码规范
 * 
 * @param {}
 *            e
 */
function checkGrkhzjhm(e) {
	var zjlx = mini.get('yxsfzjlx');
	if (zjlx.isValid() && zjlx.getValue() == '2') {
		if (!checkIdcard(e.value)) {
			e.errorText = "身份证格式错误";
			e.isValid = false;
		}
	}
}
/**
 * 非空；长度大于等于2个字符；必须符合地址校验规则
 * 
 * @param {}
 *            e
 */
function checkGrkhKhzz(e) {
	// 校验地址规则
}
/**
 * 当其他证件类型值变化的时候
 */
function onQtZjlxValueChange(e) {
	var qtzjhmObj = mini.get("khqtzjhm");
	if (e.value == '12') {
		qtzjhmObj.setValue('');
		qtzjhmObj.setIsValid(true);
		qtzjhmObj.setReadOnly(true);
	} else if (e.value != '' && mini.get("khqtzjhm").getValue() == '') {
		qtzjhmObj.setErrorText("不能为空");
		qtzjhmObj.setIsValid(false);
		qtzjhmObj.setReadOnly(false);
	}
}
/**
 * 若非空则长度大于等于2个字符；若[客户其他证件类型]为“2”-“11”，则非空；若[客户其他证件类型]为“12”，则为空；必须符合号码校验规范，若[客户其他证件类型]为“2”则必须符合身份证号码规范
 * 
 * @param {}
 *            e
 */
function checkGrkhQtzjhm(e) {
	var qtzjlx = mini.get("khqtzjlx").getValue();
	if (qtzjlx != '' && e.value == '' && qtzjlx != '12') {
		e.errorText = '不能为空';
		e.isValid = false;
	} else if (qtzjlx == '12' && e.value != '') {
		mini.get("khqtzjhm").setValue('');
		e.isValid = true;
		mini.get("khqtzjhm").setReadOnly(true);
	} else if (qtzjlx == '2') {
		if (!checkIdcard(e.value)) {
			e.errorText = "身份证格式错误";
			e.isValid = false;
		}
	}
}