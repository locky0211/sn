var formulaGrid;
var eastdata;
var samdata;
$(function(){
	formulaGrid=mini.get("#formulaGrid");
	formulaGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async: false,
		url: base+'sys/ggzd/getGgzdList.nut?groupId=EastTableName',
		success : function(text) {
			eastdata=text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async: false,
		url: base+'sys/ggzd/getGgzdList.nut?groupId=1104ReportName',
		success : function(text) {
			samdata=text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});
function onSamNameRenderer(e){
	for(var i=0;i<samdata.length;i++){
		if(samdata[i].zdValue==e.record.samTableName){
			return samdata[i].zdName;
		}
	}
	
}
function onEastNameRenderer(e){
	for(var i=0;i<eastdata.length;i++){
		if(eastdata[i].zdValue==e.record.eastTableName){
			return eastdata[i].zdName;
		}
	}
	
}
function add(){
	mini.open({
		url: base + '/sam/jsp/rd_formula_east.jsp',
		title:'校验公式维护',
		width:800,
		height:500,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function onRenderer(e){
	var s;
	if(e.record.formulaState=='1'){
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-stop">停用</span></a>';
	}else{
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-start">启用</span></a>';
	}
	s += '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(e){
	var e=formulaGrid.getSelected();
	mini.open({
		url:  base + 'rd/formula/east/getFormulaById.nut?id=' + e.id + '&page=/sam/jsp/rd_formula_east.jsp',
		title : '校验公式维护',
		width:800,
		height:500,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function del(){
	var e=formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				url: base+'rd/formula/east/deleteFormula.nut?id='+e.id,
				success : function(text) {
					if (text) {
							formulaGrid.removeRow(e,true);

					} else {
						mini.alert('操作失败!!', '提醒', function() {
						})
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
				});
	}else{
		mini.alert("请选择你要删除的记录!!");
	}
}

function chageState(){
	var e = formulaGrid.getSelected();
	//alert(JSON.stringify(e));
	var row = formulaGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'rd/formula/east/updateFormulaState.nut?id=' + e.id,
		success : function(text) {
			if (text.success) {
				formulaGrid.updateRow(row, text.data);
			} else {
				mini.alert('操作失败!!', '提醒', function() {
				})
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search(){
	formulaGrid.load(
			{
				eastTableName:mini.get('#eastTableName').getValue(),
				samTableName:mini.get('#samTableName').getValue(),
				formulaState : mini.get('#formulaState').getValue()
				});
}