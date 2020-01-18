var orgSummerGrid;
var orgArr;

$(function() {
	orgSummerGrid = mini.get("orgSummerGrid");
	$.ajax({
		url : base + 'sys/bm/getSysBmList.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				orgArr = text;
				orgSummerGrid.load();
			}	
		},
	});
});

//机构名称
function orgRenderer(e){
	for(var index=0; index < orgArr.length; index++){
		if(orgArr[index].bmCode == e.value){
			return orgArr[index].bmName;
		}
	}
}

//查询
function search() {
	orgSummerGrid.load({
		sumCode : mini.get('sumOrg').getValue()
	});
};

//新增
function add() {
	mini.open({
		url : base + 'sys/jsp/sys_org_summer_add.jsp',
		title : '新增汇总机构',
		width : 550,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			orgSummerGrid.reload();
		}
	});
}

function onActionRenderer(e) {
	var s = '<a class="mini-button mini-button-plain" href="javascript:edit()"><span class="mini-button-text  mini-button-icon icon-edit">编辑</span></a>'
			+ '<a class="mini-button mini-button-plain" href="javascript:del()"><span class="mini-button-text  mini-button-icon icon-remove">删除</span></a>';
	return s;
}

//跳转编辑页面
function edit() {
	var e = orgSummerGrid.getSelected();
	mini.open({
		url : base + 'sys/orgSummer/getOrgSummerById.nut?id=' + e.id + '&page=/sys/jsp/sys_org_summer_edit.jsp',
		title : '汇总机构编辑',
		width : 550,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			orgSummerGrid.reload();
		}
	});
}

//删除记录
function del() {
	var e = orgSummerGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == "ok") {
				$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + "sys/orgSummer/deleteOrgSummer.nut?id=" + e.id,
					success : function(text) {
						if (text.success) {
							orgSummerGrid.removeRow(e, true);
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
