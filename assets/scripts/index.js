(function() {
    const videos = [
        { id: 'M7lc1UVf-VE', title: 'Latest video' },
        { id: 'kJQP7kiw5Fk', title: 'New workout', description: 'training' },
    ];

    let currentVideoIndex = 0;
    let player;
    const videoFrame = document.getElementById('video-frame-1');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    const navLeft = document.querySelector('.video-nav-left-1');
    const navRight = document.querySelector('.video-nav-right-1');

    function updateVideo(direction) {
        currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
        const video = videos[currentVideoIndex];
        
        if (player) {
            player.loadVideoById(video.id);
        } else {
            videoFrame.innerHTML = `<img src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="${video.title}" style="cursor:pointer;" onclick="loadYouTubeAPI()">`;
        }

        requestAnimationFrame(() => {
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.description || '';
            
            [videoTitle, videoDescription].forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(-20px)';
                
                requestAnimationFrame(() => {
                    el.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            });
        });
    }

    function handleNavClick(direction) {
        return () => {
            updateVideo(direction);
            navLeft.disabled = true;
            navRight.disabled = true;
            setTimeout(() => {
                navLeft.disabled = false;
                navRight.disabled = false;
            }, 500);
        };
    }

    navLeft.addEventListener('click', handleNavClick(-1), { passive: true });
    navRight.addEventListener('click', handleNavClick(1), { passive: true });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.addEventListener('DOMContentLoaded', () => {
        const blogPosts = document.querySelectorAll('.blog-post');
        
        blogPosts.forEach(post => {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            post.style.transition = 'opacity 0.5s ease, transform 0.8s ease';
            observer.observe(post);
        });

        updateVideo(0);
    });

    window.loadYouTubeAPI = function() {
        if (window.YT) return;
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video-frame-1', {
            height: '360',
            width: '640',
            videoId: videos[currentVideoIndex].id,
            playerVars: {
                'rel': 0,
                'modestbranding': 1
            }
        });
    };
})();