var frgxrxxGrid;
var gxrzjxxGrid;
var bl = false;
$(function() {
	frgxrxxGrid = mini.get("frgxrxxGrid");
	gxrzjxxGrid = mini.get("gxrzjxxGrid");
	if(isHdata == 1){
		frgxrxxGrid.load({bl:1,khid:frkhxxId
		});            
	}else{ 
		frgxrxxGrid.load({khid:frkhxxId}); 
	}
	var arrayKeys = new Array();
	arrayKeys = sessionUserAccessKeys.substring(1, sessionUserAccessKeys.length - 1).split(',');
	for (var i = 0; i < arrayKeys.length; i++) {
		if (arrayKeys[i] == ' cr_glyh') {
			bl = true;
		}
	}
});

/**
 * 法人关系人维护
 */
function addFrgxrxx() {
	mini.open({
		url : base + '/frgxr/toAddFrgxrxx.nut?khlx=2&page=/cr/jsp/cr_frgxrxx.jsp&khid=' + frkhxxId,
		title : "新增法人关系人",
		iconCls : "icon-add",
		width : 380,
		height : 400, 
		allowResize : false,
		showMaxButton : true,
		ondestroy : function(action) {
			if (action == 'ok') {
				frgxrxxGrid.load({khid:frkhxxId});
			}
		}
	}); 
}

function editFrgxrxx() {
	var row = frgxrxxGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'frgxr/toEditFrgxrxx.nut?id=' + row.id + '&page=/cr/jsp/cr_frgxrxx.jsp?ghr=' + ghr,
			title : '法人关系人信息维护',
			iconCls : 'icon-edit',
			width : 380,
			height : 390,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					frgxrxxGrid.load({khid:frkhxxId});
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function toHFrgxrxxView() {
	var row = frgxrxxGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'frgxr/toHFrgxrxxView.nut?id=' + row.id + '&page=/cr/jsp/cr_frgxrxx.jsp?ghr=' + ghr,
			title : '法人关系人信息维护',
			iconCls : 'icon-edit',
			width : 380,
			height : 390,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function delFrgxrxx() {
	if(bl){
		var row = frgxrxxGrid.getSelected();
		if (row) {
			mini.confirm('关系人信息删除后，关系人证件信息也被同时删除!!', '确定？', function(action) {
				if (action == 'ok') {
					$.ajax({
						type : 'POST',
						url : base + 'frgxr/deleteFrgxrxx.nut',
						data : {
							'id' : row.id
						},
						dataType : 'json',
						success : function(data) {
							if (data) {
								frgxrxxGrid.removeRow(row, true);
								mini.get("gxrzjxxGrid").reload();
							}
						}
					});
				}
	
			});
		} else {
			mini.alert('请先选中一条数据!!', '提醒');
		}
	}else{
		mini.alert('没有权限!!', '提醒');
	}
}

/**
 * 关系人证件维护
 */
function addGxrzjxx() {
	var row = frgxrxxGrid.getSelected();
	if (row) {
		if (ghr == userId) {
			mini.open({
				url : base + '/gxrzj/toAddGxrzjxx.nut?gxrid=' + row.id+'&sjrq='+sjrq+ '&page=/cr/jsp/cr_gxrzjxx.jsp&khlx=2',
				title : "新增关系人证件",
				iconCls : "icon-add",
				width : 360,
				height : 415,
				allowResize : false,
				showMaxButton : true,
				ondestroy : function(action) {
					if (action == 'ok') {
						mini.get("gxrzjxxGrid").load({
							gxrid : row.id
						});
					}
				}
			});
		}else{
			mini.alert('非该条证件记录的管户人!!');
		}
	} else {
		mini.alert("请先选中一个关系人！", '提醒');
	}
}

function editGxrzjxx() {
	var frgxrRow = frgxrxxGrid.getSelected();
	var row = mini.get("gxrzjxxGrid").getSelected();
	if (row) {
		mini.open({
			url : base + 'gxrzj/toEditGxrzjxx.nut?id=' + row.id + '&page=/cr/jsp/cr_gxrzjxx.jsp?ghr=' + ghr,
			title : '法人关系人信息维护',
			iconCls : 'icon-edit',
			width : 360,
			height : 415,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				if (action == 'ok') {
					mini.get("gxrzjxxGrid").load({
						gxrid : frgxrRow.id
					});
				}
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function delGxrzjxx() {
	if(bl){
	var row = mini.get("gxrzjxxGrid").getSelected();
	if (row) {
		mini.confirm('关系人信息删除后，关系人证件信息也被同时删除!!', '确定？', function(action) {
			if (action == 'ok') {
				$.ajax({
					type : 'POST',
					url : base + 'gxrzj/deleteGxrzjxx.nut',
					data : {
						'id' : row.id
					},
					dataType : 'json',
					success : function(data) {
						if (data) {
							mini.get("gxrzjxxGrid").removeRow(row, true);
						}
					}
				});
			}

		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
	}else{
		mini.alert('没有权限!!', '提醒');
	}
}

function toHgxrzjxxView(){
	var row = gxrzjxxGrid.getSelected();
	if (row) {
		mini.open({
			url : base + 'gxrzj/toHgxrzjxxView.nut?id=' + row.id + '&page=/cr/jsp/cr_gxrzjxx.jsp?ghr=' + ghr,
			title : '历史关系人证件信息',
			iconCls : 'icon-edit',
			width : 360,
			height : 415,
			allowResize : false,
			showMaxButton : true,
			ondestroy : function(action) {
				
			}
		});
	} else {
		mini.alert('请先选中一条数据!!', '提醒');
	}
}

function onGxrzjClick(e) {
	var rowData = e.record;
	var gxrzjxxGrid = mini.get("gxrzjxxGrid");
	if(isHdata == 1){ 
		gxrzjxxGrid.load({
			gxrid : rowData.id,
			bl : 1
		});
	}else{
		gxrzjxxGrid.load({
			gxrid : rowData.id
		});
	}
}