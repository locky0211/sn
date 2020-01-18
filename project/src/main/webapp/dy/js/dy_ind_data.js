function search() {
	var form = new mini.Form("#indDatasForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			mini.get('indDatasGrid').load(base + 'dy/ind/data/getRdIndDatas.nut?brNo=' + mini.get('brNo').getValue() + '&dataDate='
					+ mini.get('dataDate').getFormValue() + '&indType=' + mini.get('indType').getValue());

		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}
function exTree(v) {
	if (v == 'up') {
		mini.get('indDatasGrid').expandAll();
	} else {
		mini.get('indDatasGrid').collapseAll();
	}
}

function onIndValueRenderer(e) {
	var record = e.record;
	if (record.iconCls == 'icon-36') {
		var val = fmoney(e.value, 2);
		if (val == 'NaN.undefined') {
			return '';
		}
		if (record.isPercent == 'y') {
			return val + '%';
		}
		return val;
	}
	return '';
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doExportExcel() {
	var form = new mini.Form("#indDatasForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '生成Excel文件中...'
					});
			$.ajax({
						url : base + 'dy/ind/data/doExportExcel.nut?brNo=' + mini.get('brNo').getValue() + '&dataDate='
								+ mini.get('dataDate').getFormValue() + '&indType=' + mini.get('indType').getValue(),
						type : 'post',
						dataType : 'json',
						cache : false,
						success : function(text) {
							toDownLoadFileByFilePath(text);
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						},
						complete : function() {
							mini.unmask(document.body);
						}
					});
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}

}

function reportDateValid() {
	var rt = mini.get("indType").getValue();
	if (rt == "1") {
		return true;
	}
	var rd = mini.get("dataDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "2") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "3") {
		rs = true;
	}

	if (rd == "12" && rt == "4") {
		rs = true;
	}
	return rs;

}