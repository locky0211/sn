$(function() {
			mini.get('reportDate').setValue(Date.today().addMonths(-1));
			mini.get('tabType').setValue('50');
		});
function doSearch() {
	var form = new mini.Form("#checkLogForm");
	form.validate();
	if (form.isValid()) {
		mini.get('checkLogGrid').load({
					areaCode : mini.get('areaCode').getValue(),
					reportDate : mini.get('reportDate').getFormValue(),
					tabType : mini.get('tabType').getValue()
				});
	}
}

function gridLoad() {
	var reportDate = mini.get('reportDate').getFormValue();
	var areaCode = mini.get('areaCode').getValue();
	var tabType = mini.get('tabType').getValue();
	if (areaCode != '' && reportDate != '' && tabType != '') {
		mini.get('checkLogGrid').load({
					areaCode : areaCode,
					reportDate : reportDate,
					tabType : tabType
				});
	}
}

function onRendererNoPass1(e) {
	var record = e.record;
	return "<a href='javascript:void(0)' onclick=\"toNoPassView('" + record.areaCode + "','1')\">" + e.value + '</a>';
}

function onRendererNoPass2(e) {
	var record = e.record;
	return "<a href='javascript:void(0)' onclick=\"toNoPassView('" + record.areaCode + "','2')\">" + e.value + '</a>';
}

function toNoPassView(areaCode, checkRisk) {
	parent.showTab('校验错误信息' + areaCode, "校验错误信息", base + 'dy/jsp/dy_check_result_list.jsp?brNo=' + areaCode + "&reportDate="
					+ mini.get('reportDate').getValue() + "&tabType=" + mini.get('tabType').getValue() + "&checkRisk=" + checkRisk);
}