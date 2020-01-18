var reportCheckGrid;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			reportCheckGrid.on("load", function() {
						reportCheckGrid.mergeColumns(["organNo","reportNoStr"]);
						//reportCheckGrid.mergeColumns(["reportNoStr"]);
					});
			
			if (brNoDy != '' && reportDate != '' && tabType != ''){
				mini.get('bmCodeDy').setValue(brNoDy);
				mini.get('bmCodeRd').setValue(brNoRd);
//				mini.get('bmCodeBf').setValue(brNoBf);
				mini.get('rDate').setValue(reportDate);
				mini.get('tabType').setValue(tabType);
				doReportCheck();
			}
		});



var newOrg;
function rdChange(e){ 
	mini.get("bmCodeDy").setValue("");
	var rdOrg = mini.get("bmCodeRd").getValue();
	chooseMapOrg("RD",rdOrg,"DY");
	mini.get("bmCodeDy").setValue(newOrg);
}

function dyChange(e){ 
	mini.get("bmCodeRd").setValue("");
	var dyOrg = mini.get("bmCodeDy").getValue();
	chooseMapOrg("DY",dyOrg,"RD");
	mini.get("bmCodeRd").setValue(newOrg);
}
function chooseMapOrg(oldModule, oldOrg, newModule) {
	$.ajax({
		url : base + 'sys/moduleOrgMap/getNewOrg.nut?oldModule=' + oldModule + "&oldOrg="+ oldOrg +"&newModule=" + newModule,
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(text) {
			if (text.success) {
				if (text.data == null) {
					newOrg = oldOrg;
				} else {
					newOrg = text.data.newOrg;
				}
			} else {
				mini.alert(text.data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}



function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportCheck() {
	var form = new mini.Form("#reportCheckForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			var nodes = mini.get('bmCodeDy').getCheckedNodes();
			var nl = nodes.length;
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'dy/RdBf/toReportCheck.nut',
						type : 'post',
						dataType : 'json',
						data : {
							brNoDy : mini.get('bmCodeDy').getValue(),
							brNoRd : mini.get('bmCodeDy').getValue(),
//							brNoBf : mini.get('bmCodeBf').getValue(),
							reportDate : mini.get("rDate").getFormValue(),
							tabType : mini.get("tabType").getValue(),
							nodeLe : nl
						},
						cache : false,
						success : function(text) {
							if (nl > 1) {
								$('#rMsgDiv').html(text.data);
								mini.get('win1').show();
							} else {
								if (text.success) {
									gridLoad();
								} else {
									mini.alert(text.data, '提醒1');
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
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}

	}
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
					url : base + 'dy/RdBf/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNoDy : mini.get('bmCodeDy').getValue(),
						brNoRd : mini.get('bmCodeDy').getValue(),
//						brNoBf : mini.get('bmCodeBf').getValue(),
						reportDate : mini.get("rDate").getFormValue(),
						tabType : mini.get("tabType").getValue()
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
//	var rt = mini.get("tabType").getValue();
//	
//	if (rt == "10") {
//		return true;
//	}
//	var rd = mini.get("rDate").getFormValue().substr(4, 4);
//	var da = mini.get("rDate").getFormValue().substr(6, 2);
//	var rs = false;
//	if ((rd == "0131" || rd == "0228"||  rd == "0229" || rd == "0331" ||  rd == "0430" || rd == "0531" ||  rd == "0630" || rd == "0731" ||  rd == "0831" ||  rd == "0930" || rd == "1031" ||  rd == "1130" ||  rd == "1231") && rt == "50") {
//		rs = true;
//	}
//	if ((rd == "0331" || rd == "0630" || rd == "0930" || rd == "1231") && rt == "40") {
//		rs = true;
//	}
//	if ( rt == "20") {
//		return true;
//	}
//	if ((rd == "0630" || rd == "1231") && rt == "80") {
//		rs = true;
//	}
//
//	if (rd == "1231" && rt == "00") {
//		rs = true;
//	}
//	return rs;
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

function onWinClosed() {
	gridLoad();
}

function gridLoad() {
	var brNoDy = mini.get("bmCodeDy").getValue();
	var brNoRd = mini.get("bmCodeRd").getValue();
//	var brNoBf = mini.get("bmCodeBf").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if (brNoDy != '' && reportDate != '' && tabType != '') {
		reportCheckGrid.load({
					brNoDy : brNoDy,
					brNoRd : brNoRd,
//					brNoBf : brNoBf,
					reportDate : reportDate,
					tabType : tabType
				});
	}
}
function onGridLoad(obj) {
	var data = obj.data;
	if (data.length > 0) {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	}
}
function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "dy/RdBf/toDyCheckWithRdBfResultsView.nut?id=" + row.id + '&page=/dy/jsp/dy_check_with_Rd_bf_results_view.jsp',
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


function saveRemarks(){

    var grid=mini.get('reportCheckGrid');
   if(!grid.isChanged()){
    	mini.alert("提交备注不能为空!!!");
    	return false;
    }
	var data =grid.getChanges();
	var json=mini.encode(data);
	grid.loading("提交中请稍后。。。");
	 $.ajax({
	        url: base+"dy/RdBf/saveRemark.nut",
	        data: { data: json },
	        type: "post",
	        success: function (text) {
	        	if(text.success){
	        		mini.alert(text.data);
	            grid.reload();
	        	}else{
	        		mini.alert("提交失败!!!");
	        		grid.reload();
	        	}
	        },
	       
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
