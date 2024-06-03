function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle('show');
    icon.classList.toggle('toggle');
    
    if (icon.classList.contains('toggle')) {
        icon.innerHTML = 'X';
    } else {
        icon.innerHTML = '&#9776;';
    }
}


let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    setTimeout(autoSlide, 10000);
});