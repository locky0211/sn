var scoreZfphSumGrid;
$(function() {  
	mini.parse();
	scoreZfphSumGrid=mini.get("scoreZfphSumGrid");
	mini.get('tabType').setValue('个人活期存款');
});

function search() {
	var zbrNo = mini.get('zbrNo').getValue();
	var fbrNo = mini.get('fbrNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	var tabType = mini.get('tabType').getText();
	if (zbrNo == null || zbrNo == '') {
		mini.alert("请总选择机构！！");
	} else if (reportDate == null || reportDate == '') {
		mini.alert("请选择数据日期！！");
	}else if ((fbrNo == null || fbrNo == '')&&(tabType == null || tabType == '')) {
		mini.alert("数据过于巨大仅选择一个分机构或者一个指标！！");
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			type : "POST",
			url : base + 'scoreZfphSumSls/calculateZfph.nut',
			data : {
				'brNo' : zbrNo,
				'reportDate' : reportDate,
				'tabType':tabType,
				'fbrNo':fbrNo
			},
			dataType : 'json',
			success : function(text) {
				if (text.success == true) {
					scoreZfphSumGrid.load({
						brNo : mini.get('zbrNo').getValue(),
						reportDate : mini.get('reportDate').getText(),
						tabType:mini.get('tabType').getText(),
						fbrNo:mini.get('fbrNo').getValue()
					});
				} else {
					mini.alert(text.data);
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				mini.alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	}
}
function reCalculate() {
	var zbrNo = mini.get('zbrNo').getValue();
	var fbrNo = mini.get('fbrNo').getValue();
	var tabType = mini.get('tabType').getText();
	var reportDate = mini.get('reportDate').getText();
	if (zbrNo == null || zbrNo == '') {
		mini.alert("请选择总机构！！");
	} else if (reportDate == null || reportDate == '') {
		mini.alert("请选择数据日期！！");
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			type : "POST",
			url : base + 'scoreZfphSumSls/reCalculateZfph.nut',
			data : {
				'brNo' : zbrNo,
				'reportDate' : reportDate,
				'fbrNo':fbrNo
			},
			dataType : 'json',
			success : function(text) {
				if (text.success == true) {
					scoreZfphSumGrid.load({
						brNo : mini.get('zbrNo').getValue(),
						reportDate : mini.get('reportDate').getText(),
						tabType:mini.get('tabType').getText(),
						fbrNo : mini.get('fbrNo').getValue(),
					});
				} else {
					mini.alert(text.data);
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				mini.alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	}
}
function exportExcel() {
	var scoreZfphSumForm = new mini.Form("scoreZfphSumForm");
	var brno = mini.get('zbrNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	var brnoName = mini.get('zbrNo').getText();
	var tabType = mini.get('tabType').getText();
	var fbrNo = mini.get('fbrNo').getValue();
	if (zbrNo == null || zbrNo == '') {
		mini.alert("请选择总机构！！");
	} else if (reportDate == null || reportDate == '') {
		mini.alert("请选择数据日期！！");
	} else {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "scoreZfphSumSls/exportExcel.nut",
		data : "brnoName=" + brnoName + "&brNo=" + brno + "&reportDate="
				+ reportDate+"&tabType=" + tabType + "&fbrNo=" + fbrNo,
		dataType : 'json',
		success : function(data) {
			toDownLoadFileByFilePath(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			mini.alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
	}
}


function exportExcelForOrgan() {
	var scoreZfphSumForm = new mini.Form("scoreZfphSumForm");
	var brno = mini.get('zbrNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	var brnoName = mini.get('zbrNo').getText();
	if (zbrNo == null || zbrNo == '') {
		mini.alert("请选择总机构！！");
	} else if (reportDate == null || reportDate == '') {
		mini.alert("请选择数据日期！！");
	} else {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "scoreZfphSumSls/exportExcelForOrgan.nut",
		data : "brnoName=" + brnoName + "&brNo=" + brno + "&reportDate="
				+ reportDate,
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				toDownLoadFileByFilePath(text.data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			mini.alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
	}
}


function onchange(e){
	var value=mini.get('fbrNo').getValue();
	if(value==null || value==''){
		$("#calculation").show();
	}else{
		$("#calculation").hide();	
	}
}

function onCloseClick(e){
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
	$("#calculation").show();
}


