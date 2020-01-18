$(function() {});

/**
 * ajax 提交角色信息表单和权限
 */
function onAdd() {
	// 添加和编辑
	var form = new mini.Form("#jusForm");
	form.validate();
	if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'rd/tabcoord/addOrUpdateRecordInfo.nut',
						type : 'post',
						data : json,
						dataType : 'json',
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
							} else {
								mini.alert('操作失败,' + text.data, '提醒');
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
}
/**
 * 验证Id
 * 
 * @param {}
 *            e
 */

function onCancel() {
	CloseWindow("cancel");
}
