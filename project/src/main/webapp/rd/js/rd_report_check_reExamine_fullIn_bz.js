/**
 * 
 */

function SetData(data) {
	if(data.action == "backOrSend"){
		var data = mini.clone(data);
		mini.get("id").setValue(data.problemId);
		mini.get("remarkRecord").setValue(data.remarkRecord);
	}
}
//问题下发
function issued() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			issueding();
		}
	});
}


//问题下发处理
function issueding() {
	var remark = mini.get('remark').getValue();
	if(remark !== undefined){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '问题下发中,请稍后...'
		});
		
		$.ajax({
			type : "POST",
			url : base + "rd/problem/summary/sjtjySendProblemTofjtjy.nut",
			data : {
				id : mini.get('id').getValue(),
				remark : remark,
				isSend : "0"          //0 -- 分局统计员将问题下发给机构，1 -- 分局统计员觉得自己可以解释这个问题，直接反馈给省局统计员
			},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert(data.data,'提醒',function(){
						CloseWindow("ok");
					});
				} else {
					mini.alert(data.data,'提醒',function(){
						CloseWindow("cancel");
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
		mini.alert("请填写备注信息！！！","提醒");
	}
}

function feedBack() {
	mini.confirm("确认直接将问题反馈给省局?", "提醒", function(action) {
		if (action == 'ok') {
			feedBacking();
		}
	});
}

function feedBacking() {
	var remark = mini.get('remark').getValue();
	if(remark !== undefined){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '问题下发中,请稍后...'
		});
		$.ajax({
			type : "POST",
			url : base + "rd/problem/summary/sjtjySendProblemTofjtjy.nut",
			data : {
				id : mini.get('id').getValue(),
				remark : remark,
				isSend : "1"      //0 -- 分局统计员将问题下发给机构，1 -- 分局统计员觉得自己可以解释这个问题，直接反馈给省局统计员
			},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("问题反馈成功！！！",'提醒',function(){
						CloseWindow("ok");
					});
				} else {
					mini.alert("问题反馈失败！！！",'提醒',function(){
						CloseWindow("cancel");
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
	}
}
function onCancel() {
	CloseWindow("cancel");
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
function uploadFile() {
	var problemId = mini.get('id').getValue();
	var fileName = mini.get('fileName').getValue();
	var filePath = mini.get('filePath').getValue();
	if (problemId !== ""){
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
								mini.get('combobox2').setUrl(base +"rd/problemIssued/attached/getAttachedByJGTBY.nut?problemId="+ mini.get('id').getValue());
								mini.get('combobox2').select(0);
							});
						}else{
							mini.alert(text.data,'提醒');
						}
					},
				});
			}
		});
	}
	
}