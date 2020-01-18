/**
 * 
 */
$(function(){
	var tip = new mini.ToolTip();
	tip.set({
				target : document,
				selector : '[errorMsg], [title]'
			});
	gridLoad();
})
function addMainTable(){
	mini.open({
		url : base + "pi/jsp/tableInfoAdd.jsp",
		title : "新增主表",
		iconCls : "icon-add",
		width : 400,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}

	});
}
function gridLoad(){
	var grid=mini.get("reportImportGrid");
	grid.load();
}
function onErrorMsgRenderer(e){
	var val=e.value;
	if(val=='0'){
		return '还未导入';
	}else{
		return '已经导入';
	}
}
function showReportView(){
	var grid=mini.get("reportImportGrid");
	var row=grid.getSelected();
	var id=row.id;
	mini.open({
		url : base + "pi/getTableInfo.nut?id="+id,
		title : "主表维护",
		iconCls : "icon-add",
		width : 400,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}

	});
}
function delMainTables(){
	var grid=mini.get("reportImportGrid");
	var row=grid.getSelected();
	if(row==null){
		mini.alert("请选定一个主表",'提醒');
		return;
	}
	mini.confirm("是否确认删除?","提醒",function(action){
		if(action=='ok'){
			delMainTable();
		}else{
			
		}
	});
}

function delMainTable(){
	var grid=mini.get("reportImportGrid");
	var row=grid.getSelected();
	var id=row.id;
	$.ajax({
		url : base + 'pi/delMainTable.nut',
		type : 'post',
		dataType : 'json',
		data : {id:id},
		cache : false,
		success : function(text) {
			mini.alert(text.data, '提醒');
		    gridLoad();
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}
function onRenderer(e){
	var record = e.record;
	var uid = record._uid;
	var s='<a class="mini-button mini-button-plain" href="javascript:onin(\''+uid+'\')"><span class="mini-button-text  mini-button-icon icon-add">导入模板</span>';
    return s;
}
function onin(uid){
	var row=mini.get("reportImportGrid").getRowByUID(uid);
	mini.open({
		url : base + 'pi/jsp/piReportIn.jsp?id='+row.id,
		title : "导入模板", 
		iconCls : "icon-add",
		width : 415,
		height : 130,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				mini.get("reportImportGrid").reload();
			}
		}
	});
}
