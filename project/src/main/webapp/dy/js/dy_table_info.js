$(function() {
			if (mini.get("tableId").getValue() != '' || mini.get("tabCode").getValue() != '') {
				mini.get('tabCode').setReadOnly(true);
			}/*else{
				$.ajax({
					url : base + 'dy/table/getReportOrganTypes.nut',
					type : 'POST',
					dataType : 'json',
					success : function(text) {
						console.log(text.data);
						mini.get('reportOrganTypes').setValue(text.data);
					},
					error : function(jqXHR, textStatus, errorThrown) {
					},
					complete : function() {
					}
				});
			}*/
			if (mini.get("tableId").getValue() == '') {
				mini.get('endDate').setValue("99991231");
			}


			initTableRow();
    		initTableCol();


		});
function onAdd() {

	// 添加和编辑校验公式
	var form = new mini.Form("#tableInfoForm");
	form.validate();

    //添加、更新时，根据动态添加报表信息，组装字符串
    addUpdateTableRow();
    addUpdateTableCol();

	if (form.isValid()) {
		if (checkExcelFileUpload() && checkTableVserionNo()) {    
			var o = form.getData(true);
			var json = mini.encode(o);
			console.log(json)
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'dy/table/addOrUpdateTableInfo.nut?excelFilePath='+o.excelFilePath,
						type : 'post',
						data : json,
						dataType : 'json',
                		contentType : "application/json",
						cache : false,
						success : function(text) {
							if (text.success) {
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
							} else {
								mini.alert('操作失败,' + text.data, '提醒');
							}
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						},
						complete : function() {
							mini.unmask(document.body);
						}
					});
		}

	}
}
function checkTableVserionNo() {
	var rs = true;
	if (mini.get("tableId").getValue() == '') {
		$.ajax({
					url : base + 'dy/table/checkTableVserionNo.nut',
					type : 'post',
					data : {
						tabCode : mini.get('tabCode').getValue(),
						versionNo : mini.get('versionNo').getValue()
					},
					dataType : 'json',
					cache : false,
					async : false,
					success : function(text) {
						if (!text) {
							mini.alert('当前报表版本号已存在!!', '提醒');
							rs = false;
						}
					}
				});
	}
	return rs;
}
function checkExcelFileUpload() {
	if (mini.get("tableId").getValue() == '') {
		if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
			mini.alert('请选择并上传模板文件!!', '提醒');
			return false;
		}
	}
	return true;
}
function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

//================================================动态处理报表行信息=======================================================================
function delTableRow(obj) {
    if ($('.tableRow_tr').length > 1) {//判断动态添加行数，最后一行不删除
        $(obj).parent().parent().remove();
    }
}

function addTableRow(){
	var htmlStr='<tr class="tableRow_tr">';

    htmlStr+= '<td>行数：<input name="allRow" class="mini-textbox"  style="width: 36px;" required="true" vtype="int" value="" /></td>';
    htmlStr+= '<td>数据行：<input name="dataRow" class="mini-textbox" style="width: 36px;" required="true" vtype="int" value="" /></td>';
    htmlStr+= '<td>取数行：<input  name="getDataRow" class="mini-textbox" style="width: 36px;" required="true" vtype="int" value="" /></td>';
    htmlStr+= '<td><input type="button" value="+" style="width: 30px;" onclick="addTableRow();" /></td>';
    htmlStr+= '<td><input type="button" value="-" style="width: 30px;" onclick="delTableRow(this);" /></td>';
    htmlStr+= '</tr>';

    $('#tableRow').append(htmlStr);

    mini.parse();//动态拼接，需要miniUI渲染
}

/**
 * 编辑页面数据初始化行
 */
function initTableRow(){
	var rowInfoStr = $('#rowInfo').val();
	if(rowInfoStr == null || rowInfoStr == ''){
		return;
	}
    var rowDatas = rowInfoStr.split("@");//一个Excel 里多个表层

	var htmlStr ="";

	for(var i=0;i< rowDatas.length;i++){
        htmlStr+='<tr class="tableRow_tr">';

		var rowDataDetails = rowDatas[i].split("#");

        htmlStr+= '<td>行数：<input name="allRow" class="mini-textbox"  style="width: 36px;" required="true" vtype="int" value="'+rowDataDetails[1]+'" /></td>';
        htmlStr+= '<td>数据行：<input name="dataRow" class="mini-textbox" style="width: 36px;" required="true" vtype="int" value="'+rowDataDetails[0]+'" /></td>';
        htmlStr+= '<td>取数行：<input  name="getDataRow" class="mini-textbox" style="width: 36px;" required="true" vtype="int" value="'+rowDataDetails[2]+'" /></td>';
        htmlStr+= '<td><input type="button" value="+" style="width: 30px;" onclick="addTableRow();" /></td>';
        htmlStr+= '<td><input type="button" value="-" style="width: 30px;" onclick="delTableRow(this);" /></td>';
        htmlStr+= '</tr>';
	}

	if(htmlStr.length <= 0){
		return;
	}
    $('#tableRow').empty();

    $('#tableRow').append(htmlStr);
    mini.parse();//动态拼接，需要miniUI渲染
}

