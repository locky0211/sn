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
	var tabCode = mini.get("tabCodes").getValue();
	var checkRisk = mini.get("checkRisk").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var leftValue = mini.get("leftValue").getValue();
	var rightValue = mini.get("rightValue").getValue();
	//var thisVersion = mini.get("thisVersion").getValue();
	//var checkBrno = mini.get("checkBrno").getValue(false);
	var cUser = mini.get("cUser").getValue();
	var reportDate = mini.get("reportDate").getValue();
	//var userId = mini.get("userId").getValue();
	form.validate();
	if(form.isValid()&&checkIsNumber()){
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/autoAddFormulaYidongBatch.nut?tabCode='+tabCode+'&checkRisk='+checkRisk+'&reportRate='+reportRate+'&leftValue='+leftValue+'&rightValue='+rightValue+'&cUser='+cUser+'&reportDate='+reportDate,
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

function clear(){
	var form = new mini.Form("#autoFormula");
	var tabCode = mini.get("tabCode").getValue();
	var checkRisk = mini.get("checkRisk").getValue();
	var reportRate = mini.get("reportRate").getValue();
	var leftValue = mini.get("leftValue").getValue();
	var rightValue = mini.get("rightValue").getValue();
	var thisVersion = mini.get("thisVersion").getValue();
	var checkBrno = mini.get("checkBrno").getValue(false);
	var cUser = mini.get("cUser").getValue();
	var reportDate = mini.get("reportDate").getValue();
	//var userId = mini.get("userId").getValue();
	form.validate();
	if(form.isValid()&&checkIsNumber()){
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'rd/check/wave/clear.nut?tabCode='+tabCode+'&checkRisk='+checkRisk+'&reportRate='+reportRate+'&leftValue='+leftValue+'&rightValue='+rightValue+'&thisVersion='+thisVersion+'&checkBrno='+checkBrno+'&cUser='+cUser+'&userId='+userId+'&reportDate='+reportDate,
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

function typeCodeValid(){
	var rt = mini.get("tabType").getValue();
	var rd = mini.get("reportRate").getValue();
	if ((rd.indexOf("1")>-1)&& rt == "季报") {
		mini.alert("请检查所选报表与校验频度是否相符！");
		mini.get("reportRate").setIsValid(false);
	}
	if (((rd.indexOf("1")>-1) || (rd.indexOf("2")>-1)) && rt == "半年报") {
		mini.alert("请检查所选报表与校验频度是否相符！");
		mini.get("reportRate").setIsValid(false);
	}
	if (((rd.indexOf("1")>-1) || (rd.indexOf("2")>-1) || (rd.indexOf("3")>-1)) && rt == "年报") {
		mini.alert("请检查所选报表与校验频度是否相符！");
		mini.get("reportRate").setIsValid(false);
	}
}
