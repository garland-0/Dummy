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



/* TEAM */

const playerContainer = document.getElementById('playerContainer');
const navButtons = document.querySelectorAll('.nav-btn');

const playerData = {
            goalkeepers: ['KAUNDA.jpg', 'MONIO.jpg'],
            defenders: ['OJOK.jpg', 'OKWEMBA.jpg', 'ELVIS.jpg', 'OSOI.jpg', 'WANYAMA.jpg'],
            midfielders: [ 'BARAZA.jpg', 'EMMANUEL.jpg', 'KISINO.jpg', 'LUTTA.jpg', 'MAZA.jpg', 'ODIRA.jpg', 'ONDEKO.jpg', 'OSCAR.jpg', 'OUMA.jpg'],
            strikers: ['DEDAN.jpg', 'MASAFU.jpg', 'OKELLO.jpg', 'NZEI.JPG', 'SHAMALA.jpg', 'WANGAI.jpg'],
            staff: [ 'EDWIN.jpg', 'BONDIA.jpg', 'ISAAC.jpg', 'PAUL.jpg', 'ATINDI.jpg']
};

function loadPlayers(category) {
    playerContainer.innerHTML = '';
    playerData[category].forEach((player, index) => {
        const playerFrame = document.createElement('div');
        playerFrame.classList.add('player-frame');
        playerFrame.style.animationDelay = `${index * 0.1}s`;

        const playerImage = document.createElement('img');
        playerImage.src = `./publics/team/team-profile/${category}/${player}`; // Updated to use local path
        playerImage.alt = `${category} ${index + 1}`;
        playerImage.onerror = function() {
            this.src = './publics/shop3.jpg'; // Fallback to a placeholder image if the original image fails to load
        };
 
        const playerInfo = document.createElement('div');
        playerInfo.classList.add('player-info');
        
        const playerName = document.createElement('div');
        playerName.classList.add('player-name');
        playerName.textContent = `Player ${index + 1}`;

        const playerPosition = document.createElement('div');
        playerPosition.classList.add('player-position');
        playerPosition.textContent = category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1);
        playerInfo.appendChild(playerName);
        playerInfo.appendChild(playerPosition);

        playerFrame.appendChild(playerImage);
        playerFrame.appendChild(playerInfo);
        playerContainer.appendChild(playerFrame);
        playerFrame.appendChild(playerImage);
        playerContainer.appendChild(playerFrame);
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadPlayers(button.dataset.category);
    });
});

// Load goalkeepers by default
loadPlayers('goalkeepers');



