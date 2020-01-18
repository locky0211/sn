var formulaGrid;
var formulaName_Rd;
var formulaName_Dck;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base+'sys/ggzd/getGgzdList.nut?groupId=1104ReportName',
		success : function(e) {
			formulaName_Rd = e;
		}
	});
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async: false,
		url: base+'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
		success : function(e) {
			formulaName_Dck = e;
		},
	});
});

function onNameRenderer_Rd(e) {
	for (var i = 0; i < formulaName_Rd.length; i++) {
		if (formulaName_Rd[i].zdValue == e.record.samTableName) {
			return formulaName_Rd[i].zdName;
		}
	}
}

function onNameRenderer_Dck(e) {
	for (var i = 0; i < formulaName_Dck.length; i++) {
		if (formulaName_Dck[i].zdValue == e.record.dckTableName) {
			return formulaName_Dck[i].zdName;
		}
	}
}