var formulaGrid;
var formulaName;
$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=EastTableName',
		success : function(e) {
			formulaName = e;
		}
	});
});

function onNameRenderer(e) {
	for (var i = 0; i < formulaName.length; i++) {
		if (formulaName[i].zdValue == e.record.repCode) {
			return formulaName[i].zdName;
		}
	}
}

function onRendererType(e) {
	if (e.value == '1') {
		return '非空校验';
	} else if (e.value == '2') {
		return '长度校验';
	} else if (e.value == '3') {
		return '数值校验';
	} else if (e.value == '4') {
		return '范围校验';
	} else if (e.value == '5') {
		return '关联校验';
	} else if (e.value == '6') {
		return '复杂校验';
	} else {
		return '非空校验（选填）'
	}
}