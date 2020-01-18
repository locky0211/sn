var checkLogGrid;
var data;
var type;
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
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DcCheckType',
		success : function(text) {
			type = text;
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
function onCheckTypeRenderer(e){
	if(e.value == 7){
		return "整体校验";
	}else{
		for (var i = 0; i < type.length; i++) {
			if (type[i].zdValue == e.value) {
				return type[i].zdName;
			}
		}
	}
}
