function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function doCalInd() {
	var form = new mini.Form("#rdIndCalForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '指标计算中...'
				});
		$.ajax({
					url : base + 'rd/ind/data/initIndData1.nut?brNo=' + mini.get('bmCode').getValue() + '&sDate=' + mini.get('sDate').getFormValue(),
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						$('#rmsg').html(text);
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