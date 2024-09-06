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






    //IMAGES
    const images = document.querySelectorAll('.slider-image');
    let currentImage = 0;

    function changeImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    function startSlider() {
        // Ensure the first image is visible initially
        images[0].classList.add('active');
        
        // Change image every 5 seconds
        setInterval(changeImage, 5000);
    }

    // Start the slider when the page loads
    window.addEventListener('load', startSlider);












/* //POPULAR */
function adjustImageFrames() {
    const container = document.querySelector('.image-container-pop');
    const frames = document.querySelectorAll('.image-frame-pop');
    const containerWidth = container.offsetWidth;
    const frameWidth = frames[0].offsetWidth;
    const gap = 16; // 1rem = 16px

    if (window.innerWidth <= 480) {
        frames.forEach((frame, index) => {
            if (index === 2) {
                frame.style.marginLeft = `${(containerWidth - frameWidth) / 2}px`;
            } else {
                frame.style.marginLeft = '0';
            }
        });
    } else {
        frames.forEach(frame => {
            frame.style.marginLeft = '0';
        });
    }
}

window.addEventListener('load', adjustImageFrames);
window.addEventListener('resize', adjustImageFrames);




/* VIDEO-INTRO */
const videoContainer = document.querySelector('.video-container-7');
const thumbnail = document.querySelector('.thumbnail-7');
const overlay = document.querySelector('.video-overlay');
const playButton = document.querySelector('.play-button-7');
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'ohy6lmOs8Ak',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'fs': 1
        },
        events: {
            'onReady':onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        showThumbnail();
    }
}
function onPlayerReady(event){
    resizeVideo();
}

function showThumbnail() {
    player.getIframe().style.opacity = '0';
    thumbnail.style.opacity = '1';
    overlay.style.opacity = '1';
    playButton.style.display = 'flex';
}

function showVideo() {
    player.playVideo();
    player.getIframe().style.opacity = '1';
    thumbnail.style.opacity = '0';
    overlay.style.opacity = '0';
    playButton.style.display = 'none';
}

playButton.addEventListener('click', showVideo);

function resizeVideo() {
    const width = videoContainer.offsetWidth;
    const height = videoContainer.offsetHeight;
    const aspectRatio = 16 / 9;

    let newWidth, newHeight;

    if (width / height > aspectRatio) {
        newWidth = width;
        newHeight = width / aspectRatio;
    } else {
        newHeight = height;
        newWidth = height * aspectRatio;
    }

    if (player && player.getIframe()) {
        const iframe=player.getIframe();
        iframe.style.width=newWidth +'px';
        iframe.style.height=newHeight+'px';
        iframe.style.left='50';
        iframe.style.top='50';
        iframe.style.transform='translate(-50%,-50%)';
        iframe.style.position='position';
        
    }
}

window.addEventListener('resize', resizeVideo);
setInterval(resizeVideo, 100); // Call periodically to ensure proper sizing







/* SHOP */

