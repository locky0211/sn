$(function() {
			// 初始化验证
			$('#sriForm').validate();
			$('#regTypeId').val(regType);
			initBankOrganTree();
			$('#IsPercentageId').val(isPercentage);
			$('#btnAdd').bind('click', function() {
						if ($("#sriForm").valid()) {
							var roNodes = reportOrgansTreeObj.getCheckedNodes(true);
							var roString = "";
							$.each(roNodes, function(i, c) {
										roString += c.bankOrganNo + ',';
									});
							$('#regOrgansId').val(roString.substring(0, roString.length - 1));
							$("#sriForm").submit();
						}
					});
		});
var reportOrgansTreeObj;
function initBankOrganTree() {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/reg/getRegOrgansTree?regId=' + $('#regId').val(),
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