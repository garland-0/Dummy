

/* VIDEO-SECTION */

const videos = [
    { id: 'M7lc1UVf-VE', title: 'Latest video' },
    { id: 'kJQP7kiw5Fk', title: 'New workout', description: 'training' },
    
];

let currentVideoIndex = 0;

function updateVideo(direction) {
    currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
    const video = videos[currentVideoIndex];
    document.getElementById('video-frame-1').src = `https://www.youtube.com/embed/${video.id}`;
    
    gsap.to('#video-title, #video-description', {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
            document.getElementById('video-title').textContent = video.title;
            document.getElementById('video-description').textContent = video.description;
            gsap.to('#video-title, #video-description', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2
            });
        }
    });
}

document.querySelector('.video-nav-left-1').addEventListener('click', () => updateVideo(-1));
document.querySelector('.video-nav-right-1').addEventListener('click', () => updateVideo(1));






//BLOG SECTION
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) { // Check if 50% of the element is visible
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing after the animation is done
            }
        });
    }, {
        threshold: 0.5 // 50% of the element must be visible
    });

    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.5s ease, transform 0.8s ease';
        observer.observe(post); // Observe each blog post element
    });
});