/**
 * 
 */
$(function() {
	$.ajax({
		type : "POST",
		url : base + "check/time/isExpire.nut",
		dataType : 'json',
		success : function(data) {
			if(data){
				$('#iframe').attr('src', base + 'rd/jsp/rd_report_import_organport.jsp');
			}else{
				$('#iframe').attr('src', base + 'rd/jsp/connect_us.jsp');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
});