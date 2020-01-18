var modelfltreegrid;

$(function() {
			modelfltreegrid = mini.get('modelfltreegrid');
			getUrlData();
		});
function getUrlData() {
	$.ajax({
				url : base + 'modelfl/getUrlData.nut?url=' + getCategoryOfModels,
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success && text.data != null) {
						var jsondata = mini.decode(text.data);
						modelfltreegrid.loadData(jsondata.category);
					} else {
						mini.alert("未有数据或网络异常");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				}
			});
};

function onTreeClick(e) {
	if (e.isLeaf) {
		$('#iframe').attr('src', edPath + editor + e.node.id);
	}
};

function search() {
	var key = mini.get("key").getValue();
	if (key == "") {
		modelfltreegrid.clearFilter();
	} else {
		modelfltreegrid.filter(function(node) {
					if (node.name.indexOf(key) != -1) {
						return true;
					}
				});
	}
};
