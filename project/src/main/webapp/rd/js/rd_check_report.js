function gridLoad() {
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if (reportDate != '' && tabType != '') {
		if (checkDateType()) {
			mini.get('checkReportGrid').load({
				reportDate : reportDate,
				tabType : tabType
			});
		} else {
			alert('日期与报表周期不相符!!');
		}
	}
}

function checkDateType() {
	var rt = mini.get("tabType").getValue();
	if (rt == "50") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "40") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "80") {
		rs = true;
	}

	if (rd == "12" && rt == "00") {
		rs = true;
	}
	return rs;
}

function onField4Renderer(e) {
	var record = e.record;
	var uid = record._uid;
	if (record.field3 != record.field4) {
		if (e.value != '0') {
			return '<a herf="javascript:void()" onClick="showTableImportView(\'' + uid + '\')" style="color:red;text-decoration: underline;">'
					+ e.value + '</font>';
		} else {
			return '<a herf="javascript:void()" onClick="showTableImportView(\'' + uid + '\')" style="color:blue;text-decoration: underline;">'
					+ e.value + '</font>';
		}
	} else {
		return e.value;
	}
}
function onField5Renderer(e) {
	var record = e.record;
	if (e.value != '0') {
		return '<a herf="javascript:void()" onClick="showCheckView(\'' + record.field1 + '\',\'1\')" style="color:red;text-decoration: underline;">'
				+ e.value + '</font>';
	} else {
		return '0';
	}
}
function onField6Renderer(e) {
	var record = e.record;
	if (e.value != '0') {
		return '<a herf="javascript:void()" onClick="showCheckView(\'' + record.field1 + '\',\'2\')" style="color:blue;text-decoration: underline;">'
				+ e.value + '</font>';
	} else {
		return '0';
	}
}

function showTableImportView(row_uid) {
	var row = mini.get('checkReportGrid').getRowByUID(row_uid);
	mini.open({
		url : base + 'rd/jsp/rd_check_table_import.jsp?brNo=' + row.field1 + '&tabType=' + mini.get("tabType").getValue() + '&reportDate='
				+ mini.get("rDate").getFormValue(),
		title : "机构报表导入情况",
		iconCls : "icon-txt",
		width : 802,
		height : 558,
		allowResize : false,
		showMaxButton : true
	});
}

function showCheckView(brNo, checkRisk) {
	parent.showTab(brNo, '校验结果信息', base + 'rd/jsp/rd_check_result_list.jsp?brNo=' + brNo + '&reportDate=' + mini.get("rDate").getFormValue()
			+ '01&checkRisk=' + checkRisk + '&tabType=' + mini.get("tabType").getValue());
}
