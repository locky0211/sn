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

// combox清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}
/**
 * 身份证校验
 * 
 * @param {}
 *            num
 * @return {Boolean}
 */
function checkIdcard(num) {
	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
		// alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
		return false;
	}
	// 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	// 下面分别分析出生日期和校验位
	var len, re;
	len = num.length;
	if (len == 15) {
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
		var arrSplit = num.match(re);

		// 检查生日日期是否正确
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
				&& (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay) {
			// alert('输入的身份证号里出生日期不对！');
			return false;
		} else {
			// 将15位身份证转成18位
			// 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0, i;
			num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
			for (i = 0; i < 17; i++) {
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			num += arrCh[nTemp % 11];
			return true;
		}
	}
	if (len == 18) {
		re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
		var arrSplit = num.match(re);

		// 检查生日日期是否正确
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
				&& (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay) {
			// alert(dtmBirth.getYear());
			// alert(arrSplit[2]);
			// alert('输入的身份证号里出生日期不对！');
			return false;
		} else {
			// 检验18位身份证的校验码是否正确。
			// 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
			var valnum;
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0, i;
			for (i = 0; i < 17; i++) {
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[nTemp % 11];
			if (valnum != num.substr(17, 1)) {
				// alert('18位身份证的校验码不正确！应该为：' + valnum);
				return false;
			}
			return true;
		}
	}
	return false;
}
// 判断两个日期之间的天数；
// sDate1和sDate2是2007-04-19格式 aid:
function DateDiff(strDateStart, strDateEnd) {
	var strSeparator = "-"; // 日期分隔符
	var oDate1;
	var oDate2;
	var iDays;
	oDate1 = strDateStart.split(strSeparator);
	oDate2 = strDateEnd.split(strSeparator);
	var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
	var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
	iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24);// 把相差的毫秒数转换为天数
	return iDays;
}

function toDownLoadFile(url) {
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

function renderer(value, groupId) {
	var name = '';
	$.ajax({
				url : base + '/sys/ggzd/getGgzdList.nut?groupId=' + groupId,
				type : "post",
				dataType : "json",
				async : false,
				success : function(data) {
					name = getName(data, value);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					mini.alert('访问服务器失败!!');
				}
			});
	return name;
}

function getName(data, value) {
	for (var i = 0, l = data.length; i < l; i++) {
		var g = data[i];
		if (g.zdValue == value)
			return g.zdName;
	}
	return "";
}
/**
 * 日期 - 可填报99999999
 * 
 * @param e
 */
function rqvalidat(e) {
	if (e.value.length > 0) {
		if (isDate(e.value) == false) {
			if (parseInt(e.value) != 99999999) {
				e.errorText = "日期不正确";
				e.isValid = false;
			}
		}
	}
}
/**
 * 判断是否为合法日期 格式为yyyymmdd
 * 
 * @param value
 * @returns {Boolean}
 */
function isDate(value) {
	var reg = new RegExp("(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229)");
	if (!(value.length > 8)) {
		if (!reg.test(value)) {
			return false;
		}
	} else {
		return false;
	}
}

// 千位分隔符显示数字
function formatNumber(v, n) {

	if (isNaN(v)) {
		return v;
	}
	if (n == 2) {
		v = Math.round(parseFloat(v) * 100) / 100;
	} else {
		v = Math.round(parseFloat(v) * 10000) / 10000;
	}
	v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.' + ps[1] : '.00';
	var r = /(\d+)(\d{3})/;
	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;

	return v;
}

function toDownLoadFileByFilePath(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURI(encodeURI(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}

/** JS中数字转化为字符串,型* */
function getNumToString(double_value, digit) {
	if (double_value == "" || typeof(double_value) == "undefined" || double_value == "0") {
		if (digit == 4) {
			return 0.0000;
		} else {
			return 0.0;
		}
	}
	if (digit == 4) {
		return Math.round(parseFloat(double_value) * 100 * 10000) / 10000;
		// return Math.round(parseFloat(double_value) * 10000) /
		// 10000;此处主要用于在展示百分比的时候.前台展示为*100后的数值,如计算结果为0.0101则是1.01
	} else {
		return Math.round(parseFloat(double_value) * 100) / 100;
	}
}

// 去逗号
function getStrFloat(FieldName) {
	if (FieldName == "" || typeof(FieldName) == "undefined" || FieldName == "0") {
		return 0.0;
	}
	var len = FieldName.length;
	for (var i = 0; i < len; i++) {
		if (FieldName.charAt(i) == ',') {
			FieldName = FieldName.replace(",", "");
		}
	}
	return Math.round(parseFloat(FieldName) * 1000000) / 1000000;
}

// 判断函数是否存在
function isFunExist(funcName) {
	try {
		if (typeof(eval(funcName)) == "function") {
			return true;
		}
	} catch (e) {
	}
	return false;
}
// 四舍五入 比例/比率 保留小数点后4位
function getRate(FieldValue) {
	if (FieldValue == 'Infinity' || FieldValue.toString() == "NaN" || FieldValue.toString() == 'Infinity') {
		return "0.0000";
	}

	// var result = getStrFloat(FieldValue);
	// var arr_test = new Array();
	// arr_test = (result.toString()).split(".");
	//
	// if (arr_test.length > 1 && arr_test[1].length >= 4) {
	// result = arr_test[0].concat(".").concat(arr_test[1].substring(0, 4));
	// } else {
	// resutl = result.toString();
	// }
	// alert(FieldValue);
	return FieldValue;
}

/** 求比例* */
function getOccupyPercent(d, d1) {
	var d2;
	if (parseFloat(d1) != 0) {
		d2 = (100 * (parseFloat(d))) / parseFloat(d1);
	} else if (parseFloat(d) > 0) {
		d2 = 100;
	} else if (parseFloat(d) < 0) {
		d2 = -100;
	} else {
		d2 = 0.0;
	}

	if (d2.toString() == "NaN") {
		d2 = 0.0;
	}

	return d2;
}

function fmoney(s, n) {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
	t = "";
	for (i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("") + "." + r;
}
