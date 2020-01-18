var questiongrid;
$(function() {
	questiongrid = mini.get("questiongrid");
	gridLoad();
		});
function gridLoad() {
	questiongrid.load();
}
function add() {
	mini.open({
				url : base + "sys/jsp/sys_question.jsp",
				title : "新增问题",
				iconCls : "icon-add",
				width : 700,
				height : 500,
				allowResize : false,
				ondestroy : function(action) {
					if (action == 'ok') {
						questiongrid.load();
					}
				}
			});
};

function search() {
	questiongrid.load({
		Title : mini.get('Title').getValue(),
		Createuser : mini.get('Createuser').getValue()
	});
}

function onActionRenderer(e) {
	/*var s;
	s = '<a class="mini-button mini-button-plain" href="javascript:reply()"><span class="mini-button-text  mini-button-icon icon-edit">回复</span></a>';
	s += '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;*/
	var row = e.record;
	var record = e.record;
	var uid = record._uid;
	var s = '<a class="mini-button mini-button-plain" href="javascript:reply(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">回复</span></a>';

	s += '<a class="mini-button mini-button-plain" href="javascript:del(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	if (roleId == '[3]' || roleId == '[admin]') {
	     if(row.Ispush == 1){
	    	 s += '<a class="mini-button mini-button-plain"><span class="mini-button-text  mini-button-icon icon-edit">提交成功</span></a>';
	     }else{
	    	 s += '<a class="mini-button mini-button-plain" href="javascript:push(\'' + uid
				+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">提交省局</span></a>';
	     }
	}
	if(roleId == '[4]' || roleId == '[admin]'){
		 s += '<a class="mini-button mini-button-plain" href="javascript:back(\'' + uid
			+ '\')"><span class="mini-button-text  mini-button-icon icon-edit">问题打回</span></a>';
	}
	return s;
};

function reply(row_uid) {
	var row = questiongrid.getRowByUID(row_uid);
	if (row) {
		mini.open({
					url : base + "sys/response/SysQuestion.nut?&Id=" + row.id ,
					title : "问题回复",
					width : 780,
					height : 490,
					iconCls : "icon-edit",
					ondestroy : function() {
							questiongrid.reload();
					}
				});
	}
};

function del(row_uid) {
	var row = questiongrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定删除此帖？", "确定？", function(action) {
			if (action == 'ok') {
				if(userId == 'admin' || userId == row.Createuser){
				$.ajax({
					type : 'POST',
					url : base + "sys/question/deleteQu.nut",
					data : {
						"Id" : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							questiongrid.removeRow(row, true);
						}
					},
					
				});
			}else{
				alert("您没有权限删除该帖");
			}
			}
		});
	}
};

function push(row_uid) {
	var row = questiongrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定提交此帖？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + "sys/question/pushQu.nut",
					data : {
						"Id" : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							questiongrid.reload();
						}
					},
					
				});
			}
		});
	}
};

function back(row_uid) {
	var row = questiongrid.getRowByUID(row_uid);
	if (row) {
		mini.confirm("确定打回此帖？", "确定？", function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + "sys/question/backQu.nut",
					data : {
						"Id" : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data.success) {
							questiongrid.reload();
						}
					},
					
				});
			}
		});
	}
};
function cellclick(e) {
	 var field=e.field;
	  var record=e.record;
	   if(field=="Title"){ 
    	mini.open({
			url : base + "sys/question/toViewSysQuestion.nut?id=" + record.id + '&page=/sys/jsp/sys_question_view.jsp',
			title : "问题回复",
			width : 780,
			height : 490,
			showMaxButton : true,
			iconCls : "icon-document"  
		});	
	}
}