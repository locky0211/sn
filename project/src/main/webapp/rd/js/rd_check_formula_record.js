var checkFormulaRecordGrid;
$(function() {
	checkFormulaRecordGrid = mini.get('checkFormulaRecordGrid');
	gridLoad();
		});
function gridLoad() {
	checkFormulaRecordGrid.load();
}

function onRiskRenderer(e) {
	if (e.value == '1') {
		return '<font color="red">数值准确</font>';
	} else {
		return '<font color="blue">敏感关注</font>';
	}
}

function onRateRenderer(e){
	var value=e.value;
	var rate="";
	if(value.indexOf("1")>-1){
		rate+= "月,";
	}
	if(value.indexOf("2")>-1){
		rate+= "季,";
	}
	if(value.indexOf("3")>-1){
		rate+= "半年,";
	}
	if(value.indexOf("4")>-1){
		rate+= "去年同期,";
	}
	if(value.indexOf("5")>-1){
		rate+= "上半年度,";
	}
	if(value.indexOf("6")>-1){
		rate+= "下半年度,";
	}
	if(value.indexOf("7")>-1){
		rate+= "前三季度,";
	}
	if(value.indexOf("8")>-1){
		rate+= "第四季度,";
	}
	rate=rate.substring(0,rate.length-1);
	return rate;
}

function onRenderer(e){
	var record = e.record;
	var uid = record._uid;
	if (record.isReplay == '0') {
	var s = '<a class="mini-button" style="width: 40px; margin-right: 30px;" onclick="replayCheckFormula(\'' + uid
			+ '\')">还原</a>';
	} else {
		s = '<font color="green">已还原</font>';
	}
	return s;
}
// 刷新
function reloads(e) {
	gridLoad();
}

function replayCheckFormula(row_uid){
	var row = checkFormulaRecordGrid.getRowByUID(row_uid);
	$.ajax({
				type : 'POST',
				url : base + 'rd/check/replayCheckFormula.nut',
				data : {
					'id' : row.id,
				},
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						checkFormulaRecordGrid.load();
					}
				}
			});
}