/**
 * 添加、更新时，根据动态添加报表行信息，组装字符串
 */
function addUpdateTableRow(){

    var allRows = $('input[name="allRow"]');
    var dataRows = $('input[name="dataRow"]');
    var getDataRows =$('input[name="getDataRow"]');

    var str="";
    $.each(allRows,function(i,n){

        var allRow="";
        var dataRow="";
        var getDataRow="";

        if($.trim($(allRows[i]).val())!="") {
            allRow = $.trim($(allRows[i]).val());
           // console.log("====allRow=============="+allRow)
        }

        if($.trim($(dataRows[i]).val())!="") {
            dataRow = $.trim($(dataRows[i]).val());
          //  console.log("====dataRow=============="+dataRow)
        }
        if($.trim($(getDataRows[i]).val())!="") {
            getDataRow = $.trim($(getDataRows[i]).val());
          //  console.log("====getDataRow=============="+getDataRow)
        }
        str+=dataRow+"#"+allRow+"#"+getDataRow+"@";
    });
  //  console.log("===================addUpdateTableRow====================="+str)
    str = str.substr(0,str.length -1);
   // console.log("===================addUpdateTableRow====================="+str)

    $('#rowInfo').val(str);
}


//================================================动态处理报表行信息=======================================================================


//================================================动态处理报表列信息=======================================================================
function delTableCol(obj) {
    if ($('.tableCol_tr').length > 1) {//判断动态添加行数，最后一行不删除
        $(obj).parent().parent().remove();
    }
}

function addTableCol(){
    var htmlStr='<tr class="tableCol_tr">';

    htmlStr+= '<td>列数：<input  name="allCol" class="mini-textbox"  style="width: 36px;" required="true" value=""  vtype="int"/></td>';
    htmlStr+= '<td>取数列：<input  name="getDataCol" class="mini-textbox" style="width: 36px;" required="true" value="" vtype="int"/></td>';
    htmlStr+= '<td>参数列：<input name="paramCol" class="mini-textbox" style="width: 90px;" required="true" value="" emptyText= "多列逗号\',\'分割"/></td>';
    htmlStr+= '<td><input type="button" value="+" style="width: 30px;" onclick="addTableCol();" /></td>';
    htmlStr+= '<td><input type="button" value="-" style="width: 30px;" onclick="delTableCol(this);" /></td>';
    htmlStr+= '</tr>';


    $('#tableCol').append(htmlStr);

    mini.parse();//动态拼接，需要miniUI渲染
}



/**
 * 编辑页面数据初始化列
 */
function initTableCol(){
    var colInfoStr = $('#colInfo').val();
    if(colInfoStr == null || colInfoStr == ''){
        return;
    }
    var colDatas = colInfoStr.split("@");//一个Excel 里多个表层

    var htmlStr ="";

    for(var i=0;i< colDatas.length;i++){
        htmlStr+='<tr class="tableCol_tr">';

        var colDataDetails = colDatas[i].split("#");

        htmlStr+= '<td>列数：<input  name="allCol" class="mini-textbox"  style="width: 36px;" required="true"  value="'+colDataDetails[0]+'"   vtype="int"/></td>';
        htmlStr+= '<td>取数列：<input  name="getDataCol" class="mini-textbox" style="width: 36px;" required="true"  value="'+colDataDetails[1]+'"  vtype="int"/></td>';
        htmlStr+= '<td>参数列：<input name="paramCol" class="mini-textbox" style="width: 90px;" required="true" value="'+colDataDetails[2]+'" emptyText= "多列逗号\',\'分割"/></td>';
        htmlStr+= '<td><input type="button" value="+" style="width: 30px;" onclick="addTableCol();" /></td>';
        htmlStr+= '<td><input type="button" value="-" style="width: 30px;" onclick="delTableCol(this);" /></td>';
        htmlStr+= '</tr>';
    }

    if(htmlStr.length <= 0){
        return;
    }
    $('#tableCol').empty();

    $('#tableCol').append(htmlStr);

    mini.parse();//动态拼接，需要miniUI渲染
}


/**
 * 添加、更新时，根据动态添加报表列信息，组装字符串
 */
function addUpdateTableCol(){

    var allCols = $('input[name="allCol"]');
    var getDataCols =$('input[name="getDataCol"]');
    var paramCols =$('input[name="paramCol"]');

    var str="";
    $.each(allCols,function(i,n){

        var allCol="";
        var getDataRow="";
        var paramRow="";

        if($.trim($(allCols[i]).val())!="") {
            allCol = $.trim($(allCols[i]).val());
        }

        if($.trim($(getDataCols[i]).val())!="") {
            getDataRow = $.trim($(getDataCols[i]).val());
        }
        if($.trim($(paramCols[i]).val())!="") {
            paramRow = $.trim($(paramCols[i]).val());
        }
        str+=allCol+"#"+getDataRow+"#"+paramRow+"@";
    });

    str = str.substr(0,str.length -1);
   // console.log("=============addUpdateTableCol==========================="+str)

    $('#colInfo').val(str);
}

//================================================动态处理报表列信息=======================================================================