$('.parallax--bg').css('background-position', 'center 0px');

if ($(window).width() > 500) {
	$(window).scroll(function() {
		parallax();
	})
}

function parallax() {
	var wScroll = $(window).scrollTop()
	$('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');
}