var oldYplx;
var oldYpdm;
var oldYpqsrlx;
var oldYpqsrmc;
var oldYpqsrzjlx;
var oldYpqsrzjdm;
$(function() {
	if (mini.get('frdbid').getValue() != '') {
		oldYplx = mini.get('yplx').getValue();
		oldYpdm = mini.get('ypdm').getValue();
		oldYpqsrlx = mini.get('ypqsrhbzrlx').getValue();
		oldYpqsrmc = mini.get('ypqsrhbzrmc').getValue();
		oldYpqsrzjlx = mini.get('ypqsrhbzrzjlx').getValue();
		oldYpqsrzjdm = mini.get('ypqsrhbzrzjdm').getValue();
		
	}
	else{
		mini.get('yplx').setRequired(true);
		mini.get('ypmc').setRequired(true);
		mini.get('ypdm').setRequired(true);
		mini.get('scgzrq').setRequired(true);
		mini.get('zxgzrq').setRequired(true);
		mini.get('gzdqrq').setRequired(true);
		mini.get('spdzyl').setRequired(true);
		mini.get('bzrbznlsx').setValue(0);
		mini.get('spdzyl').setValue(0);
	}
});

function onAdd() {
	form = new mini.Form('#frdbForm');
	form.validate();
	if (form.isValid()) {
		var data = form.getData(true);
		var json = mini.encode(data);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
			url : base + 'dgdb/addOrUpdateDgdb.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(text) {
				if (text) {
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
 * 押品权属人（或保证人）名称 校验
 * 
 * @param e
 */
function ypqsrhbzrmcValidate(e) {
	if (e.isValid) {
		var ypqsrhbzrlx = mini.get('ypqsrhbzrlx').getValue();
		var reg = /^[\d]+$/;
		var reg2 = /^([A-Z])\1*$/;
		var reg3 = /[\s%$]/;
		if (ypqsrhbzrlx == 1) {
			var reg4 = /^[A-Z0-9\u4E00-\u9FA5《》、(),'.。&#-]+$/;
			if (!reg4.test(e.value)) {
				e.errorText = '不符合法人名称规则';
				e.isValid = false;
			}
		} else {
			var reg5 = /^[A-Z0-9\u4E00-\u9FA5().。]+$/;
			if (!reg5.test(e.value)) {
				e.errorText = '不符合自然人规则';
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

/**
 * 押品权属人（或保证人）证件类型 校验
 * 
 * @param e
 */
function ypqsrhbzrzjlxValidate(e) {
	if (e.isValid) {
		var ypqsrhbzrlx = mini.get('ypqsrhbzrlx').getValue();
		if (ypqsrhbzrlx == 1) {
			if (e.value == 1 || e.value == 12) {
				e.isValid = true;
			} else {
				e.errorText = '由于权属人类型为' + mini.get('ypqsrhbzrlx').getText()
						+ ',证件类型不能为' + mini.get('ypqsrhbzrzjlx').getText();
				e.isValid = false;
			}
		} else {
			if (e.value == 1) {
				e.errorText = '由于权属人类型为' + mini.get('ypqsrhbzrlx').getText()
						+ ',证件类型不能为' + mini.get('ypqsrhbzrzjlx').getText();
				e.isValid = false;
			}
		}
		// 若[押品权属人（或保证人）证件类型]为“1”-“11”，则非空；若[押品权属人（或保证人）证件类型]为“12”，则为空
		if (e.value != 12) {
			mini.get('ypqsrhbzrzjdm').setReadOnly(false);
			mini.get('ypqsrhbzrzjdm').setRequired(true);
		} else {
			mini.get('ypqsrhbzrzjdm').setValue('');
			mini.get('ypqsrhbzrzjdm').setRequired(false);
			mini.get('ypqsrhbzrzjdm').setReadOnly(true);
		}
	}
}

/**
 * 押品代码规范
 * 
 * @param e
 */
function ypdmValidate(e) {
	/*if (e.value != '') {
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5()\[\]]+$/;
		if (!reg.test(e.value)) {
			e.errorText = '不符合注册代码规则';
			e.isValid = false;
		} else {
			var dbhtlx = mini.get('dbhtlx').getValue();
			if (dbhtlx == 1 || dbhtlx == 2) {
				var htid = mini.get('htid').getValue();
				var yplx = mini.get('yplx').getValue();
				var ypdm = e.value;
				if (yplx != oldYplx || ypdm != oldYpdm) {
					$.ajax({
						url : base + 'dgdb/checkYpdm.nut?htid=' + htid
								+ '&yplx=' + yplx + '&ypdm=' + ypdm,
						type : 'post',
						async : false,
						dataType : 'json',
						success : function(text) {
							if (!text) {
								e.errorText = "该押品代码已存在";
								e.isValid = false;
							}
						}
					});
				}
			}
		}
	}*/
}

/**
 * 押品权属人（或保证人）证件代码 校验
 * 
 * @param e
 */
function ypqsrhbzrzjdmValidate(e) {
/*	if (e.isValid) {
		var ypqsrhbzrzjlx = mini.get('ypqsrhbzrzjlx').getValue();
		if (ypqsrhbzrzjlx == 1) {
			zzjgdmValidate(e);
		}
		if (ypqsrhbzrzjlx == 2) {
			if (!checkIdcard(e.value)) {
				e.errorText = '必须符合身份证号规范';
				e.isValid = false;
			}
		}
		if (e.isValid) {
			var dbhtlx = mini.get('dbhtlx').getValue();
			if (dbhtlx != 1 && dbhtlx != 2) {
				var htid = mini.get('htid').getValue();
				var ypqsrhbzrmc = mini.get('ypqsrhbzrmc').getValue();
				var ypqsrhbzrlx = mini.get('ypqsrhbzrlx').getValue();
				var ypqsrhbzrzjlx = mini.get('ypqsrhbzrzjlx').getValue();
				
				var ypqsrhbzrzjdm = e.value;
				if (ypqsrhbzrmc != oldYpqsrmc || ypqsrhbzrlx != oldYpqsrlx
						|| ypqsrhbzrzjlx != oldYpqsrzjlx
						|| ypqsrhbzrzjdm != oldYpqsrzjdm) {
					$.ajax({
						url : base + 'dgdb/checkYpqsrZjdm.nut?htid=' + htid
								+ '&ypqsrhbzrmc=' + ypqsrhbzrmc + '&ypqsrhbzrlx=' + ypqsrhbzrlx
								+ '&ypqsrhbzrzjlx=' + ypqsrhbzrzjlx + '&ypqsrhbzrzjdm='
								+ ypqsrhbzrzjdm,
						type : 'post',
						async : false,
						dataType : 'json',
						success : function(text) {
							if (!text) {
								e.errorText = "该证件代码已存在";
								e.isValid = false;
							}
						}
					});
				}

			}
		}
	}*/
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
			if (value == 000000000) {s
				e.errorText = '不能为特殊代码000000000';
				e.isValid = false;
			}
		} else {
			e.errorText = '组织机构代码必须为9位数字或字母(字母为大写)';
			e.isValid = false;
		}
	}
}

/**
 * 押品评估价值（或保证金额） 校验
 * 
 * @param e
 */
function yppgjzhbzjeValidate(e) {
	if (e.value != '') {
		if(e.isValid){
			if(e.value < 0){
				e.errorText = '为空或大于等于0';
				e.isValid = false;
			}
		}
	}
}

/**
 * 首次估值日期 校验
 * 
 * @param e
 */
function scgzrqValidate(e) {
	if (e.isValid) {
		var sjrq = parseInt(mini.get('sjrq').getValue());
		var date = parseInt(mini.get('scgzrq').getText());
		if (date > sjrq) {
			e.errorText = "首次估值日期应小于数据日期[" + sjrq + "]";
			e.isValid = false;
		}
	}
}

/**
 * 最新估值日期 校验
 * 
 * @param e
 */
function zxgzrqValidate(e) {
	if (e.value != '') {
		var sjrq = parseInt(mini.get('sjrq').getValue());
		var scgzrq = parseInt(mini.get('scgzrq').getText());
		var zxgzrq = parseInt(mini.get('zxgzrq').getText());
		if (zxgzrq >= scgzrq && zxgzrq <= sjrq) {
			e.isValid = true;
		} else {
			e.errorText = '最新估值日期应小于等于[' + sjrq + '],大于等于首次估值日期[' + scgzrq + ']';
			e.isValid = false;
		}
	}
}

/**
 * 估值到期日期校验
 * 
 * @param e
 */
function gzdqrqValidate(e) {
	if (e.isValid) {
		var zxgzrq = parseInt(mini.get('zxgzrq').getText());
		var gzdqrq = parseInt(mini.get('gzdqrq').getText());
		if (gzdqrq < zxgzrq) {
			e.errorText = '估值到期日期应大于最新估值日期[' + zxgzrq + ']';
			e.isValid = false;
		}
	}
}
//审批抵质押率和实际抵质押率
function spsjdzyl(e){
	var dbhtlx = mini.get('dbhtlx').getValue();
	if(dbhtlx == '1' || dbhtlx == '2'){
		if(e.value < 0){
			e.errorText = "必须大于等于0!";
			e.isValid = false;
		}
	}
	if(parseInt(dbhtlx)>2 && parseInt(dbhtlx) <7){
		if(e.value != '' && e.value != '0' && e.value !=null){
			e.errorText = "担保合同类型为3到6的,必须为空或者0!";
			e.isValid = false;
		}
	}
}
/**
 * 审批抵质押率校验 大于等于0
 * 
 * @param e
 */
function spdzylValidate(e) {
	if (e.value < 0) {
		e.errorText = '大于等于0';
		e.isValid = false;
	}
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

// function onDbhthChanged(e) {
// mini.get("dbhth").setValue(mini.get("htid").getText());
// }

function onCancel() {
	CloseWindow("cancel");
}