var checkFormulaGrid;
$(function() {
			checkFormulaGrid = mini.get('checkFormulaGrid');
			gridLoad();
		});
function gridLoad() {
	checkFormulaGrid.load();
}


function onValidRenderer(e) {
	if (e.value == 'y') {
		return '启用';
	}
	return '<font color="red">停用</font>';
}
 function onCheckRiskRendeder(e){
	 if(e.value == '1'){
		 return '<font color="red">等级一</font>';
	 }else if(e.value == '2'){
		 return '<font color="blue">等级二</font>';
	 }else {
		 return '<font color="green">等级三</font>';
	 }
 }
 
 function onUserRenderer(e) {
		if (e.value == 'admin') {
			return '<font color="blue">公共库</font>';
		} else if(e.value == '197'){
			return '<font color = "red">197号文</font>'
		}else{
			e.rowStyle = "background:#FFFF66";
			return '<font color="blue">自定义</font>';
		}
	}
 
 
function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateCheckFormulaStatus(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.validFlag == 'y') {
		s += 'icon-stop">停用';
	} else {
		s += 'icon-start">启用';
	}
	s += '</span></a>';
	return s;
}

function toUpdateCheckFormulaStatus(row_uid) {
	var row = checkFormulaGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'dy_xcz/check/wave/updateCheckFormulaStatus.nut',
				data : {
					'id' : row.id,
					'validFlag' : row.validFlag
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						checkFormulaGrid.updateRow(row, data.data);
					}
				}
			});
}

function addCheckFormula(e) {
	mini.open({
				url : base + "dy_xcz/jsp/dy_check_formula_wave.jsp",
				title : "新增校验公式",
				iconCls : "icon-add",
				width : 530,
				height : 420,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					checkFormulaGrid.reload();
				}
			});
}

function edit() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.open({
					url : base + 'dy_xcz/check/wave/toEditCheckFormulaCS.nut?id=' + row.id + '&page=/dy_xcz/jsp/dy_check_formula_wave.jsp',
					title : '校验公式修改',
					iconCls : 'icon-edit',
					width : 530,
					height : 420,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						checkFormulaGrid.reload();
					}
				});
	}
}

function updateRow(row) {
	$.ajax({
				type : 'POST',
				url : base + 'dy_xcz/check/wave/fetchCheckFormulaWave.nut',
				data : {
					'id' : row.id
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						checkFormulaGrid.updateRow(row, data);
					}
				}
			});
}

function del() {
	var row = checkFormulaGrid.getSelected();
	if (row) {
		mini.confirm('确定删除？删除后无法恢复!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'dy_xcz/check/wave/deleteCheckFormulaCS.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											checkFormulaGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}

function search() {
	checkFormulaGrid.load({
				tabcode : mini.get("tabcode").getValue(),
				checkProject : mini.get("checkProject").getValue(),
				checkRisk : mini.get("checkRisk").getValue()
			});
}

// 刷新
function reloads(e) {
	gridLoad();
}

//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function onRateRendeder(e){
	var value=e.value;
	var rate="";
	if(value.indexOf("1")>-1){
		rate+= "上月,";
	}
	if(value.indexOf("2")>-1){
		rate+= "上季,";
	}
	if(value.indexOf("3")>-1){
		rate+= "半年,";
	}
	if(value.indexOf("4")>-1){
		rate+= "去年同期,";
	}
	if(value.indexOf("5")>-1){
		rate+= "上半年度,";
	}
	if(value.indexOf("6")>-1){
		rate+= "下半年度,";
	}
	if(value.indexOf("7")>-1){
		rate+= "前三季度,";
	}
	if(value.indexOf("8")>-1){
		rate+= "第四季度,";
	}
	rate=rate.substring(0,rate.length-1);
	return rate;
}

function doAutoInsert(){
	mini.open({
		url : base + "dy_xcz/jsp/dy_table_list_cs.jsp",
		title : '查看执行步骤',
		iconCls : 'icon-edit',
		width : 800,
		height : 500,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			checkFormulaGrid.reload();
		}
	});
}

function showTab(iid, text, url) {
	var checkArea = '0';
	var tabs = window.top['_CACHE'];
	var id = "tab$" + iid;
	var tab = tabs.getTab(id);
	if (!tab) {
		tab = {};
		tab.name = id;
		tab.title = text;
		tab.showCloseButton = true;
		tabs.addTab(tab);
	}
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}
