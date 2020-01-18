var scheduleGrid;
var taskTypeArr;
var nowDate;
var reportTypeArr;

$(function() {
	nowDate();
	scheduleGrid = mini.get("scheduleGrid");
	scheduleGrid.load();
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				reportTypeArr = text;
			}	
		}
	});
	if (nowDate != null ) {
		$.ajax({
			url : base + 'sys/ggzd/getGgzdList.nut?groupId=TASKTYPE',
			type : 'post',
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text != null) {
					taskTypeArr = text;
				}	
			}
		});
	}
	window.setInterval(blink, 400);
});

//跑马灯效果
function blink(){
	$('.fontBlink').css('color','#03a9f4'); 
	setTimeout(" $('.fontBlink').css('color','#fF0000')",100);
	setTimeout( "$('.fontBlink').css('color','#ccc')",200);
};


//获取当前日期yyyyMMdd格式
function nowDate() {
	var mydate = new Date();
	nowDate = "" + mydate.getFullYear();
	var mm = mydate.getMonth() + 1;
	if (mm > 9) {
		nowDate += mm;
	} else {
		nowDate += "0" + mm;
	}
	if (mydate.getDate() > 9) {
		nowDate += mydate.getDate();
	} else {
		nowDate += "0" + mydate.getDate();
	}
	return nowDate;
}

//报表类型
function reportTypeRenderer(e){
	var row = e.row;
	if (e.row.taskTime == nowDate) {
		for(var index=0; index < reportTypeArr.length; index++){
			if(reportTypeArr[index].zdValue == e.value){
				return '<font class="fontBlink">'+ reportTypeArr[index].zdName +'</font>';
			}
		}
	} else {
		for(var index=0; index < reportTypeArr.length; index++){
			if(reportTypeArr[index].zdValue == e.value){
				return reportTypeArr[index].zdName;
			}
		}
	}
}

// 任务状态
function statusRenderer(e) {
	if (e.value == '1') {
		return '<font color="green">已完成</font>';
	}
	return '<font color="red">未完成</font>';
}

//任务类型
function taskTypeRenderer(e){
	var row = e.row;
	if (e.row.taskTime == nowDate) {
		for(var index=0; index < taskTypeArr.length; index++){
			if(taskTypeArr[index].zdValue == e.value){
				return '<font class="fontBlink">'+ taskTypeArr[index].zdName +'</font>';
			}
		}
	} else {
		for(var index=0; index < taskTypeArr.length; index++){
			if(taskTypeArr[index].zdValue == e.value){
				return taskTypeArr[index].zdName;
			}
		}
	}
}

//报表日期
function reportDateRenderer(e) {
	var row = e.row;
	if (e.row.taskTime == nowDate) {
		return '<font class="fontBlink">'+ e.value +'</font>';
	}
	return e.value;
}

//日期显示
function taskDateRenderer(e) {
	if (e.value == nowDate) {
		return '<font class="fontBlink">'+ e.value +'</font>';
	}
	return e.value;
}

//新增
function add() {
	mini.open({
		url : base + 'sys/jsp/sys_schedule_add.jsp',
		title : '新增任务',
		width : 460,
		height : 360,
		allowResize : false,
		ondestroy : function(action) {
			scheduleGrid.load();
		}
	});
}

function onActionRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+'<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

//跳转编辑页面
function edit() {
	var e = scheduleGrid.getSelected();
	mini.open({
		url : base + 'sys/schedule/getScheduleById.nut?id=' + e.id + '&page=/sys/jsp/sys_schedule_edit.jsp',
		title : '任务编辑',
		width : 460,
		height : 360,
		allowResize : false,
		ondestroy : function(action) {
			scheduleGrid.reload();
		}
	});
}

//删除记录
function del() {
	var e = scheduleGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == "ok") {
				$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + "sys/schedule/deleteSchedule.nut?id=" + e.id,
					success : function(text) {
						if (text.success) {
							scheduleGrid.removeRow(e, true);
						} else {
							mini.alert('操作失败!!', '提醒', function() {
							})
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert('访问服务器失败!!');
					},
					complete : function() {
					}
				});
			}
		});
	}
}

function search() {
	scheduleGrid.load({
		taskTime : nowDate
	});
}

function gridLoad() {
	scheduleGrid.load();
}

//提交备注
function saveRemarks(){
	var grid = mini.get('scheduleGrid');
	var rowData = grid.getChanges();
	var json = mini.encode(rowData);
	grid.loading("提交中请稍后。。。");
	$.ajax({
		url: base + "sys/schedule/saveRemark.nut",
		data: { data: json },
		type: "post",
		success: function (text) {
			if(text.success){
				mini.alert(text.data);
				grid.reload();
	        }else{
	        	mini.alert("提交失败!!!");
	        	grid.reload();
	        }
		},
	});
}

function saveRemark() {
	mini.confirm("是否确认提交?", "提醒", function(action) {
		if (action == 'ok') {
			saveRemarks();
		}
	});
}

