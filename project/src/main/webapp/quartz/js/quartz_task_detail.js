$(document).ready(function() {
			// 初始化Form校验
			$('#quartzForm').validate();
			$('#flagId').val(flag);
			bindAjax($('#cycleId'), cycleId);
			$('#taskType').bind('change', function() {
						var v = $(this).val();
						if (v == 'CLASS') {
							$('#typeSpan').text('执行类必须实现QuartzTask接口;例如:com.xfcc.quartz.DoTask');
						} else if (v == 'BAT') {
							$('#typeSpan').text('bat文件必须置于项目config/bat目录下;例如:do.bat');
						} else {
							$('#typeSpan').text('');
						}
					});
			$('#btnAdd').bind('click', addTaskDetailFun);
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
		});

function addTaskDetailFun() {
	if ($("#quartzForm").valid()) {
		$("#quartzForm").submit();
	}
}
