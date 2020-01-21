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

		// 角色信息
		var sysJsJsonObj={};
        sysJsJsonObj.jsId =""+obj.jsId;
        sysJsJsonObj.jsName =""+obj.jsName;
        sysJsJsonObj.jsDescription =""+obj.jsDescription;
        sysJsJsonObj.jsStatus =""+obj.jsStatus;


        var nodesJsonArray = new Array();
		// 权限 json
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
            var nodeObj ={};
            nodeObj.jId=""+obj.jsId;
            nodeObj.qId=""+node.qxId;

            nodesJsonArray.push(nodeObj);
		}

        var jsonObj ={};
        jsonObj.jsQxs=nodesJsonArray;
        jsonObj.sysJsgl=sysJsJsonObj;

		// 是否是编辑
		if ($('#flag').val() != '') {
            jsonObj.flag = "0";
		}

		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					type : 'POST',
					dataType : 'json',
            		contentType : "application/json",
					url : base + 'sys/jus/addOrUpdateJsgl.nut',
					async : false,
					data :  mini.encode(jsonObj),
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
