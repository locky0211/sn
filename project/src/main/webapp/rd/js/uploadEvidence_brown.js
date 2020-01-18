/**
 * 
 */
var punishProblemId;
$(function() {
	mini.get('combobox2').select(0);
	if(isUpload === '2'){
		mini.get('combobox2').setMultiSelect(true);
	}
});
function SetData(data) {
	if (data.action == "upload") {
		var data = mini.clone(data);
		mini.get('organNo').setValue(data.organNo);
		mini.get('ay').setValue(data.ay);
		mini.get('laDate').setValue(data.laDate);
		mini.get('parentNodeId').setValue(data.parentNodeId);
		mini.get('evidenceTableId').setValue(data.evidenceTableId);
		mini.get('cfDate').setValue(data.cfDate);
		mini.get('cfMoney').setValue(data.cfMoney);
//		mini.get('combobox2').setUrl(base +"punish/evidence/Info/getAttachedByTableIDAndLaDateAndParentNodeId.nut?laDate ="+data.laDate +"&parentNodeId="+ data.parentNodeId + "&evidenceTableId="+data.evidenceTableId );
//		mini.get('combobox2').select(0);
	}
}

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('fileName').setValue(e.file.name);
		mini.get('filePath').setValue(data.data);
	} else {
		mini.alert('文件加载失败!!', '提醒');
		mini.get('fileName').setValue('');
		mini.get('filePath').setValue('');
	}
}

function upLoad() {
	var organNo = mini.get('organNo').getValue();
	var ay =  mini.get('ay').getValue();
	var cfDate = mini.get('cfDate').getFormValue();
	var laDate = mini.get('laDate').getFormValue();
	var parentNodeId = mini.get('parentNodeId').getValue();
	var evidenceTableId = mini.get('evidenceTableId').getValue();
	var fileName = mini.get('fileName').getValue();
	var filePath = mini.get('filePath').getValue();
	var cfMoney = mini.get('cfMoney').getValue();
	
	if (organNo !== "" && ay !== "" && laDate !== ""){
		mini.confirm("请确认上传信息，上传后不可修改!!!",'提醒',function(action){
			if(action == "ok"){
				$.ajax({
					url : base + "punish/evidence/Info/importPunishEvidence.nut",
					data : {
						organNo : organNo,
						ay : ay,
						laDate : laDate,
						fileName : fileName,
						filePath : filePath,
						parentNodeId : parentNodeId,
						evidenceTableId : evidenceTableId,
						cfDate : cfDate,
						cfMoney : cfMoney
					},
					type : "post",
					success : function(text) {
						if(text.success){
							mini.alert("上传成功!!",'提醒',function(){
								mini.get('fileName').setValue('');
								mini.get('filePath').setValue('');
								mini.get('combobox2').setUrl(base +"rd/problemIssued/attached/getAttachedByTableIDAndLaDateAndParentNodeId.nut?laDate="+ laDate + "&parentNodeId=" + parentNodeId + "&evidenceTableId=" + evidenceTableId);
								mini.get('combobox2').select(0);
							});
						}
					},
				});
			}
		});
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
			html : '导出Excel模板中...'
		});
		$.ajax({
			url : base + 'rd/table/doExportRarFile.nut',
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

function confirm() {
	CloseWindow("ok");
}
function onCancel(e) {
	CloseWindow("cancel");
}