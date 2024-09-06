/* HEADER */
const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const hamburgerIcon = document.querySelector('.hamburger-icon');

        function toggleMenu() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            hamburgerIcon.classList.toggle('open');
        }

        hamburger.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerIcon.classList.remove('open');
            });
        });

        // Add animation to menu items
        function addFadeInClass() {
            if (window.innerWidth <= 768) {
                navLinks.forEach((link, index) => {
                    link.parentElement.style.transitionDelay = `${index * 0.1}s`;
                });
            } else {
                navLinks.forEach(link => {
                    link.parentElement.style.transitionDelay = '';
                });
            }
        }

        window.addEventListener('resize', addFadeInClass);
        addFadeInClass();

        // Add this to your existing <style> tag
        const style = document.createElement('style');
        style.textContent = `
            .menu-open {
                overflow: hidden;
            }

            @media screen and (min-width: 769px) {
                .nav-menu {
                    display: flex !important;
                }
                .hamburger {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);


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



