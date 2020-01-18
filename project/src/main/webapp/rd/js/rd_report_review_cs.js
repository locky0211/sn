$(function() {
	/*if (mini.get('bmCode').getValue() != ''&&mini.get('rDate').getValue()!='') {
				doSearchRemarks();
			}*/
			var bmcode=mini.get('bmCode');
			Grid = mini.get('remarksResultGrid');
			Grid.on("load", function() {
						Grid.mergeColumns(["organNo","tabType"]);
						//reportCheckGrid.mergeColumns(["reportNoStr"]);
					});
			if(brNo==''||brNo==null){
				bmcode.setValue(brno);
				mini.get('remarksResultGrid').load();
				}else{
					doSearchRemarks();
				}
		
			});
function doSearchRemarks() {
	var form = new mini.Form("#remarksResultForm");
	form.validate();
	if (form.isValid()) {
		if (checkDateType()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.get('remarksResultGrid').load(o);
		} else {
			mini.alert('报表日期与报表类型不匹配!!', '提醒');
		}
	}
}
function cancelRemark(){
	var grid=mini.get('#remarksResultGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += (rows[i].id + ";");
		}
	
	$.ajax({
		type : "POST",
		url : base + "rd/remarks/cancelRemarks.nut",
		data : {"ids" : ids},
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.alert("操作成功!!!");
				grid.reload();
			} else {
				mini.alert("操作失败!!!");
			}
		}
	});
    } else {
	mini.alert("选择不能为空!!");
   }
}
function agreeNCancel(){
	var grid=mini.get('#remarksResultGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += (rows[i].id + ";");
		}
	
	$.ajax({
		type : "POST",
		url : base + "rd/remarks/agreeNCancel.nut",
		data : {"ids" : ids},
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.alert("操作成功!!!");
				grid.reload();
			} else {
				mini.alert("操作失败!!!");
			}
		}
	});
    } else {
	mini.alert("选择不能为空!!");
   }
}
function agreeCancel(){
	var grid=mini.get('#remarksResultGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += (rows[i].id + ";");
		}
	
	$.ajax({
		type : "POST",
		url : base + "rd/remarks/agreeCancel.nut",
		data : {"ids" : ids},
		dataType : 'json',
		success : function(data) {
			if (data.success) {
				mini.alert("操作成功!!!");
				grid.reload();
			} else {
				mini.alert("操作失败!!!");
			}
		}
	});
    } else {
	mini.alert("选择不能为空!!");
   }
}
function onGetStatus(e) {
if (e.value == '0') {
		return '<font color="blue">待审核 </font>';
	} else {
		if(e.value=='1'){
		return '<font color="red">审核不通过 </font>';
		}else{
			return '<font color="green">审核通过</font>';
		}
	}
}

function checkDateType() {
	var rt = mini.get("tabType").getValue();
	if (rt == "50") {
		return true;
	}
	var rd = mini.get("rDate").getFormValue().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "40") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "80") {
		rs = true;
	}

	if (rd == "12" && rt == "00") {
		rs = true;
	}
	return rs;
}
/*function doExportExcel() {
	var form = new mini.Form("#checkResultForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + '/bf/check/doExportExcel.nut',
					type : 'post',
					dataType : 'json',
					data : {
						brNo : mini.get('bmCode').getValue(false),
						reportDate : mini.get("rDate").getFormValue(),
						tabType : mini.get("tabType").getValue(),
						formulaType : mini.get("checkType").getValue(),
						checkArea : mini.get("checkArea").getValue()
					},
					cache : false,
					success : function(text) {
						if (text != null) {
							toDownLoadFileByFilePath(text);
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

}*/
function showCheckView(e) {
	var row = e.record;
	if(row.remarks=='校验通过,提交复核'){
		mini.alert("该条记录为复核记录，无法展开");
	}else{
	 $.ajax({
	        url: base+"rd/remarks/hasRemarksRecord.nut",
	        data: { id: row.id },
	        type: "post",
	        success: function (text) {
	        	if(text.success){
	        		mini.open({
	    				url : base + "rd/remarks/toRdReportRemarksResultsView.nut?id=" + row.id + '&page=/rd/jsp/rd_report_check_results_view_cs_r.jsp',
	    				title : "校验结果",
	    				iconCls : "icon-text",
	    				width : 750,
	    				height : 400,
	    				allowResize : false,
	    				showMaxButton : true,
	    				ondestroy : function(action) {
	    					if (action == 'ok') {
	    						reloads();
	    					}
	    				}
	    			});
	        		}else{
	        		mini.confirm("该条记录已经不存在，是否删除","提醒",function(action){
	        			if(action=='ok'){
	        				deleteRemark();
	        			}else{
	        				
	        			}
	        			
	        		});
	        		}
	        },
	       
	    });
	}
}


/*function typeChange(){
	var checkType = mini.get("checkType").getValue();
	if(1==checkType){
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]");
	}else if(2==checkType){
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'}]");
	}else{
		mini.get("checkArea").setData("[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]");
	}
}*/

