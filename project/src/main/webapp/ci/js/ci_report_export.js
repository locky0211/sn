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
	var bwwjzl = mini.get("bwwjzl").getValue();
	var updateDate = mini.get("updateDate").getValue();
	
	reportImportGrid.load({
		bwwjzl    : bwwjzl,
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
	if(record.errorMsg == '11'){
		return '<a class="mini-button mini-button-plain" href="javascript:downLoadTxt(\''
		+ e.value
		+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">下载txt</span></a><a class="mini-button mini-button-plain" href="javascript:downLoadEnc(\''
		+ e.value + '\')"><span class="mini-button-text  mini-button-icon icon-down">下载enc</span></a>';
	}else if (record.errorMsg == '01') {
		return '<a class="mini-button mini-button-plain" href="javascript:exportTxt(\''
		+ e.value
		+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">导出txt</span></a><a class="mini-button mini-button-plain" href="javascript:exportEnc(\''
		+ e.value + '\')"><span class="mini-button-text  mini-button-icon icon-down">导出enc</span></a>';
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

function search() {
	reportImportGrid.load({
		sjscrq : mini.get('#sjscrq').getFormValue(),
		bwwjzl : mini.get('#bwwjzl').getValue(),
		updateDate : mini.get('#updateDate').getFormValue()
	});
}

function downLoadTxt(id) {
	console.log('downLoadTxt');
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件下载中...'
	});
	$.ajax({
			url : base + 'ci/report/export/downLoadTxt.nut',
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

function downLoadTxts() {
	var grid = mini.get("reportImportGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.id);
                }
                toDownLoadFile(base + "ci/report/export/downLoadTxts.nut?ids="+ids);
            } else {
                alert("请选中至少一条记录!");
            }
}

function downLoadEnc(id) {
	console.log('downLoadEnc');
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件导出中...'
	});
	$.ajax({
			url : base + 'ci/report/export/downLoadEnc.nut',
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


function exportTxt(id) {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件下载中...'
	});
	$.ajax({
			url : base + 'ci/report/export/exportTxt.nut',
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

function exportEnc(id) {
	console.log('downLoadEnc');
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件导出中...'
	});
	$.ajax({
			url : base + 'ci/report/export/exportEnc.nut',
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

function downLoadTxts() {
	var grid = mini.get("reportImportGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.id);
                }
                toDownLoadFile(base + "ci/report/export/downLoadTxts.nut?ids="+ids);
            } else {
                alert("请选中至少一条记录!");
            }
}

function downLoadEncs() {
	var grid = mini.get("reportImportGrid");
	var rows = grid.getSelecteds();
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.id);
                }
                toDownLoadFile(base + "ci/report/export/downLoadEncs.nut?ids="+ids);
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
