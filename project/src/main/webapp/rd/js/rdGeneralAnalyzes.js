
var rdAnalyzesGrid;
var currentMonth;
var lastYearMonth;
$(function() {
	rdAnalyzesGrid = mini.get("rdAnalyzesGrid");
	rdAnalyzesGrid.on("load", function() {
		rdAnalyzesGrid.mergeColumns(["审核处室"]);
	});
	//获取系统当前月份
	currentMonth = currentMonth();
	lastYearMonth = lastYearMonth();
	mini.get('startDate').setValue(lastYearMonth);
	mini.get('endDate').setValue(currentMonth);
	gridLoad();
});


function search() {
	var flag = mini.get('hzStyle').getValue();
	gridLoad();
}

function clear() {
	mini.get("organNo").setValue('');
	mini.get("blameRoom").setValue('');
	mini.get("hzStyle").setValue('');
	mini.get('startDate').setValue(lastYearMonth);
	mini.get('endDate').setValue(currentMonth);
	mini.get('organNo').setReadOnly(false)
	mini.get('blameRoom').setReadOnly(false);
//	gridLoad();
}

/*function onBrNo(e) {
	var row = e.record;
	var brNo = row.jgmc;
	$.ajax({
		url : base + "bf/remarks/getBmNameByBmCode.nut",
		data : {
			code : brNo
		},
		type : "post",
		async : false,
		success : function(text) {
			brNo = text.data;
		},
	});
	return brNo
}*/

function gridLoad(){
	var startDate =   mini.get('startDate').getFormValue();
	var endDate =  mini.get('endDate').getFormValue();
	var flag = mini.get('hzStyle').getValue();
	if(startDate == "" && endDate === ""){
		mini.alert("请选择起始日期!!!");
	}else {
		if(startDate > endDate){
			mini.alert("开始日期大于结束日期!!!");
		}else {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据加载中...'
			});
			if(flag === '1'){
				$.ajax({
					url : base + 'rd/error/check/confirm/getRdAnalyzesJgStruct.nut',
					type : 'post',
					data : {},
					dataType : 'json',
					success : function(text) {
						if (!text.success) {
							mini.alert(text.data, '提醒');
						} else {
							var gird = mini.get('rdAnalyzesGrid');
							gird.set({
								columns : text.data
							});
							rdAnalyzesGrid.load({
								startDate : mini.get('startDate').getFormValue(),
								endDate : mini.get('endDate').getFormValue(),
								flag : flag,
								jgmc : mini.get('organNo').getValue(),
								shcs : mini.get('blameRoom').getValue()
							});
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
			}else if(flag === '2'){
				$.ajax({
					url : base + 'rd/error/check/confirm/getRdAnalyzesCsStruct.nut',
					type : 'post',
					data : {},
					dataType : 'json',
					success : function(text) {
						if (!text.success) {
							mini.alert(text.data, '提醒');
						} else {
							var gird = mini.get('rdAnalyzesGrid');
							gird.set({
								columns : text.data
							});
							
							rdAnalyzesGrid.load({
								startDate : mini.get('startDate').getFormValue(),
								endDate : mini.get('endDate').getFormValue(),
								flag : flag,
								jgmc : mini.get('organNo').getValue(),
								shcs : mini.get('blameRoom').getValue()
							});
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
			}else{
				$.ajax({
					url : base + 'rd/error/check/confirm/getRdAnalyzesStruct.nut',
					type : 'post',
					data : {},
					dataType : 'json',
					success : function(text) {
						if (!text.success) {
							mini.alert(text.data, '提醒');
						} else {
							var gird = mini.get('rdAnalyzesGrid');
							gird.set({
								columns : text.data
							});
							
							rdAnalyzesGrid.load({
								startDate : mini.get('startDate').getFormValue(),
								endDate : mini.get('endDate').getFormValue(),
								flag : flag,
								jgmc : mini.get('organNo').getValue(),
								shcs : mini.get('blameRoom').getValue()
							});
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
	}
}

//获取系统当前月份
function currentMonth() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if(month >= 1 && month <= 9){
		month = "0" + month;
	}
	return year+month;
}

//获取去年的当前月
function lastYearMonth() {
	var date = new Date();
	var year = date.getFullYear() - 1;
	var month = date.getMonth() + 1;
	if(month >= 1 && month <= 9){
		month = "0" + month;
	}
	return year+month;
}

function jsValueChanged() {
	var organNo = mini.get('organNo').getValue();
	if(organNo === ''){
		mini.get('blameRoom').setReadOnly(false);
		mini.get('organNo').setReadOnly(false);
	}else {
		mini.get('blameRoom').setReadOnly(true);
	}
}

function csValueChanged() {
	var blameRoom = mini.get('blameRoom').getValue();
	if(blameRoom === ''){
		mini.get('blameRoom').setReadOnly(false);
		mini.get('organNo').setReadOnly(false);
	}else {
		mini.get('organNo').setReadOnly(true);
	}
}

function onJgCloseClick() {
	mini.get('organNo').setValue('')
	mini.get('organNo').setReadOnly(false)
	mini.get('blameRoom').setReadOnly(false);
}

function onCsCloseClick() {
	mini.get('blameRoom').setValue('')
	mini.get('organNo').setReadOnly(false)
	mini.get('blameRoom').setReadOnly(false);
}