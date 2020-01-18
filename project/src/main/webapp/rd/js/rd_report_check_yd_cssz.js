var reportCheckGrid;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			
			reportCheckGrid.on("drawcell", function (e) {
				  
				  var record = e.record,
			        column = e.column,
			        field = e.field,
			        value = e.value,
			        values = record.values;
				  
				  
				  if (field == "value") {
					  if((values<100&&values>=50) ||(values<=-50&&values>-100)) {
							
						  e.cellStyle = "color:blue;"
						  }
					  if((values<50&&values>=30) ||(values<=-30&&values>-50)) {
		
					  e.cellStyle = "color:green;"
					  }
					  if(values>=100 ||values<=-100) {
							
						  e.cellStyle = "color:red;"
					  }
					  if(values.indexOf("∞") != -1) {
						  e.cellStyle = "color:red;"
					}
		            }
				  
				 
			  }
			  );
			
		
		});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
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
					url : base + 'rd/check/wavesz/doExportExcelSearch.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						reportRate : mini.get("reportRate").getValue(),
						tabType : mini.get("tabType").getValue(),
						xsyzfw: mini.get("xsyzfw").getValue()
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
	var xsyzfw = mini.get("xsyzfw").getValue();
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	if (form.isValid()) {
		reportCheckGrid.load({
					brNo : brNo,
					reportDate : reportDate,
					tabType : tabType,
					reportRate : reportRate,
					xsyzfw:xsyzfw
		});
	}
}


function onGridLoad(obj) {
	var data = obj.data;
	if (data.length >0) {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="blue"> 校验通过!&nbsp;!&nbsp;!&nbsp;</font>');
	}
}


function showCheckView(e) {
	var row = e.record;
	
	mini.open({
		url : base + "rd/check/wave/toRdReportCheckResultsView.nut?id=" +  row.id + '&page=/rd/jsp/rd_report_check_results_view_wave.jsp',
		title : "校验结果",
		iconCls : "icon-text",
		width : 750,
		height : 440,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				CloseWindow('cancel');
			}
		}
	});
	
}/*

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="red">公共库</font>';
	} else {
		//e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}*/


function onFormulaRenderer(e){
	var reportRate = mini.get("reportRate").getValue();
	if (reportRate == '4'){
		return '<font>(A1-C0)/C0</font>';
	}else{
		return '<font>(A1-A0)/A0</font>';
	}
}

/*
function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="blue">公共库</font>';
	} else if(e.value == '197'){
		return '<font color = "red">197号文</font>'
	}else{
		//e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}
*/


//问题下发
function issued() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			issueding();
		}
	});
}

function issueding() {
	var grid = mini.get('reportCheckGrid');
	var rows = grid.getSelecteds();
	var checkType = "1";  //0为逻辑校验，1为异动校验
	if (rows.length > 0) {
		var issuedResult = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			if (row.bzInfo == null || row.bzInfo == "" || row.bzInfo === undefined) {
				mini.alert("请填写备注信息！！！","提醒");
				return;
				//row.bzInformation = "null";
			}else {
				issuedResult = issuedResult + row.id + "<" + row.bzInfo + "<" + row.value +"<"+row.element + "<" + row.descId+ "<" + row.problemId+";"
			}
		}
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '问题下发中,请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/check/wavesz/sendYdIssueToTable.nut",
			data : {
				issuedResult : issuedResult.substring(0, issuedResult.length - 1),
				checkType : checkType,
				reExamine : "1"
			},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert(data.data,'提醒',function(){
						gridLoad()
					});
				} else {
					mini.alert(data.data,'提醒',function(){
						gridLoad()
					});
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
		mini.alert("请选择需要下发的问题数据!!!");
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
						url : base + 'rd/check/wavesz/toReportCheckCS.nut?brNo='+brNo+'&reportDate='+reportDate+'&reportRate='+reportRate+'&tabType='+tabType+'&nodeLe='+nl,
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