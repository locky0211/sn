var zTree;
$(function() {
			initTree();
			initBtnEvent();
			initManagerForm();
			// 注册窗口关闭的时候初始化方法
			$("#nodeInfoWin").window({
						onClose : revertWin
					});
			// 注册窗口关闭的时候初始化方法
			$("#nodeInfoWin2").window({
						onClose : revertWin2
					});
		});
function initBtnEvent() {
	// 展开全部
	$("#exAll").bind("click", function(event) {
				zTree.expandAll(true);
			});
	// 收起全部
	$("#clAll").bind("click", function(event) {
				zTree.expandAll(false);
			});
	// 重新记载页面按钮
	$("#reloadTree").bind("click", function(event) {
				initTree();
			});
	// 保存属性结构按钮
	$("#saveTree").bind("click", function(event) {
				$.messager.confirm('保存修改', '是否确认更新系统功能节点结构?', function(r) {
							if (r) {
								saveTreeNodeStructure();
							}
						});
			});

	$("#addFolder").bind("click", function(event) {
				toAddFolder();
			});
	// 新增子节点
	$("#addNode").bind("click", function(event) {
				toAddNode();
			});
	// 修改节点
	$("#editNode").bind("click", function(event) {
				toEditNode();
			});
	// 修改节点
	$("#editFolder").bind("click", function(event) {
				toEditFolder();
			});
	// 删除节点
	$("#delNode").bind("click", function(event) {
				toDelNode();
			});
	// 删除节点
	$("#btnOk2").bind("click", function(event) {
				$('#bankManagerForm2').submit();
			});
	// 新增节点保存按钮
	$("#btnOk").bind("click", function(event) {
				if ($('#bankManagerForm').validate().element($('#bankOrganNo'))) {
					if ($('#bbflag').val() == 'add') {
						$.ajax({
									type : "POST",
									dataType : 'json',
									url : base + '/sam/sbo/checkBankOrganNo',
									data : "bankOrganNo=" + $('#bankOrganNo').val(),
									success : function(data) {
										if (data.success) {
											$('#bankManagerForm').submit();
										} else {
											$.messager.alert('警告', data.msg, 'warning');
										}
									}
								});
					} else {
						$('#bankManagerForm').submit();
					}
				}
			});
}
function saveTreeNodeStructure() {
	var nodes = zTree.transformToArray(zTree.getNodes());
	var nodesJsonStr = '';
	var jsonString = '';
	for (var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		nodesJsonStr += '{bankOrganNo:"' + node.bankOrganNo + '",bankOrganName:"' + node.bankOrganName + '",pId:"' + node.pId + '",isParent:"' + node.isParent + '",sortNum:"' + i + '"},';
	}
	nodesJsonStr = '[' + nodesJsonStr.substring(0, nodesJsonStr.length - 1) + ']';
	jsonString = '{"bankOrgans":' + nodesJsonStr + '}';
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/sbo/saveBankOrganStructure',
				data : jsonString,
				success : function(data) {
					if (data.success) {
						$.messager.alert('提示', data.msg, 'info', function() {
									location.reload();
								});
					} else {
						$.messager.alert('警告', data.msg, 'error');
					}
				}
			});
}
function toEditFolder() {
	var node = getSelectNode();
	if (node != null && node.isParent == true) {
		$('#folderId').val(node.bankOrganNo);
		$('#bankOrganName2').val(node.bankOrganName);
		$('#bankOrganPid2').val(node.pId);
		$("#nodeInfoWin2").window({
					title : '修改目录',
					width : 430,
					height : 200,
					closed : false
				});
	}
}
function toEditNode() {
	var node = getSelectNode();
	if (node != null && node.isParent != true) {
		$('#bankOrganNo').val(node.bankOrganNo);
		$('#bankOrganName').val(node.bankOrganName);
		$('#bankOrganPid').val(node.pId);
		$('#bankOrganNo').attr('readonly', 'readonly');
		$('#bbflag').val('edit');
		$("#nodeInfoWin").window({
					title : '修改机构',
					width : 430,
					height : 200,
					closed : false
				});
	}
}

function toAddFolder() {
	var sNodes = zTree.getSelectedNodes();
	if (sNodes.length > 0) {
		var node = sNodes[0];
		if (!node.isParent) {
			node = node.getParentNode();
		}
		$('#bankOrganPid2').val(node.bankOrganNo);
	}
	$("#nodeInfoWin2").window({
				title : '新增目录',
				width : 430,
				height : 200,
				closed : false
			});
}

