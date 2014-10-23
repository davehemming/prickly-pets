$(document).ready(function() {

	// Hack to fix height issue.
	function resetHeights() {
		$('.row').each(function() {
			var $columns = $(this).find('[class*="col-"]');
			if ($columns.length > 1) {
				var maxColHeight = 0;

				$columns.each(function() {
					var colHeight = parseInt($(this).innerHeight());
					if (colHeight > maxColHeight) {
						maxColHeight = colHeight;
					}
				});

				$columns.each(function() {
					var colHeight = parseInt($(this).innerHeight());
					if (colHeight !== maxColHeight) {
						// 10 is the current css margin value. hardcoded, not ideal.
						$(this).css('height', (maxColHeight - 10) + 'px');
					}
				});

				console.log(maxColHeight);
			}
		});
	}

	// resetHeights();

	// $(window).resize(function() {
	// 	resetHeights();
	// });

});