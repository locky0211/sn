var checkGrid;
$(function() {   mini.parse();
	checkGrid = mini.get("#checkGrid");
	checkGrid.load();
});



function onRenderer(e) {
	var record = e.record;
	var value = record.impStatus;
	var s = '';
	if (value == '1') {
		s = '导入成功';
	} else if (value == '2') {
		s = '<div class="mini-button mini-button-plain"><span class="mini-button-text  mini-button-icon icon-wait">导入中</span></div>';
	} else if (value == '0')
		s = '<font color=\"red\">未导入</font>';
	else if (value == '3') {
		s = '<font color=\"red\">导入失败</font>';
	} else if (value == '4') {
		s = '<font color=\"red\">数据导入有截断，详细情况请查看日志</font>';
	} else if (value == '5') {
		s = '<font color=\"red\">该机构文件路径不存在</font>';
	} else if (value == '6') {
		s = '<font color=\"red\">文件不存在</font>';
	} else if (value == '7') {
		s = '<font color=\"red\">该表导数方式不存在，请确认</font>';
	} else if (value == '8') {
		s = '<font color=\"red\">该表导入日志过大，部分错误信息请查看日志</font>';
	}
	return s;
}


function exportExcel() {
	var form=new mini.Form("#checkForm");
	form.validate();
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	var brnoName=mini.get('#brNo').getText();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "check/notnull/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate+"&tableName=CHECK_ALL",
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


