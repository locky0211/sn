$(function() {
			mini.get('reportDate').setValue(Date.today().addMonths(-1));
			mini.get('tabType').setValue('50');
			mini.get('checkLogGrid').load({
						reportDate : Date.today().addMonths(-1).toString('yyyyMM'),
						tabType : '50'
					});
		});
function doSearch() {
	var form = new mini.Form("#checkLogForm");
	form.validate();
	if (form.isValid()) {
		mini.get('checkLogGrid').load({
					reportDate : mini.get('reportDate').getFormValue(),
					tabType : mini.get('tabType').getValue()
				});
	}
}

function gridLoad() {
	var reportDate = mini.get('reportDate').getFormValue();
	var tabType = mini.get('tabType').getValue();
	if (reportDate != '' && tabType != '') {
		mini.get('checkLogGrid').load({
					reportDate : reportDate,
					tabType : tabType
				});
	}
}

function onRendererNoCheck(e) {
	var record = e.record;
	return "<a href='javascript:void(0)' onclick=\"toNoCheckView('" + record.areaCode + "')\">" + e.value + '</a>';
}
function onRendererNoPass1(e) {
	var record = e.record;
	return "<a href='javascript:void(0)' onclick=\"toNoPassView('" + record.areaCode + "','1')\">" + e.value + '</a>';
}

function onRendererNoPass2(e) {
	var record = e.record;
	return "<a href='javascript:void(0)' onclick=\"toNoPassView('" + record.areaCode + "','2')\">" + e.value + '</a>';
}

function toNoCheckView(areaCode) {
	mini.open({
				url : base + "rd/jsp/rd_no_check.jsp?areaCode=" + areaCode + "&reportDate=" + mini.get('reportDate').getFormValue() + "&tabType="
						+ mini.get('tabType').getValue(),
				title : "未校验机构信息",
				iconCls : "icon-text",
				width : 680,
				height : 600,
				allowResize : false,
				showMaxButton : true
			});
}
function toNoPassView(areaCode, checkRisk) {
	var t = '数值准确';
	if (checkRisk == '2') {
		t = '敏感关注';
	}
	mini.open({
				url : base + "rd/jsp/rd_no_pass.jsp?areaCode=" + areaCode + "&reportDate=" + mini.get('reportDate').getFormValue() + "&tabType="
						+ mini.get('tabType').getValue() + "&checkRisk=" + checkRisk,
				title : "校验错误信息(" + t + ")",
				iconCls : "icon-text",
				width : 680,
				height : 600,
				allowResize : false,
				showMaxButton : true
			});
}