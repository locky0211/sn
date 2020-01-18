$(function() {
			initBankOrganComboTree();
			$('#bankOrganNoText').bind('click', function() {
						if ($('#ztree_comboTree_content').is(":hidden")) {
							showComboTree($('#ztree_comboTree_content'), $(this));
						} else {
							hideComboTree();
						}
					});

			// 初始化验证
			$('#srcForm').validate();
			$('#btnAdd').bind('click', function() {
						if ($("#srcForm").valid()) {
							if (checkDateType()) {
								doReportCheck();
							} else {
								$.messager.alert('提醒', '数据日期与报表类型不匹配!!', 'warning');
							}
						}
					});
			$('#btnPrint').bind('click', function() {
						var turl = document.getElementById("checkFrame").src;
						if (turl != '') {
							var newW = window.open(turl);
							newW.print();
						}
					});
			$('#btnExportExcel').bind('click', function() {
						var turl = document.getElementById("checkFrame").src;
						if (turl != '') {
							window.open(turl + "&isExportExcel=1");
						}
					});
		});
function doReportCheck() {
	loadingShow("数据校验中,请稍等...!!");
	var url = base + '/sam/src/doReportCheck?' + "bankOrganNo=" + $('#bankOrganNoId').val() + "&checkDate=" + $('#reportDateId').val() + "&checkType=" + $('#checkTypeId').val() + "&checkTypeName="
			+ $('#checkTypeId').find("option:selected").text() + "&bankOrganName=" + $('#bankOrganNoText').val();
	$('#checkFrame').attr('src', encodeURI(url));
	// $.ajax({
	// type : "POST",
	// dataType : 'json',
	// url : base + '/sam/src/doReportCheck',
	// data : "bankOrganNo=" + $('#bankOrganNoId').val() + "&checkDate=" +
	// $('#reportDateId').val() + "&checkType=" + $('#checkTypeId').val() +
	// "&checkTypeName="
	// + $('#checkTypeId').find("option:selected").text() + "&bankOrganName=" +
	// $('#bankOrganNoText').val(),
	// success : function(data) {
	// $('#checkResultDiv').html($(HtmlDecode('<div>' + data + '</div>')));
	// }
	// });
}
function initBankOrganComboTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/sbo/getBankOrganListByUserId',
				success : function(data) {
					if (data) {
						var setting = {
							view : {
								selectedMulti : false,
								dblClickExpand : false
							},
							data : {
								simpleData : {
									enable : true,
									idKey : "id",
									pIdKey : "pId"
								}
							},
							callback : {
								onClick : function onClick(e, treeId, treeNode) {
									if (treeNode.isParent) {
										$.fn.zTree.getZTreeObj("ztree_comboTree_tree").expandNode(treeNode);
										return false;
									} else {
										$("#bankOrganNoText").val(treeNode.name);
										$("#bankOrganNoId").val(treeNode.id);
										hideComboTree();
									}
								}
							}
						};
						$.fn.zTree.init($("#ztree_comboTree_tree"), setting, data);
					}
				}
			});
}

function showComboTree(treeDivObj, inputObj) {
	var inputObjOffset = inputObj.offset();
	treeDivObj.css({
				left : inputObjOffset.left + "px",
				top : inputObjOffset.top + inputObj.outerHeight() + "px"
			}).slideDown("fast");
	// $("body").bind("mousedown", onBodyDown);
}

function hideComboTree() {
	$("#ztree_comboTree_content").fadeOut("fast");
	// $("body").unbind("mousedown", onBodyDown);
}

// function onBodyDown(event) {
// if (!(event.target.className == "ztree_comboTree" || event.target.className
// == "ztree" || $(event.target).parents("#ztree_comboTree_content").length >
// 0)) {
// hideComboTree();
// }
// }

function checkDateType() {
	var rt = $('#checkTypeId').val();
	if (rt == "1") {
		return true;
	}
	var rd = $('#reportDateId').val().substr(4, 2);
	var rs = false;
	if ((rd == "03" || rd == "06" || rd == "09" || rd == "12") && rt == "2") {
		rs = true;
	}

	if ((rd == "06" || rd == "12") && rt == "3") {
		rs = true;
	}

	if (rd == "12" && rt == "4") {
		rs = true;
	}
	return rs;
}