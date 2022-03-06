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
	}, 1);
}

function closeMenu() {
	navbar.style.top = '0';
	mainBanner.style.top = '50px';
	menu.style.right = '-60vw';
	bgDimOnMenu.style.opacity = '0';
	setTimeout(() => {
		bgDimOnMenu.style.display = 'none';
	}, 500);
}

function openLogin() {
	loginFormDiv.style.display = 'block';
	setTimeout(() => {
		loginFormDiv.style.transform = 'scale(1)';
		loginFormDiv.style.top = '20vh';
		loginFormDiv.style.left = '40vw';
	}, 1);
}

function closeLogin() {
	loginFormDiv.style.transform = 'scale(0)';
	loginFormDiv.style.top = '-30vh';
	loginFormDiv.style.left = '85vw';
	setTimeout(() => {
		loginFormDiv.style.display = 'none';
	}, 1000);
}
// try {
// 	window.onscroll = function () {
// 		'use strict';
// 		if (
// 			document.body.scrollTop >= 200 ||
// 			document.documentElement.scrollTop >= 200
// 		) {
// 			for (var i = 0, len = whitecull.length; i < len; i++) {
// 				whitecull[i].classList.remove('white');
// 			}
// 			for (var j = 0, len = blackcull.length; j < len; j++) {
// 				blackcull[i].style.display = 'block';
// 			}
// 		} else {
// 			for (var k = 0, len = whitecull.length; k < len; i++) {
// 				whitecull[i].classList.add('white');
// 			}
// 			for (var l = 0, len = blackcull.length; l < len; j++) {
// 				blackcull[i].style.display = 'none';
// 			}
// 		}
// 	};
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
