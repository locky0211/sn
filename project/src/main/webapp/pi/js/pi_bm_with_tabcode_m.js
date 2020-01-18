var bmWithTabcodeGrid;
$(function() {
	bmWithTabcodeGrid = mini.get("bmWithTabcodeGrid");
	bmWithTabcodeGrid.load();
})

function add() {
	mini.open({
		url : base + "pi/jsp/pi_bm_with_tabcode.jsp",
		title : "新增部门报表关系",
		iconCls : "icon-excel",
		width : 400,
		height : 200,
		allowResize : false,
		showMaxButton : false,
		ondestroy : function(action) {
			gridLoad();
		}
	});
}

function gridLoad() {
	bmWithTabcodeGrid.load();
}

function onRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\''
			+ e.value
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del(\''
			+ e.value
			+ '\')"><span class="mini-button-text  mini-button-icon icon-cancel">删除</span></a>';
	return s;
}

function edit(id) {
	mini.open({
		url : base + 'pi/bmWithTabCode/edit.nut?id=' + id
				+ '&page=/pi/jsp/pi_bm_with_tabcode.jsp',
		title : '校验公式修改',
		iconCls : 'icon-edit',
		width : 400,
		height : 200,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				gridLoad()
			}
		}
	});
}

function del(id) {
	mini.confirm('确定删除？删除后无法恢复!', '确定？', function(action) {
		if (action == 'ok') {
			$.ajax({
				type : 'POST',
				url : base + 'pi/bmWithTabCode/del.nut',
				data : {
					id : id
				},
				dataType : 'json',
				success : function(data) {
					if (data) {
						gridLoad()
					}
				}
			});
		}
	});
}

function search(){
	bmWithTabcodeGrid.load({
		bm : mini.get("bm").getValue(),
		tabcode : mini.get("tabcode").getValue()
	})
}
