
// var nav = document.getElementsByClassName("nav")[0];
// nav.addEventListener("click", addClass(), flase);

var el = document.getElementsByClassName("nav")[0];

var addClass = function(element){
	element.className += " isActive"; 
}

el.addEventListener("touchstart", function() { addClass(el); }, false);



// var addClass = function(){
//     alert("test");
// }
// console.log(nav);
