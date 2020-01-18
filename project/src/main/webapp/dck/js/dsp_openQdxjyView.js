function openView(){
	var khdm = mini.get("khdm").getValue();
	mini.open({
		url : base + 'dck/jsp/dsp_qdxjy_view.jsp?khdm='+khdm,
		title : '校验错误查看',
		iconCls : 'icon-view',
		width : 782,
		height : 344,
		allowResize : true,
		showMaxButton : true
	});
}

function openTableView(){
	var id = mini.get("id").getValue();
	mini.open({
		url : base + 'dck/jsp/dsp_qdxjy_view_b.jsp?id='+id,
		title : '校验错误查看',
		iconCls : 'icon-view',
		width : 580,
		height : 320,
		allowResize : false,
		showMaxButton : true
	});
}