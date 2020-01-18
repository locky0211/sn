$(function() {
			var codes = reportNoStr.split('@');
			var ncodes = formula.split('AND');
			if(ncodes.length==2){
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReport(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '</span></a>');
				$('#reportNoStrTd')
				.append('<a class="mini-button mini-button-iconTop mini-button-plain" href="javascript:toEditTableReportLastRate(\'' + codes[0]
						+ '\',\'false\')"><span class="mini-button-text  mini-button-icon icon-excel">' + codes[0] + '上期</span></a>');
			}
		});

function toEditTableReport(tabCode, isReplay) {
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEdit.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}
function toEditTableReportLastRate(tabCode, isReplay) {
	var n = '上期';
	mini.open({
				url : base + "rd/table/report/toRdTableReportForEditLastRateNj.nut?tabCodeVersion=" + tabCode + "_" + isReplay + "&brNo=" + $('#organNo').val()
						+ "&reportDate=" + $('#reportDate').val() + "&reportRate=" + $('#reportRate').val() + "&checkFormula=" + encodeURIComponent($('#formula').val()),
				title : tabCode + n,
				iconCls : "icon-excel",
				width : $(top.window).width() - 50,
				height : $(top.window).height() - 50,
				allowResize : false,
				showMaxButton : true
			});
}

function agreeToIssue(type) {
	var s=''
	if(type=='2'){
		bzInfo =mini.get('bzInfo').getValue();
		if(bzInfo==''){
			mini.alert('拒绝采纳时请填写备注信息', '提醒');
			return false;
		}
		s='确认拒绝采纳说明信息并将问题下发吗？'
	}else{
		s='确认采纳说明信息吗？'
	}
	mini.confirm(s, "确定？", function(action) {
		if (action == "ok") {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据校验中...'
			});
			$.ajax({
				url : base + 'importWaveDesc/adoptOrRefuseInstructions.nut',
				type : 'post',
				dataType : 'json',
				data : {
					descId : mini.get('#descId').getValue(),
					type:type,
					resultId:mini.get('#formulaId').getValue(),
					bzInfo:mini.get('bzInfo').getValue(),
					diffValue:mini.get('dValue').getValue(),
					ydDesc:mini.get('ydDesc').getValue()
				},
				cache : false,
				success : function(text) {
		//				if (text.success) {
		//					 window.location.reload();
		//				} else {
							mini.alert(text.data, '提醒', function() {
								CloseWindow('cancel')
							})
		//				}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
		}
	});
}


function downIssue() {
	bzInfo =mini.get('bzInfo').getValue();
	if(bzInfo==''){
		mini.alert('问题下发时请填写备注信息', '提醒');
		return false;
	}
	mini.confirm("确认将该问题下发吗？", "确定？", function(action) {
		if (action == "ok") {
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据校验中...'
			});
			$.ajax({
				url : base + 'importWaveDesc/sendIssueToJg.nut',
				type : 'post',
				dataType : 'json',
				data : {
					resultId:mini.get('formulaId').getValue(),
					bzInfo:mini.get('bzInfo').getValue(),
					diffValue:mini.get('dValue').getValue()
				},
				cache : false,
				success : function(text) {
		//				if (text.success) {
		//					 window.location.reload();
		//				} else {
							mini.alert(text.data, '提醒', function() {
								CloseWindow('cancel')
							})
		//				}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert('访问服务器失败!!');
				},
				complete : function() {
					mini.unmask(document.body);
				}
			});
		}
	});
}