var formulaGrid;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
});
function add() {
	mini.open({
		url : base + 'sys/jsp/sys_easturl.jsp?flag=1',
		title : 'EAST数据库信息配置',
		width : 450,
		height : 350,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function onRenderer(e) {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

function edit(e) {
	var e = formulaGrid.getSelected();
	mini.open({
		url : base + 'sys/easturl/getEastUrlPageByNo.nut?no=' + e.brNo + '&page=/sys/jsp/sys_easturl.jsp&flag=2',
		title : 'EAST数据库信息配置',
		width : 450,
		height : 350,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.reload();
		}
	});
}
function del() {
	var e = formulaGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'sys/easturl/deleteEastUrl.nut?brNo=' + e.brNo,
					success : function(text) {
						if (text) {
							formulaGrid.removeRow(e, true);

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
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'formula/excute.nut',
		success : function(text) {
			if (text) {
				mini.alert('操作成功!!', '提醒', function() {
				});
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
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	formulaGrid.load({
		brNo : mini.get('#brNo').getValue()
	});
}
function onBrNo(e){
	var val=e.value;
	var brNo;
	$.ajax({
		url : base + 'sys/bm/getBmNameByBmCode.nut',
		type : 'post',
		dataType : 'json',
		data:{bmCode:val},
		cache : false,
		async : false,
		success : function(text) {
			if(text.success){
			brNo= text.data;
			}
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		}
	});
	
 return brNo;
}