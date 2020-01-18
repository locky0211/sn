$(function() {
			initDiv();
			initFormSelect();
			initForm();
			initReportWin();
			doParam();
			$(window).resize(function() {
						initDiv();
						bindFixHearder();
					});
			$('#reportFormControlPanelDivUp').bind('click', function() {
						$('#reportFormId').slideUp('fast', function() {
									$('#reportFormControlPanelDivUp').hide();
									$('#reportFormControlPanelDivDown').show();
									$('#reportFormControlPanelDiv').addClass('background-white');
									initDiv();
									bindFixHearder();
								});
					});
			$('#reportFormControlPanelDivDown').bind('click', function() {
						$('#reportFormId').slideDown('fast', function() {
									$('#reportFormControlPanelDivDown').hide();
									$('#reportFormControlPanelDivUp').show();
									$('#reportFormControlPanelDiv').removeClass('background-white');
									initDiv();
									bindFixHearder();
								});
					});
			var skin = 'default';
			if (getCookie('cs-skin')) {
				skin = getCookie('cs-skin');
			}
			$('#report_style').attr('href', base + 'report/css/report_' + skin + '.css');

		});

function bindFixHearder() {
	if ($('#reportTableId').attr('fixHeader') == 'true') {
		var tableTop;
		var tableleft;
		if ($('#fixHearderTable').length > 0) {
			tableTop = $('#fixHearderTable').offset().top;
			tableleft = $('#fixHearderTable').offset().left;
		} else {
			tableTop = $('#reportTableId thead').offset().top - 1;
			tableleft = $('#reportTableId thead').offset().left - 1;
		}
		$('#fixHearderTable').remove();
		var fixHearder = $('#reportTableId').clone(true).attr('id', 'fixHearderTable');
		fixHearder.find('tbody').remove();
		var tableWidth = $('#reportTableId').width() + 1;
		fixHearder.css({
					width : tableWidth,
					position : 'absolute',
					left : tableleft,
					top : tableTop,
					'z-index' : '1999'
				});
		$('body').append(fixHearder);
	}
}

function initDiv() {
	var height = $(window).height() - $('#reportToolBarDiv').height() - $('#reportFormDiv').height() - 9;
	$('#reportTableDiv').height(height);
}
function initFormSelect() {
	$("select[asyncUrl]").each(function() {
				var v = $(this).attr("valueField");
				var t = $(this).attr("textField");
				var sI = $(this).attr("selectIndex");
				var sV = $(this).attr("selectValue");
				var selObj = $(this);
				$.ajax({
							type : "POST",
							dataType : 'json',
							async : false,
							url : encodeURI(base + $(this).attr("asyncUrl")),
							success : function(data) {
								if (data) {
									for (var i = 0; i < data.length; i++) {
										var opObj = data[i];
										var opt = $("<option value='" + opObj[v] + "'>" + opObj[t] + "</option>");
										if (sI == i + 1) {
											opt.attr("selected", "selected");
										} else if (sV == opObj[v]) {
											opt.attr("selected", "selected");
										}
										opt.appendTo(selObj);
									}
									// initParam();
								}
							}
						});
			});
	$("select[selectIndex]").each(function() {
				var selIndex = $(this).attr("selectIndex");
				if (selIndex != "") {
					var opt = $(this).find("option").eq(selIndex);
					if (opt) {
						opt.attr("selected", "selected");
					}
				}
			});
	$("select[selectValue]").each(function() {
				var selectValue = $(this).attr("selectValue");
				if (selectValue != "") {
					$(this).val(selectValue);
				}
			});
	initDate();
}

function doParam() {
	// if ($("select[asyncUrl]").length == 0) {
	initParam();
	// }
}

function initParam() {
	if (GetQueryString('query') != null) {// 如果是默认加载查询功能
		$('.report_formFieldClass').each(function(i, obj) {
					if (GetQueryString($(this).attr('name')) != null) {
						$(this).val(GetQueryString($(this).attr('name')));
					}
				});
		formSubmitByPage(1);
	}
}
function initDate() {
	$("input[initDate]").each(function() {
				var initDate = $(this).attr("initDate");
				var dateFormat = $(this).attr("dateFormat");
				if (initDate != "") {
					if (dateFormat) {
						$(this).val(Date.today().addDays(initDate).toString(dateFormat));
					} else {
						$(this).val(Date.today().addDays(initDate).toString('yyyy-MM-dd'));
					}
				}
			});
}

