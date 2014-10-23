$(document).ready(function() {

	// Hack to fix height issue.
	function resetHeights() {
		$('.height-fix').each(function() {
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

	// function checkForm() {
	// 	var valid = true;
	// 	$('input, textarea').each(function() {
	// 		console.log($(this).val());
	// 		$e = $(this);

	// 		if (!$e.val()) {
	// 			valid = false;
	// 			$e.val('Error');
	// 			$e.css('color', 'red');
	// 		}
	// 	});

	// 	// if (valid) {
	// 	// 	$('form').submit();
	// 	// }
	// }

	resetHeights();

	$(window).resize(function() {
		resetHeights();
	});

	// $('input').focus(function(evt) {
	// 	// console.log('focus');
	// 	$(this).val('');
	// 	$(this).css('color', 'black');
	// });

	// $('button[name="submit"]').click(function(evt) {
	// 	evt.preventDefault();

	// 	// console.log(checkForm());
	// 	if (!checkForm()) {
	// 		return false;
	// 	} else {
	// 		$('form').submit();
	// 	}

	// 	// console.log('submit');
	// });

	function checkContactForm() {
	  var theForm = document.forms[ 0 ];

	  for ( var i in requiredFields ) {
	    var fieldName = requiredFields[ i ];

	    if ( !theForm[ fieldName ].value || theForm[ fieldName ].value == "Error" ) {
	      theForm[ fieldName ].style.color = "#f66";
	      theForm[ fieldName ].value = "Error";

	      var emptyFields = true;
	    }
	  }

	  if ( !emptyFields ) {
	    // theForm.submit();
	  } else {
	    // showHideErrorMessage(true);
	  }
	}

});