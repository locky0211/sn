/**
 * 
 */
var waveCountTotalGrid;
$(function() {
	waveCountTotalGrid = mini.get('waveCountTotalGrid');
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#rDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	gridLoad()
});

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	waveCountTotalGrid.load({
			brNo : brNo,
			reportDate : reportDate
		});
}
function search(){
	gridLoad();
}

function showCheckView(){
	var row = waveCountTotalGrid.getSelected();
	console.log(row.reportDate)
	if (row) {
		mini.open({
					url : base + 'rd/jsp/rd_wave_description_count.jsp?brNo=' + row.organNo +"&reportDate=" + row.reportDate,
					title : '报表模板信息修改',
					iconCls : 'icon-edit',
					width : 1200,
					height : 450,
					allowResize : false,
					showMaxButton : true
				});

	}
}

function exportExcel() {
	var form = new mini.Form("#waveCountTotalForm");
	form.validate();
	if(form.isValid()){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			type : "POST",
			url : base + "importWaveDesc/downLoadWaveDescCount.nut",
			data : {
				brNo : mini.get("bmCode").getValue(),
				reportDate : mini.get("rDate").getFormValue()
			},
			dataType : 'json',
			success : function(data) {
				toDownLoadFileByFilePath(data);
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