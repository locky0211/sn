var frkhdkGrid;
$(function() {
	frkhdkGrid = mini.get("frkhdkGrid");
	frkhdkGrid.load({khid:khjtxxId});  
});

function addDgdkmx() {
		mini.open({
			url : base + 'dkmx/toAddDgdkmx.nut?page=/dck/jsp/dsp_dgdkmx.jsp&khid=' + khjtxxId,
			title : "新增法人对公贷款明细",
			iconCls : "icon-add",
			width : 760,
			height : 600,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					frkhdkGrid.reload();
				}
			}
		});
}

function editDgdkmx(){
	var row = frkhdkGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'dkmx/toEditDgdkmx.nut?id='
					+ row.id + '&khid=' + khjtxxId + '&page=/dck/jsp/dsp_dgdkmx.jsp',
			title : "编辑法人对公贷款明细",
			iconCls : "icon-edit",
			width : 760,
			height : 600,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
						frkhdkGrid.reload();
				}
			}
		});
	} else {
		mini.alert('请先选择贷款明细!!');
	}
}

function delDgdkmx(){
	var row = frkhdkGrid.getSelected();
	if (row) {
		mini.confirm('确定删除!!', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					url : base + 'dkmx/delDgdkmx.nut?id=' + row.id,
					type : 'POST',
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							mini.alert('删除成功');
							frkhdkGrid.removeRow(row, true);
						}
					}
				});
			}
		});
	}else {
		mini.alert('请先选择贷款明细!!');
	}
}
