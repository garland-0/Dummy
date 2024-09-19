document.addEventListener("DOMContentLoaded",()=>{const hamburger=document.querySelector(".hamburger");const navMenu=document.querySelector(".nav-menu");const navLinks=document.querySelectorAll(".nav-link");const hamburgerIcon=document.querySelector(".hamburger-icon");function toggleMenu(){navMenu.classList.toggle("active");document.body.classList.toggle("menu-open");hamburgerIcon.classList.toggle("open")}hamburger.addEventListener("click",toggleMenu);navLinks.forEach(link=>{link.addEventListener("click",()=>{navMenu.classList.remove("active");document.body.classList.remove("menu-open");hamburgerIcon.classList.remove("open")})});function addFadeInClass(){if(window.innerWidth<=768){navLinks.forEach((link,index)=>{link.parentElement.style.transitionDelay=`${index*.1}s`})}else{navLinks.forEach(link=>{link.parentElement.style.transitionDelay=""})}}window.addEventListener("resize",addFadeInClass);addFadeInClass();const style=document.createElement("style");style.textContent=`
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
        `;document.head.appendChild(style)});document.addEventListener("DOMContentLoaded",()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("reveal");observer.unobserve(entry.target)}})},{threshold:.1});const animatedTexts=document.querySelectorAll(".animated-text, .animated-text2, .animated-text3");animatedTexts.forEach(text=>{observer.observe(text)})});