var taskListGrid;
$(function() {
			taskListGrid = mini.get("taskListGrid");
			gridLoad();
});

function gridLoad() {
	taskListGrid.load();
}

function addRow(e) {
	mini.open({
				url : base + 'ews/jsp/east_task.jsp',
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
	s += '</span></a><a class="mini-button mini-button-plain" href="javascript:doManual()"><span class="mini-button-text  mini-button-icon icon-system">手工执行'
	s += '</span></a><a class="mini-button mini-button-plain" href="javascript:edit(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}

function doManual() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'east/task/doImportData.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if(text){
			gridLoad();
			mini.unmask(document.body);
			mini.alert("手工执行成功!!");
			}else{
				mini.unmask(document.body);
				mini.alert("手工执行失败");
			}
		},
		beforeSend : function(xhr) {

		}
	});
}

function onRendererType(e) {
		if (e.value == '1') {
			return 'Windows';
		}
		else {
			return 'Linux';
		}
}

function toUpdateTaskFlag(row_uid) {
	var row = taskListGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'east/task/updateTaskFlag.nut',
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
					url : base + 'east/task/toEditTaskList.nut?id=' + row.id
							+ '&page=/ews/jsp/east_task.jsp',
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
									url : base + 'east/task/deleteTaskList.nut',
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
