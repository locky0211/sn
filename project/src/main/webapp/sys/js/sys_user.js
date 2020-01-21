$(function () {
    mini.get('userGxOrganTree').setCheckRecursive(true);
    if ($('#OPStatus').val() != '') {
        mini.get('userId').isValid(true);
        mini.get('userId').setReadOnly(true);
    }
});

function add() {
    // 添加和编辑用户
    var form = new mini.Form("#sysUserForm");

    form.validate();
    if (form.isValid() && checkUserOrganTree()) {
        var o = form.getData();
        //	var json = mini.encode(o);

        var obj = {};
        obj.OPStatus = mini.get('OPStatus').getValue();
        obj.userOrgan = mini.get('userOrgan').getValue();
        obj.userRole = mini.get('userRole').getValue();

        obj.userId = mini.get('userId').getValue();
        obj.userName = mini.get('userName').getValue();
        obj.userGenger = mini.get('userGenger').getValue();
        obj.dDate = mini.get('dDate').getFormValue();
        obj.dDip = mini.get('dDip').getValue();
        obj.userEmail = mini.get('userEmail').getValue();
        obj.userTelephone = mini.get('userTelephone').getValue();
        obj.userGxOrgan = mini.get('userGxOrganTree').getValue(true);


        mini.mask({
            el: document.body,
            cls: 'mini-mask-loading',
            html: '信息处理中...'
        });
        $.ajax({
            url: base + 'sys/user/addOrUpdateSysUser.nut?',
            type: 'post',
            data:  mini.encode(obj),
            dataType: 'json',
            contentType: "application/json",
            cache: false,
            success: function (text) {
                if (text) {
                    mini.alert('操作成功!!', '提醒', function () {
                        CloseWindow("ok");
                    });
                } else {
                    mini.alert('操作失败!!', '提醒');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('访问服务器失败!!');
            },
            complete: function () {
                mini.unmask(document.body);
            }
        });
    }
}

function checkUserOrganTree() {
    var bb = mini.get('userGxOrganTree').getValue();
    if (bb != '') {
        return true;
    } else {
        mini.alert('请勾选用户管辖机构!!', '提醒');
        return false;
    }
}

// 取消按钮关闭窗口
function onCancel(e) {
    CloseWindow("cancel");
}

function idIsOnly(e) {
    if (mini.get('OPStatus').getValue() == '') {
        $.ajax({
            url: base + "sys/user/checkIsOnly.nut?userId=" + e.value,
            async: false,
            dataType: 'json',
            success: function (data) {
                if (!data.success) {
                    e.errorText = "已存在!";
                    e.isValid = false;
                }
            }
        });
    }
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