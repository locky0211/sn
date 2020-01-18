$(function() {
			mini.get('qxTreeGrid').setCheckRecursive(true);
			if ($('#flag').val() != '') {
				mini.get('jsId').setReadOnly(true);
			}
		});

/**
 * ajax 提交角色信息表单和权限
 */
function onAdd() {
	var form = new mini.Form('#jusForm');
	var obj = form.getData();
	form.validate();
	if (form.isValid()) {
		var nodes = mini.get('qxTreeGrid').getCheckedNodes(true);

		// 角色信息 jsonStr
		var sysJsJsonStr = '{"jsId":"' + obj.jsId + '","jsName":"' + obj.jsName + '","jsDescription":"' + obj.jsDescription + '","jsStatus":"'
				+ obj.jsStatus + '"}';
		var nodesJsonStr = '';
		// 权限 jsonStr
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			nodesJsonStr += '{"jId":"' + obj.jsId + '","qId":"' + node.qxId + '"},';
		}
		nodesJsonStr = '[' + nodesJsonStr.substring(0, nodesJsonStr.length - 1) + ']';
		var jsonString = '';
		jsonString = '{"jsQxs":' + nodesJsonStr + ',"sysJsgl":' + sysJsJsonStr;
		// 是否是编辑
		if ($('#flag').val() != '') {
			jsonString += ',"flag":' + 0;
		}
		jsonString += '}';
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'sys/jus/addOrUpdateJsgl.nut',
					async : false,
					data : jsonString,
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
}
/**
 * 验证Id
 * 
 * @param {}
 *            e
 */
function idValidation(e) {
	if ($('#flag').val() == '') {
		$.ajax({
					type : 'POST',
					url : base + 'sys/jus/checkJsId.nut',
					data : {
						'jsId' : e.value
					},
					async : false,
					dataType : 'json',
					success : function(data) {
						if (!data.success) {
							e.errorText = '已存在';
							e.isValid = false;
						}
					}
				});
	}
}

function onCancel() {
	CloseWindow("cancel");
}
