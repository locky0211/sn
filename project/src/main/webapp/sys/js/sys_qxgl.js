$(function() {
			if ($('#fg').val() != '') {
				mini.get('qxId').setReadOnly(true);
			}
		});

function SetDataOfQx(data) {
	// 添加时自动给上级权限赋已选节点的值
	if (data != null) {
		var organ = mini.get("pId");
		organ.setValue(data);
	}
}
function onAdd() {
	form = new mini.Form('#qxForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var str=o.qxId;
		var reg = /^[A-Z0-9]{1,}(_[A-Z0-9]{1,})*$/;     
	     var r = str.match(reg);     
	     if(r==null) {  
	         mini.alert('权限ID必须符合大写字母或数字加下划线。','提醒');
	     }else{   
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + 'sys/qx/addOrUpdateQxgl.nut',
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
}
function onClearSjqx() {
	var organ = mini.get("pId");
	organ.setValue("");
}

function qxIdValid(e) {
	if ($('#fg').val() == '') {
		$.ajax({
					type : "POST",
					url : base + 'sys/qx/checkQxId.nut?qxId=' + e.value,
					dataType : 'json',
					async : false,
					success : function(data) {
						if (!data.success) {
							e.errorText = '已存在';
							e.isValid = false;
						}
					}
				});
	}
}

function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}

function onCancel() {
	CloseWindow("cancel");
}