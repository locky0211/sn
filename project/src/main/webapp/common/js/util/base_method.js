function baseGetOrganSelect(selectId, selectValue, hasAll) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + '/sys/organ/getOrganListByUserOrgan?hasAll=' + hasAll,
				success : function(data) {
					if (data) {
						var optStr = "";
						for (var i = 0; i < data.length; i++) {
							var opObj = data[i];
							optStr += "<option value='" + opObj['organId'] + "'>" + opObj['organName'] + "</option>";
						}
						var opt = $(optStr);
						var strs = selectId.split(',');
						for (i = 0; i < strs.length; i++) {
							opt.clone().appendTo("#" + strs[i]);
							$("#" + strs[i]).val(selectValue);
						}
					}

				}
			});
}

function bindAjax(obj, selValue) {
	$.ajax({
				type : "POST",
				dataType : 'json',
				url : base + obj.attr('ajaxUrl'),
				success : function(data) {
					if (data) {
						var optStr = "";
						for (var i = 0; i < data.length; i++) {
							var opObj = data[i];
							optStr += "<option value='" + opObj['selValue'] + "'>" + opObj['selText'] + "</option>";
						}
						var opt = $(optStr);
						opt.appendTo(obj);
						obj.val(selValue);
					}
				}
			});
}

function setCookie(name, value) {// 两个参数，一个是cookie的名子，一个是值
	var Days = 30; // 此 cookie 将被保存 30 天
	var exp = new Date(); // new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {// 取cookies函数
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return unescape(arr[2]);
	return null;
}

function myPrint(ContId) {
	// 打开一个新窗口newWindow
	var newWindow = window.open("打印窗口", "_blank");
	// 要打印的div的内容
	var docStr = document.getElementById(ContId).innerHTML;
	// 打印内容写入newWindow文档
	newWindow.document.write(docStr);
	// 关闭文档
	newWindow.document.close();
	// 调用打印机
	newWindow.print();
	// 关闭newWindow页面
	newWindow.close();
}

function exportToWord(fileContentId, fileName) {
	var docStr = $('#' + fileContentId).html();
	var newForm = $('<form action="' + base + '/exportToWord" method="post"><input type="text" name="fileContent" value="' + HTMLEncode(docStr) + '"><input type="text" name="fileName" value="'
			+ fileName + '">	</form>');
	newForm.css('display', 'none');
	newForm.submit();

}
