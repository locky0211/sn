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
	var s = '<a class="mini-button mini-button-plain" href="javascript:toEdit(\''+record.tabCode+'\',\''+record.brNo+'\',\''+record.reportDate+'\',\''+record.changeLocate+'\',\''+record.originalValue+'\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
	return s;
}

function toEdit(tabCode,brNo,reportDate,changeLocate,originalValue){
	mini.open({
				url : base + "bf/table/report/temp/toRdTableReportForValueChange.nut?tabCodeVersion=" + tabCode + "_false" + "&brNo=" + brNo
						+ "&reportDate=" + reportDate + "&checkFormula=" + encodeURIComponent(changeLocate)+"&originalValue="+originalValue,
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
				bmCode : mini.get("bmCode").getValue(),
				userId : mini.get("userId").getValue(),
				date : mini.get("date").getFormValue(),
				tabCode : mini.get("tabCode").getValue()
			});
}