function toAddNode() {
	var node = getSelectNode();
	if (node != null) {
		if (!node.isParent) {
			node = node.getParentNode();
		}
		$('#bankOrganPid').val(node.bankOrganNo);
		$('#bbflag').val('add');
		$("#nodeInfoWin").window({
					title : '新增机构',
					width : 430,
					height : 200,
					closed : false
				});
	}
}

function toDelNode() {
	var node = getSelectNode();
	if (node != null) {
		$.messager.confirm('机构删除', '删除后机构数据不能恢复,是否确定删除?', function(r) {
					if (r) {
						delNode(node);
					}
				});
	}
}

function delNode(node) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/sbo/deleteBankOrgan',
				data : "bankOrganNo=" + node.bankOrganNo + "&isParent=" + node.isParent,
				success : function(data) {
					if (data.success) {
						$.messager.alert('提示', data.msg, 'info', function() {
									initTree();
								});
					} else {
						$.messager.alert('警告', data.msg, 'error');
					}
				}
			});
}

/**
 * 获取当前选中第一个节点
 * 
 * @return {选中节点,没有为null}
 */
function getSelectNode() {
	var sNodes = zTree.getSelectedNodes();
	if (sNodes.length > 0) {
		return sNodes[0];
	} else {
		$.messager.alert('提醒', '请先选择一个节点,再进行操作!!', 'warning');
		return null;
	}
}

function initTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/sbo/getBankOrganList',
				success : function(data) {
					loadingHide();
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
								showRenameBtn : false,
								drag : {
									autoExpandTrigger : true,
									prev : dropPrev,
									inner : dropInner,
									next : dropNext
								}
							},
							data : {
								keep : {
									parent : true,
									leaf : true
								},
								key : {
									name : "bankOrganName"
								},
								simpleData : {
									enable : true,
									idKey : "bankOrganNo",
									pIdKey : "pId"
								}
							},
							callback : {
								beforeDrag : beforeDrag
							}
						};
						zTree = $.fn.zTree.init($("#tree"), setting, data);
					} else {
						$.messager.alert('警告', '获取数据失败!!', 'error');
					}
				}
			});
}

function beforeDrag(treeId, treeNodes) {
	// if (treeNodes[0].isParent) {
	// return false;
	// } else {
	return true;
	// }
}
function dropPrev(treeId, nodes, targetNode) {
	if (targetNode.level == 0) {
		return false;
	} else {
		return true;
	}
}
function dropNext(treeId, nodes, targetNode) {
	if (targetNode.level == 0) {
		return false;
	} else {
		return true;
	}
}
function dropInner(treeId, nodes, targetNode) {
	if (targetNode.level != 2) {
		return false;
	} else {
		return true;
	}
}

// 初始化树形结构表单
function initManagerForm() {
	$('#bankManagerForm').form({
				url : base + '/sam/sbo/saveOrUpdateBankOrgan',
				onSubmit : function() {
					return $("#bankManagerForm").valid();
				},
				success : function(dd) {
					var data = $.parseJSON(dd);
					if (data.success) {
						closeWin();
						initTree();
					} else {
						$.messager.alert('警告', data.msg, 'error');
					}
				}
			});
	// 初始化验证
	$('#bankManagerForm').validate();
	$('#bankManagerForm2').form({
				url : base + '/sam/sbo/saveOrUpdateFolder',
				onSubmit : function() {
					return $("#bankManagerForm2").valid();
				},
				success : function(dd) {
					var data = $.parseJSON(dd);
					if (data.success) {
						closeWin2();
						initTree();
					} else {
						$.messager.alert('警告', data.msg, 'error');
					}
				}
			});
	// 初始化验证
	$('#bankManagerForm2').validate();
}
function closeWin() {
	$("#nodeInfoWin").window('close');
}
function closeWin2() {
	$("#nodeInfoWin2").window('close');
}
function revertWin() {
	$('#bankOrganNo').val('');
	$('#bankOrganName').val('');
	$('#bankOrganPid').val('');
	$('#bankOrganNo').removeAttr('readonly');
	doResetForm($('#bankManagerForm'));
}
function revertWin2() {
	$('#bankOrganPid2').val('');
	$('#bankOrganName2').val('');
	$('#folderId').val('');
	doResetForm($('#bankManagerForm2'));
}
