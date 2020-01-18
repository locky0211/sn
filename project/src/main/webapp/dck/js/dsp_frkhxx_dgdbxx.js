var frkhdbGrid;
$(function() {
	frkhdbGrid = mini.get("frkhdbGrid");
	frkhdbGrid.load({khid:khjbxxId}); 
});

function addFrkhdb() {
	mini.open({
		url : base + 'dgdb/toAddDgdb.nut?khlx=2&page=/dck/jsp/dsp_frkhdb.jsp&khid=' + khjbxxId,
		title : "新增法人客户担保明细",
		iconCls : "icon-add",
		width : 740,   
		height : 400,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				frkhdbGridLoad(khjbxxId);
			}
		}
	});
}

function editFrkhdb() {
	var row = frkhdbGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'dgdb/toEditDgdb.nut?id=' + row.id + '&page=/dck/jsp/dsp_frkhdb.jsp',
			title : "编辑法人客户担保明细",
			iconCls : "icon-edit",
			width : 700,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					frkhdbGridLoad(khjbxxId);
				}
			}
		});
	} else {
		mini.alert('请先选择担保明细!!');
	}
}

function delFrkhdb() {
		var row = frkhdbGrid.getSelected();
		if (row) {
			mini.confirm('确定删除!!', '确定？', function(action) {
				if (action == 'ok') {
					$.ajax({
						url : base + 'dgdb/deleteDgdb.nut?id=' + row.id,
						type : 'POST',
						dataType : 'json',
						success : function(data) {
							if (data) {
								mini.alert('删除成功');
								frkhdbGrid.removeRow(row, true);
							}
						}
					});
				}
			});
		} else {
			mini.alert('请先选择担保明细!!');
		}
}

function frkhdbGridLoad(khjbxxId) {
		frkhdbGrid.load({
			khid : khjbxxId 
		});
}