var sysNoticeGrid;
var dataDate;
var dataBrNo;
$(function() {
			sysNoticeGrid = mini.get("sysNoticeGrid");
			sysNoticeGrid.load();
			$.ajax({
				type : 'POST',
				dataType : 'json',
				async : false,
				url : base + 'sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE_WJ',
				success : function(text) {
					dataDate = text;
				},
				error : function(jqXHR, textStatus, errorThrown) {
				},
				complete : function() {
				}
			});
		
		});


function onRendererType(e) {
	for (var i = 0; i < dataDate.length; i++) {
		if (dataDate[i].zdValue == e.record.tabType) {
			return dataDate[i].zdName;
		}
	}
}
function onRendererBrNo(e) {
	$.ajax({
		type : 'POST',
		dataType : 'json',
		async : false,
		url : base + 'sys/bm/getSysBmListByBmCode.nut?bmCode='+e.record.brNo,
		success : function(text) {
			
			dataBrNo =mini.decode(text);
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
		},
		complete : function() {
		}
	});
	return dataBrNo[0].bmName;
}
function search() {
	sysNoticeGrid.load({
				userId : mini.get('userId').getValue(),
				reportDate : mini.get('reportDate').getValue(),
				tabType : mini.get('tabType').getValue()
			});
}

