var formulaGrid;
var ywlxArr;
var cplbArr;
var qxArr;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
	//业务类型
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=LV_YWLX',
		success : function(text) {
			ywlxArr = text;
		}
	});
	//产品类别
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=LV_CPLB',
		success : function(text) {
			cplbArr = text;
		}
	});
	//期限
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=LV_QX',
		success : function(text) {
			qxArr = text;
		}
	});
});

//业务类型渲染
function onYwlxRenderer(e) {
	for (var i = 0; i < ywlxArr.length; i++) {
		if (ywlxArr[i].zdValue == e.record.ywlx) {
			return ywlxArr[i].zdName;
		}
	}
}
//产品类别渲染
function onCplbRenderer(e) {
	for (var i = 0; i < cplbArr.length; i++) {
		if (cplbArr[i].zdValue == e.record.cplb) {
			return cplbArr[i].zdName;
		}
	}
}
//期限渲染
function onQxRenderer(e) {
	for (var i = 0; i < qxArr.length; i++) {
		if (qxArr[i].zdValue == e.record.qx) {
			return qxArr[i].zdName;
		}
	}
}
//新增
function add() {
	mini.open({
		url : base + 'dl/jsp/dl_ll.jsp',
		title : '新增基准利率',
		width : 300,
		height : 250,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}

function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

//编辑
function edit(e) {
	var e = formulaGrid.getSelected();
	mini.open({
		url : base + 'dl/ll/fetchDljzlv.nut?id=' + e.id
				+ '&page=/dl/jsp/dl_ll.jsp',
		title : '校验公式维护',
		width : 300,
		height : 250,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}


//删除
function del() {
	var e = formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dl/ll/deleteDljzlv.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							formulaGrid.removeRow(e, true);
						} else {
							mini.alert('操作失败!!', '提醒');
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
	} else {
		mini.alert("请选择你要删除的记录!!");
	}
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	formulaGrid.load({
		rq : mini.get('#rq').getFormValue(),
		ywlx : mini.get('#ywlx').getValue(),
		cplb : mini.get('#cplb').getValue()
	});
}

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('datFile').setValue(e.file.name);
		mini.get('datFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('datFile').setValue('');
		mini.get('datFilePath').setValue('');
	}
}


//报表导入
function doReportImport() {
	var form = new mini.Form("#reportImportForm");
	form.validate();
	
		if (mini.get('datFile').getValue() == '' || mini.get('datFilePath').getValue() == '') {
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
				url : base + 'dl/ll/doImportFile.nut',
				type : 'post',
				dataType : 'json',
				data : json,
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert(text.data, '提醒',
								function() {
									mini.get('datFile').setValue('');
									mini.get('datFilePath').setValue('');
									mini.get('datFileUpload').setText('');
									search();
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

function downLoadExcels() {
	//toDownLoadFileByFilePath(base +"importWaveDesc/downExcel.nut");
     toDownLoadFile( base +"dl/ll/downExcel.nut");
}