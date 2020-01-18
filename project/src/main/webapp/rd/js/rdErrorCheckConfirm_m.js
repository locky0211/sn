/**
 * 
 */
var errorCheckConfirmGrid;
$(function() {
	errorCheckConfirmGrid = mini.get("errorCheckConfirmGrid");
	errorCheckConfirmGrid.load();
});
function search() {
	var reportDate = mini.get("reportDate").getFormValue();
	var endDate = mini.get("endDate").getFormValue();
	if(reportDate > endDate){
		mini.alert("开始日期大于结束日期!!!");
	}else {
		errorCheckConfirmGrid.load({
			organNo : mini.get("organNo").getValue(),
			reportDate : mini.get("reportDate").getFormValue(),
			endDate : mini.get("endDate").getFormValue(),
			blameRoom : mini.get("blameRoom").getValue(),
			jgFlag : mini.get("jgFlag").getValue(),
			tjFlag : mini.get("tjFlag").getValue(),
			errorSource : mini.get("errorSource").getValue()
		});
	}
}

function clear() {
	mini.get("organNo").setValue('');
	mini.get("reportDate").setValue('');
	mini.get("endDate").setValue('');
	mini.get("blameRoom").setValue('');
	mini.get("jgFlag").setValue('');
	mini.get("tjFlag").setValue('');
	mini.get("errorSource").setValue('');
}

function onBrNo(e) {
	var row = e.record;
	var brNo = row.organNo;
	$.ajax({
		url : base + "bf/remarks/getBmNameByBmCode.nut",
		data : {
			code : brNo
		},
		type : "post",
		async : false,
		success : function(text) {
			brNo = text.data;
		},
	});
	return brNo
}

function jgRenderer(e) {
	var row = e.record;
	var s="";
	if(row.jgFlag === "1"){
		s += '同意';
	}else if(row.jgFlag === "2"){
		s += '不同意';
	}
	return s;
}
function tjRenderer(e) {
	var row = e.record;
	var s="";
	if(row.tjFlag === "1"){
		s += '同意';
	}else if(row.jgFlag === "2"){
		s += '不同意';
	}
	return s;
}
function errorSourceRenderer(e) {
	var row = e.record;
	var s="";
	if(row.errorSource === "1"){
		s += '系统';
	}else if(row.errorSource === "2"){
		s += '人工录入';
	}
	return s;
}
function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = "";
	s += '<a class="mini-button mini-button-plain" href="javascript:onView(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-expand">更多</span></a>'
	s += '<a class="mini-button mini-button-plain" href="javascript:downLoad(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>'
	return s;
}
//function onView() {
//	var e = errorCheckConfirmGrid.getSelected();
//	mini.open({
//		url : base + "rd/error/check/confirm/getDetailError.nut?id=" + e.id + "&page=/rd/jsp/rdErrorCheckConfirm.jsp",
//		title : "存档问题详情",
//		iconCls : "icon-edit",
//		width : 640,
//		height : 700,
//		allowResize : true,
//	});
//	
//}

function onView(row_uid) {
	var row = errorCheckConfirmGrid.getRowByUID(row_uid);
	mini.open({
		url : base + "rd/jsp/rdErrorCheckConfirm.jsp",
		title : "存档问题详情",
		iconCls : "icon-edit",
		width : 700,
		height : 700,
		allowResize : true,
		onload: function () {
            var iframe = this.getIFrameEl();
            var data = { action: "more", reportNoStr: row.reportNoStr,reportName: row.reportName,tabType:row.tabType,reportDate:row.reportDate,organNo:row.organNo,cUser:row.cUser,errorMoney:row.errorMoney,errorSource:row.errorSource,blameUser:row.blameUser,blameRoom:row.blameRoom,remark:row.remark,jgFlag:row.jgFlag,jgReason:row.jgReason,tjFlag:row.tjFlag,tjReason:row.tjReason,tbFlag:row.tbFlag,deblocFlag:row.deblocFlag,otherMeasures:row.otherMeasures};
            iframe.contentWindow.SetData(data);
        }
	});
}

function downLoad() {
	var e = errorCheckConfirmGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '数据保存中...'
	});
	$.ajax({
		url : base + "rd/error/check/confirm/createDownloadFile.nut",
		datatype : "json",
		type : "post",
		data : {
			id : e.id
		},
		success : function(text) {
			if(text.success){
				console.log("data: " + text.data);
				toDownLoadFileForWord(text.data);
			}else{
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
}

function exportWord() {
	var rows = errorCheckConfirmGrid.getSelecteds();
	if(rows.length > 0){
		var rowIds = "";
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			rowIds = rowIds + row.id + ";";
		}
		
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '数据保存中...'
		});
		$.ajax({
			url : base + "rd/error/check/confirm/createDownloadFile.nut",
			datatype : "json",
			type : "post",
			data : {
				id : rowIds.substring(0, rowIds.length - 1)
			},
			success : function(text) {
				if(text.success){
					toDownLoadFileForWord(text.data);
				}else{
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
		mini.alert("请选择需要下载的存档问题！", "提醒");
	}
}

function toDownLoadFileForWord(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function exportExcel(expandall) {
	if(expandall){
		var rows = errorCheckConfirmGrid.getSelecteds();
		if(rows.length > 0){
			var rowIds = "";
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i];
				rowIds = rowIds + row.id + ";";
			}
			
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据保存中...'
			});
			$.ajax({
				url : base + "rd/error/check/confirm/exportErrorConfirmExcel.nut",
				datatype : "json",
				type : "post",
				data : {
					id : rowIds.substring(0, rowIds.length - 1),
					expand:expandall
				},
				success : function(text) {
					if(text.success){
						toDownLoadFileForWord(text.data);
						console.log("path: " + text.data);
					}else{
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
			mini.alert("请选择需要下载的存档问题！", "提醒");
		}
	}else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '数据保存中...'
		});
		$.ajax({
			url : base + "rd/error/check/confirm/exportErrorConfirmExcel.nut",
			datatype : "json",
			type : "post",
			data : {
				expand:expandall,
				organNo : mini.get("organNo").getValue(),
				reportDate : mini.get("reportDate").getFormValue(),
				endDate : mini.get("endDate").getFormValue(),
				blameRoom : mini.get("blameRoom").getValue(),
				jgFlag : mini.get("jgFlag").getValue(),
				tjFlag : mini.get("tjFlag").getValue(),
				errorSource : mini.get("errorSource").getValue()
			},
			success : function(text) {
				if(text.success){
					toDownLoadFileForWord(text.data);
					console.log("path: " + text.data);
				}else{
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
	}
	
	
	
}
