var piWaveResultsGrid;
$(function() {
	var dt = new Date();
	cdt = new Date(dt.getTime());
	mini.get("reportDate").setValue(cdt.getFullYear() +"-"+ cdt.getMonth());
	var reportDate = mini.get("reportDate").getFormValue().replace("-","");
	piWaveResultsGrid = mini.get('piWaveResultsGrid');
	piWaveResultsGrid.load({
		reportDate : reportDate
	});
});

function search(){
	piWaveResultsGrid.load({
		reportDate : mini.get("reportDate").getFormValue().replace("-",""),
		quotaCode : mini.get("quotaCode").getValue(),
		areaCode : mini.get("areaCode").getValue(),
		confim : mini.get("confim").getValue()
	});
}

function saveRemarks(){
    var grid=mini.get('piWaveResultsGrid');
    if(!grid.isChanged()){
    	mini.alert("提交备注不能为空!!!");
    	return false;
    }
	var data =grid.getChanges();
	var json=mini.encode(data);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	 $.ajax({
	        url: base+"pi/wave/results/saveRemark.nut",
	        data: { data: json },
	        type: "post",
	        success: function (text) {
	        	if(text.success){
	        		mini.alert("操作成功!!");
	        	}else{
	        		mini.alert("提交失败!!");
	        	}
	        },
	        error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			},
			complete : function() {
				mini.unmask(document.body);
				search();
			}
	       
	    });
}
function saveRemark(){
	mini.confirm("是否确认提交?","提醒",function(action){
		if(action=='ok'){
			saveRemarks();
		}else{
			
		}
		
	});
}

function onRenderer(e){
	if(e.value=="0"){
		return '<font color="blue">未提交备注</font>';
	}else if(e.value=="1"){
		return '<font color="#FF00FF">待审核</font>';
	}else if(e.value=="2"){
		return '<font color="red">审核不通过</font>';
	}else if(e.value=="3"){
		return '<font color="green">审核通过</font>';
	}
}

function confimPass(){
	mini.confirm("是否确认审核通过?","提醒",function(action){
		if(action=='ok'){
			saveConfimPass();
		}
	});
}

function saveConfimPass(){
	var grid=mini.get('#piWaveResultsGrid');
	var rows=grid.getSelecteds();
	var flag=true;
	if (rows.length > 0) {
		var ids = [];
		for (var i = 0; i < rows.length; i++) {
			ids.push(rows[i].id);
			if(rows[i].content==""){
				flag=false;
			}
		}
		if(flag){
			$.ajax({
				type : "POST",
				url : base + "pi/wave/results/confimPass.nut?ids="+ids,
				dataType : 'json',
				cache : false,
				success : function(data) {
					if (data) {
						mini.alert("审核完成!!!")
					} else {
						mini.alert("审核失败!!!");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					search();
				}
			});
		}else{
			mini.alert("请检查是否填入说明!!");
		}
	} else {
		mini.alert("选择不能为空!!");
	}
}

function confimError(){
	mini.confirm("是否确认审核不通过?","提醒",function(action){
		if(action=='ok'){
			saveConfimError();
		}
	});
}

function saveConfimError(){
	var grid=mini.get('#piWaveResultsGrid');
	var rows=grid.getSelecteds();
	var flag=true;
	if (rows.length > 0) {
		var ids = [];
		for (var i = 0; i < rows.length; i++) {
			ids.push(rows[i].id);
			if(rows[i].content==""){
				flag=false;
			}
		}
		if(flag){
			$.ajax({
				type : "POST",
				url : base + "pi/wave/results/confimError.nut?ids="+ids,
				dataType : 'json',
				cache : false,
				success : function(data) {
					if (data) {
						mini.alert("审核完成!!!")
					} else {
						mini.alert("审核失败!!!");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					search();
				}
			});
		}else{
			mini.alert("请检查是否填入说明!!");
		}
	} else {
		mini.alert("选择不能为空!!");
	}
}

function download() {
	var reportDate = mini.get("reportDate").getFormValue();
	if (reportDate!="") {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成Excel文件中...'
				});
		$.ajax({
					url : base + 'pi/wave/results/downloadZip.nut',
					type : 'post',
					dataType : 'json',
					data : {
						reportDate : reportDate
					},
					cache : false,
					success : function(text) {
						if (text != null) {
							toDownLoadFileByFilePath(text);
						}else{
							mini.alert("请检查是否导入反馈记录或审核完成!!!");
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