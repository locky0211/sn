var taskListGrid;
$(function() {
			taskListGrid = mini.get("taskListGrid");
			gridLoad();
			tipInit();

		});
function tipInit() {
	var tip = new mini.ToolTip();
	tip.set({
				target : document,
				selector : '.showCellTooltip',
				onbeforeopen : function(e) {
					e.cancel = false;
				},
				onopen : function(e) {
					var el = e.element;
					tip.setContent(el.innerHTML);
				}
			});

}

function gridLoad() {
	taskListGrid.load();
}

function addRow(e) {
	mini.open({
				url : base
						+ "ts/toAddTaskList.nut?page=/ts/jsp/ts_task_list.jsp",
				title : "新增调度任务",
				iconCls : "icon-add",
				width : 575,
				height : 320,
				allowResize : false,
				ondestroy : function(action) {
					taskListGrid.reload();
				}

			});
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateTaskFlag(\''
			+ uid + '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.flag == '1') {
		s += 'icon-stop">停用';
	} else {
		s += 'icon-start">启用';
	}
	s += '</span></a><a class="mini-button mini-button-plain" href="javascript:edit(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}
function toUpdateTaskFlag(row_uid) {
	var row = taskListGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'ts/updateTaskFlag.nut',
				data : {
					'id' : row.id,
					'flag' : row.flag
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						taskListGrid.updateRow(row, data.data);
					}
				}
			});
}

function edit(row_uid) {
	var row = taskListGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + '/ts/toEditTaskList.nut?id=' + row.id
							+ '&page=/ts/jsp/ts_task_list.jsp',
					title : '调度任务编辑',
					iconCls : 'icon-edit',
					width : 575,
					height : 320,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							gridLoad();
						}
					}
				});
	}
}

function del(row_uid) {
	var row = taskListGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'ts/deleteTaskList.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											taskListGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}
function ondrawcell(e) {
	var field = e.field;
	var value = e.value;
	// 超链接任务
	if (field == "taskContent") {
		e.cellHtml = '<div class="mini-grid-cell-inner mini-grid-cell-nowrap showCellTooltip" data-placement="bottomleft">'
				+ value + '</div>';
	}
}
// 刷新
function reloads(e) {
	gridLoad();
}
