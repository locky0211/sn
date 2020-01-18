function search(){
	var key = mini.get("title").getValue();
	var tree = mini.get('riskBaseTree');
	if (key == "") {
		tree.clearFilter();
	} else {
		key = key.toLowerCase();
		tree.filter(function(node) {
			var text = node.title ? node.title.toLowerCase() : "";
			if (text.indexOf(key) != -1) {
				return true;
			}
			tree.expandAll();
		});
	}
}

function onnodeclick(e) {
	var record = e.record;
	if (record.type == '1') {
		var node = e.node;
		$('iframe').attr('src',base + 'riskBase/gotoViewRiskBase.nut?id=' + node.id);
	}
}