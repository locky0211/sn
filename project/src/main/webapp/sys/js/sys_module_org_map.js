$(function() {
	addModuleOrg()	
});

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function add(){
	var oldModule = mini.get("oldModule").getValue();
	var oldOrg = mini.get("oldOrg").getValue();
	var size = $("#moduleOrgNewForm tr").length-1;
	var newList = new Array();
	for(var i = 0; i < size; i++){
		var flag=mini.get("isDel"+i+"").getValue();
		if (flag == 1) {
			continue;
		} else {
			var newModule = mini.get("newModule"+i+"").getValue();
			var newOrg =mini.get("newOrg"+i+"").getValue();
			var str = newModule + ";" + newOrg;
			newList.push(str);
		}
	}

	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'sys/moduleOrgMap/addModuleOrgMap.nut?oldModule='+ oldModule + '&oldOrg=' + oldOrg+ "&newList=" + newList,
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				mini.alert('操作成功!!', '提醒', function() {
					CloseWindow("ok");
				});
			} else {
				mini.alert(text.data, '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});	
}

function addModuleOrg(){
	var table=$("moduleOrgNewForm");
	var size2 = $("tr:first~tr", table).size();
	var size = $("#moduleOrgNewForm tr").length-1;
	var entry="";
	entry+="<tr id='moduleOrgNew"+size+"'>";	
	entry+="<td class='tab_field' align='center'><div id='newModule"+ size +"' name='newModule"+ size +"' required='true' " +
			"oncloseclick='onCloseClick' showClose='true'  " +
			"class='mini-combobox' style='width: 170px' popupWidth='200px' allowInput='true' " +
			"url=\'"+ base +"sys/ggzd/getGgzdList.nut?groupId=SYS_MODULE' onvaluechanged=\"javascript:newModuleChange(\'"+size+"\')\" required='true'  textField='zdName' valueField='zdValue'>" +
			"<div property='columns'><div header='中文名称' field='zdName'></div>" +
			"<div header='数据库名称' field='zdValue'></div></div></td>";
	
	entry+="<td class='tab_field' align='center'><input id='newOrg"+ size +"' name='newOrg"+ size +"' required='true' popupHeight='150px;' popupWidth='349px;' " +
			"class='mini-treeselect' textField='bmName' multiSelect='false' " +
			"showFolderCheckBox='true' parentField='pId' valueField='bmCode' allowInput='false' style='width: 350px;' " +
			"resultAsTree='false' showClose='true' oncloseclick='onCloseClick' checkRecursive='false' allowSelect='true'></td>";
	
	entry+="<td class='tab_field' align='center'><a class='mini-button mini-button-plain' href=\"javascript:delModuleOrg(\'"+ size +"\')\"><span class='mini-button-text  mini-button-icon icon-remove'>删除</span></a>";
	entry+="<input class='mini-hidden' id='isDel"+ size +"' name='isDel"+ size +"' value='0' /></td>"
	entry+="</tr>";
	$("#moduleOrgNewForm").append(entry);
    mini.parse();
}

function delModuleOrg(type){
	$("#moduleOrgNew"+type+"").hide();
	mini.get("#isDel"+type+"").setValue("1")
}
