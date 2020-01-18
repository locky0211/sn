var grkhId;
$(function() {
	if(xzqhdm!=''){
		xzqhdm = renderer(xzqhdm,'xzqhdm');
		mini.get("zzxzqhdm").setValue(xzqhdm);
	}
	var grkhxxId = mini.get("grkhxxId").getValue();
	if(grkhxxId !=''){
		mini.get("brno").setReadOnly(true);
	}
});
function openChPage(url,width,height,title){
	if(url!=''){
		 mini.open({
				url :base + url,
				title : title,
				iconCls : "icon-edit",
				width : width,
				bodyStyle : "padding:0px 5px",
				height : height,
				allowResize : false,
				showMaxButton : true
			});
	}
};

function onAdd() {
	form = new mini.Form('#grkhxxForm');
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
					url : base + 'grdkwy/addOrUpdateGrdkwyqk.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										if (mini.get("grkhxxId").getValue() != '') {
											CloseWindow("ok");
										} else {
											var id = text.data;
											window.Owner.addGrkhxxRow(id);
											window.location.href = base + 'grdkwy/toEditGrdkwyqk.nut?id=' + id + '&page=/dck/jsp/dsp_grkhxx.jsp';
										}
									});
						} else {
							mini.alert(text.data, '提醒');
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

function beforXzqhdmselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false){
		e.cancel = true;
	}else{
		mini.get("xzqhdmIpt").setValue(e.node.zdValue);
		//mini.get('khzz').setValue(e.node.zdName);
		//ddd(e.node);
		
	}
}
function ddd(node){
	var pNode=mini.get('zzxzqhdm').getParentNode(node);
	if (pNode.zdName) {
		mini.get('khzz').setValue(pNode.zdName+mini.get('khzz').getValue());
		ddd(pNode);
	}
}

//最近一次还款日期
function zjychkrqValid(e){
	var ffrq = parseInt(mini.get("ffrq").getText());
	if(isDate(e.value)==false){
		e.errorText = '日期不规范';
		e.isValid = false;
	}else{
		if(mini.get("zjychkje")>0&&e.value == ''){
			e.errorText = '最近一次还款金额大于0,则不能为空!!!';
			e.isValid = false;
		}
		if(parseInt(e.value)<ffrq){
			e.errorText = '不能小于发放日期!!!!!';
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
		mini.get('zjychkrq').setRequired(true);
	} else {
		mini.get('zjychkrq').setValue('');
		mini.get('zjychkrq').setRequired(false);
		mini.get('zjychkrq').setReadOnly(true);
	}
}
function wytsValid(e) {
	if (parseInt(e.value) < 90) {
		e.errorText = "违约天数必须大于90天";
		e.isValid = false;
	} else if (mini.get('ffrq').getValue() != '' && mini.get('sjrq').getValue() != '') {
		var days = DateDiff(mini.get('ffrq').getValue().toString("yyyy-MM-dd"), Date.parseExact(mini.get('sjrq').getValue(), 'yyyyMMdd').toString("yyyy-MM-dd"));
		if (e.value > days) {
			e.errorText = "天数应该小于等于[数据日期]-[发放日期]=" + days + "天";
			e.isValid = false;
		}
	}
}
/**
 * 发放金额大于0
 * 
 * @param e
 */
function ffjeValid(e) {
	if (parseFloat(e.value) <= 0) {
		e.errorText = "金额必须大于0";
		e.isValid = false;
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
/**
 * 贷款余额若非空则大于等于0;小于等于[发放金额]
 * 
 * @param e
 */
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
/**
 * 8位数字日期格式；非空;[数据日期]-[发放日期]>=90
 * 
 * @param e
 */
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
function beforegbdmselectjt(e) {
	if (e.isLeaf == false) {
		e.cancel = true;
	} else {
		mini.get("jtxzqhdmIpt").setValue(e.node.zdValue);
		mini.get('dksjtzz').setValue(e.node.zdName);
		addjt(e.node);

	}
};

function beforegbdmselect(e) {
	if (e.isLeaf == false) {
		e.cancel = true;
	} else {
		mini.get("xzqhdmIpt").setValue(e.node.zdValue);
		mini.get('xxdz').setValue(e.node.zdName);
		addxx(e.node);

	}
}
function addxx(node) {
	var pNode = mini.get('xxxzqhdm').getParentNode(node);
	if (pNode.zdName) {
		mini.get('xxdz').setValue(pNode.zdName + mini.get('xxdz').getValue());
		addxx(pNode);
	}
}
function addjt(node) {
	var pNode = mini.get('jtxzqhdm').getParentNode(node);
	if (pNode.zdName) {
		mini.get('dksjtzz').setValue(pNode.zdName + mini.get('dksjtzz').getValue());
		addjt(pNode);
	}
}
/**
 * 若贷款品种为“5-助学贷款”，则学校行政区划代码非空； 若非空则存在于选项中
 * 
 * @param e
 */
function dklxvalidat(e) {
	if (parseInt(e.value) == 5) {
		mini.get('xxxzqhdm').setRequired(true);
		mini.get('zxdklx').setRequired(true);
		mini.get('xxmc').setRequired(true);
		mini.get('xxdz').setRequired(true);
	} else {
		mini.get('xxxzqhdm').setRequired(false);
		mini.get('zxdklx').setRequired(false);
		mini.get('xxmc').setRequired(false);
		mini.get('xxdz').setRequired(false);
	}
}

/**
 * 若[助学贷款类型]为“1-高校政策性助学贷款”或“2-高校商业助学贷款”，学生证号则非空 若[助学贷款类型]为'3-生源地政策性助学贷款’，
 * ‘4-生源地商业助学贷款'，贷款是家庭住址 则非空；若非空则长度大于等于2个字符；必须符合地址校验规则
 */
function zxdklxvalidat(e) {
	var value = parseInt(e.value);
	if (value == 1 || value == 2) {
		mini.get('xszh').setRequired(true);//学生证号
		mini.get('dksjtzz').setRequired(false);//贷款时家庭住址
		mini.get('jtxzqhdm').setRequired(false);
	} else if (value == 3 || value == 4) {
		mini.get('jtxzqhdm').setRequired(true);
		mini.get('dksjtzz').setRequired(true);
		mini.get('xszh').setRequired(false);
	} else {
		mini.get('xszh').setRequired(false);
		mini.get('jtxzqhdm').setRequired(false);
		mini.get('dksjtzz').setRequired(false);
	}
}
function onCancel() {
	CloseWindow("cancel");
}