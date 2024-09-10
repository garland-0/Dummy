
  //IMAGES
    const images = document.querySelectorAll('.slider-image');
    let currentImage = 0;

    function changeImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    function startSlider() {
        images[0].classList.add('active');
        setInterval(changeImage, 5000);
    }
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
/*VIDEO-INTRO */
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
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        showThumbnail();
    }
}

function onPlayerReady(event) {
    resizeVideo();
}

function showThumbnail() {
    if (player && player.getIframe()) {
        player.getIframe().style.opacity = '0';
    }
    thumbnail.style.opacity = '1';
    overlay.style.opacity = '1';
    playButton.style.display = 'flex';
}

function showVideo() {
    player.playVideo();
    if (player && player.getIframe()) {
        player.getIframe().style.opacity = '1';
    }
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
        const iframe = player.getIframe();
        iframe.style.width = newWidth + 'px';
        iframe.style.height = newHeight + 'px';
        iframe.style.left = '50%';
        iframe.style.top = '50%';
        iframe.style.transform = 'translate(-50%, -50%)';
        iframe.style.position = 'absolute';
        
        player.setOption('controls', 1);
    }
}

window.addEventListener('resize', resizeVideo);
let resizeRAF;
function smoothResize() {
    if (resizeRAF) {
        cancelAnimationFrame(resizeRAF);
    }
    resizeRAF = requestAnimationFrame(resizeVideo);
}

window.addEventListener('resize', smoothResize);

resizeVideo();
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

loadYouTubeAPI();







/* SHOP */

