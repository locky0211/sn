var tableInfoGrid;
var data;
$(function() {
	tableInfoGrid = mini.get('tableInfoGrid');
	tableInfoGrid.load();
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE_WJ',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

function onRendererType(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.tabType) {
			return data[i].zdName;
		}
	}
}

//提交
function save() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			saveInfo();
		}
	});
}

//保存
function saveInfo() {
	var grid = mini.get('tableInfoGrid');
	var rows = grid.getSelecteds();
	if (rows.length > 0) {
		var tableIds = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			tableIds = tableIds + row.tableId + ";";
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '保存中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "dy/sh/table/saveUserReports.nut",
			data : {
				'tableIds' : tableIds,
				'userId'  : userId
			},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert(data.data, "提醒",function(){
						CloseWindow("cancel");
					});
				} else {
					mini.alert(data.data, "提醒", function() {
						grid.reload();
					});
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	} else {
		mini.alert("请选择需要管理的报表！", "提醒");
	}
}