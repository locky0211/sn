var sqlGrid;
var data;
$(function() {
	sqlGrid = mini.get("#sqlGrid");
	sqlGrid.load();
});

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function search() {
	sqlGrid.load({
		tableName : mini.get("tableName").getValue(),
		number : mini.get("number").getValue(),
		type : mini.get("type").getValue(),
	});
}


function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:excute()"><span class="mini-button-text  mini-button-icon icon-start">生成文件</span></a>';
	return s;
}

function onTypeRenderer(e) {
	if (e.value == '1') {
		return '两端核对企业自然人';
	} else if (e.value == '2'){
		return '个人';
	} else {
		return '量化评分'
	}
}

function add() {
	mini.open({
		url : base + 'ci/jsp/ci_sql.jsp',
		title : '征信两端核对量化评分SQL维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			sqlGrid.reload();
		}
	});
}



function edit(e) {
	var e = sqlGrid.getSelected();
	mini.open({
		url : base + 'ci/sql/getFormulaById.nut?id=' + e.id + '&page=/ci/jsp/ci_sql.jsp',
		title : '校验公式维护',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			sqlGrid.reload();
		}
	});
}




function del() {
	var e = sqlGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'ci/sql/deleteFormula.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							sqlGrid.removeRow(e, true);
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

function excute() {
	var e = sqlGrid.getSelected();
	var excuteDate = mini.get("excuteDate").getFormValue();
	if(excuteDate == ""){
		mini.alert('请选择导出txt的日期!!', '提醒')
	}else{
		mini.mask({
			el : el,
			cls : 'mini-mask-loading',
			html : '生成txt文件中...'
		});
$.ajax({
			url : base + 'ci/sql/doExportTxt.nut',
			type : 'post',
			dataType : 'json',
			data : {
				tableName : e.tableName,
				number : e.number,
				type : e.type,
				sql : e.sql,
				excuteDate : mini.get("excuteDate").getFormValue()
			},
			cache : false,
			success : function(text) {
				if (text != null) {
					toDownLoadFileByFilePath(text);
				}else{
					mini.alert('文件无数据!', '提醒');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(el);
			}
		});
	}

}

function doExportTxtAll() {
	var grid = mini.get("sqlGrid");
	var rows = grid.getSelecteds();
	var excuteDate = mini.get("excuteDate").getFormValue();
	if(excuteDate == ""){
		mini.alert('请选择导出txt的日期!!', '提醒')
	}else{
		mini.mask({
			el : el,
			cls : 'mini-mask-loading',
			html : '生成文件中...'
		});
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.id);
                }
                
                $.ajax({
        			url : base + "ci/sql/doExportTxtAll.nut?ids="+ids+"&excuteDate="+excuteDate,
        			type : 'post',
        			dataType : 'json',
        			data : {
        			},
        			cache : false,
        			success : function(text) {
        				if (text != null) {
        					toDownLoadFileByFilePath(text);
        				}else{
        					mini.alert('文件无数据!', '提醒');
        				}
        			},
        			error : function(jqXHR, textStatus, errorThrown) {
        				alert('访问服务器失败!!');
        			},
        			complete : function() {
        				mini.unmask(el);
        				a();
        			}
        		});
        	}
             else {
                alert("请选中至少一条记录!");
            }
	}
}

function a(){
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'ci/sql/getErrorMsg.nut',
		success : function(text) {
			if (text.success) {
				var msg=text.data;
				alert(msg);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		
	});
}

function toDownLoadFile1(url) {
	
		$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
		
}
