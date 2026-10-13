/**
 * validation.js - Form validation with inline red error messages for contact and enquiry forms.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Contact Form Validation
    const contactForm = document.getElementById('contactform') || document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;

            const fullname = contactForm.querySelector('input[name="fullname"]');
            const phone = contactForm.querySelector('input[name="phone"]');
            const email = contactForm.querySelector('input[name="email"]');
            const comment = contactForm.querySelector('textarea[name="comment"]');

            // Validate Full Name
            if (fullname) {
                if (fullname.value.trim().length < 3) {
                    isValid = false;
                    showError(fullname, 'Full name must be at least 3 characters.');
                } else {
                    clearError(fullname);
                }
            }

            // Validate Phone Number (South African format support)
            const phoneRegex = /^(\+27|0)[0-9]{9}$/;
            if (phone) {
                if (!phoneRegex.test(phone.value.trim().replace(/\s+/g, ''))) {
                    isValid = false;
                    showError(phone, 'Please enter a valid phone number (e.g., 0418185643 or +27...).');
                } else {
                    clearError(phone);
                }
            }

            // Validate Email Address
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email) {
                if (!emailRegex.test(email.value.trim())) {
                    isValid = false;
                    showError(email, 'Please enter a valid email address.');
                } else {
                    clearError(email);
                }
            }

            // Validate Message/Comment
            if (comment) {
                if (comment.value.trim() === '') {
                    isValid = false;
                    showError(comment, 'Message cannot be empty.');
                } else {
                    clearError(comment);
                }
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                e.preventDefault();
                alert('Thank you! Your message has been successfully submitted to Siyakhana Legal Advice Centre.');
                contactForm.reset();
            }
        });
    }

    // 2. Enquiry Form Validation (Enquiry.html) - Inline Red Errors
    const enquirySubmitBtn = document.querySelector('.submit-btn');
    if (enquirySubmitBtn) {
        enquirySubmitBtn.addEventListener('click', (e) => {
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const category = document.getElementById('category');
            const message = document.getElementById('message');

            let isValid = true;

            // Validate Full Name
            if (fullname) {
                if (fullname.value.trim().length < 3) {
                    isValid = false;
                    showError(fullname, 'Full Name is required and must be at least 3 characters.');
                } else {
                    clearError(fullname);
                }
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email) {
                if (!emailRegex.test(email.value.trim())) {
                    isValid = false;
                    showError(email, 'A valid Email Address is required.');
                } else {
                    clearError(email);
                }
            }

            // Validate Category
            if (category) {
                if (category.value === '') {
                    isValid = false;
                    showError(category, 'Please select an Enquiry Category.');
                } else {
                    clearError(category);
                }
            }

            // Validate Message
            if (message) {
                if (message.value.trim() === '') {
                    isValid = false;
                    showError(message, 'Please provide a specific request message.');
                } else {
                    clearError(message);
                }
            }

            if (!isValid) {
                e.preventDefault(); // Prevents submission and displays red inline text instead of an alert
            } else {
                e.preventDefault();
                alert('Enquiry submitted successfully! Siyakhana Legal will get back to you soon.');
            }
        });
    }

    // Helper function to display bright red error text below fields
    function showError(inputElement, message) {
        inputElement.style.borderColor = '#d9534f';
        let errorSpan = inputElement.nextElementSibling;
        
        if (!errorSpan || !errorSpan.classList.contains('error-message')) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);
        }
        
        errorSpan.style.color = '#d9534f'; // Bright red error color
        errorSpan.style.fontSize = '0.85rem';
        errorSpan.style.marginTop = '4px';
        errorSpan.style.display = 'block';
        errorSpan.textContent = message;
    }

    // Helper function to clear error state when valid
    function clearError(inputElement) {
        inputElement.style.borderColor = '#ccc';
        const errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = '';
        }
    }
});