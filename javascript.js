var container;
var changeColor;
var resetColor;
var originalColor;
var permaColor;
var perma;
var counter = 0;
var colorMemory;
var color;

window.onload = function(event) {
	container = document.getElementById("mainContainer");
	var containerStyle = window.getComputedStyle(container);	
	
	originalColor = containerStyle.backgroundColor;
	
	perma = true;
	
	var color = document.getElementsByClassName("colors");
	changeColor = function(elem) {
		
		var elemStyle = window.getComputedStyle(elem);	
		container.style.backgroundColor = elemStyle.backgroundColor;
		if(counter > 0 ){
			perma = false;
		}
		else{
			perma = true;
		}
	}
	resetColor = function() {
		if(perma){
			container.style.backgroundColor = originalColor;
		   }
		else{
			container.style.backgroundColor = colorMemory;
		}
	}
	
	permaColor = function(elem){
		var elemStyle = window.getComputedStyle(elem);	
		container.style.backgroundColor = elemStyle.backgroundColor;
		colorMemory =  elemStyle.backgroundColor;
		perma = false;
		counter ++;
	}
	
	var color = document.querySelectorAll(".colors");
	
	for (var i = 0; i < color.length; i++) {
			console.log(color[i]);
			color[i].addEventListener("mouseover", changeColor.bind(this, color[i]));
			color[i].addEventListener("mouseout", function(event) { resetColor() } );
			color[i].addEventListener("click",function(event) { permaColor(this) });
		}
}