function onUserRenderer(e) {
	if (e.value == 'admin') {
		return '<font color="red">公共库</font>';
	} else {
		e.rowStyle = "background:#FFFF66";
		return '<font color="blue">自定义</font>';
	}
}
function updateRemark(){
	mini.confirm("是否确认提交?","提醒",function(action){
		if(action=='ok'){
			submitRemarks();
		}else{
			
		}
		
	});
   
}
function updateRemarkTH(){
	mini.confirm("是否确认提交?","提醒",function(action){
		if(action=='ok'){
			submitRemarksTH();
		}else{
			
		}
		
	});
}
function submitRemarksTH(){
	 var grid=mini.get('remarksResultGrid');
	    if(!grid.isChanged()){
	    	mini.alert("提交备注不能为空!!!");
	    	return false;
	    }
		var data =grid.getChanges();
		var json=mini.encode(data);
		grid.loading("提交中请稍后。。。");
		 $.ajax({
		        url: base+"rd/remarks/updateRemarksTH.nut",
		        data: { data: json },
		        type: "post",
		        success: function (text) {
		        	if(text.success){
		        		mini.alert("提交成功!!!");
		            grid.reload();
		        	}else{
		        		mini.alert("提交失败!!!");
		        		grid.reload();
		        	}
		        },
		       
		    });
}
function reviewSuccess(){
	var grid=mini.get('#remarksResultGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += (rows[i].id + ";");
		}
		$.ajax({
			type : "POST",
			url : base + "rd/remarks/reviewRemarks.nut",
			data : {"ids" : ids},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("审核成功");
					grid.reload();
				} else {
					mini.alert("审核失败!!!");
				}
			}
		});
	} else {
		mini.alert("选择不能为空!!");
	}
	
}
function onlyUpdateRemark(){
	 var grid=mini.get('remarksResultGrid');
	    if(!grid.isChanged()){
	    	mini.alert("提交备注不能为空!!!");
	    	return false;
	    }
		var data =grid.getChanges();
		var json=mini.encode(data);
		grid.loading("提交中请稍后。。。");
		 $.ajax({
		        url: base+"rd/remarks/onlyUpdateRemarks.nut",
		        data: { data: json },
		        type: "post",
		        success: function (text) {
		        	if(text.success){
		        		mini.alert("提交成功!!!");
		            grid.reload();
		        	}else{
		        		mini.alert("提交失败!!!");
		        		grid.reload();
		        	}
		        },
		       
		    });
}
function deleteRemarks(){
	mini.confirm("是否确认删除?","提醒",function(action){
		if(action=="ok"){
			deleteRemark();
		}else{
			
		}
		
	});
}
function deleteRemark(){
	var grid=mini.get('#remarksResultGrid');
	var rows=grid.getSelecteds();
	if (rows.length > 0) {
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += (rows[i].id + ";");
		}
		$.ajax({
			type : "POST",
			url : base + "rd/remarks/deleteRemarks.nut",
			data : {"ids" : ids},
			dataType : 'json',
			success : function(data) {
				if (data.success) {
					mini.alert("删除记录成功!!!");
					grid.reload();
				} else {
					mini.alert("删除记录失败!!!");
				}
			}
		});
	} else {
		mini.alert("选择不能为空!!");
	}
}
function submitRemarks(){
	 var grid=mini.get('remarksResultGrid');
	    if(!grid.isChanged()){
	    	mini.alert("提交备注不能为空!!!");
	    	return false;
	    }
		var data =grid.getChanges();
		var json=mini.encode(data);
		grid.loading("提交中请稍后。。。");
		 $.ajax({
		        url: base+"rd/remarks/updateRemarks.nut",
		        data: { data: json },
		        type: "post",
		        success: function (text) {
		        	if(text.success){
		        		mini.alert("提交成功!!!");
		            grid.reload();
		        	}else{
		        		mini.alert("提交失败!!!");
		        		grid.reload();
		        	}
		        },
		       
		    });
}
function onBrNo(e){
	var row=e.record;
	var brNo=row.organNo;
$.ajax({
        url: base+"rd/remarks/getBmNameByBmCode.nut",
        data: { code:brNo },
        type: "post",
        async:false,
        success: function (text) {
           brNo=text.data;
        	 },
       
    });
	return brNo
}
function onColor(e){
	var row=e.record;
	var remarks=row.remarks;
    if(remarks=='校验通过,提交复核'){
		return "<font color='green'>"+remarks+"<font/>"
	}
	return remarks;
}
function onGetCancelStatus(e){
	if (e.value == '0') {
		return '<font color="blue">待同意 </font>';
	} else {
		if(e.value=='1'){
		return '<font color="green">已同意 </font>';
		}
		if(e.value=='2'){
			return '<font color="red">不同意 </font>';
			}
		else{
			return '<font color="black">未申请</font>';
		}
	}
}
