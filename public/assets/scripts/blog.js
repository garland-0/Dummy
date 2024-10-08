

//BLOG
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero img');
    const blogItems = document.querySelectorAll('.blog-item');
    let ticking = false; 

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
                ticking = false; 
            });
            ticking = true; 
        }
    };

    window.addEventListener('scroll', onScroll);

   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('reveal', entry.isIntersecting); 
        });
    }, { threshold: 0.1 });

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
            heroImage.src = './public/news/news-blog/WhatsApp Image 2024-09-03 at 04.53.49.jpg'; // Update hero image
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./public/news/news-blog/WhatsApp Image 2024-09-03 at 04.53.49 (1).jpg" alt="Blog Image 1">
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
                    <img src="./public/news/news-blog/WhatsApp Image 2024-09-03 at 04.54.25 (1).jpg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
        case 'news2':
            heroImage.src = './public/shop/shop2 copy.jpg'; 
            content = `
                <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./public/shop/hub.jpg" alt="Blog Image 1">
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
                    <p class="blog-excerpt-1">We're committed to providing not only premium gear but also exceptional customer service. Our team of experts is always available to offer personalized recommendations, ensuring you find exactly what you need to elevate your game. Browse our collection today and discover how Soy United Sports Hub and branding can fuel your passion for sports!
                        
                        #SoyNiYetu #WillToWin
                        </p>
                </div>
            </div>
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./public/shop/shop5.jpg" alt="Blog Image 2">
                </div>
            </div>
            `;
            break;
        case 'news3':
            heroImage.src = './public/shop/shop5.jpg'; 
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;
            case 'news4':
            heroImage.src = './public/news/news-blog/day2.jpeg';
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/news/news-blog/day1.jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1"> A Journey of Passion, Perseverance, and Progress</h2>
                        <p class="blog-excerpt-1">Reflecting on 8th  Incredible Years of Soy United FC

                            On September 21st, 2024, the Soy United FC family, community, and passionate fans gathered at our beloved home ground in Ivugwi to celebrate a significant milestone—our 8th anniversary. The day was nothing short of magical, as it was filled with joy, excitement, and deep reflection on the remarkable journey we’ve been on.

                            From thrilling victories to overcoming tough challenges, each moment has shaped us into the strong team we are today. This celebration wasn’t just about the years gone by—it was about the future that lies ahead, built on the dedication and passion of every single person involved with the club.

                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">A Special Thanks to Those Who Made It Possible</h2>
                        <p class="blog-excerpt-1">
                        We want to extend our deepest gratitude to those who have been at the heart of Soy United’s success. First and foremost, to <b>Bramwel Karamoja</b> and <b>Allan Wanga</b> -your unwavering support and commitment have been the heartbeat of this team. You’ve always made time for us, and for that, we are forever thankful.

                        A huge shoutout goes to <b>Samitsi Football Club</b> for being part of our celebration and adding extra energy to the day’s festivities. Your presence elevated the event, making it one we’ll remember for years to come.
                    </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/news/news-blog/day5.jpeg" alt="Blog Image 2">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/news/news-blog/soyy4.jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Acknowledging Our Leaders and Supporters</h2>
                        <p class="blog-excerpt-1">We also wish to thank the local political leaders, led by <b>Hon. Innocent Mugabe</b>, MP of Lugari Constituency, ,<b>Hon. Nabwera Nabii</b>, and <b>MCA Hon. Brian Mafunga</b>, for their unwavering support. Not only did they join us on this special day, but they also pledged their backing for our dream of developing a new soccer stadium within Likuyani Constituency. Your belief in our vision gives us the strength to push forward and dream bigger.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">A Call to Action</h2>
                        <p class="blog-excerpt-1">Our mission doesn't end here. We are calling on everyone—fans, community members, and fellow sports teams—to join us in making a difference. Whether through simple acts of kindness or taking part in environmental initiatives, we can all play a role in building a better world. Soy United FC will continue to lead by example, championing the causes that matter most and demonstrating that true greatness lies in service to others and the planet.

                        Together, let's embrace the power of  sports, community, and sustainability  to create lasting change!

                        To Our Loyal Fans: You Are the Soul of Soy United FC

                        None of this would be possible without you—our loyal fans. For eight incredible years, your passion, love, and support have been the fuel that drives us. Whether we win or lose, you have stood by us, and for that, we are eternally grateful. Your unwavering loyalty is the reason we continue to push for greatness.


                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/news/news-blog/day3.jpeg" alt="Blog Image 2">
                    </div>
                </div>
                 <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/news/news-blog/soyy3.jpeg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1"> Exciting Announcements: A New Chapter Begins</h2>
                        <p class="blog-excerpt-1">As we look toward the future, we’re thrilled to announce the launch of  our MPESA Till Number: 4778384, allowing you to directly support the team as we continue to grow and reach new heights.

                        Looking Ahead: The Best Is Yet to Come

                        As we reflect on the last eight years, it’s been a humbling and rewarding journey. Watching Soy United grow from a small village team into a football club with a proud following and a bright future is something truly special. But this is just the beginning. With your continued support, we look forward to many more victories, celebrations, and unforgettable moments.

                        Together, we’ll keep building something extraordinary. Soy ni Yetu—Soy is Ours. May God continue to bless Soy United Football Club!

                        #WillToWin #SoyUnitedAt8 #ForeverUnited #FootballJourney #StillNdogoYetStrong #SoyNiYetu


                    </div>
                </div>
                `;
            break;
        case 'news5':
            heroImage.src = './path-to-hero-image-2.jpg'; 
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpg" alt="Blog Image 2">
                    </div>
                    <div class="blog-text">
                        <h2 class="blog-title-1">Injury Update</h2>
                        <p class="blog-excerpt-1">Details about the injury update...</p>
                    </div>
                </div>
            `;
            break;
        case 'news6':
            heroImage.src = './path-to-hero-image-2.jpg';
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./path-to-image-2.jpg" alt="Blog Image 2">
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
            heroImage.src = './public/foundation/blog-images/WhatsApp Image 2024-08-18 at 06.22.57 (1).jpeg';
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-18 at 06.22.56.jpg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1"> Soy United FC: Leading the Way in Community Service and Environmental Stewardship</h2>
                        <p class="blog-excerpt-1">At Soy United FC, we believe in more than just excellence on the football field. Our mission extends far beyond sports, as we strive to make a positive impact in our community and raise awareness about critical issues like environmental sustainability and social responsibility. Recently, our team embarked on a meaningful journey, visiting key locations to engage in activities that uplift the community and promote environmental consciousness.
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Community Outreach: A Heartfelt Mission</h2>
                        <p class="blog-excerpt-1">
                        As part of our community outreach program, Soy United FC visited Likuyani Hospital, Soy Market, and Nangili Market. These visits were more than just gestures of goodwill; they were opportunities for us to connect with the people who support our club and to give back in a tangible way. At the hospital, our players spent time encouraging the sick, offering words of hope and support to those in need. In addition, we donated essential items to help improve their well-being during challenging times.
                    </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-18 at 06.22.56 (3).jpg" alt="Blog Image 2">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-18 at 06.22.56 (2).jpg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Cleaning Initiatives: Fighting for a Greener Future</h2>
                        <p class="blog-excerpt-1">In line with our core values, Soy United FC has proudly taken on the role of an environmentally conscious football club. During our visits to the local markets, we rolled up our sleeves and conducted a community clean-up at both Soy Market and Nangili Market. Our goal was simple but powerful: to raise awareness about the importance of maintaining clean public spaces and to inspire others to join us in the fight against pollution.

                        Soy United FC is more than just a football team—we are a green club dedicated to environmental preservation and climate action. Our clean-up efforts reflect our deep commitment to protecting the environment and advocating for sustainable practices. By taking these small yet impactful steps, we hope to contribute to a cleaner, healthier planet for future generations.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">A Call to Action</h2>
                        <p class="blog-excerpt-1">Our mission doesn't end here. We are calling on everyone—fans, community members, and fellow sports teams—to join us in making a difference. Whether through simple acts of kindness or taking part in environmental initiatives, we can all play a role in building a better world. Soy United FC will continue to lead by example, championing the causes that matter most and demonstrating that true greatness lies in service to others and the planet.

                        Together, let's embrace the power of  sports, community, and sustainability  to create lasting change!

                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-18 at 06.22.56 (1).jpg" alt="Blog Image 2">
                    </div>
                </div>
                `;
            break;
            case 'blog2':
                heroImage.src = './public/foundation/blog-images/Orphanage4.jpeg'; 
                content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/Orphanage1.jpg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Soy United FC: Spreading Love and Hope at Harvest of Hope Africa Orphanage</h2>
                        <p class="blog-excerpt-1">Mother Teresa, one of the world's greatest humanitarians, once said, _"It's not how much we give but how much love we put into giving."_ This powerful message perfectly reflects our values at Soy United FC, where we believe in the importance of not just giving, but giving with heart and purpose. Guided by our motto, _“Help One To Help Another,”_ we had the incredible opportunity to visit the Harvest of Hope Africa Orphanage (HOHA) in Matayos, Busia County  this past Saturday.<br><b>A Day of Compassion and Connection</b>
                        These resilient young souls, who have faced so many challenges in life, welcomed us with open arms and bright smiles. We spent the day engaging in fun activities, sharing stories, and offering words of encouragement and love. The joy and laughter shared that day will forever remain in our hearts.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Supporting the Next Generation</h2>
                        <p class="blog-excerpt-1">At Soy United FC, we recognize the importance of nurturing the next generation—not only on the football field but in life. During our visit, we were able to provide essential supplies to help meet the daily needs of the children. From food items to clothing and educational materials, these donations are just one small way we can help ensure that these young ones have the resources they need to thrive.<br><b> A call for Support</b><br>
                        However, the work doesn't end here. The children of Harvest of Hope Africa need continued support, and we encourage anyone who is able to contribute to this noble cause. Whether it's through donations, volunteering, or simply spreading the word, every little bit makes a difference in the lives of these children. You can get in touch with HOHA's founder, Mr. Fredrick Munuku at 0705814936  to learn how you can help.

                        #SoyNiYetu #WillToWin #GivingBack #HopeForTheFuture

                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/Orphanage5.jpg" alt="Blog Image 2">
                    </div>
                </div>
                `;
                break;
        case 'blog3':
            heroImage.src = './public/foundation/blog-images/WhatsApp Image 2024-08-13 at 23.09.00 (1).jpeg'; 
            content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-13 at 23.09.00 (2).jpg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1"> Soy United Community Open Tournament: A Celebration of Talent, Teamwork, and Triumph</h2>
                        <p class="blog-excerpt-1">We are thrilled to announce the successful completion of the Soy United Community Open Tournament, an exciting event that brought together young athletes from all corners of Likuyani Sub-County and beyond. This tournament was not just a competition; it was a celebration of unity, sportsmanship, and the boundless potential of our youth. This year, we proudly opened the tournament to both boys' and girls' teams, ensuring that everyone had the chance to showcase their talent and passion for the beautiful game. The Ivugwi Grounds in Soy became a hub of energy, determination, and camaraderie as teams from various regions came together to compete and connect.
