function add() {
	// 添加和编辑校验公式
	var form = new mini.Form("#checkformulaForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/addOrUpdateWaveFormula.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
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
}

function isincludSpace(e) {
	var regu = /\s/;
	if (regu.test(e.value)) {
		e.errorText = "不能有空格、回车等";
		e.isValid = false;
	}
}
// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}


// combox清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}

function checkElement(e){
	var element=e.value;
	var a=element.split(",");
	for(var i=0;i<a.length;i++){
		if(a[i].indexOf("_") > 0){
			var b=a[i].split("_");
			if(b.length=3){
				for(var j=0;j<b.length;j++){
					if(b[j]!=""){
						e.isValid=true;
					}else{
						e.errorText = "坐标格式错误";
						e.isValid = false;
					}
				}
			}else{
				e.errorText = "坐标格式错误";
				e.isValid = false;
			}
			
		}else{
			e.errorText = "坐标格式错误";
			e.isValid = false;
		}
	}
}

function onDeptChanged(e) {
    var tabcode = mini.get("tabcode").getValue();
    var thisVersion =mini.get("thisVersion").setValue("");
    var lastVersion =mini.get("lastVersion").setValue("");
	var url = "../../rd/table/getTableVersionNo.nut?tabCode="+tabcode;
	mini.get("thisVersion").setUrl(url);
	mini.get("lastVersion").setUrl(url);
	var checkBrno = mini.get("checkBrno").setValue("");
	var urlBrno = "../../sys/bm/getSysBmListByUserIdAndTabcode.nut?tabcode="+tabcode;
	mini.get("checkBrno").setUrl(urlBrno);
}