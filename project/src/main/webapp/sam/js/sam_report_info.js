$(function() {
			initUploady();
			initBankOrganComboTree();
			// 初始化验证
			$('#sriForm').validate();
			$('#bankOrganNoText').bind('click', function() {
						if ($('#ztree_comboTree_content').is(":hidden")) {
							showComboTree($('#ztree_comboTree_content'), $(this));
						} else {
							hideComboTree();
						}
					});
			initBtn();
		});
function initBtn() {
	$('#reportTypeId').bind('change', getReportModels);
	$('#btnAdd').bind('click', function() {
		if ($("#sriForm").valid()) {
			if (checkDateType()) {
				if ($('#needModelTable tr').length > 0) {
					var queueLength = $('#file_upload-queue .uploadify-queue-item').length;
					var tdLength = $('#needModelTable td[uploadFlag="false"]').length;
					if (queueLength == tdLength) {
						$('#modelErrorMsgSpan').text('');
						if (queueLength != $('#needModelTable td[matchfile]').length) {
							$('#modelErrorMsgSpan').text('部分文件配置失败!');
						} else {
							$.messager.confirm('提醒', '即将导入 <br><font color="red">' + $('#bankOrganNoText').val() + '</font> <br><font color="blue">' + $('#reportDateId').val()
											+ '</font>&nbsp;&nbsp;&nbsp;&nbsp;<font color="blue">' + $('#reportTypeId').find("option:selected").text() + '</font>&nbsp;&nbsp;&nbsp;&nbsp;数据', function(
											m) {
										if (m) {
											$("#file_upload").uploadify("settings", "formData", {
														'bankOrganNo' : $('#bankOrganNoId').val(),
														'reportDate' : $('#reportDateId').val(),
														'reportType' : $('#reportTypeId').val()
													});
											$('#file_upload').uploadify('upload', '*');
										}
									});
						}
					} else {
						$.messager.alert('提醒', '上传文件过多或过少,需要报表数:[' + tdLength + '],上传报表数:[' + queueLength + ']!!', 'warning');
					}
				} else {
					$.messager.alert('提醒', '无需上传报表!!', 'warning');
				}
			} else {
				$.messager.alert('提醒', '数据日期与报表类型不匹配!!', 'warning');
			}
		}
	});
	$('#clearAllData').bind('click', function() {
				$('#modelErrorMsgSpan').text('');
				$('#file_upload').uploadify('cancel', '*');
				$('.reportNameTd').next('td[uploadFlag="false"]').html($('<font color="red">未匹配</font>')).removeAttr('matchFile');
			});
}

function getReportModels() {
	if ($('#reportTypeId').val() != '' && $('#bankOrganNoId').val() != '') {
		$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + '/sam/srm/getReportModelListForImport',
					data : "bankOrganNo=" + $('#bankOrganNoId').val() + '&reportType=' + $('#reportTypeId').val(),
					success : function(data) {
						if (data.length > 0) {
							var tdStr = "";
							$.each(data, function(i, n) {
										tdStr += '<tr  valign="top">';
										tdStr += '<td style="width: 50px;">' + n.reportNo + '</td>';
										tdStr += '<td class="reportNameTd" reportNo="' + n.reportNo + '" keys="' + n.reportNameKeys + '">' + n.reportName + '</td>';
										tdStr += '<td style="width: 60px;text-align: center;" uploadFlag="false"><font color="red">未匹配</font></td>';
										tdStr += "</tr>";
									});
							$('#needModelTable').html($(tdStr));
							$('#file_upload').uploadify('disable', false);
						} else {
							$('#needModelTable').html('');
							$('#file_upload').uploadify('disable', true);
							$.messager.alert('提醒', '该类型报表无需上传报表!!', 'warning');
						}
					}
				});
	}
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
function initUploady() {
	$("#file_upload").uploadify({
		'swf' : swfUrl, // 设置uploadify.swf的路径
		'uploader' : base + '/sam/srl/uploadReportFile;jsessionid=' + $('#iSessionId').val(), // 请求响应的Action
		'buttonImage' : buttonImage,
		'cancelImg' : cancelImg, // 取消按钮图片路径
		'buttonCursor' : 'pointer',// 上传鼠标hover后Cursor的形状
		'auto' : false, // 设置是否自动上传
		'multi' : true,
		'removeCompleted' : false,
		'fileObjName' : 'file', // 服务器端名称，与HTML中的名称相同就可以
		'fileSizeLimit' : '10MB',
		'buttonText' : '添加文件',
		'fileTypeExts' : '*.xls',
		'fileTypeDesc' : 'Microsoft Office Excel 97-2003 工作表 (.xls)',
		'height' : 24,
		'width' : 80,
		'queueSizeLimit' : 100,
		'uploadLimit' : 100,
		'onUploadError' : function(file, errorCode, errorMsg, errorString) {
			loadingHide();
		},
		'onUploadStart' : function(file) {
			loadingShow('处理 ' + file.name + ' 中,请稍等....');
		},
		'onSelect' : function(file) {
			var fileName = file.name;
			$('.reportNameTd').each(function() {
						reportName = $(this).text() + '.xls';
						if (fileName == reportName) {
							$(this).next('td').html($('<font color="blue">已匹配</font>')).attr('matchFile', fileName).attr('uploadFlag', 'false');
							return false;
						} else if ($(this).attr('reportno') == fileName.split('_')[2]) {
							$(this).next('td').html($('<font color="blue">已匹配</font>')).attr('matchFile', fileName).attr('uploadFlag', 'false');
							return false;
						} else if ($(this).attr('reportno') == fileName.split('_')[0]) {
							$(this).next('td').html($('<font color="blue">已匹配</font>')).attr('matchFile', fileName).attr('uploadFlag', 'false');
							return false;
						} else if (fileName.indexOf($(this).attr('keys')) != -1) {
							$(this).next('td').html($('<font color="blue">已匹配</font>')).attr('matchFile', fileName).attr('uploadFlag', 'false');
							return false;
						}
					});

		},
		'onCancel' : function(file) {
			var fileName = file.name;
			$("td[matchFile='" + fileName + "']").html($('<font color="red">未匹配</font>')).removeAttr('matchFile').attr('uploadFlag', 'false');
		},
		'onSWFReady' : function(instance) {
			$('#file_upload').uploadify('disable', true);
		},
		'onUploadSuccess' : function(fileObj, resp, flag) {// 每个文件上传成功后触发
			var data = jQuery.parseJSON(resp);
			var fileTd = $("td[matchFile='" + fileObj.name + "']");
			if (data.success) {
				fileTd.html($('<font  color="blue">上传成功</font>')).removeAttr('matchFile').attr('uploadFlag', 'true');
			} else {
				fileTd.html($('<font color="red">上传失败</font>')).removeAttr('matchFile').attr('uploadFlag', 'false');
			}
		},
		'onQueueComplete' : function(queueData) {
			loadingHide();
			parent.location.href = base + "report/jsp/report.jsp?reportId=sam_report_info_m&jgm=" + $('#bankOrganNoId').val() + "&rDate=" + $('#reportDateId').val() + "&reportType="
					+ $('#reportTypeId').val() + "&query=true";
		}
	});

}

function checkDateType() {
	var rt = $('#reportTypeId').val();
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