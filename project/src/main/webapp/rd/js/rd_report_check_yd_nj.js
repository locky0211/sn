var reportCheckGrid;
$(function() {
	reportCheckGrid = mini.get('reportCheckGrid');
	gridLoad();
});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function search() {
	gridLoad();
}
function doExportExcel() {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/doExportExcelSearch_NJ.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						reportRate : mini.get("reportRate").getValue(),
						tabType : mini.get("tabType").getValue(),
						tabcode : mini.get("tabcode").getValue(),
						checkProject : mini.get("checkProject").getValue(),
						checkRisk : mini.get("checkRisk").getValue()
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

function onCheckRiskRendeder(e){
	 if(e.value == '1'){
		 return '<font color="red">等级一</font>';
	 }else if(e.value == '2'){
		 return '<font color="blue">等级二</font>';
	 }else {
		 return '<font color="green">等级三</font>';
	 }
}
function ondValueRenderer(e){
	return '<font>50000</font>';
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
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getValue();
	var formulaId = mini.get("formulaId").getValue();
	reportCheckGrid.load({
				brNo : brNo,
				reportDate : reportDate,
				formulaId : formulaId
			});
}


function onGridLoad(obj) {
	var data = obj.data;
	if (data.length > 0) {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
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

function onRiskRenderer(e) {
	if (e.value == '数值准确') {
		return '<font color="red">数值准确</font>';
	} else {
		return '<font color="blue">敏感关注</font>';
	}
}

function onFormulaRenderer(e){
	var reportRate = mini.get("reportRate").getValue();
	if (reportRate == '4'){
		return '<font>(A1-C0)/C0</font>';
	}else{
		return '<font>(A1-A0)/A0</font>';
	}
}

function doReportCheck() {
	var form = new mini.Form("#reportCheckForm");
	var brNo = mini.get('bmCode').getValue(false);
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue(); 
	var reportRate = mini.get("reportRate").getValue();
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			var nodes = mini.get('bmCode').getCheckedNodes(false);
			var nl = nodes.length;
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'rd/check/wave/toReportCheckSh.nut?brNo='+brNo+'&reportDate='+reportDate+'&reportRate='+reportRate+'&tabType='+tabType+'&nodeLe='+nl,
						type : 'post',
						cache : false,
						success : function(text) {
							if (nl > 1) {
								$('#rMsgDiv').html(text.data);
								mini.get('win1').show();
							} else {
								if (text.success) {
									gridLoad();
								} else {
									mini.alert(text.data, '提醒');
								}
							}
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						},
						complete : function() {
							mini.unmask(document.body);
						}
					});
		}else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="blue">公共库</font>';
	} else if(e.value == '197'){
		return '<font color = "red">197号文</font>'
	}else{
		e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}

function saveRemarks(){
    var grid=mini.get('reportCheckGrid');
    if(!grid.isChanged()){
    	mini.alert("提交备注不能为空!!!");
    	return false;
    }
	var data =grid.getChanges();
	var json=mini.encode(data);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	 $.ajax({
	        url: base+"rd/check/wave/saveRemark.nut",
	        data: { data: json },
	        type: "post",
	        success: function (text) {
	        	if(text.success){
	        		mini.alert("操作成功!!");
	        	}else{
	        		mini.alert("提交失败!!");
	        	}
	        },
	        error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
				gridLoad();
			}
	    });
}

function saveRemark(){
	mini.confirm("是否确认提交?","提醒",function(action){
		if(action=='ok'){
			saveRemarks();
		}else{
		}
	});
}


function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "rd/check/wave/toRdReportCheckResultsViewNj.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view_wave_nj.jsp',
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
function rDateChanged(){
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
    var tabType = mini.get("tabType");
	tabType.setValue("");
    var url =base + 'sys/ggzd/getGgzdListByRd.nut?groupId=RD_TABLE_TAB_TYPE&rd='+rd;
    tabType.setUrl(url);
    tabType.select(0);
    
    var reportRate = mini.get("reportRate");
    reportRate.setValue("");
    var url =base + 'sys/ggzd/getReportRateByRd.nut?groupId=RD_YIDONG_FORMULA_TYPE&rd='+tabType.getValue();
    reportRate.setUrl(url);
    reportRate.select(0);
}
function tabTypeChanged(){
	var tabType = mini.get("tabType");
    var reportRate = mini.get("reportRate");
    reportRate.setValue("");
    var url =base + 'sys/ggzd/getReportRateByRd.nut?groupId=RD_YIDONG_FORMULA_TYPE&rd='+tabType.getValue();
    reportRate.setUrl(url);
    reportRate.select(0);
}


