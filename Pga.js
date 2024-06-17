document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        carouselImages[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextImage, 3000);
});

