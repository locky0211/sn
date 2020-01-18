/**
 * 
// */
//$(function() {
//	if(errorSource === "1"){
//		mini.get('#errorSource').setValue("系统");
//	}else if(errorSource === "2"){
//		mini.get('#errorSource').setValue("人工录入");
//	}
//	
//	if(jgFlag === "1"){
//		mini.get('jgFlag').setValue("同意");
//	}else if(jgFlag === "2"){
//		mini.get('jgFlag').setValue("不同意");
//	}
//	
//	if(tjFlag === "1"){
//		mini.get('tjFlag').setValue("同意");
//	}else if(tjFlag === "2"){
//		mini.get('tjFlag').setValue("不同意");
//	}
//	
//	if(tbFlag === "1"){
//		mini.get('tbFlag').setValue("是");
//	}else if(tbFlag === "2"){
//		mini.get('tbFlag').setValue("否");
//	}
//	
//	if(deblocFlag === "1"){
//		mini.get('deblocFlag').setValue("是");
//	}else if(deblocFlag === "2"){
//		mini.get('deblocFlag').setValue("否");
//	}
//});
function onCancel(e) {
	CloseWindow("cancel");
}
function confirm() {
	CloseWindow("cancel");
}

function SetData(data) {
	if (data.action == "more") {
		// 跨页面传递的数据对象，克隆后才可以安全使用
		var data = mini.clone(data);
		mini.get('reportNoStr').setValue(data.reportNoStr);
		mini.get('reportName').setValue(data.reportName);
		mini.get('tabType').setValue(data.tabType);
		mini.get('reportDate').setValue(data.reportDate);
		mini.get('cUser').setValue(data.cUser);
		mini.get('errorMoney').setValue(data.errorMoney);
		mini.get('blameRoom').setValue(data.blameRoom);
		
		if (data.errorSource === "1") {
			mini.get('#errorSource').setValue("系统");
		} else if (data.errorSource === "2") {
			mini.get('#errorSource').setValue("人工录入");
		}
		mini.get('blameUser').setValue(data.blameUser);
		mini.get('remark').setValue(data.remark);

		if (data.jgFlag === "1") {
			mini.get('jgFlag').setValue("同意");
		} else if (data.jgFlag === "2") {
			mini.get('jgFlag').setValue("不同意");
		}
		mini.get('jgReason').setValue(data.jgReason);

		if (data.tjFlag === "1") {
			mini.get('tjFlag').setValue("同意");
		} else if (data.tjFlag === "2") {
			mini.get('tjFlag').setValue("不同意");
		}
		mini.get('tjReason').setValue(data.tjReason);

		if (data.tbFlag === "1") {
			mini.get('tbFlag').setValue("是");
		} else if (data.tbFlag === "2") {
			mini.get('tbFlag').setValue("否");
		}

		if (data.deblocFlag === "1") {
			mini.get('deblocFlag').setValue("是");
		} else if (data.deblocFlag === "2") {
			mini.get('deblocFlag').setValue("否");
		}
		mini.get('otherMeasures').setValue(data.otherMeasures);

		$.ajax({
			url : base + "rd/error/check/confirm/getNameByConfig.nut",
			data : {
				organNo : data.organNo,
				tabType : data.tabType,
				blameRoom : data.blameRoom
			},
			type : "post",
			async : false,
			success : function(text) {
				if(text.success){
					mini.get('organNo').setValue(text.data.organName);
					mini.get('tabType').setValue(text.data.tabTypeName);
				}
				
			},
		});
		
//		$.ajax({
//			url : base + "bf/remarks/getBmNameByBmCode.nut",
//			data : {
//				code : data.organNo
//			},
//			type : "post",
//			async : false,
//			success : function(text) {
//				mini.get('organNo').setValue(text.data);
//			},
//		});
//		$.ajax({
//			url : base + "rd/error/check/confirm/getTabType.nut",
//			data : {
//				tabType : data.tabType
//			},
//			type : "post",
//			async : false,
//			success : function(text) {
//				mini.get('tabType').setValue(text);
//			},
//		});

	}
}