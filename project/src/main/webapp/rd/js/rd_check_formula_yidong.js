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
	var type=mini.get("type").getFormValue();
	var checkProject=mini.get("checkProject").getFormValue();
	var cUser = mini.get("cUser").getValue();
	
    //	
	jsonstr="[";
	var ids=mini.get("id").getValue();
	var cr=mini.get("checkRisk").getValue();
	var rr=mini.get("reportRate").getValue();
	var e=mini.get("element").getValue();
	var le=mini.get("lastElement").getValue();
	var lV=mini.get("leftValue").getValue();
	var rV=mini.get("rightValue").getValue();
	var sd=mini.get("startDate").getValue();
	var ed=mini.get("endDate").getValue();
	var ca=mini.get("checkArea").getFormValue();
	var cb=mini.get("checkBrno").getValue();
	jsonstr += "{\"id\""+ ":" + "\"" + ids + "\",\"checkRisk\""+ ":" + "\"" + cr + "\",\"reportRate\""+ ":" + "\"" + rr + "\",\"element\""+ ":" + "\"" + e + "\",\"lastElement\""+ ":" + "\"" + le + "\",\"leftValue\""+ ":" + "\"" + lV + "\",\"rightValue\""+ ":" + "\"" + rV + "\",\"startDate\""+ ":" + "\"" + sd + "\",\"endDate\""+ ":" + "\"" + ed + "\",\"checkArea\""+ ":" + "\"" + ca + "\",\"checkBrno\""+":"+"\""+cb+"\",\"isDel\""+ ":" + "\"" + 0 + "\"}";
	jsonstr +="]";
	var form = new mini.Form("#checkformulaForm");
	form.validate();
	if (form.isValid()) {
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '处理中...'
					});
			$.ajax({
						url : base + 'rd/check/addOrUpdateYiDongCheckFormula2.nut',
						type : 'post',
						data : {jsonstr:jsonstr,tabcode:tabcode,type:type,checkProject:checkProject,id:id,cUser:cUser},
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
	entry+="<td><input id='checkRisk"+ size +"' name='checkRisk"+ size +"' class='mini-combobox' required='true' style='width: 80px;' textField='zdName' valueField='zdValue' url=\"../../sys/ggzd/getGgzdList.nut?groupId=RD_CHECK_RISK\"  allowInput='false' /></td>";
	entry+="<td><input id='element"+ size +"' name='element"+ size +"' required='true'  class='mini-textbox' onvalidation='checkElement' style='width: 100px;' ></td>";
	entry+="<td><input id='lastElement"+ size +"' name='lastElement"+ size +"' class='mini-textbox' style='width: 100px;' ></td>";
	entry+="<td><input id='leftValue"+ size +"' name='leftValue"+ size +"' required='true' onvalidation='isNumber' class='mini-textbox' style='width: 70px;' >~<input id='rightValue"+ size +"' name='rightValue"+ size +"' required='true' onvalidation='isNumber' class='mini-textbox' style='width: 70px;'></td>";
	entry+="<td><input id='startDate"+ size +"' name='startDate"+ size +"'  style='width: 100px;' showClose='true' oncloseclick='onCloseClick' class='mini-combobox' url=\"../../rd/table/getTableVersionNo.nut?tabCode="+tabCode+"\" textField='versionNo' multiSelect='false' valueField='versionNo'  resultAsTree='false' allowInput='true' expandOnNodeClick='true'/></td>";
	entry+="<td><input id='endDate"+ size +"' name='endDate"+ size +"'  style='width: 100px;' showClose='true' oncloseclick='onCloseClick' class='mini-combobox' url=\"../../rd/table/getTableVersionNo.nut?tabCode="+tabCode+"\" textField='versionNo' multiSelect='false' valueField='versionNo'  resultAsTree='false' allowInput='true' expandOnNodeClick='true'/></td>";
	entry+="<td><input id='checkArea"+ size +"' name='checkArea"+ size +"' class='mini-combobox' required='true' textField='zdName' valueField='zdValue' url=\"../../sys/ggzd/getGgzdList.nut?groupId=CHECK_AREA\" style='width: 80px;' allowInput='false' /></td>";
	entry+="<td><input id='checkBrno"+ size +"' name='checkBrno"+ size +"' style='width: 200px;' showClose='true' oncloseclick='onCloseClick' class='mini-treeselect' url=\"../../sys/ggzd/getGgzdList.nut?groupId=SYS_BM_TYPE\" textField='zdName' multiSelect='true' parentField='pId' valueField='zdValue' resultAsTree='false' allowInput='false' expandOnNodeClick='true' /></td>";
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

function onDeptChanged(e) {
    var tabcode = mini.get("tabcode").getValue();
    var startDate =mini.get("startDate").setValue("");
    var endDate =mini.get("endDate").setValue("");
	var url = "../../rd/table/getTableVersionNo.nut?tabCode="+tabcode;
	mini.get("startDate").setUrl(url);
	mini.get("endDate").setUrl(url);
}