function initForm() {
	$('#reportForm').form({
				url : base + 'report/searchResult',
				onSubmit : function() {
					if ($("#reportForm").valid()) {
						loadingShow();
						return true;
					}
					return false;
				},
				success : function(data) {
					var r_data = jQuery.parseJSON(data);
					if (r_data.success) {
						$('#reportTableId tbody').html($(HtmlDecode(r_data.data)));
						initPage(r_data.page);
						// $("#reportFormDiv").hide('fast', function() {
						// $("#layout_btn").removeClass("layout-button-up").addClass("layout-button-down");
						// });
						loadingHide();
					} else {
						$.messager.alert('错误', r_data.msg, 'error');
					}
				}
			});
	// 初始化验证
	$('#reportForm').validate();
	// 查询按钮
	$("#btnSearchResult").bind("click", function(event) {
				formSubmitByPage(1);
			});
	// 页数改变事件
	$("#pageNumber").change(function() {
				var number = 1;
				if ($.isNumeric($(this).val())) {
					if (parseInt($(this).val()) <= parseInt($('#pageCount').text()) && parseInt($(this).val()) > 0) {
						number = $(this).val();
					}
				}
				formSubmitByPage(number);
			});
	// 页面数量改变事件
	$("#pageSize").change(function() {
				$('#pageNumber').val('1');
				formSubmitByPage();
			});
	// 首页
	$("#homePage").bind("click", function() {
				if (parseInt($('#pageNumber').val()) == 1) {
					return false;
				}
				formSubmitByPage(1);
			});
	// 上一页
	$("#prePage").bind("click", function() {
				if (parseInt($('#pageNumber').val()) > 1) {
					formSubmitByPage(parseInt($('#pageNumber').val()) - 1);
				}
			});
	// 下一页
	$("#nextPage").bind("click", function() {
				if (parseInt($('#pageNumber').val()) < parseInt($('#pageCount').text())) {
					formSubmitByPage(parseInt($('#pageNumber').val()) + 1);
				}
			});
	// 尾页
	$("#endPage").bind("click", function() {
				if (parseInt($('#pageNumber').val()) == parseInt($('#pageCount').text()) || parseInt($('#pageCount').text()) == 0) {
					return false;
				}
				formSubmitByPage($('#pageCount').text());
			});
	// 导出Excel
	$("#exportExcel").bind("click", function() {
				exportExcel();
			});
	// 导出所有Excel
	$("#exportAllExcel").bind("click", function() {
				exportExcel('all');
			});
	// 查询条件展开
	$("#layout_btn").bind("click", function() {
				if ($("#reportFormDiv").is(":hidden")) {
					$("#reportFormDiv").show('fast', function() {
								$("#layout_btn").linkbutton({
											iconCls : 'layout-button-up',
											text : '收起'
										});
							});
				} else {
					$("#reportFormDiv").hide('fast', function() {
								$("#layout_btn").linkbutton({
											iconCls : 'layout-button-down',
											text : '展开'
										});
							});
				}
			});

	$('#reportTableId tbody tr').live('mouseover', function() {
				$(this).children("td").removeClass("report_table_body_td").addClass('lightRow');
			});
	$('#reportTableId tbody tr').live('mouseout', function() {
				$(this).children("td").removeClass('lightRow').addClass("report_table_body_td");
			});
}
function parentFormSubmit() {
	formSubmitByPage($('#pageNumber').val());
	reportWinClose();
}
function formSubmitByPage(pageNumber) {
	if ($('#reportTablePTitle').length > 0) {
		$("#reportTableDiv").scrollTop(47);
	} else {
		$("#reportTableDiv").scrollTop(0);
	}
	if (pageNumber > 0) {
		$('#pageNumber').val(pageNumber);
	}
	// 调用 form 插件的 'submit' 方法来提交 form
	$('#reportForm').form('submit', {
				url : base + 'report/searchResult',
				onSubmit : function() {
					if ($("#reportForm").valid()) {
						loadingShow();
						return true;
					}
					return false;
				},
				success : function(data) {
					var r_data = jQuery.parseJSON(data);
					if (r_data.success) {
						$('#reportTableId tbody').html($(HtmlDecode(r_data.data)));
						initPage(r_data.page);
						bindFixHearder();
						loadingHide();
						// 查询完成后是否隐藏FORM
						// $("#reportFormDiv").hide('fast', function() {
						// $("#layout_btn").removeClass("layout-button-up").addClass("layout-button-down");
						// });
					} else {
						loadingHide();
						$.messager.alert('错误', r_data.msg, 'error');
					}

				}
			});

}
function exportExcel(all) {
	if ($('#recordCount').text() > 0 || $('#recordCount').text() == '') {
		if (all) {
			if ($('#recordCount').text() > 20000) {
				$.messager.alert('警告', '导出的数据,大于最大限制20000条', 'warning');
				return false;
			}
		}
		$('#all').val(all);
		$('#recCount').val($('#recordCount').text());
		$('#reportForm').form('submit', {
					url : base + '/report/exportExcel',
					onSubmit : function() {
						if ($("#reportForm").valid()) {
							loadingShow('正在准备文件,请稍等....');
							return true;
						}
						return false;
					},
					success : function(data) {
						loadingHide();
						var r_data = jQuery.parseJSON(data);
						if (r_data.success) {
							$('#goToDownload').attr('src', encodeURI(base + "/report/getExcel?fileName=" + r_data.msg));
						} else {
							$.messager.alert('错误', r_data.msg, 'error');
						}
					}
				});
	}

}
function initPage(page) {
	if (page) {
		$('#pageNumber').val(page.pageNumber);
		$('#pageSize').val(page.pageSize);
		$('#pageCount').text(page.pageCount);
		$('#recordCount').text(page.recordCount);
	}
}

