var issuedResultGrid;
var punishGrid;

$(function() {
	issuedResultGrid = mini.get("issuedResultGrid");
	punishGrid = mini.get("punishGrid");
	mini.get("cfFlag").select(0);
	var dt = new Date();
	mini.get('#startDate').setValue((Number(dt.getFullYear())-2) + '-' + (Number(dt.getMonth()) + 1) + "-" + dt.getDate());
	mini.get('#endDate').setValue(dt.getFullYear() + '-' + (Number(dt.getMonth()) + 1) + "-" + dt.getDate());	
	punishGrid.load();
	doSearch();
	searchCf();
});

function gridLoad() {
	issuedResultGrid = mini.get("issuedResultGrid");
	punishGrid = mini.get("punishGrid");
	issuedResultGrid.load();
	punishGrid.load();
	doSearch();
	searchCf();
}

//查询结果
function doSearch(){
	var form = new mini.Form("#issuedResultForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.get('issuedResultGrid').load(o);
	} 
}

//下屏查询结果
function searchCf(){
	var form = new mini.Form("#cfForm");
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.get('punishGrid').load(o);
}

//渲染差错来源
function onErrorType(e){
	if (e.value == '1') {
		return '迟报';
	} else if(e.value == '2'){
		return '错漏报';
	} else{
		
	}
}

//渲染处罚状态
function onCfFlag(e){
	if (e.value == '1') {
		return '处罚中';
	} else if(e.value == '2'){
		return '处罚结束';
	} else{
		
	}
}

function doPunish(){
	mini.confirm("确认统计处罚？","提醒",function(action){
		if (action == 'ok') {
			punish();
		}
	});
}


//双击跳转校验详情
function showCheckView(e) {
	var row = e.record;
	var checkFlag = row.checkFlag;
	if (checkFlag == "1") {
		//基础校验
		mini.open({
			url : base + "rd/check/toRdReportCheckResultsView.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				/*if (action == 'ok') {
					gridLoad();
				}*/
				issuedResultGrid.reload();
			}
		});
	} else if (checkFlag == "2") {
		//异动校验
		mini.open({
			url : base + "rd/check/wave/toRdReportCheckResultsViewCS.nut?id=" + row.resultId + '&page=/rd/jsp/rd_report_check_results_view_wave_cs.jsp',
			title : "校验结果",
			iconCls : "icon-text",
			width : 750,
			height : 400,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					gridLoad();
				}
			}
		});
	}
}

//处罚处理
function punish() {
	var tree = mini.get('issuedResultGrid');
	var ids = tree.getValue();
	if(ids != ""){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处罚批量处理中请稍后...'
		});	
		$.ajax({
			type : "POST",
			url : base + "rd/error/dispose/updateCfFlag.nut?rowIds="+ids,
			//data : "rowIds=" + ids,
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("下发成功!!", "提醒", function() {
						gridLoad();
					});
				} else {
					mini.alert("下发失败!!", "提醒", function() {
						gridLoad();
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
	} else {
		mini.alert("请选择需要处罚的选项！", "提醒");
	}
}

function onActionRenderer(e) {
	var row = e.record;
	var jgFlag = row.jgFlag;
	var s;
	$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		async : false,
		success : function(text) {
			if (text.success) {//统计人员
				s = '<a class="mini-button mini-button-plain" href="javascript:upload(\'' + 1
				+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">证据材料</span></a><a class="mini-button mini-button-plain" href="javascript:upload(\'' + 2
				+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">会商</span></a><a class="mini-button mini-button-plain" href="javascript:upload(\'' + 3
				+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">处罚决定</span></a>';
			} else {//审核人员
				s = '<a class="mini-button mini-button-plain" href="javascript:upload(\'' + 1
				+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">证据材料</span></a><a class="mini-button mini-button-plain" href="javascript:upload(\'' + 3
				+ '\')"><span class="mini-button-text  mini-button-icon icon-txt">处罚决定</span></a>';
			}
		},
	});
	return s;
}
//上传材料
function upload(flag){
	var flag = flag;
	var e = punishGrid.getSelected();
		mini.open({
			url : base + 'rd/error/dispose/getRdErrorConfigById.nut?id=' + e.id + '&page=/rd/jsp/uploadEvidence.jsp?flag='+flag,
			title : "上传材料",
			iconCls : "icon-add",
			width : 1000,
			height : 600,
			ondestroy : function(action) {
				if (action == 'ok') {
					gridLoad();
				}
			}
		});
}


function toDownLoadFileForWord(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}


