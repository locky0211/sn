var sxqkGrid;
$(function() {
	sxqkGrid = mini.get("sxqkGrid");
	sxqkGrid.load({khid:khjtxxId}); 
});

/**
 * 新增法人客户授信信息
 * 
 */
function addSxqk() {
	mini.open({
		url : base + 'sxqk/toAddSxqk.nut?khlx=2&page=/dck/jsp/dsp_sxqk.jsp&khid=' + khjtxxId,
		title : "新增法人客户授信信息",
		iconCls : "icon-add",
		width : 800, 
		height : 550,  
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				sxqkGrid.load({khid:khjtxxId}); 
			}
		}
	});
}

/**
 * 修改法人客户授信情况
 */
function editSxqk() {
	var row = sxqkGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'sxqk/toEditSxqk.nut?id=' + row.id + '&page=/dck/jsp/dsp_sxqk.jsp',
			title : '修改法人客户授信信息',
			iconCls : 'icon-edit',
			width : 800,
			height : 550,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					sxqkGrid.load({khid:khjtxxId}); 
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function toHFrsxqkView() {
	var row = sxqkGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'sxqk/getHCrsxqk.nut?id=' + row.id + '&page=/dck/jsp/dsp_sxqk.jsp',
			title : '历史授信情况',
			iconCls : 'icon-edit',
			width : 800,
			height : 550,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

/**
 * 删除授信信息
 */
function delSxqk() {
		var row = sxqkGrid.getSelected();
		if (row) {
			mini.confirm('授信删除后,关联业务信息也将被删除!!', '确定？', function(action) {
				if (action == 'ok') {
					$.ajax({
						type : 'POST', 
						url : base + 'sxqk/delFrkhSxqk.nut',
						data : {
							'id' : row.id
						},
						dataType : 'json',
						success : function(data) {
							if (data) {
								sxqkGrid.load({khid:khjtxxId}); 
							}
						}
					});
				}
			});
		} else {
			mini.alert('请先选中一条数据!!', '提醒');
		}
}