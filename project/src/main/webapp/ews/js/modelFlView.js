var modelfltreegrid;
var modelfldatagrid;
$(function() {
			modelfltreegrid = mini.get('modelfltreegrid');
			modelfldatagrid = mini.get('modelfldatagrid');
			getUrlData();
		});
function getUrlData() {
	mini.mask({
				el : document.body,
				cls : 'mini-mark-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'modelfl/getUrlData.nut?url=' + getCategoryOfModels,
				type : 'post',
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success && text.data != null) {
						var jsondata = mini.decode(text.data);
						modelfltreegrid.loadData(jsondata.category);
					} else {
						//mini.alert("未有数据或网络异常");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
};
function onTreeClick(e) {
	var node = e.node;
	if (modelfltreegrid.isLeaf(node) && node.type == 'model') {
		mini.mask({
					el : document.body,
					cls : 'mini-mark-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'modelfl/getUrlData.nut?url=' + getModelTasks + e.node.id,
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success && text.data.length > 2) {
							var jsondata = mini.decode(text.data);
							modelfldatagrid.on("drawcell", function(e) {
										field = e.field;
										value = e.value;
										if (field == "startTime" || field == "endTime") {
											if (value != null) {
												e.cellHtml = value.year.toString() + "-" + value.month.toString() + "-" + value.day.toString() + " "
														+ value.hour.toString() + ":" + value.minute.toString() + ":" + value.second.toString();
											}
										}
									});
							$('#modelId').val(e.node.id);
							modelfldatagrid.loadData(jsondata);
						} else {
							//modelfldatagrid.load();
							//mini.alert("未有数据或网络异常");
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
};
function onRenderer(e) {
	var record = e.record;
	var s = '';
	if (record.state == '1') {
		s = '<a class="mini-button mini-button-plain" href="javascript:look(\'' + record.modelTaskId
				+ '\')"><span class="mini-button-text  mini-button-icon icon-search">查看</span></a>';
	} else if (record.state == '2') {
		e.cellHtml = '<span style="color:red;">处理失败...</span>';
	} else {
		e.cellHtml = '<span style="color:blue;">处理中...</span>';
	}
	return s;
};
function look(id) {
	mini.open({
				url : base + 'ews/jsp/modelDataView.jsp?info=11&id=' + id,
				title : '查看模型任务信息',
				iconCls : 'icon-search',
				width : parseInt($(top.window).width() / 10 * 8),
				borderStyle : "padding:0px 0px;",
				height : $(top.window).height(),
				allowResize : false,
				showMaxButton : true
			});
};
function search() {
	var key = mini.get("key").getValue();
	if (key == "") {
		modelfltreegrid.clearFilter();
	} else {
		modelfltreegrid.filter(function(node) {
					if (node.name.indexOf(key) != -1) {
						return true;
					}
				});
	}
};
function Refresh() {
	getUrlData();
};

/**
 * 这里用于获取模型描述的方法 xiaxiaofeng 2015/3/16
 */
function getModelDesc() {
	if ($('#modelId').val() != '') {
		mini.open({
					url : base + 'ews/jsp/modelDescView.jsp?id=' + $('#modelId').val(),
					title : '模型解读',
					iconCls : 'icon-text',
					// width : parseInt($(top.window).width() / 10 * 8),
					width : 800,
					borderStyle : "padding:0px 0px;",
					height : 600,
					// height : $(top.window).height(),
					allowResize : false,
					showMaxButton : true
				});
	}
}
