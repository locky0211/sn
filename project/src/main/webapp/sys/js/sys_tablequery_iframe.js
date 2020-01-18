$(function(){
	if(list!=null&&list!=undefined&&list!='undefined'){
		window.parent.unMask();
	}
	
});


function submit(sql){
	mini.get("sqls").setValue(sql);
	var form = document.getElementById("iform");
	form.submit();
}

