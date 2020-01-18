var waveResultsGrid;
$(function() {
	waveResultsGrid = mini.get('waveResultsGrid');
	waveResultsGrid.on("load", function() {
		waveResultsGrid.mergeColumns(["organNo","reportNoStr"]);
			});
		});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function search() {
	var form = new mini.Form("#waveResultsForm");
	form.validate();
	if (form.isValid()) {
		gridLoad();
	}
}
function doExportExcel() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var tabcode = mini.get("tabcode").getValue();
	var checkProject = mini.get("checkProject").getValue();
	var checkRisk = mini.get("checkRisk").getValue();
	var form = new mini.Form("#waveResultsForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/doExportExcelSearch.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : brNo,
						reportDate : reportDate,
						tabType : tabType,
						reportRate : reportRate,
						tabcode : tabcode,
						checkProject : checkProject,
						checkRisk : checkRisk
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
function reportDateValid() {
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

function reportRateValid() {
	var rt = mini.get("tabType").getValue();
	var rR = mini.get("reportRate").getValue();
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	if(rt!=null&&rR!=null&&rd!=null&&rt!=""&&rR!=""&&rd!=""){
		if(rt =="50" &&(rd!="03"&&rd!="06"&&rd!="09"&&rd!="12")&&rR=="2"){
			mini.alert("请检查报表日期与校验频度！");
			mini.get("reportRate").setIsValid(false);
		}
		if(rt =="50" &&(rd!="06"&&rd!="12")&&rR=="3"){
			mini.alert("请检查报表日期与校验频度！");
			mini.get("reportRate").setIsValid(false);
		}
		if (rR == "1"  && rt == "40") {
			mini.alert("请检查报表类型与校验频度！");
			mini.get("reportRate").setIsValid(false);
		}
		if ((rR == "1" || rR == "2") && rt == "80") {
			mini.alert("请检查报表类型与校验频度！");
			mini.get("reportRate").setIsValid(false);
		}
		if ((rR == "1" || rR == "2" || rd == "3") && rt == "00") {
			mini.alert("请检查报表类型与校验频度！");
			mini.get("reportRate").setIsValid(false);
		}
	}
}

function onWinClosed() {
	gridLoad();
}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var tabcode = mini.get("tabcode").getValue();
	var checkProject = mini.get("checkProject").getValue();
	var checkRisk = mini.get("checkRisk").getValue();
	waveResultsGrid.load({
				brNo : brNo,
				reportDate : reportDate,
				tabType : tabType,
				reportRate : reportRate,
				tabcode : tabcode,
				checkProject : checkProject,
				checkRisk : checkRisk
			});
}

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="red">公共库</font>';
	} else {
		e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}

function onRiskRenderer(e) {
	if (e.value == '1') {
		return '<font color="red">等级一</font>';
	} else if (e.value == '2') {
		return '<font color="blue">等级二</font>';
	}else{
		return '<font color="blue">等级三</font>';
	}
}

function onFormulaRenderer(e){
	var tabType = mini.get("tabType").getValue();
	if (tabType == '4'){
		return '<font>(A1-C0)/C0</font>';
	}else{
		return '<font>(A1-A0)/A0</font>';
	}
}

