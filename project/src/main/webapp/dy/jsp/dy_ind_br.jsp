<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构指标数据维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_ind_br.js"></script>
<script type="text/javascript" src="${base }/common/My97DatePicker/WdatePicker.js"></script>
</head>
<style type="text/css">
.mini-grid-cell {
	cursor: pointer;
}

.mini-textbox-input {
	text-align: center;
}

.search .mini-textbox-input {
	text-align: left;
}
</style>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">指标：<input id="indTree" style="width: 300px;" popupHeight="350px;" popupWidth="350px;" required="true"
					class="mini-treeselect" url="${base }/dy/indicators/getIndicatorsBasicInfoList.nut" textField="indName" multiSelect="false" parentField="pId"
					valueField="id" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" onvaluechanged="loadInds" /></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="rdindbrGrid" class="mini-datagrid" style="width: 100%; height: 100%;" allowSortColumn="fasle" allowCellSelect="true"
			url="${base}/dy/indbr/getRdIndBrs.nut"  allowAlternating="true"  showPager="false">
			<div property="columns">
				<div name="action" width="140" headerAlign="center" align="center" renderer="onActionRenderer"></div>
				<div field="orgName" name="orgName" width="260" headerAlign="center">机构</div>
				<div field="vYear" align="center" headerAlign="center" width="72">
					年份<input property="editor" class="mini-textbox" width="60" onfocus="WdatePicker({dateFmt:'yyyy'})" />
				</div>
				<div field="v1" align="center" headerAlign="center">
					1月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v2" align="center" headerAlign="center">
					2月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v3" align="center" headerAlign="center">
					3月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v4" align="center" headerAlign="center">
					4月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v5" align="center" headerAlign="center">
					5月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v6" align="center" headerAlign="center">
					6月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v7" align="center" headerAlign="center">
					7月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v8" align="center" headerAlign="center">
					8月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v9" align="center" headerAlign="center">
					9月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v10" align="center" headerAlign="center">
					10月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v11" align="center" headerAlign="center">
					11月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>
				<div field="v12" align="center" headerAlign="center">
					12月<input property="editor" class="mini-textbox" width="80" vtype="float" />
				</div>

			</div>
		</div>
	</div>
</body>
</html>