$(function() {
			if (mini.get("idFlag").getValue() != '') {
				mini.get("gId").setReadOnly(true);
			}
		});

function add() {
	// form提交公共字典组
	var ggzdForm = new mini.Form("#addGgzdForm");
	ggzdForm.validate();
	if (ggzdForm.isValid()) {
		var o = ggzdForm.getData();
		var str=o.gId;
		var reg = /^[A-Z0-9]{1,}(_[A-Z0-9]{1,})*$/;     
	     var r = str.match(reg);     
	     if(r==null) {  
	         mini.alert('数据ID必须符合大写字母或数字加下划线。','提醒');
	     }else{    
		var json = mini.encode(o);
		$.ajax({
					url : base + "sys/ggzd/addOrUpdateGgzdzu.nut",
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					}
				});
	}
	}
}
// 清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}

function idIsOnly(e) {
	// 判断是否ID唯一
	if (mini.get("idFlag").getValue() == '') {
		$.ajax({
					url : base + "sys/ggzd/checkZuId.nut?gId=" + e.value,
					async : false,
					dataType : 'json',
					success : function(data) {
						if (!data) {
							e.errorText = "ID已存在!";
							e.isValid = false;
						}

					}
				});
	}
}

function SetDataOfGgzd(itemData) {
	// 选择节点添加自动赋值上级数据
	if (itemData != null) {
		mini.get("pId").setValue(itemData);
	}
}

function onCancel(e) {
	// 关闭页面
	CloseWindow("cancel");
};