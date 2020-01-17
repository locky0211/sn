var zTree;
$(function() {
			InitTree();
			tabClose();
			tabCloseEven();
			loadingHide();
		});
// 初始化左侧功能节点树
function InitTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sys/tree/getTreeNodesByPid?pId=' + pId,
				success : function(dd) {
					if (dd) {
						var setting = {
							view : {
								dblClickExpand : false,
								showLine : false,
								selectedMulti : false,
								expandSpeed : ($.browser.msie && parseInt($.browser.version) <= 6) ? "" : "fast"
							},
							data : {
								simpleData : {
									enable : true,
									idKey : "id",
									pIdKey : "pId",
									rootPId : ""
								}
							},
							callback : {
								// 修改单击打开树功能
								beforeClick : function(treeId, treeNode) {
									if (treeNode.isParent) {
										zTree.expandNode(treeNode);
										return false;
									} else {
										if (treeNode.urlLink.startWith("http")) {
											window.open(treeNode.urlLink);
										} else {
											addTab(treeNode.name, base + treeNode.urlLink, false);
										}
										return true;
									}
								}
							}
						};
						zTree = $.fn.zTree.init($("#tree"), setting, dd);
					} else {
						$.messager.alert('警告', '加载数据结构失败!!', 'error');
					}
				}
			});
}

function addTab(subtitle, url, refresh) {
	if (!$('#tabs').tabs('exists', subtitle)) {
		$('#tabs').tabs('add', {
					title : subtitle,
					content : createFrame(url, subtitle),
					closable : true,
					width : $('#mainPanle').width() - 10,
					height : $('#mainPanle').height() - 26
				});
	} else {
		if (refresh) {
			$("iframe[name='" + subtitle + "']").attr('src', url);
		}
		$('#tabs').tabs('select', subtitle);
	}
	tabClose();
}
function closeTab(title) {
	if (title != '系统首页') {
		$('#tabs').tabs('close', title);
	}
}
function createFrame(url, subtitle) {
	var s = '<iframe name="' + subtitle + '" scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;padding: 0px;margin: 0px;"></iframe>';
	return s;
}

function tabClose() {
	/* 双击关闭TAB选项卡 */
	$(".tabs-inner").dblclick(function() {
				var subtitle = $(this).children("span").text();
				closeTab(subtitle);
			});

	$(".tabs-inner").bind('contextmenu', function(e) {
				$('#mm').menu('show', {
							left : e.pageX,
							top : e.pageY
						});

				var subtitle = $(this).children("span").text();
				$('#mm').data("currtab", subtitle);

				return false;
			});
}

// 绑定右键菜单事件
function tabCloseEven() {
	// 关闭当前
	$('#mm-tabclose').click(function() {
				var currtab_title = $('#mm').data("currtab");
				closeTab(currtab_title);
			});
	// 全部关闭
	$('#mm-tabcloseall').click(function() {
				$('.tabs-inner span').each(function(i, n) {
							var t = $(n).text();
							closeTab(t);
						});
			});
	// 关闭除当前之外的TAB
	$('#mm-tabcloseother').click(function() {
				var currtab_title = $('#mm').data("currtab");
				$('.tabs-inner span').each(function(i, n) {
							var t = $(n).text();
							if (t != currtab_title)
								closeTab(t);
						});
			});
	// 关闭当前右侧的TAB
	$('#mm-tabcloseright').click(function() {
				var nextall = $('.tabs-selected').nextAll();
				if (nextall.length == 0) {
					// msgShow('系统提示','右边没有啦~~','warning');
					// alert('右边没有啦~~');
					return false;
				}
				nextall.each(function(i, n) {
							var t = $('a:eq(0) span', $(n)).text();
							closeTab(t);
						});
				return false;
			});
	// 关闭当前左侧的TAB
	$('#mm-tabcloseleft').click(function() {
				var prevall = $('.tabs-selected').prevAll();
				if (prevall.length == 0) {
					// alert('到头了，前边没有啦~~');
					return false;
				}
				prevall.each(function(i, n) {
							var t = $('a:eq(0) span', $(n)).text();
							closeTab(t);
						});
				return false;
			});
}

// function initHome() {
// $('#tabs').tabs('select', "系统首页");
// $('#homeFrame').attr('src', homeUrl);
// }

// 弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}
