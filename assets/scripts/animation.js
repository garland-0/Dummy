// animations.js
document.addEventListener("DOMContentLoaded", function() {
    // Fade in the wrapper or body
    const fadeInWrapper = document.querySelector('.fade-in');
    fadeInWrapper.classList.add('visible');

    const elements = document.querySelectorAll('.fade-in-element'); // Use a different class for individual elements

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    const navMenu = document.querySelector('.nav-menu');
    const contactButton = document.querySelector('.contact-button');

    navMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            contactButton.classList.add('hidden'); // Add a class to hide the button
        } else {
            contactButton.classList.remove('hidden'); // Remove the class to show the button
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector('.nav-menu');
    const contactButton = document.querySelector('.contact-button');

    navMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            contactButton.classList.add('hidden'); // Add a class to hide the button
        } else {
            contactButton.classList.remove('hidden'); // Remove the class to show the button
        }
    });
});





//SLIDE ANIMATION

document.addEventListener('DOMContentLoaded', () => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal'); // Add the 'reveal' class when the element is in view
                observer.unobserve(entry.target); // Stop observing once the animation has been applied
            }
        });
    }, { threshold: 0.1 });

    // Select the elements you want to observe
    const animatedTexts = document.querySelectorAll('.animated-text, .animated-text2, .animated-text3');

    // Observe each animated text element
    animatedTexts.forEach(text => {
        observer.observe(text);
    });
});
