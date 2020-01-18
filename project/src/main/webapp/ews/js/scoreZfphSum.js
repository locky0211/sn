var scoreZfphSumGrid;
$(function() {
	scoreZfphSumGrid=mini.get("scoreZfphSumGrid");
});

function search() {
	var brNo = mini.get('brNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	if (brNo == null || brNo == '') {
		mini.alert("请选择机构！！");
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
			url : base + 'scoreZfphSum/calculateZfph.nut',
			data : {
				'brNo' : brNo,
				'reportDate' : reportDate
			},
			dataType : 'json',
			success : function(text) {
				if (text.success == true) {
					scoreZfphSumGrid.load({
						brNo : mini.get('brNo').getValue(),
						reportDate : mini.get('reportDate').getText()
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
	}
}
function reCalculate() {
	var brNo = mini.get('brNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	if (brNo == null || brNo == '') {
		mini.alert("请选择机构！！");
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
			url : base + 'scoreZfphSum/reCalculateZfph.nut',
			data : {
				'brNo' : brNo,
				'reportDate' : reportDate
			},
			dataType : 'json',
			success : function(text) {
				if (text.success == true) {
					scoreZfphSumGrid.load({
						brNo : mini.get('brNo').getValue(),
						reportDate : mini.get('reportDate').getText()
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
	}
}
function exportExcel() {
	var scoreZfphSumForm = new mini.Form("scoreZfphSumForm");
	scoreZfphSumForm.validate();
	var brno = mini.get('brNo').getValue();
	var reportDate = mini.get('reportDate').getText();
	var brnoName = mini.get('brNo').getText();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		type : "POST",
		url : base + "scoreZfphSum/exportExcel.nut",
		data : "brnoName=" + brnoName + "&brno=" + brno + "&reportDate="
				+ reportDate,
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

function onBeforeTreeLoad(e) {
    var tree = e.sender;    //树控件
    var node = e.node;      //当前节点
    var params = e.params;  //参数对象

    //可以传递自定义的属性
    params.myField = e.data.zbbh; //后台：request对象获取"myField"
}