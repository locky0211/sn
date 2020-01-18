var frkhxxGrid;
$(function() {
	frkhxxGrid = mini.get("frkhxxGrid");
	gridLoad();
}); 

//function jyjgRenderer(e){
//	var record = e.record;
//	var jyjg = '';
//	switch(e.field){
//		case 'qdxjyjg' : jyjg = record.qdxjyjg;break;
//		case 'hnyzxjyjg' : jyjg = record.hnyzxjyjg;break;
//		case 'tsxjyjg' : jyjg = record.tsxjyjg;break;
//	}
//	if(jyjg == '2' || jyjg == undefined || jyjg == ''){
//		return '<font color="blue">未校验</font>';
//	}
//	if(jyjg == '0'){
//		return '<font color="red">未通过</font>';
//	}
//	if(jyjg == '1'){
//		return '<font color="blue">已通过</font>';
//	}
//}

function gridLoad() {
	frkhxxGrid.load({
		brno : mini.get('brno').getValue(),
		sjrq : mini.get('sjrq').getFormValue(),
		jkrxm : mini.get('jkrxm').getValue(),
	});
}


function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = ''; 
	s = '<a class="mini-button mini-button-plain" href="javascript:edit(\''
			+ uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del(\''
				+ uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';

	return s;
}

function edit(row_uid) {
	var row = frkhxxGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
			url : base + 'frkh/toEditFrkhxx.nut?id=' + row.id
					+ '&page=/dck/jsp/dsp_frkhxx.jsp',
			title : '法人客户信息修改',
			iconCls : 'icon-edit',
			width : 880,
			bodyStyle : "padding:0px 5px",
			height : 550,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					updateRow(row);
				}
			}
		});
	}
}

function updateRow(row) {
	$.ajax({
		type : 'POST',
		url : base + 'frkh/fetchFrkhxx.nut',
		data : {
			'id' : row.id
		},
		dataType : 'json',
		success : function(data) {
			if (data) {
				frkhxxGrid.updateRow(row, data);
			}
		}
	});
}

function del(row_uid) {
	var row = frkhxxGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + 'frkh/deleteFrkhxx.nut',
					data : {
						'id' : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data) {
							frkhxxGrid.removeRow(row, true);
						}
					}
				});
			}
		});
	}
}

function search() {
	frkhxxGrid.load({
		brno : mini.get('brno').getValue(),
		sjrq : mini.get('sjrq').getFormValue(),
		jkrxm : mini.get('jkrxm').getValue(),
	});
}

// 刷新
function reloads(e) {
	gridLoad();
}

function brnoselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false) {
		e.cancel = true;
	} 
}