// 当前页面打开模态新窗口
function initReportWin() {
	$('#reportWin').window({
				title : '平台公告信息',
				iconCls : 'icon-save',
				closed : true,
				modal : true,
				collapsible : false,
				minimizable : false,
				maximizable : false,
				closable : true,
				onClose : reportWinRefresh
			});
}
var reportWinRefreshFlag = false;
function reportWinRefresh() {
	if (reportWinRefreshFlag) {
		formSubmitByPage();
	}
	$('#reportWinFrame').attr('src', '');
}
// 新窗口关闭(是否刷新当前页数据)
function reportWinClose(refreshFlag) {
	if (refreshFlag) {
		reportWinRefreshFlag = refreshFlag;
	}
	$('#reportWin').window('close');
}

// 新窗口打开
function reportWinOpen(title, url, width, height, full) {
	reportWinRefreshFlag = false;
	/**
	 * 调试跳转URL用
	 */
	var urlE = encodeURI(base + url);
	$('#reportWinFrame').attr('src', urlE);
	var w = 520;
	var h = 350;
	if (width) {
		w = width;
	};
	if (height) {
		h = height;
	};
	if (full) {
		w = $(window).width() - 40;
		h = $(window).height() - 10;
	}
	$("#reportWin").window({
				title : title,
				width : w,
				height : h,
				top : ($(window).height() - h) * 0.5 + $(document).scrollTop(),
				left : ($(window).width() - w) * 0.5 + $(document).scrollLeft(),
				closed : false
			});

}
// 新开打页面到tabs里面
function reportJump(title, url) {
	var urlE = encodeURI(base + url);
	parent.addTab(title, urlE, true);
}

function reportWindowOpen(url) {
	var urlS = encodeURI(base + url);
	window.open(urlS);
}
// 手工执行调度任务
function doScheduler(cId) {
	$.ajax({
				type : "POST",
				url : base + "quartz/doManualTask",
				data : "taskId=" + cId,
				dataType : 'json',
				success : function(data) {
					if (data.success) {
						$.messager.alert('提醒', data.msg, 'info');
					} else {
						$.messager.alert('注意', data.msg, 'warning');
					}
				}
			});
}