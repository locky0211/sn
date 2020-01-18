var valueChangeRecordGird;
$(function() {
	valueChangeRecordGird = mini.get('valueChangeRecordGird');
			gridLoad();
		});

function gridLoad() {
	valueChangeRecordGird.load();
}

function onRenderer(e){
	var record = e.record;
	var s = '<a class="mini-button mini-button-plain" href="javascript:toEdit(\''+record.tabCode+'\',\''+record.brNo+'\',\''+record.reportDate+'\',\''+record.changeLocate+'\',\''+record.originalValue+'\',\''+record.frequentness+'\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
	return s;
}

function toEdit(tabCode,brNo,reportDate,changeLocate,originalValue,frequentness){
mini.open({
				url : base + "pireport/toPiTableReportForValueChange.nut?tableCode=" + tabCode + "&brNo=" + brNo
						+ "&subNo=" + reportDate + "&checkFormula=" + encodeURIComponent(changeLocate)+"&originalValue="+originalValue+"&frequentness="+frequentness,
				title : tabCode,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
	
}

function search() {
	valueChangeRecordGird.load({
				userId : mini.get("userId").getValue(),
				date : mini.get("date").getFormValue(),
				tabCode : mini.get("tabCode").getValue(),
				frequentness:mini.get("frequentness").getValue()
			});
}