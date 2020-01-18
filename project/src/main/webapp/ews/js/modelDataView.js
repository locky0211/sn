$(function() {
			if (modelId != '') {
				mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '数据加载中...'
						});

				$.ajax({
							url : base + 'model/getModelResultTableNum.nut?id=' + modelId,
							type : 'post',
							dataType : 'json',
							success : function(text) {
								if (text == '1') {
									initDataGrid(modelId);
								} else if (text == '0') {
									mini.alert('风险数据尚未生成，请稍候再试！', '警告', function() {
												CloseWindow('ok');
											});
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

		});
function initDataGrid(id) {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'model/getModelResultStruct.nut?id=' + id,
				type : 'post',
				dataType : 'json',
				success : function(text) {
					if (!text.success) {
						mini.alert(text.data, '提醒');
						mini.get('exportExcelBtn').hide();
					} else {
						var gird = mini.get('modelDataGrid');
						gird.set({
									columns : text.data
								});
						var myDate = new Date();
						var dateStr=myDate.toLocaleDateString();
						mini.get("sjqsrq").setValue(dateStr);
						gird.load({startDate:dateStr});
						mini.get('exportExcelBtn').show();
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
function doExportExcel(id, exportAll) {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '导出excel处理中...'
			});
	var gird = mini.get('modelDataGrid');
	var startDate = mini.get("sjqsrq").getFormValue();
	var pageIndex = gird.getPageIndex();
	var pageSize = gird.getPageSize();
	var sortField = gird.getSortField();
	var sortOrder = gird.getSortOrder();
	$.ajax({
				url : base + 'model/exportModelResultToExcel.nut?id=' + id +'&startDate='+startDate+ '&exportAll=' + exportAll + '&pageIndex=' + pageIndex + '&pageSize='
						+ pageSize + '&sortField=' + sortField + '&sortOrder=' + sortOrder,
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

function xiada() {
	return;
	var row = mini.get('modelDataGrid').getSelected();
	if (row) {
		mini.alert('风险已确认!!', '提醒', function() {
					$.ajax({
								url : 'http://115.28.226.191:8080/rms-ha/rms/testAddVp',
								type : 'post',
								dataType : 'json'

							});
					mini.get('modelDataGrid').removeRow(row);
				});
	}

}

function hunue() {
	return;
	var row = mini.get('modelDataGrid').getSelected();
	if (row) {
		mini.alert('风险点已忽略!!', '提醒', function() {

					mini.get('modelDataGrid').removeRow(row);
				});
	}
}

function addProblem()
{
	var rows = mini.get('modelDataGrid').getSelecteds();
	var resultIds = '';
	if (rows.length > 0) {
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			resultIds = resultIds + row.id + ";";
		}
	}
	if(resultIds=="")
	{
		mini.alert('请选择条目！', '提醒', function() {});
	}
	else
	{
		$.post("../../../ews/model/addProblem.nut",{ id: modelId,resultIds:resultIds,dataDate:mini.get('sjqsrq').getFormValue() },
		   function(data){
				mini.unmask(document.body);
				if(data.success)
				{
					mini.alert('操作成功!', '提醒', function() {
										CloseWindow("ok");
									});
				}
				else
				{
					mini.alert('操作失败!请检查是否关联流程', '提醒');
				}
		   },"json"
		);
	}
}

function Search(id){	
	var gird = mini.get('modelDataGrid');
	gird.load(
			{startDate:mini.get("sjqsrq").getFormValue()});
	
}