$(function() {
	mini.get("remark").setEnabled(false);
//	mini.get("document").setEnabled(false);
	mini.get("combobox2").select(0);
	//判断用户是监管员还是审核员
	$.ajax({
		url : base + 'rd/problemIssued/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				//监管员
				mini.get("content").setEnabled(true);
				$("#checkReportUser").show();//现在都展示
				$("#checkUser").hide();
				$("#checkDiv").hide();
			} else {
				//审核员
				mini.get("content").setEnabled(true);
				$("#checkReportUser").show();
				$("#checkUser").hide();
				$("#checkDiv").show();
			}
		},
	});
//	var document = mini.get("document").getValue();
//	mini.get('document1').setValue(document.substring(document.lastIndexOf("\\")+1,document.length));
});

//审核员提交解释
function update() {
	mini.confirm("是否确认提交回复内容?", "提醒", function(action) {
		if (action == 'ok') {
			commitContent();
		}
	});
}

//提交解释
function commitContent() {
	var form = new mini.Form("#issuedDetailForm");
	var o = form.getData(true);
	var json = mini.encode(o);
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			url : base + 'rd/problemIssued/commitContent.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!!', '提醒', function() {
						CloseWindow("ok");
					});
				} else{
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

function onCancel(e) {
	CloseWindow("cancel");
}

function doReportImport() {
	var form = new mini.Form("#issuedDetailForm");
	form.validate();
	if (form.isValid()) {
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择上传文件!!', '提醒');
			return false;
		} else {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '导入处理中...'
					});
			$.ajax({
						url : base + 'rd/report/import/doReportImportsj.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!', '提醒', function() {
											mini.get('excelFile').setValue('');
											mini.get('excelUpload').setText('');
											mini.get('combobox2').setUrl(base +"rd/problemIssued/attached/getAttachedAll.nut?problemId=" + mini.get('id').getValue());
											mini.get('combobox2').select(0);
										});
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
		}
	}
}

function expo(){
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
			url : base + 'rd/table/doExportExcelsj.nut',
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

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
		mini.alert('文件加载成功，请点击上传按钮!!', '提醒');
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

function openW() {
    mini.open({
        title: "上传面板",
        
        url: base + "sys/jsp/multiFileUpload.jsp",
        width: 600,
        height: 350,
        allowResize: false,
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = { a: "msg1", b: "msg2" };  //模拟传递上传参数
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            if (action == "ok") {
                var iframe = this.getIFrameEl();

                var data = iframe.contentWindow.GetData();
                data = mini.clone(data);

                var json = mini.encode(data);
                alert("已完成上传数据：\n" + json);
            }
        }
    })
}