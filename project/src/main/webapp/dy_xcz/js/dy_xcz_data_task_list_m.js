var taskListGrid;
$(function() {
			taskListGrid = mini.get("taskListGrid");
			gridLoad();
			tipInit();
			$.ajax({
				url : base + 'sys/ggzd/getGgzdList.nut?groupId=DM_TASK_DATA_SOURCE',
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text != null) {
						reportTypeArr = text;
					}
				}
			});

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

function onAutoRenderer(e) {
	var value = e.value;
	if (value == '1') {
		return "自动运行";
	}else{
		return "非自动运行";
	}
}

function onTypeRenderer(e){
	var value = e.value;
	if (value == 'L') {
		return "数据载入";
	}else if(value == 'E'){
		return "数据转化";
	}else{
		return "数据导入";
	}
}

function onSourceRenderer(e){
	var row = e.row;
	for (var index = 0; index < reportTypeArr.length; index++) {
		if (reportTypeArr[index].zdValue == e.value) {
			return reportTypeArr[index].zdName;
		}
	}
}

function gridLoad() {
	taskListGrid.load();
}

function addRow(e) {
	mini.open({
		url : base
				+ "dy_xcz/dm/toAddDataTaskList.nut?page=/dy_xcz/jsp/dy_xcz_data_task_list.jsp",
		title : "新增处理任务",
		iconCls : "icon-add",
		width : 575,
		height : 520,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				reloads();
			}
		}

	});
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toUpdateTaskFlag(\''
			+ uid + '\')"><span class="mini-button-text  mini-button-icon ';
	if (record.taskFlag == '1') {
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
				url : base + 'dy_xcz/dm/updateDataTaskFlag.nut',
				data : {
					'id' : row.id,
					'flag' : row.taskFlag
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
					url : base + 'dy_xcz/dm/toEditDataTask.nut?id=' + row.id
							+ '&page=/dy_xcz/jsp/dy_xcz_data_task_list.jsp',
					title : '调度处理任务',
					iconCls : 'icon-edit',
					width : 575,
					height : 520,
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
		mini.confirm('删除后可能影响数据处理正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'dy_xcz/dm/deleteDataTask.nut',
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

function search() {
	taskListGrid.load({
				taskName : mini.get("taskName").getValue()
			});
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
