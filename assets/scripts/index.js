/* VIDEO-SECTION */

const videos = [
    { id: 'M7lc1UVf-VE', title: 'Latest video' },
    { id: 'kJQP7kiw5Fk', title: 'New workout', description: 'training' },
];

let currentVideoIndex = 0;
const videoFrame = document.getElementById('video-frame-1');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');
const navLeft = document.querySelector('.video-nav-left-1');
const navRight = document.querySelector('.video-nav-right-1');

function updateVideo(direction) {
    currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
    const video = videos[currentVideoIndex];
    videoFrame.src = `https://www.youtube.com/embed/${video.id}`;

    gsap.to([videoTitle, videoDescription], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.description;
            gsap.to([videoTitle, videoDescription], {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2
            });
        }
    });
}

// Debounce function to limit the rate of function calls
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

navLeft.addEventListener('click', debounce(() => updateVideo(-1), 300));
navRight.addEventListener('click', debounce(() => updateVideo(1), 300));


//BLOG SECTION
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Use isIntersecting for better readability
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.5s ease, transform 0.8s ease';
        observer.observe(post);
    });
});