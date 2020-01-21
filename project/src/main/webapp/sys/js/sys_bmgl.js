var bmglGrid;
var bmglForm;
$(function() {
			bmglGrid = mini.get("#bmForm");
			bmglForm = new mini.Form("#bmForm");
			if (objId != '') {
				mini.get('bmCode').setReadOnly(true);
			}
		});
function onAdd() {
	bmglForm = new mini.Form('#bmForm');
	bmglForm.validate();
	if (bmglForm.isValid()) {
		var o = bmglForm.getData();

		if(o.bmCode != null && o.bmCode == o.pId){
            mini.alert('操作失败!上级机构不能选自己！', '提醒');
            return;
		}

		var str=o.bmCode;
//		var reg = /^[A-Z0-9]{1,}(_[A-Z0-9]{1,})+$/;     
//	     var r = str.match(reg);     
//	     if(r==null) {  
//	         mini.alert('机构编号必须符合大写字母或数字加下划线。','提醒');
//	     }else{   
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + "sys/bm/addOrUpdateBmgl.nut",
					type : 'post',
					data : json,
					dataType : 'json',
					contentType : "application/json",
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
	//}
};

function onCloseClick(e) {
	var obj = mini.get("sjbmId");
	obj = e.sender;
	obj.setText("");
	obj.setValue("");
};
function checkBmCode(e) {
	if (e.isValid) {
		if (objId == '') {
			$.ajax({
						async : false,
						url : base + "sys/bm/checkBmCode.nut?bmCode=" + e.value,
						dataType : 'json',
						success : function(data) {
							if (!data.success) {
								e.errorText = "机构编号已存在";
								e.isValid = false;
							}
						}
					});
		}
	}
};


function checkPId(e) {
    if (e.isValid) {
        if (objId == '') {
            $.ajax({
                async : false,
                url : base + "sys/bm/checkBmCode.nut?bmCode=" + e.value,
                dataType : 'json',
                success : function(data) {
                    if (!data.success) {
                        e.errorText = "机构编号已存在";
                        e.isValid = false;
                    }
                }
            });
        }
    }
};




function SetDataOfOrgan(data) {
	// 添加时自动给所属部门赋已选节点的值
	if (data != null) {
		mini.get("sjbmId").setValue(data);
	}
};
function onCancel() {
	CloseWindow("cancel");
};
function reload() {
	bmglGrid.reload();
};

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}