
/* CAROUSEL */
function loadResponsiveImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        const newSrc = src.replace(/\d+\/\d+/, `${window.innerWidth}/${Math.floor(window.innerWidth * 0.5625)}`);
        img.setAttribute('src', newSrc);
    });
}

window.addEventListener('load', loadResponsiveImages);
window.addEventListener('resize', loadResponsiveImages);

// Carousel functionality
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = carousel.querySelectorAll('img'); // Get images in the carousel
let currentIndex = 0;

function showImage(index) {
    const imageWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

// Check if there are images in the carousel
function hasImages() {
    return images.length > 0;
}

prevBtn.addEventListener('click', () => {
    if (hasImages()) {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Use images.length instead of hardcoded value
        showImage(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (hasImages()) {
        currentIndex = (currentIndex + 1) % images.length; // Use images.length instead of hardcoded value
        showImage(currentIndex);
    }
});

// Responsive carousel
function adjustCarousel() {
    showImage(currentIndex);
}

window.addEventListener('resize', adjustCarousel);



