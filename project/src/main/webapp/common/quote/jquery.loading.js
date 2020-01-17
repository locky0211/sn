$(function() {
			var ajaxbg = $("#background,#progressBar");
			ajaxbg.hide();
			$(document).ajaxStart(function() {
						ajaxbg.show();
					}).ajaxStop(function() {
						ajaxbg.hide();
					}).ajaxError(function() {
						ajaxbg.hide();
					}).ajaxComplete(function() {
						ajaxbg.hide();
					});
		});

function loadingShow(msg) {
	if (msg != '') {
		$('#progressBar').text(msg);
	}
	$("#background").width($(document).width());
	$("#background").height($(document).height());
	$('#progressBar').css('top', $(window).height() * 0.5 + $(document).scrollTop());
	$("#background,#progressBar").show();
}
function loadingHide(msg) {
	$("#background,#progressBar").hide();
}