$(function() {
			if (mini.get("id").getValue() == '') {
				// mini.get('tabcode').setReadOnly(true);
				// } else {
				
				addCheckFormula()	
			}
			$("#typeCombox").hide();
		});
var loadUrl = base + "sys/bm/getSysBmList.nut";

function checkElement(e){
	var element=e.value;
	var a=element.split(",");
	for(var i=0;i<a.length;i++){
		if(a[i].indexOf("_") > 0){
			var b=a[i].split("_");
			if(b.length=3){
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
function isNumber(e) {
    var re = new RegExp("^-?[0-9]*$");
    if (re.test(e.value)){
    	return true;
    }else{
    	e.errorText="应为整数"
    	e.isValid=false;
    	return false;
    }
}

function checkLastElement(e){
	var element=e.value;
	var a=element.split(",");
	for(var i=0;i<a.length;i++){
		if(a[i].indexOf("_") > 0){
			var b=a[i].split("_");
			if(b.length=3){
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

function add() {
	// 添加和编辑校验公式
	var id=mini.get("id").getFormValue();
	var tabcode=mini.get("tabcode").getFormValue();
	var checkProject=mini.get("checkProject").getFormValue();
    //	
	var size = $("#formulaForm tr").length-1;
	var jsonstr;
	jsonstr="[";
	for(var i=0;i<size;i++){
		var ids=mini.get("id"+i+"").getValue();
		var cr=mini.get("checkRisk"+i+"").getValue();
		var rr=mini.get("reportRate"+i+"").getValue();
		var e=mini.get("element"+i+"").getValue();
		var le=mini.get("lastElement"+i+"").getValue();
		var lV=mini.get("leftValue"+i+"").getValue();
		var rV=mini.get("rightValue"+i+"").getValue();
		var sd=mini.get("thisVersion"+i+"").getValue();
		var ed=mini.get("lastVersion"+i+"").getValue();
		var cb=mini.get("checkBrno"+i+"").getValue();
		var iD=mini.get("isDel"+i+"").getValue();
		if(i<size-1){
			jsonstr += "{\"id\""+ ":" + "\"" + ids + "\",\"checkRisk\""+ ":" + "\"" + cr + "\",\"reportRate\"" + ":" + "\"" + rr + "\",\"element\""+ ":" + "\"" + e + "\",\"lastElement\""+ ":" + "\"" + le + "\",\"leftValue\""+ ":" + "\"" + lV + "\",\"rightValue\""+ ":" + "\"" + rV + "\",\"thisVersion\""+ ":" + "\"" + sd + "\",\"lastVersion\""+ ":" + "\"" + ed + "\",\"checkBrno\""+":"+"\""+cb+"\",\"isDel\""+ ":" + "\"" + iD + "\"},";
		}else{
			jsonstr += "{\"id\""+ ":" + "\"" + ids + "\",\"checkRisk\""+ ":" + "\"" + cr + "\",\"reportRate\"" + ":" + "\"" + rr + "\",\"element\"" + ":" + "\"" + e + "\",\"lastElement\""+ ":" + "\"" + le + "\",\"leftValue\""+ ":" + "\"" + lV + "\",\"rightValue\""+ ":" + "\"" + rV + "\",\"thisVersion\""+ ":" + "\"" + sd + "\",\"lastVersion\""+ ":" + "\"" + ed + "\",\"checkBrno\""+":"+"\""+cb+"\",\"isDel\""+ ":" + "\"" + iD + "\"}";
		}
	}
	jsonstr +="]";
	var form = new mini.Form("#formulaForm");
	form.validate();
	if (form.isValid()) {
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '处理中...'
					});
			$.ajax({
						url : base + 'rd/check/wave/addOrUpdateYiDongCheckFormula2.nut',
						type : 'post',
						data : {jsonstr:jsonstr,tabcode:tabcode,checkProject:checkProject,id:id},
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


function isincludSpace(e) {
	var regu = /\s/;
	if (regu.test(e.value)) {
		e.errorText = "不能有空格、回车等";
		e.isValid = false;
	}
}
// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function checkIsOnly(e) {
	var regu = /\s/;
	if (regu.test(e.value)) {
		e.errorText = "不能有空格、回车等";
		e.isValid = false;
	} else {
		// 唯一性校验
		$.ajax({
					url : base + "rd/check/checkIsOnly.nut?checkFormula=" + e.value + "&id=" + mini.get("id").getValue(),
					async : false,
					dataType : 'json',
					success : function(data) {
						if (!data.success) {
							e.errorText = "已存在!";
							e.isValid = false;
						}
					}
				});
	}
}

// combox清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}
function endDateValid(e,type) {
	if (e.isValid && mini.get('startDate'+type+'').isValid()) {
		if (e.value < mini.get('startDate'+type+'').getValue()) {
			e.errorText = "截止日期应大于生效日期";
			e.isValid = false;
		}
	}
}	

function addCheckFormula(){
	var tabCode=mini.get("tabcode").getValue();
	var table=$("formulaForm");
	//var size = $("tr:first~tr", table).size()|| 0;
	var size2 = $("tr:first~tr", table).size();
	var size = $("#formulaForm tr").length-1;
//	var inner_html = [];
//	
//	inner_html.push('<tr>');
//	
//	//报表频度
//	inner_html.push('<td>');
//	inner_html.push('<input id="reportRate'+ size +'" name="reportRate'+ size +'" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue"data="[{typeValue:\'月\',typeName:\'月\'},{typeValue:\'季\',typeName:\'季\'},{typeValue:\'半年\',typeName:\'半年\'},{typeValue:\'去年同期\',typeName:\'去年同期\'},{typeValue:\'前三季度\',typeName:\'前三季度\'},{typeValue:\'第四季度\',typeName:\'第四季度\'},{typeValue:\'上半年度\',typeName:\'上半年度\'},{typeValue:\'下半年度\',typeName:\'下半年度\'}]" value="" allowInput="false" />');
//	inner_html.push('</td>');
//    //阈值
//	inner_html.push('<td>');
//	inner_html.push('<input id="leftValue'+ size +'" name="leftValue'+ size +'" required="true"  class="mini-textbox" style="width: 80px;" value="" />');
//	inner_html.push('<input id="rightValue'+ size +'" name="rightValue'+ size +'" required="true"  class="mini-textbox" style="width: 80px;" value="" />');
//	inner_html.push('</td>');
//	//报表模板
//	inner_html.push('<td>');
//	inner_html.push('<input id="formulaModel'+ size +'" name="formulaModel'+ size +'" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue" data="[{typeValue:\'(A1-A0)/A0\',typeName:\'(A1-A0)/A0\'},{typeValue:\'(A1-C0)/C0\',typeName:\'(A1-C0)/C0\'}]" value="" allowInput="false" />');
//	inner_html.push('</td>');
	var entry="";
	entry+="<tr id='formula"+size+"'>";
	entry+="<td><input id='id"+ size +"' name='id"+ size +"' class='mini-hidden'  value=''/></td>";
	entry+="<td><input id='checkRisk"+ size +"' name='checkRisk"+ size +"' class='mini-combobox' required='true' style='width: 80px;' textField='zdName' valueField='zdValue' url=\"../../../sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK\"  allowInput='false' /></td>";
	entry+="<td><input id='reportRate"+ size +"' name='reportRate"+ size +"' class='mini-combobox' style='width: 100px;'  popupWidth='100' textField='zdName' valueField='zdValue' url=\"../../../sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE\" required='true' multiSelect='true' allowInput='false' showClose='true' oncloseclick='onCloseClick'/></td>";
	entry+="<td><input id='element"+ size +"' name='element"+ size +"' required='true'  class='mini-textbox' onvalidation='checkElement' style='width: 100px;' ></td>";
	entry+="<td><input id='lastElement"+ size +"' name='lastElement"+ size +"' class='mini-textbox' style='width: 100px;' ></td>";
	entry+="<td><input id='leftValue"+ size +"' name='leftValue"+ size +"' required='true' onvalidation='isNumber' class='mini-textbox' style='width: 50px;' >~<input id='rightValue"+ size +"' name='rightValue"+ size +"' required='true' onvalidation='isNumber' class='mini-textbox' style='width: 50px;'></td>";
	entry+="<td><input id='thisVersion"+ size +"' name='thisVersion"+ size +"'  style='width: 100px;' showClose='true' oncloseclick='onCloseClick' class='mini-combobox' url=\"../../../rd/table/getTableVersionNo.nut?tabCode="+tabCode+"\" textField='versionNo' multiSelect='false' valueField='versionNo'  resultAsTree='false' allowInput='true' expandOnNodeClick='true'/></td>";
	entry+="<td><input id='lastVersion"+ size +"' name='lastVersion"+ size +"'  style='width: 100px;' showClose='true' oncloseclick='onCloseClick' class='mini-combobox' url=\"../../../rd/table/getTableVersionNo.nut?tabCode="+tabCode+"\" textField='versionNo' multiSelect='false' valueField='versionNo'  resultAsTree='false' allowInput='true' expandOnNodeClick='true'/></td>";
	entry+="<td><input id='checkBrno"+ size +"' name='checkBrno"+ size +"' style='width: 180px;' showClose='true' oncloseclick='onCloseClick' popupHeight='200px;' popupWidth='250px;' showFolderCheckBox='true' checkRecursive='true' multiSelect='false' required='true' class='mini-treeselect' url=\"../../../sys/bm/getSysBmListByUserId.nut\" textField='bmName' multiSelect='false' parentField='pId' valueField='bmCode' resultAsTree='false' allowInput='false' /></td>";
	entry+="<td><a class='mini-button' onclick=\"delCheckFormula(\'"+ size +"\')\" style='width: 40px; margin-right: 30px;'>删除</a></td>";
	entry+="<td><input class='mini-hidden' id='isDel"+ size +"' name='isDel"+ size +"' value='0' /></td>"
	entry+="</tr>";
	$("#formulaForm").append(entry);
    mini.parse();
	
}

function delCheckFormula(type){
	$("#formula"+type+"").hide();
	mini.get("#isDel"+type+"").setValue("1")
}

