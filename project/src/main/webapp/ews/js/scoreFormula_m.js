var formulaGrid;
var data;
$(function() {
	formulaGrid = mini.get("#formulaGrid");
	formulaGrid.load();
});

function gridLoad() {
	formulaGrid.load();
}
function add() {
	mini.open({
		url : base + 'ews/jsp/scoreFormula.jsp?flag=1',
		title : '新增打分公式',
		width : $(top.window).width()-500,
		height : $(top.window).height()-220,
		allowResize : false,
		ondestroy : function(action) {
			formulaGrid.load();
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
		url : base + 'score/formula/getFormulaByCode.nut?formulaCode=' + e.formulaCode + '&page=/ews/jsp/scoreFormula.jsp?falg=2',
		title : '打分公式维护',
		width : $(top.window).width()-500,
		height : $(top.window).height()-220,
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
					url : base + 'score/formula/deleteFormula.nut?formulaCode=' + e.formulaCode,
					success : function(text) {
						if (text) {
							formulaGrid.load();

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

function search() {
	formulaGrid.load({
		formulaCode : mini.get('formulaCode').getValue(),
		formulaName : mini.get('formulaName').getValue()
	});
}
function help(){
	mini.open({
		url : base + 'ews/jsp/scoringCriteria.jsp',
		title : '打分标准介绍',
		width : $(top.window).width() - 100,
		height : $(top.window).height() - 100,
		showMaxButton : true,
		iconCls : "icon-txt",
	   });
}
