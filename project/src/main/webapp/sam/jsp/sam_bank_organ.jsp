<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>金融机构维护</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.loading.jsp"%>
<script type="text/javascript" src="${base }/sam/js/sam_bank_organ.js"></script>
</head>

<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<div style="width: 730px; height: 100%">
				<div style="width: 280px; height: 98%; float: left; border: 1px solid #6F9FF1; overflow: auto;">
					<ul id="tree" class="ztree"></ul>
				</div>
				<div style="float: left; width: 400px;">
					<ul>
						<li class="title">1、展开/关闭全部机构信息</li>
						<li class="info">[ <a id="exAll" href="#" onclick="return false;">展开全部</a>]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="clAll" href="#" onclick="return false;">收起全部</a> ]
						</li>
						<li class="title">2、机构结构修改</li>
						<li class="info">拖动左边金融机构,进行机构结构修改; <br> [ <a id="reloadTree" href="#" onclick="return false;">重新加载</a>]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="saveTree" href="#" onclick="return false;">保存机构结构</a>
							]
						</li>
						<li class="title">3、新增机构</li>
						<li class="info">选中某地区,添加机构信息<br>[ <a id="addFolder" href="#" onclick="return false;">新增目录</a> ]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="editFolder" href="#" onclick="return false;">修改目录</a>
							]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="addNode" href="#" onclick="return false;">新增机构</a> ]
						</li>
						<li class="title">4、机构信息维护</li>
						<li class="info">选中某个机构,进行机构信息修改<br>[ <a id="editNode" href="#" onclick="return false;">修改节点</a> ]&nbsp;&nbsp;&nbsp;&nbsp;[ <a id="delNode" href="#" onclick="return false;">删除节点</a> ]
						</li>
					</ul>
				</div>
			</div>
			<div style="display: none;">
				<div id="nodeInfoWin" class="easyui-window" title="机构维护" modal="true" closed="true" collapsible="false" minimizable="false" maximizable="false" icon="icon-save"
					style="width: 650px; height: 290px; padding: 5px; background: #fafafa;">
					<div class="easyui-layout" fit="true">
						<div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
							<form id="bankManagerForm" method="post">
								<table cellpadding=3 style="font-size: 12px;">
									<tr>
										<td>机构编号：</td>
										<td><input type="hidden" id="bbflag" value="" /><input type="hidden" id="bankOrganPid" name="pId" value="" /><input type="text" id="bankOrganNo" name="bankOrganNo"
											style="width: 220px;" class="required" /></td>
									</tr>
									<tr valign="top">
										<td>机构名称：</td>
										<td><input type="text" id="bankOrganName" name="bankOrganName" style="width: 220px;" class="required" /></td>
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

				<div id="nodeInfoWin2" class="easyui-window" title="机构维护" modal="true" closed="true" collapsible="false" minimizable="false" maximizable="false" icon="icon-save"
					style="width: 650px; height: 200px; padding: 5px; background: #fafafa;">
					<div class="easyui-layout" fit="true">
						<div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
							<form id="bankManagerForm2" method="post">
								<table cellpadding=3 style="font-size: 12px;">
									<tr valign="top">
										<td>目录名称：<input type="hidden" id="folderId" name="bankId" value="" /><input type="hidden" id="bankOrganPid2" name="pId" value="" /></td>
										<td><input type="text" id="bankOrganName2" name="bankName" style="width: 220px;" class="required" /></td>
									</tr>
								</table>
							</form>
						</div>
						<div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px; margin-top: 2px;">
							<a id="btnOk2" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 确定</a> <a  class="easyui-linkbutton" target="_parent"  icon="icon-cancel2" href="javascript:void(0)"
								onclick="closeWin2()">取消</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
