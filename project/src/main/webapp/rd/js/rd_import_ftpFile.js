/**
 * 
 */
var recordNewReportGrid;
$(function(){
	recordNewReportGrid = mini.get("recordNewReportGrid");
	recordNewReportGrid.load();
});
function search() {
	recordNewReportGrid.load({
		isDownLoad : mini.get('isDownLoad').getValue(),
		isImportDb : mini.get('isImportDb').getValue(),
		orgId : mini.get('orgId').getValue(),
		repName : mini.get('repName').getValue(),
		dataDate : mini.get('dataDate').getFormValue()
	});
}

function typeRenderer(e) {
	var row = e.record;
	var s="";
	if(row.freqId === "01"){
		s += '年报';
	}else if(row.freqId === "02"){
		s += '半年报';
	}else if(row.freqId === "03"){
		s += '季报';
	}else if(row.freqId === "04"){
		s += '月报';
	}
	return s;
}

function downloadRenderer(e) {
	var row = e.record;
	var s="";
	if(row.isDownLoad === 0){
		s += '<span style="color:red">未下载</span>';
	}else if(row.isDownLoad === 1){
		s += '已下载';
	}
	return s;
}

function importDBRenderer(e) {
	var row = e.record;
	var s="";
	if(row.isImportDB === 0){
		s += '<span style="color:red">未入库</span>';
	}else if(row.isImportDB === 1){
		s += '已入库';
	}
	return s;
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:confirmRestartExecute(\'' + uid
	+ '\')"><span class="mini-button-text  mini-button-icon icon-reload">重新执行</span></a>';
	return s;
}

function confirmRestartExecute(uid) {
	mini.confirm("是否重新执行?", "提醒", function(action) {
		if (action == 'ok') {
			restartExecute(uid);
		}
	});
}
function restartExecute(row_uid) {
	var row = recordNewReportGrid.getRowByUID(row_uid);
	if (row) {
		$.ajax({
					type : "POST",
					url : base + "newReportLog/restartExecute.nut",
					data : {
						id : row.id
					},
					cache : false,
					async : false,
					dataType : 'json',
					success : function(text) {
						if (text.success) {
							mini.alert(text.data,'提醒',function(){
								recordNewReportGrid.reload();
							});
						} else {
							mini.alert(text.data,'提醒');
						}
					}
				});
	}
}