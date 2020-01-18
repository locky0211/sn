/**
 * 
 */
var formulaDataGrid;
$(function() {
	formulaDataGrid = mini.get("formulaDataGrid");
	formulaDataGrid.load();
});

function search() {
	formulaDataGrid.load({
		zbmc : mini.get('zbmc').getValue(),
		zblb : mini.get('zblb').getValue(),
		formula : mini.get('formula').getValue()
	});
}

function add(){
	mini.open({
		url : base + 'rd/jsp/rd_score_formula_nj.jsp?flag=1',
		title : '新增打分公式',
		width : 800,
		height : 620,
		allowResize : false,
		ondestroy : function(action) {
			formulaDataGrid.reload();
		}
	});
}
function onRenderer() {
	var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}
function edit() {
	var e = formulaDataGrid.getSelected();
	mini.open({
		url : base + 'rd/score/formula/getFormulaById.nut?id=' + e.id + '&page=/rd/jsp/rd_score_formula_nj.jsp?falg=2',
		title : '打分公式维护',
		width : 800,
		height : 620,
		allowResize : false,
		ondestroy : function(action) {
			formulaDataGrid.reload();
		}
	});
}


function del() {
	var e = formulaDataGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'rd/score/formula/deleteScoreFormula.nut?id=' + e.id,
					success : function(text) {
						if (text) {
							formulaDataGrid.load();
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
