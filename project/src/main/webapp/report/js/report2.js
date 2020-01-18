$(function() {
			// $(".wdatePicker").focusin(function() {
			// WdatePicker();
			// });
			// $(".wdatePicker").click(function() {
			// WdatePicker();
			// });
			$("#btnRest").click(function() {
						doResetForm($('#reportForm'));
						$('#reprotFormResetBtn').click();
						initDate();
					});
			$(".ztree_comboTree").each(function() {
						initZtreeComboTree($(this));
						$(this).bind('click', function() {
							if ($("#ztree_comboTree_content_" + $(this).attr('fileName')).is(":hidden")) {
								showComboTree($("#ztree_comboTree_content_" + $(this).attr('fileName')), $(this));
							} else {
								hideComboTree();
							}
								// showComboTree($("#ztree_comboTree_content_" +
								// $(this).attr('fileName')), $(this));
							});
					});

		});

function initZtreeComboTree(obj) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + obj.attr("asyncUrl"),
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
										$.fn.zTree.getZTreeObj(treeId).expandNode(treeNode);
										return false;
									} else {
										$("#" + obj.attr('fileName') + "_text").val(treeNode.name);
										$("#" + obj.attr('fileName') + "_id").val(treeNode.id);
										hideComboTree();
									}
								}
							}
						};
						$.fn.zTree.init($("#ztree_comboTree_tree_" + obj.attr('fileName')), setting, data);
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
	$(".ztree_comboTree_content_div").fadeOut("fast");
	// $("body").unbind("mousedown", onBodyDown);
}

function onBodyDown(event) {
	if (!(event.target.className == "ztree_comboTree" || event.target.className == "ztree" || $(event.target).parents(".ztree_comboTree_content_div").length > 0)) {
		hideComboTree();
	}
}

/**
 * 页面跳转.打开tabs
 * 
 * @param {}
 *            title
 * @param {}
 *            url
 */

function showImage(workDate, tellerCode, trxSeqno) {
	var url = imageUrl + '?work_date=' + workDate + "&teller_code=" + tellerCode + "&trx_seqno=" + trxSeqno;
	window.open(url, '图片查看', 'height=500,width=800,status=no');
}
function showVideo(urlParam) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + "acc/sp/getSpConfig?" + urlParam,
				success : function(data) {
					if (data.success) {
						var spData = data.data;
						var url = videoUrl + '&ip=' + spData.dvrIp + "&dv=" + spData.ch + "&st=" + spData.date + spData.sTime + "&ed=" + spData.date + spData.eTime;
						window.open(url, '监控视频', 'height=500,width=800,status=no');
					} else {
						$.messager.alert('提醒', data.msg, 'warning');
					}
				}
			});
}

function execFun(urlStr) {
	$.messager.confirm('提醒', '是否确定执行相关操作!', function(m) {
				if (m) {
					doAjaxFun(urlStr);
				}
			});

}
function delInfoFun(urlStr) {
	$.messager.confirm('警告', '删除后数据将无法恢复!', function(m) {
				if (m) {
					doAjaxFun(encodeURI(urlStr));
				}
			});

}
function delInfoFun2(urlStr) {
	$.messager.prompt('警告', '删除数据后,数据将无法恢复!!<br>请输入 <font color="red">立即删除</font> 确定删除!', function(m) {
				if (m == '立即删除') {
					doAjaxFun(encodeURI(urlStr));
				}
			});
}
function doAjaxFun(urlStr) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + urlStr,
				success : function(data) {
					if (data.success) {
						formSubmitByPage();
					} else {
						$.messager.alert('提醒', data.msg, 'warning');
					}
				}
			});
}
function gotoDownLoadFile(url) {
	$('#goToDownload').attr('src', encodeURI(base + url));
}
/**
 * 下载文件
 * 
 * @param {}
 *            fileName 文件名
 */
function downloadFile(fileName, downloadPath, isD) {
	var isDate = false;
	if (isD) {
		isDate = true;
	}
	if (fileName.indexOf(',') > 0) {
		$('#goToDownload').attr('href', base + "downloadZipFiles?fileName=" + fileName);
	} else {
		$('#goToDownload').attr('href', base + "downloadFiles?fileName=" + fileName + "&downloadPath=" + downloadPath + "&isDate=" + isDate);
	}
	// document.getElementById('goToDownload').click();
}