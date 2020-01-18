function showValues(tabCode,rowNum,fieldName) {
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'dy_xcz/check/wave/toReportGetValues_AREA.nut?brNo=${brNo}&reportDate=${reportDate}&checkType=${checkType}&tabCode='+tabCode+'&rowNum='+rowNum+'&fieldName='+fieldName,
		success : function(text) {
			if(text.data != null){
				mini.alert(text.data);
			}else {
				mini.alert("操作异常!!!");
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
		}
	});
}

function show(tabCode,rowNum,fieldName){
	var brNo=$("#brNo").val();
	var reportDate=$("#reportDate").val();
	var checkType=$("#checkType").val();
	
	var tdid=window.event.srcElement; 
	var inputId=tdid.id;
	//console.log("inputId="+inputId);
	if(inputId==null||inputId==""){
		inputId=tdid.parentElement.id;
		tdtxt=tdid.parentElement.innerText;
	}
		$.ajax({
			type : 'POST',
			url : base + 'dy_xcz/check/wave/toReportGetValues_AREA.nut?brNo='+brNo+'&reportDate='+reportDate+'&checkType='+checkType+'&tabCode='+tabCode+'&rowNum='+rowNum+'&fieldName='+fieldName,
			dataType : 'json',
			success : function(text) {
				if(text.data!="公式阈值：null"){
					tips(inputId,text.data);
				}else{
					outtips()
					//tips(inputId,"没有相关阈值！");
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
			}
		});
}

function outtips(){

    document.getElementById("tips").style.display='none';

}

function notshow(){
	// outtips();
}

function tips(id,str){

    t= getTop(document.getElementById(id))+document.getElementById(id).offsetHeight+document.getElementById(id).offsetHeight/4;

    l=  getLeft(document.getElementById(id))+document.getElementById(id).offsetHeight*5;

    document.getElementById("tips").innerHTML=str;

    document.getElementById("tips").style.left=l-200+"px";

    document.getElementById("tips").style.top=t+"px";
 //   document.getElementById("tips").style.width="250px";
   // document.getElementById("tips").style.height="30px";
    document.getElementById("tips").style.backgroundColor="#FFFFFF";
    document.getElementById("tips").style.color="#6600FF";
   // document.getElementById("tips").style.border="0";
    
    //document.getElementById("tips").style.borderRadius="2px";
    document.getElementById("tips").style.display="";

}

//获取元素的纵坐标

function getTop(e){

    var offset=e.offsetTop;

    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);

    return offset;

}

//获取元素的横坐标

function getLeft(e){

    var offset=e.offsetLeft;

    if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);

    return offset;

}