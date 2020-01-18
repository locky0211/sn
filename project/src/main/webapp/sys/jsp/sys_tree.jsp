<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>系统功能节点维护</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.loading.jsp"%>
<script type="text/javascript" src="${base }/sys/js/sys_tree.js"></script>
</head>

<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<div style="width: 700px; height: 100%">
				<div style="width: 250px; height: 98%; float: left; border: 1px solid #6F9FF1; overflow: auto;">
					<ul id="tree" class="ztree"></ul>
				</div>
				<div style="float: left; width: 400px;">
					<ul>
						<li class="title">1、展开/关闭全部功能点</li>
						<li class="info">[ <a id="exAll" href="#" onclick="return false;">展开全部</a>]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="clAll" href="#" onclick="return false;">收起全部</a> ]
						</li>
						<li class="title">2、功能节点结构修改</li>
						<li class="info">拖动左边树形结构,进行系统功能节点结构修改; <br> [ <a id="reloadTree" href="#" onclick="return false;">重新加载</a>]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="saveTree" href="#" onclick="return false;">保存节点修改</a>
							]
						</li>
						<li class="title">3、功能节点结构维护增、删、改</li>
						<li class="info">选中某个功能节点,进行节点数据修改; <br> [ <a id="addParentNode" href="#" onclick="return false;">增加父节点</a>]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="addNode" href="#" onclick="return false;">增加子节点</a>
							]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="editNode" href="#" onclick="return false;">修改节点</a> ]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="delNode" href="#" onclick="return false;">删除节点</a> ]
						</li>
					</ul>
				</div>
			</div>
			<div style="display: none;">
				<div id="nodeInfoWin" class="easyui-window" title="节点维护" modal="true" closed="true" collapsible="false" minimizable="false" maximizable="false" icon="icon-save"
					style="width: 650px; height: 290px; padding: 5px; background: #fafafa;">
					<div class="easyui-layout" fit="true">
						<div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
							<form id="treeManagerForm" method="post">
								<table cellpadding=3 style="font-size: 12px;">
									<tr>
										<td>节点名称：</td>
										<td><input type="hidden" id="treeId" name="id" /> <input type="hidden" id="treePid" name="pId" value="" /> <input type="hidden" id="treeIsParent" name="isParent" /> <input
											type="hidden" id="treeOpen" name="open" /> <input type="text" id="treeName" name="name" style="width: 220px;" class="required" /></td>
									</tr>
									<tr valign="top">
										<td>节点链接:</td>
										<td><textarea id="treeUrlLink" name="urlLink" rows="4" cols="55" class="required"></textarea></td>
									</tr>
								</table>
							</form>
						</div>
						<div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px; margin-top: 2px;">
							<a id="btnOk" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 确定</a> <a  class="easyui-linkbutton" target="_parent"  icon="icon-cancel" href="javascript:void(0)"
								onclick="closeWin()">取消</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
