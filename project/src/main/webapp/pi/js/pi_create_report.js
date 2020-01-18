var bwjlGrid;
$(function() {
	bwjlGrid = mini.get("bwjlGrid");
	bwjlGrid.load();
});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="'
			+ base
			+ 'pi/cReport/downLoadReport.nut?fileName='
			+ bwjlGrid.getRowByUID(uid).fileName
			+ '"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}
function onReportTypeRenderer(e) {
	if (e.value == 'M') {
		return '月报';
	} else if (e.value == 'S') {
		return '季报';
	} else if (e.value == 'Y') {
		return '年报';
	} else if (e.value == 'AC') {
		return '区域流量流向';
	}else if(e.value == 'IN'){
		return '行业流量流向';
	}else{
		return '上报报文';
	}
}
function onBrNameRenderer(e){
	if(e.value==''||e.value==null){
		return '全机构';
	}else{
		return e.value;
	}
}
function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doCreateReport() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var form = new mini.Form("#reportForm");
	form.validate();
	if (form.isValid()) {
		if (tabType != 'AI' && (brNo == '' || brNo == null)) {
			mini.alert('机构不能为空!!', '提醒');
		} else if (tabType != 'AI' && reportDateValid()) {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'pi/cReport/createrReportData.nut',
				type : 'post',
				dataType : 'json',
				data : {
					'brNo' : brNo,
					'reportDate' : reportDate,
					'reportType' : tabType

				},
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert('基本报文生成成功', '提醒', function() {
							bwjlGrid.load();
						});
					} else {
						alert(text.data, '提醒');
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
		} else if (tabType != 'AI') {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		} else {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'pi/cReport/createrAIReportData.nut',
				type : 'post',
				dataType : 'json',
				data : {
					'reportDate' : reportDate
				},
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert(text.data, '提醒', function() {
							bwjlGrid.load();
						});
					} else {
						alert(text.data, '提醒');
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

function doALLReport() {
	var reportDate = mini.get("rDate").getFormValue();
	if (reportDate != null && reportDate != '') {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			url : base + 'pi/cReport/createAllReportDate.nut',
			type : 'post',
			dataType : 'json',
			data : {
				'reportDate' : reportDate
			},
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('报文生成成功', '提醒', function() {
						bwjlGrid.load();
					});
				} else {
					alert(text.data);
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	} else {
		mini.alert('报表日期不能为空！！', '提醒');
	}
}
function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && (rt == "S")) {
		rs = true;
	}

	if ((rd == "12") && rt == "Y") {
		rs = true;
	}
	return rs;
}