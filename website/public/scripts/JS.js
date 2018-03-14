var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;
window.onscroll = function() {stickyNav()};
var x = 0;

var modal = document.getElementById("modal");

function stickyNav() {
   //console.log("")
	if (window.scrollY >= sticky) {
		navbar.classList.add("sticky"); // sticky
		navBar.style.animation
	} else {
		navbar.classList.remove("sticky"); // non sticky
	}
}

function buyItem(id) {
	alert("Sorry, this feature is currently unavailable. Item ID: " + id);
}

function viewItem(id) {
	//console.log(id);
	window.location.href = "Item.html?id=" + id;
}

function OpenLogin() {
	modal.style.display = "block";
}

function CloseLogin() {
	modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
