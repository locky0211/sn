var dckCompareGrid;
$(function() {
	dckCompareGrid = mini.get('dckCompareGrid');
			if (brNo != '' && reportDate != '' ){
				mini.get('bmCode').setValue(brNo);
				mini.get('rDate').setValue(reportDate);
				excute();
			}
		});
function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function excute() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getText();
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("reportDate").getText() == '' || mini.get("reportDate").getText() == null) {
		mini.alert("请选择报表日期!!");
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'dck/compare/startCheck.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.get('#dckCompareGrid').load({brNo:brNo,reportDate:reportDate,});
				} else {
					alert(JSON.stringify(text.data));
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

function reportDateValid() {
	var rt = mini.get("tabType").getValue();
	if (rt == "50") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "40") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "80") {
		rs = true;
	}

	if (rd == "12" && rt == "00") {
		rs = true;
	}
	return rs;
}

function onWinClosed() {
	gridLoad();
}

function gridLoad() {
	var brNo = mini.get("brNo").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	if (brNo != '' && reportDate != '') {
		dckCompareGrid.load({
					brNo : brNo,
					reportDate : reportDate,
				});
	}
}

function onGridLoad(obj) {
	var data = obj.data;
	if (data.length > 0) {
		$('#noPassFont').html('<font color="red">对比未通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	} else {
		$('#noPassFont').html('<font color="blue">对比通过 !&nbsp;!&nbsp;!&nbsp;</font>');
	}
}

function onRenderer1(e){
	var record = e.record;
	var row_uid = record._uid;
	var row = dckCompareGrid.getRowByUID(row_uid)
	if(row.khmc1 != row.khmc2){
		return '<font color="red">'+ e.value + '</font>';
	}else{
		return e.value;
	}
}

function onRenderer2(e){
	var record = e.record;
	var row_uid = record._uid;
	var row = dckCompareGrid.getRowByUID(row_uid)
	if(row.xm1 != row.xm2){
		return '<font color="red">'+ e.value + '</font>';
	}else{
		return e.value;
	}
}

function onRenderer3(e){
	var record = e.record;
	var row_uid = record._uid;
	var row = dckCompareGrid.getRowByUID(row_uid)
	if(row.dkkh1 != row.dkkh2){
		return '<font color="red">'+ e.value + '</font>';
	}else{
		return e.value;
	}
}

function onRenderer4(e){
	var record = e.record;
	var row_uid = record._uid;
	var row = dckCompareGrid.getRowByUID(row_uid)
	if(row.xzqhdm1 != row.xzqhdm2){
		return '<font color="red">'+ e.value + '</font>';
	}else{
		return e.value;
	}
}

function doExportExcel() {
	var form = new mini.Form("#dckCompareForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'dck/compare/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('brNo').getFormValue(),
						reportDate : mini.get("reportDate").getFormValue(),
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

}