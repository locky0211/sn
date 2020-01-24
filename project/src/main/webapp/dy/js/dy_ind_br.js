var rdindbrGrid;
$(function() {
			rdindbrGrid = mini.get('rdindbrGrid');
		});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false) {
		e.cancel = true;
	}
}

function loadInds(e) {
	rdindbrGrid.load({
				indId : e.value
			});
}

function onActionRenderer(e) {
	var record = e.record;
	var s = '<a class="mini-button mini-button-plain" href="javascript:editRow()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	if (rdindbrGrid.isEditingRow(record)) {
		s = '<a class="mini-button mini-button-plain" href="javascript:updateRow()"><span class="mini-button-text  mini-button-icon icon-ok">确定</span></a>'
				+ '<a class="mini-button mini-button-plain" href="javascript:cancelRow()"><span class="mini-button-text  mini-button-icon icon-close">取消</span></a>';
	}
	return s;
}

function editRow() {
	var row = rdindbrGrid.getSelected();
	if (row) {
		rdindbrGrid.cancelEdit();
		rdindbrGrid.beginEditRow(row);
	}
}

function updateRow() {
	rdindbrGrid.commitEdit();
	var rowData = rdindbrGrid.getSelected();
	if (rowData.vYear == undefined || rowData.vYear == '' || rowData.vYear == '0') {
		mini.alert('请选择数据年份!!!');
		rdindbrGrid.beginEditRow(rowData);
	} else {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		var indId = mini.get('indTree').getValue();
		var data = mini.encode(rowData);
		$.ajax({
					url : base + "dy/indbr/insertOrUpdateDyIndBr.nut?indId="+indId,
					data : data,
					type : "post",
					dataType : "json",
            		contentType : "application/json",
					success : function(text) {
						if (text) {
							rdindbrGrid.reload();
						} else {
							mini.alert('操作失败!!!');
						}

					},
					error : function(jqXHR, textStatus, errorThrown) {
						mini.alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}

}

function cancelRow(row_uid) {
	var row = rdindbrGrid.getSelected();
	rdindbrGrid.cancelEditRow(row);
}
