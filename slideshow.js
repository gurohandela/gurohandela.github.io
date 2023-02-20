var slideIndex = [1, 1];
var slideId = ["slideshow1", "slideshow2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, now) {
    showSlides(slideshow.currentSlideIndex += n, now);
}


/*
window.onload = loadit();

function loadit() {
    var slideshow1 = document.getElementById("slideshow1");
    slideshow1.currentSlideIndex = 1;
    showSlides(slideshow1.currentSlideIndex, slideshow1);

    var slideshow2 = document.getElementById("slideshow2");
    slideshow2.currentSlideIndex = 1;
    showSlides(slideshow2.currentSlideIndex, slideshow2);
}
*/


function plusSlides(n) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function showSlides(n, now) {
    var i;
    var x = slideshow.getElementsByClassName(slideId[now]);
    if (typeof slideIndex[no] === 'undefined') { slideIndex[no] = 1; } //showslides corrects itself
    if (n > x.length) {slideIndex[now] = 1}
    if (n < 1) {slideIndex[now] = x.length}
    for (i = 0; i < slideNow.length; i++) {
        x[i].style.display = "none";
    }
    x[slideId[now]-1].style.display = "block";
}

/*function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); //change every 2 sec.}
    */
/*
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
*/
