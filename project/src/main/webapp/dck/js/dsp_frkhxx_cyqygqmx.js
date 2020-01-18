var cyqygqmxGrid;
$(function() {
	cyqygqmxGrid = mini.get("cyqygqmxGrid");
	cyqygqmxGrid.load({khid:frkhxxId}); 

});

/**
 * 持有企业股权明细维护
 */
function addCyqygqmx() {
	mini.open({
		url : base
				+ 'cyqygqmx/toAddDspCyqygqmx.nut?khlx=2&page=/dck/jsp/dsp_cyqygqmx.jsp&khid='	+ frkhxxId,
		title : "新增持有企业债券明细",
		iconCls : "icon-add",
		width : 350,
		height : 320,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				cyqygqmxGrid.load({khid:frkhxxId}); 
			}
		}
	});
}


function editCyqygqmx() {
	var row = cyqygqmxGrid.getSelected();
	if (row) {
		mini.open({
			url : base
					+ 'cyqygqmx/toEditDspCyqygqmx.nut?page=/dck/jsp/dsp_cyqygqmx.jsp&id='
					+ row.id,
			title : "修改持有企业债券明细",
			iconCls : "icon-edit",
			width : 350,
			height : 320,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					cyqygqmxGrid.load({khid:frkhxxId}); 
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!');
	}
}

function delCyqygqmx() {
		var row = cyqygqmxGrid.getSelected();
		if (row) {
			mini.confirm('确定删除!!', '确定？', function(action) {
				$.ajax({
					url : base + 'cyqygqmx/deleteDspCyqygqmx.nut?id=' + row.id,
					type : 'post',
					dataType : 'json',
					success : function(data) {
						if (data) {
							mini.alert('删除成功!!', '提醒', function() {
								cyqygqmxGrid.load({khid:frkhxxId});
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