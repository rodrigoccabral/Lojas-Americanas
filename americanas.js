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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(var i = 0;i < slides.length;i++) {
        slides[i].style.display = "none";
    }
    for(var i = 0;i < dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

//-----------Início do carrossel 2-----------//

//-----------COMEÇO DO STICKY JAVASCRIPT----------//

var startProductBarPos=-1;
window.onscroll=function(){
var bar = document.getElementById('meio');
if(startProductBarPos<0)startProductBarPos=findPosY(bar);

if(pageYOffset>startProductBarPos){
bar.style.position='fixed';
bar.style.top=0;
}else{
bar.style.position='relative';
}
};

function findPosY(obj) {
var curtop = 0;

if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
while (obj.offsetParent) {
curtop += obj.offsetTop;
obj = obj.offsetParent;
}
curtop += obj.offsetTop;
} else if (obj.y)
curtop += obj.y;
return curtop;

}

//-------FIM DO STICKY JAVASCRIPT-----------//