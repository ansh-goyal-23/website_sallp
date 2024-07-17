let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = currentIndex * slides[0].clientWidth;
    document.querySelector('.slider').scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
