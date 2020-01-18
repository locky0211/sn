var dataGrid;
var data;
var messageid;
$(function() {
	dataGrid = mini.get("#dataGrid");
	dataGrid.load();
});
function add() {
	mini.open({
		url : base + 'dck/jsp/dckCwbbbbsj.jsp',
		title : '数据信息维护',
		width : 400,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			dataGrid.reload();
		}
	});
}
function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(e) {
	var e = dataGrid.getSelected();
	mini.open({
		url : base + 'dck/cwsjbb/getDataByKhdm.nut?khdm=' + e.khdm
				+ '&page=/dck/jsp/dckCwbbbbsj.jsp',
		title : '数据信息维护',
		width : 400,
		height : 200,
		allowResize : false,
		ondestroy : function(action) {
			dataGrid.reload();
		}
	});
}
function del() {
	var e = dataGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'dck/cwsjbb/deleteData.nut?khdm=' + e.khdm,
					success : function(text) {
						if (text) {
							dataGrid.removeRow(e, true);

						} else {
							mini.alert('操作失败!!', '提醒', function() {
							})
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
	dataGrid.load({
		khdm : mini.get('#khdm').getValue(),
		khmc : mini.get('#khmc').getValue()
	});
}
function onUploadSuccess(e) {
	var d = mini.decode(e.serverData);
	if (d.success) {
		mini.alert("导入成功", "提示", function() {
			mini.hideMessageBox(messageid);
			dataGrid.load();
		});
	} else {
		mini.alert("导入失败", '提醒', function() {
			mini.hideMessageBox(messageid);
			alert(d.data);
			dataGrid.load();
		});
	}
	this.setText("");
}
function onUploadError(e) {
	if (!e) {
		mini.alert("上传失败", "提示", function() {
			mini.hideMessageBox(messageid);
		});
	}
}
function onFileSelect(e) {
	// alert("选择文件");
}
function doImport() {
	messageid = mini.loading("正在导入, 请稍等....", "报文导入");
	var fileupload = mini.get("uploadExcel");
	fileupload.setPostParam({
		fileName : fileupload.getValue()
	});
	fileupload.startUpload();
}