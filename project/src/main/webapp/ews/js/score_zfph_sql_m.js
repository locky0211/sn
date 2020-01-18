/**
 * 
 */
var scoreZfpgGrid;
var data;

$(function() {
	scoreZfpgGrid = mini.get("#scoreZfpgGrid");
	scoreZfpgGrid.load();
//	$.ajax({
//		type : 'POST',
//		dataType : 'json',
//		async : false,
//		url : base + 'sys/ggzd/getGgzdList.nut?groupId=DckImportTableName',
//		success : function(text) {
//			data = text;
//		},
//		error : function(jqXHR, textStatus, errorThrown) {
//		},
//		complete : function() {
//		}
//	});
});

function add() {
	mini.open({
		url : base + 'ews/jsp/score_zfph_sql.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			scoreZfpgGrid.reload();
		}
	});
}


function del() {
	var e = scoreZfpgGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'scoreZfphSql/deleteScoreZfphSql.nut?zbbh=' + e.zbbh,
					success : function(text) {
						if (text) {
							scoreZfpgGrid.removeRow(e, true);

						} else {
							mini.alert('操作失败!!', '提醒', function() {
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
		});
	} else {
		mini.alert("请选择你要删除的记录!!");
	}
}

function edit(e) {
	var e = scoreZfpgGrid.getSelected();
	mini.open({
		url : base + 'scoreZfphSql/getScoreById.nut?zbbh=' + e.zbbh + '&page=/ews/jsp/score_zfph_sql.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			scoreZfpgGrid.reload();
		}
	});
}

function onRenderer(e) {
	var s;
	if(e.record.sqlState=='1'){
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-stop">停用</span></a>';
	}else{
		s = '<a class="mini-button mini-button-plain" href="javascript:chageState()"><span class="mini-button-text  mini-button-icon icon-start">启用</span></a>';
	}
	s += '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function chageState(){
	
	//此处存在疑问
	var e = scoreZfpgGrid.getSelected();
	//alert(JSON.stringify(e));
	var row = scoreZfpgGrid.getRowByUID(e._uid);
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'scoreZfphSql/updateSqlState.nut?zbbh=' + e.zbbh,
		success : function(text) {
			if (text.success) {
				scoreZfpgGrid.updateRow(row, text.data);
			} else {
				mini.alert('操作失败!!', '提醒', function() {
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


function search() {
	scoreZfpgGrid.load({
		zbbh : mini.get('#zbbh').getValue(),	
	});
}