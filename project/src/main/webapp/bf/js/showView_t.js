/**
 * 
 */
var grid;
$(function(){
	var tabType=mini.get('tabType').getValue();
	var reportDate=mini.get('reportDate').getValue();
	var organNo=mini.get('organNo').getValue();
	grid=mini.get('showViewGrid');
	grid.load(
			{tabType:tabType,
			 reportDate:reportDate,
			 organNo:organNo
				}
			);
})
function importFlag(e){
	var val=e.value;
	if(val=='0'){
		return "<font color='red'>未导入</font>";
	}
	else{
		return  "<font color='blue'>已经导入</font>";
	}
}
function checkFlag(e){
	var val=e.value;
	if(val=='0'){
		return "<font color='green'>未校验</font>";
	}
	if(val=='1'){
		return "<font color='red'>校验未通过</font>";
	}else{
		return "<font color='blue'>校验通过</font>";
	}
}

function showBfCheckResultView(e){
	window.CloseOwnerWindow();
	var row = e.record;
	var tabCode = row.reportCode;
	var tabType = mini.get('tabType').getValue();
	var reportDate = mini.get('reportDate').getValue();
	var organNo = mini.get('organNo').getValue();
    parent.showTab(organNo, '大集中校验结果查询', base + 'bf/jsp/bf_check_result_list.jsp?brNo=' + organNo + '&reportDate='
			+ reportDate +'&tabType='+tabType);
}	
