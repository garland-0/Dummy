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





        /* VIDEO */



        const playButton = document.querySelector('.play-button');
        const videoThumbnail = document.querySelector('.video-thumbnail');
        const video = document.getElementById('myVideo');

        playButton.addEventListener('click', () => {
            playButton.style.display = 'none';
            videoThumbnail.style.display = 'none';
            video.style.display = 'block';
            video.play().catch(error => {
                console.error("Error attempting to play video: ", error);
                alert("There was an error playing the video. Please try again.");
                resetVideoPlayer();
            });
        });

        video.addEventListener('ended', resetVideoPlayer);

        function resetVideoPlayer() {
            video.style.display = 'none';
            videoThumbnail.style.display = 'block';
            playButton.style.display = 'flex';
            video.currentTime = 0;
        }

        video.addEventListener('loadedmetadata', () => {
            video.controls = true;
        });       