var reportImportGrid;
$(function() {
			reportImportGrid = mini.get('reportImportGrid');
			reportImportGrid.on("load", function() {
				reportImportGrid.mergeColumns(["organNo","reportDate"]);
					});
			reportImportGrid.hideColumn("id");
			var dt = new Date();
			dt.setDate(1);
			cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
			mini.get('#rDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
			gridLoad();
		});

function  upload(){
	 var formData = new FormData();
	 if($('#file')[0].files.length!=0){
		 formData.append('file', $('#file')[0].files[0]);
	     $.ajax({
	         url: base+"upload/uploadFileNew.nut",
	         type: 'POST',
	         data: formData,
	         processData: false,
	         contentType: false,
	         success: function (data) {
	        	 if (data.success) {
	        			mini.get('excelFile').setValue($('#file')[0].files[0].name);
	        			mini.get('excelFilePath').setValue(data.data);
	        		} else {
	        			mini.alert('文件上传失败!!', '提醒');
	        			mini.get('excelFile').setValue('');
	        			mini.get('excelFilePath').setValue('');
	        		}
	         }
	     });
	 }
	 
}

function onCommitRenderer(e) {
	var record = e.record;
	if (e.value=='0') {
		return '未提交';
	} else if (e.value=='1') {
		return '已提交';
	}
}

function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value=='0') {
		return '未处理';
	} else if (e.value=='1') {
		return '确认采纳';
	}else if (e.value=='2') {
		return '<font color="red">拒绝采纳</a>';
	} 
}

function downLoadExcels() {
	//toDownLoadFileByFilePath(base +"importWaveDesc/downExcel.nut");
     toDownLoadFile( base +"importWaveDesc/downExcel.nut");
}

function showReportView(e) {
	var record = e.record;
	var uid = record._uid;
	toReportView(uid);
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doReportImport() {
	var form = new mini.Form("#reportImportForm");
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择上传文件!!', '提醒');
			return false;
		} else {
			mini.confirm("确认导入异动报备说明吗？", "确定？", function(action) {
				if (action == "ok") {
					var o = form.getData(true);
					var json = mini.encode(o);
					mini.mask({
								el : document.body,
								cls : 'mini-mask-loading',
								html : '导入处理中...'
							});
					$.ajax({
						url : base + 'importWaveDesc/doImportDesc.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert(text.data + '!!', '提醒', function() {
									mini.get('excelFile').setValue('');
									mini.get('excelFilePath').setValue('');
									$('#upload')[0].reset();
									mini.get('bmCode').setValue(o.brNo);
									mini.get('rDate').setValue(o.reportDate);
									gridLoad();
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
			});
		}
}

function commitDesc() {
	var form = new mini.Form("#reportImportForm");
	form.validate();
	if (form.isValid()) {
		mini.confirm("确认提交异动报备说明吗？", "确定？", function(action) {
			if (action == "ok") {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '提交处理中...'
				});
		$.ajax({
			url : base + 'importWaveDesc/commitDesc.nut',
			type : 'post',
			dataType : 'json',
			data : json,
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert(text.data + '!!', '提醒', function() {
						gridLoad();
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
});
		}
	}

function saveDesc() {
    if(!reportImportGrid.isChanged()){
    	mini.alert("异动说明未做修改!!!");
    	return false;
    }
    mini.confirm("确认保存异动报备说明吗？", "确定？", function(action) {
		if (action == "ok") {
		    var data =reportImportGrid.getChanges();
			var json=mini.encode(data);
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			 $.ajax({
			        url: base+"importWaveDesc/saveContent.nut",
			        data: { data: json },
			        type: "post",
			        success: function (text) {
			        	mini.alert(text.data, '提醒');
			        },
			        error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
						gridLoad();
					}
			    });
		}
    });
	}
function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
		reportImportGrid.load({
			brNo : brNo,
			reportDate : reportDate
		});
}

