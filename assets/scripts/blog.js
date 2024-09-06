/* HEADER */

document.addEventListener('DOMContentLoaded', () => {
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
    });









//BLOG
// JavaScript for animations and dynamic content loading
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero img');
    const blogItems = document.querySelectorAll('.blog-item');

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal'); // Add the 'reveal' class when the element is in view
            } else {
                entry.target.classList.remove('reveal'); // Optionally remove the class when out of view
            }
        });
    }, { threshold: 0.1 });

    // Observe each blog item
    blogItems.forEach(item => {
        observer.observe(item);
    });
});

function loadContent(newsId) {
    const contentArea = document.getElementById('blog-content');
    const heroImage = document.getElementById('hero-image');
    let content = '';

    switch (newsId) {
        case 'news1':
            heroImage.src = './publics/news/news-blog/WhatsApp Image 2024-09-03 at 04.53.49.jpeg'; // Update hero image
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/news/news-blog/WhatsApp Image 2024-09-03 at 04.53.49 (1).jpeg" alt="Blog Image 1">
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <h2 class="blog-title-1">New Training and Traveling Kits</h2>
                    <p class="blog-excerpt-1">We are beyond excited to unveil our latest additions to the SOY United FC family—the official training and traveling kits for the 2024/25 season! These new kits represent a fresh chapter in our journey, designed to provide our players and staff with the highest quality, comfort, and style. As we gear up for another thrilling season, these kits will not only enhance performance but also embody the spirit and identity of our club. Partnering with SOY United Sports Hub, our official shirt partner, we have crafted these kits to meet the rigorous demands of our training sessions while ensuring our team looks sharp on the go.</p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <p class="blog-excerpt-1">Whether on the pitch or traveling to our next big match, our team will be sporting the best, thanks to this incredible partnership.

                        Stay tuned for more updates as we continue to prepare for the season ahead. We can't wait to see our players in action, representing SOY United FC with pride and determination. Remember, with the #WillToWin, we are unstoppable!
                        
                        #SoyNiYetu #WillToWin
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/news/news-blog/WhatsApp Image 2024-09-03 at 04.54.25 (1).jpeg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
        case 'news2':
            heroImage.src = './publics/shop/shop2 copy_result.jpg'; // Update hero image
            content = `
                <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/shop/hub_result.jpg" alt="Blog Image 1">
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <h2 class="blog-title-1">Welcome to Soy United Sports Hub,Your One-Stop Shop for Premium Sports Gear!</h2>
                    <p class="blog-excerpt-1">we're passionate about empowering athletes of all levels with the best sports gear and equipment. Whether you're a seasoned pro or just starting out, we've got you covered with top-quality products for a wide range of sports. From footwear and apparel to accessories and equipment, we ensure you have everything you need to perform your best. Our extensive collection includes everything from running shoes and athletic wear to sports bags, training aids, and protective gear. We stock top brands across a variety of sports, including football, basketball, tennis, branding, fitness, and more</p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <p class="blog-excerpt-1">We’re committed to providing not only premium gear but also exceptional customer service. Our team of experts is always available to offer personalized recommendations, ensuring you find exactly what you need to elevate your game. Browse our collection today and discover how Soy United Sports Hub and branding can fuel your passion for sports!
                        
                        #SoyNiYetu #WillToWin
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/shop/shop5.jpeg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
        case 'news3':
            heroImage.src = './public/shop/shop5.jpeg'; // Update hero image
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpeg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;
        case 'news4':
            heroImage.src = './path-to-hero-image-2.jpeg'; // Update hero image
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpeg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;
        case 'news5':
            heroImage.src = './path-to-hero-image-2.jpeg'; // Update hero image
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpeg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;
        case 'news6':
            heroImage.src = './path-to-hero-image-2.jpeg'; // Update hero image
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpeg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;

            //BLOG
        case 'blog1':
            heroImage.src = './WhatsApp Image 2024-09-03 at 04.53.49.jpeg'; // Update hero image
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./WhatsApp Image 2024-09-03 at 04.53.49 (1).jpeg" alt="Blog Image 1">
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <h2 class="blog-title-1">New Training and Traveling Kits</h2>
                    <p class="blog-excerpt-1">We are beyond excited to unveil our latest additions to the SOY United FC family—the official training and traveling kits for the 2024/25 season! These new kits represent a fresh chapter in our journey, designed to provide our players and staff with the highest quality, comfort, and style. As we gear up for another thrilling season, these kits will not only enhance performance but also embody the spirit and identity of our club. Partnering with SOY United Sports Hub, our official shirt partner, we have crafted these kits to meet the rigorous demands of our training sessions while ensuring our team looks sharp on the go.</p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <p class="blog-excerpt-1">Whether on the pitch or traveling to our next big match, our team will be sporting the best, thanks to this incredible partnership.

                        Stay tuned for more updates as we continue to prepare for the season ahead. We can't wait to see our players in action, representing SOY United FC with pride and determination. Remember, with the #WillToWin, we are unstoppable!
                        
                        #SoyNiYetu #WillToWin
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./WhatsApp Image 2024-09-03 at 04.54.25 (1).jpeg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
            case 'blog2':
                heroImage.src = './WhatsApp Image 2024-09-03 at 04.53.49.jpeg'; // Update hero image
                content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./WhatsApp Image 2024-09-03 at 04.53.49 (1).jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">New Training and Traveling Kits</h2>
                        <p class="blog-excerpt-1">We are beyond excited to unveil our latest additions to the SOY United FC family—the official training and traveling kits for the 2024/25 season! These new kits represent a fresh chapter in our journey, designed to provide our players and staff with the highest quality, comfort, and style. As we gear up for another thrilling season, these kits will not only enhance performance but also embody the spirit and identity of our club. Partnering with SOY United Sports Hub, our official shirt partner, we have crafted these kits to meet the rigorous demands of our training sessions while ensuring our team looks sharp on the go.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <p class="blog-excerpt-1">Whether on the pitch or traveling to our next big match, our team will be sporting the best, thanks to this incredible partnership.
    
                            Stay tuned for more updates as we continue to prepare for the season ahead. We can't wait to see our players in action, representing SOY United FC with pride and determination. Remember, with the #WillToWin, we are unstoppable!
                            
                            #SoyNiYetu #WillToWin
                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./WhatsApp Image 2024-09-03 at 04.54.25 (1).jpeg" alt="Blog Image 2">
                    </div>
                </div>
                `;
                break;
        case 'blog3':
            heroImage.src = './WhatsApp Image 2024-09-03 at 04.53.49.jpeg'; // Update hero image
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./WhatsApp Image 2024-09-03 at 04.53.49 (1).jpeg" alt="Blog Image 1">
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <h2 class="blog-title-1">New Training and Traveling Kits</h2>
                    <p class="blog-excerpt-1">We are beyond excited to unveil our latest additions to the SOY United FC family—the official training and traveling kits for the 2024/25 season! These new kits represent a fresh chapter in our journey, designed to provide our players and staff with the highest quality, comfort, and style. As we gear up for another thrilling season, these kits will not only enhance performance but also embody the spirit and identity of our club. Partnering with SOY United Sports Hub, our official shirt partner, we have crafted these kits to meet the rigorous demands of our training sessions while ensuring our team looks sharp on the go.</p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <p class="blog-excerpt-1">Whether on the pitch or traveling to our next big match, our team will be sporting the best, thanks to this incredible partnership.

                        Stay tuned for more updates as we continue to prepare for the season ahead. We can't wait to see our players in action, representing SOY United FC with pride and determination. Remember, with the #WillToWin, we are unstoppable!
                        
                        #SoyNiYetu #WillToWin
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./WhatsApp Image 2024-09-03 at 04.54.25 (1).jpeg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
        
            case 'blog4':
                heroImage.src = './publics/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.55 AM.jpeg'; // Update hero image
                content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./publics/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.19.21 AM.jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">CSR Initiative at Nairobi West Prison</h2>
                        <p class="blog-excerpt-1">Soy United FC is currently in Nairobi for pre-season preparations, and as part of our community outreach, we had the privilege of visiting Nairobi West Prison in Langata. Our visit was not only a chance to give back but also to engage with the community in a meaningful way.
</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <p class="blog-excerpt-1">During our visit, we donated several items to the prison, including sets of football jerseys, footballs, sanitary materials, and kitchen products. These contributions are part of our ongoing efforts to support and uplift communities in need, and we are proud to have been able to make a positive impact.n
                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./publics/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.51 AM.jpeg" alt="Blog Image 2">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./publics/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.57 AM.jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <p class="blog-excerpt-1">In addition to the donations, we also had the opportunity to play a friendly match against the inmates. The match was a spirited encounter, filled with camaraderie and sportsmanship, showcasing the unifying power of football.
                        We extend our heartfelt gratitude to the leadership of Nairobi West Prison, especially Mr. Stephen Kemey, Ms. Elizabeth Bianca, head of welfare affairs, and the prison's team coach, Mr. Bonzo, for their warm reception and support in making this event a success. Their cooperation made our visit not just possible but deeply fulfilling.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <p class="blog-excerpt-1">Thank you to everyone involved, and as always, we remain committed to our mission of community engagement and excellence both on and off the field.
                        #SoyNiYetu #WillToWin
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./publics/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.19.22 AM.jpeg" alt="Blog Image 2">
                    </div>
                </div>

                `;
                break;
                case 'blog5':
            heroImage.src = './publics/foundation/blog-images/mathare1.jpeg'; // Update hero image
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/foundation/blog-images/mathare2.jpeg">
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <h2 class="blog-title-1">Soy United FC's Heartfelt CSR Initiative A Visit to Mathare Mental Hospital</h2>
                    <p class="blog-excerpt-1">In a remarkable show of compassion and community support, Soy United FC recently extended its Corporate Social Responsibility (CSR) efforts with a visit to the Mathare Mental Hospital Maximum Security Unit. This impactful visit saw the team generously donating much-needed food supplies and sanitary materials to help sustain the unit, which plays a vital role in caring for patients dealing with serious mental health challenges.
                    The Maximum Security Unit is a unique facility, housing inmates who are not only serving jail terms but also undergoing critical mental health treatment. This visit emphasized the hospital's essential mission of providing specialized care and rehabilitation to individuals in need, giving them hope for recovery and reintegration into society.
                    
                    </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-text">
                    <p class="blog-excerpt-1">
                    Soy United FC expresses profound gratitude to the leadership of Mathare Mental Hospital for their warm welcome and partnership. We extend special appreciation to Madam Rose Muliro, head of the inmates' welfare affairs, Ms. Charity Zuma, assistant welfare officer, and Mr. Joseph Mwangangi, the mental health officer, for their dedication and guidance during this meaningful experience.

                    Our commitment goes beyond the football field. By engaging in initiatives like this, we aim to not only support the community but also raise awareness about mental health, a cause close to our hearts. Together, we believe that every effort makes a difference, and we are proud to play our part in uplifting those in need.

                    #SoyNiYetu #WillToWin #MentalHealthAwareness #CommunitySupport #CSRWithPurpose
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./publics/foundation/blog-images/mathare3.jpeg">
                </div>
            </div>
            `;
            break;





        // Add more cases for other news items
        default:
            heroImage.src = './default-hero-image.jpeg'; // Default hero image
            content = '<p>No content available.</p>';
    }

        contentArea.innerHTML = content; // Update blog content
}

        // Function to get URL parameters
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            const results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Load content based on URL parameter
        document.addEventListener('DOMContentLoaded', function() {
            const newsId = getUrlParameter('newsId'); // Get the newsId from the URL
            if (newsId) {
                loadContent(newsId); // Call the loadContent function with the newsId
            } else {
                // Handle case where no newsId is provided
                document.getElementById('blog-content').innerHTML = '<p>No content available.</p>';
            }
});