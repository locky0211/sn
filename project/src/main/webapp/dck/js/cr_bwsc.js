var bwjlGrid;
$(function() {
	bwjlGrid = mini.get("bwjlGrid");
	bwjlGrid.load();
});
function ondo() {
	form = new mini.Form('#bwscForm');
	form.validate();
	if (form.isValid()==true) {
		var messageid = mini.loading("正在生成, 请稍等....", "报文生成");
		var o = form.getData(true);
		var json = mini.encode(o);
		$.ajax({
			url : base + '/xml/bwsc.nut?sjrq=' + mini.get("rDate").getText()+'01&brNo='+ mini.get("brno").getValue()+'&brName='+ mini.get("brno").getText(),
			type : 'post',
			dataType : 'json',
			success : function(text) {
				if (text.success) {
					mini.alert("操作成功!","提醒",function(){
						bwjlGrid.load();
						mini.hideMessageBox(messageid);
					});
				} else {
					mini.alert("操作失败!","提醒",function(){
						mini.hideMessageBox(messageid);
					});
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				mini.alert("无法链接到服务器!","",function(){
					mini.hideMessageBox(messageid);
				});
			}
		});
	}
}

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	//var s = '<a class="mini-button mini-button-plain" href="'+base+'/xml/downLoadReport.nut?bbsj='+bwjlGrid.getRowByUID(uid).bbsj+'&brNo='+ mini.get("brno").getValue()+'"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	var s = '<a class="mini-button mini-button-plain" href="javascript:downLoad(\''
		+ uid
		+ '\')"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>';
	return s;
}

function downLoad(uid) {
            	toDownLoadFile(base+'/xml/downLoadReport.nut?bbsj='+bwjlGrid.getRowByUID(uid).bbsj+'&brNo='+ mini.get("brno").getValue());
}