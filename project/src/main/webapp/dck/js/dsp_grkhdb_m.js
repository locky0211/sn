var grkhdbGrid;
$(function() {
			grkhdbGrid = mini.get("grkhdbGrid");
			gridLoad();
		});

function gridLoad() {
	grkhdbGrid.load();
}

function jyjgRenderer(e){
	var record = e.record;
	var jyjg = '';
	switch(e.field){
		case 'qdxjyjg' : jyjg = record.qdxjyjg;break;
		case 'hnyzxjyjg' : jyjg = record.hnyzxjyjg;break;
		case 'tsxjyjg' : jyjg = record.tsxjyjg;break;
	}
	if(jyjg == '2' || jyjg == undefined || jyjg == ''){
		return '<font color="blue">未校验</font>';
	}
	if(jyjg == '0'){
		return '<font color="red">未通过</font>';
	}
	if(jyjg == '1'){
		return '<font color="blue">已通过</font>';
	}
}

function fresh(){
	mini.get('brno').setValue('');
	mini.get('jkrxm').setValue('');
	mini.get('sjrq').setValue('');
	grkhdbGrid.load();
}

function addRow(e) {
	mini.open({
				url : base + "dck/jsp/dsp_grkhdb.jsp",
				title : "新增个人客户信息",
				iconCls : "icon-add",
				width : 880,
				bodyStyle : "padding:0px 5px",
				height : 550,
				allowResize : false,
				showMaxButton : true

			});
}

function addGrwydkdbqkRow(id) {
	$.ajax({
		type : 'POST',
		url : base + 'grwydkdb/fetchGrwydkdbqk.nut',
		data : {
			'id' : id
		},
		dataType : 'json',
		success : function(data) {
			if (data) {
				grkhdbGrid.addRow(data, 0);
			}
		}
	});
}

function getYearmonth(){
	var date = new Date();
	var yearmonth = '';
	var month = date.getMonth();
	if(month>9){
		yearmonth = date.getFullYear() + month;
	}
	if(month>0 && month <9){
		yearmonth = date.getFullYear() + '0' + month;
	}
	if(month ==0){
		yearmonth = date.getFullYear() - 1 + "12";
	}
	return yearmonth;
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '';
	 s = '<a class="mini-button mini-button-plain" href="javascript:edit(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	 s+='<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(row_uid) {
	var row = grkhdbGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
			url : base + 'grwydkdb/toEditGrwydkdbqk.nut?id=' + row.id + '&page=/dck/jsp/dsp_grkhdb.jsp',
			title : '个人客户信息修改',
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
		url : base + 'grwydkdb/fetchGrwydkdbqk.nut',
		data : {
			'id' : row.id
		},
		dataType : 'json',
		success : function(data) {
			if (data) {
				grkhdbGrid.updateRow(row, data);
			}
		}
	});
}

function view(row_uid) {
	var row = grkhdbGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + 'grwydkdb/toEditGrwydkdbqk.nut?id=' + row.id + '&page=/dck/jsp/dsp_grkhdb.jsp&flag=1',
					title : '个人客户信息查看',
					iconCls : 'icon-view',
					width : 880,
					bodyStyle : "padding:0px 5px",
					height : 520,
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

function del(row_uid) {
	var row = grkhdbGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm('删除后可能影响任务正常运行!', '确定？', function(action) {
					if (action == 'ok') {
						$.ajax({
							type : 'POST',
							url : base + 'grwydkdb/deleteGrwydkdbqk.nut',
							data : {
								'id' : row.id
							},
							dataType : 'json',
							success : function(data) {
								if (data) {
									grkhdbGrid.removeRow(row, true);
								}
							}
						});
					}
				});
	}
}

function search() {
	grkhdbGrid.load({
				khmc : mini.get("jkrxm").getValue(),
				sjrq : mini.get("sjrq").getFormValue(),
				brno : mini.get("brno").getValue(),
			});
}

// 刷新
function reloads(e) {
	gridLoad();
}
