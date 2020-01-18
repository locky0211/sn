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
			+ 'bf/exportToIJ/downLoadReport.nut?fileName='
			+ bwjlGrid.getRowByUID(uid).fileName
			+ '"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function onBmNameRenderer(e){
	if(e.value==''||e.value==null){
		return '全部上报机构';
	}else{
		return e.value;
	}
}

function onTypeRenderer(e){
	if(e.value=='M1'){
		return '月报第一批次';
	}else if(e.value=='M2'){
		return '月报第二批次';
	}else if(e.value=='S1'){
		return '季报第一批次';
	}else if(e.value=='S2'){
		return '季报第二批次';
	}else{
		return '年报';
	}
}

function doReportExportToIj() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	var form = new mini.Form("#reportForm");
	form.validate();
	if (form.isValid()) {
		if (reportDateValid()) {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'bf/exportToIJ/ReportToIjWj.nut',
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
						mini.alert('报文生成成功', '提醒', function() {
							bwjlGrid.load();
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
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}

function doALLReportExportToIj() {
	var reportDate = mini.get("rDate").getFormValue();
	var tabType = mini.get("tabType").getValue();
	if (reportDate!= null&&reportDate!='' && tabType!= null && tabType!='') {
		if (reportDateValid()) {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '处理中...'
			});
			$.ajax({
				url : base + 'bf/exportToIJ/AllReportToIjWj.nut',
				type : 'post',
				dataType : 'json',
				data : {
					'reportDate' : reportDate,
					'reportType' : tabType

				},
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert('报文生成成功', '提醒', function() {
							bwjlGrid.load();
						});
					} else {
						if(text.data!=null){
							var s='';
							for(var i = 0;i<text.data.length;i++){
								s+="机构："+text.data[i].brname+"的"+text.data[i].tabcode+"报表还未通审核。\n";
							}
						}
						alert(s);
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
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}else{
		mini.alert('报表日期与报表类型不能为空！！', '提醒');
	}
}
function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "M1" || rt == "M2") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12")
			&& (rt == "S1" || rt == "S2")) {
		rs = true;
	}

	if ((rd == "12") && rt == "Y") {
		rs = true;
	}
	return rs;
}