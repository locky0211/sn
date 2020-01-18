var models;
$(function() {
			models = mini.get('models');
			getUrlData();
		});
function onCancel() {
	CloseWindow("cancel");
}

function getUrlData() {
	$.ajax({
				url : base + 'modelfl/getUrlData.nut?url=' + getCategoryOfModels,
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success && text.data != null) {
						var jsondata = mini.decode(text.data).category;
						var list = '[{id:"0",name:"顶级"},';
						for (var i = 0; i < jsondata.length; i++) {
							list += '{id:"' + jsondata[i].id + '",name:"' + jsondata[i].name + '"},';
							list = forChildren(jsondata[i].children, list);
						}
						list = list.substring(0, list.length - 1) + ']';
						models.setData(list);
					} else {
						mini.alert("未有数据或网络异常");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				}
			});
};

function forChildren(children, list) {
	if (children.length > 0) {
		for (var a = 0; a < children.length; a++) {
			if (children[a].type == 'category') {
				list += '{id:"' + children[a].id + '",name:"' + children[a].name + '"},';
				if (children[a].children.length > 0) {
					list = forChildren(children[a].children, list);
				}
			}
		}
	}
	return list;
}

function onAdd() {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '信息处理中...'
			});
	$.ajax({
				type : 'POST',
				dataType : 'json',
				url : base + 'modelDept/addCategroy.nut?name=' + mini.get('modelName').getValue() + "&parent=" + mini.get('models').getValue(),
				success : function(text) {
					if (text.success) {
						mini.alert('操作成功!!', '提醒', function() {
									CloseWindow("ok");
								});
					} else {
						mini.alert('操作失败!!', '提醒');
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
}