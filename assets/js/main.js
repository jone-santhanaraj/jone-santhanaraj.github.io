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

function gamesSearch() {
	var input = document.getElementById('games_search');
	var filter = input.value.toUpperCase();
	var list = document.getElementById('all_games_container');
	var text = list.getElementsByClassName('games');

	var div = list.getElementsByClassName('games_desc');
	for (var i = 0; i < text.length; i++) {
		var name = text[i].getElementsByClassName('game_name')[0];
		var txtvalue = name.textContent || name.innerText;
		if (txtvalue.toUpperCase().indexOf(filter) > -1) {
			text[i].style.display = '';
		} else {
			text[i].style.display = 'none';
		}
	}
}

function showmoreGames() {
	var hidden_games = document.getElementsByClassName('hidden');
	for (i = 0; i < hidden_games.length; i++) {
		hidden_games[i].classList.add('shown');
	}
}
