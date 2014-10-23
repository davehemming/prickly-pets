$(document).ready(function() {

	String.prototype.filename=function(extension){
	    var s= this.replace(/\\/g, '/');
	    s= s.substring(s.lastIndexOf('/')+ 1);
	    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
	}

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
						// 10 is the current css margin value
						$(this).css('height', (maxColHeight - 10) + 'px');
					}
				});

				// console.log(maxColHeight);
			}
		});
	}

	function checkForm() {
		var valid = true;
		$('input, textarea').each(function() {
			$e = $(this);

			if (!$e.val()) {
				valid = false;
				$e.val('Error');
				$e.css('color', 'red');
			}
		});

		if (valid) {
			$('form').submit();
		} else {
			alert('The form has errors. Please correct the errors before retrying.');
		}
	}

	function loadBanner() {
		var url = $(location).attr('pathname');

		if (url.indexOf('amphibians') >= 0) {

			$('#top').css("background-image", "url('../../img/site/amphibians-banner.png')");
		} else if (url.indexOf('mammals') >= 0) {
			$('#top').css("background-image", "url('../../img/site/mammals-banner.png')");
		} else if (url.indexOf('reptiles') >= 0) {
			$('#top').css("background-image", "url('../../img/site/reptiles-banner.png')");
		} else if (url.indexOf('reptiles') >= 0) {
			$('#top').css("background-image", "url('../../img/site/site-banner.jpg')");

		} else if (url.indexOf('about') >= 0 || url.indexOf('contact') >= 0) {
			$('#top').css("background-image", "url('../../img/site/site-banner.jpg')");

		} else {
			if (url.indexOf('prickly-pets/index.html') >= 0) {
				$('#top').css("background-image", "url('img/site/site-banner.jpg')");
			} else {
				$('#top').css("background-image", "url('" + url + "img/site/site-banner.jpg')");
			}

		}
	}

	// function rotateImg($img, imgNum) {
	// 	console.log(imgNum);
	// 	var filename = $img.attr('src').filename();

	// 	if (!imgNum) {
	// 		var num = parseInt(filename.substring(filename.length - 1, filename.length));

	// 		num++;
	// 		if (num >= 4) { num = 1};
	// 	} else {
	// 		num = imgNum;
	// 	}

	// 	filename = filename.substring(0, filename.length - 1) + num + '.jpg';
	// 	// console.log(filename);
	// 	// console.log(filename + (num + 1));
	// 	console.log('img/amphibians/thumbs/' + filename);
	// 	$img.fadeOut(1000, function() {
	// 		$img.load(function() { $img.fadeIn(1000); });
	// 		$img.attr('src', 'img/amphibians/thumbs/' + filename);
	// 	});


	// }

	// var interval;

	// $('.box-category img').hover(
	// 	function(evt) {
	// 		// rotateImg($(this));
	// 		var $img = $(this);
	// 		// rotateImg($img);
	// 		rotateImg($img, 1);

	// 		// interval = setInterval(function() {
	// 		// 	rotateImg($img);
	// 		// }, 3000);
	// 	},
	// 	function(evt) {
	// 		// clearInterval(interval);
	// 		// rotateImg($(this), 1);
	// 		// $(this).fadeOut(1000, function() {
	// 		// 	$(this).load(function() { $(this).fadeIn(2000); });
	// 		// 	$(this).attr('src', 'img/amphibians/thumbs/frog-1.jpg');
	// 		// });
	// 	}
	// );



	resetHeights();
	loadBanner();

	$(window).resize(function() {
		resetHeights();
	});

	$('button[type="submit"]').click(function(evt) {
		evt.preventDefault();
		checkForm();
	});

	$('input, textarea').focus(function(evt) {
		$(this).val('');
		$(this).css('color', 'black');
	});



});