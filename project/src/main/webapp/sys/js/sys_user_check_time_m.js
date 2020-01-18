/**
 * 
 */
var userCheckTime;
$(function() {
	userCheckTime = mini.get('userCheckTime');
	userCheckTime.load();
});

function showColumnInfoView() {
	var row = userCheckTime.getSelected();
	mini.open({
		url : base + "sys/jsp/sys_user_check_time.jsp",
		title : "到期日期",
		iconCls : "icon-add",
		width : 400,
		height : 320,
		allowResize : false,
		showMaxButton : true,
		onload: function () {
            var iframe = this.getIFrameEl();
            var data = { action: "edit", userId: row.userId,userName: row.userName,beforeCheckTime:row.beforeCheckTime};
            iframe.contentWindow.SetData(data);
            
        },
		ondestroy : function(action) {
			if (action == 'ok') {
				userCheckTime.reload();
			}
		}
	});
}

function search() {
	var keyN = mini.get("keyName").getValue();
	var keyI = mini.get("keyId").getValue();
	userCheckTime.load({
				keyName : keyN,
				keyId : keyI
			});
}