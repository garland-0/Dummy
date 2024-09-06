 // Contact form popup functionality
            const contactButton = document.getElementById('contactButton');
            const contactPopup = document.getElementById('contactPopup');
            const closePopup = document.querySelector('.close-popup');
            const contactForm = document.getElementById('contactForm');

            contactButton.addEventListener('click', () => {
                contactPopup.style.display = 'block';
            });

            closePopup.addEventListener('click', () => {
                contactPopup.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === contactPopup) {
                    contactPopup.style.display = 'none';
                }
            });

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                })
                .then(response => response.text())
                .then(result => {
                    alert('Thank you for your feedback. We will get back to you soon!');
                    contactPopup.style.display = 'none';
                    contactForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error sending your feedback. Please try again later.');
                });
        });