$(function() {
			var msgid = mini.loading("数据加载中...");
			$('#skinSel').val(skin);
			$('#north').addClass("header" + skin);
			$('#skinSel').bind('change', function() {
						var skin = $(this).val();
						setCookie('miniuiSkin', skin);
						window.location.reload();
					});
			$(window).resize(function() {
						$('#bgImg').width($(window).width());
					});
			$('#bgImg').width($(window).width());
			mini.hideMessageBox(msgid);
			
		});
function showTab(iid, text, url) {
	var tabs = mini.get("mainTabs");
	window.top['_CACHE']=tabs;
	var id = "tab$" + iid;
	var tab = tabs.getTab(id);
	if (!tab) {
		tab = {};
		tab.name = id;
		tab.title = text;
		tab.showCloseButton = true;
		tabs.addTab(tab);
	}
	tab.url = url;
	tabs.activeTab(tab);
	tabs.loadTab(url, tab);
}

function onitemselect(e) {
	var item = e.item;
	// iframe.src = item.url;
	// var node = e.node;
	// $('#mainframe').attr('src', item.url);
	if(item.url != ""){
	showTab(item.qxId, item.qxName, item.url);
	}	
	// showTab(node.qxId, node.qxName, node.url);
}
function onSkinChange(skin) {
	setCookie('miniuiSkin', skin);
	window.location.reload();
}

function editUser() {
	mini.open({
				url : base + "/sys/user/gotoEditUser.nut",
				title : "修改用户",
				iconCls : 'icon-edit',
				width : 300,
				allowResize : false,
				height : 280,
				ondestroy : function(action) {
					if (action == 'ok') {
					}
				}
			});
}
function editUserPassword() {
	mini.open({
				url : base + "/sys/jsp/sys_user_password_edit.jsp",
				title : "修改密码",
				iconCls : 'icon-edit',
				allowResize : false,
				width : 300,
				height : 210,
				ondestroy : function(action) {
					if (action == 'ok') {
					}
				}
			});
}
function exit() {
	mini.confirm("确定退出？", "确定？", function(action) {
				if (action == "ok") {
					window.location.href = base + '/login.jsp';
				}
			});
}
function loadHomePage() {
	var tabs = mini.get("mainTabs");
	var fTab = tabs.getTab(0);
	tabs.activeTab(fTab);
	tabs.reloadTab(fTab);
}
function loadManualPage() {
	// var tabs = mini.get("mainTabs");
	// var fTab = tabs.getTab(0);
	// tabs.activeTab(fTab);
	// tabs.reloadTab(fTab);
//	showTab('manula_id', '系统操作手册', 'manual/manual.jsp');
	showTab('manula_id', '系统操作手册', 'manual/manualTool.jsp');
}

var currentTab = null;

function onBeforeOpen(e) {
	currentTab = mini.get("mainTabs").getTabByEvent(e.htmlEvent);
	if (!currentTab) {
		e.cancel = true;
	}
}

function onRemoveActiveNode() {
	if (currentTab && currentTab.title != '首页') {
		mini.get("mainTabs").removeTab(currentTab);
	}
}

function onRemoveOthersNodes() {
	var tabs = mini.get("mainTabs");
	var but = [currentTab];
	but.push(tabs.getTab(0));
	tabs.removeAll(but);
}

function onRemoveAllNodes() {
	var tabs = mini.get("mainTabs");
	var but = [];
	but.push(tabs.getTab(0));
	tabs.removeAll(but);
	loadHomePage();
}

function about(){
	 alert("非现场监管报表预审核及分析系统软件\nV1.0\n江苏银信融通信息科技有限公司"); 
}
