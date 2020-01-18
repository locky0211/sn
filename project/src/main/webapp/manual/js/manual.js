function ondrawnode(e) {
	var node = e.node;
	if (e.isLeaf) {
		e.nodeHtml = '<a href="#'+node.id+'">'+ node.text + '</a>';
	}
};