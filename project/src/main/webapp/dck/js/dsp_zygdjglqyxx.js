var oldGllx;
var oldZjdm;
$(function(){
	if(mini.get('id').getValue() != ''){
		oldGllx = mini.get('gllx').getValue();
		oldZjdm = mini.get('gdhglqyzjdm').getValue();
	}
});

function beforegbdmselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false) {
		e.cancel = true;
	}
	/*var value = e.node.zdValue;
	// 若[国别代码]为境外（包括香港、澳门、台湾），则[客户名称]为九个星号“*********”
	if (value != 'CHN') {
		mini.get('gdhglqymc').setValue('*********');
		mini.get('gdhglqymc').setReadOnly(true);
	} else {
		if (mini.get('gdhglqymc').getValue() == '*********') {
			mini.get('gdhglqymc').setValue('');
			mini.get('gdhglqymc').setReadOnly(false);
		}
	}*/
}

/**
 * 股东或关联企业名称
 * 
 * @param e
 */
function gdhglqymcValidate(e) {
	if(e.isValid){
		if(mini.get('gbdm').getValue() =='CHN'){
			var qylx = mini.get('gdhglqylx').getValue();
			var reg = /^[\d]+$/;
			var reg2 = /^([A-Z])\1*$/;
			var reg3 = /[\s%$]/;
			if (qylx == 6) {
				var reg5 = /^[A-Z0-9\u4E00-\u9FA5().。]+$/;
				if (!reg5.test(e.value)) {
					e.errorText = '不符合自然人规则';
					e.isValid = false;
				}
			} else {
				var reg4 = /^[A-Z0-9\u4E00-\u9FA5《》、(),'.。&#-]+$/;
				if (!reg4.test(e.value)) {
					e.errorText = '不符合法人名称规则';
					e.isValid = false;
				}
			}
			if (reg.test(e.value) || reg2.test(e.value)) {
				e.errorText = '不能全部为数字或重复的相同字母';
				e.isValid = false;
			}
			if (reg3.test(e.value)) {
				e.errorText = '不能包含特殊字符';
				e.isValid = false;
			}
		}
	}
}

/**
 * 股东或关联企业类型校验 若[关联类型]为2/3/4/5之一，则[股东/关联企业类型]不能为“2-机关”
 * 
 * @param e
 */
function qylxValidate(e) {
	if (e.isValid) {
		var value = e.value;
		var gllx = mini.get('gllx').getValue();
		if(value != 6 && (mini.get('gbdm').getValue()!='CHN')){
			mini.get('gdhglqymc').setValue('*********');
			mini.get('gdhglqymc').setReadOnly(true);
		}else{
			mini.get('gdhglqymc').setReadOnly(false);
		}
		if (gllx != 1) {
			if (value == 2) {
				e.errorText = "由于关系类型为" + mini.get('gllx').getText()
						+ ",不能选择'机关'";
				e.isValid = false;
			}
		}
	}
}
/**
 * 股东或关联企业证件类型校验
 * 若[股东/关联企业类型]=“1/2/3/4/5”中的一个，则[股东/关联企业证件类型]为“1”或“12”；若[股东/关联企业类型]=“6”，则[股东/关联企业证件类型]为“2”至“12”中的一个
 * 
 * @param e
 */
function zjlxValidate(e) {
	if (e.isValid) {
		var value = e.value;
		var gdhglqylx = mini.get('gdhglqylx').getValue();
		if (gdhglqylx != 6) {
			if (value == 1 || value == 12) {
				e.isValid = true;
			} else {
				e.errorText = "由于股东及关联企业类型为" + mini.get('gdhglqylx').getText()
						+ ",不能选择'" + mini.get('gdhgkqyzjlx').getText() + "'";
				e.isValid = false;
			}
		} else {
			if (value == 1) {
				e.errorText = "由于股东及关联企业类型为" + mini.get('gdhglqylx').getText()
						+ ",不能选择'" + mini.get('gdhgkqyzjlx').getText() + "'";
				e.isValid = false;
			}
		}
		// 若[股东/关联企业证件类型]为“1”-“11”，股东或关联企业证件代码则非空
		if (value == 12) {
			mini.get('gdhglqyzjdm').setValue('');
			mini.get('gdhglqyzjdm').setReadOnly(true);
			mini.get('gdhglqyzjdm').setRequired(false);
		} else {
			mini.get('gdhglqyzjdm').setRequired(true);
			// 股东或关联企业证件类型为“1-组织机构代码”时，[国别代码]必须为“CHN”
			if (value == 1) {
				//mini.get('gbdm').setValue('CHN');
				//mini.get('gbdm').setReadOnly(true);
				/*if (mini.get('gdhglqymc').getValue() == '*********') {
					//mini.get('gdhglqymc').setValue('');
					mini.get('gdhglqymc').setReadOnly(false);
					e.errorText ='股东或关联企业证件类型为“1-组织机构代码”时，[国别代码]必须为“CHN”';
					e.isValid = false;
				}*/
				if (mini.get('gbdm').getValue() != 'CHN') {
					e.errorText ='股东或关联企业证件类型为“1-组织机构代码”时，[国别代码]必须为“CHN”';
					e.isValid = false;
				}
			} else {
				mini.get('gbdm').setReadOnly(false);
			}
		}
	}
}

/**
 * 股东或关联企业证件代码验证 若[股东/关联企业证件类型]为“2”则必须符合身份证号码规范，若[股东/关联企业证件类型]为“1”则必须符合组织机构代码规范
 * 
 * @param e
 */
function zjdmValidate(e) {
	if (e.isValid) {
		var zjlx = mini.get('gdhgkqyzjlx').getValue();
		if (zjlx == 1) {
			zzjgdmValidate(e);
		}
		if (zjlx == 2) {
			if(!checkIdcard(e.value)){
				e.errorText = '必须符合身份证号规范';
				e.isValid = false;
			}
		}
		if(e.isValid){
			var gllx = mini.get('gllx').getValue();
			var khid = mini.get('khid').getValue();
			var zjdm = e.value;
			if(mini.get("gdhgkqyzjlx").getValue()!=12){
				if(gllx != oldGllx || zjdm != oldZjdm){
					$.ajax({
						url : base + 'zygdjglqy/checkZjdm.nut?khid='+ khid +'&gllx=' + gllx
								+ '&zjdm=' + zjdm,
						type : 'post',
						async : false,
						dataType : 'json',
						success : function(text) {
							if (!text) {
								e.errorText = "该证件号码已存在";
								e.isValid = false;
							}
						}
					});
				}
			}
		}
	}
}

/**
 * 登记注册码校验
 * @param e
 */
function djzcdmValidate(e){
	if(e.value != ''){
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\[\]]+$/;
		if(!reg.test(e.value)){
			e.errorText = '不符合注册代码规则';
			e.isValid = false;
		}
	}
}

