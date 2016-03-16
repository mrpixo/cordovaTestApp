


var el = document.getElementsByClassName("nav")[0];

var toggleClass = function(element){
	element.classList.toggle("isActive"); 
}

el.addEventListener("touchstart", function() { toggleClass(el); }, false);