</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Empowering Our Community</h2><p class="blog-excerpt-1">At Soy United, we believe in giving back to the community. In the spirit of this belief, we donated brand-new jerseys to all participating teams, ensuring every player had the gear they needed to step onto the pitch with confidence. In addition, we supported our female athletes by providing sanitary pads, recognizing the importance of addressing their needs both on and off the field.
                    </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-13 at 23.09.03 (1).jpg" alt="Blog Image 2">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-13 at 23.09.02.jpg" alt="Blog Image 1">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Honoring Excellence</h2>
                        <p class="blog-excerpt-1">The tournament was filled with incredible performances, and we were proud to reward the best of the best with trophies, cash prizes, and special recognition. These tokens of appreciation were given to inspire our young players to continue pursuing their passion and to celebrate their dedication and hard work.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-text">
                        <h2 class="blog-title-1">Nurturing Future Stars</h2>
                        <p class="blog-excerpt-1">One of the most rewarding aspects of this event was the discovery of new talent. We are excited to announce that several standout players have been invited to join Soy United FC, where they will have the opportunity to hone their skills and compete at a higher level. <br>
                        The Soy United Community Open Tournament was a huge success, and it left a lasting impact on everyone involved. We are already looking forward to next year's event, where we hope to continue building a brighter future for our youth through the power of sports.
                        Stay tuned for more updates as we continue to uplift, inspire, and empower our community!
                            </p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-08-13 at 23.09.00 (3).jpg" alt="Blog Image 2">
                    </div>
                </div>
                `;
            break;
        
            case 'blog4':
                heroImage.src = './public/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.55 AM.jpg'; 
                content = `
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.19.21 AM.jpg" alt="Blog Image 1">
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
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.51 AM.jpg" alt="Blog Image 2">
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-image-1">
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.15.57 AM.jpg" alt="Blog Image 1">
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
                        <img src="./public/foundation/blog-images/WhatsApp Image 2024-09-04 at 11.19.22 AM.jpg" alt="Blog Image 2">
                    </div>
                </div>

                `;
                break;
                case 'blog5':
            heroImage.src = './public/foundation/blog-images/mathare1.jpg'; 
            content = `
            <div class="blog-item">
                <div class="blog-image-1">
                    <img src="./public/foundation/blog-images/mathare2.jpg">
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
                    <img src="./public/foundation/blog-images/mathare3.jpg">
                </div>
            </div>
            `;
            break;





        default:
            heroImage.src = './default-hero-image.jpg'; 
            content = '<p>No content available.</p>';
    }

        contentArea.innerHTML = content; 
}

      
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            const results = regex.exec(location.search);
            return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : '';
        }

     
        document.addEventListener('DOMContentLoaded', function() {
            const newsId = getUrlParameter('newsId');
            const contentArea = document.getElementById('blog-content');
            if (newsId) {
                loadContent(newsId); 
            } else {
                contentArea.innerHTML = '<p>No content available.</p>'; 
            }
});