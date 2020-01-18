$(function() {
});

function add(){
	 mini.confirm("确认提交反馈意见？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}

function onAdd() {
	var cacheInfoForm = new mini.Form('#errorFalseForm');
	cacheInfoForm.validate();
	if (cacheInfoForm.isValid()) {
		var o = cacheInfoForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'rd/error/dispose/UpdateTjRemark.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}

};



function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}


//下载，打包名称和之前做区别
function expo(){
	var document = mini.get('combobox2').getValue();
	if (document == null || document == "未上传附件。" || document == "") {
		mini.alert('没有附件!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '下载并打包附件中...'
		});
		$.ajax({
			url : base + 'rd/error/dispose/doExportExcelsj.nut',
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

function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}


