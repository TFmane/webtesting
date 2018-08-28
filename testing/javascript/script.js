

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var I;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activedot", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " activedot";
}
/*
$(window).ready(function(function plusSlides(n){
	showSlides(slideIndex += n);
	
});

$(window).ready(function(function currentSlide(n){
	showSlides(slideIndex = n);
	
});

$(window).ready(function(function showSlides(n){
	
	var I;
	var slides = document.getElementsByClassName("mySlides");
	var dots = $(".dot").var(dots);document.getElementsByClassName("dot");
	if ($(n > slides.length)) {slideIndex = 1}
	if ($(n < 1)) {slideIndex = slides.length}
	for ($(i = 0; i < slides.length; i++)) {
		slides[i].style.display = "none";
	}
	for ($(i = 0; i < dots.length; i++)) {
		dots[i].className = dots[i].className.replace(" activedot", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " activedot";
	
});*/

/*
// Get the Modal
var modal = document.getElementById("myModal");

//Get the image and insert it inside the modal - use its "alt" text as a caption 
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
*/

// Open the Modal
function openModal() {
	document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length = 1}
    for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].classname = = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
	
}




function myFunction4() {
	var element = document.getElementById("bigimg");
	element.classList.toggle("begon");
}

document.getElementById('bigid').addEventListener('click', function () {
	if (this.classList.contains('begon')) {
    // The box that we clicked has a class of bad so let's remove it and add the good class
   this.classList.remove('begon');
   this.classList.add('bigimg');
});
