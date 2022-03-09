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

// To Detect And The Change Link Color In Navbar - START
var currentPage = document.location.href;
checkLinks = document.querySelectorAll('a[href="' + document.URL + '"]');
checkLinks.forEach(function (link) {
	var navspan = link.childNodes;
	for (var i = 0; i < navspan.length; i++) {
		if (navspan[i].nodeType !== 3) {
			navspan[i].classList.add('current_page');
			break;
		}
	}
});
// To Detect And The Change Link Color In Navbar - END

// -

// --

// console.log('');
