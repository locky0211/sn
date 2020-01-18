$(document).ready(function() {
			baseGetOrganSelect('pOrgan', pOrgan);
			// 初始化Form校验
			$('#organManagerForm').validate();
			$('#btnAdd').bind('click', addOrganFun);
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
		});

function addOrganFun() {
	if ($("#organManagerForm").valid()) {
		$("#organManagerForm").submit();
	}
}
