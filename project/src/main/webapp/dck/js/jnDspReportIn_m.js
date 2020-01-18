var bwjlGrid;
$(function() {
	bwjlGrid = mini.get("bwjlGrid");
	bwjlGrid.load();
});
function onin(){
	mini.open({
		url : base + 'dck/jsp/jnDspReportIn.jsp',
		title : "导入压缩报文", 
		iconCls : "icon-add",
		width : 415,
		height : 300,
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				bwjlGrid.reload();
			}
		}
	});
}
function clear(){
	var qlrq=mini.get("#qlrq");
	var brNo=mini.get("#brNo");
	if(qlrq.getText()==null || qlrq.getText()=='' || brNo.getValue()==null || brNo.getValue()==''){
		mini.alert("请选择要清理的数据日期和机构！！");
	}else{

		mini.confirm("确定清除数据？", "确定？", function(action) {
			if (action == 'ok') {
				mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : base + 'jnckreport/clearData.nut?qlrq=' + qlrq.getText()+'&brNo='+brNo.getValue(),
					success : function(text) {
						if (text) {
							mini.alert('清理成功!!', '提醒', function() {
							});
						} else {
							mini.alert('操作失败!!', '提醒', function() {
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
	}
}
function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="'+base+'/upload/downLoadFile.nut?filePath='+bwjlGrid.getRowByUID(uid).wjlj+'"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}


