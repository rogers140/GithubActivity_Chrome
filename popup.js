function setUsername(username) {
	chrome.storage.local.set({'gitUsername': username}, function() {
  });
}

function showContributionGraph(username) {
	//Show content
	console.log(username);
	document.getElementById("content").innerHTML="<img src='http://ghchart.rshah.org/"+
		username + "' alt='" + username + "' />" +
		"<button id='change_account'>Change Account</button>";
		try {
			document.getElementById("change_account").addEventListener("click", changeAccount);
		} catch(e) {
			console.log(e);
		}
		
}
function showLogin() {
	document.getElementById("content").innerHTML="<span>Username: </span><input id='username_input'/>" + "<br/>" +
		"<button id='submit'>Submit</button>";
	try {
		document.getElementById("submit").addEventListener("click", setAndShow);
	} catch(e) {
		console.log(e);
	}
	
}

function setAndShow() {
	var new_username = document.getElementById('username_input').value;
	setUsername(new_username);
	showContributionGraph(new_username);
}
function changeAccount() {
	showLogin();
}

//Main
document.addEventListener('DOMContentLoaded', function () {
	var username = "";
	// Read local storages for username
	chrome.storage.local.get('gitUsername', function(result) {
		try {
			username = result.gitUsername;
		} catch(e) {
			username = "";
		}
		console.log(username);
		if (username != "") {
			showContributionGraph(username);
		} else {
			showLogin();
		}
	});
});