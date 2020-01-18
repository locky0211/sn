var checkGrid;
var data;
var data1 = new Array;
var t;
$(function() {
	var dateformat = $('#a').val();
	checkGrid = mini.get("#checkGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getFormValue()
	});

	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=EastTableName',
		success : function(text) {
			data = text;
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
});

function onNameRenderer(e) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].zdValue == e.record.tableName) {
			return data[i].zdName;
		}
	}

}

function a(){
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'check/all/refreshSession.nut',
		success : function(text) {
			if (text.success) {
				var data1=text.data;
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : data1[0]+'/'+data1[1],
				});
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		
	});
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	var form=new mini.Form("#checkForm");
	form.validate();
	checkGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText(),
	});
}
function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
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
		url : base + "check/missRate/exportExcel.nut",
		data :"brnoName=" + brnoName+"&brno="+brno+"&reportDate="+reportDate,
		dataType : 'json',
		success : function(data) {
			if(!data){
				mini.alert('数据异常', '提醒', function() {
				})
			}
			else{
				toDownLoadFileByFilePath(data);
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

function backup(e){
	var brno=mini.get('#brNo').getValue();
	var reportDate=mini.get('#reportDate').getText();
	if (brno == '' || brno == null) {
		mini.alert("请选择机构！！");
	} else if (reportDate == '' || reportDate== null) {
		mini.alert("请选择报表日期!!");
	}else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			type : "POST",
			url : base + "check/missRate/backup.nut",
			data :"brno="+brno+"&reportDate="+reportDate+"&bkType="+e,
			dataType : 'json',
			success : function(text) {
				mini.alert(JSON.stringify(text.data), '提醒', function() {
					checkGrid.reload();
				})
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


