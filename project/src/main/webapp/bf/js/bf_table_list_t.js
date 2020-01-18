var tableListGrid;
$(function() {
	tableListGrid = mini.get('tableListGrid');
			gridLoad();
		});

function gridLoad() {
	tableListGrid.load();
}

// 刷新
function reloads(e) {
	gridLoad();
}

function getList(){
	tableListGrid.load({
		reportDate : mini.get("reportDate").getFormValue()
	});
}

function doInsert(){
	var selectNodes = tableListGrid.getSelecteds();
	var rate = mini.get("rate").getValue();
	var leftValue = mini.get("leftValue").getValue();
	var rightValue = mini.get("rightValue").getValue();
	var reportDate = mini.get("reportDate").getFormValue();
	if(selectNodes.length>0){
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		var json = mini.encode(selectNodes);
		$.ajax({
			url : base + 'bf/check/wave/temp/doAutoInsertFormula.nut',
			type : 'post',
			dataType : 'json',
			data : {json:json,rate:rate,leftValue:leftValue,rightValue:rightValue,reportDate:reportDate},
			success : function(text) {
				if (text.success) {
					//舍掉了miniUI的框架 不然信息不全
					/*mini.alert(text.data, '提醒', function() {
						CloseWindow("ok");
					});*/
					mini.unmask(document.body);
					mini.alert(text.data + '!!', '提醒', function() {
						CloseWindow("ok");
						gridLoad();
					});
				} else {
					mini.unmask(document.body);
					mini.alert(text.data, '提醒');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert('访问服务器失败!!');
			}
		});
	}else{
		mini.alert("请至少选择一行数据!");
	}
}
