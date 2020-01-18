/**
 * 
 */
var evidenceTreeGrid;
var userRole;
$(function() {
	evidenceTreeGrid = mini.get('evidenceTreeGrid');
	evidenceTreeGrid.load({
		laDate : mini.get('laDate').getFormValue(),
		problemId : mini.get('id').getValue()
	});
	//判断用户是监管员还是审核员
	$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			userRole = text.success; //3不能填会商
		}
	});
});

function onRenderer(e) {
	var record = e.record;
	var s = "";
	if(record.parent !== ""){
		var uid = record._uid;
//		if(record.isImport !== 'y'){
			if(flag === '1'){
				if(record.id === "fb640fd6231f41b490cd5b88795e6011" || record.id === "52ef13f527f84c20801e68499b3a8392"){
					s += '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占位</span></a>';
				}else {
					s += '<a class="mini-button mini-button-plain" href="javascript:uploadEvidence(\''
						+ uid
						+ '\')"><span class="mini-button-text  mini-button-icon icon-upload">上传</span></a>'
				}
			}
			else if(flag === '2' ){
				mini.get("ay").set({allowInput:false});
				mini.get("laDate").set({allowInput:false});
				mini.get("laDate").set({showTodayButton:false});
				mini.get("laDate").set({readOnly:true});
				if(record.id === "52ef13f527f84c20801e68499b3a8392"){  //不能填处罚决定书
					s += '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占位</span></a>';
				}else {
					if(!userRole && record.id === "fb640fd6231f41b490cd5b88795e6011" ){
						s += '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占位</span></a>';
					}else {
						s += '<a class="mini-button mini-button-plain" href="javascript:uploadEvidence(\''
							+ uid
							+ '\')"><span class="mini-button-text  mini-button-icon icon-upload">上传</span></a>'
					}
				}
			} else if (flag === '3'){
				mini.get("ay").set({allowInput:false});
				mini.get("laDate").set({allowInput:false});
				mini.get("laDate").set({showTodayButton:false});
				mini.get("laDate").set({readOnly:true});
				s += '<a class="mini-button mini-button-plain" href="javascript:uploadEvidence(\''
					+ uid
					+ '\')"><span class="mini-button-text  mini-button-icon icon-upload">上传</span></a>'
			}
			
			
//		}
//		else {
//			s += '<a class="mini-button mini-button-plain" style="visibility:hidden;"><span class="mini-button-text  mini-button-icon icon-upload">占位</span></a>'
//		}
		s += '<a class="mini-button mini-button-plain" href="javascript:downLoadEvidence(\''+ uid + '\')"><span class="mini-button-text  mini-button-icon icon-download">下载</span></a>'
	}
	return s;
}

function uploadEvidence() {
	var e = evidenceTreeGrid.getSelected(); 
	var organNo = mini.get('organNo').getValue();
	var ay = mini.get('ay').getValue();
	var laDate = mini.get('laDate').getFormValue();
	var cfDate = mini.get('cfDate').getFormValue();
	var cfMoney = mini.get('cfMoney').getValue();
//	var evidenceTableId = "7026b1a792c9410babf45d2d54f18b86";
	var evidenceTableId = e.id;
//	var parentNodeId = "8c4ca7ebd1974430bc8bb9430e551061";
	var parentNodeId = mini.get('id').getValue();
	if(flag === '3' && cfDate === ""){
		mini.alert("请填写处罚决定书下发时间以及处罚金额!!!","提醒");
	}else {
		if(organNo !== "" && ay !== "" && laDate !== ""){
			mini.open({
				url : base + "rd/jsp/uploadEvidence_brown.jsp?isUpload=1&laDate=" + laDate + "&parentNodeId="+parentNodeId + "&evidenceTableId="+ evidenceTableId+"&cfDate="+cfDate,
				title : "所需材料",
				iconCls : "icon-edit",
				width : 400,
				height : 200,
				allowResize : false,
				onload: function () {
		            var iframe = this.getIFrameEl();
		            var data = { action: "upload", organNo: organNo,ay: ay,laDate:laDate,evidenceTableId:evidenceTableId,parentNodeId:parentNodeId,cfDate : cfDate,cfMoney : cfMoney};
		            iframe.contentWindow.SetData(data);
		        },
		        ondestroy:function (action){
		        	if(action == "ok"){
		        		evidenceTreeGrid.reload();
		        	}
		        }
		        
			});
		}else {
			mini.alert("请填写基本信息!!!");
		}
	}
}

function downLoadEvidence() {
	var e = evidenceTreeGrid.getSelected(); 
	var organNo = mini.get('organNo').getValue();
	var ay = mini.get('ay').getValue();
	var laDate = mini.get('laDate').getFormValue();
	var cfDate = mini.get('cfDate').getFormValue();
	var evidenceTableId = e.id;
	var parentNodeId = mini.get('id').getValue();
	
	if(organNo !== "" && ay !== "" && laDate !== ""){
		mini.open({
			url : base + "rd/jsp/uploadEvidence_brown.jsp?isUpload=2&laDate=" + laDate + "&parentNodeId="+parentNodeId + "&evidenceTableId="+ evidenceTableId,
			title : "所需材料",
			iconCls : "icon-edit",
			width : 400,
			height : 200,
			allowResize : false,
			onload: function () {
				
	        },
	        ondestroy:function (action){
	        	if(action="ok"){
	        		evidenceTreeGrid.reload();
	        	}
	        }
	        
		});
	}else {
		mini.alert("文件未上传!!!");
	}
	
//	var e = evidenceTreeGrid.getSelected(); 
//	var organNo = mini.get('organNo').getValue();
//	var ay = mini.get('ay').getValue();
//	var laDate = mini.get('laDate').getFormValue();
//	var cfDate = mini.get('cfDate').getFormValue();
////	var evidenceTableId = "7026b1a792c9410babf45d2d54f18b86";
//	var evidenceTableId = e.id;
//	var parentNodeId = "8c4ca7ebd1974430bc8bb9430e551061";
//	if(organNo !== "" && ay !== "" && laDate !== ""){
//		$.ajax({
//			url : base + "punish/evidence/Info/downLoadPunishEvidence.nut",
//			data : {
//				organNo : organNo,
//				laDate : laDate,
//				parentNodeId : parentNodeId,
//				evidenceTableId : evidenceTableId,
//				cfDate : cfDate,
//				punishId : e.punishId
//			},
//			type : "post",
//			success : function(text) {
//				if(text.success){
//					toDownLoadFileForBf(text.data);
//				}
//			},
//		});
//	}
}

function importRenderer(e) {
	var record = e.record;
	var s = '';
	if(record.hasOwnProperty("isImport")){
		if(record.isImport == 'y'){
			s += "文件已上传";
		}
	}else {
		if(record.parent !== ""){
			s += '<span style="color : red;">请上传文件</span>';
		}
	}
	return s;
}

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}
function onConfirm() {
	CloseWindow("ok");
}
function onCancel(e) {
	CloseWindow("cancel");
}
