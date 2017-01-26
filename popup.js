function isLoggedIn() {
	return false;
}
document.addEventListener('DOMContentLoaded', function () {
	if (isLoggedIn()) {
		//Show content
	} else {
		document.getElementById("content").innerHTML+="<span>Username: </span><input/>" + "<br/>" +
		"<span>Password: </span><input type='password'/>" + "<br/>" +
		"<button>Submit</button>";
	}
});