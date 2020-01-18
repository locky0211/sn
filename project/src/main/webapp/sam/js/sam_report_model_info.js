var reportOrgansTreeObj;
$(document).ready(function() {
			// 初始化Form校验
			$('#srmForm').validate();
			$('#reportTypeId').val(reportTypeValue);
			if (reportStatusValue != '') {
				$('#reportStatusId').val(reportStatusValue);
			}
			$('#btnAdd').bind('click', addOrganFun);
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
			initBankOrganTree();
			if ($('#reportNoId').val() != '') {
				$('#reportNoId').attr("readonly", "readonly");
			} else {// 异步验证RoleId
				$('#reportNoId').bind('blur', reportNoIdBlurEvent);

			}
		});

// roleId失去焦点验证事件
function reportNoIdBlurEvent(e) {
	if ($('#srmForm').validate().element($('#reportNoId'))) {
		$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + '/sam/srm/checkReportNo',
					data : "reportNo=" + $('#reportNoId').val(),
					success : function(data) {
						if (!data.success) {
							$.messager.alert('注意', data.msg, 'waring', function() {
										$('#reportNoId').val('');
									});
						}
					}
				});
	}
}
function addOrganFun() {
	if ($("#srmForm").valid()) {
		var roNodes = reportOrgansTreeObj.getCheckedNodes(true);
		var roString = "";
		$.each(roNodes, function(i, c) {
					roString += c.bankOrganNo + ',';
				});
		$('#reportOrgansId').val(roString.substring(0, roString.length - 1));
		$("#srmForm").submit();
	}
}

function initBankOrganTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/srm/getReportBankOrgansTree?reportNo=' + $('#reportNoId').val(),
				success : function(data) {
					if (data) {
						var setting = {
							view : {
								showIcon : false,
								selectedMulti : false,
								expandSpeed : ($.browser.msie && parseInt($.browser.version) <= 6) ? "" : "fast"
							},
							edit : {
								enable : true,
								showRemoveBtn : false,
								showRenameBtn : false
							},
							check : {
								enable : true,
								chkboxType : {
									"Y" : "s",
									"N" : "s"
								}
							},
							data : {
								keep : {
									parent : true,
									leaf : true
								},
								key : {
									name : "bankOrganName"
								},
								simpleData : {
									enable : true,
									idKey : "bankOrganNo",
									pIdKey : "pId",
									rootPId : ""
								}
							}
						};
						reportOrgansTreeObj = $.fn.zTree.init($("#bankOrganTree"), setting, data);
					} else {
						$.messager.alert('警告', '获取节点数据失败!!', 'error');
					}
				}
			});
}
