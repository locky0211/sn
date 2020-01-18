var rollbackgrid;
$(function() {
	rollbackgrid = mini.get('rollbackgrid');
	rollbackgrid.load();
});
function onRenderer(e) {
	var record = e.record;
	var s = '<a class="mini-button mini-button-plain" href="javascript:rollback(\'' + mini.formatDate (record.updateDate,'yyyy-MM-dd HH:mm:ss')+ '\')"><span class="mini-button-text  mini-button-icon icon-reload">回滚</span></a>'+'<a class="mini-button mini-button-plain" href="javascript:del(\'' + mini.formatDate (record.updateDate,'yyyy-MM-dd HH:mm:ss') + '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}
function del(date){
	mini.confirm("确定删除？", "确定？", function(action) {
		if (action == "ok") {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'rd/check/delCheckFormulaTemp.nut?date='+date,
				type : 'post',
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						mini.alert('删除成功!!', '提醒', function() {
									rollbackgrid.load();
								});
					} else {
						mini.alert('删除失败!!', '提醒');
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
	});
}
function rollback(date){
	mini.confirm("确定回滚？", "确定？", function(action) {
		if (action == "ok") {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'rd/check/rollbackCheckFormula.nut?date='+date,
				type : 'post',
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						mini.alert('回滚成功!!', '提醒', function() {
									CloseWindow("ok");
								});
					} else {
						mini.alert('回滚失败!!', '提醒');
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
	});
}