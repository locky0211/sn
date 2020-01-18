var formulaGrid;
var formulaName_Dck;
var formulaName_East;
var formulaName_Type;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
		success : function(e) {
			formulaName_Dck = e;
		}
	});
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=ImportEastTable',
		success : function(e) {
			formulaName_East = e;
		}
	});
	
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=FormulaEastType',
		success : function(e) {
			formulaName_Type = e;
		}
	});
});

function onNameRenderer_Dck(e) {
	for (var i = 0; i < formulaName_Dck.length; i++) {
		if (formulaName_Dck[i].zdValue == e.record.dspTable) {
			return formulaName_Dck[i].zdName;
		}
	}
}

function onNameRenderer_East(e) {
	for (var i = 0; i < formulaName_East.length; i++) {
		if (formulaName_East[i].zdValue == e.record.eastTable) {
			return formulaName_East[i].zdName;
		}
	}
}

function onNameRenderer_Type(e) {
	for (var i = 0; i < formulaName_Type.length; i++) {
		if (formulaName_Type[i].zdValue == e.record.formulaType) {
			return formulaName_Type[i].zdName;
		}
	}
}