$(document).ready(function() {
			// 初始化Form校验
			$('#pubDicForm').validate();
			$('#btnAdd').bind('click', addPubDicFun);
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
		});

function addPubDicFun() {
	if ($("#pubDicForm").valid()) {
		$("#pubDicForm").submit();
	}
}
