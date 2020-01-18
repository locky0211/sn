<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>同业客户信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_tykhxx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
<script type="text/javascript">
	var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
</head>
<body style="overflow: auto; height: 100%">
	<div class="pTitle">
		同业客户信息填报
		<c:if test="${not empty obj.khmc}">
			(${obj.khmc })
		</c:if>
		<!-- <div style="float: right">
			<a class="mini-button" onclick="openView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a>
		</div> -->
	</div>
	<div id="tabs1" class="mini-tabs" activeIndex="0" style="width: 100%; height: 80%;" plain="false" tabPosition="left">
		<div title="客户基本信息">
			<form id="tykhxxForm" method="post" action="">
				<div style="display: none;">
					<input class="mini-hidden" id="tykhxxId" name="id" value="${obj.id}" />
					<input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq}" /> 
				</div>
				<table cellpadding="6" cellspacing="0">
					<tr>
						<td style="width: 90px;">机构代码：</td>
						<td><input name="brno" id="brno" style="width: 220px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut"
							textField="bmName" valueField="bmCode" parentField="pId" value="${obj.brno }" allowInput="false" /></td>
					</tr>
					<tr>
						<td>国别代码：</td>
						<td><input name="gbdm" id="gbdm" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=GBDM"
							textField="zdName" parentField="pId" valueField="zdValue" value="${obj.gbdm }" onbeforenodeselect="beforegbdmselect"
							resultAsTree="false" allowInput="false" /></td>
					</tr>
					<tr>
						<td style="width: 90px;">客户类别：</td>
						<td><input name="khlb" required="true" showNullItem="true" class="mini-comboBox" style="width: 220px;" value="${obj.khlb }"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=khlb" textField="zdName" valueField="zdValue" /></td>
						<td style="width: 90px;">组织机构代码：</td>
						<td><input name="zzjgdm" id="zzjgdm" class="mini-textbox" style="width: 220px;" value="${obj.zzjgdm }" onvalidation="zzjgdmValid" /></td>
					</tr>
					<tr>
						<td style="width: 90px;">客户号：</td>
						<td><input name="khdm" id="khdm" required="true" class="mini-textbox" style="width: 220px;" value="${obj.khdm }"
							onvalidation="khdmValidate" /></td>
						<td style="width: 90px;">客户名称：</td>
						<td><input id="khmc" name="khmc" required="true" class="mini-textbox" style="width: 220px;" value="${obj.khmc }" /></td>
					</tr>
					<tr>
						<td style="width: 90px;">内部评级：</td>
						<td><input id="nbpj" name="nbpj" class="mini-textbox" value="${obj.nbpj }" /></td>
						<td>外部评级：</td>
						<td><input id="wbpj" name="wbpj" class="mini-textbox" value="${obj.wbpj }" /></td>
					</tr>
					<tr>
						<td style="width: 90px;">非现场监管统计机构编码：</td>
						<td><input id="fxcjgtjjgdm" name="fxcjgtjjgdm" class="mini-textbox" value="${obj.fxcjgtjjgdm }" /></td>
					</tr>
					
					<tr>
						<td style="width: 90px;">拆放同业:</td>
						<td><input id="cfty" onvalidation="tykhyeValid" name="cfty" class="mini-spinner" value="${obj.cfty }" allowLimitValue="fasle"  decimalPlaces="2" changeOnMousewheel="false"/></td>
						<td>存放同业：</td>
						<td><input id="zfty" onvalidation="tykhyeValid" name="zfty" class="mini-spinner" value="${obj.zfty }" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">债券回购：</td>
						<td><input id="zqhg" name="zqhg" onvalidation="tykhyeValid" class="mini-spinner" value="${obj.zqhg }" allowLimitValue="fasle" decimalPlaces="2" /></td>
						<td>股票质押贷款：</td>
						<td><input id="gpzydk" name="gpzydk" onvalidation="tykhyeValid" onvalidation="tykhyeValid" class="mini-spinner" value="${obj.gpzydk }" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">买入返售资产：</td>
						<td><input id="mrfszc" name="mrfszc" class="mini-spinner" onvalidation="tykhyeValid" value="${obj.mrfszc }" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
						<td>买断式转贴现：</td>
						<td><input id="mdsztx" name="mdsztx" class="mini-spinner" onvalidation="tykhyeValid" value="${obj.mdsztx }" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">持有债券：</td>
						<td><input name="cyzq" id="cyzq" class="mini-spinner" decimalPlaces="2" value="${obj.cyzq }" allowLimitValue="fasle" onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
						<td>股权投资：</td>
						<td><input name="gqtz" id="gqtz" class="mini-spinner" decimalPlaces="2" value="${obj.gqtz }" allowLimitValue="false"
							 onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">其他表内业务：</td>
						<td><input name="qtbnyw" id="qtbnyw" class="mini-spinner" decimalPlaces="2" value="${obj.qtbnyw }"  
							allowLimitValue="false" onvalidation="tykhyeValid"  changeOnMousewheel="false"/></td>
						<td>其他表外业务：</td>
						<td><input name="qtbwyw" id="qtbwyw" class="mini-spinner" allowLimitValue="fasle" value="${obj.qtbwyw }" 
							  onvalidation="tykhyeValid" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">同业代付：</td>
						<td><input name="tydf" id="tydf" class="mini-spinner" decimalPlaces="2" value="${obj.tydf }"
							allowLimitValue="false" onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
						<td>卖出回购资产：</td>
						<td><input name="mchgzc" id="mchgzc" class="mini-spinner"  value="${obj.mchgzc }"
							 onvalidation="tykhyeValid" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td style="width: 90px;">不可撤销的承诺及或有负债：</td>
						<td><input name="bkcxdcnjhyfz" id="bkcxdcnjhyfz" class="mini-spinner"  value="${obj.bkcxdcnjhyfz }" 
							 onvalidation="tykhyeValid" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td colspan="4" style="text-align: center;">
							<a class="mini-button" onclick="onAdd" iconCls="icon-save" style="width: 60px; margin-right: 20px;">保存</a><a class="mini-button"
							iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
						</td>
					</tr>
				</table>
			</form>
		</div>
		<c:if test="${not empty obj.id}">
			<div title="同业客户授信情况">
				<div style="width: 100%;">
					<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
						<table style="width: 100%;">
							<tr>
								<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addTykhSxqk()">新增</a> <a class="mini-button"
									iconCls="icon-edit" plain="true" onclick="editTykhSxqk()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
									onclick="delTykhSxqk()">删除</a><a class="mini-button" iconCls="icon-reload" plain="true" onclick="loadtykhsxqkGrid()">刷新</a></td>
							</tr>
						</table>
					</div>
				</div>
				<div id="tykhsxqkGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/sxqk/getDspsxqkList.nut"
					showPager="true" showModified="false" onrowdblclick="onDkhtxxClick">
					<div property="columns">
						<div type="indexcolumn" width="40" align="center" headerAlign="center">序号</div>
						<div field="sxhm" width="160" align="center" headerAlign="center">授信号</div>
						<div field="sxed" align="center" headerAlign="center">授信额度</div>
						<div field="dksxed" align="center" headerAlign="center">贷款授信额度</div>
						<div field="sxqsrq" align="center" headerAlign="center">授信起始日期</div>
						<div field="sxdqrq" align="center" headerAlign="center">授信到期日期</div>
						<div field="dkye" align="center" headerAlign="center">贷款余额</div>
						<div field="cyzqye" align="center" headerAlign="center">持有资产余额</div>
						<div field="cygqye" align="center" headerAlign="center">持有股权余额</div>
						<div field="qtbnxyfxzcye" width="160" align="center" headerAlign="center">其他表内信用风险资产余额</div>
						<div field="bwywye" align="center" headerAlign="center">表外业务余额</div>
						<div field="xyywyezysxed" width="160" align="center" headerAlign="center">现有业务余额占用授信额度</div>
						<div field="dkyezydksxed" width="160" align="center" headerAlign="center">贷款余额占用贷款授信额度</div>
						<div field="sksysxed" align="center" width="150" headerAlign="center">尚可使用授信额度</div>
						<div field="sksydksxed" align="center" width="150" headerAlign="center">尚可使用贷款授信额度</div>
						<div field="glfsxbz" align="center" headerAlign="center">关联方授信标志</div>
					</div>
				</div>
			</div>
		</c:if>
	</div>
	
</body>
</html>