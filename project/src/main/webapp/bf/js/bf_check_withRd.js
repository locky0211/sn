var bfCheckWithRdGrid;
$(function(){
	bfCheckWithRdGrid = mini.get("bfCheckWithRdGrid");
	gridLoad();
})

var newOrg;
function rdChange(e){ 
	mini.get("bfBmcode").setValue("");
	var rdOrg = mini.get("rdBmcode").getValue();
	chooseMapOrg("RD",rdOrg,"BF");
	mini.get("bfBmcode").setValue(newOrg);
}

function bfChange(e){ 
	mini.get("rdBmcode").setValue("");
	var bfOrg = mini.get("bfBmcode").getValue();
	chooseMapOrg("BF",bfOrg,"RD");
	mini.get("rdBmcode").setValue(newOrg);
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

function doReportCheck(){
	var form = new mini.Form("#bfCheckWithRdForm");
	var rdBmcode = mini.get('rdBmcode').getValue();
	var bfBmcode = mini.get('bfBmcode').getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var type = mini.get("type").getValue(); 
	if (form.isValid()) {
		if (reportDateValid()) {
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '数据校验中...'
					});
			$.ajax({
						url : base + 'bf/check/withRd/toReportCheck.nut?rdBmcode=' + rdBmcode + '&bfBmcode='+ bfBmcode + '&reportDate=' + reportDate + '&type=' + type,
						type : 'post',
						cache : false,
						success : function(text) {
								if (text.success) {
									gridLoad();
								} else {
									mini.alert(text.data, '提醒');
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
	
function reportDateValid() {
	var rt = mini.get("type").getValue();
	if (rt == "M") {
		return true;
	}
	var rd = mini.get("reportDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S")) {
		rs = true;
	}
	if (rd == "12" && rt == "Y") {
		rs = true;
	}
	return rs;

}
	
function gridLoad() {
	var rdBmcode = mini.get("rdBmcode").getValue();
	var bfBmcode = mini.get("bfBmcode").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var type = mini.get("type").getValue();
	if (rdBmcode != '' && bfBmcode != '' && reportDate != '' && type != '') {
		bfCheckWithRdGrid.load({
					rdBmcode : rdBmcode,
					bfBmcode : bfBmcode,
					reportDate : reportDate,
					type : type
				});
	}
}
	
function doSearch(){
	gridLoad();
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
				url : base + "bf/check/withRd/toBfCheckResultsView.nut?id=" + row.id + '&page=/bf/jsp/bf_check_withRd_results_view.jsp',
				title : "校验结果",
				iconCls : "icon-text",
				width : 750,
				height : 300,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						reloads();
					}
				}
			});

}

function doExportExcel(){
	var form = new mini.Form("#bfCheckWithRdForm");
	var rdBmcode = mini.get('rdBmcode').getValue();
	var bfBmcode = mini.get('bfBmcode').getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	var type = mini.get("type").getValue(); 
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'bf/check/withRd/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						rdBmcode : rdBmcode,
						bfBmcode : bfBmcode,
						reportDate : reportDate,
						type : type
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