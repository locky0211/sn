$(function() {
	addCheckFormula();
		});
// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}
function isNumber(e) {
    var re = new RegExp("^-?[0-9]*$");
    if (re.test(e.value)){
    	return true;
    }else{
    	return false;
    }
}

function checkIsNumber(){
	var re = new RegExp("^-?[0-9]*$");
	var leftValue=mini.get("leftValue").getValue();
	var rightValue = mini.get("rightValue").getValue();
	if(re.test(leftValue)){
		if(re.test(rightValue)){
			return true;
		}else{
			mini.get("rightValue").errorText="应为整数";
			mini.get("rightValue").setIsValid(false);
			return false;
		}
	}else{
		mini.get("leftValue").errorText="应为整数";
		mini.get("leftValue").setIsValid(false);
		return false;
	}
}

function add(){
	var form = new mini.Form("#autoFormula");
	var tabCode = mini.get("tabCode").getValue();
	var checkRisk = mini.get("checkRisk").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var leftValue = mini.get("leftValue").getValue();
	var rightValue = mini.get("rightValue").getValue();
	var thisVersion = mini.get("thisVersion").getValue();
	var lastVersion = mini.get("lastVersion").getValue();
	var checkArea = mini.get("checkArea").getValue();
	var cUser = mini.get("cUser").getValue();
	var elementNew = mini.get("elementNew").getValue();
	
	//
	var size = $("#formulaForm tr").length-1;
	var jsonstr;
	jsonstr="[";
	for(var i=0;i<size;i++){
		var e=mini.get("element"+i+"").getValue();
		var le=mini.get("lastElement"+i+"").getValue();
		var iD=mini.get("isDel"+i+"").getValue();
		if(i<size-1){
			jsonstr += "{\"element\""+ ":" + "\"" + e + "\",\"lastElement\""+ ":" + "\"" + le + "\",\"isDel\""+ ":" + "\"" + iD + "\"},";
		}else{
			jsonstr += "{\"element\""+ ":" + "\"" + e + "\",\"lastElement\""+ ":" + "\"" + le + "\",\"isDel\""+ ":" + "\"" + iD + "\"}";
		}
	}
	jsonstr +="]";
	//
	form.validate();
	if(form.isValid()&&checkIsNumber()){
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/autoAddFormulaYidongVersionCS.nut?jsonstr='+jsonstr+'&tabCode='+tabCode+'&checkRisk='+checkRisk+'&reportRate='+reportRate+'&leftValue='+leftValue+'&rightValue='+rightValue+'&thisVersion='+thisVersion+'&lastVersion='+lastVersion+'&cUser='+cUser+'&elementNew='+elementNew,
					type : 'post',
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

function addCheckFormula(){
	var table=$("formulaForm");
	var size2 = $("tr:first~tr", table).size();
	var size = $("#formulaForm tr").length-1;
	var entry="";
	entry+="<tr id='formula"+size+"'>";
	entry+="<td class='tab_field'><input id='element"+ size +"' name='element"+ size +"' required='true'  class='mini-textbox' onvalidation='checkElement' style='width: 140px;' emptyText='例：G0100_6_A'></td>";
	entry+="<td class='tab_field'><input id='lastElement"+ size +"' name='lastElement"+ size +"' required='true' class='mini-textbox' onvalidation='checkElement' style='width: 140px;' emptyText='例：G0100_6_A'></td>";
	entry+="<td class='tab_field'><a class='mini-button mini-button-plain' href=\"javascript:delCheckFormula(\'"+ size +"\')\"><span class='mini-button-text  mini-button-icon icon-remove'>删除</span></a>";
	entry+="<input class='mini-hidden' id='isDel"+ size +"' name='isDel"+ size +"' value='0' /></td>"
	entry+="</tr>";
	$("#formulaForm").append(entry);
    mini.parse();
}

function delCheckFormula(type){
	$("#formula"+type+"").hide();
	mini.get("#isDel"+type+"").setValue("1")
}

function checkElement(e){
	var element=e.value;
	var a=element.split(",");
	for(var i=0;i<a.length;i++){
		if(a[i].indexOf("_") > 0){
			var b=a[i].split("_");
			if(b.length=2){
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

function checkElementNew(e){
	var element=e.value;
	var a=element.split(",");
	for(var i=0;i<a.length;i++){
		if(a[i].indexOf("_") > 0){
			var b=a[i].split("_");
			if(b.length=2){
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