var reportCheckGrid;
var message;
$(function() {
			reportCheckGrid = mini.get('reportCheckGrid');
			reportCheckGrid.on("load", function() {
						reportCheckGrid.mergeColumns(["organNo","reportNoStr"]);
						//reportCheckGrid.mergeColumns(["reportNoStr"]);
					});
			
			if (brNo != '' && reportDate != '' && tabType != '' && tabType1 != '' && checkArea != ''){
				mini.get('bmCode').setValue(brNo);
				mini.get('rDate').setValue(reportDate);
				mini.get('tabType').setValue(tabType);
				mini.get('tabType').setText(tabType1);
				mini.get('checkArea').setValue(checkArea);
				doReportCheck();
			}
			mini.get('review').hide();
			mini.get('otherReview').hide();
		});

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
			 var nodes = mini.get('bmCode').getCheckedNodes(false);
				var nl = nodes.length;
				mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '数据校验中...'
						});
				$.ajax({
							url : base + 'bf/check/temp/toReportCheck.nut',
							type : 'post',
							dataType : 'json',
							data : {
								brNo : mini.get('bmCode').getValue(false),
								reportDate : mini.get("rDate").getFormValue(),
								tabType : mini.get("tabType").getValue(),
								formulaType:mini.get("formulaType").getValue(),
								checkArea : mini.get("checkArea").getValue(),
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
function onRenderer(e) {
	if (e.value == '1') {
		return '<font color="red">普通</font>';
	}else if (e.value == '2'){
		return '<font color="blue">新增提示</font>';
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
					url : base + 'bf/check/temp/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						tabType : mini.get("tabType").getValue(),
						formulaType : mini.get("formulaType").getValue(),
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
function checks(){
	mini.get('review').hide();
	mini.get('otherReview').hide();
}
function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var checkArea = mini.get("checkArea").getValue();
	var formulaType = mini.get("formulaType").getValue();
	mini.get('review').hide();
	mini.get('otherReview').hide();
	if (brNo != '' && reportDate != '' && tabType != '') {
		reportCheckGrid.load({
					brNo : brNo,
					reportDate : reportDate,
					tabType : tabType,
					checkArea : checkArea,
					formulaType : formulaType
				});
	}
}
function onGridLoad(obj) {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var data = obj.data;
	if (data.length > 0) {
		$('#noPassFont').html('<font color="red">校验未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
		} else {
		$('#noPassFont').html('<font color="blue">校验通过 !&nbsp;!&nbsp;!&nbsp;</font>');
		}
	$.ajax({
        url: base+"bf/remarks/temp/checkVia.nut",
        data: { brNo: brNo,reportDate:reportDate,tabType:tabType },
        type: "post",
        success: function (text) {
        	if(text.success){
        		mini.get('review').show();
        		mini.get('otherReview').hide();
        		message=text.data;
        	}else{
        		mini.get('review').hide();
        		mini.get('otherReview').show();
        		message=text.data;
        	}
        },
       
    });
}
function showCheckView(e) {
	var row = e.record;
	mini.open({
				url : base + "bf/check/temp/toBfReportCheckResultsView.nut?id=" + row.id + '&page=/bf/jsp/bf_report_check_results_view_t.jsp',
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
	        url: base+"bf/remarks/temp/saveRemark.nut",
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
function review(){
	var temp;
	$.ajax({
		url : base + 'sys/bm/getBmNameByBmCodes.nut',
		type : 'post',
		dataType : 'json',
		data:{bmCode:message},
		cache : false,
		async : false,
		success : function(text) {
			if(text.success){
		    temp= text.data;
			}
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		}
	});
	mini.confirm(temp+"校验通过"+"<br/>是否确认提交?","提醒",function(action){
		if(action=='ok'){
			reviewt();
		}else{
		
		}
		
	});
	
	
}
function reviewt(){
	reportDate =mini.get("rDate").getFormValue();
    tabType = mini.get("tabType").getValue();
	 $.ajax({
	        url: base+"bf/remarks/temp/submitReview.nut",
	        data: { brNo: message,reportDate:reportDate,tabType:tabType },
	        type: "post",
	        success: function (text) {
	        	if(text.success){
	        		mini.alert(text.data);
	           }else{
	        		mini.alert("提交失败!!!");
	        		}
	        },
	       
	    });
}
function checkRecursive(){
	var recursive=mini.get('#recursive').getValue();
	if(recursive=='true'){
		mini.get('#bmCode').setCheckRecursive('true');
	}else{
		mini.get('#bmCode').setCheckRecursive('false');
	}
}

//校验未通过时，通过部分提交复审
function otherReview(){
	var temp;
	$.ajax({
		url : base + 'sys/bm/getBmNameByBmCodes.nut',
		type : 'post',
		dataType : 'json',
		data:{bmCode:message},
		cache : false,
		async : false,
		success : function(text) {
			if(text.success){
				temp= text.data;
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		}
	});
	mini.confirm(temp + "校验通过部分" + "<br/>是否确认提交?","提醒",function(action){
		if(action == 'ok'){
			otherReviewt();
		}else{
		}
	});
}

function otherReviewt(){
	var reportDate = mini.get("rDate").getFormValue();
    var tabType = mini.get("tabType").getValue();
	$.ajax({
		url: base+"bf/remarks/temp/submitOtherReview.nut",
	    data: { brNo: message,reportDate:reportDate,tabType:tabType },
	    type: "post",
	    success: function (text) {
	    	if(text.success){
	    		mini.alert(text.data);
	        }else{
	        	mini.alert("提交失败!!!");
	        }
	    },
	});
}
