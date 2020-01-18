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
	var form = new mini.Form("#waveResultsForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'bf/check/wave/doExportExcelSearch.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : brNo,
						reportDate : reportDate,
						tabType : tabType,
						reportRate : reportRate,
						tabcode : tabcode,
						checkProject : checkProject,
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
	if (rt == "M1"||rt=="M2") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S1"||rt=="S2")) {
		rs = true;
	}
    if (rd == "12" && rt == "Y") {
		rs = true;
	}
	return rs;
}

function onWinClosed() {
	gridLoad();
}

function onElementRenderer(e){
	var strs= new Array(); //定义一数组 
	strs = e.value.split("_");
	return '<font>'+strs[1]+'</font>';
}

function ondValueRenderer(e){
	return '<font>50000</font>';
}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var tabcode = mini.get("tabcode").getValue();
	var checkProject = mini.get("checkProject").getValue();
	waveResultsGrid.load({
				brNo : brNo,
				reportDate : reportDate,
				tabType : tabType,
				reportRate : reportRate,
				tabcode : tabcode,
				checkProject : checkProject,
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

function onFormulaRenderer(e){
	var tabType = mini.get("tabType").getValue();
	if (tabType == '4'){
		return '<font>(A1-C0)/C0</font>';
	}else{
		return '<font>(A1-A0)/A0</font>';
	}
}

