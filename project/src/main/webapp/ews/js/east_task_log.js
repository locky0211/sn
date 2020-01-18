var importLogGrid;
$(function() {
	importLogGrid = mini.get("importLogGrid");
	importLogGrid.load();
		});

function search() {
	importLogGrid.load({
				tableName : mini.get('tableName').getValue(),
				importTime : mini.get('importTime').getValue()
			});
};