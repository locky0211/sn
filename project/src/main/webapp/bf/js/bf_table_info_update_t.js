var tableInfoGrid;
$(function() {
			tableInfoGrid = mini.get('tableInfoGrid');
			tableInfoGrid.load();
		});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:expo(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-down">下载</span></a>';

	return s;
}

function onRendererTemp(e) {
	if (e.value == 'Temp') {
		return '结转表';
	}
}

function edit(row_uid) {
	var row = tableInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'bf/table/temp/toEditTableInfo.nut?tabCode=' + row.tabCode + '&versionNo=' + row.versionNo
							+ '&page=/bf/jsp/bf_table_info_t.jsp',
					title : '报表模板信息修改',
					iconCls : 'icon-edit',
					width : 550,
					height : 550,
					allowResize : false,
					showMaxButton : true,
					ondestroy : function(action) {
						if (action == 'ok') {
							tableInfoGrid.reload();
						}
					}
				});
	}
}

function del(row_uid) {
	var row = tableInfoGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响系统正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
									type : 'POST',
									url : base + 'bf/table/temp/deleteTableInfo.nut',
									data : {
										'tableId' : row.tableId
									},
									dataType : 'json',
									success : function(data) {
										if (data) {
											tableInfoGrid.removeRow(row, true);
										} else {
											tableInfoGrid.reload();
										}
									}
								});
					}
				});
	}
}
function expo(row_uid){
	var row = tableInfoGrid.getRowByUID(row_uid);
	if (row) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出Excel模板中...'
	});
	$.ajax({
			url : base + 'bf/table/temp/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			data : {
				'tableId' : row.tableId
			},
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFileForBf(text);
					mini.alert("导出成功！");
				}
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

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}