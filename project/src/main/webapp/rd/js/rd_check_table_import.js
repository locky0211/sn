$(function() {
	mini.get('checkTableImportGrid').load();
});
function onField4Renderer(e) {
	if (e.value) {
		return '已上报';
	} else {
		return '<font color="red">未上报</font>';
	}
}