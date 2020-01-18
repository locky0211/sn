<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>个人客户信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var cwzdm = '${cwzdm }';
	var xzqhdm = '${obj.zzxzqhdm}';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_grkhxx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_grkhxx_check.js"></script>
</head>
<body style="overflow: auto; height: 100%">
	<div class="pTitle">
		个人客户信息填报
		<c:if test="${not empty obj.jkrxm}">
			(${obj.jkrxm })
		</c:if>
		<!-- <div style="float: right">
			<a class="mini-button" onclick="openView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a>
		</div> -->
	</div>
	<div id="tabs1" class="mini-tabs" activeIndex="0" style="width: 100%; height: 80%;" plain="false" tabPosition="left">
		<div title="客户基本信息">
			<form id="grkhxxForm" method="post" action="">
				<div style="display: none;">
					<input class="mini-hidden" id="grkhxxId" name="id" value="${obj.id}" /> <input
						class="mini-hidden" name="id" id="khjbxxid" value="${obj.id}" /> <input class="mini-hidden" id="sjrq" name="sjrq"
						value="${obj.sjrq}" />
				</div>
				<table cellpadding="6" cellspacing="0">
					<tr>
						<td style="width: 90px;">机构名称：</td>
						<td colspan="3">
							<input id="brno" style="width: 240px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmList.nut"
								textField="bmName" valueField="bmCode" parentField="pId" popupHeight="300" popupWidth="220"
								allowInput="false" value="${obj.brno }" />	
						</td>
					</tr>
					<tr>
						<td style="width: 90px;">客户名称：</td>
						<td colspan="3"><input id="jkrxm" name=""jkrxm"" required="true" class="mini-textbox"  value="${obj.jkrxm }" onvalidation="khmcvalidat"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">有效证件类型：</td>
						<td><input id="yxsfzjlx" name="yxsfzjlx" required="true" class="mini-combobox" style="width: 170px;" textField="zdName"
							valueField="zdValue" emptyText="请选择..." url="${base }/sys/ggzd/getGgzdList.nut?groupId=zjlx2" value="${obj.yxsfzjlx }" showNullItem="true"
							allowInput="false" onvaluechanged="onZjlxValueChange" /></td>
						<td>证件号码：</td>
						<td><input id="zjhm" name="zjhm" required="true" vtype="minLength:2" onvalidation="checkGrkhzjhm" class="mini-textbox"
							style="width: 220px;" value="${obj.zjhm }" /></td>
					</tr>
					<tr>
						<td valign="top">行政区划代码：</td>
						<td colspan="3"><input id="zzxzqhdm" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=xzqhdm"
							textField="zdName" parentField="pId" valueField="zdValue" required="true" onbeforenodeselect="beforXzqhdmselect"
							resultAsTree="false" allowInput="false" /> <input id="xzqhdmIpt" name="zzxzqhdm" class="mini-textbox" required="true"
							onvalidation="xzqudavalidat" value="${obj.zzxzqhdm }" style="margin-left: 20px; width: 80px" readonly="readonly" /></td>
					</tr>
					<tr>
						<td valign="top">家庭住址：</td>
						<td colspan="3"><input id="khzz" name="khzz" required="true" vtype="minLength:2" onvalidation="dzvalidat" class="mini-textarea"
							style="width: 450px;" value="${obj.khzz }" /></td>
					</tr>
					<tr>
						<td>贷款合同号：</td>
						<td><input class="mini-textbox" id="dkhth" name="dkhth" style="width: 180px;"  value="${obj.dkhth }" required="true"/></td>
						<td>借据号:</td>
						<td><input name="jjh" required="true" vtype="rangeChar:2,30" class="mini-textbox" style="width: 200px;"
							value="${obj.jjh }" /></td>
					</tr>
					<tr>
						<td>贷款品种：</td>
						<td colspan="3"><input id="dkpz" name="dkpz" class="mini-combobox" showNullItem="true" required="true"
							style="width: 150px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dkpz" value="${obj.dkpz }"
							allowInput="false" onvalidation="dklxvalidat" /></td>
					</tr>
					<tr>
						<td>担保方式：</td>
						<td><input name="dbfs" class="mini-combobox" showNullItem="true" required="true" style="width: 80px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dbfs" value="${obj.dbfs }" allowInput="false" /></td>
						<td>还款方式：</td>
						<td><input name="hkfs" required="true" class="mini-combobox" style="width: 120px;" textField="zdName"
							valueField="zdValue" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=hkfs" value="${obj.hkfs }" allowInput="false" /></td>
					</tr>
					<tr>
						<td>发放金额：</td>
						<td><input id="ffje" name="ffje" class="mini-spinner" decimalPlaces="2" value="${obj.ffje }"
							allowLimitValue="false" validateOnChanged="false" onvalidation="ffjeValid" changeOnMousewheel="false"/></td>
						<td>发放日期：</td>
						<td><input id="ffrq" name="ffrq" class="mini-datepicker" required="true" onvalidation="ffrqValid"
							validateOnChanged="false" style="width: 120px;" format="yyyyMMdd" value="${obj.ffrq }" /></td>
					</tr>
					<tr>
						<td>贷款余额：</td>
						<td><input name="dkye" class="mini-spinner" decimalPlaces="2" value="${obj.dkye }"
							validateOnChanged="false" allowLimitValue="false" onvalidation="dkyeValid" changeOnMousewheel="false"/></td>
						<td>到期日期：</td>
						<td><input name="dqrq" class="mini-datepicker" style="width: 120px;" format="yyyyMMdd" value="${obj.dqrq }"
							required="true" validateOnChanged="false" onvalidation="dqrqValid" /></td>
					</tr>
					<tr>
						<td>违约金额：</td>
						<td><input name="wyje" class="mini-spinner" decimalPlaces="2" value="${obj.wyje }"
							validateOnChanged="false" required="true" allowLimitValue="false" onvalidation="ffjeValid" changeOnMousewheel="false"/></td>
						<td>违约天数：</td>
						<td><input name="wyts" class="mini-spinner" style="width: 80px;" value="${obj.wyts }" validateOnChanged="false"
							required="true" vtype="int" onvalidation="wytsValid" allowLimitValue="false" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td>最近一次还款金额：</td>
						<td><input id="zjychkje" name="zjychkje" class="mini-spinner" allowLimitValue="fasle" decimalPlaces="2"
							value="${obj.zjychkje }" onvaluechanged="zjychkjeValid" changeOnMousewheel="false"/></td>
						<td>最近一次还款日期：</td>
						<td><input id="zjychkrq" name="zjychkrq" class="mini-textbox" style="width: 100px;" format="yyyyMMdd"
							 value="${obj.zjychkrq }" /></td>
					</tr>
				</table>
				
				<fieldset style="border-top: solid 1px #aaa; padding: 5px;">
					<legend>助学贷款专项指标</legend>
					<table class="tab" cellpadding="4" cellspacing="0" style="border-left: 1px solid #99BBE8; border-right: 1px solid #99BBE8;">
						<tr>
							<td style="width: 120px;" class="tab_label tab_align_c tab_top ">学校名称：</td>
							<td style="width: 280px;" class="tab_field_nr tab_field_nb tab_top "><input id="xxmc" name="xxmc" vtype="rangeChar:2,10" class="mini-textbox"
								style="width: 200px;" value="${obj.xxmc }" /></td>
							<td style="width: 90px;" class="tab_label tab_align_c tab_top ">学生证号：</td>
							<td  class="tab_field_nr tab_top "><input id="xszh" name="xszh" class="mini-textbox" vtype="rangeChar:2,30"
								style="width: 200px;" value="${obj.xszh }" /></td>
						</tr>
						<tr>
							<td  class="tab_label tab_align_c ">助学贷款类型：</td>
							<td colspan="3" class="tab_field_nr "><input id="zxdklx" name="zxdklx" class="mini-combobox" style="width: 150px;"
								textField="zdName" showNullItem="true" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zxdklx" value="${obj.zxdklx }"
								onvalidation="zxdklxvalidat" allowInput="false" /></td>
						</tr>
						<tr>
							<td class="tab_label tab_align_c ">学校行政区划代码：</td>
							<td class="tab_field_nr tab_field_nb"><input id="xxxzqhdm" style="width: 180px;" class="mini-treeselect"
								url="${base }/sys/ggzd/getGgzdList.nut?groupId=xzqhdm" textField="zdName" parentField="pId" valueField="zdValue" onbeforenodeselect="beforegbdmselect"
								resultAsTree="false" allowInput="false" value="${obj.xxxzqhdmmc}" /> <input id="xzqhdmIpt" class="mini-textbox" name="xxxzqhdm"
								value="${obj.xxxzqhdm}" style="margin-left: 10px; width: 80px" readonly="readonly" /></td>
							<td class="tab_label tab_align_c ">学校地址:</td>
							<td class="tab_field_nr "><input id="xxdz" name="xxdz" class="mini-textbox" style="width: 200px;"
								value="${obj.xxdz}" /></td>
						</tr>
						<tr>
							<td class="tab_label tab_align_c ">家庭行政区划代码：</td>
							<td class="tab_field_nr tab_field_nb"><input id="jtxzqhdm" style="width: 180px;" class="mini-treeselect"
								url="${base }/sys/ggzd/getGgzdList.nut?groupId=xzqhdm" textField="zdName" parentField="pId" valueField="zdValue"  onbeforenodeselect="beforegbdmselectjt"
								resultAsTree="false" allowInput="false" value="${obj.dksjtxzqhdmmc}"/> <input id="jtxzqhdmIpt" class="mini-textbox" name="dksjtzzxzqhdm"
									value="${obj.dksjtzzxzqhdm}" style="margin-left: 10px; width: 80px" readonly="readonly"/></td>
							<td class="tab_label tab_align_c ">家庭住址：</td>
							<td class="tab_field_nr "><input id="dksjtzz" name="dksjtzz" class="mini-textbox" style="width: 200px;"
								value="${obj.dksjtzz }" /></td>
						</tr>
					</table>
			</fieldset>
				
			</form>
		</div>
		<%-- <c:if test="${not empty obj.id}">
			<div title="个人客户贷款信息">
				<div>个人客户贷款合同信息</div>
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
								<c:if test="${param.isHdata == 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHGrdkhtView()">查看</a></td>
								</c:if>
								<c:if test="${param.isHdata != 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGrkhdkhtxx()">新增</a> <a class="mini-button"
										iconCls="icon-edit" plain="true" onclick="editGrkhdkhtxx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
										onclick="delGrkhdkhtxx()">删除</a></td>
								</c:if>
							</tr>
						</table>
					</div>
				</div>
				<div id="grkhdkhtGrid" class="mini-datagrid" style="width: 100%; height: 28%;" url="${base}/dkht/getCrDkhtxxList.nut"
					showPager="false" showModified="false" onrowclick="onDkhtxxClick">
					<div property="columns">
						<div type="indexcolumn" align="center" headerAlign="center">序号</div>
						<div field="hth" align="center" headerAlign="center">贷款合同号</div>
						<div field="ghrName" align="center" headerAlign="center">管户人</div>
					</div>
				</div>
				<div>个人客户贷款信息</div>
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
									<c:if test="${param.isHdata == 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHGrdkmxView()">查看</a></td>
								</c:if>
								<c:if test="${param.isHdata != 1}">
								<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGrkhdk()">新增</a><a class="mini-button"
									iconCls="icon-edit" plain="true" onclick="editGrkhdk()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
									onclick="delGrkhdk()">删除</a> <a class="mini-button" iconCls="icon-reload" plain="true" onclick="reloadGrkhdkGrid()">刷新</a></td>
									</c:if>
							</tr>
						</table>
					</div>
				</div>
				<div id="grkhdkGrid" class="mini-datagrid" style="width: 100%; height: 44%;" url="${base}/grkh/getCrGrdkList.nut" showPager="false"
					showModified="false" allowUnselect="true">
					<div property="columns">
						<div type="checkcolumn" align="center" headerAlign="center"></div>
						<div field="dkffhmc" width="80" align="center" headerAlign="center">贷款发放行</div>
						<div field="dkhth" width="80" align="center" headerAlign="center">贷款合同号</div>
						<div field="jjh" width="40" align="center" headerAlign="center">借据号</div>
						<div field="dkpzmc" align="center" headerAlign="center">贷款品种</div>
						<div field="ffje" align="center" headerAlign="center">发放金额</div>
					</div>
				</div>
			</div>
			<div title="个人客户担保信息">
				<div>个人客户担保合同信息</div>
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
								<c:if test="${param.isHdata == 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHGrdbhtView()">查看</a></td>
								</c:if>
								<c:if test="${param.isHdata != 1}">
								<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGrkhdbhtxx()">新增</a> <a class="mini-button"
									iconCls="icon-edit" plain="true" onclick="editGrkhdbhtxx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
									onclick="delGrkhdbhtxx()">删除</a></td>
									</c:if>
							</tr>
						</table>
					</div>
				</div>
				<div id="grkhdbhtGrid" class="mini-datagrid" style="width: 100%; height: 28%;" url="${base}/dbht/getCrDbhtxxList.nut"
					showPager="false" showModified="false" onrowclick="onDbhtxxClick">
					<div property="columns">
						<div type="indexcolumn" align="center" headerAlign="center">序号</div>
						<div field="dbhth" align="center" headerAlign="center">担保合同号</div>
						<div field="dkhth" align="center" headerAlign="center">贷款合同号</div>
						<div field="ghrName" align="center" headerAlign="center">管户人</div>
					</div>
				</div>
				<div>个人客户担保信息</div>
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
								<c:if test="${param.isHdata == 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHGrdbmxView()">查看</a></td>
								</c:if>
								<c:if test="${param.isHdata != 1}">
								<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGrkhdb()">新增</a><a class="mini-button"
									iconCls="icon-edit" plain="true" onclick="editGrkhdb()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
									onclick="delGrkhdb()">删除</a><a class="mini-button" iconCls="icon-reload" plain="true" onclick="reloadGrkhdbGrid()">刷新</a></td>
									</c:if>
							</tr>
						</table>
					</div>
				</div>
				<div class="mini-fit">
					<div id="grkhdbGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/grkh/getCrGrdbList.nut"
						showPager="false" showModified="false" allowUnselect="true">
						<div property="columns">
							<div type="checkcolumn" align="center" headerAlign="center"></div>
							<div field="dbhth" width="80" align="center" headerAlign="center">担保合同号</div>
							<div field="ypmc" width="40" align="center" headerAlign="center">押品名称</div>
							<div field="ypdm" headerAlign="center">押品代码</div>
						</div>
					</div>
				</div>
			</div>
			<div title="共同债务人">
				<div>共同债务人</div>
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
							<c:if test="${param.isHdata == 1}">
									<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHGrgtzwrView()">查看</a></td>
								</c:if>
								<c:if test="${param.isHdata != 1}">
								<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGtzwr()">新增</a> <a class="mini-button"
									iconCls="icon-edit" plain="true" onclick="editGtzwr()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true" onclick="delGtzwr()">删除</a>
									<span class="separator">&nbsp;&nbsp;借据号: <input id="dkid" name="dkid" showNullItem="true" vtype="minLength:2" class="mini-combobox"
										url="${base }/grkh/getCrGrkhdkByKhid.nut?khid=${obj.id}" textField="jjh" valueField="id" style="width: 200px;" />&nbsp;&nbsp;<a
										iconCls="icon-search" class="mini-button" plain="true" onclick="searchZwr()">查询</a></td>
										</c:if>
							</tr>
						</table>
					</div>
				</div>
				<div id="gtzwrGrid" class="mini-datagrid" style="width: 100%; height: 85%;" url="${base}/gtzwr/getCrgtzwr.nut"
					showPager="true" showModified="false">
					<div property="columns">
						<div field="xm" align="center" headerAlign="center">姓名</div>
						<div field="zjlxmc" align="center" headerAlign="center">证件类型</div>
						<div field="zjdm" align="center" headerAlign="center">证件号</div>
						<div field="jjh" align="center" headerAlign="center">借据号</div>
					</div>
				</div>
			</div>
		</c:if> --%>
	</div>
	<div style="text-align: center; padding: 18px;">
		<a class="mini-button" onclick="onAdd" iconCls="icon-save" style="width: 60px; margin-right: 20px;">保存</a> <a class="mini-button"
			iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>