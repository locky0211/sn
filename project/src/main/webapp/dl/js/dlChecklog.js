var checkLogGrid;
var data;
$(function() {
	checkLogGrid = mini.get('checkLogGrid');
	checkLogGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/bm/getSysBmList.nut',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

function onNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].bmCode == e.value) {
			return data[i].bmName;
		}
	}
}

