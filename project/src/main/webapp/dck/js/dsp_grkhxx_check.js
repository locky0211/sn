function khmcvalidat(e) {
	var reg1 = /^([A-Z])\1*$/;
	// var reg2 = /^[a-z0-9\u4E00-\u9FA5《》、(),'.。&*#-]+$/;
	var reg2 = /^[A-Z0-9\u4E00-\u9FA5、()*#-]+$/;
	if (!reg2.test(e.value) || reg1.test(e.value)) {
		e.errorText = "请输入符合自然人名称规范的名称";
		e.isValid = false;
	}
}
function xzqudavalidat(e) {
	if (e.value.substring(4) == '00' || e.value.substring(3) == '000') {
		if (e.value != '710000' && e.value != '810000' && e.value != '820000') {
			e.errorText = "区划代码只能为市区下或县区下";
			e.isValid = false;
		}
	}
}
/**
 * 当证件类型值变化的时候
 */
function onZjlxValueChange(e) {
	var zjhmOjb = mini.get('zjhm');
	if (parseInt(e.value) == 12) {
		zjhmOjb.setValue('');
		zjhmOjb.setRequired(false);
		zjhmOjb.setReadOnly(true);
	} else {
		zjhmOjb.setRequired(true);
		zjhmOjb.setReadOnly(false);
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
	/*var zjlx = mini.get('yxsfzjlx');
	if (zjlx.isValid() && zjlx.getValue() == '2') {
		var gbdm = mini.get('gbdm').getValue();
		var reg = /[a-zA-Z0-9 <>、(),'.。&*#-%/\\]+$/;
		var reg2 = /^([a-zA-Z0-9<>&*%#\\/()。-])\1+$/;
		if (gbdm == 'HKG' || gbdm == 'MAC' || gbdm == 'TWN') {
			if (!(e.value.length > 9 && e.value.length < 12)) {
				e.errorText = "港澳台身份证为10或11位";
				e.isValid = false;
			} else if (!reg.test(e.value)) {
				e.errorText = "身份证格式错误";
				e.isValid = false;
			} else {
				if (reg2.test(e.value)) {
					e.errorText = '不能全部为数字或重复的相同字母';
					e.isValid = false;
				}
			}
		} else if (!checkIdcard(e.value)) {
			e.errorText = "身份证格式错误";
			e.isValid = false;
		}
	} else if (zjlx.getValue() != 2 && zjlx.getValue() != 12) {
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\/-]+$/;
		if (!reg.test(e.value)) {
			e.errorText = '不符合证件代码规范';
			e.isValid = false;
		}
	}*/
}
/**
 * 当其他证件类型值变化的时候
 */
function onQtZjlxValueChange(e) {
	var qtzjhmObj = mini.get("khqtzjhm");
	if (parseInt(e.value) == 12 || e.value == '') {
		qtzjhmObj.setValue('');
		qtzjhmObj.setRequired(false);
		qtzjhmObj.setReadOnly(true);
	} else {
		qtzjhmObj.setRequired(true);
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
	if (qtzjlx != '' && e.value == '' && qtzjlx != 12) {
		e.errorText = '不能为空';
		e.isValid = false;
	} else if (qtzjlx == 12 && e.value != '') {
		mini.get("khqtzjhm").setValue('');
		e.isValid = true;
		mini.get("khqtzjhm").setReadOnly(true);
	} else if (qtzjlx == 2) {
		if (!checkIdcard(e.value)) {
			e.errorText = "身份证格式错误";
			e.isValid = false;
		}

	} else if (qtzjlx != '' && qtzjlx != 2 && qtzjlx != 12) {
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\/-]+$/;
		if (!reg.test(e.value)) {
			e.errorText = '不符合证件代码规范';
			e.isValid = false;
		}
	}
}
/**
 * 客户号
 */
function khhvalidat(e) {
	var reg = new RegExp("[^a-zA-Z0-9#]");
	if (reg.test(e.value)) {
		e.errorText = "请输入正确的客户号";
		e.isValid = false;
	}
}
/**
 * 地址校验规范
 */
function dzvalidat(e) {
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
