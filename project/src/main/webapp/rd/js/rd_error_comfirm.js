$(function() {
		});

function errortrue(){
	var errorId = mini.get('id').getValue();
	var fg = mini.get('fg').getValue();
	mini.open({
		url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + errorId + '&page=/rd/jsp/rd_error_true.jsp?fg='+fg,
		title : "确认差错",
		iconCls : "icon-add",
		width : 500,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				CloseWindow();
			}
		}
	});
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}

function errorfalse(){
	var errorId = mini.get('id').getValue();
	var fg = mini.get('fg').getValue();
	mini.open({
		url : base + 'rd/error/check/confirm/getRdErrorById.nut?id=' + errorId + '&page=/rd/jsp/rd_error_false.jsp?fg='+fg,
		title : "确认正确",
		iconCls : "icon-add",
		width : 500,
		height : 300,
		allowResize : false,
		ondestroy : function(action) {
			if (action == 'ok') {
				CloseWindow();
			}
		}
	});
}

