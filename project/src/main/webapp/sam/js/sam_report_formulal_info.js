var reportOrgansTreeObj;
$(document).ready(function() {
			// 初始化Form校验
			$('#srfForm').validate();
			if (checkStatus != '') {
				$('#checkStatusId').val(checkStatus);
			}
			if (riskLevel != '') {
				$('#riskLevelId').val(riskLevel);
			}
			$('#checkTypeId').val(checkType);
			initBankOrganTree();
			$('#btnAdd').bind('click', function() {
						if ($("#srfForm").valid()) {
							var roNodes = reportOrgansTreeObj.getCheckedNodes(true);
							var roString = "";
							$.each(roNodes, function(i, c) {
										roString += c.bankOrganNo + ',';
									});
							$('#formulaOrgansId').val(roString.substring(0, roString.length - 1));
							$("#srfForm").submit();
						}
					});
			// bind 取消关闭
			$('#btnCancel').bind('click', function() {
						parent.reportWinClose();
					});
		});

function initBankOrganTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sam/srf/getReportFormulaOrgansTreeByUserId?formulaId=' + $('#formulaId').val(),
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
