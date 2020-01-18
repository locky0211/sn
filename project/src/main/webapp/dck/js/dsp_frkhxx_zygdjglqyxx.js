var gdjglqyGrid;
$(function() {
	gdjglqyGrid = mini.get("gdjglqyGrid");
		gdjglqyGrid.load({
			khid:frkhxxId
			});
});

/**
 * 股东及关联企业维护
 */
function addZygdjglqy() {
	mini.open({
		url : base + 'zygdjglqy/toAddGdjqyxx.nut?khlx=2&page=/dck/jsp/dsp_zygdjglqyxx.jsp&khid='
				+ frkhxxId,
		title : "新增股东及关联企业",
		iconCls : "icon-add",
		width : 750,
		height : 500,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				gdjglqyGrid.load({khid:frkhxxId
				}); 
			}
		}
	});
}

function editZygdjglqy() {
	var row = gdjglqyGrid.getSelected();
	if (row) {
		mini
		.open({
			url : base + 'zygdjglqy/toEditZygdjglqy.nut?id='
					+ row.id+'&page=/dck/jsp/dsp_zygdjglqyxx.jsp?',
			title : "修改股东及关联企业",
			iconCls : "icon-edit",
			width : 750,
			height : 500,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					gdjglqyGrid.load({khid:frkhxxId
					}); 
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!');
	}
}

function deleteZygdjglqy() {
	var row = gdjglqyGrid.getSelected();
	if (row) {
		mini.confirm('确定删除!!', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					url : base + 'zygdjglqy/delZygdjglqy.nut?id=' + row.id,
					type : 'post',
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							mini.alert('删除成功!!', '提醒', function() {
								gdjglqyGrid.load({khid:frkhxxId
								}); 
							});
						} else {
							mini.alert('删除失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
			}
		});
	} else {
		mini.alert('请先选中一条数据!!');
	}
}