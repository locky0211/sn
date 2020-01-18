var bwjlGrid;
$(function() {
	bwjlGrid = mini.get("bwjlGrid");
	bwjlGrid.load();
});

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function onUploadSuccess(e) {
	var d = mini.decode(e.serverData);
	if (d.success) {
		if (d.data == "导入成功") {
			mini.alert(d.data, "提示", function() {
				mini.hideMessageBox(messageid);
				bwjlGrid.load();
			});
		} else {
			var list = d.data.split(",");
			var str = "";
			for (var i = 0; i < list.length; i++) {
				str += list[i] + "<br>";
			}
			mini.confirm(str, "提示", function(action) {
				if (action == 'ok') {
					if (d.data == "该报表之前已经导入，是否需要再次导入？导入将覆盖之前数据！") {
						mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '处理中...'
						});
						$.ajax({
							url : base + 'pireport/importDataXml1.nut',
							type : 'post',
							cache : false,
							success : function(text) {
								mini.alert(text.data, '提示');
							},
							complete : function() {
								mini.unmask(document.body);
							}
						});
					} else {
						mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '处理中...'
						});
						$.ajax({
							url : base + 'pireport/importData1.nut',
							type : 'post',
							cache : false,
							success : function(text) {
								mini.alert(text.data, '提示');
							},
							complete : function() {
								mini.unmask(document.body);
							}
						});
					}
				}
				mini.hideMessageBox(messageid);
				bwjlGrid.load();
			});
		}
	} else {
		mini.alert("导入失败", '提醒', function() {
			mini.hideMessageBox(messageid);
			alert(d.data);
			bwjlGrid.load();
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

function startUpload() {
	var form = new mini.Form("#reportImportForm");
	var str = '';
	form.validate();
	if (form.isValid()) {
		messageid = mini.loading("正在生成, 请稍等....", "报文导入");
		var fileupload = mini.get("uploadExcel");
		var method = $('.method');
		for (var i = 0; i < method.length; i++) {
			if (method[i].checked) {
				str = method[i].value;
			}
		}
		fileupload.setPostParam({
			fileName : fileupload.getValue(),
			method : str
		});
		fileupload.startUpload();
	}
}

function showTab(iid, text, url) {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var tabType1 = mini.get("tabType").getText();
	var checkArea = '0';
	var tabs = window.top['_CACHE'];
	var id = "tab$" + iid;
	var tab = tabs.getTab(id);
	if (!tab) {
		tab = {};
		tab.name = id;
		tab.title = text;
		tab.showCloseButton = true;
		tabs.addTab(tab);
	}
	var url = url + '?brNo=' + brNo + '&reportDate=' + reportDate + '&tabType='
			+ tabType + '&checkArea=' + checkArea + '&tabType1=' + tabType1;
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}
