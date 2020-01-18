var queryRzGrid;
$(function(){
	queryRzGrid = mini.get("queryRzGrid");
	search();
});


function search(){ 
	var rzDate = mini.get("rzDate").getFormValue();
	var rzYh = mini.get("rzYh").getValue();
	
	queryRzGrid.load({
		rzDate:rzDate,
		rzYh:rzYh
	});
}