const categories = ['JERSEY', 'BALLS', 'HOODS', 'GLOVES', 'HATS', 'TROPHIES', 'MEDALS', 'BOOTS', 'CONES', 'SOCKS', 'UMBRELLAS'];
const items = [
    { id: 'Arsenal', category: 'JERSEY', image: './publics/shop-photos/jersey/arsenal-away-jersey.jpg?width=300&height=350&format=webp' },
    { id: 'Arsenal', category: 'JERSEY', image: './publics/shop-photos/jersey/arsenal-branded.jpg?width=300&height=300&format=webp' },
    { id: 'Arsenal ', category: 'JERSEY', image: './publics/shop-photos/jersey/arsenal-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Arsenal', category: 'JERSEY', image: './publics/shop-photos/jersey/arsenal-third.jpg?width=300&height=300&format=webp' },
    /* { id: 'Soy United', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-branded-pink.jpg?width=300&height=300&format=webp' }, */
    { id: 'Soy United', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-branded.jpg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-united-branded.jpg?width=300&height=300&format=webp' },
    { id: 'Soy United ', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-united-home.jpg?width=300&height=300&format=webp' },
    { id: 'Soy United', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-united-shirt.jpg?width=300&height=300&format=webp' },
    { id: 'Man united ', category: 'JERSEY', image: './publics/shop-photos/jersey/man-united-away.jpg?width=300&height=300&format=webp' },
    { id: 'Man united ', category: 'JERSEY', image: './publics/shop-photos/jersey/man-united-branded.jpg?width=300&height=300&format=webp' },
    { id: 'Man united', category: 'JERSEY', image: './publics/shop-photos/jersey/man-united-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Real madrid ', category: 'JERSEY', image: './publics/shop-photos/jersey/real-madrid-away.jpg?width=300&height=300&format=webp' },
    { id: 'Real madrid', category: 'JERSEY', image: './publics/shop-photos/jersey/real-madrid-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Bayern', category: 'JERSEY', image: './publics/shop-photos/jersey/bayern-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Goalkeeper ', category: 'JERSEY', image: './publics/shop-photos/jersey/goalkeeper-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Kenya', category: 'JERSEY', image: './publics/shop-photos/jersey/kenya-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Liverpool', category: 'JERSEY', image: './publics/shop-photos/jersey/liverpool-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Man city', category: 'JERSEY', image: './publics/shop-photos/jersey/man-city-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'PSG ', category: 'JERSEY', image: './publics/shop-photos/jersey/psg-jersey.jpg?width=300&height=300&format=webp' },
    { id: 'Shirt', category: 'JERSEY', image: './publics/shop-photos/jersey/shirts.jpg?width=300&height=300&format=webp' },
    { id: 'Sports shirt', category: 'JERSEY', image: './publics/shop-photos/jersey/sports-shirt.jpg?width=300&height=300&format=webp' },
    { id: 'Unbranded', category: 'JERSEY', image: './publics/shop-photos/jersey/unbranded-shirt.jpg?width=300&height=300&format=webp' },
    { id: 'Unbranded', category: 'JERSEY', image: './publics/shop-photos/jersey/unbranded-t-shirts.jpg?width=300&height=300&format=webp' },
    { id: 'Soy away', category: 'JERSEY', image: './publics/shop-photos/jersey/soy-red.jpg?width=300&height=300&format=webp' },

    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-1.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-2.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-3.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-4.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-5.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-6.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-7.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-8.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-9.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-10.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-11.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-12.jpg?width=300&height=300&format=webp' },
    { id: 'boots', category: 'BOOTS', image: './publics/shop-photos/boots/boots-13.jpg?width=300&height=300&format=webp' },



    { id: 'Socks', category: 'SOCKS', image: './publics/shop-photos/socks/collection.jpg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './publics/shop-photos/socks/socks-2.jpg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './publics/shop-photos/socks/socks-3.jpg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './publics/shop-photos/socks/socks-5.jpg?width=300&height=300&format=webp' },
    { id: 'Socks', category: 'SOCKS', image: './publics/shop-photos/socks/Socks-.jpg?width=300&height=300&format=webp' },


    { id: 'Medal', category: 'MEDALS', image: './publics/shop-photos/medals/medal.jpg?width=300&height=300&format=webp' },

    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/trophy-1.jpg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/tropht-2.jpg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/trophy-3.jpg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/trophy-4.jpg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/trophy-5.jpg?width=300&height=300&format=webp' },
    { id: 'Trophy', category: 'TROPHIES', image: './publics/shop-photos/trophies/trophy-6.jpg?width=300&height=300&format=webp' },

    { id: 'Umbrella', category: 'UMBRELLAS', image: './publics/shop-photos/umbrellas/umbrella-1.jpg?width=300&height=300&format=webp' },
    { id: 'Umbrella', category: 'UMBRELLAS', image: './publics/shop-photos/umbrellas/umbrella-2.jpg?width=300&height=300&format=webp' },
    { id: 'Umbrella', category: 'UMBRELLAS', image: './publics/shop-photos/umbrellas/umbrella-3.jpg?width=300&height=300&format=webp' },
    

    { id: 'Hood', category: 'HOODS', image: './publics/shop-photos/hoods/hood.jpg?width=300&height=300&format=webp' },
    
    { id: 'Hats', category: 'HATS', image: './publics/shop-photos/hats/Hat-3.jpg?width=300&height=300&format=webp' },
    { id: 'Hats', category: 'HATS', image: './publics/shop-photos/hats/Hat-2.jpg?width=300&height=300&format=webp' },
    { id: 'Hats', category: 'HATS', image: './publics/shop-photos/hats/Hat-1.jpg?width=300&height=300&format=webp' },

    { id: 'Gloves', category: 'GLOVES', image: './publics/shop-photos/gloves/Gloves.jpg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './publics/shop-photos/gloves/Gloves-2.jpg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './publics/shop-photos/gloves/Gloves-3.jpg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './publics/shop-photos/gloves/Gloves-4.jpg?width=300&height=300&format=webp' },
    { id: 'Gloves', category: 'GLOVES', image: './publics/shop-photos/gloves/Gloves-5.jpg?width=300&height=300&format=webp' },

    { id: 'Cones', category: 'CONES', image: './publics/shop-photos/cones/Cones-1.jpg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './publics/shop-photos/cones/Cones-2.jpg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './publics/shop-photos/cones/Cones-3.jpg?width=300&height=300&format=webp' },
    { id: 'Cones', category: 'CONES', image: './publics/shop-photos/cones/Cones-4.jpg?width=300&height=300&format=webp' },


    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-4.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-5.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-6.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-7.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-8.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-9.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-10.jpg?width=300&height=300&format=webp' },
    { id: 'Ball', category: 'BALLS', image: './publics/shop-photos/balls/ball-11.jpg?width=300&height=300&format=webp' },
];

document.addEventListener('DOMContentLoaded', function() {
    const categoryNav = document.getElementById('categoryNav');
    const itemContainer = document.getElementById('itemContainer');

    let currentCategory = '';
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
    function loadCategory(category) {
        currentCategory = category;
        itemContainer.innerHTML = '';

        const categoryItems = items.filter(item => item.category === category);

        categoryItems.forEach(item => {
            createItemElement(item);
        });

        updateActiveCategory(category);
    }
    function createItemElement(item) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', 'fade-in');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="Item from ${item.category}" loading="lazy">
            <div class="item-info">
                <span class="item-name">${item.id}</span>
            </div>
        `;
        itemContainer.appendChild(itemElement);
    }
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
    initializeCategories();
});
