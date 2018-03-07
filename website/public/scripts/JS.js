var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;
window.onscroll = function() {stickyNav()};
var x = 0;
function stickyNav() {
   //console.log("")
	if (window.scrollY >= sticky) {
		navbar.classList.add("sticky"); // sticky
		navBar.style.animation
	} else {
		navbar.classList.remove("sticky"); // non sticky
	}
}
