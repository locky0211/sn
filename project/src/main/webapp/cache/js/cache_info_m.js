var cacheInfoGrid;
$(function() {
			cacheInfoGrid = mini.get("cacheInfoGrid");
			gridLoad();
		});

function gridLoad() {
	cacheInfoGrid.load();
}

function doCacheInit() {
	var rows = cacheInfoGrid.getSelecteds();
	if (rows.length > 0) {
		var dataStr = '';
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			dataStr = dataStr + row.beanName + ";";
		}
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					type : "POST",
					url : base + "cache/doCacheInfoInit.nut",
					data : "beanNames=" + dataStr.substring(0, dataStr.length - 1),
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							mini.alert("处理成功!!");
						}
						gridLoad();
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}
}

function addRow(e) {
	mini.open({
				url : base + "cache/jsp/cache_info.jsp",
				title : "新增缓存任务",
				iconCls : "icon-add",
				width : 375,
				height : 270,
				allowResize : false,
				ondestroy : function(action) {
					if (action == 'ok') {
						gridLoad();
					}
				}

			});
}
function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}

function onErrorMsgRenderer(e) {
	if (e.value == '执行成功') {
		return e.value;
	} else {
		return '<font color="red">' + e.value + '</font>';
	}
}

function edit(row_uid) {
	var row = cacheInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'cache/toEditCacheInfo.nut?beanName=' + row.beanName + '&page=/cache/jsp/cache_info.jsp',
					title : '缓存信息编辑',
					iconCls : 'icon-edit',
					width : 375,
					height : 270,
					allowResize : false,
					ondestroy : function(action) {
						if (action == 'ok') {
							gridLoad();
						}
					}
				});
	}
}

function search() {
	cacheInfoGrid.load({
				beanName : mini.get("beanName").getValue()
			});
}
function del(row_uid) {
	var row = cacheInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'cache/deleteCacheInfo.nut?beanName=' + row.beanName,
									dataType : 'json',
									success : function(data) {
										if (data) {
											cacheInfoGrid.removeRow(row, true);
										}
									}
								});
					}
				});
	}
}

function doSaveCacheJG() {
	var rows = cacheInfoGrid.getData();
	var dataStr = '';
	for (var i = 0, l = rows.length; i < l; i++) {
		var row = rows[i];
		var index = bmglgrid.indexOf(row);
		dataStr += "{sortNum:'" + index + "',beanName:'" + row.beanName + "'},";
	}
	$.ajax({
				type : "POST",
				url : base + "cache/doSaveCacheJG.nut",
				data : "[" + dataStr.substring(0, dataStr.length - 1) + "]",
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						mini.alert("操作成功!!");
					} else {
						mini.alert("操作失败!!");
					}
				}
			});
}