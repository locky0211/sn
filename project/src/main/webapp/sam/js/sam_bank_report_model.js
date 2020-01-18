$(function() {
			initBankOrganComboTree();
			// 初始化验证
			$('#bankOrganNoText').bind('click', function() {
						if ($('#ztree_comboTree_content').is(":hidden")) {
							showComboTree($('#ztree_comboTree_content'), $(this));
						} else {
							hideComboTree();
						}
					});

			$('#btnSave').bind('click', function() {
						if ($('#bankOrganNoId').val() != '') {
							$('#ssForm').submit();
						}
					});

			$('#checkAll').bind('click', function() {
						if ($(this).is(":checked")) {
							$('.srmCheckBox').attr("checked", "checked");
						} else {
							$('.srmCheckBox').removeAttr("checked");
						}
					});

			$('#reportModelTab tbody tr').bind('click', function() {
						var cc = $(this).find(":checkbox");
						if (cc.is(":checked")) {
							cc.removeAttr("checked");
						} else {
							cc.attr("checked", "checked");
						}
					});
			$('#reportModelTab tbody tr').bind('mouseover', function() {
						$(this).children("td").removeClass("sub_table_field_td_center").addClass('lightRow');
					});
			$('#reportModelTab tbody tr').bind('mouseout', function() {
						$(this).children("td").removeClass('lightRow').addClass("sub_table_field_td_center");
					});
		});

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
										initBankModels(treeNode.id);
										hideComboTree();
										getReportModels();
									}
								}
							}
						};
						$.fn.zTree.init($("#ztree_comboTree_tree"), setting, data);
					}
				}
			});
}
function initBankModels(bankId) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/sbo/getBankOrganReportModelList?bankId=' + bankId,
				success : function(data) {
					if (data) {
						$('.srmCheckBox').removeAttr("checked");
						$.each(data, function(i, n) {
									$('.srmCheckBox[value="' + n + '"]').attr("checked", "checked");
								});
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
