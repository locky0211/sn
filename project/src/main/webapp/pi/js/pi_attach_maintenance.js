/**
 * 
 */
var grid;
$(function(){
	grid=mini.get("reportImportGrid");
	grid.load();
})
function search(){
	var tableCode=mini.get("tableCode").getValue();
	grid=mini.get("reportImportGrid");
	grid.load({tableCode:tableCode});
}
function onErrorMsgRenderer(e){
	var val=e.value;
	if(val=='0'){
		return '还未导入';
	}else{
		return '已经导入';
	}
}
function showReportView(e){
	var grid=mini.get("reportImportGrid");
	var row=grid.getSelected();
	var id=row.id;
	mini.open({
		url : base + "pi/jsp/attachTableInfo.jsp?id="+id,
		title : "指标信息",
		iconCls : "icon-add",
		width : 800,
		height : 550,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad();
			}
		}

	});
}