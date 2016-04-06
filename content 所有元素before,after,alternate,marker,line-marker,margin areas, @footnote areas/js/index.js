$(function() {
	$("img").on("load", function() {
		/* Act on the event */
		console.log(this);
		var $this = $(this);
		$this.attr({
			"src": $this.attr("data-original"),
		});
	});
});