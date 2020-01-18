var formulaGrid;

$(function() {
	formulaGrid = mini.get("formulagrid");
	formulaGrid.load();
});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:view(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">查看</span></a>';
	return s;
}

//根据传入行号不同，访问相应页面，并把行号作为参数传入
function view(row_uid) {
	var row = formulaGrid.getRowByUID(row_uid);
	if (row_uid == '1') {
		
		mini.open({
			url : base + "rd/jsp/rd_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	}
	else if (row_uid == '2') {
		mini.open({
			url : base + "ews/jsp/east_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	} else if (row_uid == '3') {
		mini.open({
			url : base + "dck/jsp/dck_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	} else if (row_uid == '4') {
		mini.open({
			url : base + "sam/jsp/rd_dck_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	} else if (row_uid == '5') {
		mini.open({
			url : base + "dck/jsp/dck_east_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	} else if (row_uid == '6') {
		mini.open({
			url : base + "sam/jsp/rd_east_formula_available.jsp?row=" + row_uid,
			title : row.typeName,
			width : 800,
			height : 600,
			iconCls : "icon-edit",
			allowResize : true,
		});
	}
}
