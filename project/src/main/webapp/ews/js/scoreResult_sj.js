var resultGrid;
var data;
$(function() {
	resultGrid = mini.get("#resultGrid");
	var dt = new Date();
	dt.setDate(1);
	cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
	mini.get('#reportDate').setValue(cdt.getFullYear() + '-' + (Number(cdt.getMonth()) + 1) + "-" + cdt.getDate());
	resultGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getFormValue()
	});
});

function onActionRenderer(e) {
	var record = e.record;
	var s = '<a class="mini-button mini-button-plain" href="javascript:editRow()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	if (resultGrid.isEditingRow(record)) {
		s = '<a class="mini-button mini-button-plain" href="javascript:updateRow()"><span class="mini-button-text  mini-button-icon icon-ok">确定</span></a>'
				+ '<a class="mini-button mini-button-plain" href="javascript:cancelRow()"><span class="mini-button-text  mini-button-icon icon-close">取消</span></a>';
	}
	return s;
}
function editRow() {
	var row = resultGrid.getSelected();
	if (row) {
		resultGrid.cancelEdit();
		resultGrid.beginEditRow(row);
	}
}
function updateRow() {
	resultGrid.commitEdit();
	var rowData = resultGrid.getSelected();
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	var data = mini.encode(rowData);
	var json = data;
	$.ajax({
		url : base + "sjscore/result/updateResult.nut",
		data : json,
		type : "post",
		dataType : "json",
		success : function(text) {
			if (text) {
				resultGrid.reload();
			} else {
				mini.alert('操作失败!!!');
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
function exportToExcel(){
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出excel处理中...'
	});
	
	$.ajax({
		url : base + 'sjscore/result/exportToExcel.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText(),
		type : 'post',
		dataType : 'json',
		success : function(text) {
			if (!text.success) {
				mini.alert(text.data, '提醒');
			} else {
				toDownLoadFileByFilePath(text.data);
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

function excute() {
	//var str = [{"checkFlag":"1","cjrq":"2015-09-30","orgId":"JSS_SZS_FR_CSNSH"}];
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
			//url : base + 'sjscore/result/startSJScore.nut',
			url : base + 'sjscore/result/startSJScore.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			//data:mini.encode(str),
			success : function(text) {
				if (text.success) {
					mini.alert("操作成功！！", '提醒', function() {
						resultGrid.load({
							brNo : mini.get('brNo').getValue(),
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					mini.alert(JSON.stringify(text.data), '提醒', function() {
					})
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
function search() {
	var form=new mini.Form("#scoreForm");
	form.validate();
	resultGrid.load({
		brNo : mini.get('brNo').getValue(),
		reportDate : mini.get('reportDate').getText()
	});
}
function onColorRenderer(e) {
	return "<span style=\"color: red\">" + e.record.number + "</span>"
}
function cancelRow(row_uid) {
	var row = resultGrid.getSelected();
	resultGrid.cancelEditRow(row);
}

function onin(){
	mini.open({
		url : base + 'ews/jsp/east_score_import.jsp',
		title : "导入打分明细", 
		iconCls : "icon-add",
		width : 415,
		height : 300,
		allowResize : false,
		showMaxButton : true,
	});
}