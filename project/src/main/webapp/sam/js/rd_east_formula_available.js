var formulaGrid;
var formulaName_Rd;
var formulaName_East;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async: false,
		url: base+'sys/ggzd/getGgzdList.nut?groupId=EastTableName',
		success : function(e) {
			formulaName_East = e;
		}
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async: false,
		url: base+'sys/ggzd/getGgzdList.nut?groupId=1104ReportName',
		success : function(e) {
			formulaName_Rd = e;
		}
	});
});

function onNameRenderer_Rd(e) {
	for (var i = 0; i < formulaName_Rd.length; i++) {
		if (formulaName_Rd[i].zdValue == e.record.samTableName) {
			return formulaName_Rd[i].zdName;
		}
	}
}

function onNameRenderer_East(e) {
	for (var i = 0; i < formulaName_East.length; i++) {
		if (formulaName_East[i].zdValue == e.record.eastTableName) {
			return formulaName_East[i].zdName;
		}
	}
}