/**
 * 股东或关联企业客户代码
 * @param e
 */
function gdhglqykhdmValidate(e){
	if(e.isValid){
		var reg = /^[a-zA-Z0-9#]+$/;
		if(!reg.test(e.value)){
			e.errorText = '不符合客户代码规则';
			e.isValid = false;
		}
	}
}

/**
 * @param e
 */
function cgblValuechanged(e) {
	if (e.value != '') {
		mini.get('gdjgdyrq').setRequired(true);
	}else{
		mini.get('gdjgdyrq').setRequired(false);
	}
}

/**
 * 股东结构对应日期
 * @param e
 */
function gdjgdyrqValidate(e){
	if(e.value!=''){
		if(isDate(e.value)==false){
			e.errorText = "日期不规范";
			e.isValid = false;
		}else{
			var sjrq = parseInt(mini.get('sjrq').getValue());
			if (e.value > sjrq) {
				e.errorText = "日期应小于数据日期[" + sjrq + "]";
				e.isValid = false;
			}
			
		}
	}else if(mini.get("cgbl").getValue()>0){
		e.errorText = "持股比例大于0,则不能为空!!";
		e.isValid = false;
	}
}

/**
 * 日期应小于数据日期
 * 
 * @param e
 */
function dateValidate(e) {
	if (e.value != '') {
		if(isDate(e.value)==false){
			if(parseInt(e.value) != 99999999){
				e.errorText = "日期不正确";
				e.isValid = false;
			}
		}else{
			var sjrq = parseInt(mini.get('sjrq').getValue());
			var date = parseInt(mini.get('gxxxrq').getValue());
			if (date > sjrq) {
				e.errorText = "更新日期应小于数据日期[" + sjrq + "]";
				e.isValid = false;
			}
		}
	}
}

/**
 * 组织机构代码规范校验
 * @param e
 */
function zzjgdmValidate(e) {
	var reg = new RegExp("^[A-Za-z0-9]{9}$");
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
	}
}

function onAdd() {
	form = new mini.Form('#gdjglqyForm');
	form.validate();
	if (form.isValid()) {
		var data = form.getData(true, true);
		var json = mini.encode(data);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
			url : base + 'zygdjglqy/addOrUpdateGdjglqy.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(data) {
				if (data.success) {
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

function onCancel() {
	CloseWindow("cancel");
}
