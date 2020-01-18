/**
 * 
 */
$(function() {
	mini.get('combobox2').select(0);
	if($.inArray('1',userRole) === -1){
		mini.get('combobox2').setMultiSelect(true);
	}
	var relation = "";
	if(checkType === "0"){
		relation += formula;
	}else{
		relation += problemCell;
	}
	if(isOrgReporter === "1" && confirmError){
		$.ajax({
			url : base + "rd/problem/summary/getTableLineColumn.nut",
			data : {
				relation : relation,
				reportDate:reportDate
			},
			async : false,
			type : "post",
			success : function(text) {
				mini.get("errorCeilValue").set({data:text});
			},
		});
	}
});

function SetData(data) {
	if (data.action == "correct" || data.action == "error") {
		var data = mini.clone(data);
		mini.get('problemId').setValue(data.problemId);
		mini.get('isAgree').setValue(data.isAgree);
		mini.get('reExamine').setValue(data.reExamine);
		mini.get('remarkRecord').setValue(data.remarkRecord);
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

function confirmDealProblem() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			dealProblem();
		}
	});
}

function dealProblem() {
	var problemId = mini.get('problemId').getValue();
	var isAgree = mini.get('isAgree').getValue();
	var reExamine = mini.get('reExamine').getValue();
	var fileName = mini.get('fileName').getValue();
	var filePath = mini.get('filePath').getValue();
	var remark = mini.get('remark').getValue();
	var errorCeilValue="";
	if(isOrgReporter === "1" && confirmError){
		errorCeilValue += mini.get('errorCeilValue').getValue();
	}
	var errorLevel = "";
	if(state == 'C3' || state == 'R3' || (state == 'P5' && errorLevelBz == 'L')){
		errorLevel += mini.get('errorLevel').getValue();
	}
	if (problemId !== "" && isAgree !== "" && reExamine !== "" && remark !== "") {
		$.ajax({
			url : base + "rd/problem/summary/sendProblemToNextRole.nut",
			data : {
				problemId : problemId,
				isAgree : isAgree,
				reExamine : reExamine,
				remark : remark,
				fileName : fileName,
				filePath : filePath,
				errorCeilValue : errorCeilValue,
				errorLevel : errorLevel
			},
			type : "post",
			success : function(text) {
				if(text.success){
					mini.alert(text.data,'提醒',function(){
						CloseWindow("ok");
					});
				}else{
					mini.alert(text.data,'提醒',function(){
						CloseWindow("cancel");
					});
				}
			},
		});
	}
}

function uploadFile() {
	var problemId = mini.get('problemId').getValue();
	var fileName = mini.get('fileName').getValue();
	var filePath = mini.get('filePath').getValue();
	if (problemId !== "" && fileName !== "" && filePath !== ""){
		mini.confirm("请确认上传信息，上传后不可修改!!!",'提醒',function(action){
			if(action == "ok"){
				$.ajax({
					url : base + "rd/problem/summary/uploadRelatedMaterials.nut",
					data : {
						problemId : problemId,
						fileName : fileName,
						filePath : filePath
					},
					type : "post",
					success : function(text) {
						if(text.success){
							mini.alert(text.data,'提醒',function(){
								mini.get('fileName').setValue('');
								mini.get('filePath').setValue('');
								mini.get('combobox2').setUrl(base +"rd/problemIssued/attached/getAttachedByJGTBY.nut?problemId="+ mini.get('problemId').getValue());
								mini.get('combobox2').select(0);
							});
						}else{
							mini.alert(text.data,'提醒');
						}
					},
				});
			}
		});
	}else {
		mini.alert("请选择需要上传文件后，点击上传按钮",'提醒');
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

function confirm() {
	CloseWindow("ok");
}
function onCancel(e) {
	CloseWindow("cancel");
}