var organGrid;
$(function() {  
	mini.parse();
    organGrid = mini.get("#organGrid");
    organGrid.load({
	});
//	$.ajax({
//		type:"post",
//		url:base +'getorganinfo/getFilePaht.nut',
//		success: function (text) {
//	        	   if(text.length>0)
//	        	   mini.get('loadFilePath').setValue(text[0].filePath);	      
//	        },
//	 
//	});
	
});

function gridLoad() {
	organGrid.load();
}
function search() {
	organGrid.load({
		keyCode : mini.get('keyCode').getValue(),
		keyName : mini.get('keyName').getFormValue()
	});
}

function add() {
	mini.open({
				url : base + 'ews/jsp/insideOrganInfo_m.jsp',
				title : '新增机构',
				width : 350,
				height : 180,
				allowResize : false,
				iconCls : "icon-add",
				ondestroy : function(action) {
					if (action == 'ok') {
						organGrid.reload();
					}
				}
			});
}

function onActionRenderer(e){
	var record=e.record;
	var organCode=record.organCode;
	var s='<a class="mini-button mini-button-plain" href="javascript:edit(\'' + organCode+ '\')"><span class="mini-button-text mini-button-icon icon-edit ">编辑</span></a>'
	+ '<a class="mini-button mini-button-plain" href="javascript:del(\'' + organCode
	+ '\')"><span class="mini-button-text mini-button-icon icon-remove ">删除</span></a>';
	return s;
}

function edit(organCode){

	mini.open({
		url : base + 'getorganinfo/editOrganInfo.nut?organCode='+organCode+'&page=/ews/jsp/insideOrganInfo_m.jsp',
		title : '编辑机构',
		width : 350,
		height : 180,
		allowResize : false,
		iconCls : "icon-add",
		ondestroy : function(action) {
			if (action == 'ok') {
				organGrid.reload();
			}
		}
	});
}

function del(organCode){
	mini.confirm('确定删除记录？', '确定？', function(action) {
		if (action == 'ok') {
	$.ajax({
		type:"post",
		url:base + 'getorganinfo/delOrganInfo.nut',
		data:{
			'organCode':organCode
			},
		success: function (text) {
           if(text.success){
        	   mini.alert(text.data);
        	   organGrid.reload();
           }else{
        	   mini.alert(text.data);
        	   organGrid.reload();
           }
        },
        error : function(text) {
        	 mini.alert("删除失败");
        }
	})
		}
	});
}

function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('fileName').setValue(e.file.name);
		mini.get('filePath').setValue(data.data);
	} else {
		mini.alert('文件加载失败!!', '提醒');
		mini.get('fileName').setValue('');
		mini.get('filePath').setValue('');
	}
}

function doReportImport() {
	var fileName = mini.get('fileName').getValue();
	var filePath = mini.get('filePath').getValue();
	if ( fileName !== "" && filePath !== ""){
				$.ajax({
					url:  base +'getorganinfo/uploadRelatedMaterials.nut',
					data : {     
						fileName : fileName,
						filePath : filePath	
					},
					type : "post",
					success : function(text) {
						if(text.success){
							mini.alert('导入成功','提醒');
							mini.get('excelUpload').setValue("");
							organGrid.reload();
						}else{
							mini.alert(text.data,'提醒');
						}
					},
				});
	}else {
		mini.alert("请选择需要上传文件后，点击上传按钮",'提醒');
	}
	
}

function toDownLoadFile(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function downLoadExcels() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '导出Excel模板中...'
	});
	$.ajax({
			url : base + 'getorganinfo/doExportExcel.nut',
			type : 'post',
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFile(text);
					mini.alert("导出成功！");
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