const categories = ['JERSEY', 'BALLS', 'HOODS', 'GLOVES', 'HATS', 'TROPHIES', 'MEDALS', 'BOOTS', 'CONES', 'SOCKS', 'UMBRELLAS'];
const items = [
    { id: 'Arsenal', category: 'JERSEY', image: './public/shop-photos/jersey/arsenal-away-jersey.jpeg?width=300&height=350&format=webp' },
    { id: 'Arsenal', category: 'JERSEY', image: './public/shop-photos/jersey/arsenal-branded.jpeg?width=300&height=300&format=webp' },
    { id: 'Arsenal ', category: 'JERSEY', image: './public/shop-photos/jersey/arsenal-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Arsenal', category: 'JERSEY', image: './public/shop-photos/jersey/arsenal-third.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './public/shop-photos/jersey/soy-branded-pink.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './public/shop-photos/jersey/soy-branded.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './public/shop-photos/jersey/soy-united-branded.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy United ', category: 'JERSEY', image: './public/shop-photos/jersey/soy-united-home.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './public/shop-photos/jersey/soy-united-shirt.jpeg?width=300&height=300&format=webp' },
    { id: 'Man united ', category: 'JERSEY', image: './public/shop-photos/jersey/man-united-away.jpeg?width=300&height=300&format=webp' },
    { id: 'Man united ', category: 'JERSEY', image: './public/shop-photos/jersey/man-united-branded.jpeg?width=300&height=300&format=webp' },
    { id: 'Man united', category: 'JERSEY', image: './public/shop-photos/jersey/man-united-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Real madrid ', category: 'JERSEY', image: './public/shop-photos/jersey/real-madrid-away.jpeg?width=300&height=300&format=webp' },
    { id: 'Real madrid', category: 'JERSEY', image: './public/shop-photos/jersey/real-madrid-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Bayern', category: 'JERSEY', image: './public/shop-photos/jersey/bayern-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Goalkeeper ', category: 'JERSEY', image: './public/shop-photos/jersey/goalkeeper-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Kenya', category: 'JERSEY', image: './public/shop-photos/jersey/kenya-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Liverpool', category: 'JERSEY', image: './public/shop-photos/jersey/liverpool-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Man city', category: 'JERSEY', image: './public/shop-photos/jersey/man-city-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'PSG ', category: 'JERSEY', image: './public/shop-photos/jersey/psg-jersey.jpeg?width=300&height=300&format=webp' },
    { id: 'Shirt', category: 'JERSEY', image: './public/shop-photos/jersey/shirts.jpeg?width=300&height=300&format=webp' },
    { id: 'Sports shirt', category: 'JERSEY', image: './public/shop-photos/jersey/sports-shirt.jpeg?width=300&height=300&format=webp' },
    { id: 'Unbranded', category: 'JERSEY', image: './public/shop-photos/jersey/unbranded-shirt.jpeg?width=300&height=300&format=webp' },
    { id: 'Unbranded', category: 'JERSEY', image: './public/shop-photos/jersey/unbranded-t-shirts.jpeg?width=300&height=300&format=webp' },
    { id: 'Soy away', category: 'JERSEY', image: './public/shop-photos/jersey/soy-red.jpeg?width=300&height=300&format=webp' },

    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-1.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-2.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-3.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-4.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-5.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-6.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-7.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-8.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-9.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-10.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-11.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-12.jpeg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './public/shop-photos/boots/boots-13.jpeg?width=300&height=300&format=webp' },



    { id: 'Socks', category: 'SOCKS', image: './public/shop-photos/socks/collection.jpeg.jpeg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './public/shop-photos/socks/socks-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './public/shop-photos/socks/socks-3.jpeg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './public/shop-photos/socks/socks-5.jpeg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './public/shop-photos/socks/Socks-.jpeg?width=300&height=300&format=webp' },


    { id: 'Medal', category: 'MEDALS', image: './public/shop-photos/medals/medal.jpeg?width=300&height=300&format=webp' },

    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/trophy-1.jpeg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/tropht-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/trophy-3.jpeg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/trophy-4.jpeg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/trophy-5.jpeg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './public/shop-photos/trophies/trophy-6.jpeg?width=300&height=300&format=webp' },

    { id: 'Umbrella', category: 'UMBRELLAS', image: './public/shop-photos/umbrellas/umbrella-1.jpeg?width=300&height=300&format=webp' },
    { id: 'Umbrella', category: 'UMBRELLAS', image: './public/shop-photos/umbrellas/umbrella-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Umbrella', category: 'UMBRELLAS', image: './public/shop-photos/umbrellas/umbrella-3.jpeg?width=300&height=300&format=webp' },
    

    { id: 'Hood', category: 'HOODS', image: './public/shop-photos/hoods/hood.jpeg?width=300&height=300&format=webp' },
    
    { id: 'Hats', category: 'HATS', image: './public/shop-photos/hats/Hat-1.jpeg?width=300&height=300&format=webp' },
    { id: 'Hats', category: 'HATS', image: './public/shop-photos/hats/Hat-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Hats', category: 'HATS', image: './public/shop-photos/hats/Hat-3.jpeg?width=300&height=300&format=webp' },

    { id: 'Gloves', category: 'GLOVES', image: './public/shop-photos/gloves/Gloves.jpeg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './public/shop-photos/gloves/Gloves-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './public/shop-photos/gloves/Gloves-3.jpeg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './public/shop-photos/gloves/Gloves-4.jpeg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './public/shop-photos/gloves/Gloves-5.jpeg?width=300&height=300&format=webp' },

    { id: 'Cones', category: 'CONES', image: './public/shop-photos/cones/Cones-1.jpeg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './public/shop-photos/cones/Cones-2.jpeg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './public/shop-photos/cones/Cones-3.jpeg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './public/shop-photos/cones/Cones-4.jpeg?width=300&height=300&format=webp' },


    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-4.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-5.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-6.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-7.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-8.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-9.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-10.jpeg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './public/shop-photos/balls/ball-11.jpeg?width=300&height=300&format=webp' },
];

document.addEventListener('DOMContentLoaded', function() {
    const categoryNav = document.getElementById('categoryNav');
    const itemContainer = document.getElementById('itemContainer');

    let currentCategory = '';

    // Initialize categories
    function initializeCategories() {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.addEventListener('click', () => loadCategory(category));
            categoryNav.appendChild(button);
        });

        if (categories.length > 0) {
            loadCategory(categories[0]);
        }
    }

    // Load category items
    function loadCategory(category) {
        currentCategory = category;
        itemContainer.innerHTML = '';

        const categoryItems = items.filter(item => item.category === category);

        categoryItems.forEach(item => {
            createItemElement(item);
        });

        updateActiveCategory(category);
    }

    // Create item element
    function createItemElement(item) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', 'fade-in');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="Item from ${item.category}">
            <div class="item-info">
                <span class="item-name">${item.id}</span>
            </div>
        `;
        itemContainer.appendChild(itemElement);
    }

    // Update active category
    function updateActiveCategory(category) {
        const buttons = categoryNav.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.textContent === category) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Initialize the shop
    initializeCategories();
});











        /* //FADE IN */
        // Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    
    const fadeInOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, fadeInOptions);
  
    fadeInElements.forEach(element => {
      fadeInObserver.observe(element);
    });
  });