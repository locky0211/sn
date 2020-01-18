var formulaGrid;
var formulaName;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
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
		return '基础性校验';
	} else if (e.value == '2') {
		return '确定性校验';
	} else if (e.value == '3') {
		return '吻合性校验';
	} else {
		return '关联校验';
	}
}