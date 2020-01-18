/**
 * 
 */
function doSearchRemarks(){
	var form = new mini.Form("#remarksResultForm");
	form.validate();
	if (form.isValid()) {
		    var o = form.getData(true);
			var json = mini.encode(o);
			mini.get('remarksResultGrid').load(o);
		
	}
}

function onGetStatus(e) {
	if (e.value == '0') {
			return '<font color="blue">待审核 </font>';
		} else {
			if(e.value=='1'){
			return '<font color="red">审核不通过 </font>';
			}else{
				return '<font color="green">审核通过</font>';
			}
		}
}
function onBrNo(e){
	var row=e.record;
	var brNo=row.organNo;
	$.ajax({
        url: base+"bf/remarks/getBmNameByBmCode.nut",
        data: { code:brNo },
        type: "post",
        async:false,
        success: function (text) {
           brNo=text.data;
        	 },
       
    });
	return brNo
}
function onColor(e){
	var row=e.record;
	var remarks=row.remarks;
    if(remarks=='校验通过,提交复核'){
		return "<font color='green'>"+remarks+"<font/>"
	}
	return remarks;
}
function doReportExport(){
	var brNo=mini.get("bmCode").getFormValue();
	var startDate=mini.get("startDate").getFormValue();
	var endDate=mini.get("endDate").getFormValue();
	var tabType=mini.get("tabType").getValue();
	var flag=mini.get("reviewStatus").getValue();
	var form = new mini.Form("#remarksResultForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '生成Excel文件中...'
			});
			$.ajax({
				url : base + 'bf/remarks/doExportExcel.nut?brNo='+brNo+'&startDate='+startDate+'&endDate='+endDate+'&tabType='+tabType+'&flag='+flag,
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
function onGetCancelStatus(e){
	if (e.value == '0') {
		return '<font color="blue">待同意 </font>';
	} else {
		if(e.value=='1'){
		return '<font color="green">已同意 </font>';
		}
		if(e.value=='2'){
			return '<font color="red">不同意 </font>';
			}
		else{
			return '<font color="black">未申请</font>';
		}
	}
}