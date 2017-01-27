function setUsername(username) {
	chrome.storage.local.set({'gitUsername': username}, function() {
    alert('Username ' + username +' Saved!');
  });
}

function showContributionGraph(username) {
	//Show content
	console.log(username);
	document.getElementById("content").innerHTML+="<img src='http://ghchart.rshah.org/"+
		username + "' alt='" + username + "' />" +
		"<button id='change_account'>Change Account</button>";
}

function setAndShow() {
	var new_username = document.getElementById('username_input').value;
	setUsername(new_username);
	showContributionGraph(new_username);
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
			document.getElementById("content").innerHTML+="<span>Username: </span><input id='username_input'/>" + "<br/>" +
			"<button id='submit'>Submit</button>";
			document.getElementById("submit").addEventListener("click", setAndShow);
		}
	});
});