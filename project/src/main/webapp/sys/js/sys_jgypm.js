var jgypmGrid;
$(function(){
	jgypmGrid=mini.get("#jgypm");
})
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText('');
	obj.setValue('');
}
function search() {
	var form=new mini.Form("#searchForm");
	form.validate();
	jgypmGrid.load({
		region : mini.get('region').getValue(),
		startMonths : mini.get('startMonths').getText(),
		endMonths:  mini.get('endMonths').getText()
	});

}
function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}
function endDateValid(e) {
	if (e.isValid && mini.get('startMonths').isValid()) {
		if (e.value < mini.get('startMonths').getValue()) {
			e.errorText = "截止日期应大于生效日期";
			e.isValid = false;
		}
	}
}	