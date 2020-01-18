var taskCycleGrid;
$(function() {
			taskCycleGrid = mini.get("taskCycleGrid");
			gridLoad();
		});

function gridLoad() {
	taskCycleGrid.load();
}

function addRow(e) {
	mini.open({
				url : base + "ts/jsp/ts_task_cycle.jsp",
				title : "新增任务周期",
				iconCls : "icon-add",
				width : 375,
				height : 212,
				allowResize : false,
				ondestroy : function(action) {
					taskCycleGrid.reload();
				}

			});
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}

function edit(row_uid) {
	var row = taskCycleGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + '/ts/toEditTaskCycle.nut?id=' + row.id
							+ '&page=/ts/jsp/ts_task_cycle.jsp',
					title : '任务周期编辑',
					iconCls : 'icon-edit',
					width : 375,
					height : 212,
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
	var row = taskCycleGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'ts/deleteTaskCycle.nut',
									data : {
										'id' : row.id
									},
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											taskCycleGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}
// 刷新
function reloads(e) {
	gridLoad();
}
