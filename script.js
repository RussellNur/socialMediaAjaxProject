$(document).ready(function() {
	$("#getUsernameButton").on("click", () => {
		// Username - used for all the platforms
		const username = $('#username').val();
		loadGithubUserInfo(username);
		loadInstagramUserInfo(username);
	})
});

// Getting Github user
function loadGithubUserInfo(user) {
	// Username - used for all the platforms
	url = 'https://api.github.com/users/' + user;
	const xhr = new XMLHttpRequest;
	// xhr.responseType = 'json';
	// Async GET request
	xhr.open('GET', url, true);
	xhr.onload = () => {
		//console.log(xhr.readyState);
		if (xhr.readyState === 4) {
		//console.log(xhr.response);
			const githubUser = JSON.parse(xhr.response);
			let displayGithubInfo = '';
			// Display different user parameters e.g. ID, Username, a picture 
			displayGithubInfo +=  '<div class="user">' + '<img src="' 
			+ githubUser.avatar_url + '" width="100" height="100">' + 
			'<ul>' +
			'<li>Login: ' + githubUser.login + '</li>' +
			'<li>Bio: ' + githubUser.bio + '</li>' +
			'<li>Public repos: ' + githubUser.public_repos
			+ '</li>' +
			'<li>URL: ' + '<a href="' + githubUser.html_url + '" target="_blank">' + githubUser.html_url + '</li>' +
			'</ul>' + 
			'</div>';
			$("#githubUser").html(displayGithubInfo);
		} else {
			console.log('Request failed');
		}
	}
	xhr.send();
}


// Getting Instagram user
function loadInstagramUserInfo(user) {

	// Username - used for all the platforms
	url = `https://www.instagram.com/${user}/?__a=1`;
	console.log(url);
	const xhr = new XMLHttpRequest;
	// xhr.responseType = 'json';
	// Async GET request
	xhr.open('GET', url, true);
	xhr.onload = () => {
		console.log(xhr.readyState);
		if (xhr.readyState === 4) {
		console.log(xhr.response);
	// 		const githubUser = JSON.parse(xhr.response);
	// 		let displayGithubInfo = '';
	// 		// Display different user parameters e.g. ID, Username, a picture 
	// 		displayGithubInfo +=  '<div class="user">' + '<img src="' 
	// 		+ githubUser.avatar_url + '" width="100" height="100">' + 
	// 		'<ul>' +
	// 		'<li>Login: ' + githubUser.login + '</li>' +
	// 		'<li>Bio: ' + githubUser.bio + '</li>' +
	// 		'<li>Public repos: ' + githubUser.public_repos
	// 		+ '</li>' +
	// 		'<li>URL: ' + '<a href="' + githubUser.html_url + '" target="_blank">' + githubUser.html_url + '</li>' +
	// 		'</ul>' + 
	// 		'</div>';
	// 		$("#githubUser").html(displayGithubInfo);
	// 	} else {
	// 		console.log('Request failed');
	// 	}
	// }
	// xhr.send();
}}
}