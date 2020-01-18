var editor;
$(function() {
			KindEditor.ready(function(K) {
						editor = K.create('#editor_id', {
									resizeType : 1,
									allowPreviewEmoticons : false,
									allowImageUpload : false,
									items : ['fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'removeformat',
											'|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist', 'insertunorderedlist', '|',
											'emoticons', 'image', 'link']
								});
					});

		});
// form提交公共字典
function add() {
	var sysNoticeForm = new mini.Form("#sysNoticeForm");
	sysNoticeForm.validate();
	if (sysNoticeForm.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息提交中...'
				});
		editor.sync();// 编辑器同步
		$.ajax({
					url : base + "sys/notice/addOrUpdateSysNotice.nut",
					type : 'post',
					data : {
						id : mini.get('id').getValue(),
						title : mini.get('title').getValue(),
						content : $('#editor_id').val()
					},
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
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
function onCancel(e) {
	// 关闭页面
	CloseWindow("cancel");
};