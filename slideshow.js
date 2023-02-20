var slideIndex = [0, 0]; //blir automatisk storre pga for-loop i initialiseSlides
var slidesIDList = ["olympus_slides", "light_slides"];
initialiseSlides();
showSlides(1, 0); //slideshow1
showSlides(1, 1); //slideshow2

/*function initialiseSlides() { //for hver slide-element i idlist adder vi 1
    for (var i = 0; i < slidesIDList.length; i++) {
        slideIndex[i] = 1;
    }
}*/
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slidesIDList[no]); //henter hele listen med slides
    if (typeof slideIndex[no] === 'undefined') { slideIndex[no] = 1; } //showslides corrects itself
    if (n > slides.length) { slideIndex[no] = 1} //dersom n er storre enn det antallet img i slides er starter vi pa starten igjen
    if (n < 1) {slideIndex[no] = slides.length} //dersom n er mindre enn det slideindeks (org 1) sa kan slideindex bli lengden pa slides - vi er pa indeks 0 og skal til siste indeks
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //ikke vis noenting for hver slide som finnes 
    }
    slides[slideIndex[no]-1].style.display = "block"; //men vis det slidesIndeks er pa (minus 1 fordi det ma vi)
}
