/**
 * 
 */


function excute() {
	if (mini.get("brNo").getValue() == '' || mini.get("brNo").getValue() == null) {
		mini.alert("请选择机构！！");
	} else if (mini.get("startDate").getText() == '' || mini.get("startDate").getText() == null ) {
		mini.alert("请选择开始日期!!");
	} else if(mini.get("endDate").getText() == '' || mini.get("endDate").getText() == null){
		mini.alert("请选择结束日期!!");
	}else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'sjscore/result/startSJScore.nut?brNo=' + mini.get("brNo").getValue() + '&reportDate=' + mini.get("reportDate").getText(),
			success : function(text) {
				if (text.success) {
					mini.alert("操作成功！！", '提醒', function() {
						resultGrid.load({
							brNo : mini.get('brNo').getValue(),
							reportDate : mini.get('reportDate').getFormValue()
						});
					});
				} else {
					mini.alert(text.data, '提醒', function() {
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
}