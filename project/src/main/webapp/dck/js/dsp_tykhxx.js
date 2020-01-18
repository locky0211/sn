var tykhsxqkGrid;
var oldJgdm;
var oldKhdm;
var oldzzjgdm; 
var tykhId;
$(function() {
	tykhId = mini.get("tykhxxId").getValue();
	tykhsxqkGrid = mini.get("tykhsxqkGrid");
	loadtykhsxqkGrid();
	if(tykhId != ''){
		oldJgdm = mini.get("brno").getValue();
		oldKhdm = mini.get("khdm").getValue();
		oldzzjgdm = mini.get("zzjgdm").getValue();
	}
});

function loadtykhsxqkGrid() {
	if(tykhsxqkGrid != undefined){
		tykhsxqkGrid.load({khid:tykhId}); 
		
	}
}

/**
 * 新增同业客户信息
 */
function onAdd() {
	form = new mini.Form('#tykhxxForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
			url : base + 'tykh/addOrUpdateTykhxx.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!!', '提醒', function() {
						if (mini.get("tykhxxId").getValue() != '') {
							CloseWindow("ok");
						} else {
							var id = text.data;
							window.Owner.addTykhxxRow(id);
							window.location.href = base
									+ 'tykh/toEditTykhxx.nut?id=' + id
									+ '&page=/dck/jsp/dsp_tykhxx.jsp';
						}
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
			var jgdm = mini.get('brno').getValue();
			var khdm = e.value;
			if(khdm != oldKhdm || jgdm != oldJgdm){
				$.ajax({
					url : base + 'tykh/checkKhdm.nut?jgdm=' + jgdm + '&khdm='
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
 * 新增同业客户授信信息
 * 
 */
function addTykhSxqk() {
	mini.open({
		url : base + 'sxqk/toAddSxqk.nut?khlx=3&page=/dck/jsp/dsp_sxqk.jsp&khid='
				+ mini.get("tykhxxId").getValue(),
		title : "新增同业客户授信信息",
		iconCls : "icon-add",
		width : 800,
		height : 400,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				loadtykhsxqkGrid();
			}
		}
	});
}

/**
 * 修改同业客户授信情况
 */
function editTykhSxqk() {
	var row = tykhsxqkGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'sxqk/toEditSxqk.nut?id=' + row.id
					+ '&page=/dck/jsp/dsp_sxqk.jsp',
			title : '修改同业客户授信信息',
			iconCls : 'icon-edit',
			width : 800,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					loadtykhsxqkGrid();
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

/**
 * 删除授信信息
 */
function delTykhSxqk() {
		var row = tykhsxqkGrid.getSelected();
		if (row) {
			mini.confirm('授信删除后,关联业务信息也将被删除!!', '确定？', function(action) {
				if (action == 'ok') {
					$.ajax({
						type : 'POST',
						url : base + 'sxqk/deleteDspSxqk.nut',
						data : {
							'id' : row.id
						},
						dataType : 'json',
						success : function(data) {
							if (data) {
								tykhsxqkGrid.removeRow(row, true);
								loadtykhsxqkGrid();
							}
						}
					});
				}

			});
		} else {
			mini.alert('请先选中一条数据!!', '提醒');
		}
}

function addSxqkDataGridRow(rowData) {
	tykhsxqkGrid.addRow(rowData, 0);
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
	}
	var node = e.node;
	var value = node.zdValue;
	if (value != 'CHN') {
		mini.get('khmc').setValue('*********');
		mini.get('khmc').setReadOnly(true);
	} else {
		if (mini.get('khmc').getValue() == '*********') {
			mini.get('khmc').setValue('');
			mini.get('khmc').setReadOnly(false);
		}
	}
}

/**
 * 验证组织机构代码
 * 
 * @param e
 */
function zzjgdmValid(e) {
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
	if(e.isValid){
		var jgdm = mini.get('brno').getValue();
		if(value != oldzzjgdm || jgdm != oldJgdm){
			$.ajax({  
				url : base + 'tykh/checkZzjgdm.nut?jgdm=' + jgdm + '&zzjgdm='
						+ value,
				type : 'post',
				async : false,
				dataType : 'json', 
				success : function(text) {
					if(!text){
						e.errorText = "该组织机构代码已存在";
						e.isValid = false;
					}
				}
			});
		}
	}
}

function onCancel() {
	CloseWindow("cancel");
}
//若为同业客户则为空或0,否则大于等于0
function tykhyeValid(e){
	if (parseFloat(e.value) < 0) {
		e.errorText = "金额必须大于等于0";
		e.isValid = false;
	}
}