/**
 * 
 */
var waveCountGrid;
$(function() {
	waveCountGrid = mini.get('waveCountGrid');
	gridLoad()
});

function onErrorMsgRenderer(e) {
	var record = e.record;
	if (e.value=='0') {
		return '未处理';
	} else if (e.value=='1') {
		return '确认采纳';
	}else if (e.value=='2') {
		return '<font color="red">拒绝采纳</a>';
	} 
}

function gridLoad() {
	var brNo = mini.get("bmCode").getValue();
	var reportDate = mini.get("rDate").getFormValue();
	waveCountGrid.load({
			brNo : brNo,
			reportDate : reportDate
		});
}

function search(){
	gridLoad();
}


function exportExcel() {
	var form = new mini.Form("#waveCountForm");
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