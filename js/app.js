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

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

$(".navbar-links").click(function(){
    navbarLinks.classList.toggle('active')
});