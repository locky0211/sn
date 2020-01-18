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
		return '<a class="mini-button mini-button-plain" href="javascript:toReportView(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-excel">查看</span></a>';
	}
	return '';
}

function toReportView(row_uid) {
	var row = YidongFormulaReportGrid.getRowByUID(row_uid);
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	var cUser = mini.get("cUser").getValue();
	if(reportDate!=null&&reportDate!=""){
		mini.open({
					url : base + "rd/table/report/toRdTableFormulaReportCS.nut?tabCode=" + row.tabCode + "&reportDate=" + reportDate +"&cUser=" + cUser,
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

function gridLoad() {
	var reportDate = mini.get("reportDate").getFormValue().replace(/\-/g,"");
	if(reportDate!=null&&reportDate!=""){
		YidongFormulaReportGrid.load({
			reportDate : reportDate
		})
	}
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
	    	url : base + 'rd/jsp/autoAddFormulaYidong_cs.jsp?reportDate=' + reportDate + '&tabCode=' + tabcode + '&tabType=' + tabType + '&cUser=' + cUser,
	    	title : '批量公式',
	    	iconCls : 'icon-edit',
	    	width : 400,
	    	height : 200,
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
	    mini.open({
	    	type : 'POST',
	    	url : base + 'rd/jsp/autoAddFormulaYidong_version_cs.jsp?reportDate='+reportDate+'&tabCode='+tabcode+'&cUser='+cUser,
	    	title : '批量公式',
	    	iconCls : 'icon-edit',
	    	width : 420,
	    	height : 400,
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

function getList(e){
	gridLoad();
}

