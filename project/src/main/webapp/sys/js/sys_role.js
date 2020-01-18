var zTreeObj;
$(document).ready(function() {
			// 加载功能结构
			InitRoleManagerTree();
			// 初始化Form校验
			$('#roleManagerForm').validate();
			if ($('#roleId').val() != '') {
				$('#roleId').attr("readonly", "readonly");
			} else {// 异步验证RoleId
				$('#roleId').bind('blur', roleIdBlurEvent);

			}
			// 绑定新增角色信息按钮事件
			$('#btnAdd').bind('click', addRoleFun);
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
			loadingHide();
		});
// 初始化功能节点
function InitRoleManagerTree() {
	var url = "";
	if ($('#roleId').val() != '') {
		url = base + 'sys/role/getRoleTreesByRoleId?roleId=' + $('#roleId').val();
	} else {
		url = base + 'sys/tree/getTreeNodes';
	}
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : url,
				success : function(data) {
					if (data) {
						var setting = {
							view : {
								showLine : true,
								selectedMulti : false,
								expandSpeed : ($.browser.msie && parseInt($.browser.version) <= 6) ? "" : "fast"
							},
							edit : {
								enable : true,
								showRemoveBtn : false,
								showRenameBtn : false
							},
							check : {
								enable : true
							},
							data : {
								keep : {
									parent : true,
									leaf : true
								},
								simpleData : {
									enable : true,
									idKey : "id",
									pIdKey : "pId",
									rootPId : ""
								}
							}
						};
						zTreeObj = $.fn.zTree.init($("#tree"), setting, data);
					} else {
						$.messager.alert('警告', '获取节点数据失败!!', 'error');
					}
				}
			});
}

function addRoleFun() {
	// validate控件验证FORM表单元素
	if ($("#roleManagerForm").valid()) {
//		if (zTreeObj.getCheckedNodes(true).length > 0) {
			var nodes = zTreeObj.getCheckedNodes(true);
			var nodesJsonStr = '';
			var sysRoleJsonStr = '{"roleId":"' + $('#roleId').val() + '","roleName":"' + $('#roleName').val() + '","roleDesc":"' + $('#roleDesc').val() + '","roleStatus":"' + $('#roleStatus').val()
					+ '"}';
			var jsonString = '';
			for (var i = 0; i < nodes.length; i++) {
				var node = nodes[i];
				nodesJsonStr += '{"roleId":"' + $('#roleId').val() + '","treeId":"' + node.id + '"},';
			}
			nodesJsonStr = '[' + nodesJsonStr.substring(0, nodesJsonStr.length - 1) + ']';
			jsonString = '{"roleTrees":' + nodesJsonStr + ',"sysRole":' + sysRoleJsonStr + '}';
			$.ajax({
						type : "POST",
						dataType : 'json',
						url : base + 'sys/role/saveOrUpdataRole',
						data : jsonString,
						success : function(data) {
							if (data.success) {
								window.location.href = base + 'common/jsp/success.jsp';
							} else {
								$.messager.alert('警告', data.msg, 'error');
							}
						}
					});
		// } else {
		// $.messager.alert('注意', '请勾选角色被赋予的操作权限!!!', 'warning');
		//		}
	}
}

// roleId失去焦点验证事件
function roleIdBlurEvent(e) {
	if ($('#roleManagerForm').validate().element($('#roleId'))) {
		$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + 'sys/role/checkRoleId',
					data : "roleId=" + $('#roleId').val(),
					success : function(data) {
						if (!data.success) {
							$.messager.alert('注意', data.msg, 'waring', function() {
										$('#roleId').val('');
										$('#roleId').focus();
									});
						}
					}
				});
	}
}
