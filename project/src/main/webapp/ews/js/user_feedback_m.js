var sysNoticeGrid;
$(function() {
			sysNoticeGrid = mini.get("sysNoticeGrid");
			sysNoticeGrid.load();
		});

function onRenderer(e) {
	var record = e.record;// 行对象
	var exp=record.formulaId;
	console.log(exp);
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit(' + uid
			+ ')"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:delRow(\'' + uid
			+ '\')"><span class="mini-button-text mini-button-icon icon-remove">删除</span></a>';
	if (exp!=null && exp!=''){
	   s+= '<a class="mini-button mini-button-plain" href="javascript:searchRow(\'' + uid
		+ '\')"><span class="mini-button-text mini-button-icon icon-edit">编辑公式</span></a>';
	}else{
		 s+= '<a class="mini-button mini-button-plain" href="javascript:addRow(\'' + uid
			+ '\')"><span class="mini-button-text mini-button-icon icon-add">新增公式</span></a>';
	};
	return s;
};
function addRow(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	mini.open({
		url : base + 'ews/jsp/checkFormula_feedback.jsp?feedbackid='+row.id,
		title : '校验公式维护',
		width : 660,
		height : 420,
		allowResize : false,
		ondestroy : function(action) {
			sysNoticeGrid.reload();
		}
	});
}
function searchRow(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	console.log(row.formulaId);
	mini.open({
		url : base + 'formula/getFormulaByid.nut?id=' + row.formulaId + '&page=/ews/jsp/checkFormula_feedback.jsp',
		title : '客户名称维护',
		width : 660,
		height : 420,
		allowResize : false,
		ondestroy : function(action) {
			sysNoticeGrid.reload();
		}
	});
}
function addNotice() {
	mini.open({
				url : base + "ews/jsp/user_feedback.jsp",
				title : "新增反馈",
				iconCls : "icon-add",
				width : 680,
				height : 290,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						sysNoticeGrid.reload();
					}
				}
			});
}

function edit(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "ews/feedback/toEditUserFeedBack.nut?id=" + row.id + '&page=/ews/jsp/user_feedback.jsp',
					title : "编辑反馈",
					width : 680,
					height : 290,
					iconCls : "icon-edit",
					ondestroy : function(action) {
						if (action == 'ok') {
							sysNoticeGrid.reload();
						}
					}
				});
	}
};

function delRow(row_uid) {
	var row = sysNoticeGrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
					if (action == "ok") {
						$.ajax({
									url : base + "ews/feedback/delUserFeedBack.nut?id=" + row.id,
									dataType : 'json',
									success : function(data) {
										if (data.success) {
											sysNoticeGrid.removeRow(row);
										}
									}
								});
					}
				});
	}
};

function search() {
	sysNoticeGrid.load({
				userId : mini.get('userId').getValue(),
				content : mini.get('title').getValue()
			});
};


