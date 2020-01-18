var bwywmxGrid;
$(function() {
	bwywmxGrid = mini.get("bwywmxGrid");
	bwywmxGridLoad();
});

/**
 * 表外合同维护
 */
function addBwywmx() {
	mini.open({
		url : base + 'bwyw/toAddDspBwywmx.nut?page=/dck/jsp/dsp_bwywmx.jsp&khid=' + khjtxxId,
		title : "新增法人客户表外业务信息",
		iconCls : "icon-add",
		width : 600,
		height : 330,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				bwywmxGrid.load({khid:khjtxxId}); 
			}
		}
	});
}

function editBwywmx() {
	var row = bwywmxGrid.getSelected();   
	if (row) {
		mini.open({
			url : base + 'bwyw/toEditDspBwywmx.nut?id=' + row.id + '&page=/dck/jsp/dsp_bwywmx.jsp',
			title : '修改法人客户表外业务信息',
			iconCls : 'icon-edit',
			width : 600,
			height : 330,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					bwywmxGrid.load({khid:khjtxxId}); 
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function delBwywmx() {
	var row = bwywmxGrid.getSelected();
	if (row) {
		mini.confirm('表外业务信息将被删除!!', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + 'bwyw/deleteDspBwywmx.nut',
					data : {
						'id' : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data) {
							mini.alert('删除成功');
							bwywmxGrid.removeRow(row, true);
						}
					}
				});
			}

		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function bwywmxGridLoad(htid){
		bwywmxGrid.load({
			khid : khjtxxId
		});
}