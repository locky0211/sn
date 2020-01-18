<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验过程</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkAllInfo_sls_zdy.js"></script>

<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
  String dateformat = (String)Session.getAttribute("DateFormat");
%>

</head>
<body>
<input type="hidden" id="a" value="<%=dateformat%>"/>
<c:set var="dateformat" value="${sessionScope.DateFormat }"></c:set>
<c:if test="${dateformat =='1'}">

	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构：<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 300px;" parentField="pId"
                        valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期：<input
                        id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;"><span class="separator"></span> 
						公式版本：<input id="version" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckVersion" textField="zdName" valueField="zdValue" showClose="true" oncloseclick="onCloseClick" required="true" style="width: 100px;" />
						<span class="separator"></span> 
						表名称：
						<div id="tableRange" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true" textField="zdName" valueField="zdValue"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span>
						校验类型：<input id="formulaType" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckType" textField="zdName" valueField="zdValue" showClose="true" oncloseclick="onCloseClick" style="width: 100px;" /> &nbsp;&nbsp;&nbsp;
						<a iconCls="icon-goto" class="mini-button" plain="true" onclick="addCheck()">添加校验</a>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;"  onrowdblclick="rowdblclick" url="${base}/check/allInfoSls/zdy/getCheckAllInfo.nut?brNo=${param.brNo}&reportDate=${param.reportDate}" pageSize="10" allowCellEdit="true" showPager="true"
			idField="id" onshowrowdetail="onShowRowDetail" showModified="false" showLoading="false">
			<div property="columns">
				<div type="expandcolumn" width="40">当前公式信息</div>
				<div field="brNO" name="brNo" align="center" width="90" headerAlign="center"></div>
				<div field="brName" align="center" width="150" headerAlign="center">机构名称</div>
				<div field="sjRQ" width="40" align="center" headerAlign="center">数据日期</div>
				<div field="formulaType" width="40" align="center" renderer="onTypeNameRenderer" headerAlign="center">校验类型</div>
				<div field="version" width="40" renderer="onVersionNameRenderer" headerAlign="center" align="center">版本</div> 
				<div field="tableRange" width="100" renderer="onTableRangeRenderer" headerAlign="center" align="center">校验表范围</div>  
				<div field="checkStartTime" width="80" align="center" dateFormat="yyyy-MM-dd HH:mm:ss" headerAlign="center">开始时间</div>
				<div field="checkEndTime" width="80" align="center" dateFormat="yyyy-MM-dd HH:mm:ss" headerAlign="center">结束时间</div>
				<div field="formulaTotalCount" width="80" align="center" headerAlign="center">需执行规则总数</div>
				<div field="completedFormulaNumber" width="80" align="center" headerAlign="center">已完成规则数</div>
				<div field="status" width="40" renderer="statusRenderer" align="center" headerAlign="center">状态</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
	
	 <div id="checkFormula_Form" style="display:none;">
        <div id="checkFormula_grid" class="mini-datagrid" style="width:100%;height:200px;" 
            url="${base}/check/allInfoSls/zdy/getCheckFormulaById.nut" showPager="false">
            <div property="columns">
                <div field="repCode" width="100" renderer="onNameRenderer" align="center" headerAlign="center">校验表名
                    <input property="editor" class="mini-textbox" />
                </div>
                <div field="formulaType" width="40" renderer="onTypeNameRenderer"  align="center" headerAlign="center">公式类型
                
                </div>  
                <div field="version" width="40" renderer="onVersionNameRenderer" headerAlign="center" align="center">版本</div>          
                <div field="fieldCode" width="40" align="center" headerAlign="center" >校验字段
                
                </div>
                <div field="fieldName" width="60" align="center" headerAlign="center">校验字段名
                
                </div>
                <div field="formula" width="200" headerAlign="center" align="center">公式</div>                                    
                <div field="formulaDesc" width="200" headerAlign="center" align="center">公式描述</div>
                <div field="updateTime" width="40" headerAlign="center" align="center" dateFormat="yyyy-MM-dd">更新日期</div>    
                <div field="formulaState" width="40" headerAlign="center" renderer="formulaStateRenderer" align="center">状态</div>                    
            </div>
        </div>    
    </div>
	<div id="checkTempGrid" class="mini-datagrid" style="width: 100%; height: 40%;" url="${base}/check/allInfoSls/zdy/getCheckBrTemp.nut" pageSize="10" allowCellEdit="true" showPager="true"
		showModified="false" showLoading="false">
		<div property="columns">
			<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
			<div field="brNO" name="brNo" align="center" width="90" headerAlign="center"></div>
			<div field="brName" align="center" width="90" headerAlign="center">机构名称</div>
			<div field="sjRQ" width="40" align="center" headerAlign="center">数据日期</div>
			<div field="formulaType" width="40" align="center" renderer="onTypeNameRenderer" headerAlign="center">校验类型</div>
			<div field="version" width="40" renderer="onVersionNameRenderer" headerAlign="center" align="center">版本</div>
			<div field="tableRange" width="150" renderer="onTableRangeRenderer" headerAlign="center" align="center">校验表范围</div>
			 <div field="status" width="40" headerAlign="center" renderer="tempStatusRenderer" align="center">状态</div>       
			<div name="edit" width="80" align="center" renderer="onCancelRenderer" headerAlign="center">操作</div>
		</div>
	</div>
	
</c:if>
</body>
</html>