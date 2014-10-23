$(document).ready(function() {
	function resetHeights() {
		$('.row').each(function() {
			var height = $(this).innerHeight();

			$(this).find('[class*="col-"]').each(function() {
				$(this).css('height', height);
			});

			// console.log(height);
		});
	}

	// resetHeights();

	// $(window).resize(function() {
	// 	resetHeights();
	// });

});