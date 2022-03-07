var navbar = document.getElementsByClassName('navbar')[0];
var navlinks = document.getElementsByClassName('navlinksul')[0];
var whitecull = document.getElementsByClassName('white');
var blackcull = document.getElementsByClassName('black');
var menu = document.getElementsByClassName('m_navlinks_container')[0];
var bgDimOnMenu = document.getElementsByClassName('bg_dim_onmenu')[0];
var mainBanner = document.getElementsByClassName('main_banner_container')[0];
var loginFormDiv = document.getElementsByClassName('login_form')[0];

function openMenu() {
	navbar.style.top = '-50px';
	mainBanner.style.top = '0';
	menu.style.right = '0';
	bgDimOnMenu.style.display = 'block';
	setTimeout(() => {
		bgDimOnMenu.style.opacity = '0.5';
	}, 5);
}

function closeMenu() {
	navbar.style.top = '0';
	mainBanner.style.top = '50px';
	menu.style.right = '-60vw';
	if (loginFormDiv.style.display != 'block') {
		bgDimOnMenu.style.opacity = '0';
		setTimeout(() => {
			bgDimOnMenu.style.display = 'none';
		}, 500);
	}
}

function openLogin() {
	if (document.readyState == 'ready' || document.readyState == 'complete') {
		loginFormDiv.style.display = 'block';
		bgDimOnMenu.style.display = 'block';
		setTimeout(() => {
			bgDimOnMenu.style.opacity = '0.5';
			loginFormDiv.classList.add('log_active');
		}, 10);
	} else {
		document.onreadystatechange(() => {
			if (document.readyState == 'ready' || document.readyState == 'complete') {
				loginFormDiv.style.display = 'block';
				bgDimOnMenu.style.display = 'block';
				setTimeout(() => {
					bgDimOnMenu.style.opacity = '0.5';
					loginFormDiv.classList.add('log_active');
				}, 10);
			}
		});
	}
}

function closeLogin() {
	loginFormDiv.classList.remove('log_active');
	setTimeout(() => {
		bgDimOnMenu.style.display = 'none';
	}, 500);
	setTimeout(() => {
		loginFormDiv.style.display = 'none';
	}, 800);
}

// try {

// window.onscroll = function () {
// 	if (
// 		document.body.scrollTop >= 500 ||
// 		document.documentElement.scrollTop >= 500
// 	) {
// 		for (var i = 0, height = 60; i < height; i++) {}
// 	}
// };

// } catch (err) {
// 	console.log('Errors');
// }
// navbar.classList.add('nav-colored');
// 		for (var i = 0, len = whiteCUl.length; i < len; i++) {
// 			whitecull[i].classList.add('scrolled-changeW');
// 		}
// 		for (var j = 0, len = blackCUl.length; j < len; j++) {
// 			blackcull[j].classList.remove('scrolled-changeGB');
// 		}
// 		navbar.classList.remove('nav-transparent');

// navbar.classList.add('nav-transparent');
// 		for (var k = 0, len = whiteCUl.length; k < len; k++) {
// 			whiteCUl[k].classList.remove('scrolled-changeW');
// 		}
// 		for (var l = 0, len = blackCUl.length; l < len; l++) {
// 			blackCUl[l].classList.toggle();
// 		}
// 		navbar.classList.remove('nav-colored');
