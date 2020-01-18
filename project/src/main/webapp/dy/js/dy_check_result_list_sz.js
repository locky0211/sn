$(function() {
			if (mini.get('bmCode').getValue() != ''&&mini.get('rDate').getValue()!='') {
				doSearchCheckResult();
			}
//			var bmcode=mini.get('bmCode');
//			bmcode.setValue(brno);
		});
function doSearchCheckResult() {
	var form = new mini.Form("#checkResultForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.get('checkResultGrid').load(o);
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}
function onCheckRiskRenderer(e) {
	if (e.value == '敏感关注') {
		return '<font color="blue">' + e.value + '</font>';
	} else {
		return '<font color="red">' + e.value + '</font>';
	}
}

function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == '') {
		return true;
	}
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
function doExportExcel() {
	var form = new mini.Form("#checkResultForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'dy/check/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						tabType : mini.get("tabType").getValue(),
						checkRisk : mini.get("checkRisk").getValue(),
						formulaType : mini.get("checkType").getValue(),
						checkArea : mini.get("checkArea").getValue()
					},
					cache : false,
					success : function(text) {
						if (text != null) {
							toDownLoadFileByFilePath(text);
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}

}
function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "dy/check/toDyReportCheckResultsView.nut?id=" + row.id + '&page=/dy/jsp/dy_report_check_results_view_sz.jsp',
				title : "校验结果",
				iconCls : "icon-text",
				width : 750,
				height : 400,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});

}


function typeChange(){
	var checkType = mini.get("checkType").getValue();
	if(1==checkType){
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]");
	}else if(2==checkType){
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'}]");
	}else{
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]");
	}
}

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="red">公共库</font>';
	} else {
		e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}