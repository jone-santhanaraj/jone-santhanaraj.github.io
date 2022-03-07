var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// Cards Scroll Aniamtion - START
window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.querySelectorAll('.even_card');

	for (var i = 0; i < reveals.length; i++) {
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
}
// Cards Scroll Animation - END
