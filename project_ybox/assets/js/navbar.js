// -

// Commonly Used
var navbar = document.getElementsByClassName('navbar')[0];
var navlinks = document.querySelectorAll('.page[href]');
var whitecull = document.getElementsByClassName('white');
var blackcull = document.getElementsByClassName('black');
var menu = document.getElementsByClassName('m_navlinks_container')[0];
var bgDimOnMenu = document.getElementsByClassName('bg_dim_onmenu')[0];
var mainBanner = document.getElementsByClassName('main_banner_container')[0];
var loginFormDiv = document.getElementsByClassName('login_form')[0];
// Commonly Used

// -

// For Navigation Menu On Mobile - START
function openMenu() {
	loginFormDiv.classList.remove('log_active');
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
// For Navigation Menu On Mobile - END

// -

// For Login Form Button Animation - START
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

function cart() {
	console.log("you click on the cart icon.. it's under construction!!");
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
// For Login Form Button Animation - END

// -

// For Navbar To Change To Hovered State OnScroll - START
window.onscroll = function () {
	if (
		document.body.scrollTop >= 800 ||
		document.documentElement.scrollTop >= 800
	) {
		navbar.classList.add('scroll_active');
	} else {
		navbar.classList.remove('scroll_active');
	}
};
// For Navbar To Change To Hovered State OnScroll - END

// -

var currentPage = window.location.pathname;

// Replacing sub-directory name with '.' ...
const dirName = '/project_ybox';
currentPage = currentPage.replace(dirName, '.');
// console.log(currentPage);

// Check for homepage URL ("/" or "/index.html")
const isHomePage = currentPage === './' || currentPage === './index.html';

// Modify the selector to target the home page <a> tag
const homeLink = isHomePage ? document.querySelector('a[href="./"]') : null;

// Add the class to the home page link if it exists
if (homeLink) {
	const navspan = homeLink.childNodes;
	for (var i = 0; i < navspan.length; i += 1) {
		if (navspan[i].nodeType !== 3) {
			navspan[i].classList.add('current_page');
			// console.log(currentPage + ' current_page added');
			break;
		}
	}
} else {
	// Add the class to other links based on the original selector
	const checkLinks = document.querySelectorAll('a[href="' + currentPage + '"]');
	checkLinks.forEach(function (link) {
		const navspan = link.childNodes;
		for (var i = 0; i < navspan.length; i += 1) {
			if (navspan[i].nodeType !== 3) {
				navspan[i].classList.add('current_page');
				// console.log(currentPage + ' current_page added');
				break;
			}
		}
	});
}

// var currentPage = window.location.pathname;

// // Replacing sub-directory name with '.' ...
// const dirName = '/project_ybox';
// currentPage = currentPage.replace(dirName, '.');
// console.log(currentPage);

// const checkLinks = document.querySelectorAll('a[href="' + currentPage + '"]');
// checkLinks.forEach(function (link) {
// 	const navspan = link.childNodes;
// 	for (var i = 0; i < navspan.length; i += 1) {
// 		if (navspan[i].nodeType !== 3) {
// 			navspan[i].classList.add('current_page');
// 			console.log(currentPage + ' current_page added');
// 			break;
// 		}
// 	}
// });

// To Detect And The Change Link Color In Navbar - START
// var currentPage = document.location.href;
// checkLinks = document.querySelectorAll('a[href="' + document.URL + '"]');
// checkLinks.forEach(function (link) {
// 	var navspan = link.childNodes;
// 	for (var i = 0; i < navspan.length; i += 1) {
// 		if (navspan[i].nodeType !== 3) {
// 			navspan[i].classList.add('current_page');
// 			console.log('current_page added');
// 			break;
// 		}
// 		console.error('current_page not added');
// 	}
// });
// To Detect And The Change Link Color In Navbar - END

// -

// --

// console.log('');
