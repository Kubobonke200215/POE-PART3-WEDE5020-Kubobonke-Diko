/**
 * main.js - General interactivity for Siyakhana Legal Advice Centre website.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Chat widget interaction
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            alert('Connecting you to Siyakhana Legal virtual assistant... (Live chat widget coming soon)');
        });
    }

    // Dynamic copyright year update
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} Siyakhana Legal Advice Centre. All rights Reserved.`;
    }

    // Mobile Navigation Toggle support
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (mobileMenuToggle && siteNav) {
        mobileMenuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactform");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form refresh

            // Optional: Run your validation checks here first

            // Submit via EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS credentials
            emailjs.sendForm('service_oylm7v1', 'template_buyce9u', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Thank you! Your message has been successfully sent to Siyakhana Legal Advice Centre.");
                    contactForm.reset(); // Clear the form
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Oops! Something went wrong while sending your message. Please try again later.");
                });
        });
    }
});

<script>
        document.addEventListener("DOMContentLoaded", function () {
            const enquiryForm = document.getElementById("enquiryForm");

            if (enquiryForm) {
                enquiryForm.addEventListener("submit", function (event) {
                    event.preventDefault(); // Prevent page refresh

                    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS credentials
                    emailjs.sendForm('service_oylm7v1', 'template_buyce9u', this)
                        .then(function(response) {
                            console.log('SUCCESS!', response.status, response.text);
                            alert("Enquiry submitted successfully! Siyakhana Legal will get back to you soon.");
                            enquiryForm.reset(); // Clear the form
                        }, function(error) {
                            console.log('FAILED...', error);
                            alert("Oops! Something went wrong while submitting your enquiry. Please try again.");
                        });
                });
            }
        });
    </script>
</body>
</html>