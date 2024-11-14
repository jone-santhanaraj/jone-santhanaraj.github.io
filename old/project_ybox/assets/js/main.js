const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let users_data = {};
let toBePushed = {};

// Cards Scroll Aniamtion - START
window.addEventListener('scroll', reveal);

function reveal() {
	const reveals = document.querySelectorAll('.even_card');

	for (let i = 0; i < reveals.length; i += 1) {
		const revealTop = reveals[i].getBoundingClientRect().top;
		const revealPoint = 150;
		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
}
// Cards Scroll Animation - END

function gamesSearch() {
	const input = document.getElementById('games_search');
	const filter = input.value.toUpperCase();
	const list = document.getElementById('all_games_container');
	const text = list.getElementsByClassName('games');

	const div = list.getElementsByClassName('games_desc');
	for (let i = 0; i < text.length; i += 1) {
		const name = text[i].getElementsByClassName('game_name')[0];
		const txtvalue = name.textContent || name.innerText;
		if (txtvalue.toUpperCase().indexOf(filter) > -1) {
			text[i].style.display = '';
		} else {
			text[i].style.display = 'none';
		}
	}
}

function showmoreGames() {
	const hidden_games = document.getElementsByClassName('hidden_game');
	for (i = 0; i < hidden_games.length; i += 1) {
		hidden_games[i].classList.add('shown');
	}
	document.getElementsByClassName('games_more_btn_div')[0].remove();
}

function hashCode(str) {
	var hash = 0,
		i,
		chr;
	if (str.length === 0) return hash;
	for (i = 0; i < str.length; i++) {
		chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}
let loginSuccess = false;

// checkEmail is to choose weather to check for emailid to be present in the data, only take 0 or 1 as input.
function doesAccExist(username, checkEmail = 0, email = '') {
	if (checkEmail == 0) {
		for (var i in users_data) {
			if (i == username) {
				return true;
			}
		}
		return false;
	} else if (checkEmail == 1) {
		for (var i in users_data) {
			if (i == username || users_data[i]['email'] == email) {
				if (i == username && users_data[i]['email'] == email) {
					alert(
						'Seems like you already have an account in here! Try logging in..'
					);
				} else if (users_data[i]['email'] == email) {
					alert(
						'This Email ID is already registered in here, Please enter a different Email ID or try logging in!'
					);
				} else if (i == username) {
					alert('This Username already exists, Please choose a different one!');
				}
			}
		}
		return false;
	}
}

function login(lookat, username) {
	var entered_pass = hashCode(document.getElementById('password').value);
	if (entered_pass === lookat[username]['passwd']) {
		alert(
			'Welcome ' +
				lookat[username]['firstName'] +
				", You've been logged in successfully!"
		);
		loginSuccess = true;
	} else {
		alert("The Password You've Entered Is Incorrect, Please Try Again!");
		loginSuccess = false;
	}
}

function signupLoad() {
	document.getElementsByClassName('login_form_form')[0].style.display = 'none';
	document.getElementsByClassName('signup_form')[0].style.display = 'grid';
}
function signupUnload() {
	document.getElementsByClassName('signup_form')[0].style.display = 'none';
	document.getElementsByClassName('login_form_form')[0].style.display = 'grid';
}

function signup() {
	var nuname = document.getElementById('newusername').value;
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var uemail = document.getElementById('email').value;
	var npass = hashCode(document.getElementById('newpassword').value);
	if (npass === hashCode(document.getElementById('confirmpassword').value)) {
		var pass = npass;
	}
	var accExist = doesAccExist(nuname, 1, uemail);
	if (accExist === false) {
		var objToBeAdded = {
			nuname: {
				email: uemail,
				firstName: fname,
				lastName: lname,
				passwd: pass,
				itemsInCart: [],
			},
		};
		toBePushed.push(objToBeAdded);
	} else {
		alert('Try logging in...');
		signupUnload();
	}
}

function checkUser() {
	var uname = document.getElementById('uname').value;
	var acc_sts = doesAccExist(uname, users_data);
	if (acc_sts === false) {
		alert(
			"Looks like you're not registered yet, Please Sign up using the Create account link or Check the User Name that you've entered!"
		);
	} else {
		return acc_sts;
	}
}
function globalizeTable(inp) {
	users_data = JSON.parse(JSON.stringify(inp));
}

function loadJSON() {
	fetch('assets/json/users.json')
		.then((response) => response.json())
		.then((json) => {
			// console.log(json.v);
			const users = JSON.parse(JSON.stringify(json));
			globalizeTable(users);
			var sts = checkUser();
			if (sts == true) {
				var uname = document.getElementById('username').value;
				login(users_data, uname);
			}
			for (var i in toBePushed) {
				console.log(i);
			}
		});
}
