var formulaGrid;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
});

function onRenderType(e) {
	if (e.value == '1') {
		return '普通';
	}
	else if (e.value == '2') {
		return '异动';
	}
	return '未知';
}