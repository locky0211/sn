/**
 * 
 */
$(function() {
	if($.inArray('1',userRole) === -1){
		mini.get('combobox2').select(0);
		mini.get('combobox2').setMultiSelect(true);
	}
});
//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function SetData(data) {
	if (data.action == "more") {
		// 跨页面传递的数据对象，克隆后才可以安全使用
		var data = mini.clone(data);
		mini.get("reportNoStr").setValue(data.reportNoStr);
		mini.get("reportDate").setValue(data.reportDate);
		mini.get("organNo").setValue(data.organNo);
		if(data.tabType === "50"){
			mini.get("tabType").setValue('月报');
		}else if(data.tabType === "40"){
			mini.get("tabType").setValue('季报');
		}else if(data.tabType === "80"){
			mini.get("tabType").setValue('半年报');
		}else if(data.tabType === "00"){
			mini.get("tabType").setValue('年报');
		}
		
		mini.get("checkType").setValue(data.checkType == "0" ? "逻辑校验" : "异动校验");
		mini.get("reExamine").setValue(data.reExamine == "0" ? "初审" : "复审");
		mini.get("diffValue").setValue(data.diffValue);
		mini.get("remarkRecord").setValue(data.remarkRecord);
		mini.get("reportName").setValue(data.reportName);
	}
}

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function downLoadFile() {
	var document = mini.get('combobox2').getValue();
	if (document == null || document == "未上传附件。" || document == "") {
		mini.alert('没有附件!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '相关材料下载中...'
		});
		$.ajax({
			url : base + 'rd/problemIssued/attached/doExportRarFile.nut',
			type : 'post',
			dataType : 'json',
			data : {
				attachedId : document,
			},
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFileForBf(text);
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
