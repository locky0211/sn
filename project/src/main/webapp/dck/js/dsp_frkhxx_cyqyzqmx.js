var cyqyzqmxGrid;
$(function() {
	cyqyzqmxGrid = mini.get("cyqyzqmxGrid");
	cyqyzqmxGrid.load({khid:frkhxxId}); 
});

/**
 * 持有企业债券明细维护
 */
function addCyqyzqmx() {
	mini.open({
		url : base
				+ 'cyqyzqmx/toAddDspCyqyzqmx.nut?khlx=2&page=/dck/jsp/dsp_cyqyzqmx.jsp&khid='
				+ frkhxxId,
		title : "新增持有企业债券明细",
		iconCls : "icon-add",
		width : 660,
		height : 360,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				cyqyzqmxGrid.load({khid:frkhxxId}); 
			}
		}
	});
}

function editCyqyzqmx() {
	var row = cyqyzqmxGrid.getSelected();
	if (row) {
		mini.open({
			url : base
					+ 'cyqyzqmx/toEditDspCyqyzqmx.nut?page=/dck/jsp/dsp_cyqyzqmx.jsp&id='
					+ row.id,
			title : "修改持有企业债券明细",
			iconCls : "icon-edit",
			width : 660,
			height : 360,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					cyqyzqmxGrid.load({khid:frkhxxId}); 
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!');
	}
}

function delCyqyzqmx() {
		var row = cyqyzqmxGrid.getSelected();
		if (row) {
			mini.confirm('确定删除!!', '确定？', function(action) {
				$.ajax({
					url : base + 'cyqyzqmx/deleteDspCyqyzqmx.nut?id=' + row.id,
					type : 'post',
					dataType : 'json',
					success : function(data) {
						if (data) {
							mini.alert('删除成功!!', '提醒', function() {
								cyqyzqmxGrid.load({khid:frkhxxId}); 
							});
						} else {
							mini.alert('删除失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
			});
		} else {
			mini.alert('请先选中一条数据!!');
		}
}