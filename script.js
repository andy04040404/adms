let slideIndex = 1;
let isAnimating = false;
showSlides(slideIndex);

function plusSlides(n) {
    if (!isAnimating) {
        showSlides(slideIndex += n);
    }
}

function currentSlide(n) {
    if (!isAnimating) {
        showSlides(slideIndex = n);
    }
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    animatePageFlip(slides[slideIndex-1].children[0]);
}

function animatePageFlip(page) {
    isAnimating = true;
    page.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        page.style.transform = "rotateY(0deg)";
        isAnimating = false;
    }, 1000);
}
