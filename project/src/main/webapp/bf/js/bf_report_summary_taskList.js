var reportSummaryGrid;
$(function() {
	reportSummaryGrid = mini.get("reportSummaryGrid");
	gridLoad();
});

function doPartTaskSummary() {
	var selectNodes = reportSummaryGrid.getSelecteds();
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getValue();
	var tabType = mini.get("tabType").getValue();
	var xnjg=mini.get("xnjg").getValue();
	if(reportDate!=""){
		if(selectNodes.length>0){
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			var json = mini.encode(selectNodes);
			$.ajax({
				url : base + 'bf/report/Summary/doPartTaskSummary.nut',
				type : 'post',
				dataType : 'json',
				data : {json:json,brNo:brNo,reportDate:reportDate,tabType:tabType,xnjg:xnjg},
				success : function(text) {
					if (text.success) {
						//舍掉了miniUI的框架 不然信息不全
						/*mini.alert(text.data, '提醒', function() {
							CloseWindow("ok");
						});*/
						alert("汇总完成\n"+text.data);
						CloseWindow("ok");
						mini.unmask(document.body);
					} else {
						mini.unmask(document.body);
						mini.alert(text.data, '提醒');
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				}
			});
		}else{
			mini.alert("请至少选择一行数据!");
		}
	}else{
		mini.alert("请选择数据日期!");
	}
	
}

function gridLoad() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getValue();
	var tabType = mini.get("tabType").getValue();
	if (brNo != '' && reportDate != '' && tabType != '') {
		if (checkDateType()) {
			reportSummaryGrid.load({
						brNo : brNo,
						reportDate : reportDate,
						tabType : tabType,
					});
		} else {
			alert('日期与报表周期不相符!!');
		}
	}
}

function checkDateType() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M1"||rt=="M2") {
		return true;
	}
	var rd = mini.get("reportDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S1"||rt=="S2")) {
		rs = true;
	}

	
	if (rd == "12" && rt == "Y") {
		rs = true;
	}
	return rs;
}

