var reportImportGrid;
var bwwjzlArr;
var bwwjsjlxArr;
var fkbzArr;
var errorMsgArr;
$(function() {
	reportImportGrid = mini.get("#reportImportGrid");
	reportImportGrid.load();
	
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CI_BWWJZL',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				bwwjzlArr = text;
			}	
		},
	});
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CI_BWWJSJLX',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				bwwjsjlxArr = text;
			}	
		},
	});
	
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CI_FKBZ',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				fkbzArr = text;
			}	
		},
	});
	
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=CI_BWSJZT',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				errorMsgArr = text;
			}	
		},
	});
});

function gridLoad() {
	console.log("8888888888888888888");
//	var jrjgdm = mini.get("jrjgdm").getValue();
//	var sjscrq = mini.get("sjscrq").getValue();
	var bwwjzl = mini.get("bwwjzl").getValue();
//	var bwwjsjlx = mini.get("bwwjsjlx").getValue();
	var updateDate = mini.get("updateDate").getValue();
	
	reportImportGrid.load({
//		jrjgdm    : jrjgdm,
//		sjscrq    : sjscrq,
		bwwjzl    : bwwjzl,
//		bwwjsjlx  : bwwjsjlx,
		updateDate: updateDate,
	});
}

function onErrorMsgRenderer(e) {
	var errMsg;
	for(var index=0;index<errorMsgArr.length;index++){
		if(errorMsgArr[index].zdValue == e.value){
			errMsg = errorMsgArr[index].zdName;
		}
	}
	var record = e.record;
	console.log("e.value = " + e.value);
	console.log("record.id = " + record.id);
	console.log("record.success = " + record.success);
	console.log("errMsg = " + errMsg)
	if (e.value == "01" || e.value == "11" || e.value == "21") {
		return errMsg;
	} else {
		return '<font color="red" class="errorMsg" title="' + errMsg + '">'+ errMsg +'</a>';
	}
}

function onRenderer(e) {
	console.log(e.value);
	var record = e.record;
	var uid = record._uid;
	console.log("record.errorMsg = " + record.errorMsg);
	console.log("e.value = " + e.value);
	if(record.errorMsg == '01'){
		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''
		+ e.value
		+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">查看</span></a><a class="mini-button mini-button-plain" href="javascript:downLoadTxt(\''
		+ e.value + '\')"><span class="mini-button-text  mini-button-icon icon-down">下载</span></a>';
	}
	return '';
}

function toReportView(e) {
	var e = reportImportGrid.getSelected();
	mini.open({
		url : base + 'ci/report/import/getTxt.nut?id=' + e.id + '&page=/ci/jsp/ciReportContext.jsp',
		title : '查看报文',
		width : 800,
		height : 600,
		allowResize : true,
		showMaxButton : true,
		ondestroy : function(action) {
			reportImportGrid.reload();
		}
	});
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function checkReportImport() {

			var form = new mini.Form("#reportImportForm");
			form.validate();
			if (form.isValid()) {
				if (mini.get('textFile').getValue() == '' || mini.get('textFilePath').getValue() == '') {
					mini.alert('请选择上传文件!!', '提醒');
					return false;
				} else {
					var o = form.getData(true);
					var json = mini.encode(o);
					console.log(json);
					mini.mask({
								el : document.body,
								cls : 'mini-mask-loading',
								html : '导入处理中...'
							});
					$.ajax({
								url : base + 'ci/report/import/doCheckTxt.nut',
								type : 'post',
								dataType : 'json',
								data : json,
								cache : false,
								success : function(text) {
									console.log("text = " + text.success);
									if (text.success) {
										doReportImport();
									} else {
										mini.confirm('报文序号不连续!确定导入？', '提醒', function(action) {
											if (action == 'ok') {
												doReportImport();
											}
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
}



function doReportImport() {
	var form = new mini.Form("#reportImportForm");
	form.validate();
	if (form.isValid()) {
		if (mini.get('textFile').getValue() == '' || mini.get('textFilePath').getValue() == '') {
			mini.alert('请选择上传文件!!', '提醒');
			return false;
		} else {
			var o = form.getData(true);
			var json = mini.encode(o);
			console.log(json);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '导入处理中...'
					});
			$.ajax({
						url : base + 'ci/report/import/doimportTextFile.nut',
						type : 'post',
						dataType : 'json',
						data : json,
						cache : false,
						success : function(text) {
							var showMsg;
							for(var index=0;index<errorMsgArr.length;index++){
								if(errorMsgArr[index].zdValue == text.data){
									showMsg = errorMsgArr[index].zdName;
								}
							}
							
							if (text.success) {
								console.log("text = " + text);
								console.log("text.success = " + text.success);
								console.log("text.data = " + text.data);
								console.log("showMsg = " + showMsg);
								mini.alert('操作结束,' + showMsg + '!!', '提醒', function() {
											mini.get('textFile').setValue('');
											mini.get('textFilePath').setValue('');
											mini.get('textUpload').setText('');
											gridLoad();
										});
							} else {
								if(showMsg == undefined){
									mini.alert(text.data, '提醒');
								}else{
									mini.alert(showMsg, '提醒');
								}
								
								gridLoad();
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

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('textFile').setValue(e.file.name);
		mini.get('textFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('textFile').setValue('');
		mini.get('textFilePath').setValue('');
	}

}


function search() {
	reportImportGrid.load({
//		jrjgdm : mini.get('#jrjgdm').getValue(),
		sjscrq : mini.get('#sjscrq').getFormValue(),
		bwwjzl : mini.get('#bwwjzl').getValue(),
//		bwwjsjlx : mini.get('#bwwjsjlx').getValue(),
		fkbz : mini.get('#fkbz').getValue(),
		updateDate : mini.get('#updateDate').getFormValue()
	});
}

function downLoadTxt(id) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件下载中...'
	});
	$.ajax({
			url : base + 'ci/report/import/downLoadTxt.nut',
			type : 'post',
			dataType : 'json',
			data : {
				id : id
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

function downLoadExcels() {
	var grid = mini.get("reportImportGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                	if(r.errorMsg != '01'){
                		mini.alert('部分文件已删除!!', '提醒');
                		return;
                	}
                    ids.push(r.id);
                }
                toDownLoadFile(base + "ci/report/import/downLoadTxts.nut?ids="+ids);
            } else {
                alert("请选中至少一条记录!");
            }
}

function truncateAllTempleTable(){
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '清除缓存中...'
	});
	$.ajax({
			url : base + 'ci/report/import/truncateAllTempleTable.nut',
			type : 'post',
			dataType : 'json',
			data : {
				id : id
			},
			cache : false,
			success : function(text) {
				if (text != null) {
					mini.alert("清除缓存成功", '提醒');
				}
				gridLoad();
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
}

function bwwjzlRenderer(e) {
	for(var index=0;index<bwwjzlArr.length;index++){
		if(bwwjzlArr[index].zdValue == e.value){
			return bwwjzlArr[index].zdName;
		}
	}
}

function bwwjsjlxRenderer(e){
	for(var index=0;index<bwwjsjlxArr.length;index++){
		if(bwwjsjlxArr[index].zdValue == e.value){
			return bwwjsjlxArr[index].zdName;
		}
	}
}

function fkbzRenderer(e){
	for(var index=0;index<fkbzArr.length;index++){
		if(fkbzArr[index].zdValue == e.value){
			return fkbzArr[index].zdName;
		}
	}
}
