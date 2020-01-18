var YidongFormulaReportGrid;
$(function() {
	YidongFormulaReportGrid = mini.get('YidongFormulaReportGrid');
	var dt = new Date();
	cdt = new Date(dt.getTime());
	mini.get("reportDate").setValue(cdt.getFullYear() +"-"+ (Number(cdt.getMonth())) +"-"+ cdt.getDate());
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	if(reportDate!=null&&reportDate!=""){
		gridLoad();
	}
});

function onRenderer(e) {
	var record = e.record;
	var uid = record._uid;
	if (uid) {
		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''
				+ uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
	}
	return '';
}
//function onRendererAdmin(e) {
//	var record = e.record;
//	var uid = record._uid;
//	if (uid) {
//		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
//	}
//	return '';
//}
//
//
//function onRenderer(e) {
//	var record = e.record;
//	var uid = record._uid;
//	if (uid) {
//		return '<a class="mini-button mini-button-plain" href="javascript:init(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-excel">初始化</span></a><a class="mini-button mini-button-plain" href="javascript:toReportView(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
//	}
//	return '';
//}

function toReportView(row_uid) {
	var row = YidongFormulaReportGrid.getRowByUID(row_uid);
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var searchBrno = mini.get("searchBrno").getValue();
	var cUser = mini.get("cUser").getValue();
	if(reportDate!=null&&reportDate!=""){
		mini.open({
					url : base + "rd/table/report/toRdTableFormulaReport.nut?tabCode=" + row.tabCode + "&reportDate=" + reportDate +"&cUser=" + cUser +"&searchBrno=" + searchBrno,
					title : row.tabName,
					iconCls : "icon-excel",
					width : $(top.window).width() - 50,
					height : $(top.window).height() - 50,
					allowResize : false,
					showMaxButton : true
				});
	}else{
		mini.get("reportDate").errorText="不能为空";
		mini.get("reportDate").setIsValid(false);
		alert("请选择日期！")
	}
}

function init(row_uid) {
	var row = YidongFormulaReportGrid.getRowByUID(row_uid);
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var searchBrno = mini.get("searchBrno").getValue();
	var cUser = mini.get("cUser").getValue();
	var tabCode=row.tabCode;
	if(reportDate!=null&&reportDate!=""){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '初始化中...'
		});
	    $.ajax({
				url : base + 'rd/check/wave/init.nut?brNo='+searchBrno+'&tabCode='+tabCode+'&reportDate='+reportDate,
				type : 'post',
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert("初始化完毕！");
						gridLoad();
					} else {
						mini.alert(text.data, '提醒');
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
		mini.get("reportDate").errorText="不能为空";
		mini.get("reportDate").setIsValid(false);
		alert("请选择日期！")
	}
}

function autoInit() {
	var grid = mini.get("YidongFormulaReportGrid");
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var searchBrno = mini.get("searchBrno").getValue();
	var rows = grid.getSelecteds();
	if(rows.length>0){
		if(reportDate!=null&&reportDate!=""){
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '初始化中...'
		});
		var tabcodes = [];
        for (var i = 0, l = rows.length; i < l; i++) {
			 var r = rows[i];
			 tabcodes.push(r.tabCode);
        }
	    $.ajax({
				url : base + 'rd/check/wave/AutoInit.nut?brNo='+searchBrno+'&tabCodeS='+tabcodes+'&reportDate='+reportDate,
				type : 'post',
				cache : false,
				success : function(text) {
					if (text.success) {
						mini.alert("初始化完毕！");
						gridLoad();
					} else {
						mini.alert(text.data, '提醒');
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
			mini.get("reportDate").errorText="不能为空";
			mini.get("reportDate").setIsValid(false);
			alert("请选择日期！")
		}
	}else{
		mini.alert('请选择一条数据', '提醒');
	}
}

function gridLoad() {
	YidongFormulaReportGrid.load({
		reportDate : mini.get("reportDate").getFormValue().replace(/\-/g,"")
	});
}

function autoAddCheckFormula(){
	var grid = mini.get("YidongFormulaReportGrid");
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var cUser = mini.get("cUser").getValue();
	var rows = grid.getSelecteds();
	if (rows.length == 1) {
	    var tabcode = rows[0].tabCode;
	    var tabType = rows[0].tabType;
	    mini.open({
	    	type : 'POST',
	    	url : base + 'rd/jsp/autoAddFormulaYidong.jsp?reportDate='+reportDate+'&tabCode='+tabcode+'&cUser='+cUser+'&tabType='+tabType,
	    	title : '批量公式',
	    	iconCls : 'icon-edit',
	    	width : 400,
	    	height : 300,
	    	allowResize : true,
	    	showMaxButton : true,
	    	ondestroy : function(action) {
	    		if (action == 'ok') {
	    		}
	    	}
	    });
	  }else if(rows.length>1){
		  var tabcodes = [];
		  var tabtypes = [];
          for (var i = 0, l = rows.length; i < l; i++) {
              var r = rows[i];
              tabcodes.push(r.tabCode);
              tabtypes.push(r.tabType);
          }
    	    mini.open({
    	    	type : 'POST',
    	    	url : base + 'rd/jsp/autoAddFormulaYidong_batch.jsp?reportDate='+reportDate+'&tabCodes='+tabcodes+'&cUser='+cUser+'&tabType='+tabtypes[0],
    	    	title : '批量公式',
    	    	iconCls : 'icon-edit',
    	    	width : 400,
    	    	height : 280,
    	    	allowResize : true,
    	    	showMaxButton : true,
    	    	ondestroy : function(action) {
    	    		if (action == 'ok') {
    	    		}
    	    	}
    	    });
	  } else {
	    alert("请选中一条记录!");
	}
}

function autoAddCheckFormulaVersion(){
	var grid = mini.get("YidongFormulaReportGrid");
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var cUser = mini.get("cUser").getValue();
	var rows = grid.getSelecteds();
	if (rows.length == 1) {
	    var tabcode = rows[0].tabCode;
	    var tabType = rows[0].tabType;
	    mini.open({
	    	type : 'POST',
	    	url : base + 'rd/jsp/autoAddFormulaYidong_version.jsp?reportDate='+reportDate+'&tabCode='+tabcode+'&cUser='+cUser+'&tabType='+tabType,
	    	title : '批量公式',
	    	iconCls : 'icon-edit',
	    	width : 420,
	    	height : 440,
	    	allowResize : true,
	    	showMaxButton : true,
	    	ondestroy : function(action) {
	    		if (action == 'ok') {
	    			}
	    		}
	    	});
	    } else {
	    alert("请选中一条记录!");
	  }
}

function exportFormula(){
	var searchBrno = mini.get("searchBrno").getValue();
	alert(searchBrno);
	$.ajax({
		url : base + 'rd/check/wave/exportYdFormula.nut?brno='+searchBrno,
		type : 'post',
		cache : false,
		success : function(text) {
			if (text.success) {
				mini.alert("导出成功！");
				gridLoad();
			} else {
				mini.alert(text.data, '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	})
}

