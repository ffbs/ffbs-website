$(function () {
	$.get('/nodecount', function (ans) {
		$('#nodecount').text(ans);
	});
	$.get('/clientcount', function (ans) {
		$('#clientcount').text(ans);
	});
});
