var moduleOrgGrid;
var moduleArr;
var orgArr;

$(function() {
	moduleOrgGrid = mini.get("moduleOrgGrid");
	$.ajax({
		url : base + 'sys/ggzd/getGgzdList.nut?groupId=SYS_MODULE',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				moduleArr = text;
			}	
		},
	});
	
	$.ajax({
		url : base + 'sys/bm/getSysBmList.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text != null) {
				orgArr = text;
				moduleOrgGrid.load();
			}	
		},
	});
});

//原模块、映射模块
function oldModuleRenderer(e){
	for(var index=0; index < moduleArr.length; index++){
		if(moduleArr[index].zdValue == e.value){
			return moduleArr[index].zdName;
		}
	}
}

//原机构、映射机构
function oldOrgRenderer(e){
	for(var index=0; index < orgArr.length; index++){
		if(orgArr[index].bmCode == e.value){
			return orgArr[index].bmName;
		}
	}
}

function add() {
	mini.open({
		url : base + 'sys/jsp/sys_module_org_map.jsp',
		title : '模块机构映射新增',
		width : 660,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			moduleOrgGrid.reload();
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
	var e = moduleOrgGrid.getSelected();
	mini.open({
		url : base + 'sys/moduleOrgMap/getModuleOrgMapById.nut?id=' + e.id + '&page=/sys/jsp/sys_module_org_map_edit.jsp',
		title : '模块映射编辑',
		width : 550,
		height : 400,
		allowResize : false,
		ondestroy : function(action) {
			moduleOrgGrid.reload();
		}
	});
}

//删除记录
function del() {
	var e = moduleOrgGrid.getSelected();
	if (e) {
		mini.confirm("确定删除记录？", "确定？", function(action) {
			if (action == "ok") {
				$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + "sys/moduleOrgMap/deleteModuleOrgMap.nut?id=" + e.id,
					success : function(text) {
						if (text.success) {
							moduleOrgGrid.removeRow(e, true);
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
