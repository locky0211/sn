<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>问题数据详细信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var success = '${obj.success}';
	var tableCode = '${requestScope.CiReportTableCode}';
	var fieldName = '${requestScope.CiReportFieldName}';
	var dataId = '${requestScope.CiReportTableDataId}';
</script>
<script type="text/javascript" src="${base }/ci/js/ciReportDataViewDetail.js"></script>
</head>
<body style="overflow: auto;">
	<!-- <div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">
					&nbsp;<a class="mini-button" iconCls="icon-search" onclick="link()">链接信息</a>
				</td>
			</tr>			
		</table>
	</div> -->
	<form id="dataForm" method="post">
	<div>
		<table class="tab" cellpadding="5" cellspacing="0">
			<c:if test="${obj.success == 'true'}">
				<c:forEach items="${obj.data }" var="pair">
					<tr>
						<td class="tab_label tab_align_c" >${pair.name1 }</td>
						<td class="tab_field_nr" colspan="3">
							<c:if test="${pair.code1 == requestScope.CiReportFieldName}">
							<input class="mini-textbox" id="${pair.code1 }" name="${pair.code1 }" value="${pair.content1 }" style="width: 98%" inputStyle="background:red;color:white;"/>
							</c:if>
							<c:if test="${pair.code1 != requestScope.CiReportFieldName}">
							<input class="mini-textbox" id="${pair.code1 }" name="${pair.code1 }" value="${pair.content1 }" style="width: 98%" />
							</c:if>
						</td>	
						<c:if test="${not empty pair.code2}">
						<td class="tab_label tab_align_c" >${pair.name2 }</td>
						<td class="tab_field_nr" colspan="3">
							<c:if test="${pair.code2 == requestScope.CiReportFieldName}">
							<input class="mini-textbox" id="${pair.code2 }" name="${pair.code2 }" value="${pair.content2 }" style="width: 98%" inputStyle="background:red;color:white;"/>
							</c:if>
							<c:if test="${pair.code2 != requestScope.CiReportFieldName}">
							<input class="mini-textbox" id="${pair.code2 }" name="${pair.code2 }" value="${pair.content2 }" style="width: 98%" />
							</c:if>
						</td>
						</c:if>
						<c:if test="${empty pair.code2}">
						<td class="tab_label tab_align_c" ></td>
						<td class="tab_field_nr" colspan="3"></td>
						</c:if>
					</tr>						
				</c:forEach>
			</c:if>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="edit()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</div>
	</form>
</body>
</html>