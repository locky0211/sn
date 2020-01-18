$(function(){
	var grid=mini.get('reportImportGrid');
	var id=mini.get('id').getValue();
	grid.load({id:id});
})
function onCancel() {
	CloseWindow("cancel");
}

function showReportView(){
	var grid=mini.get('reportImportGrid');
	var row=grid.getSelected();
	var id=row.id;
	mini.open({
		url : base + 'pi/getAttachTableInfoById.nut?id=' + id + '&page=/pi/jsp/updateattachtable.jsp',
		title : "指标信息",
		iconCls : "icon-add",
		width : 350,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				var grid=mini.get('reportImportGrid');
				var id=mini.get('id').getValue();
				grid.load({id:id});
			}
		}

	});
}