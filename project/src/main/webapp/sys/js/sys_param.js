var checkGrid;
var checkForm;
var checkTempGrid;

$(function() {
	checkGrid = mini.get("#checkGrid");
	checkTempGrid = mini.get("#checkTempGrid");
	checkGrid.load({
	});
	checkTempGrid.load({
	});
});

/**
 * 渲染按钮
 */
function onRenderer(e){
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(' + uid
			+ ')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:delRow(\'' + uid
			+ '\')"><span class="mini-button-text mini-button-icon icon-remove">删除</span></a>';
	return s;
}

/**
 * 新增参数配置
 */
function addParam(){
	mini.open({
		url : base + "sys/jsp/sys_param_m_insert.jsp",
		title : "新增参数",
		iconCls : "icon-add",
		width : 350,
		height : 230,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				checkGrid.load();
			}
		}
	});
}

/**
 * 编辑参数配置
 * @param row_uid
 */
function edit(row_uid) {
	var row = checkGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "sys/param/toEditSysParam.nut?id=" + row.id + '&page=/sys/jsp/sys_param_m.jsp',
					title : "编辑参数配置",
					width : 350,
					height : 280,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							checkGrid.reload();
							checkTempGrid.reload();
						}
					}
				});
	}
};

/**
 * 删除参数配置
 */
function delRow(row_uid) {
	var row = checkGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									url : base + "sys/param/delSysParam.nut?id=" + row.id,
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											checkGrid.removeRow(row);
										}
									}
								});
					}
				});
	}
};
