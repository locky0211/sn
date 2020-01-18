/**
 * 
 */
var grid;
$(function(){
	grid=mini.get('visualBrnoGrid');
	grid.load();
})
function addVisualBrno(){
	var brNo=mini.get("bmCode").getFormValue();
	var brnoName=mini.get('brnoName').getFormValue();
	$.ajax({
		url : base + 'sys/bm/addVisualBrno.nut',
		type : 'post',
		dataType : 'json',
		data : {brNo:brNo,brnoName:brnoName},
		cache : false,
		success : function(text) {
			if (text.success) {
				mini.alert('操作成功,' + text.data + '!!', '提醒', function() {
				gridLoad();
				});
			} else {
				mini.unmask(document.body);
				mini.alert(text.data, '提醒');
				}
		},
		
	});
}
function gridLoad(){
	grid.reload();
}
function acceptBrno(e){
	var bmCode=e.value;
	var brNo;
	$.ajax({
		url : base + 'sys/bm/acceptBrNo.nut',
		type : 'post',
		dataType : 'json',
		data : {bmCode:bmCode},
		cache : false,
		async : false,
		success : function(text) {
			if (text.success) {
				brNo=text.data;
				
			} else {
				
				}
		},
		
	});
	return brNo;
}
function deleteVisualBrno(){
	mini.confirm("是否确认删除?","提醒",function(action){
		if(action=="ok"){
			deleteBrno();
		}else{
			
		}
		
	});
}
function deleteBrno(){
	var grid=mini.get('#visualBrnoGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var bmCodes = '';
		for (var i = 0; i < rows.length; i++) {
			bmCodes += (rows[i].bmCode + ";");
		}
		$.ajax({
			type : "POST",
			url : base + "sys/bm/deleteBrno.nut",
			data : {"bmCodes" : bmCodes},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("删除虚拟机构成功!!!");
					grid.reload();
				} else {
					mini.alert("删除虚拟机构失败!!!");
				}
			}
		});
	} else {
		mini.alert("选择不能为空!!");
	}
}