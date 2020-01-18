var zTree;
$(function() {
			initTree();
			initBtnEvent();
			initManagerForm();
			// 注册窗口关闭的时候初始化方法
			$("#nodeInfoWin").window({
						onClose : revertWin
					});
		});

function initTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + 'sys/tree/getTreeNodes',
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
								showRenameBtn : false
							},
							data : {
								keep : {
									parent : true,
									leaf : true
								},
								simpleData : {
									enable : true
								}
							}
						};
						zTree = $.fn.zTree.init($("#tree"), setting, data);
					} else {
						$.messager.alert('警告', '获取节点数据失败!!', 'error');
					}
				}
			});
}

/**
 * 为页面按钮记载事件
 */
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
	// 新增父节点
	$("#addParentNode").bind("click", function(event) {
				toAddNode(true);
			});
	// 新增子节点
	$("#addNode").bind("click", function(event) {
				toAddNode(false);
			});
	// 修改节点
	$("#editNode").bind("click", function(event) {
				toEditNode();
			});
	// 删除节点
	$("#delNode").bind("click", function(event) {
				toDelNode();
			});
	// 新增节点保存按钮
	$("#btnOk").bind("click", function(event) {
				$('#treeManagerForm').submit();
			});
}
/**
 * 保存树形结构
 */
function saveTreeNodeStructure() {
	var nodes = zTree.transformToArray(zTree.getNodes());
	var nodesJsonStr = '';
	var ids = '';
	var jsonString = '';
	for (var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		nodesJsonStr += '{id:"' + node.id + '",pId:"' + node.pId + '",iconStr:"' + node.iconStr + '",name:"' + node.name + '",urlLink:"' + node.urlLink + '",open:"' + node.open + '",isParent:"'
				+ node.isParent + '",dicId:"' + node.dicId + '",sortNum:"' + i + '"},';
		ids += '"' + node.id + '",';
	}
	nodesJsonStr = '[' + nodesJsonStr.substring(0, nodesJsonStr.length - 1) + ']';
	ids = '[' + ids.substring(0, ids.length - 1) + ']';
	jsonString = '{"ids":' + ids + ',"treeNodes":' + nodesJsonStr + '}';
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + 'sys/tree/saveTreeNodeStructure',
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
		$.messager.alert('提醒', '请先选择一个节点再进行操作!!', 'warning');
		return null;
	}
}
/**
 * 进行节点增加前数据装载
 * 
 * @param {}
 *            isAddParent 是否为增加父节点 ture:false
 */
function toAddNode(isAddParent) {
	var node = getSelectNode();
	if (node != null) {
		if (node.isParent) {
			$('#treePid').val(node.id);
			$('#treeOpen').val(node.open);
			if (isAddParent) {
				$('#treeIsParent').val('true');
				$('#treeUrlLink').parent().parent().hide();
				$('#treeUrlLink').attr('disabled', 'disabled');
				$("#nodeInfoWin").window({
							title : '新增父节点',
							width : 430,
							height : 150,
							closed : false
						});
			} else {
				$("#nodeInfoWin").window({
							title : '新增子节点',
							width : 630,
							height : 230,
							closed : false
						});
			}
		} else {
			$.messager.alert('提醒', '请先选择一个父节点再进行操作!!', 'warning');
		}
	}
}
/**
 * 修改节点前的数据记载
 */
function toEditNode() {
	var node = getSelectNode();
	if (node != null) {
		var title = '修改节点';
		var width = 630;
		var height = 230;
		$('#treeId').val(node.id);
		$('#treePid').val(node.pId);
		$('#treeOpen').val(node.open);
		$('#treeIsParent').val(node.isParent);
		if (node.isParent) {
			$('#treeUrlLink').parent().parent().hide();
			width = 430;
			height = 150;
		} else {
			$('#treeUrlLink').val(node.urlLink);
		}
		$('#treeName').val(node.name);
		$("#nodeInfoWin").window({
					title : title,
					width : width,
					height : height,
					closed : false
				});
	}
}
/**
 * 节点删除前数据记载
 */
function toDelNode() {
	var node = getSelectNode();
	if (node != null) {
		if (node.isParent) {
			$.messager.prompt('警告', '父节点删除,其下子节点一并被删除!!<br>请输入 <font color="red">立即删除</font> 确定删除!', function(m) {
						if (m == '立即删除') {
							delNode(node);
						}
					});
		} else {
			$.messager.confirm('保存修改', '删除后节点数据不能恢复,是否确定删除?', function(r) {
						if (r) {
							delNode(node);
						}
					});
		}
	}
}
/**
 * 进行AJAX节点删除
 * 
 * @param {要被删除的节点信息}
 *            node
 */
function delNode(node) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + 'sys/tree/deleteNode',
				data : "id=" + node.id + "&isParent=" + node.isParent,
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
 * 关闭信息窗口
 */
function closeWin() {
	$("#nodeInfoWin").window('close');
}
/**
 * 用户关闭窗口时的还原操作
 */
function revertWin() {
	$('#treeId').focus();
	$('#treeId').val('');
	$('#treePid').val('');
	$('#treeOpen').val('');
	$('#treeIsParent').val('');
	$('#treeName').val('');
	$('#treeUrlLink').val('');
	$('#treeUrlLink').parent().parent().show();
	$('#treeUrlLink').removeAttr('disabled');
	doResetForm($('#treeManagerForm'));
}

// 初始化树形结构表单
function initManagerForm() {
	$('#treeManagerForm').form({
				url : base + 'sys/tree/saveOrUpdateNode',
				onSubmit : function() {
					return $("#treeManagerForm").valid();
				},
				success : function(dd) {
					var data = $.parseJSON(dd);
					if (data.success) {
						closeWin();
						$.messager.alert('提示', data.msg, 'info', function() {
									reAsyncSelectedNodes();
								});
					} else {
						$.messager.alert('警告', data.msg, 'error');
					}
				}
			});
	// 初始化验证
	$('#treeManagerForm').validate();
}
// 刷新选择节点的异步数据
function reAsyncSelectedNodes() {
	location.reload();

}
