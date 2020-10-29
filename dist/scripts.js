$(document).ready(function () {
 $(".nav-toggler").each(function (_, navToggler) {
   var target = $(navToggler).data("target");
   $(navToggler).on("click", function () {
     $(target).animate({
       height: "toggle",
     });
   });
 });
});

$(document).keyup(function(e) {
  if (e.key === "Escape") { // escape key maps to keycode `27`
    closeModal();
 }
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  $("iframe").each(function() { 
      var src= $(this).attr('src');
      $(this).attr('src',src);  
});
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

