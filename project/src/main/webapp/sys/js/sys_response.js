var responsegrid;
var responseform
$(function() {
	responsegrid = mini.get("responsegrid");
	gridLoad();
		});
function gridLoad() {
	responsegrid.load();
}

function onAdd() {
	var pId=mini.get("Pid").getValue();
	responseform = new mini.Form('#reForm');
	responseform.validate();
	if (responseform.isValid()) {
		var o = responseform.getData();
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + "sys/response/addOrUpdateRe.nut",
					type : 'post',
					data :  {json:json,Pid:pId},
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
								responsegrid.load();
								 mini.get("Content").setValue("");     
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

};

function showResponse(e) {
	var row = e.record;
	mini.open({
				url : base + "sys/response/toViewSysResponse.nut?id=" + row.id + '&page=/sys/jsp/sys_response_view.jsp',
				title : "问题回复",
				width : 780,
				height : 490,
				showMaxButton : true,
				iconCls : "icon-document"
			});
}

function onCancel() {
	CloseWindow("cancel");
};
function reload() {
	questionGrid.reload();
};