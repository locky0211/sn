$(function(){
	if(xzqhdm!=''){
		xzqhdm = renderer(xzqhdm,'xzqhdm');
		mini.get("xzqhdmMc").setValue(xzqhdm);
	}
	if(fxyjxh!=''){
		fxyjxh = fxyjxh.replace(/;/gm,','); 
		mini.get("fxyjxh").setValue(fxyjxh);
	}
	if(gzsj!=''){
		gzsj = gzsj.replace(/;/gm,',');
		mini.get("gzsj").setValue(fxyjxh);
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
}

/**
 * 处理国别代码和国别名称
 * 
 * @param e
 */
function beforegbdmselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false) {
		e.cancel = true;
	} else {
		mini.get("gbdm").setValue(e.node.zdValue);
		mini.get("gbmc").setValue(e.node.zdName);
	}
	var node = e.node;
	var value = node.zdValue;
	if (value != '') {
		if(value != 'CHN'  && value !='TWN' && value !='HKG' && value !='MAC'){
			mini.get('').setValue('999999');
			mini.get('khsshymc').setReadOnly(true);
			mini.get('xzqhdmMc').setReadOnly(true);
			mini.get('khsshymc').setValue('99999');
			mini.get('khsshydm').setValue('99999');
			mini.get('khmc').setValue('*********');
			mini.get('khmc').setReadOnly(true);
		}else{
			if(mini.get('khmc').getValue() == '*********'){
				mini.get('khmc').setValue('');
				mini.get('khmc').setReadOnly(false);
				mini.get('khsshymc').setReadOnly(false);
				mini.get('xzqhdmMc').setReadOnly(false);
			}
			var xzqhdm = mini.get('xzqhdm').getValue();
			if(xzqhdm == '999999'){
				mini.get('xzqhdm').setValue('');
			}
			mini.get('khsshymc').setReadOnly(false);
			var khsshydm = mini.get('khsshydm').getValue();
			if(khsshydm == '99999'){
				mini.get('khsshydm').setValue('');
			}
		}
		mini.get('zzjgdm').setRequired(true);
		mini.get('zzjgdm').setIsValid(true);
	}
}

/**
 * 处理客户所属行业代码
 * @param e
 */
function beforekhsshymcselect(e){
	if (e.isLeaf == false) {
		e.cancel = true;
	} else {
		mini.get('khsshydm').setValue(e.node.zdValue);
	}
}

/**
 * 处理注册地址和行政区划代码
 * 
 * @param node
 */
function beforXzqhdmselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false) {
		e.cancel = true;
	} else {
		mini.get("xzqhdmMc").setValue(e.node.zdValue);
		mini.get("xzqhdm").setValue(e.node.zdValue);
		//mini.get('zcdz').setValue(e.node.zdName);
		//pjdz(e.node);

	}
}

function pjdz(node) {
	var pNode = mini.get('xzqhdmMc').getParentNode(node);
	if (pNode.zdName) {
		mini.get('zcdz').setValue(pNode.zdName + mini.get('zcdz').getValue());
		pjdz(pNode);
	}
}

/**
 * 新增或修改法人客户基本信息
 */
function onAdd() {
	form = new mini.Form('#frkhxxForm');
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
			url : base + 'frkh/addOrUpdateFrkhxx.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(text) {
				if (text) {
					mini.alert('操作成功!!', '提醒', function() {
						if (mini.get("frkhxxId").getValue() != '') {
							CloseWindow("ok");
						} else {
							var id = text.data;
							window.Owner.addFrkhxxRow(id);
							window.location.href = base
									+ 'frkh/toEditFrkhxx.nut?id=' + id
									+ '&page=/dck/jsp/dsp_frkhxx.jsp';
						}
					});
				} else {
					mini.alert(JSON.stringify(text.data), '提醒');
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

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}

function onCancel() {
	window.CloseOwnerWindow();
}
