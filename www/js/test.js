
window.addEventListener("touchstart", function(e) {    e.preventDefault();}, false);window.addEventListener("touchmove", function(e) {    e.preventDefault();}, false);

var trigger = document.getElementsByClassName("menu-btn")[0];
var element = document.getElementsByClassName("nav")[0];

var toggleClass = function(element){
	element.classList.toggle("isActive"); 
}

trigger.addEventListener("touchend", function() { toggleClass(element); }, false);

